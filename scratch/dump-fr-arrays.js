/**
 * dump-fr-arrays.js
 * Prints the actual content of featuresFr and applicationsFr 
 * for the 6 primary target files so they can be visually inspected.
 */
const fs = require('fs');
const path = require('path');

const TARGET_FILES = [
  'pvcPressureData.ts',
  'pvcHighPressurePipesData.ts',
  'pvcHighPressureFittingsData.ts',
  'drainageData.ts',
  'upvcDrainageData.ts',
  'upvcDrainageFittingsData.ts',
];

const dir = 'src/config/productDetails';

function extractFrArrayStrings(content, propName) {
  const results = [];
  const re = new RegExp(`\\b${propName}\\s*:\\s*\\[([\\s\\S]*?)\\](?=\\s*,|\\s*\\n\\s*[a-zA-Z_])`, 'g');
  let m;
  while ((m = re.exec(content)) !== null) {
    const inner = m[1];
    const strRe = /(?:`([^`]*)`|'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")/g;
    let sm;
    const items = [];
    while ((sm = strRe.exec(inner)) !== null) {
      const val = (sm[1] || sm[2] || sm[3] || '').trim();
      if (val.length > 3) items.push(val);
    }
    if (items.length > 0) results.push(items);
  }
  return results;
}

TARGET_FILES.forEach(file => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  
  console.log(`\n${'═'.repeat(70)}`);
  console.log(`FILE: ${file}`);
  console.log('═'.repeat(70));

  ['featuresFr', 'applicationsFr', 'systemAdvantagesFr'].forEach(prop => {
    const arrays = extractFrArrayStrings(content, prop);
    if (arrays.length === 0) return;
    arrays.forEach((items, i) => {
      console.log(`\n  ${prop}[${i}] (${items.length} items):`);
      items.forEach((s, j) => console.log(`    ${j+1}. ${s.substring(0, 110)}`));
    });
  });
});
