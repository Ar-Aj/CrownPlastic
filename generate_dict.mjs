import fs from 'fs';

const rawJson = fs.readFileSync('src/tabledata/HDPE Pipes.json', 'utf8');
const data = JSON.parse(rawJson);

const uniqueCols = new Set();
data.forEach(table => {
    table.columns.forEach(col => {
        uniqueCols.add(col.trim());
    });
});

console.log("Found " + uniqueCols.size + " unique columns");

// Let's generate a key mapping for these:
const mapping = {};
uniqueCols.forEach(col => {
    let key = col.toLowerCase()
        .replace(/,/g, '_')
        .replace(/[^a-z0-9_]+/g, '_')
        .replace(/^_+|_+$/g, '');
    
    // User requested wt_pn6 instead of nominal_wall_thickness_en_pn_6
    if (col.startsWith("Nominal wall thickness, en - ")) {
        key = "wt_" + col.split('-')[1].trim().toLowerCase().replace(/[^a-z0-9]+/g, '');
    }
    
    // Fallback specific
    if (col === "Nominal Outside Diameter dn") key = "nominal_od_dn";
    if (col === "Outside Diameter (mm)") key = "od_mm";
    
    mapping[col] = key;
});

// Translation mapping logic for Arabic:
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
    "Minimum": "الأدنى",
    "Maximum": "الأقصى",
    "(inch)": "(بوصة)",
    "Class": "فئة"
};

const translateToArabic = (s) => {
    let res = s;
    Object.keys(arabicMap).forEach(eng => {
        const regex = new RegExp(eng, 'gi');
        res = res.replace(regex, arabicMap[eng]);
    });
    // fix pn 3,2
    res = res.replace(/PN\s*(\d+),(\d+)/gi, 'PN $1.$2');
    s = s.replace(/PN\s*(\d+),(\d+)/gi, 'PN $1.$2'); // update eng
    
    // For Nominal Wall thickness en - PN
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

// Also fix eng translations exactly
const toEnglish = (s) => {
    if (s.startsWith("Nominal wall thickness, en - ")) {
        let pn = s.split('-')[1].trim().replace(/,/g, '.');
        return "Wall Thickness (mm) - " + pn;
    }
    return s;
};

const enKeys = [];
const arKeys = [];

Object.keys(mapping).forEach(col => {
    const key = mapping[col];
    const en = toEnglish(col);
    const ar = translateToArabic(col);
    
    enKeys.push(`${key}: "${en.replace(/"/g, '\\"')}",`);
    arKeys.push(`${key}: "${ar.replace(/"/g, '\\"')}",`);
});


console.log("\n=== ENGLISH ===");
console.log(enKeys.join('\n'));

console.log("\n=== ARABIC ===");
console.log(arKeys.join('\n'));
