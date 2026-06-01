const fs = require('fs');
const file = './src/config/productDetails/drainageData.ts';
let lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);

function replaceLines(start, end, content) {
    const arr = content.split('\n');
    lines.splice(start, end - start + 1, ...arr);
}

replaceLines(988, 993, `      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd',   label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 3 },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1_h_l_tr', label: 'D1 H L Tr', groupLabel: 'products.tables.dimensions_mm' },
      ],`);

replaceLines(958, 962, `      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd',   label: 'd', groupLabel: 'products.tables.dimensions_mm', colSpan: 2 },
        { key: 'h',   label: 'H', groupLabel: 'products.tables.dimensions_mm' },
      ],`);

replaceLines(928, 933, `      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd',   label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 3 },
        { key: 'd_l', label: 'd L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h',   label: 'H', groupLabel: 'products.tables.dimensions_mm' },
      ],`);

replaceLines(897, 903, `      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd',   label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 4 },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l',   label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h',   label: 'H', groupLabel: 'products.tables.dimensions_mm' },
      ],`);

replaceLines(867, 873, `      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd',   label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 4 },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l',   label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h',   label: 'H', groupLabel: 'products.tables.dimensions_mm' },
      ],`);

replaceLines(838, 843, `      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd',   label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 3 },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l',   label: 'L', groupLabel: 'products.tables.dimensions_mm' },
      ],`);

replaceLines(808, 813, `      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd',   label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 3 },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l',   label: 'L', groupLabel: 'products.tables.dimensions_mm' },
      ],`);

fs.writeFileSync(file, lines.join('\n'));
console.log('SUCCESS');