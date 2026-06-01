import fs from 'fs';

const cleanStr = (s) => {
    if (s === null || s === undefined || s === '' || s === '-' || s === '...') return '""';
    let noQuotes = String(s).replace(/"/g, '').trim();
    if (noQuotes === '') return '""';
    return JSON.stringify(noQuotes);
};

// Returns size string formatted if inch, or metric
const formatSizeStr = (s, isInch) => {
    if (s === null || s === undefined || s === '' || s === '-' || s === '...') return '""';
    let cleaned = String(s).replace(/\\"/g, '"').replace(/"/g, '').trim();
    if(cleaned === '') return '""';
    return JSON.stringify(isInch ? `${cleaned}"` : cleaned);
};

const generateId = (name) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

let rawJson = fs.readFileSync('src/tabledata/PVC Duct Pipes and fittings.json', 'utf8');
rawJson = rawJson.replace(/(\d)""/g, '$1\\""');
const data = JSON.parse(rawJson);

const ductPipes = data.duct_pipes;
const ductFittings = data.duct_fittings;

const pipesTranslations = new Set();
const fittingsTranslations = new Set();

const newPipesArray = [];

ductPipes.forEach((pipeCat) => {
    let rows = pipeCat.table_data;
    const columnsMap = new Map();
    
    // Scan all rows to find all keys
    rows.forEach(r => {
        Object.keys(r).forEach(k => {
            let keyId = generateId(k);
            if(k.includes('Nominal Size (Inch)') || k.includes('Nominal Size inch')) {
                keyId = 'size_inch';
            } else if (k.includes('Nominal Size mm')) {
                keyId = 'sizeMm';
            } else if (k.toLowerCase() === 'product') {
                keyId = 'product';
            }
            
            // Generate clean label without (mm) usually, except diameter/thickness if we want to follow precedent.
            // But user said: "Arabic Rule: Only translate descriptive words like "Min", "Max", or "Wall Thickness"."
            
            if(!columnsMap.has(keyId)) {
                let tsLabelKey = 'products.tables.duct_' + keyId;
                if(keyId === 'size_inch') tsLabelKey = 'products.tables.nominal_size_inch';
                if(keyId === 'sizeMm') tsLabelKey = 'products.tables.nominal_size_mm';
                if(keyId === 'product') tsLabelKey = 'products.tables.product';
                
                columnsMap.set(keyId, { original: k, tsLabelKey });
                pipesTranslations.add({ keyId: tsLabelKey, original: k });
            }
        });
    });
    
    const rowStrs = rows.map(r => {
        let rh = {};
        columnsMap.forEach((v, keyId) => {
            let val = r[v.original];
            if (keyId === 'size_inch') {
                rh[keyId] = formatSizeStr(val, true);
            } else if (keyId === 'sizeMm') {
                rh[keyId] = formatSizeStr(val, false);
            } else {
                rh[keyId] = cleanStr(val);
            }
        });
        return '{ ' + Object.keys(rh).map(k => `${JSON.stringify(k)}: ${rh[k]}`).join(', ') + ' }';
    });
    
    const colStr = Array.from(columnsMap.entries()).map(([k, v]) => `{ key: ${JSON.stringify(k)}, label: ${JSON.stringify(v.tsLabelKey)} }`).join(',\n        ');
    
    const standardName = pipeCat.standard.split('/')[0].replace(/[^a-zA-Z0-9]/g, ' ').trim();
    const tableId = `pvc-duct-pipes-${generateId(standardName)}-table`;
    
    newPipesArray.push(`    {
      id: "${tableId}",
      title: ${JSON.stringify(pipeCat.standard)},
      columns: [
        ${colStr}
      ],
      rows: [
        ${rowStrs.join(',\n        ')}
      ],
    }`);
});

let ductPipesTsFile = fs.readFileSync('src/config/productDetails/pvcDuctPipesData.ts', 'utf8');
// For pipes we have multiple objects: pvcDuctPipesNemaTc2, pvcDuctPipesNemaTc68, pvcDuctPipesDin8062, etc.
// The easiest way is to regex replace the pipesTables array.
const replacePipesTable = (varName, index) => {
    const regex = new RegExp(`(export const \\b${varName}\\b[\\s\\S]*?pipesTables:\\s*\\[)[\\s\\S]*?(\\],\\s*fittings:)`);
    ductPipesTsFile = ductPipesTsFile.replace(regex, `$1\n${newPipesArray[index]}\n  $2`);
};

replacePipesTable('pvcDuctPipesNemaTc2', 0);
replacePipesTable('pvcDuctPipesNemaTc68', 1);
replacePipesTable('pvcDuctPipesDin8062', 2);
replacePipesTable('pvcDuctPipesEtisalatDu', 3);
replacePipesTable('pvcDuctPipesBs350506', 4);
replacePipesTable('pvcDuctPipesNonStandard', 5);

fs.writeFileSync('src/config/productDetails/pvcDuctPipesData.ts', ductPipesTsFile);

let fittingsStr = `[\n`;
ductFittings.forEach(fit => {
    const name = fit.type;
    const idSlug = generateId(name);
    
    const rows = fit.table_data;
    const sizesSet = new Set();
    const columnsMap = new Map();
    
    rows.forEach(r => {
        let sizeVal = r['Ø/SIZE'] || r['Size'] || '';
        if (sizeVal && sizeVal !== '-') {
            sizesSet.add(sizeVal);
        }
        
        Object.keys(r).forEach(k => {
            let keyId = generateId(k);
            if (k === 'Ø/SIZE' || k === 'Size') keyId = 'size';
            
            if(!columnsMap.has(keyId)) {
                let tsLabelKey = 'products.tables.duct_fit_' + keyId;
                columnsMap.set(keyId, { original: k, tsLabelKey });
                fittingsTranslations.add({ keyId: tsLabelKey, original: k });
            }
        });
    });
    
    const sizesArr = Array.from(sizesSet).map(s => `{ sizeMm: ${JSON.stringify(s)} }`).join(',\n      ');
    const colStr = Array.from(columnsMap.entries()).map(([k, v]) => `{ key: ${JSON.stringify(k)}, label: ${JSON.stringify(v.tsLabelKey)} }`).join(',\n        ');
    
    const rowStrs = rows.map(r => {
        let rh = {};
        columnsMap.forEach((v, keyId) => {
            let val = r[v.original];
            if (val === '-' || val === null) val = '""';
            else val = JSON.stringify(String(val).trim());
            rh[keyId] = val;
        });
        return '{ ' + Object.keys(rh).map(k => `${JSON.stringify(k)}: ${rh[k]}`).join(', ') + ' }';
    });
    
    fittingsStr += `    {
      id: "duct-${idSlug}",
      name: ${JSON.stringify(name)},
      family: 'moulded' as const,
      image: '/images/products/placeholders/fitting-placeholder.jpg',
      sizes: [
      ${sizesArr}
      ],
      table: {
        id: "duct-${idSlug}-table",
        title: ${JSON.stringify(name)},
        columns: [
        ${colStr}
        ],
        rows: [
        ${rowStrs.join(',\n        ')}
        ],
      },
    },\n`;
});
fittingsStr += `  ]`;

let ductFittingsTsFile = fs.readFileSync('src/config/productDetails/pvcDuctFittingsData.ts', 'utf8');
ductFittingsTsFile = ductFittingsTsFile.replace(/fittings:\s*\[[\s\S]*?\],\s*downloads:/, `fittings: ${fittingsStr},\n  downloads:`);
fs.writeFileSync('src/config/productDetails/pvcDuctFittingsData.ts', ductFittingsTsFile);

let outStr = "Translation keys to add:\n";
[...pipesTranslations].forEach(t => outStr += `PIPES: ${t.keyId} = ${t.original}\n`);
[...fittingsTranslations].forEach(t => outStr += `FITTINGS: ${t.keyId} = ${t.original}\n`);
fs.writeFileSync('trans.txt', outStr);
console.log("Wrote trans.txt");
