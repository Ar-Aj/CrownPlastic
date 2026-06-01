import fs from 'fs';
const text = fs.readFileSync('src/config/productDetails/drainageData.ts', 'utf8');
const matches = [...text.matchAll(/name:\s*['"](.*?)['"]/g)];
matches.forEach(m => console.log(m[1]));
