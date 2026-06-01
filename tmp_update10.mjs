import fs from 'fs';

const rawJson = fs.readFileSync('src/tabledata/PVC Conduit Pipes.json', 'utf8');
const data = JSON.parse(rawJson);

const cleanStr = (s) => {
    if (s === null || s === undefined || s === '' || s === '-' || s === '...') return '""';
    return JSON.stringify(String(s).trim());
};

const mapCols = (rows) => {
    const cols = new Set();
    rows.forEach(r => Object.keys(r).forEach(k => cols.add(k)));
    const mappedCols = Array.from(cols).map(k => {
        let labelKey = 'products.tables.conduit_' + k;
        if (k === 'part_no') labelKey = 'products.tables.part_no';
        if (k === 'dimension') labelKey = 'products.tables.dimension';
        if (k === 'trade_dimension') labelKey = 'products.tables.trade_dimension';
        if (k === 'min_id') labelKey = 'products.tables.min_id';
        if (k === 'pcs_pack') labelKey = 'products.tables.pcs_pack';
        if (k === 'mtrs_pack') labelKey = 'products.tables.mtrs_pack';
        if (k === 'length_pc') labelKey = 'products.tables.length_pc';
        if (k === 'wall_thickness_mm') labelKey = 'products.tables.wall_thickness_mm';
        
        return `{ key: ${JSON.stringify(k)}, label: ${JSON.stringify(labelKey)} }`;
    });
    return mappedCols.join(',\n      ');
};

const mapRows = (rows, colsArr) => {
    return rows.map(r => {
        let rh = {};
        colsArr.forEach(c => {
           let val = r[c];
           rh[c] = cleanStr(val);
        });
        return '{ ' + Object.keys(rh).map(k => `${JSON.stringify(k)}: ${rh[k]}`).join(', ') + ' }';
    });
};

const generateTable = (tableData) => {
    const rows = tableData;
    const colsArr = Array.from(new Set(rows.flatMap(r => Object.keys(r))));
    const columnsStr = mapCols(rows);
    const rowsStr = mapRows(rows, colsArr).join(',\n      ');
    
    return `columns: [\n      ${columnsStr}\n      ],\n      rows: [\n      ${rowsStr}\n      ]`;
};

const heavy = data['1250N / 750N / 320N']['heavy_grade'];
const medium = data['1250N / 750N / 320N']['medium_grade'];
const light = data['1250N / 750N / 320N']['light_grade'];
const sch40 = data['SCH 40'];
const sch80 = data['SCH 80'];

const heavyTable = generateTable(heavy);
const mediumTable = generateTable(medium);
const lightTable = generateTable(light);
const sch40Table = generateTable(sch40);
const sch80Table = generateTable(sch80);

let tsFile = fs.readFileSync('src/config/productDetails/pvcConduitPipesData.ts', 'utf8');

const injectTableData = (tableId, newTableData) => {
    const rx = new RegExp(`(id: "${tableId}",[\\s\\S]*?title: ".*?",)[\\s\\S]*?(?=\\n\\s*})`);
    tsFile = tsFile.replace(rx, `$1\n      ${newTableData}`);
};

injectTableData("heavy-grade-round-conduit-1250n-compression-force-table", heavyTable);
injectTableData("medium-grade-round-conduit-750n-compression-force-table", mediumTable);
injectTableData("light-grade-round-conduit-320n-compression-force-table", lightTable);
injectTableData("schedule-40-conduit-us-table", sch40Table);
injectTableData("schedule-80-conduit-us-table", sch80Table);

fs.writeFileSync('src/config/productDetails/pvcConduitPipesData.ts', tsFile);
console.log("SUCCESS");
