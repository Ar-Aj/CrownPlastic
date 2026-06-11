const fs = require('fs');
const path = require('path');
const dir = 'src/config/productDetails';
const files = fs.readdirSync(dir).filter(function(f) {
  return f.endsWith('.ts') && f !== 'index.ts';
});
let issues = 0;
files.forEach(function(file) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const lines = content.split('\n');
  lines.forEach(function(line, i) {
    // Check for "labelFr: 'x', labelFr: 'y'" pattern on same line
    const matches = line.match(/labelFr\s*:/g);
    if (matches && matches.length > 1) {
      console.log('DUPLICATE labelFr on line ' + (i+1) + ' of ' + file);
      console.log('  ' + line.trim().substring(0, 120));
      issues++;
    }
    // Check for consecutive labelFr on adjacent lines
  });
});
console.log('Total duplicate issues found: ' + issues);
