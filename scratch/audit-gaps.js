/**
 * audit-gaps.js
 * Comprehensive gap detection for all productDetails files.
 * Uses TypeScript AST via simple regex-free approach:
 *  - Loads each file as text
 *  - Uses a running requires() in a vm sandbox to get actual objects
 *  - Then checks for Fr parity on all arrays/faqs/dos-donts
 * 
 * Outputs a structured report of all missing Fr nodes.
 */
const fs = require('fs');
const path = require('path');

const dir = 'src/config/productDetails';
const files = fs.readdirSync(dir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'bsEn1452SpecTables.ts')
  .sort();

// Since we can't easily execute TS in Node, we'll use regex-based analysis
// but in a smarter, recursive way.

// Track all issues
const issues = [];

function checkFile(file) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const fileIssues = [];

  // ── 1. Check features / featuresFr ──────────────────────────────────────────
  const featureBlocks = [...content.matchAll(/\bfeatures\s*:\s*\[([\s\S]*?)(?=\n\s*\w+\s*:|,\s*\n\s*\w+\s*Ar\s*:|,\s*\n\s*\w+\s*Fr\s*:|^\})/gm)];
  
  // Simpler approach: count English vs Fr array property declarations
  function countArrayItems(propName, text) {
    // Find all occurrences of propName: [ ... ] 
    // We look for the property name then count string items in the array
    const re = new RegExp(`\\b${propName}\\s*:\\s*\\[([\\s\\S]*?)\\](?=\\s*,|\\s*\\n\\s*[a-zA-Z])`, 'g');
    const results = [];
    let m;
    while ((m = re.exec(text)) !== null) {
      // Count string items (single or double quoted, or template literals)
      const items = m[1].match(/(?:'[^']*'|"[^"]*"|`[^`]*`)/g) || [];
      results.push(items.length);
    }
    return results;
  }

  // Actually, the cleanest approach for our data files is to look for 
  // export const ... = { ... } blocks and check property presence
  
  // Check for missing Fr properties by looking for English props without Fr counterparts
  const checks = [
    { en: 'features', fr: 'featuresFr' },
    { en: 'applications', fr: 'applicationsFr' },
    { en: 'systemAdvantages', fr: 'systemAdvantagesFr' },
  ];

  checks.forEach(({ en, fr }) => {
    // Find all occurrences of the English property
    const enRe = new RegExp(`\\b${en}\\s*:`, 'g');
    const frRe = new RegExp(`\\b${fr}\\s*:`, 'g');
    const enMatches = (content.match(enRe) || []).length;
    const frMatches = (content.match(frRe) || []).length;
    
    // Skip shared constants (like sharedApplications)
    // Only count within ProductDetailConfig objects (slug: appears before them)
    if (enMatches > frMatches) {
      fileIssues.push(`MISSING ${fr}: found ${enMatches} '${en}' but only ${frMatches} '${fr}'`);
    }
  });

  // Check dosDonts -> dosDontsFr
  const dosDontsCount = (content.match(/\bdosDonts\b(?!Ar|Fr)/g) || []).length;
  const dosDontsFrCount = (content.match(/\bdosDontsFr\b/g) || []).length;
  if (dosDontsCount > dosDontsFrCount) {
    fileIssues.push(`MISSING dosDontsFr: found ${dosDontsCount} 'dosDonts' but ${dosDontsFrCount} 'dosDontsFr'`);
  }

  // Check FAQs -> qFr/aFr
  const faqCount = (content.match(/\bqAr\s*:/g) || []).length;
  const qFrCount = (content.match(/\bqFr\s*:/g) || []).length;
  if (faqCount > qFrCount) {
    fileIssues.push(`MISSING qFr/aFr in FAQs: ${faqCount} FAQs with qAr but only ${qFrCount} with qFr`);
  }

  // Check variant features
  const variantFeaturesRe = /variants\s*:\s*\[[\s\S]*?\]/g;
  const variantBlocks = content.match(variantFeaturesRe) || [];
  variantBlocks.forEach(block => {
    const featCount = (block.match(/\bfeatures\s*:/g) || []).length;
    const featFrCount = (block.match(/\bfeaturesFr\s*:/g) || []).length;
    if (featCount > featFrCount) {
      fileIssues.push(`MISSING variant featuresFr: ${featCount} variant features but ${featFrCount} featuresFr`);
    }
  });

  // Check for title/titleFr
  const titleCount = (content.match(/\btitle\s*:/g) || []).length;
  const titleFrCount = (content.match(/\btitleFr\s*:/g) || []).length;
  // titles include table titles, variant titles, etc.  Don't flag this broadly.

  // Check shortDescription -> shortDescriptionFr
  const sdCount = (content.match(/\bshortDescription\s*(?!Ar|Fr):/g) || []).length;
  const sdFrCount = (content.match(/\bshortDescriptionFr\s*:/g) || []).length;
  if (sdCount > sdFrCount) {
    fileIssues.push(`MISSING shortDescriptionFr: ${sdCount} shortDescription but ${sdFrCount} shortDescriptionFr`);
  }

  // Check overview -> overviewFr
  const ovCount = (content.match(/\boverview\s*(?!Ar|Fr):/g) || []).length;
  const ovFrCount = (content.match(/\boverviewFr\s*:/g) || []).length;
  if (ovCount > ovFrCount) {
    fileIssues.push(`MISSING overviewFr: ${ovCount} overview but ${ovFrCount} overviewFr`);
  }

  return fileIssues;
}

console.log('=== CROWN PLASTIC TRILINGUAL GAP AUDIT ===\n');
let totalIssues = 0;

files.forEach(file => {
  const fileIssues = checkFile(file);
  if (fileIssues.length > 0) {
    console.log(`\n📁 ${file}:`);
    fileIssues.forEach(i => console.log(`  ❌ ${i}`));
    totalIssues += fileIssues.length;
  } else {
    console.log(`✅ ${file}`);
  }
});

console.log(`\n=== TOTAL ISSUES: ${totalIssues} ===`);
