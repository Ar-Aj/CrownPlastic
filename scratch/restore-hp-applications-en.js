/**
 * restore-hp-applications-en.js
 * Restores HP_APPLICATIONS constant (English locale) which was accidentally
 * overwritten with French strings. HP_APPLICATIONSFr stays French.
 */
const fs = require('fs');

const hpFile = 'src/config/productDetails/pvcHighPressurePipesData.ts';
let content = fs.readFileSync(hpFile, 'utf8');

// The HP_APPLICATIONS block now incorrectly contains French (same as HP_APPLICATIONSFr).
// Strategy: find the HP_APPLICATIONS block (it comes BEFORE HP_APPLICATIONSFr),
// and restore it to English.

// Find the two blocks:
const idxAPP = content.indexOf('const HP_APPLICATIONS = [');
const idxFr  = content.indexOf('const HP_APPLICATIONSFr = [');

if (idxAPP === -1 || idxFr === -1 || idxAPP >= idxFr) {
  console.log('ERROR: Cannot find block positions. idxAPP=' + idxAPP + ' idxFr=' + idxFr);
  process.exit(1);
}

// Extract the HP_APPLICATIONS block (from idxAPP to just before idxFr)
const beforeFr = content.slice(idxAPP, idxFr);
console.log('HP_APPLICATIONS block currently:\n' + beforeFr);

const correctEnglish = `const HP_APPLICATIONS = [
  'Potable water supply and distribution networks across the UAE',
  'Industrial chemical processing and fluid transport',
  'Municipal sewerage and wastewater management systems',
  'Agricultural irrigation and high-pressure water delivery in GCC',
  'Electrical and telecommunications ducting applications',
  'HVAC systems and cooling water circulation',
  'Swimming pool and water feature installations',
  'Desalination plant auxiliary piping',
];\n`;

const restored = content.slice(0, idxAPP) + correctEnglish + content.slice(idxFr);
fs.writeFileSync(hpFile, restored, 'utf8');
console.log('\n✅ HP_APPLICATIONS restored to English. File saved.');
