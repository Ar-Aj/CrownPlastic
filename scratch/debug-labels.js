const fs = require('fs');
const noChangesFiles = [
  'hdpePipesData.ts', 'pexPipesData.ts', 'pprPipesData.ts', 'pvcConduitPipesData.ts',
  'pvcDuctFittingsData.ts', 'pvcDuctPipesData.ts', 'pvcSch40FittingsData.ts',
  'solventData.ts', 'upvcDrainageFittingsData.ts', 'fabricationsAccessoriesData.ts'
];
noChangesFiles.forEach(file => {
  const content = fs.readFileSync('src/config/productDetails/' + file, 'utf8');
  const matches = [...content.matchAll(/\{([^{}]*key\s*:[^{}]*label\s*:[^{}]*)\}/gs)];
  const labels = new Set();
  matches.forEach(m => {
    const lm = m[0].match(/label\s*:\s*'([^']+)'/);
    if (lm) labels.add(lm[1]);
  });
  if (labels.size > 0) {
    console.log(file + ': ' + matches.length + ' cols');
    [...labels].slice(0, 8).forEach(l => console.log('  ' + JSON.stringify(l)));
  } else {
    console.log(file + ': 0 matchable cols (uses double-quotes or different structure)');
  }
});
