/**
 * linguistic-scan.js
 * Extracts every string from featuresFr, applicationsFr, systemAdvantagesFr arrays
 * and classifies it as French or English.
 * 
 * Heuristic: A string is "likely English" if it contains no French-specific
 * characters/patterns AND contains common English-only words.
 */
const fs = require('fs');
const path = require('path');

const TARGET_FILES = [
  'pvcPressureData.ts',
  'pvcHighPressurePipesData.ts',
  'pvcHighPressureFittingsData.ts',
  'drainageData.ts',
  'upvcDrainageData.ts',
  'upvcDrainageFittingsData.ts',
];

const dir = 'src/config/productDetails';

// English indicator words/patterns that should NOT appear in French text
const ENGLISH_PATTERNS = [
  /\bResistant\b/i,
  /\bresistance\b/i, // NOTE: "résistance" has accent - unaccented is English
  /\bHigh\b/,
  /\bLong\b/,
  /\bLight\b/,
  /\bSuitable\b/i,
  /\bAbove.ground\b/i,
  /\bBelow.ground\b/i,
  /\bExcellent\b/i,
  /\bHygienic\b/i,
  /\bCorrosion\b/i,
  /\bflexibility\b/i,
  /\bInstall/i,
  /\bBuilding/i,
  /\bsewer/i,
  /\bdrainage\b/i, // French: "drainage" BUT in context "drainage systems" is English
  /\bwater\b/i,
  /\bsupply\b/i,
  /\bsystem\b/i, // French: "système" (with accent)
  /\bpressure\b/i, // French: "pression"
  /\bpipe\b/i, // French: "tuyau"
  /\bapplication\b/i, // French: "application" is same but context matters
  /\bnetwork\b/i, // French: "réseau"
  /\bEasy\b/i,
  /\bSafe\b/i,
  /\bflow\b/i,
  /\bchemical\b/i,
  /\bservice life\b/i,
  /\blong-lasting\b/i,
  /\bjointing\b/i,
  /\bsolvent\b/i,
  /\bcement\b/i,
];

// French indicators - if any present, string is likely French
const FRENCH_INDICATORS = /[àâéèêëïîôùûüÿçœæÀÂÉÈÊËÏÎÔÙÛÜŸÇŒÆ]|(\b(les|des|pour|dans|avec|est|sont|une|selon|les|ou|sur|de|du|en|et|au|aux|par|cette|tout|bien|plus|très|sans|aucun|après|avant|entre|sous|hors|lors|votre)\b)/i;

function classifyString(str) {
  if (FRENCH_INDICATORS.test(str)) return 'FR';
  
  // Check for English patterns  
  const englishHits = ENGLISH_PATTERNS.filter(p => p.test(str));
  if (englishHits.length >= 1) return 'EN';
  
  return 'UNKNOWN'; // Could be technical-only (codes, specs)
}

function extractFrArrayStrings(content, propName) {
  const results = [];
  // Match property: [ ... ]  — handle multiline arrays
  const re = new RegExp(`\\b${propName}\\s*:\\s*\\[([\\s\\S]*?)\\](?=\\s*,|\\s*\\n\\s*[a-zA-Z_])`, 'g');
  let m;
  while ((m = re.exec(content)) !== null) {
    const inner = m[1];
    // Extract all string literals
    const strRe = /(?:`([^`]*)`|'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")/g;
    let sm;
    const items = [];
    while ((sm = strRe.exec(inner)) !== null) {
      const val = (sm[1] || sm[2] || sm[3] || '').trim();
      if (val.length > 3) { // skip very short ones like single chars
        items.push(val);
      }
    }
    if (items.length > 0) results.push(items);
  }
  return results;
}

console.log('=== LINGUISTIC SCAN — featuresFr / applicationsFr / systemAdvantagesFr ===\n');

let totalEnglishStrings = 0;
const allIssues = {};

TARGET_FILES.forEach(file => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${file} not found`);
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const fileIssues = [];

  ['featuresFr', 'applicationsFr', 'systemAdvantagesFr'].forEach(prop => {
    const arrays = extractFrArrayStrings(content, prop);
    arrays.forEach((items, arrayIdx) => {
      items.forEach((str, strIdx) => {
        const lang = classifyString(str);
        if (lang === 'EN') {
          fileIssues.push({ prop, arrayIdx, strIdx, str });
          totalEnglishStrings++;
        }
      });
    });
  });

  if (fileIssues.length === 0) {
    console.log(`✅ ${file} — all Fr strings look French`);
  } else {
    console.log(`\n❌ ${file} — ${fileIssues.length} English string(s) found in *Fr arrays:`);
    fileIssues.forEach(({ prop, arrayIdx, str }) => {
      console.log(`   [${prop}[${arrayIdx}]] → "${str.substring(0, 100)}"`);
    });
    allIssues[file] = fileIssues;
  }
});

console.log(`\n=== TOTAL ENGLISH STRINGS IN *Fr ARRAYS: ${totalEnglishStrings} ===`);
if (totalEnglishStrings === 0) {
  console.log('✅ All *Fr arrays contain French text. No overrides needed.');
}
