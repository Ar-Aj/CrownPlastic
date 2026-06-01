import fs from 'fs';
import path from 'path';

const dir = 'c:\\crown\\CrownPlastic\\src\\config\\productDetails';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

const result = { categories: [] };

files.forEach(file => {
  const content = fs.readFileSync(path.join(dir, file), 'utf-8');
  
  // Find category title
  let categoryMatch = content.match(/title:\s*['"](.*?)['"]/g);
  if (!categoryMatch) return;
  
  // Find all fittings arrays
  const fittingsBlocks = content.split('fittings:').slice(1);
  if (fittingsBlocks.length === 0) return;

  fittingsBlocks.forEach((block, index) => {
    // Only care if it looks like an array definition
    const blockMatch = block.match(/^\s*\[([\s\S]*?)\]/);
    if (!blockMatch) return;
    
    const arrayContent = blockMatch[1];
    const names = [];
    
    // Exact match for name: "..." or name: '...'
    const nameRegex = /name:\s*['"]([^'"]+)['"]/g;
    let match;
    while ((match = nameRegex.exec(arrayContent)) !== null) {
      names.push(match[1]);
    }
    
    if (names.length > 0) {
      // Find the closest title before this block
      const beforeBlock = content.substring(0, content.indexOf(block));
      const titles = beforeBlock.match(/title:\s*['"](.*?)['"]/g);
      let catName = "Unknown Category";
      if (titles && titles.length > 0) {
         catName = titles[titles.length - 1].replace(/title:\s*['"]/, '').replace(/['"]$/, '');
      } else {
         catName = file.replace('.ts', '');
      }

      // Consolidate
      let catObj = result.categories.find(c => c.categoryName === catName);
      if (!catObj) {
        catObj = { categoryName: catName, totalFittings: 0, fittings: [] };
        result.categories.push(catObj);
      }
      
      names.forEach(n => {
        if (!catObj.fittings.includes(n)) {
          catObj.fittings.push(n);
        }
      });
      catObj.totalFittings = catObj.fittings.length;
    }
  });
});

console.log(JSON.stringify(result, null, 2));
