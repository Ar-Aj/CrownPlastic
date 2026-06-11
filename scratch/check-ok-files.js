const fs = require('fs');
const okFiles = ['pexPipesData.ts', 'pvcDuctFittingsData.ts', 'solventData.ts', 'upvcDrainageFittingsData.ts'];
okFiles.forEach(function(f) {
  const c = fs.readFileSync('src/config/productDetails/' + f, 'utf8');
  const hasColumns = c.includes('columns:');
  console.log(f + ': hasColumns=' + hasColumns);
  if (hasColumns) {
    // Look for label: patterns
    const matches = c.match(/label\s*:\s*["'][^"']+["']/g) || [];
    console.log('  label values: ' + matches.slice(0, 5).join(', '));
  }
});
