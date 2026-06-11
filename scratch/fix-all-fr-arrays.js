/**
 * fix-all-fr-arrays.js
 * Applies two sets of targeted string replacements:
 *
 * FILE 1: pvcHighPressurePipesData.ts
 *   - Replace HP_FEATURESFr (English copy) with genuine French
 *   - Replace HP_APPLICATIONSFr (English copy) with genuine French
 *   - Replace HP_DOS_DONTSFr (English copy) with genuine French
 *
 * FILE 2: pvcPressureData.ts
 *   - Fix 3 contaminated applicationsFr strings
 */

const fs = require('fs');

// ─────────────────────────────────────────────────────────
// FILE 1: pvcHighPressurePipesData.ts
// ─────────────────────────────────────────────────────────
const hpFile = 'src/config/productDetails/pvcHighPressurePipesData.ts';
let hp = fs.readFileSync(hpFile, 'utf8');

// HP_FEATURESFr — replace the English block with French
const HP_FEATURESFr_OLD = `const HP_FEATURESFr = [
  'High-pressure tolerance up to PN 16 and Schedule 80 ratings',
  'Excellent chemical resistance against corrosive industrial fluids',
  'Full compliance with ISO, DIN, BS, and ASTM international standards',
  'Corrosion-resistant PVC-U ensures long service life in Gulf climate conditions',
  'Smooth internal bore for optimised flow rates and reduced scale build-up',
  'Lightweight construction for easy handling and efficient installation',
  'UV-stabilised formulation suited to Middle East outdoor exposure',
  'ISO 9001:2015 certified production in the UAE',
];`;

const HP_FEATURESFr_NEW = `const HP_FEATURESFr = [
  'Tolérance haute pression jusqu\\'à PN 16 et aux cotes Schedule 80',
  'Excellente résistance chimique contre les fluides industriels corrosifs',
  'Conformité totale aux normes internationales ISO, DIN, BS et ASTM',
  'Le PVC-U résistant à la corrosion garantit une longue durée de service dans le climat du Golfe',
  'Alésage interne lisse pour des débits optimisés et une réduction des dépôts calcaires',
  'Construction légère pour une manutention facile et une installation efficace',
  'Formulation stabilisée aux UV adaptée à l\\'exposition extérieure au Moyen-Orient',
  'Production certifiée ISO 9001:2015 dans le UAE',
];`;

// HP_APPLICATIONSFr — replace the English block with French
const HP_APPLICATIONSFr_OLD = `const HP_APPLICATIONSFr = [
  'Potable water supply and distribution networks across the UAE',
  'Industrial chemical processing and fluid transport',
  'Municipal sewerage and wastewater management systems',
  'Agricultural irrigation and high-pressure water delivery in GCC',
  'Electrical and telecommunications ducting applications',
  'HVAC systems and cooling water circulation',
  'Swimming pool and water feature installations',
  'Desalination plant auxiliary piping',
];`;

const HP_APPLICATIONSFr_NEW = `const HP_APPLICATIONSFr = [
  'Réseaux d\\'alimentation et de distribution d\\'eau potable dans tout le UAE',
  'Traitement chimique industriel et transport de fluides',
  'Systèmes municipaux d\\'assainissement et de gestion des eaux usées',
  'Irrigation agricole et acheminement d\\'eau à haute pression dans le GCC',
  'Applications de canalisations électriques et de télécommunications',
  'Systèmes HVAC et circulation des eaux de refroidissement',
  'Installations de piscines et de fontaines',
  'Canalisations auxiliaires de centrales de dessalement',
];`;

// HP_DOS_DONTSFr — replace the English block with French
const HP_DOS_DONTSFr_OLD = `const HP_DOS_DONTSFr = {
  dos: [
    'Follow standard solvent welding or mechanical joining procedures',
    'Ensure pipes are supported at recommended intervals to prevent sagging',
    'Verify that the chosen pressure rating exceeds maximum system pressure',
    'Conduct pressure testing before full commissioning',
  ],
  donts: [
    'Do not exceed the maximum sustained working pressure for the temperature',
    'Avoid dropping or dragging pipes on rough surfaces',
    'Do not use for compressed air or gas transport unless specifically rated',
    'Avoid prolonged UV exposure without adequate protection',
  ],
};`;

