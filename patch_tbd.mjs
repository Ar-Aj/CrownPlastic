import fs from 'fs';

let tsFile = fs.readFileSync('src/config/routes.ts', 'utf8');

const translations = {
  "UPVC Drainage Pipes": "أنابيب الصرف UPVC",
  "UPVC Drainage Fittings": "وصلات الصرف UPVC",
  "PVC High Pressure Pipes": "أنابيب الضغط العالي PVC",
  "PVC High Pressure Fittings": "وصلات الضغط العالي PVC",
  "PVC SCH 40 Fittings": "وصلات PVC جدول 40",
  "PVC Duct Pipes": "أنابيب مجاري PVC",
  "PVC Duct Fittings": "وصلات مجاري PVC",
  "PVC Conduit Pipes": "أنابيب القنوات PVC",
  "PP-R Pipes": "أنابيب PP-R",
  "HDPE Pipes": "أنابيب HDPE",
  "PEX Pipes": "أنابيب PEX",
  "Fabrications & Accessories": "التصنيعات والإكسسوارات",
  "Solvents": "المذيبات"
};

// First, find and replace the labelAr: 'TBD' where label is matched
Object.keys(translations).forEach(engKey => {
    const arVal = translations[engKey];
    
    // Replace in both mainNavItems and footerColumns where TBD is listed
    // Using a regex to carefully replace just labelAr: 'TBD' next to this label
    const regex = new RegExp(`(label:\\s*['"]${engKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"],\\s*labelAr:\\s*['"])TBD(['"])`, 'g');
    tsFile = tsFile.replace(regex, `$1${arVal}$2`);
});

// For descriptionAr: 'TBD', let's just strip the descriptionAr entirely so it falls back gracefully, or replace with empty string if fallback logic in the component handles it. Wait, if it says TBD, it renders TBD. Let's just remove the descriptionAr: 'TBD' so it doesn't show garbage.
tsFile = tsFile.replace(/,\s*descriptionAr:\s*['"]TBD['"]/g, '');

fs.writeFileSync('src/config/routes.ts', tsFile);
console.log("Patched TBD strings in routes!");
