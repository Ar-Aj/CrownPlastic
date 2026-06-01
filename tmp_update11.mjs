import fs from 'fs';

const rawJson = fs.readFileSync('src/tabledata/PP-R Pipes.json', 'utf8');
const data = JSON.parse(rawJson);

const cleanStr = (s) => {
    if (s === null || s === undefined || s === '' || s === '-' || s === '...') return '""';
    return JSON.stringify(String(s).trim());
};

const keyMapping = {
    "PART": { k: "part", l: "products.tables.part" },
    "DIMENSIONS": { k: "nominal_od", l: "products.tables.nominal_od" },
    "WALL THICKNESS": { k: "wall_thickness", l: "products.tables.wall_thickness" },
    "INNER DIAMETER": { k: "inner_diameter", l: "products.tables.inner_diameter" },
    "PACKING UNIT": { k: "packing_unit", l: "products.tables.packing_unit" },
    "Kg/Mtr.": { k: "kg_mtr", l: "products.tables.kg_mtr" }
};

const mapCols = (rows) => {
    const cols = new Set();
    rows.forEach(r => Object.keys(r).forEach(k => cols.add(k)));
    const mappedCols = Array.from(cols).map(k => {
        let mapping = keyMapping[k];
        if(!mapping) mapping = { k: k.toLowerCase().replace(/[^a-z0-9]+/g, '_'), l: 'products.tables.ppr_' + k.toLowerCase().replace(/[^a-z0-9]+/g, '_') };
        return `{ key: ${JSON.stringify(mapping.k)}, label: ${JSON.stringify(mapping.l)} }`;
    });
    return mappedCols.join(',\n      ');
};

const mapRows = (rows, colsArr) => {
    return rows.map(r => {
        let rh = {};
        colsArr.forEach(c => {
           let val = r[c];
           let mappedKey = keyMapping[c] ? keyMapping[c].k : c.toLowerCase().replace(/[^a-z0-9]+/g, '_');
           rh[mappedKey] = cleanStr(val);
        });
        return '{ ' + Object.keys(rh).map(k => `${JSON.stringify(k)}: ${rh[k]}`).join(', ') + ' }';
    });
};

const generateTable = (cat) => {
    if (!cat.table_data) {
        // preserve or return empty string to indicate no table override
        return null; 
    }
    const rows = cat.table_data;
    const colsArr = Array.from(new Set(rows.flatMap(r => Object.keys(r))));
    const columnsStr = mapCols(rows);
    const rowsStr = mapRows(rows, colsArr).join(',\n      ');
    
    // Using generate id for table id
    const tId = cat.sdr_rating.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    return `    {
      id: "${tId}-table",
      title: ${JSON.stringify(cat.sdr_rating)},
      columns: [\n      ${columnsStr}\n      ],
      rows: [\n      ${rowsStr}\n      ],
    }`;
};

const t11 = generateTable(data[0]);
const t74 = generateTable(data[1]);
const t6 = generateTable(data[2]);
const t5 = generateTable(data[3]); // This is null

let tsFile = fs.readFileSync('src/config/productDetails/pprPipesData.ts', 'utf8');

const injectTableData = (subSlug, tableStr) => {
    if (!tableStr) return; // Do not overwrite if table is null (e.g., SDR5)
    
    // Matches up to fittings
    const rx = new RegExp(`(slug: "${subSlug}",[\\s\\S]*?pipesTables:\\s*\\[)[\\s\\S]*?(\\],\\s*fittings:)`);
    tsFile = tsFile.replace(rx, `$1\n${tableStr}\n  $2`);
};

injectTableData("ppr-pipes-sdr11-pn10", t11);
injectTableData("ppr-pipes-sdr7-4-pn16", t74);
injectTableData("ppr-pipes-sdr6-pn20", t6);
// Not injecting t5 since it's null

fs.writeFileSync('src/config/productDetails/pprPipesData.ts', tsFile);
console.log("SUCCESS");
