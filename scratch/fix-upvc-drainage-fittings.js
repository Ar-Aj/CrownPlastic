/**
 * fix-upvc-drainage-fittings.js
 * Apply 3 targeted string replacements to upvcDrainageFittingsData.ts
 * using pure string operations to avoid encoding issues.
 */
const fs = require('fs');
const path = require('path');

const filePath = 'src/config/productDetails/upvcDrainageFittingsData.ts';
let content = fs.readFileSync(filePath, 'utf8');

const fixes = [
  {
    // Fix 1: "sewage" English word in featuresFr[1][1]
    from: '`Haute r\u00e9sistance chimique aux substances domestiques sewage`',
    to:   '`Haute r\u00e9sistance chimique aux substances des eaux us\u00e9es domestiques`',
    desc: 'featuresFr[1][1]: removed English "sewage"'
  },
  {
    // Fix 2: broken grammar "en anneau du l\u00e9g\u00e8re" in featuresFr[1][5]
    from: '`Installation en anneau du l\u00e9g\u00e8re et facile \u00e0 manipuler`',
    to:   '`L\u00e9g\u00e8ret\u00e9 et facilit\u00e9 de manipulation lors de l\'installation`',
    desc: 'featuresFr[1][5]: fixed broken grammar'
  },
  {
    // Fix 3: corrupted "industrielsduen" in applicationsFr[1][3]
    from: '`Drainage des d\u00e9chets industrielsduen zones franches UAE`',
    to:   '`Drainage des d\u00e9chets industriels dans les zones franches UAE`',
    desc: 'applicationsFr[1][3]: fixed corrupted concatenation'
  },
];

let fixesApplied = 0;
fixes.forEach(({ from, to, desc }) => {
  if (content.includes(from)) {
    content = content.replace(from, to);
    console.log(`\u2705 Applied: ${desc}`);
    fixesApplied++;
  } else {
    console.log(`\u26a0\ufe0f  NOT FOUND: ${desc}`);
    console.log(`   Looking for: ${from.substring(0, 60)}...`);
  }
});

if (fixesApplied > 0) {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`\nWrote ${fixesApplied} fix(es) to ${filePath}`);
} else {
  console.log('\nNo changes written.');
}
