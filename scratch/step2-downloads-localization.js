/**
 * step2-downloads-localization.js
 *
 * Adds labelAr and labelFr to every download entry across all productDetails files.
 * Uses a label→translation map for efficiency.
 */
const fs = require('fs');
const path = require('path');

// ─────────────────────────────────────────────────────────────────────────────
// Translation map: English label → { ar, fr }
// ─────────────────────────────────────────────────────────────────────────────
const TRANSLATIONS = {
  'PVC Conduit Pipes Catalogue (PDF)': {
    ar: 'كتالوج أنابيب كوندويت PVC (PDF)',
    fr: 'Catalogue Tuyaux Conduit PVC (PDF)',
  },
  'BS EN 1329-1:2014 Drainage Fittings Catalogue (PDF)': {
    ar: 'كتالوج وصلات الصرف BS EN 1329-1:2014 (PDF)',
    fr: 'Catalogue Raccords de Drainage BS EN 1329-1:2014 (PDF)',
  },
  'BS EN 1401 Drainage Fittings Catalogue (PDF)': {
    ar: 'كتالوج وصلات الصرف BS EN 1401 (PDF)',
    fr: 'Catalogue Raccords de Drainage BS EN 1401 (PDF)',
  },
  'PVC Duct Pipes Catalogue (PDF)': {
    ar: 'كتالوج أنابيب مجاري PVC (PDF)',
    fr: 'Catalogue Tuyaux de Gaine PVC (PDF)',
  },
  'Fabrications & Accessories Catalogue (PDF)': {
    ar: 'كتالوج التصنيعات والملحقات (PDF)',
    fr: 'Catalogue Fabrications et Accessoires (PDF)',
  },
  'PVC/UPVC Fabrications Catalogue (PDF)': {
    ar: 'كتالوج تصنيعات PVC/UPVC (PDF)',
    fr: 'Catalogue Fabrications PVC/UPVC (PDF)',
  },
  'HDPE Pipes Catalogue (PDF)': {
    ar: 'كتالوج أنابيب HDPE (PDF)',
    fr: 'Catalogue Tuyaux HDPE (PDF)',
  },
  'PPR Pipes Catalogue (PDF)': {
    ar: 'كتالوج أنابيب PPR (PDF)',
    fr: 'Catalogue Tuyaux PPR (PDF)',
  },
  'PP-R Pipes Catalogue (PDF)': {
    ar: 'كتالوج أنابيب PP-R (PDF)',
    fr: 'Catalogue Tuyaux PP-R (PDF)',
  },
  'PVC HP Fittings DIN 8063 Catalogue (PDF)': {
    ar: 'كتالوج وصلات PVC ضغط عالي DIN 8063 (PDF)',
    fr: 'Catalogue Raccords PVC HP DIN 8063 (PDF)',
  },
  'PVC HP Fittings BS EN 1452:3/BS 4346 Catalogue (PDF)': {
    ar: 'كتالوج وصلات PVC ضغط عالي BS EN 1452:3/BS 4346 (PDF)',
    fr: 'Catalogue Raccords PVC HP BS EN 1452:3/BS 4346 (PDF)',
  },
  'PVC HP Valves Catalogue (PDF)': {
    ar: 'كتالوج صمامات PVC ضغط عالي (PDF)',
    fr: 'Catalogue Vannes PVC HP (PDF)',
  },
  'PVC High Pressure Pipes Catalogue (PDF)': {
    ar: 'كتالوج أنابيب PVC عالية الضغط (PDF)',
    fr: 'Catalogue Tuyaux PVC Haute Pression (PDF)',
  },
  'DIN 8063 Catalogue (PDF)': {
    ar: 'كتالوج DIN 8063 (PDF)',
    fr: 'Catalogue DIN 8063 (PDF)',
  },
  'BS EN 1452 Catalogue (PDF)': {
    ar: 'كتالوج BS EN 1452 (PDF)',
    fr: 'Catalogue BS EN 1452 (PDF)',
  },
  'ASTM D 2466 Catalogue (PDF)': {
    ar: 'كتالوج ASTM D 2466 (PDF)',
    fr: 'Catalogue ASTM D 2466 (PDF)',
  },
  'PVC SCH 40 Fittings ASTM D 2466 Catalogue (PDF)': {
    ar: 'كتالوج وصلات PVC SCH 40 ASTM D 2466 (PDF)',
    fr: 'Catalogue Raccords PVC SCH 40 ASTM D 2466 (PDF)',
  },
  'UPVC Drainage Pipes Catalogue (PDF)': {
    ar: 'كتالوج أنابيب الصرف UPVC (PDF)',
    fr: 'Catalogue Tuyaux de Drainage UPVC (PDF)',
  },
  'UPVC Underground Drainage Pipes Catalogue (PDF)': {
    ar: 'كتالوج أنابيب الصرف UPVC تحت الأرض (PDF)',
    fr: 'Catalogue Tuyaux de Drainage Souterrain UPVC (PDF)',
  },
  'UPVC Drainage Non-Standard Pipes Catalogue (PDF)': {
    ar: 'كتالوج أنابيب الصرف UPVC غير القياسية (PDF)',
    fr: 'Catalogue Tuyaux de Drainage Non Standard UPVC (PDF)',
  },
  'PVC Duct Fittings Catalogue (PDF)': {
    ar: 'كتالوج وصلات مجاري PVC (PDF)',
    fr: 'Catalogue Raccords de Gaine PVC (PDF)',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Process all files
// ─────────────────────────────────────────────────────────────────────────────
const dir = 'src/config/productDetails';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

let totalFixed = 0;
let missingLabels = new Set();

files.forEach(filename => {
  const filepath = path.join(dir, filename);
  let content = fs.readFileSync(filepath, 'utf8');
  let fileFixed = 0;

  // Match patterns like:  { label: '...', href: '...' }
  // We need to add labelAr and labelFr after label
  // Pattern: { label: 'XXXX', href:  OR  { label: "XXXX", href:
  // But NOT if labelAr/labelFr already exist

  // Strategy: find each download entry that has label+href but no labelAr
  const downloadRe = /\{\s*label:\s*'([^']+)',\s*href:\s*'([^']+)'\s*\}/g;
  let match;
  const replacements = [];

  while ((match = downloadRe.exec(content)) !== null) {
    const fullMatch = match[0];
    const label = match[1];
    const href = match[2];

    // Skip if already has labelAr
    if (content.slice(Math.max(0, match.index - 5), match.index + fullMatch.length + 20).includes('labelAr')) continue;

    const trans = TRANSLATIONS[label];
    if (!trans) {
      missingLabels.add(label);
      continue;
    }

    const newEntry = `{ label: '${label}', labelAr: '${trans.ar}', labelFr: '${trans.fr}', href: '${href}' }`;
    replacements.push({ from: fullMatch, to: newEntry });
    fileFixed++;
  }

  if (replacements.length > 0) {
    replacements.forEach(r => {
      content = content.replace(r.from, r.to);
    });
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`✅ ${filename}: ${fileFixed} download(s) localized`);
    totalFixed += fileFixed;
  }
});

if (missingLabels.size > 0) {
  console.log('\n⚠️  Labels without translations:');
  missingLabels.forEach(l => console.log('   - ' + l));
}

console.log(`\n=== TOTAL: ${totalFixed} download entries localized ===`);
