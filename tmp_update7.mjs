import fs from 'fs';

// 1. Read the JSON and replace syntax errors
let rawJson = fs.readFileSync('src/tabledata/ASTM D 2466 Schedule 40 pressure fittings.json', 'utf8');

rawJson = rawJson.replace(/(\d)""/g, '$1\\""');

let data;
try {
  data = JSON.parse(rawJson);
} catch (e) {
  console.error("Failed to parse JSON after fixing:", e.message);
  process.exit(1);
}

// 2. Generate the TS config array from data
let tsArrayStr = `[\n`;

const generateId = (name) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

const formatSize = (val) => {
    if (!val) return '';
    let s = String(val).replace(/\\"/g, '"'); // Ensure we unescape if needed
    // Strip all quotes and add exactly ONE back
    s = s.replace(/"/g, '').trim();
    if(s.length > 0) return s + '"';
    return '';
};

data.forEach((fitting) => {
    const rawName = fitting.fitting_type;
    const name = rawName.replace(/\s+ASTM D 2466 SCH-40/i, '').replace(/\s+DIN 8063/i, '').replace(/\s+BS EN.+/i, '').trim();
    const idSlug = generateId(name);

    // Extract unique sizes for the modal sizes list
    const sizesSet = new Set();
    const rows = fitting.table_data;

    const columnsMap = new Map();
    
    rows.forEach(row => {
        let sizeVal = row['NOMINAL SIZE (Inch)'];
        if (sizeVal) {
            sizeVal = formatSize(sizeVal);
            sizesSet.add(sizeVal);
        }
        
        Object.keys(row).forEach(k => {
           let headerLabel = k;
           
           if(k === 'PART' || k === 'Item Code' || k.toLowerCase() === 'part') {
               columnsMap.set('partnumber', 'products.tables.part');
               return;
           }
           
           if(k === 'NOMINAL SIZE (Inch)' || k === 'Size') {
               columnsMap.set('size_inch', 'products.tables.nominal_size_inch');
               return;
           }
           
           // Dimensional keys
           let cleanKey = k.replace('DIMENSIONS (mm) - ', '').replace('DIMENSIONS - ', '').replace('DIMENSIONS', '').trim();
           // if it's G, use dim_g_inch
           let tsKey = '';
           let tsLabelKey = '';
           
           if (cleanKey === 'G') {
               tsKey = 'g_inch';
               tsLabelKey = 'products.tables.dim_g_inch';
           } else if (cleanKey === 'd') {
               tsKey = 'd_lower';
               tsLabelKey = 'products.tables.dim_d_lower';
           } else if (cleanKey === 'D') {
               tsKey = 'd_upper';
               tsLabelKey = 'products.tables.dim_d_upper';
           } else if (cleanKey === 'L') {
               tsKey = 'l';
               tsLabelKey = 'products.tables.dim_l';
           } else if (cleanKey === 'di') {
               tsKey = 'di';
               tsLabelKey = 'products.tables.hp_fit_dimensions_di';
           } else if (cleanKey === 'd1') {
               tsKey = 'd1';
               tsLabelKey = 'products.tables.dim_d1_lower';
           } else if (cleanKey === 'D1') {
               tsKey = 'd1_upper';
               tsLabelKey = 'products.tables.dim_d1_upper';
           } else if (cleanKey === 'D2') {
               tsKey = 'd2_upper';
               tsLabelKey = 'products.tables.dim_d2_upper';
           } else if (cleanKey === 'D3') {
               tsKey = 'd3';
               tsLabelKey = 'products.tables.hp_fit_dimensions_mm_d3';
           } else if (cleanKey === 'D4') {
               tsKey = 'd4';
               tsLabelKey = 'products.tables.hp_fit_dimensions_mm_d4';
           } else if (cleanKey === 'H') {
               tsKey = 'h_upper';
               tsLabelKey = 'products.tables.dim_h';
           } else if (cleanKey === 'h') {
               tsKey = 'h_lower';
               tsLabelKey = 'products.tables.hp_fit_nominal_size_mm_h';
           } else if (k === 'PN') {
               tsKey = 'pn';
               tsLabelKey = 'products.tables.hp_fit_pn';
           } else {
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
           } else if (k === 'NOMINAL SIZE (Inch)' || k === 'Size') {
               // ensure 1 quote
               if(v === undefined || v === null || v==='' || v==='-') rh['size_inch'] = '""';
               else {
                   let s = String(v).replace(/\\"/g, '"').replace(/"/g, '').trim();
                   if(s) s += '"';
                   rh['size_inch'] = JSON.stringify(s);
               }
           } else {
               let cleanKey = k.replace('DIMENSIONS (mm) - ', '').replace('DIMENSIONS - ', '').replace('DIMENSIONS', '').trim();
               let targetKey = '';
               // Match to key
               if (cleanKey === 'G') targetKey = 'g_inch';
               else if (cleanKey === 'd') targetKey = 'd_lower';
               else if (cleanKey === 'D') targetKey = 'd_upper';
               else if (cleanKey === 'L') targetKey = 'l';
               else if (cleanKey === 'di') targetKey = 'di';
               else if (cleanKey === 'd1') targetKey = 'd1';
               else if (cleanKey === 'D1') targetKey = 'd1_upper';
               else if (cleanKey === 'D2') targetKey = 'd2_upper';
               else if (cleanKey === 'D3') targetKey = 'd3';
               else if (cleanKey === 'D4') targetKey = 'd4';
               else if (cleanKey === 'H') targetKey = 'h_upper';
               else if (cleanKey === 'h') targetKey = 'h_lower';
               else if (k === 'PN') targetKey = 'pn';
               else targetKey = generateId(cleanKey);

               if(v === undefined || v === null || v==='' || v==='-') rh[targetKey] = '""';
               else rh[targetKey] = JSON.stringify(String(v).replace(/"/g, ''));
           }
        });
        
        return '{ ' + Object.keys(rh).map(k => `${JSON.stringify(k)}: ${rh[k]}`).join(', ') + ' }';
    });

    tsArrayStr += `    {
      id: "astm-d-2466-${idSlug}",
      name: ${JSON.stringify(name)},
      family: 'moulded' as const,
      image: '/images/products/placeholders/fitting-placeholder.jpg',
      sizes: [
      ${sizesArr}
      ],
      table: {
        id: "astm-d-2466-${idSlug}-table",
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

tsArrayStr += `  ]`;

let tsFile = fs.readFileSync('src/config/productDetails/pvcSch40FittingsData.ts', 'utf8');
tsFile = tsFile.replace(/fittings:\s*\[[\s\S]*\]\s*,\s*downloads/m, 'fittings: ' + tsArrayStr + ',\n  downloads');
fs.writeFileSync('src/config/productDetails/pvcSch40FittingsData.ts', tsFile);

console.log("Success updating configuration.");
