/**
 * inject-fr-column-labels-final.js
 * Three-pass approach: handles single-quoted, double-quoted strings in column objects.
 */
const fs = require('fs');
const path = require('path');

const LABEL_FR = {
  'Nominal Size': 'Taille Nominale',
  'Nominal Size (DN)': 'Taille Nominale (DN)',
  'Nominal Size (Inch)': 'Taille Nominale (Inch)',
  'Nominal Size (in)': 'Taille Nominale (in)',
  'Nominal Size (mm)': 'Taille Nominale (mm)',
  'Nominal Size (mm x mm)': 'Taille Nominale (mm x mm)',
  'Nominal Size (Inch x Inch)': 'Taille Nominale (Inch x Inch)',
  'Nominal Size (Inch x Inch x Inch)': 'Taille Nominale (Inch x Inch x Inch)',
  'Nominal Size (Inch x Inch x Inch x Inch)': 'Taille Nominale (Inch x Inch x Inch x Inch)',
  'Nominal Size Inch': 'Taille Nominale Inch',
  'Nominal Size inch': 'Taille Nominale inch',
  'Nominal Size mm': 'Taille Nominale mm',
  'Nominal Outside Diameter': 'Diametre Exterieur Nominal',
  'NOMINAL SIZE (Inch)': 'TAILLE NOMINALE (Inch)',
  'NOMINAL SIZE (mm)': 'TAILLE NOMINALE (mm)',
  'Mean Outside Dia. (mm) Min': 'Diam. Ext. Moyen (mm) Min',
  'Mean Outside Dia. (mm) Max': 'Diam. Ext. Moyen (mm) Max',
  'Mean Outside Dia Min Max': 'Diam. Ext. Moyen Min Max',
  'Mean Outside Dia. Min': 'Diam. Ext. Moyen Min',
  'Mean Outside Dia. Max': 'Diam. Ext. Moyen Max',
  'Outside Diameter Min': 'Diametre Exterieur Min',
  'Outside Diameter Max': 'Diametre Exterieur Max',
  'Outside Min': 'Exterieur Min',
  'Wall Thickness (mm)': 'Epaisseur de Paroi (mm)',
  'Wall Thickness Min': 'Epaisseur de Paroi Min',
  'Wall Thickness Max': 'Epaisseur de Paroi Max',
  'Min Wall Thickness Max': 'Epaisseur de Paroi Min Max',
  'WALL THICKNESS': 'EPAISSEUR DE PAROI',
  'Wall (mm)': 'Paroi (mm)',
  'Wall (in)': 'Paroi (in)',
  'Trade Dimension': 'Dimension Commerciale',
  'Dimension': 'Dimension',
  'DIMENSIONS': 'DIMENSIONS',
  'Size': 'Taille',
  'Size / Dimensions': 'Taille / Dimensions',
  'Length (m)': 'Longueur (m)',
  'Length/Pc': 'Longueur/Piece',
  'Mtrs/Pack': 'Metres/Paquet',
  'Psc/Pack': 'Pcs/Paquet',
  'PACKING UNIT': 'UNITE D EMBALLAGE',
  'Min. ID': 'DI Min.',
  'ID (mm)': 'DI (mm)',
  'ID (in)': 'DI (in)',
  'INNER DIAMETER': 'DIAMETRE INTERIEUR',
  'Non Pressure (Class-O)': 'Sans Pression (Classe-O)',
  'PN-6 (Class-B)': 'PN-6 (Classe-B)',
  'PN-6 (CLASS-B)': 'PN-6 (CLASSE-B)',
  'PN-9 (Class-C)': 'PN-9 (Classe-C)',
  'PN-9 (CLASS-C)': 'PN-9 (CLASSE-C)',
  'PN-12 (Class-D)': 'PN-12 (Classe-D)',
  'PN-12 (CLASS-D)': 'PN-12 (CLASSE-D)',
  'PN-15 (Class-E)': 'PN-15 (Classe-E)',
  'PN-15 (CLASS-E)': 'PN-15 (CLASSE-E)',
  'Weight (kg/m)': 'Poids (kg/m)',
  'Pressure Rating (BAR)': 'Pression Nominale (BAR)',
  'Pressure (psi)': 'Pression (psi)',
  'Component': 'Composant',
  'Specification': 'Specification',
  'Product': 'Produit',
  'Note': 'Remarque',
  'POLES': 'POLES',
  'RADIUS (mm)': 'RAYON (mm)',
  'Kg/Mtr.': 'Kg/Mtr.',
};

