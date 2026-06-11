/**
 * restore-english-base-arrays.js
 *
 * Restores the base English constants that were accidentally overwritten with French.
 * Uses contextual block replacement (find block start → closing bracket) to avoid
 * collateral damage to the *Fr variants.
 *
 * Targets:
 *   1. pvcHighPressurePipesData.ts → HP_FEATURES (8 items)
 *   2. upvcDrainageData.ts → SHARED_FEATURES (8 items) + SHARED_APPLICATIONS (8 items)
 */
const fs = require('fs');

function replaceConstBlock(content, constName, newBody, filename) {
  const marker = `const ${constName} = [`;
  const idx = content.indexOf(marker);
  if (idx === -1) {
    console.log(`⚠️  ${filename} — "${constName}" NOT FOUND`);
    return content;
  }
  // Find the closing ];
  let depth = 0, end = -1;
  for (let i = idx; i < content.length; i++) {
    if (content[i] === '[') depth++;
    if (content[i] === ']') { depth--; if (depth === 0) { end = i + 1; break; } }
  }
  if (end === -1) {
    console.log(`⚠️  ${filename} — "${constName}" closing bracket NOT FOUND`);
    return content;
  }
  // Consume trailing semicolon
  let afterEnd = end;
  while (afterEnd < content.length && (content[afterEnd] === ';' || content[afterEnd] === '\r')) afterEnd++;

  const replacement = `const ${constName} = [\n${newBody}\n];`;
  console.log(`✅ ${filename} — "${constName}" restored to English (${newBody.split('\n').length} items)`);
  return content.slice(0, idx) + replacement + content.slice(afterEnd);
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. pvcHighPressurePipesData.ts — HP_FEATURES
// ─────────────────────────────────────────────────────────────────────────────
const hpFile = 'src/config/productDetails/pvcHighPressurePipesData.ts';
let hp = fs.readFileSync(hpFile, 'utf8');

const HP_FEATURES_EN = `  'High-pressure tolerance up to PN 16 and Schedule 80 ratings',
  'Excellent chemical resistance against corrosive industrial fluids',
  'Full compliance with ISO, DIN, BS, and ASTM international standards',
  'Corrosion-resistant PVC-U ensures long service life in Gulf climate conditions',
  'Smooth internal bore for optimised flow rates and reduced scale build-up',
  'Lightweight construction for easy handling and efficient installation',
  'UV-stabilised formulation suited to Middle East outdoor exposure',
  'ISO 9001:2015 certified production in the UAE',`;

hp = replaceConstBlock(hp, 'HP_FEATURES', HP_FEATURES_EN, 'pvcHighPressurePipesData.ts');
fs.writeFileSync(hpFile, hp, 'utf8');

// ─────────────────────────────────────────────────────────────────────────────
// 2. upvcDrainageData.ts — SHARED_FEATURES + SHARED_APPLICATIONS
// ─────────────────────────────────────────────────────────────────────────────
const upFile = 'src/config/productDetails/upvcDrainageData.ts';
let up = fs.readFileSync(upFile, 'utf8');

const SHARED_FEATURES_EN = `  'High impact resistance for long-service installations in extreme Gulf temperatures',
  'Smooth internal bore prevents scaling and blockages',
  'Chemical and corrosion resistant \\u2014 unaffected by UAE soil and groundwater conditions',
  'Lightweight yet rigid for easy handling and installation',
  'Solvent cement and ring-seal jointing options',
  'UV stabilised formulation for Middle East outdoor exposure',
  'ISO 9001:2015 certified production at our Umm Al Quwain, UAE facility',
  '50+ year expected service life \\u2014 trusted by GCC contractors',`;

const SHARED_APPLICATIONS_EN = `  'Above-ground soil and waste discharge systems across the UAE',
  'Underground sewerage networks for Dubai and Abu Dhabi developments',
  'Rainwater drainage systems suited to Gulf climate conditions',
  'Building internal drainage stacks',
  'Commercial and residential plumbing in the GCC',
  'Hospital and hotel sanitary systems',
  'Industrial effluent disposal in UAE free zones',
  'Town planning and municipal infrastructure projects',`;

up = replaceConstBlock(up, 'SHARED_FEATURES', SHARED_FEATURES_EN, 'upvcDrainageData.ts');
up = replaceConstBlock(up, 'SHARED_APPLICATIONS', SHARED_APPLICATIONS_EN, 'upvcDrainageData.ts');
fs.writeFileSync(upFile, up, 'utf8');

console.log('\n=== DATA RESTORATION COMPLETE ===');
