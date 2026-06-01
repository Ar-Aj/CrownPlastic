import fs from 'fs';
const data = fs.readFileSync('src/tabledata/PVC High Pressure Pipes.json', 'utf8');
const json = JSON.parse(data.split('""').join('"'));
const keys = new Set();
json.forEach(d => {
  if (d.data) {
    d.data.forEach(r => Object.keys(r).forEach(k => keys.add(k)));
  }
});
console.log(Array.from(keys));
