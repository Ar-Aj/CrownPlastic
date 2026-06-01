import fs from 'fs';

// 1. Load Data
const rawJson = fs.readFileSync('src/tabledata/HDPE Pipes.json', 'utf8');
const data = JSON.parse(rawJson);

const uniqueCols = new Set();
data.forEach(table => {
    table.columns.forEach(col => {
        uniqueCols.add(col.trim());
    });
});

const mapping = {};
uniqueCols.forEach(col => {
    let key = col.toLowerCase()
        .replace(/,/g, '_')
        .replace(/[^a-z0-9_]+/g, '_')
        .replace(/^_+|_+$/g, '');
    
    if (col.startsWith("Nominal wall thickness, en - ")) {
        key = "wt_" + col.split('-')[1].trim().toLowerCase().replace(/[^a-z0-9]+/g, '');
    }
    
    if (col === "Nominal Outside Diameter dn") key = "nominal_od_dn";
    if (col === "Outside Diameter (mm)") key = "od_mm";
    
    mapping[col] = key;
});

const arabicMap = {
    "Nominal Outside Diameter dn": "القطر الخارجي الاسمي dn",
    "Nominal wall thickness": "سماكة الجدار الاسمية",
    "Outside Diameter": "القطر الخارجي",
    "Wall Thickness": "سماكة الجدار",
    "Bar Rating": "تصنيف بار",
    "Ordering Code": "رمز الطلب",
    "Nominal Inside Diameter": "القطر الداخلي الاسمي",
    "(in)": "(بوصة)",
    "(mm)": "(مم)",
    "(m.m)": "(مم)",
    "Minimum Inside Diameter": "الحد الأدنى للقطر الداخلي",
    "Minimum Wall Thickness": "الحد الأدنى لسماكة الجدار",
    "Nominal Working Pressure": "ضغط التشغيل الاسمي",
    "Coil Size (Meters)": "حجم اللفة (متر)",
    "Nominal Pipe Size Inch": "حجم الأنبوب الاسمي بوصة",
    "Minimum": "الحد الأدنى",
    "Maximum": "الحد الأقصى",
    "(inch)": "(بوصة)",
    "Class": "فئة"
};

const translateToArabic = (s) => {
    let res = s;
    Object.keys(arabicMap).forEach(eng => {
        const regex = new RegExp(eng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        res = res.replace(regex, arabicMap[eng]);
    });
    res = res.replace(/PN\s*(\d+),(\d+)/gi, 'PN $1.$2');
    
    if (s.startsWith("Nominal wall thickness, en - ")) {
        let pn = s.split('-')[1].trim().replace(/,/g, '.');
        return "سماكة الجدار الاسمي (مم) - " + pn;
    }
    
    if (s.startsWith("Wall Thickness (mm) - ")) {
        let bar = s.split('-')[1].trim();
        bar = bar.replace(/Bar Rating/gi, "تصنيف بار");
        return "سماكة الجدار (مم) - " + bar;
    }
    
    return res;
};

const toEnglish = (s) => {
    if (s.startsWith("Nominal wall thickness, en - ")) {
        let pn = s.split('-')[1].trim().replace(/,/g, '.');
        return "Wall Thickness (mm) - " + pn;
    }
    return s;
};

// 2. Generate Tables
const cleanStr = (s) => {
    if (s === null || s === undefined || s === '' || s === '-' || s === '...') return '""';
    return JSON.stringify(String(s).trim());
};

const getColsStr = (cols) => {
    return cols.map(c => {
        return `{ key: ${JSON.stringify(mapping[c])}, label: ${JSON.stringify("products.tables." + mapping[c])} }`;
    }).join(',\n      ');
};

const getRowsStr = (cols, rows) => {
    return rows.map(r => {
        let obj = {};
        cols.forEach((c, idx) => {
            let val = r[idx];
            obj[mapping[c]] = cleanStr(val);
        });
        return '{ ' + Object.keys(obj).map(k => `${JSON.stringify(k)}: ${obj[k]}`).join(', ') + ' }';
    }).join(',\n      ');
};

let tsFile = fs.readFileSync('src/config/productDetails/hdpePipesData.ts', 'utf8');

const injectTableData = (subSlug, tableObj) => {
    const tableStr = `    {
      id: "${subSlug}-table",
      title: ${JSON.stringify(tableObj.category)},
      columns: [\n      ${getColsStr(tableObj.columns)}\n      ],
      rows: [\n      ${getRowsStr(tableObj.columns, tableObj.data)}\n      ],
    }`;
    const rx = new RegExp(`(slug: "${subSlug}",[\\s\\S]*?pipesTables:\\s*\\[)[\\s\\S]*?(\\],\\s*fittings:)`);
    tsFile = tsFile.replace(rx, `$1\n${tableStr}\n  $2`);
};

injectTableData("hdpe-pipes-5mpa-pe63", data[0]);
injectTableData("hdpe-pipes-6-3mpa-pe80", data[1]);
injectTableData("hdpe-pipes-8mpa-pe100", data[2]);
injectTableData("hdpe-pipes-din-8072", data[3]);
injectTableData("hdpe-pipes-asae-s435", data[4]);
injectTableData("hdpe-pipes-aust-std-2698", data[5]);
injectTableData("hdpe-pipes-bs-1972-67", data[6]);

fs.writeFileSync('src/config/productDetails/hdpePipesData.ts', tsFile);

// 3. Inject i18n
const seenKeys = new Set();
const enKeys = [];
const arKeys = [];
Object.keys(mapping).forEach(col => {
    const key = mapping[col];
    if (seenKeys.has(key)) return;
    seenKeys.add(key);
    enKeys.push(`      ${key}: "${toEnglish(col).replace(/"/g, '\\"')}",`);
    arKeys.push(`      ${key}: "${translateToArabic(col).replace(/"/g, '\\"')}",`);
});

let enStr = fs.readFileSync('src/i18n/en.ts', 'utf8');
let arStr = fs.readFileSync('src/i18n/ar.ts', 'utf8');

enStr = enStr.replace(/(\s+dim_d_l_h: "d L H \(mm\)",)/, `$1\n${enKeys.join('\n')}`);
arStr = arStr.replace(/(\s+dim_d_l_h: "d L H \(mm\)",)/, `$1\n${arKeys.join('\n')}`);

fs.writeFileSync('src/i18n/en.ts', enStr);
fs.writeFileSync('src/i18n/ar.ts', arStr);

console.log("SUCCESS");
