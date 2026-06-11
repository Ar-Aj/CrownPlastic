/**
 * deep-audit.js
 * Checks that *Fr arrays are not just English copies and have correct lengths.
 * Also checks dosDontsFr structure.
 */
const fs = require('fs');
const path = require('path');

const dir = 'src/config/productDetails';
const PRIORITY_FILES = [
  'pvcPressureData.ts',
  'pvcHighPressurePipesData.ts', 
  'pvcHighPressureFittingsData.ts',
  'drainageData.ts',
  'upvcDrainageData.ts',
  'upvcDrainageFittingsData.ts',
  'fabricationsData.ts',
  'conduitData.ts',
  'ductData.ts',
  'pvcDuctPipesData.ts',
  'pvcConduitPipesData.ts',
  'hdpePipesData.ts',
  'pprData.ts',
  'pprPipesData.ts',
  'pvcSch40FittingsData.ts',
];

function extractArrays(content, propName) {
  // Extract content inside arrays for a given property name
  const results = [];
  const re = new RegExp(`\\b${propName}\\s*:\\s*\\[([\\s\\S]*?)\\]`, 'g');
  let m;
  while ((m = re.exec(content)) !== null) {
    const inner = m[1];
    // Count string items
    const items = [];
    const strRe = /(?:'([^']*)'|"([^"]*)")`?/g;
    let sm;
    while ((sm = strRe.exec(inner)) !== null) {
      items.push(sm[1] || sm[2] || '');
    }
    if (items.length > 0) results.push(items);
  }
  return results;
}

function isEnglishOnly(str) {
  // Simple heuristic: if contains accented French chars or Arabic, it's translated
  return !/[àâéèêëïîôùûüÿçœæÀÂÉÈÊËÏÎÔÙÛÜŸÇŒÆ\u0600-\u06FF]/.test(str);
}

function checkFeaturesParity(content, file) {
  const issues = [];
  
  // Find all export const blocks
  const exportBlocks = [...content.matchAll(/export\s+const\s+(\w+)\s*(?::\s*\w+)?\s*=\s*\{([\s\S]*?)^};/gm)];
  
  // Check each exported config
  const pairs = [
    { en: 'features', fr: 'featuresFr' },
    { en: 'applications', fr: 'applicationsFr' },
    { en: 'systemAdvantages', fr: 'systemAdvantagesFr' },
  ];

  pairs.forEach(({ en, fr }) => {
    const enRe = new RegExp(`(?<![a-zA-Z])${en}(?!Ar|Fr)\\s*:\\s*\\[([\\s\\S]*?)\\](?=\\s*,|\\s*\\n\\s*[a-z])`, 'g');
    const frRe = new RegExp(`${fr}\\s*:\\s*\\[([\\s\\S]*?)\\](?=\\s*,|\\s*\\n\\s*[a-z])`, 'g');
    
    const enMs = [...content.matchAll(enRe)];
    const frMs = [...content.matchAll(frRe)];
    
    enMs.forEach((em, idx) => {
      const enItems = (em[1].match(/(?:'[^']*'|"[^"]*"|`[^`]*`)/g) || []);
      const frMatch = frMs[idx];
      if (!frMatch) {
        issues.push(`  ❌ ${fr}[${idx}] MISSING (en has ${enItems.length} items)`);
        return;
      }
      const frItems = (frMatch[1].match(/(?:'[^']*'|"[^"]*"|`[^`]*`)/g) || []);
      if (enItems.length !== frItems.length) {
        issues.push(`  ❌ ${fr}[${idx}] LENGTH MISMATCH: en=${enItems.length} fr=${frItems.length}`);
      } else {
        // Check if Fr items are identical to En (untranslated)
        const identical = frItems.filter((fi, i) => fi === enItems[i]);
        if (identical.length === frItems.length && frItems.length > 0) {
          issues.push(`  ⚠️  ${fr}[${idx}] appears UNTRANSLATED (${frItems.length} items identical to English)`);
        } else {
          issues.push(`  ✅ ${fr}[${idx}] OK (${frItems.length} items)`);
        }
      }
    });
  });

  return issues;
}

console.log('=== DEEP PARITY AUDIT ===\n');

PRIORITY_FILES.forEach(file => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${file} NOT FOUND`);
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  
  console.log(`\n📁 ${file}:`);
  const issues = checkFeaturesParity(content, file);
  issues.forEach(i => console.log(i));

  // Also check dosDontsFr presence
  const dosDontsCount = (content.match(/\bdosDonts\b(?!Ar|Fr)/g) || []).length;
  const dosDontsFrCount = (content.match(/\bdosDontsFr\b/g) || []).length;
  const dosDontsArCount = (content.match(/\bdosDontsAr\b/g) || []).length;
  console.log(`  dosDonts: en=${dosDontsCount} ar=${dosDontsArCount} fr=${dosDontsFrCount}`);
  
  // Check overviewFr
  const ovEn = (content.match(/\boverview\s*(?!Ar|Fr):/g) || []).length;
  const ovFr = (content.match(/\boverviewFr\s*:/g) || []).length;
  console.log(`  overview: en=${ovEn} fr=${ovFr}`);
  
  // Check titleFr
  const titleEn = (content.match(/\btitleFr\s*:/g) || []).length;
  console.log(`  titleFr present: ${titleEn}`);
  
  // Check FAQs
  const faqEn = (content.match(/\bqAr\s*:/g) || []).length;
  const faqFr = (content.match(/\bqFr\s*:/g) || []).length;
  if (faqEn > 0) console.log(`  FAQs: qAr=${faqEn} qFr=${faqFr}`);
});
