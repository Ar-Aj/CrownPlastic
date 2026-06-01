import fs from 'fs';

let rawJson = fs.readFileSync('src/tabledata/PEX Pipes .json', 'utf8');
const startIdx = rawJson.indexOf('[');
const endIdx = rawJson.lastIndexOf(']');
rawJson = rawJson.substring(startIdx, endIdx + 1);
const parsed = JSON.parse(rawJson);
const tableObj = parsed[0];

const keyMap = {
    "Nominal Outside Diameter (mm)": "nominal_od",
    "Wall Thickness (mm) - PN 12.5": "wt_pn12_5",
    "Wall Thickness (mm) - PN 20": "wt_pn20"
};

const cleanStr = (s) => {
    if (s === null || s === undefined || s === '' || s === '-' || s === '...') return '""';
    return JSON.stringify(String(s).trim());
};

const getColsStr = () => {
    return Object.keys(keyMap).map(k => {
        return `{ key: ${JSON.stringify(keyMap[k])}, label: ${JSON.stringify("products.tables." + keyMap[k])} }`;
    }).join(',\n        ');
};

const getRowsStr = (dataArr) => {
    return dataArr.map(r => {
        let obj = {};
        Object.keys(keyMap).forEach((c) => {
            let val = r[c];
            obj[keyMap[c]] = cleanStr(val);
        });
        return '{ ' + Object.keys(obj).map(k => `${JSON.stringify(k)}: ${obj[k]}`).join(', ') + ' }';
    }).join(',\n        ');
};

let tsFile = fs.readFileSync('src/config/productDetails/pexPipesData.ts', 'utf8');

const tableStr = `    {
      id: "pex-pn-12-5-pn-20-table",
      title: ${JSON.stringify(tableObj.table_name)},
      columns: [\n        ${getColsStr()}\n      ],
      rows: [\n        ${getRowsStr(tableObj.data)}\n      ]
    }`;

const rx = new RegExp(`(id:\\s*'pex-pn-12-5-pn-20-table'|"pex-pn-12-5-pn-20-table"[\\s\\S]*?\\{)[\\s\\S]*?(\\}\n\\s*\\])`);

const fullRx = /(pipesTables:\s*\[\s*)[\s\S]*?(\],\s*fittings:)/;
tsFile = tsFile.replace(fullRx, `$1${tableStr}\n  $2`);

fs.writeFileSync('src/config/productDetails/pexPipesData.ts', tsFile);
console.log("SUCCESS");
