const fs = require('fs');
let content = fs.readFileSync('src/data/productMap.ts', 'utf8');

content = content.replace(/export type ProductCategory = \{/g, 'export type ProductCategory = {\n  nameAr?: string;\n  nameFr?: string;');

const mappings = {
  'upvc-drainage-pipes': { ar: 'أنابيب الصرف UPVC', fr: "Tuyaux d'Évacuation UPVC" },
  'upvc-drainage-fittings': { ar: 'وصلات الصرف UPVC', fr: "Raccords d'Évacuation UPVC" },
  'pvc-high-pressure-pipes': { ar: 'أنابيب الضغط العالي PVC', fr: 'Tuyaux Haute Pression PVC' },
  'pvc-high-pressure-fittings': { ar: 'وصلات الضغط العالي PVC', fr: 'Raccords Haute Pression PVC' },
  'pvc-sch-40-fittings': { ar: 'وصلات PVC جدول 40', fr: 'Raccords PVC SCH 40' },
  'pvc-duct-pipes': { ar: 'أنابيب مجاري PVC', fr: 'Tuyaux de Gaines PVC' },
  'pvc-duct-fittings': { ar: 'وصلات مجاري PVC', fr: 'Raccords de Gaines PVC' },
  'pvc-conduit-pipes': { ar: 'أنابيب قنوات PVC', fr: 'Tuyaux de Conduits PVC' },
  'ppr-pipes': { ar: 'أنابيب PP-R', fr: 'Tuyaux PP-R' },
  'hdpe-pipes': { ar: 'أنابيب HDPE', fr: 'Tuyaux HDPE' },
  'pex-pipes': { ar: 'أنابيب PEX', fr: 'Tuyaux PEX' },
  'fabrications-accessories': { ar: 'التصنيع والملحقات', fr: 'Fabrications & Accessoires' },
  'solvents': { ar: 'المذيبات', fr: 'Solvants' }
};

for (const [id, trans] of Object.entries(mappings)) {
  const regex = new RegExp(`(id: '${id}',\\s*name: '.*?',)`, 'g');
  content = content.replace(regex, `$1\n    nameAr: '${trans.ar}',\n    nameFr: "${trans.fr}",`);
}

fs.writeFileSync('src/data/productMap.ts', content);
console.log('Done!');
