/**
 * cleanup-duplicate-labelFr.js
 * Removes duplicate labelFr/groupLabelFr/superGroupLabelFr/megaGroupLabelFr occurrences
 * on the same line within a column object literal.
 * 
 * Pattern: { ..., labelFr: 'A', labelFr: 'B', ... }
 * Fix:     { ..., labelFr: 'A', ... }  (keep first, remove second)
 */
const fs = require('fs');
const path = require('path');

const dir = 'src/config/productDetails';
const files = fs.readdirSync(dir).filter(function(f) {
  return f.endsWith('.ts') && f !== 'index.ts';
});

const DUPE_PROPS = ['labelFr', 'groupLabelFr', 'superGroupLabelFr', 'megaGroupLabelFr'];

let totalFixed = 0;
let filesModified = 0;

files.forEach(function(file) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  let fileFixed = 0;

  DUPE_PROPS.forEach(function(prop) {
    // Match: prop: 'VALUE1', prop: 'VALUE2'  (second occurrence on same token position)
    // or:    prop: 'VALUE1', prop: 'VALUE2' anywhere in the same object literal line
    // Strategy: on any line, replace the SECOND occurrence of prop: '...' with nothing
    const lines = content.split('\n');
    const newLines = lines.map(function(line) {
      // Count occurrences of the prop on this line
      const re = new RegExp(prop + "\\s*:\\s*(?:'[^']*'|\"[^\"]*\")", 'g');
      const matches = [];
      let m;
      while ((m = re.exec(line)) !== null) {
        matches.push({ index: m.index, len: m[0].length });
      }
      if (matches.length < 2) return line;
      // Remove all occurrences after the first
      // Work backwards to preserve indices
      let result = line;
      for (let i = matches.length - 1; i >= 1; i--) {
        const { index, len } = matches[i];
        // Also remove trailing comma+space if present
        let end = index + len;
        let start = index;
        // Remove preceding ", " or just the trailing ", "
        // Check if preceded by ", "
        if (result.substring(start - 2, start) === ', ') {
          start -= 2;
        }
        result = result.substring(0, start) + result.substring(end);
        fileFixed++;
      }
      return result;
    });
    content = newLines.join('\n');
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    filesModified++;
    totalFixed += fileFixed;
    console.log('  FIXED: ' + file + ' (' + fileFixed + ' duplicates removed)');
  } else {
    console.log('  OK:    ' + file);
  }
});

console.log('\nFiles modified: ' + filesModified);
console.log('Total duplicates removed: ' + totalFixed);
