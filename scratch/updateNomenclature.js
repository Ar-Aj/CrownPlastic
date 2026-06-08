const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  path.join(__dirname, '../src/i18n/en.ts'),
  path.join(__dirname, '../src/i18n/fr.ts'),
  path.join(__dirname, '../src/data/zipperContent.ts'),
];

const replacements = [
  // Pressure
  { regex: /\bPVC High Pressure\b/g, replace: 'uPVC High Pressure' },
  { regex: /\bUPVC High Pressure\b/g, replace: 'uPVC High Pressure' },
  { regex: /\bPVC Pressure\b/g, replace: 'uPVC Pressure' },
  { regex: /\bUPVC Pressure\b/g, replace: 'uPVC Pressure' },
  { regex: /\bPVC PRESSURE\b/g, replace: 'uPVC PRESSURE' },
  { regex: /\bUPVC PRESSURE\b/g, replace: 'uPVC PRESSURE' },
  
  // Duct
  { regex: /\bPVC Duct\b/g, replace: 'uPVC Duct' },
  { regex: /\bUPVC Duct\b/g, replace: 'uPVC Duct' },
  { regex: /\bPVC duct\b/g, replace: 'uPVC duct' },
  { regex: /\bUPVC duct\b/g, replace: 'uPVC duct' },
  { regex: /\bGaine PVC\b/g, replace: 'Gaine uPVC' },
  
  // Conduit
  { regex: /\bPVC Conduit\b/g, replace: 'uPVC Conduit' },
  { regex: /\bUPVC Conduit\b/g, replace: 'uPVC Conduit' },
  { regex: /\bPVC conduit\b/g, replace: 'uPVC conduit' },
  { regex: /\bUPVC conduit\b/g, replace: 'uPVC conduit' },
  { regex: /\bConduit PVC\b/g, replace: 'Conduit uPVC' },
  
  // French translations specific for High Pressure
  { regex: /\bPVC Haute Pression\b/g, replace: 'uPVC Haute Pression' },
  { regex: /\bUPVC Haute Pression\b/g, replace: 'uPVC Haute Pression' },

  // General plural instances
  { regex: /\bPVC ducts\b/g, replace: 'uPVC ducts' },
  { regex: /\bPVC conduits\b/g, replace: 'uPVC conduits' },
];

for (const file of filesToUpdate) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    for (const rule of replacements) {
      content = content.replace(rule.regex, rule.replace);
    }
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
}
