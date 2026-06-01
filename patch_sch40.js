const fs = require('fs');
const file = './src/config/productDetails/pvcSch40FittingsData.ts';
let lines = fs.readFileSync(file, 'utf8').split('\n');

let insideColumns = false;
let columnsStartIdx = -1;
let columnsBlock = [];

for (let i = 0; i < lines.length; i++) {
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
                 res = res.replace(/,\s*groupLabel:\s*(['"])[^'"]+\1/g, '');
                 res = res.replace(/,\s*colSpan:\s*\d+/g, '');
                 return res;
            });

            // Which ones are flat?
            // "partnumber"
            // "size_inch"
            
            for (let c of cleanCols) {
                if (!c.trim() || !c.includes('{')) continue;
                
                const match = c.match(/key:\s*(['"])([^'"]+)\1/);
                if (match) {
                     const k = match[2];
                     if (k === 'partnumber' || k === 'size_inch') {
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

                const match = cl.match(/key:\s*(['"])([^'"]+)\1/);
                let isFlat = false;
                if (match) {
                     const k = match[2];
                     if (k === 'partnumber' || k === 'size_inch') {
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
