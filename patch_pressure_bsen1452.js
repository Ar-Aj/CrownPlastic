const fs = require('fs');
const file = './src/config/productDetails/pvcHighPressureFittingsData.ts';
let lines = fs.readFileSync(file, 'utf8').split('\n');

let insideColumns = false;
let columnsStartIdx = -1;
let columnsBlock = [];

for (let i = 0; i < lines.length; i++) {
    if (i < 530) continue;
    if (i > 1045) break;

    const line = lines[i];

    if (line.includes('columns: [')) {
        insideColumns = true;
        columnsStartIdx = i;
        columnsBlock = [];
        continue;
    }

    if (insideColumns) {
        if (line.includes('],')) {
            // End of block
            let dimCount = 0;
            
            // Reconstruct block ignoring everything added
            let cleanCols = columnsBlock.map(c => {
                 let res = c;
                 res = res.replace(/,\s*groupLabel:\s*'[^']+'/g, '');
                 res = res.replace(/,\s*colSpan:\s*\d+/g, '');
                 return res;
            });

            // Which ones are flat?
            // "hp_fit_part"
            // "hp_fit_nominal_size_inch"
            // "hp_fit_nominal_size_mm_inch" -> size!
            // "hp_fit_nominal_size_mm" -> size!
            
            for (let c of cleanCols) {
                if (!c.trim() || !c.includes('{')) continue;
                
                const isFlat = c.includes("'hp_fit_part'") || 
                               c.includes("'hp_fit_nominal_size_inch'") || 
                               c.includes("'hp_fit_nominal_size_mm_inch'") || 
                               c.includes("'hp_fit_nominal_size_mm'"); // this handles exact match since some have _d but wait, we need exact key!
                
                // Let's use regex to extract key exactly
                const match = c.match(/key:\s*'([^']+)'/);
                if (match) {
                     const k = match[1];
                     if (k === 'hp_fit_part' || k === 'hp_fit_nominal_size_inch' || k === 'hp_fit_nominal_size_mm' || k === 'hp_fit_nominal_size_mm_inch') {
                          // flat
                     } else {
                          dimCount++;
                     }
                }
            }

            let isFirstDim = true;
            for (let j = 0; j < cleanCols.length; j++) {
                let cl = cleanCols[j];
                if (!cl.trim() || !cl.includes('{')) {
                    lines[columnsStartIdx + 1 + j] = cl;
                    continue;
                }
                
                let hasComma = false;
                if (cl.trim().endsWith(',')) {
                    cl = cl.substring(0, cl.lastIndexOf(','));
                    hasComma = true;
                }

                const match = cl.match(/key:\s*'([^']+)'/);
                let isFlat = false;
                if (match) {
                     const k = match[1];
                     if (k === 'hp_fit_part' || k === 'hp_fit_nominal_size_inch' || k === 'hp_fit_nominal_size_mm' || k === 'hp_fit_nominal_size_mm_inch') {
                          isFlat = true;
                     }
                }

                if (isFlat) {
                    // keep flat
                } else {
                    let extra = `, groupLabel: 'products.tables.dimensions_mm'`;
                    if (isFirstDim) {
                        extra += `, colSpan: ${dimCount}`;
                        isFirstDim = false;
                    }
                    const insertPos = cl.lastIndexOf('}');
                    cl = cl.substring(0, insertPos) + extra + ' ' + cl.substring(insertPos);
                }
                
                if (hasComma) cl += ',';
                lines[columnsStartIdx + 1 + j] = cl;
            }
            insideColumns = false;
        } else {
            columnsBlock.push(line);
        }
    }
}
fs.writeFileSync(file, lines.join('\n'));
console.log('SUCCESS');