const HP_DOS_DONTSFr_NEW = `const HP_DOS_DONTSFr = {
  dos: [
    'Suivre les procédures standard de soudage au solvant ou d\\'assemblage mécanique',
    'S\\'assurer que les tuyaux sont supportés aux intervalles recommandés pour éviter l\\'affaissement',
    'Vérifier que la valeur nominale de pression choisie dépasse la pression maximale du système',
    'Effectuer des tests de pression avant la mise en service complète',
  ],
  donts: [
    'Ne pas dépasser la pression de travail maximale soutenue pour la température donnée',
    'Éviter de laisser tomber ou de traîner les tuyaux sur des surfaces rugueuses',
    'Ne pas utiliser pour le transport d\\'air comprimé ou de gaz, sauf si spécifiquement homologué',
    'Éviter l\\'exposition prolongée aux UV sans protection adéquate',
  ],
};`;

let hpFixed = 0;

if (hp.includes(HP_FEATURESFr_OLD)) {
  hp = hp.replace(HP_FEATURESFr_OLD, HP_FEATURESFr_NEW);
  console.log('✅ pvcHighPressurePipesData.ts — HP_FEATURESFr: English → French');
  hpFixed++;
} else {
  console.log('⚠️  pvcHighPressurePipesData.ts — HP_FEATURESFr: TARGET NOT FOUND');
}

if (hp.includes(HP_APPLICATIONSFr_OLD)) {
  hp = hp.replace(HP_APPLICATIONSFr_OLD, HP_APPLICATIONSFr_NEW);
  console.log('✅ pvcHighPressurePipesData.ts — HP_APPLICATIONSFr: English → French');
  hpFixed++;
} else {
  console.log('⚠️  pvcHighPressurePipesData.ts — HP_APPLICATIONSFr: TARGET NOT FOUND');
}

if (hp.includes(HP_DOS_DONTSFr_OLD)) {
  hp = hp.replace(HP_DOS_DONTSFr_OLD, HP_DOS_DONTSFr_NEW);
  console.log('✅ pvcHighPressurePipesData.ts — HP_DOS_DONTSFr: English → French');
  hpFixed++;
} else {
  console.log('⚠️  pvcHighPressurePipesData.ts — HP_DOS_DONTSFr: TARGET NOT FOUND');
}

if (hpFixed > 0) {
  fs.writeFileSync(hpFile, hp, 'utf8');
  console.log('   → Wrote ' + hpFixed + ' fix(es) to ' + hpFile + '\n');
}

// ─────────────────────────────────────────────────────────
// FILE 2: pvcPressureData.ts — fix 3 weak strings
// ─────────────────────────────────────────────────────────
const pvFile = 'src/config/productDetails/pvcPressureData.ts';
let pv = fs.readFileSync(pvFile, 'utf8');

const pvFixes = [
  {
    from: "'Transport fluvial industrial'",
    to:   "'Transport fluvial industriel'",
    desc: 'applicationsFr[0][3]: "industrial" → "industriel"'
  },
  {
    from: "'Tuyauterie de process Industrial'",
    to:   "'Tuyauterie de traitement industriel'",
    desc: 'applicationsFr[2][0]: "Industrial" → "industriel", corrected phrase'
  },
  {
    from: "'Maquillage de tour de refroidissement'",
    to:   "'Appoint d\\'eau de tour de refroidissement'",
    desc: 'applicationsFr[2][6]: "Maquillage" → "Appoint d\'eau" (correct engineering term)'
  },
];

let pvFixed = 0;
pvFixes.forEach(({ from, to, desc }) => {
  if (pv.includes(from)) {
    pv = pv.replace(from, to);
    console.log('✅ pvcPressureData.ts — ' + desc);
    pvFixed++;
  } else {
    console.log('⚠️  pvcPressureData.ts — TARGET NOT FOUND: ' + desc);
    console.log('   Looking for: ' + from);
  }
});

if (pvFixed > 0) {
  fs.writeFileSync(pvFile, pv, 'utf8');
  console.log('   → Wrote ' + pvFixed + ' fix(es) to ' + pvFile + '\n');
}

console.log('\n=== DONE. Total fixes: ' + (hpFixed + pvFixed) + ' ===');