const GROUP_LABEL_FR = {
  'Mean Outside Dia. (mm)': 'Diam. Ext. Moyen (mm)',
  'Mean Wall Thickness (mm)': 'Epaisseur Moy. de Paroi (mm)',
  'Wall Thickness (mm)': 'Epaisseur de Paroi (mm)',
  'Non Pressure (CLASS-O)': 'Sans Pression (CLASSE-O)',
  'Nominal pressure PN Base on service (design) coefficient C=2.0': 'Pression Nominale PN basee sur le coeff. de service C=2.0',
  'Nominal pressure PN based on service (design) coefficient C = 2.5': 'Pression Nominale PN basee sur le coeff. de service C=2.5',
};

const SUPER_GROUP_LABEL_FR = {
  'Mean Outside Dia.': 'Diam. Ext. Moyen',
  'Mean Wall Thickness': 'Epaisseur Moy. de Paroi',
  'Nominal Wall Thickness': 'Epaisseur Nominale de Paroi',
  'Outside Dia. (mm)': 'Diam. Ext. (mm)',
  'Wall Thickness': 'Epaisseur de Paroi',
};

const MEGA_GROUP_LABEL_FR = {
  'Nominal Wall Thickness (Minimum)': 'Epaisseur Nominale de Paroi (Minimum)',
};

function shouldSkip(str) {
  if (!str || str.trim() === '') return true;
  if (str.startsWith('products.tables.')) return true;
  if (str.includes('Catalogue (PDF)')) return true;
  if (/^[a-zA-ZO][0-9x]{0,3}$/.test(str.trim())) return true;
  if (/^(BS|ISO|DIN|ASTM|NEMA|EN)\s/.test(str)) return true;
  if (/^PN[\s-]/.test(str) && !/Class/i.test(str) && !/MAX|MIN/i.test(str)) return true;
  if (/^SCH\s/.test(str)) return true;
  if (/^S\s+\d/.test(str)) return true;
  if (str === '-') return true;
  if (/^[\d.,\s/+\-]+$/.test(str)) return true;
  return false;
}

function makeReplacer(dict, propName, frPropName) {
  return function(content) {
    let count = 0;
    // Match single-quoted
    content = content.replace(new RegExp("(" + propName + "\\s*:\\s*)'([^']+)'", 'g'), function(m, pre, val) {
      if (shouldSkip(val) || !dict[val]) return m;
      if (m.includes(frPropName)) return m;
      count++;
      return m + ", " + frPropName + ": '" + dict[val] + "'";
    });
    // Match double-quoted
    content = content.replace(new RegExp('(' + propName + '\\s*:\\s*)"([^"]+)"', 'g'), function(m, pre, val) {
      if (shouldSkip(val) || !dict[val]) return m;
      if (m.includes(frPropName)) return m;
      count++;
      return m + ', ' + frPropName + ": '" + dict[val] + "'";
    });
    return { content, count };
  };
}

const replacers = [
  makeReplacer(LABEL_FR, 'label', 'labelFr'),
  makeReplacer(GROUP_LABEL_FR, 'groupLabel', 'groupLabelFr'),
  makeReplacer(SUPER_GROUP_LABEL_FR, 'superGroupLabel', 'superGroupLabelFr'),
  makeReplacer(MEGA_GROUP_LABEL_FR, 'megaGroupLabel', 'megaGroupLabelFr'),
];

const dir = 'src/config/productDetails';
const files = fs.readdirSync(dir)
  .filter(function(f) { return f.endsWith('.ts') && f !== 'index.ts' && f !== 'bsEn1452SpecTables.ts'; });

let TOTAL = 0, filesModified = 0;

files.forEach(function(file) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  let fileCounts = [0,0,0,0];
  
  replacers.forEach(function(replacer, idx) {
    const res = replacer(content);
    content = res.content;
    fileCounts[idx] = res.count;
  });

  const fileTotal = fileCounts.reduce(function(a,b) { return a+b; }, 0);
  TOTAL += fileTotal;

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    filesModified++;
    console.log('  MODIFIED: ' + file + '  [L:' + fileCounts[0] + ' G:' + fileCounts[1] + ' S:' + fileCounts[2] + ' M:' + fileCounts[3] + ']');
  } else {
    console.log('  OK:       ' + file);
  }
});

console.log('');
console.log('Files modified: ' + filesModified + '/' + files.length);
console.log('Total Fr fields injected: ' + TOTAL);
