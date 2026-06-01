import fs from 'fs';

const generateId = (name) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

const formatSize = (val) => {
    if (!val) return '';
    let s = String(val).replace(/\\"/g, '"');
    s = s.replace(/"/g, '').trim();
    if(s.length > 0) return s + '"';
    return '';
};

const processFile = (filePath, prefixId) => {
    let rawJson = fs.readFileSync(filePath, 'utf8');
    rawJson = rawJson.replace(/(\d)""/g, '$1\\""'); // Fix syntax errors
    
    let data;
    try {
        data = JSON.parse(rawJson);
    } catch (e) {
        console.error("Failed to parse JSON for", filePath, e.message);
        process.exit(1);
    }

    let tsArrayStr = `[\n`;

    data.forEach((fitting) => {
        const rawName = fitting.fitting_name;
        if(!rawName) return;
        const name = rawName.replace(/\s+ASTM D 2466 SCH-40/i, '').replace(/\s+DIN 8063/i, '').replace(/\s+BS EN.+/i, '').trim();
        const idSlug = generateId(name);

        const sizesSet = new Set();
        const rows = fitting.data;
        const columnsMap = new Map();
        
        rows.forEach(row => {
            let sizeKey = Object.keys(row).find(k => k.toLowerCase().includes('nominal size') || k.toLowerCase().includes('size'));
            let sizeVal = row[sizeKey];
            
            if (sizeVal) {
                if(sizeKey.includes('Inch')) {
                    sizeVal = formatSize(sizeVal);
                }
                sizesSet.add(sizeVal);
            }
            
            Object.keys(row).forEach(k => {
               if(k === 'PART' || k === 'Item Code' || k.toLowerCase() === 'part') {
                   columnsMap.set('partnumber', 'products.tables.part');
                   return;
               }
               
               if(k.toLowerCase().includes('nominal size') || k.toLowerCase() === 'size') {
                   if(k.includes('LXW')) {
                        columnsMap.set('sizeMm', 'products.tables.nominal_size_mm_lxw');
                   } else if(k.includes('Inch')) {
                        columnsMap.set('size_inch', 'products.tables.nominal_size_inch');
                   } else {
                        columnsMap.set('sizeMm', 'products.tables.nominal_size_mm');
                   }
                   return;
               }
               
               let cleanKey = k.replace('DIMENSIONS (mm) - ', '').replace('DIMENSIONS - ', '').replace('DIMENSIONS', '').trim();
               let tsKey = '';
               let tsLabelKey = '';
               
               if (cleanKey === 'G') { tsKey = 'g'; tsLabelKey = 'products.tables.dim_g'; } 
               else if (cleanKey === 'd') { tsKey = 'd_lower'; tsLabelKey = 'products.tables.dim_d_lower'; } 
               else if (cleanKey === 'D') { tsKey = 'd_upper'; tsLabelKey = 'products.tables.dim_d_upper'; } 
               else if (cleanKey === 'L') { tsKey = 'l'; tsLabelKey = 'products.tables.dim_l'; } 
               else if (cleanKey === 'L1') { tsKey = 'l1'; tsLabelKey = 'products.tables.dim_l1'; } 
               else if (cleanKey === 'L2') { tsKey = 'l2'; tsLabelKey = 'products.tables.dim_l2'; } 
               else if (cleanKey === 'H') { tsKey = 'h_upper'; tsLabelKey = 'products.tables.dim_h'; } 
               else if (cleanKey === 'H1') { tsKey = 'h1'; tsLabelKey = 'products.tables.dim_h1'; } 
               else if (cleanKey === 'H2') { tsKey = 'h2'; tsLabelKey = 'products.tables.dim_h2'; } 
               else if (cleanKey === 'B') { tsKey = 'b'; tsLabelKey = 'products.tables.dim_b'; } 
               else if (cleanKey === 'Tr') { tsKey = 'tr'; tsLabelKey = 'products.tables.dim_tr'; } 
               else if (cleanKey === 'd1') { tsKey = 'd1'; tsLabelKey = 'products.tables.dim_d1_lower'; } 
               else if (cleanKey === 'd2') { tsKey = 'd2'; tsLabelKey = 'products.tables.dim_d2_lower'; } 
               else if (cleanKey === 'D1') { tsKey = 'd1_upper'; tsLabelKey = 'products.tables.dim_d1_upper'; } 
               else if (cleanKey === 'D2') { tsKey = 'd2_upper'; tsLabelKey = 'products.tables.dim_d2_upper'; } 
               else if (cleanKey === 'D_secondary') { tsKey = 'd_secondary'; tsLabelKey = 'products.tables.dim_d_secondary'; } 
               else if (cleanKey === 'd3X3') { tsKey = 'd3x3'; tsLabelKey = 'products.tables.dim_d3x3'; } 
               else if (cleanKey === 'd1x3') { tsKey = 'd1x3'; tsLabelKey = 'products.tables.dim_d1x3'; } 
               else {
                   tsKey = generateId(cleanKey);
                   tsLabelKey = k;
               }
               
               if(!columnsMap.has(tsKey)) {
                   columnsMap.set(tsKey, tsLabelKey);
               }
            });
        });

        const sizesArr = Array.from(sizesSet).map(s => `{ sizeMm: ${JSON.stringify(s)} }`).join(',\n      ');
        const colStr = Array.from(columnsMap.entries()).map(([k, label]) => `{ key: ${JSON.stringify(k)}, label: ${JSON.stringify(label)} }`).join(',\n        ');

        const rowStrs = rows.map(r => {
            let rh = {};
            Object.keys(r).forEach(k => {
               let v = r[k];
               
               if(k === 'PART' || k === 'Item Code' || k.toLowerCase() === 'part') {
                   if(v === undefined || v === null || v==='' || v==='-') rh['partnumber'] = '""';
                   else rh['partnumber'] = JSON.stringify(String(v).replace(/"/g, ''));
               } else if (k.toLowerCase().includes('nominal size') || k.toLowerCase() === 'size') {
                   if(k.includes('Inch')) {
                       if(v === undefined || v === null || v==='' || v==='-') rh['sizeMm'] = '""';
                       else {
                           let s = String(v).replace(/\\"/g, '"').replace(/"/g, '').trim();
                           if(s) s += '"';
                           rh['sizeMm'] = JSON.stringify(s);
                       }
                   } else {
                       if(v === undefined || v === null || v==='' || v==='-') rh['sizeMm'] = '""';
                       else rh['sizeMm'] = JSON.stringify(String(v).replace(/"/g, ''));
                   }
               } else {
                   let cleanKey = k.replace('DIMENSIONS (mm) - ', '').replace('DIMENSIONS - ', '').replace('DIMENSIONS', '').trim();
                   let targetKey = '';
                   if (cleanKey === 'G') { targetKey = 'g'; } 
                   else if (cleanKey === 'd') { targetKey = 'd_lower'; } 
                   else if (cleanKey === 'D') { targetKey = 'd_upper'; } 
                   else if (cleanKey === 'L') { targetKey = 'l'; } 
                   else if (cleanKey === 'L1') { targetKey = 'l1'; } 
                   else if (cleanKey === 'L2') { targetKey = 'l2'; } 
                   else if (cleanKey === 'H') { targetKey = 'h_upper'; } 
                   else if (cleanKey === 'H1') { targetKey = 'h1'; } 
                   else if (cleanKey === 'H2') { targetKey = 'h2'; } 
                   else if (cleanKey === 'B') { targetKey = 'b'; } 
                   else if (cleanKey === 'Tr') { targetKey = 'tr'; } 
                   else if (cleanKey === 'd1') { targetKey = 'd1'; } 
                   else if (cleanKey === 'd2') { targetKey = 'd2'; } 
                   else if (cleanKey === 'D1') { targetKey = 'd1_upper'; } 
                   else if (cleanKey === 'D2') { targetKey = 'd2_upper'; } 
                   else if (cleanKey === 'D_secondary') { targetKey = 'd_secondary'; } 
                   else if (cleanKey === 'd3X3') { targetKey = 'd3x3'; } 
                   else if (cleanKey === 'd1x3') { targetKey = 'd1x3'; } 
                   else targetKey = generateId(cleanKey);

                   if(v === undefined || v === null || v==='' || v==='-') rh[targetKey] = '""';
                   else rh[targetKey] = JSON.stringify(String(v).replace(/"/g, ''));
               }
            });
            
            return '{ ' + Object.keys(rh).map(k => `${JSON.stringify(k)}: ${rh[k]}`).join(', ') + ' }';
        });

        tsArrayStr += `    {
      id: "${prefixId}-${idSlug}",
      name: ${JSON.stringify(name)},
      family: 'moulded' as const,
      image: '/images/products/placeholders/fitting-placeholder.jpg',
      sizes: [
      ${sizesArr}
      ],
      table: {
        id: "${prefixId}-${idSlug}-table",
        title: ${JSON.stringify(name)},
        columns: [
        ${colStr}
        ],
        rows: [
        ${rowStrs.join(',\n        ')}
        ],
      },
    },
`;

    });

    tsArrayStr += `]`;
    return tsArrayStr;
};

const bs1329Array = processFile('src/tabledata/BS EN 1329-1 2014.json', 'bs-en-1329');
const bs1401Array = processFile('src/tabledata/BS EN 1401 .json', 'bs-en-1401');

let tsFile = fs.readFileSync('src/config/productDetails/drainageData.ts', 'utf8');
tsFile = tsFile.replace(/export const bsEn1329Fittings: Fitting\[\] = \[\];/, `export const bsEn1329Fittings: Fitting[] = ${bs1329Array};`);
tsFile = tsFile.replace(/export const bsEn1401Fittings: Fitting\[\] = \[\];/, `export const bsEn1401Fittings: Fitting[] = ${bs1401Array};`);

fs.writeFileSync('src/config/productDetails/drainageData.ts', tsFile);
console.log("Updated drainageData.ts successfully.");
