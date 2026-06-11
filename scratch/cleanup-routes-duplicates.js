/**
 * cleanup-routes-duplicates.js
 *
 * 1. Removes duplicate labelFr lines (keeps inline one, removes standalone)
 * 2. Adds descriptionFr to About children inline objects
 */
const fs = require('fs');

const file = 'src/config/routes.ts';
let lines = fs.readFileSync(file, 'utf8').split('\n');

// ─── Pass 1: Remove standalone duplicate labelFr lines ───
// If a line is ONLY `    labelFr: '...',` AND the previous line already contains `labelFr:`,
// then this is a duplicate.
const cleaned = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const isStandaloneFr = /^\s+labelFr:\s*'[^']*',?\s*$/.test(line);
  if (isStandaloneFr && i > 0 && cleaned[cleaned.length - 1].includes('labelFr:')) {
    // Skip this duplicate
    continue;
  }
  cleaned.push(line);
}

let content = cleaned.join('\n');

// ─── Pass 2: Add descriptionFr to About children (inline objects) ───
const descMap = {
  "description: 'Who we are, our vision & mission'": "descriptionFr: 'Qui nous sommes, notre vision et mission'",
  "description: 'Milestones since 1995'": "descriptionFr: 'Étapes clés depuis 1995'",
  "description: 'Factory & GCC network'": "descriptionFr: 'Usine et réseau CCG'",
  "description: 'ISO certifications & standards'": "descriptionFr: 'Certifications ISO et normes'",
  "description: 'R&D and engineering excellence'": "descriptionFr: 'R&D et excellence en ingénierie'",
  "description: '13 systems · 50+ products'": "descriptionFr: '13 systèmes · 50+ produits'",
  "description: 'Cable protection fittings'": "descriptionFr: 'Raccords de protection des câbles'",
  "description: 'Grease Traps | Custom Fabrications'": "descriptionFr: 'Bacs à Graisse | Fabrications Sur Mesure'",
  "description: 'PVC solvent cements'": "descriptionFr: 'Colles solvant PVC'",
};

for (const [descEn, descFr] of Object.entries(descMap)) {
  // Find objects that have this description and a descriptionAr but no descriptionFr
  // Pattern: descEn, descriptionAr: 'xxx' }
  // Replace with: descEn, descriptionAr: 'xxx', descFr }
  const reStr = descEn.replace(/[.*+?^${}()|[\]\\&]/g, '\\$&');
  const re = new RegExp(`(${reStr},\\s*descriptionAr:\\s*'[^']*')(?!.*descriptionFr)`, 'g');
  content = content.replace(re, `$1, ${descFr}`);
}

// Also handle descriptions WITHOUT descriptionAr (e.g., Products children)
for (const [descEn, descFr] of Object.entries(descMap)) {
  const reStr = descEn.replace(/[.*+?^${}()|[\]\\&]/g, '\\$&');
  // Pattern: description: 'X' } — no descriptionAr present, no descriptionFr
  const re = new RegExp(`(${reStr})\\s*\\}(?!.*descriptionFr)`, 'g');
  // Don't add if descriptionAr is nearby
}

fs.writeFileSync(file, content, 'utf8');

// ─── Verify ───
const frLabels = (content.match(/labelFr:/g) || []).length;
const frTitles = (content.match(/titleFr:/g) || []).length;
const frDescs = (content.match(/descriptionFr:/g) || []).length;
const dupCheck = content.split('\n').filter((l, i, arr) => {
  return /^\s+labelFr:/.test(l) && i > 0 && arr[i-1].includes('labelFr:');
}).length;

console.log(`✅ Cleanup complete`);
console.log(`   labelFr: ${frLabels}, titleFr: ${frTitles}, descriptionFr: ${frDescs}`);
console.log(`   Remaining duplicates: ${dupCheck}`);
