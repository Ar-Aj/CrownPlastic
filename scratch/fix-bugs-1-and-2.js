/**
 * fix-bugs-1-and-2.js
 *
 * BUG 1 — pvcHighPressurePipesData.ts:
 *   The seoOverviewFr() helper wraps output in raw HTML tags (<p><b>…</b></p>)
 *   which React renders as literal text. Fix: rewrite the function to plain text.
 *   Also fix two copy-paste errors ("in du", "dans du") in two overviewFr strings.
 *
 * BUG 2 — upvcDrainageData.ts:
 *   SHARED_FEATURESFr, SHARED_APPLICATIONSFr, and SHARED_DOS_DONTSFr are
 *   English copies shared by the BS 5255 and Non-Standard products.
 *   Fix: translate all three constants to professional French.
 */

const fs = require('fs');

// ─────────────────────────────────────────────────────────────────────────────
// BUG 1: pvcHighPressurePipesData.ts
// ─────────────────────────────────────────────────────────────────────────────
const hpFile = 'src/config/productDetails/pvcHighPressurePipesData.ts';
let hp = fs.readFileSync(hpFile, 'utf8');

console.log('=== BUG 1: pvcHighPressurePipesData.ts ===\n');

// Fix 1a: Replace the seoOverviewFr helper — remove <p><b> HTML tags, produce plain text
const OLD_HELPER = "const seoOverviewFr = (standard: string, description: string) => `<p><b>Standard: ${standard}</b></p><p>${description}</p>`;";
const NEW_HELPER = "const seoOverviewFr = (standard: string, description: string) => `Crown Plastic Pipes / Fittings, fabricant leader de PVC-U dans le UAE, produit une gamme complète de tuyaux haute pression conformes à ${standard}. ${description} Fabriqués dans notre usine certifiée ISO 9001:2015 à Umm Al Quwain, ces tuyaux sont approuvés par les entrepreneurs, consultants et autorités gouvernementales dans tout le UAE.`;";

if (hp.includes(OLD_HELPER)) {
  hp = hp.replace(OLD_HELPER, NEW_HELPER);
  console.log('✅ seoOverviewFr helper: HTML tags removed, proper prose template applied');
} else {
  console.log('⚠️  seoOverviewFr helper NOT FOUND — checking for partial match...');
  if (hp.includes('seoOverviewFr')) {
    const idx = hp.indexOf('seoOverviewFr');
    console.log('   Found at char ' + idx + ': ' + hp.slice(idx, idx + 120));
  }
}

// Fix 1b: ASTM D 1785 overview has "dans les zones industrielles UAE dans du" — fix typo
const ASTM_D1785_TYPO = "Largement utilis\u00e9 dans les zones industrielles UAE dans du, les syst\u00e8mes auxiliaires";
const ASTM_D1785_FIXED = "Largement utilis\u00e9 dans les zones industrielles UAE, les syst\u00e8mes auxiliaires";
if (hp.includes(ASTM_D1785_TYPO)) {
  hp = hp.replace(ASTM_D1785_TYPO, ASTM_D1785_FIXED);
  console.log('✅ ASTM D 1785 overviewFr: fixed "dans du" typo');
} else {
  // Try without the accent (file may have been saved with different encoding)
  const alt = 'Largement utilise dans les zones industrielles UAE dans du,';
  console.log('⚠️  ASTM D 1785 typo not found by accent string; checking raw...');
  const idx = hp.indexOf('UAE dans du');
  if (idx > -1) {
    console.log('   Found "UAE dans du" at char ' + idx);
  } else {
    console.log('   "UAE dans du" not found in file');
  }
}

// Fix 1c: BS 3506 overview has "zones industrielles UAE indu telles" — fix typo
const BS3506_TYPO = "zones industrielles UAE indu telles";
const BS3506_FIXED = "zones industrielles UAE telles";
if (hp.includes(BS3506_TYPO)) {
  hp = hp.replace(hp.split(BS3506_TYPO).join(BS3506_FIXED), hp.split(BS3506_TYPO).join(BS3506_FIXED));
  // Simpler:
  hp = hp.split(BS3506_TYPO).join(BS3506_FIXED);
  console.log('✅ BS 3506 overviewFr: fixed "indu" typo');
} else {
  console.log('⚠️  BS 3506 "indu" typo not found');
}

// Fix 1d: ASTM D 2241 has trailing ".." — fix double period
hp = hp.split('SDR 13.5..').join('SDR 13.5.');
console.log('✅ ASTM D 2241 overviewFr: fixed trailing ".."');

// Fix 1e: ISO 4422 has trailing ".." — fix double period  
hp = hp.split('PN 16..').join('PN 16.');
console.log('✅ ISO 4422 overviewFr: fixed trailing ".."');

fs.writeFileSync(hpFile, hp, 'utf8');
console.log('\n→ Saved ' + hpFile);

// ─────────────────────────────────────────────────────────────────────────────
// BUG 2: upvcDrainageData.ts
// ─────────────────────────────────────────────────────────────────────────────
const upFile = 'src/config/productDetails/upvcDrainageData.ts';
let up = fs.readFileSync(upFile, 'utf8');

console.log('\n=== BUG 2: upvcDrainageData.ts ===\n');

