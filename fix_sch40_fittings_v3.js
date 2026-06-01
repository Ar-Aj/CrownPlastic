const fs = require('fs');
const path = 'c:/crown/CrownPlastic/src/config/productDetails/pvcSch40FittingsData.ts';
let content = fs.readFileSync(path, 'utf8');

function fixFitting(id, headerOverrideLabel, replaceSizes) {
    const startIndex = content.indexOf('id: "' + id + '"');
    if (startIndex === -1) {
        console.error("Could not find " + id);
        return;
    }
    let endIndex = content.indexOf('id: "', startIndex + 10);
    if (endIndex === -1) endIndex = content.indexOf('  ],', startIndex);
    
    let block = content.substring(startIndex, endIndex);

    if (!block.includes('sizeHeaderOverride')) {
        block = block.replace(
            /(image: '[^']+',)/,
            "\\n      sizeHeaderOverride: '" + headerOverrideLabel + "',"
        );
    }

    // Run custom size replacer
    block = replaceSizes(block);

    content = content.substring(0, startIndex) + block + content.substring(endIndex);
}

// 1. REDUCER BUSH/SOCKET
fixFitting('reducer-bush-socket', 'products.tables.hp_fit_nominal_size_inch_inch', (b) => {
    return b.replace(/"(\d+(?: \d+\/\d+)?|\d+\/\d+)X(\d+(?: \d+\/\d+)?|\d+\/\d+)\\""/g, '"\\\" X \\\""');
});

// 2. FEMALE THREADED REDUCER BUSH
fixFitting('female-threaded-reducer-bush', 'products.tables.hp_fit_nominal_size_inch_inch', (b) => {
    return b.replace(/"(\d+(?: \d+\/\d+)?|\d+\/\d+)X(\d+(?: \d+\/\d+)?|\d+\/\d+)\\""/g, '"\\\" X \\\""');
});

// 3. REDUCING TEE
fixFitting('reducing-tee', 'products.tables.hp_fit_nominal_size_inch_inch_inch', (b) => {
    return b.replace(/"(\d+(?: \d+\/\d+)?|\d+\/\d+)X(\d+(?: \d+\/\d+)?|\d+\/\d+)X(\d+(?: \d+\/\d+)?|\d+\/\d+)\\""/g, '"\\\" X \\\" X \\\""');
});

// 4. FEMALE THREADED REDUCING TEE
fixFitting('female-threaded-reducing-tee', 'products.tables.hp_fit_nominal_size_inch_inch_inch', (b) => {
    return b.replace(/"(\d+(?: \d+\/\d+)?|\d+\/\d+)X(\d+(?: \d+\/\d+)?|\d+\/\d+)X(\d+(?: \d+\/\d+)?|\d+\/\d+)\\""/g, '"\\\" X \\\" X \\\""');
});

// 5. FEMALE THREADED EQUAL TEE
fixFitting('female-threaded-equal-tee', 'products.tables.hp_fit_nominal_size_inch_inch_inch', (b) => {
    return b.replace(/"(\d+(?: \d+\/\d+)?|\d+\/\d+)X(\d+(?: \d+\/\d+)?|\d+\/\d+)X(\d+(?: \d+\/\d+)?|\d+\/\d+)\\""/g, '"\\\" X \\\" X \\\""');
});

// 6. REPAIR SOCKET/ CONVERTABLE SOCKET
fixFitting('repair-socket-convertable-socket', 'products.tables.hp_fit_nominal_size_inch_mm', (b) => {
    return b.replace(/"(\d+(?: \d+\/\d+)?|\d+\/\d+)X(\d+)\\""/g, '"\\\" X \"');
});

fs.writeFileSync(path, content, 'utf8');
console.log('File updated successfully.');
