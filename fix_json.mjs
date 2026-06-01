import fs from 'fs';
let raw = fs.readFileSync('src/tabledata/PVC Conduit Pipes.json', 'utf8');
raw = raw.replace(/(\d)""/g, '$1\\"');
fs.writeFileSync('src/tabledata/PVC Conduit Pipes.json', raw);
