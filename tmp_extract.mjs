import fs from 'fs';
import path from 'path';

const dir = 'c:\\crown\\CrownPlastic\\src\\config\\productDetails';
const files = [
  { name: 'drainageData.ts', cat: 'UPVC Drainage Fittings' },
  { name: 'pvcDuctFittingsData.ts', cat: 'PVC Duct Fittings' },
  { name: 'pvcHighPressureFittingsData.ts', cat: 'PVC High Pressure Fittings' },
  { name: 'pvcSch40FittingsData.ts', cat: 'PVC SCH 40 Fittings' },
];

const result = { categories: [] };

files.forEach(f => {
  const file = f.name;
  const catName = f.cat;
  
  const content = fs.readFileSync(path.join(dir, file), 'utf-8');
  
  let catObj = result.categories.find(c => c.categoryName === catName);
  if (!catObj) {
    catObj = { categoryName: catName, totalFittings: 0, fittings: [] };
    result.categories.push(catObj);
  }

  // Extract all fitting blocks. Let's just grab every `name: "..."` or `name: '...'`
  // But wait, there might be 'name' for tables. Let's look for `id: '...', name: '...',`
  const regex = /name:\s*['"](.*?)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
      const name = match[1];
      if (/^[A-Z]/.test(name) && !name.includes('.pdf')) {
          if (!catObj.fittings.includes(name)) {
              catObj.fittings.push(name);
          }
      }
  }
});

result.categories.forEach(c => c.totalFittings = c.fittings.length);

console.log(JSON.stringify(result, null, 2));
