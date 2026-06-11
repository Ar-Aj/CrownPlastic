/**
 * read-fr-arrays.js
 * Reads the actual language of featuresFr, applicationsFr, systemAdvantagesFr,
 * and faqs[].aFr in the 6 primary target files.
 */
const fs = require('fs');

const files = [
  'src/config/productDetails/pvcPressureData.ts',
  'src/config/productDetails/pvcHighPressurePipesData.ts',
  'src/config/productDetails/pvcHighPressureFittingsData.ts',
  'src/config/productDetails/drainageData.ts',
  'src/config/productDetails/upvcDrainageData.ts',
  'src/config/productDetails/upvcDrainageFittingsData.ts',
];

function extractArrays(content, propName) {
  const results = [];
  const re = new RegExp(propName + '\\s*:\\s*\\[([\\s\\S]*?)\\](?=\\s*[,}\\n])', 'g');
  let m;
  while ((m = re.exec(content)) !== null) {
    const inner = m[1];
    const items = [];
    const sr = /(?:`([^`]*)`|'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")/g;
    let sm;
    while ((sm = sr.exec(inner)) !== null) {
      const v = (sm[1] || sm[2] || sm[3] || '').trim();
      if (v.length > 4) items.push(v);
    }
    if (items.length) results.push(items);
  }
  return results;
}

function extractFaqsFr(content) {
  // Find aFr inside faqs arrays
  const results = [];
  const faqRe = /faqs\s*:\s*\[([^\]]*(?:\[[^\]]*\][^\]]*)*)\]/g;
  let fm;
  while ((fm = faqRe.exec(content)) !== null) {
    const inner = fm[1];
    const aFrRe = /aFr\s*:\s*(?:`([^`]*)`|'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")/g;
    let am;
    while ((am = aFrRe.exec(inner)) !== null) {
      const v = (am[1] || am[2] || am[3] || '').trim();
      if (v.length > 4) results.push(v);
    }
  }
  return results;
}

files.forEach(filePath => {
  const name = filePath.split('/').pop();
  const content = fs.readFileSync(filePath, 'utf8');
  
  console.log('\n' + '='.repeat(70));
  console.log('FILE: ' + name);
  console.log('='.repeat(70));

  let anyFound = false;

  ['featuresFr', 'applicationsFr', 'systemAdvantagesFr'].forEach(prop => {
    const arrays = extractArrays(content, prop);
    if (!arrays.length) return;
    anyFound = true;
    arrays.forEach((items, i) => {
      console.log('\n  ' + prop + '[' + i + '] (' + items.length + ' items):');
      items.forEach((s, j) => console.log('    ' + (j + 1) + '. ' + s.substring(0, 110)));
    });
  });

  const faqsFr = extractFaqsFr(content);
  if (faqsFr.length) {
    anyFound = true;
    console.log('\n  faqs.aFr (' + faqsFr.length + ' answers):');
    faqsFr.forEach((s, i) => console.log('    ' + (i + 1) + '. ' + s.substring(0, 110)));
  }

  if (!anyFound) {
    console.log('\n  *** WARNING: No featuresFr / applicationsFr / aFr found in this file ***');
  }
});
