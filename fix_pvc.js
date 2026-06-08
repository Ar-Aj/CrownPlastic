const fs = require('fs');
const path = require('path');

const files = [
  'src/i18n/en.ts',
  'src/i18n/ar.ts',
  'src/i18n/fr.ts',
  'src/config/schemas.ts',
  'src/config/routes.ts',
  'src/config/products.ts',
  'src/data/zipperContent.ts',
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. All "uPVC" -> "PVC", except if followed by " Drainage" or " Drain" or preceded by "Drainage " etc.
  // Actually, let's just do targeted replacements for the known non-drainage categories.
  // Categories: Pressure, Duct, Conduit, SCH 40, High Pressure, Solvents, Fittings

  const targetedReplacements = [
    // English
    /uPVC High Pressure/gi, 'PVC High Pressure',
    /UPVC High Pressure/g, 'PVC High Pressure',
    /uPVC Duct/gi, 'PVC Duct',
    /UPVC Duct/g, 'PVC Duct',
    /uPVC Conduit/gi, 'PVC Conduit',
    /UPVC Conduit/g, 'PVC Conduit',
    /uPVC SCH 40/gi, 'PVC SCH 40',
    /UPVC SCH 40/g, 'PVC SCH 40',
    /UPVC Pressure/g, 'PVC Pressure',
    /uPVC Pressure/gi, 'PVC Pressure',
    
    // Arabic
    /أنابيب uPVC/g, 'أنابيب PVC',
    // We only replace for specific non-drainage categories in Arabic if possible,
    // Or we just replace 'uPVC' with 'PVC' everywhere since uPVC is technically not allowed except for drainage, and drainage uses UPVC!
    // "Drainage Categories ONLY: Must use fully capitalized UPVC."
    // So 'uPVC' (mixed case) is NEVER allowed. We can safely replace 'uPVC' globally with 'PVC' EXCEPT if the word "Drainage" or "الصرف" or "Évacuation" is nearby. If so, replace with "UPVC".
  ];

  for (let i = 0; i < targetedReplacements.length; i += 2) {
    content = content.replace(targetedReplacements[i], targetedReplacements[i+1]);
  }

  // Now, global 'uPVC' fix. If any 'uPVC' is left:
  // If line has drainage keywords, make it UPVC. Otherwise PVC.
  const lines = content.split('\n');
  const newLines = lines.map(line => {
    let newLine = line;
    if (newLine.includes('uPVC')) {
       if (/drainage|drain|évacuation|صرف/i.test(newLine)) {
           newLine = newLine.replace(/uPVC/g, 'UPVC');
       } else {
           newLine = newLine.replace(/uPVC/g, 'PVC');
       }
    }
    // Also, if 'UPVC' is still present but it's clearly for a non-drainage category (like "ضغط" which is pressure)
    if (newLine.includes('UPVC')) {
        if (/ضغط|مجاري|قنوات|SCH 40/i.test(newLine)) {
            newLine = newLine.replace(/(?<![a-zA-Z\-_/])UPVC(?![a-zA-Z\-_/])/g, 'PVC');
        }
    }
    return newLine;
  });
  
  content = newLines.join('\n');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Processed ${file}`);
});
