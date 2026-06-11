/**
 * fix-all-fr-arrays-v2.js
 * Line-by-line replacement approach to handle CRLF/LF differences.
 * Finds and replaces individual string lines inside the Fr constants.
 */
const fs = require('fs');

// ─────────────────────────────────────────────────────────
// FILE 1: pvcHighPressurePipesData.ts
// Strategy: target each individual English string line inside
// HP_FEATURESFr, HP_APPLICATIONSFr, HP_DOS_DONTSFr
// ─────────────────────────────────────────────────────────
const hpFile = 'src/config/productDetails/pvcHighPressurePipesData.ts';
let hp = fs.readFileSync(hpFile, 'utf8');

// We'll do line-by-line replacements using a simple approach:
// split, map, rejoin
function replaceLines(content, replacements) {
  let applied = 0;
  replacements.forEach(([from, to, desc]) => {
    if (content.includes(from)) {
      content = content.split(from).join(to);
      console.log('✅ ' + desc);
      applied++;
    } else {
      console.log('⚠️  NOT FOUND: ' + desc.substring(0, 80));
    }
  });
  return { content, applied };
}

// HP_FEATURESFr replacements (each English line → French)
const featFixes = [
  ["  'High-pressure tolerance up to PN 16 and Schedule 80 ratings',",
   "  'Tolérance haute pression jusqu\\'à PN 16 et aux cotes Schedule 80',",
   'HP_FEATURESFr[0]: tolerance'],
  ["  'Excellent chemical resistance against corrosive industrial fluids',",
   "  'Excellente résistance chimique contre les fluides industriels corrosifs',",
   'HP_FEATURESFr[1]: chemical resistance'],
  ["  'Full compliance with ISO, DIN, BS, and ASTM international standards',",
   "  'Conformité totale aux normes internationales ISO, DIN, BS et ASTM',",
   'HP_FEATURESFr[2]: compliance'],
  ["  'Corrosion-resistant PVC-U ensures long service life in Gulf climate conditions',",
   "  'Le PVC-U résistant à la corrosion garantit une longue durée de service dans le climat du Golfe',",
   'HP_FEATURESFr[3]: corrosion resistant'],
  ["  'Smooth internal bore for optimised flow rates and reduced scale build-up',",
   "  'Alésage interne lisse pour des débits optimisés et une réduction des dépôts calcaires',",
   'HP_FEATURESFr[4]: smooth bore'],
  ["  'Lightweight construction for easy handling and efficient installation',",
   "  'Construction légère pour une manutention facile et une installation efficace',",
   'HP_FEATURESFr[5]: lightweight'],
  ["  'UV-stabilised formulation suited to Middle East outdoor exposure',",
   "  'Formulation stabilisée aux UV adaptée à l\\'exposition extérieure au Moyen-Orient',",
   'HP_FEATURESFr[6]: UV'],
  ["  'ISO 9001:2015 certified production in the UAE',",
   "  'Production certifiée ISO 9001:2015 dans le UAE',",
   'HP_FEATURESFr[7]: certified production'],
];

// HP_APPLICATIONSFr replacements
const appFixes = [
  ["  'Potable water supply and distribution networks across the UAE',",
   "  'Réseaux d\\'alimentation et de distribution d\\'eau potable dans tout le UAE',",
   'HP_APPLICATIONSFr[0]: potable water'],
  ["  'Industrial chemical processing and fluid transport',",
   "  'Traitement chimique industriel et transport de fluides',",
   'HP_APPLICATIONSFr[1]: chemical processing'],
  ["  'Municipal sewerage and wastewater management systems',",
   "  'Systèmes municipaux d\\'assainissement et de gestion des eaux usées',",
   'HP_APPLICATIONSFr[2]: sewerage'],
  ["  'Agricultural irrigation and high-pressure water delivery in GCC',",
   "  'Irrigation agricole et acheminement d\\'eau à haute pression dans le GCC',",
   'HP_APPLICATIONSFr[3]: irrigation'],
  ["  'Electrical and telecommunications ducting applications',",
   "  'Applications de canalisations électriques et de télécommunications',",
   'HP_APPLICATIONSFr[4]: electrical'],
  ["  'HVAC systems and cooling water circulation',",
   "  'Systèmes HVAC et circulation des eaux de refroidissement',",
   'HP_APPLICATIONSFr[5]: HVAC'],
  ["  'Swimming pool and water feature installations',",
   "  'Installations de piscines et de fontaines',",
   'HP_APPLICATIONSFr[6]: swimming pool'],
  ["  'Desalination plant auxiliary piping',",
   "  'Canalisations auxiliaires de centrales de dessalement',",
   'HP_APPLICATIONSFr[7]: desalination'],
];

