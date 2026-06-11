/**
 * fix-pvc-pressure-fr.js
 * Fixes 3 contaminated backtick strings in pvcPressureData.ts applicationsFr arrays
 */
const fs = require('fs');

const pvFile = 'src/config/productDetails/pvcPressureData.ts';
let pv = fs.readFileSync(pvFile, 'utf8');

const pvFixes = [
  {
    from: '`Transport fluvial industrial`',
    to:   '`Transport fluvial industriel`',
    desc: 'applicationsFr[0][3]: "industrial" → "industriel"'
  },
  {
    from: '`Tuyauterie de process Industrial`',
    to:   '`Tuyauterie de traitement de process industriel`',
    desc: 'applicationsFr[2][0]: fixed "Industrial" and improved phrasing'
  },
  {
    from: '`Maquillage de tour de refroidissement`',
    to:   '`Appoint d\'eau de tour de refroidissement`',
    desc: 'applicationsFr[2][6]: "Maquillage" → correct engineering term "Appoint d\'eau"'
  },
];

let fixed = 0;
pvFixes.forEach(({ from, to, desc }) => {
  if (pv.includes(from)) {
    pv = pv.split(from).join(to);
    console.log('✅ ' + desc);
    fixed++;
  } else {
    console.log('⚠️  NOT FOUND: ' + desc);
    console.log('   Looking for: ' + from);
    // Debug: show nearby content
    const hint = from.replace(/[`']/g, '').substring(0, 20);
    const idx = pv.toLowerCase().indexOf(hint.toLowerCase());
    if (idx > -1) console.log('   Near match at char ' + idx + ': ' + pv.slice(Math.max(0, idx-5), idx+60));
  }
});

if (fixed > 0) {
  fs.writeFileSync(pvFile, pv, 'utf8');
  console.log('\nSaved ' + pvFile + ' with ' + fixed + ' fix(es)');
}
