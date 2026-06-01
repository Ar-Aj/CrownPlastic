import fs from 'fs';

// Patching EN
let enStr = fs.readFileSync('src/i18n/en.ts', 'utf8');
if (!enStr.includes('colors: {')) {
  enStr = enStr.replace(
    /breadcrumb_products:\s*'Products',/,
    `breadcrumb_products: 'Products',\n    colors: {\n      grey: 'Grey',\n      olive: 'Olive',\n    },`
  );
  fs.writeFileSync('src/i18n/en.ts', enStr);
  console.log("Patched en.ts");
}

// Patching AR
let arStr = fs.readFileSync('src/i18n/ar.ts', 'utf8');
if (!arStr.includes('colors: {')) {
  arStr = arStr.replace(
    /breadcrumb_products:\s*'المنتجات',/,
    `breadcrumb_products: 'المنتجات',\n    colors: {\n      grey: 'رمادي',\n      olive: 'زيتوني',\n    },`
  );
  fs.writeFileSync('src/i18n/ar.ts', arStr);
  console.log("Patched ar.ts");
}
