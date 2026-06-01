const fs = require('fs');
const file = './src/config/productDetails/pvcHighPressureFittingsData.ts';
let code = fs.readFileSync(file, 'utf8');

// Regex to find table columns array
// We look for:
// columns: [
//   { ... },
//   ...
// ],
const regex = /columns:\s*\[([\s\S]*?)\]/g;

let updatedCode = code.replace(regex, (match, inner) => {
    // Only process if it looks like the right columns structure
    if (!inner.includes('hp_fit_')) return match;
    
    // Split into individual column objects.
    // They look like: { key: 'hp_fit_part', label: 'products.tables.hp_fit_part' }
    const lines = inner.split('\n');
    
    // First pass: identify how many "dimension" columns there are
    let dimCount = 0;
    
    for (const line of lines) {
        if (!line.trim() || !line.includes('{')) continue;
        if (line.includes('hp_fit_part') || line.includes('hp_fit_nominal_size_mm')) {
            // Not a dimension
        } else {
            dimCount++;
        }
    }
    
    let isFirstDim = true;
    const newLines = lines.map(line => {
        if (!line.trim() || !line.includes('{')) return line;
        
        let modifiedLine = line;
        
        // Remove trailing comma from the object if present to easily append properties
        let hasComma = false;
        if (modifiedLine.trim().endsWith(',')) {
            modifiedLine = modifiedLine.substring(0, modifiedLine.lastIndexOf(','));
            hasComma = true;
        }
        
        if (modifiedLine.includes('hp_fit_part') || modifiedLine.includes('hp_fit_nominal_size_mm')) {
            // Flat column
            return line;
        } else {
            // Dimension column
            // We append right before the closing brace '}'
            const insertPos = modifiedLine.lastIndexOf('}');
            if (insertPos === -1) return line;
            
            let extra = `, groupLabel: 'products.tables.dimensions_mm' `;
            if (isFirstDim) {
                extra += `, colSpan: ${dimCount} `;
                isFirstDim = false;
            }
            
            // Reconstruct
            modifiedLine = modifiedLine.substring(0, insertPos) + extra + modifiedLine.substring(insertPos);
            
            if (hasComma) modifiedLine += ',';
            return modifiedLine;
        }
    });
    
    return `columns: [\n${newLines.join('\n').trim('\n')}\n        ]`;
});

fs.writeFileSync(file, updatedCode);
console.log('SUCCESS');
