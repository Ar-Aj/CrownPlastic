const fs = require('fs');
const path = 'c:/crown/CrownPlastic/src/config/productDetails/pvcSch40FittingsData.ts';
let content = fs.readFileSync(path, 'utf8');

// Global replacement across the whole file to fix any missed occurrences without space
content = content.replace(/"(\d+(?: \d+\/\d+)?|\d+\/\d+)X(\d+(?: \d+\/\d+)?|\d+\/\d+)\\""/g, '"$1\\" X $2\\""');
content = content.replace(/"(\d+(?: \d+\/\d+)?|\d+\/\d+)X(\d+(?: \d+\/\d+)?|\d+\/\d+)X(\d+(?: \d+\/\d+)?|\d+\/\d+)\\""/g, '"$1\\" X $2\\" X $3\\""');
content = content.replace(/"(\d+(?: \d+\/\d+)?|\d+\/\d+)X(\d+)\\""/g, '"$1\\" X $2"');

fs.writeFileSync(path, content, 'utf8');
console.log('File updated successfully.');
