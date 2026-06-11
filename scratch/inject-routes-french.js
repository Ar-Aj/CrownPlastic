/**
 * inject-routes-french.js
 *
 * Injects all labelFr, descriptionFr, and titleFr values into routes.ts.
 * Uses precise string replacement to avoid character encoding issues.
 */
const fs = require('fs');

const file = 'src/config/routes.ts';
let content = fs.readFileSync(file, 'utf8');

// ─────────────────────────────────────────────────────────────────────────────
// HELPER: Add labelFr/descriptionFr after the existing labelAr/descriptionAr
// ─────────────────────────────────────────────────────────────────────────────
function addFrAfterAr(src, arProp, frProp, frValue) {
  // Find "arProp: '...'" and insert frProp after it
  // Pattern: arProp: 'value'  OR  arProp: "value"
  const re = new RegExp(`(${arProp}:\\s*'[^']*')`, 'g');
  let result = src;
  let count = 0;

  // We need to be careful — multiple occurrences. We'll use a map approach.
  result = src.replace(re, (match) => {
    return match; // Don't modify yet, just count
  });

  return result;
}

// ─────────────────────────────────────────────────────────────────────────────
// APPROACH: Direct line-by-line injection using context
// ─────────────────────────────────────────────────────────────────────────────

const lines = content.split('\n');
const output = [];

// Translation maps — keyed by the English label
const LABEL_FR = {
  // mainNavItems — top level
  'Home': 'Accueil',
  'About': 'À Propos',
  'Products': 'Produits',
  'Sustainability': 'Durabilité',
  'Innovation': 'Innovation',
  'Media & Blogs': 'Médias et Blogs',
  'Markets': 'Marchés',
  'Resources': 'Ressources',
  'Contact': 'Contact',

  // About children
  'Company Overview': 'Présentation de l\'Entreprise',
  'Our Journey': 'Notre Parcours',
  'Manufacturing': 'Fabrication',
  'Quality & Certifications': 'Qualité et Certifications',
  'Crown Product Galaxy': 'Galaxie des Produits Crown',

  // Products children
  'UPVC Drainage Pipes': 'Tuyaux de Drainage UPVC',
  'UPVC Drainage Fittings': 'Raccords de Drainage UPVC',
  'PVC High Pressure Pipes': 'Tuyaux PVC Haute Pression',
  'PVC High Pressure Fittings': 'Raccords PVC Haute Pression',
  'PVC SCH 40 Fittings': 'Raccords PVC SCH 40',
  'PVC Duct Pipes': 'Tuyaux de Gaine PVC',
  'PVC Duct Fittings': 'Raccords de Gaine PVC',
  'PVC Conduit Pipes': 'Tuyaux Conduit PVC',
  'PP-R Pipes': 'Tuyaux PP-R',
  'HDPE Pipes': 'Tuyaux HDPE',
  'PEX Pipes': 'Tuyaux PEX',
  'Fabrications & Accessories': 'Fabrications et Accessoires',
  'Solvents': 'Colles et Solvants',

  // Markets children
  'All Markets': 'Tous les Marchés',
  'Saudi Arabia': 'Arabie Saoudite',

  // Resources children
  'Downloads & Catalogues': 'Téléchargements et Catalogues',
  'Technical FAQs': 'FAQ Techniques',
  'BS EN 1452 Guide': 'Guide BS EN 1452',
  'Pipe Comparison Guide': 'Guide Comparatif des Tuyaux',
  'Installation Guide': 'Guide d\'Installation',
  'Quality & ISO Certifications': 'Qualité et Certifications ISO',
  'Pipe Sizing Calculator': 'Calculateur de Diamètre de Tuyaux',

  // Footer — About Crown column
  'About Us': 'À Propos',
  // Footer — Corporate column
  // Footer — Support column
  'Contact Us': 'Contactez-nous',
  'Careers': 'Carrières',
  'Privacy Policy': 'Politique de Confidentialité',
  'Sitemap': 'Plan du Site',

  // Footer — Technical Guides column
  'Pipe Comparison': 'Comparatif Tuyaux',
  'Pipe Sizing Guide': 'Guide Dimensionnement',

  // Footer — Service Areas column
  'UPVC Pipes Dubai': 'Tuyaux UPVC Dubaï',
  'UPVC Pipes Abu Dhabi': 'Tuyaux UPVC Abou Dabi',
  'UPVC Pipes Sharjah': 'Tuyaux UPVC Charjah',
  'UPVC Pipes Saudi Arabia': 'Tuyaux UPVC Arabie Saoudite',
  'UPVC Pipes Kuwait': 'Tuyaux UPVC Koweït',
  'UPVC Pipes Qatar': 'Tuyaux UPVC Qatar',
};

