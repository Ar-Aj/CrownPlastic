/**
 * audit-english-contamination.js
 * Scans ALL base English arrays (features, applications, dosDonts.dos, dosDonts.donts)
 * across all productDetails files. Flags any item containing French-only characters
 * (accented chars like é, è, ê, ë, à, â, ç, ù, û, ô, î, ï) that indicate contamination.
 */
const fs = require('fs');
const path = require('path');

const dir = 'src/config/productDetails';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

// French accent pattern — if found in a BASE English property, it's contaminated
const frenchPattern = /[éèêëàâçùûôîïÉÈÊËÀÂÇÙÛÔÎÏ]/;

// Properties that MUST be English-only
const englishProps = ['features', 'applications', 'systemAdvantages'];
// DosDonts sub-arrays
const dosProps = ['dos', 'donts'];

let totalContaminated = 0;

files.forEach(filename => {
  const filepath = path.join(dir, filename);
  const content = fs.readFileSync(filepath, 'utf8');
  const contaminations = [];

  // Check top-level shared constants (e.g. const HP_APPLICATIONS = [...])
  // Pattern: const VARNAME = [ ... ];  where VARNAME does NOT end with Fr or Ar
  const sharedConstRe = /const\s+(\w+)\s*=\s*\[([^\]]*(?:\[[^\]]*\][^\]]*)*)\]/g;
  let m;
  while ((m = sharedConstRe.exec(content)) !== null) {
    const varName = m[1];
    // Skip if it's a Fr or Ar variant
    if (/Fr$|Ar$|_FR$|_AR$/i.test(varName)) continue;
    // Skip if it's not a features/applications/dos/donts style array
    if (!/FEATURE|APPLICATION|DOS|DONT/i.test(varName)) continue;

    const inner = m[2];
    const strRe = /(?:`([^`]*)`|'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")/g;
    let sm;
    while ((sm = strRe.exec(inner)) !== null) {
      const val = (sm[1] || sm[2] || sm[3] || '').trim();
      if (val.length > 5 && frenchPattern.test(val)) {
        contaminations.push({
          prop: varName,
          value: val.substring(0, 80),
        });
      }
    }
  }

  // Check inline properties: features: [...], applications: [...], etc.
  englishProps.forEach(prop => {
    // Match prop: [ ... ] but NOT propFr or propAr
    const propRe = new RegExp('(?<![\\w])' + prop + '\\s*:\\s*\\[([\\s\\S]*?)\\]', 'g');
    let pm;
    while ((pm = propRe.exec(content)) !== null) {
      // Make sure this is NOT featuresFr, featuresAr etc.
      const before = content.slice(Math.max(0, pm.index - 15), pm.index);
      if (/Fr\s*$|Ar\s*$/i.test(before)) continue;

      const inner = pm[1];
      const strRe = /(?:`([^`]*)`|'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")/g;
      let sm;
      while ((sm = strRe.exec(inner)) !== null) {
        const val = (sm[1] || sm[2] || sm[3] || '').trim();
        if (val.length > 5 && frenchPattern.test(val)) {
          contaminations.push({
            prop: prop + ' (inline)',
            value: val.substring(0, 80),
          });
        }
      }
    }
  });

  // Check dosDonts: { dos: [...], donts: [...] } — NOT dosDontsFr or dosDontsAr
  const dosRe = /(?<![A-Za-z])dosDonts\s*:\s*\{([^}]*(?:\{[^}]*\}[^}]*)*)\}/g;
  let dm;
  while ((dm = dosRe.exec(content)) !== null) {
    const before = content.slice(Math.max(0, dm.index - 15), dm.index);
    if (/Fr\s*$|Ar\s*$/i.test(before)) continue;

    const inner = dm[1];
    const strRe = /(?:`([^`]*)`|'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")/g;
    let sm;
    while ((sm = strRe.exec(inner)) !== null) {
      const val = (sm[1] || sm[2] || sm[3] || '').trim();
      if (val.length > 5 && frenchPattern.test(val)) {
        contaminations.push({
          prop: 'dosDonts (inline)',
          value: val.substring(0, 80),
        });
      }
    }
  }

  // Check shared DOS_DONTS constants
  const sharedDosRe = /const\s+((?!.*(?:Fr|Ar))\w*DOS_DONTS\w*)\s*=\s*\{([^}]*(?:\{[^}]*\}[^}]*)*)\}/g;
  while ((dm = sharedDosRe.exec(content)) !== null) {
    const varName = dm[1];
    if (/Fr$|Ar$/i.test(varName)) continue;
    const inner = dm[2];
    const strRe = /(?:`([^`]*)`|'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")/g;
    let sm;
    while ((sm = strRe.exec(inner)) !== null) {
      const val = (sm[1] || sm[2] || sm[3] || '').trim();
      if (val.length > 5 && frenchPattern.test(val)) {
        contaminations.push({
          prop: varName + ' (shared const)',
          value: val.substring(0, 80),
        });
      }
    }
  }

  if (contaminations.length > 0) {
    console.log('\n❌ ' + filename + ' — ' + contaminations.length + ' contaminated English string(s):');
    contaminations.forEach(c => {
      console.log('   [' + c.prop + '] ' + c.value);
      totalContaminated++;
    });
  }
});

if (totalContaminated === 0) {
  console.log('\n✅ No French contamination found in any base English properties.');
} else {
  console.log('\n\n=== TOTAL CONTAMINATED: ' + totalContaminated + ' ===');
}
