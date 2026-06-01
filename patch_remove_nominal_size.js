const fs = require('fs');
const file = './src/config/productDetails/pvcHighPressureFittingsData.ts';
let lines = fs.readFileSync(file, 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
    if (i < 530) continue;
    if (i > 1045) break;

    // Delete the column for hp_fit_nominal_size_mm
    if (lines[i].includes("{ key: 'hp_fit_nominal_size_mm'")) {
        lines[i] = "";
    }

    // Delete the key from row data
    if (lines[i].includes("'hp_fit_nominal_size_mm':")) {
        // e.g. 'hp_fit_nominal_size_mm': '21.34', (including trailing comma and space)
        lines[i] = lines[i].replace(/'hp_fit_nominal_size_mm':\s*'[^']+',\s*/g, '');
        // handle if it is the last item (no trailing comma)
        lines[i] = lines[i].replace(/,\s*'hp_fit_nominal_size_mm':\s*'[^']+'/g, '');
    }
}

fs.writeFileSync(file, lines.filter(l => l !== "").join('\n'));
console.log("SUCCESS");
