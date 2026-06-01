const fs = require('fs');
const path = 'c:/crown/CrownPlastic/src/config/productDetails/pvcSch40FittingsData.ts';
let content = fs.readFileSync(path, 'utf8');

// Helper to replace sizes in a specific block
function fixFitting(id, headerOverrideLabel, regex, replacer) {
    const startIndex = content.indexOf('id: "' + id + '"');
    if (startIndex === -1) {
        console.error("Could not find " + id);
        return;
    }
    let endIndex = content.indexOf('id: "astm', startIndex + 10);
    if (endIndex === -1) endIndex = content.indexOf('  ],', startIndex);
    
    let block = content.substring(startIndex, endIndex);

    // Add sizeHeaderOverride
    block = block.replace(
        /(family: 'moulded' as const,\n\s*image: '[^']+',)/,
        "\\n      sizeHeaderOverride: '" + headerOverrideLabel + "',"
    );

    // Update column label
    block = block.replace(
        /label: "products\.tables\.nominal_size_inch"/,
        'label: "' + headerOverrideLabel + '"'
    );

    // Fix quotes
    block = block.replace(regex, replacer);

    content = content.substring(0, startIndex) + block + content.substring(endIndex);
}

// 1. REDUCER BUSH/SOCKET
fixFitting(
    'astm-d-2466-reducer-bush-socket', 
    'products.tables.hp_fit_nominal_size_inch_inch',
    /"(\d+(?: \d+\/\d+)?|\d+\/\d+) X (\d+(?: \d+\/\d+)?|\d+\/\d+)\""/g,
    '"\\\" X \\\""'
);

// 2. FEMALE THREADED REDUCER BUSH
fixFitting(
    'astm-d-2466-female-threaded-reducer-bush', 
    'products.tables.hp_fit_nominal_size_inch_inch',
    /"(\d+(?: \d+\/\d+)?|\d+\/\d+) X (\d+(?: \d+\/\d+)?|\d+\/\d+)\""/g,
    '"\\\" X \\\""'
);

// 3. REDUCING TEE
fixFitting(
    'astm-d-2466-reducing-tee', 
    'products.tables.hp_fit_nominal_size_inch_inch_inch',
    /"(\d+(?: \d+\/\d+)?|\d+\/\d+) X (\d+(?: \d+\/\d+)?|\d+\/\d+) X (\d+(?: \d+\/\d+)?|\d+\/\d+)\""/g,
    '"\\\" X \\\" X \\\""'
);

// 4. FEMALE THREADED REDUCING TEE
fixFitting(
    'astm-d-2466-female-threaded-reducing-tee', 
    'products.tables.hp_fit_nominal_size_inch_inch_inch',
    /"(\d+(?: \d+\/\d+)?|\d+\/\d+) X (\d+(?: \d+\/\d+)?|\d+\/\d+) X (\d+(?: \d+\/\d+)?|\d+\/\d+)\""/g,
    '"\\\" X \\\" X \\\""'
);

// 5. FEMALE THREADED EQUAL TEE
fixFitting(
    'astm-d-2466-female-threaded-equal-tee', 
    'products.tables.hp_fit_nominal_size_inch_inch_inch',
    /"(\d+(?: \d+\/\d+)?|\d+\/\d+) X (\d+(?: \d+\/\d+)?|\d+\/\d+) X (\d+(?: \d+\/\d+)?|\d+\/\d+)\""/g,
    '"\\\" X \\\" X \\\""'
);

// 6. REPAIR SOCKET/ CONVERTABLE SOCKET
fixFitting(
    'astm-d-2466-repair-socket-convertable-socket', 
    'products.tables.hp_fit_nominal_size_inch_mm',
    /"(\d+(?: \d+\/\d+)?|\d+\/\d+) X (\d+)\""/g,
    '"\\\" X \"'
);

fs.writeFileSync(path, content, 'utf8');
console.log('File updated successfully.');