// HP_DOS_DONTSFr replacements
// The Fr and English dos/donts share the same lines. We need context.
// The trick: only HP_DOS_DONTSFr uses these English strings (HP_DOS_DONTS has the same ones).
// We replace the HP_DOS_DONTSFr block lines carefully.
// Since HP_DOS_DONTS and HP_DOS_DONTSFr have identical content, we need to be smarter.
// Solution: find the HP_DOS_DONTSFr block and do targeted replacement only within it.

function replaceDosDosnts(content) {
  const START = 'const HP_DOS_DONTSFr = {';
  const END   = '};';
  const si = content.indexOf(START);
  if (si === -1) { console.log('⚠️  HP_DOS_DONTSFr block NOT FOUND'); return content; }
  // Find the matching closing brace
  let depth = 0, ei = -1;
  for (let i = si; i < content.length; i++) {
    if (content[i] === '{') depth++;
    if (content[i] === '}') { depth--; if (depth === 0) { ei = i + 1; break; } }
  }
  if (ei === -1) { console.log('⚠️  HP_DOS_DONTSFr block END NOT FOUND'); return content; }

  const block = content.slice(si, ei);
  const newBlock = block
    .replace("'Follow standard solvent welding or mechanical joining procedures',",
             "'Suivre les procédures standard de soudage au solvant ou d\\'assemblage mécanique',")
    .replace("'Ensure pipes are supported at recommended intervals to prevent sagging',",
             "'S\\'assurer que les tuyaux sont supportés aux intervalles recommandés pour éviter l\\'affaissement',")
    .replace("'Verify that the chosen pressure rating exceeds maximum system pressure',",
             "'Vérifier que la valeur nominale de pression choisie dépasse la pression maximale du système',")
    .replace("'Conduct pressure testing before full commissioning',",
             "'Effectuer des tests de pression avant la mise en service complète',")
    .replace("'Do not exceed the maximum sustained working pressure for the temperature',",
             "'Ne pas dépasser la pression de travail maximale soutenue pour la température donnée',")
    .replace("'Avoid dropping or dragging pipes on rough surfaces',",
             "'Éviter de laisser tomber ou de traîner les tuyaux sur des surfaces rugueuses',")
    .replace("'Do not use for compressed air or gas transport unless specifically rated',",
             "'Ne pas utiliser pour le transport d\\'air comprimé ou de gaz sauf si spécifiquement homologué',")
    .replace("'Avoid prolonged UV exposure without adequate protection',",
             "'Éviter l\\'exposition prolongée aux UV sans protection adéquate',");

  if (block === newBlock) {
    console.log('⚠️  HP_DOS_DONTSFr: no changes detected inside block');
  } else {
    const diff = block.split('\n').filter((l,i) => l !== newBlock.split('\n')[i]).length;
    console.log('✅ HP_DOS_DONTSFr: ' + diff + ' line(s) translated');
  }

  return content.slice(0, si) + newBlock + content.slice(ei);
}

console.log('\n--- pvcHighPressurePipesData.ts ---');
const r1 = replaceLines(hp, featFixes);
hp = r1.content;
const r2 = replaceLines(hp, appFixes);
hp = r2.content;
hp = replaceDosDosnts(hp);

fs.writeFileSync(hpFile, hp, 'utf8');
console.log('Saved ' + hpFile);

// ─────────────────────────────────────────────────────────
// FILE 2: pvcPressureData.ts — fix 3 contaminated strings
// ─────────────────────────────────────────────────────────
const pvFile = 'src/config/productDetails/pvcPressureData.ts';
let pv = fs.readFileSync(pvFile, 'utf8');

console.log('\n--- pvcPressureData.ts ---');

// Check the actual quoting used
const pvLines = pv.split('\n');
const transportLine = pvLines.find(l => l.includes('fluvial'));
const procesLine    = pvLines.find(l => l.includes('process'));
const maquillLine   = pvLines.find(l => l.includes('Maquillage') || l.includes('maquillage'));
console.log('Transport line found:  ' + (transportLine || 'NOT FOUND').trim());
console.log('Process line found:    ' + (procesLine || 'NOT FOUND').trim());
console.log('Maquillage line found: ' + (maquillLine || 'NOT FOUND').trim());