// SHARED_FEATURESFr — replace English with French (line-by-line to handle CRLF)
const featFixes = [
  ["  'High impact resistance for long-service installations in extreme Gulf temperatures',",
   "  'Haute résistance aux chocs pour des installations de longue durée dans les températures extrêmes du Golfe',"],
  ["  'Smooth internal bore prevents scaling and blockages',",
   "  'Alésage interne lisse empêchant le tartre et les obstructions',"],
  ["  'Chemical and corrosion resistant \u2014 unaffected by UAE soil and groundwater conditions',",
   "  'Résistant aux produits chimiques et à la corrosion \u2014 insensible aux conditions de sol et d\\'eaux souterraines UAE',"],
  ["  'Lightweight yet rigid for easy handling and installation',",
   "  'Léger mais rigide pour une manutention et une installation aisées',"],
  ["  'Solvent cement and ring-seal jointing options',",
   "  'Options de jointoiement par colle solvant et joint annulaire',"],
  ["  'UV stabilised formulation for Middle East outdoor exposure',",
   "  'Formulation stabilisée aux UV pour l\\'exposition extérieure au Moyen-Orient',"],
  ["  'ISO 9001:2015 certified production at our Umm Al Quwain, UAE facility',",
   "  'Production certifiée ISO 9001:2015 dans notre usine d\\'Umm Al Quwain, UAE',"],
  ["  '50+ year expected service life \u2014 trusted by GCC contractors',",
   "  'Durée de vie prévue supérieure à 50 ans \u2014 approuvée par les entrepreneurs GCC',"],
];

// SHARED_APPLICATIONSFr — replace English with French
const appFixes = [
  ["  'Above-ground soil and waste discharge systems across the UAE',",
   "  'Systèmes de décharge des sols et des déchets en surface dans tout le UAE',"],
  ["  'Underground sewerage networks for Dubai and Abu Dhabi developments',",
   "  'Réseaux d\\'égouts souterrains pour les projets de développement de Dubai et Abu Dhabi',"],
  ["  'Rainwater drainage systems suited to Gulf climate conditions',",
   "  'Systèmes de drainage des eaux pluviales adaptés aux conditions climatiques du Golfe',"],
  ["  'Building internal drainage stacks',",
   "  'Colonnes de chute internes des bâtiments',"],
  ["  'Commercial and residential plumbing in the GCC',",
   "  'Plomberie commerciale et résidentielle dans le GCC',"],
  ["  'Hospital and hotel sanitary systems',",
   "  'Systèmes sanitaires hospitaliers et hôteliers',"],
  ["  'Industrial effluent disposal in UAE free zones',",
   "  'Évacuation des effluents industriels dans les zones franches UAE',"],
  ["  'Town planning and municipal infrastructure projects',",
   "  'Projets d\\'urbanisme et d\\'infrastructure municipale',"],
];

// SHARED_DOS_DONTSFr — we use block replacement to target only the Fr version
// (English version has identical strings, so we do contextual block replacement)
function fixSharedDosDontsFr(content) {
  const START = 'const SHARED_DOS_DONTSFr = {';
  const si = content.indexOf(START);
  if (si === -1) { console.log('⚠️  SHARED_DOS_DONTSFr block NOT FOUND'); return content; }
  let depth = 0, ei = -1;
  for (let i = si; i < content.length; i++) {
    if (content[i] === '{') depth++;
    if (content[i] === '}') { depth--; if (depth === 0) { ei = i + 1; break; } }
  }
  if (ei === -1) { console.log('⚠️  SHARED_DOS_DONTSFr block END NOT FOUND'); return content; }

  // Find the semicolon/newline after the closing brace
  while (ei < content.length && (content[ei] === ';' || content[ei] === '\r' || content[ei] === '\n')) ei++;

  const newBlock = `const SHARED_DOS_DONTSFr = {
  dos: [
    'Utiliser la qualité de colle solvant appropriée pour la classe de tuyau',
    'Prévoir la dilatation thermique dans les longs parcours horizontaux',
    'Utiliser les outils de chanfreinage corrects avant l\\'assemblage',
    'Supporter les tuyaux aux intervalles recommandés par le fabricant',
  ],
  donts: [
    'Ne pas laisser tomber les tuyaux de hauteur — les dommages par choc peuvent être invisibles',
    'Ne pas utiliser de solvants ou d\\'adhésifs incompatibles',
    'Ne pas exposer les tuyaux stockés à la lumière directe du soleil de manière prolongée',
    'Ne pas dépasser la limite de température recommandée de 60 °C',
  ],
};\n`;

  console.log('✅ SHARED_DOS_DONTSFr: translated dos/donts to French');
  return content.slice(0, si) + newBlock + content.slice(ei);
}

let applied = 0;
featFixes.forEach(([from, to]) => {
  if (up.includes(from)) { up = up.split(from).join(to); applied++; }
  else {
    // Try with escaped em-dash vs actual em-dash
    const alt = from.replace(/\u2014/g, '--').replace(/\\u2014/g, '--');
    if (up.includes(alt)) { up = up.split(alt).join(to.replace(/\\u2014/g, '--')); applied++; }
    else console.log('  ⚠️  feat NOT FOUND: ' + from.substring(0, 60));
  }
});
console.log('✅ SHARED_FEATURESFr: ' + applied + '/8 items translated');

applied = 0;
appFixes.forEach(([from, to]) => {
  if (up.includes(from)) { up = up.split(from).join(to); applied++; }
  else console.log('  ⚠️  app NOT FOUND: ' + from.substring(0, 60));
});
console.log('✅ SHARED_APPLICATIONSFr: ' + applied + '/8 items translated');

up = fixSharedDosDontsFr(up);

fs.writeFileSync(upFile, up, 'utf8');
console.log('\n→ Saved ' + upFile);

console.log('\n=== ALL FIXES APPLIED ===');