const DESC_FR = {
  'Who we are, our vision & mission': 'Qui nous sommes, notre vision et mission',
  'Milestones since 1995': 'Étapes clés depuis 1995',
  'Factory & GCC network': 'Usine et réseau CCG',
  'ISO certifications & standards': 'Certifications ISO et normes',
  'R&D and engineering excellence': 'R&D et excellence en ingénierie',
  '13 systems · 50+ products': '13 systèmes · 50+ produits',
  'Cable protection fittings': 'Raccords de protection des câbles',
  'Grease Traps | Custom Fabrications': 'Bacs à Graisse | Fabrications Sur Mesure',
  'PVC solvent cements': 'Colles solvant PVC',
};

const TITLE_FR = {
  'About Crown': 'À Propos de Crown',
  'Products': 'Produits',
  'Corporate': 'Entreprise',
  'Support': 'Assistance',
  'Technical Guides': 'Guides Techniques',
  'Service Areas': 'Zones de Service',
};

// Process line by line
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  output.push(line);

  // ── titleAr injection (for footerColumns) ──
  const titleArMatch = line.match(/^\s*titleAr:\s*'([^']*)'/);
  if (titleArMatch) {
    // Look at the previous line for the English title
    const titleEnMatch = lines.slice(Math.max(0, i - 3), i).join('\n').match(/title:\s*'([^']*)'/);
    if (titleEnMatch && TITLE_FR[titleEnMatch[1]]) {
      const indent = line.match(/^(\s*)/)[1];
      output.push(`${indent}titleFr: '${TITLE_FR[titleEnMatch[1]]}',`);
    }
  }

  // ── labelAr injection (add labelFr after it) ──
  const labelArMatch = line.match(/^\s*labelAr:\s*'([^']*)'/);
  if (labelArMatch) {
    // Find the English label from the previous lines (within 3 lines)
    const context = lines.slice(Math.max(0, i - 3), i).join('\n');
    const labelEnMatch = context.match(/label:\s*'([^']*)'/);
    if (labelEnMatch && LABEL_FR[labelEnMatch[1]]) {
      const indent = line.match(/^(\s*)/)[1];
      // Check if labelFr already exists on the next line
      const nextLine = i + 1 < lines.length ? lines[i + 1] : '';
      if (!nextLine.includes('labelFr:')) {
        output.push(`${indent}labelFr: '${LABEL_FR[labelEnMatch[1]]}',`);
      }
    }
  }

  // ── descriptionAr injection (add descriptionFr after it) ──
  const descArMatch = line.match(/^\s*descriptionAr:\s*'([^']*)'/);
  if (descArMatch) {
    // Find the English description from the previous lines
    const context = lines.slice(Math.max(0, i - 5), i).join('\n');
    const descEnMatch = context.match(/description:\s*'([^']*)'/);
    if (descEnMatch && DESC_FR[descEnMatch[1]]) {
      const indent = line.match(/^(\s*)/)[1];
      const nextLine = i + 1 < lines.length ? lines[i + 1] : '';
      if (!nextLine.includes('descriptionFr:')) {
        output.push(`${indent}descriptionFr: '${DESC_FR[descEnMatch[1]]}',`);
      }
    }
  }

  // ── Products children: description without descriptionAr (add descriptionFr) ──
  // These items have description but no descriptionAr. We need to check if this line
  // has "description:" and the NEXT line does NOT have "descriptionAr:" — meaning it's end of object.
  // For products, descriptions are on the same line as the object.
}

fs.writeFileSync(file, output.join('\n'), 'utf8');

// Now handle single-line objects like { label: '...', labelAr: '...', href: '...' }
// These are footer links that need labelFr injected.
let content2 = fs.readFileSync(file, 'utf8');

// Replace single-line footer link objects: { label: 'X', labelAr: 'Y', href: 'Z' }
// -> { label: 'X', labelAr: 'Y', labelFr: 'FR', href: 'Z' }
for (const [en, fr] of Object.entries(LABEL_FR)) {
  const escaped = en.replace(/[&]/g, '\\u0026').replace(/'/g, "\\'");
  const escapedPlain = en.replace(/&/g, '&');
  // Pattern: label: 'EN', labelAr: 'AR', href:
  // where EN matches and no labelFr is present
  const re = new RegExp(
    `(label:\\s*'${escapedPlain.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}',\\s*labelAr:\\s*'[^']*')(?!.*labelFr)`,
    'g'
  );
  content2 = content2.replace(re, `$1, labelFr: '${fr}'`);
}

fs.writeFileSync(file, content2, 'utf8');

console.log('✅ routes.ts — French translations injected');

// Count how many labelFr now exist
const frCount = (content2.match(/labelFr:/g) || []).length;
const titleFrCount = (content2.match(/titleFr:/g) || []).length;
const descFrCount = (content2.match(/descriptionFr:/g) || []).length;
console.log(`   labelFr: ${frCount}, titleFr: ${titleFrCount}, descriptionFr: ${descFrCount}`);
