// Regional Product Catalog Configuration for Crown Plastic Pipes - Phase 3 AEO Fix
// Separate regional pages with single-currency pricing per Google guidelines

export interface RegionalProductCatalog {
  region: string;
  regionSlug: string;
  countryCode: string;
  currency: string;
  currencySymbol: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  canonicalBase: string; // For canonical tag pointing to main product page
  telephone: string;
  deliveryTime: string;
  certifications: string[];
}

// Regional product catalog configurations
export const regionalProductCatalogs: RegionalProductCatalog[] = [
  {
    region: 'United Arab Emirates',
    regionSlug: 'uae',
    countryCode: 'AE',
    currency: 'AED',
    currencySymbol: 'AED',
    title: 'UPVC Pipes & Fittings - UAE Prices',
    titleAr: 'أنابيب وتجهيزات UPVC - أسعار الإمارات',
    description: 'Complete UPVC pipe catalog with UAE dirham (AED) pricing. BS EN 1452 certified pipes for water supply, drainage, and irrigation. Same-day delivery across Dubai, Abu Dhabi, Sharjah.',
    descriptionAr: 'كتالوج أنابيب UPVC كامل بأسعار الدرهم الإماراتي. أنابيب معتمدة BS EN 1452 لإمدادات المياه والصرف والري.',
    canonicalBase: '/products/upvc-pipes',
    telephone: '+971 6 543 6781',
    deliveryTime: '1-2 business days',
    certifications: ['BS EN 1452', 'DIN 8062', 'GSO EN 805', 'Dubai Municipality Approved'],
  },
  {
    region: 'Saudi Arabia',
    regionSlug: 'saudi',
    countryCode: 'SA',
    currency: 'SAR',
    currencySymbol: 'SAR',
    title: 'UPVC Pipes & Fittings - Saudi Arabia Prices',
    titleAr: 'أنابيب وتجهيزات UPVC - أسعار السعودية',
    description: 'SASO certified UPVC pipe catalog with Saudi riyal (SAR) pricing. Full compliance with SASO TR-BM-5 and GSO EN 805. Export to Riyadh, Jeddah, Dammam, and all Saudi cities.',
    descriptionAr: 'كتالوج أنابيب UPVC معتمد من ساسو بأسعار الريال السعودي. التوافق الكامل مع SASO TR-BM-5 و GSO EN 805.',
    canonicalBase: '/products/upvc-pipes',
    telephone: '+971 6 543 6781',
    deliveryTime: '3-5 business days',
    certifications: ['SASO TR-BM-5', 'GSO EN 805', 'BS EN 1452', 'ISO 9001:2015'],
  },
  {
    region: 'Kuwait',
    regionSlug: 'kuwait',
    countryCode: 'KW',
    currency: 'KWD',
    currencySymbol: 'KWD',
    title: 'UPVC Pipes & Fittings - Kuwait Prices',
    titleAr: 'أنابيب وتجهيزات UPVC - أسعار الكويت',
    description: 'GSO certified UPVC pipe catalog with Kuwaiti dinar (KWD) pricing. Container shipments to Shuwaikh Port. Competitive bulk pricing for Kuwait construction projects.',
    descriptionAr: 'كتالوج أنابيب UPVC معتمد من GSO بأسعار الدينار الكويتي. شحنات حاويات إلى ميناء الشويخ.',
    canonicalBase: '/products/upvc-pipes',
    telephone: '+971 6 543 6781',
    deliveryTime: '5-7 business days',
    certifications: ['GSO EN 805', 'BS EN 1452', 'ISO 9001:2015'],
  },
  {
    region: 'Qatar',
    regionSlug: 'qatar',
    countryCode: 'QA',
    currency: 'QAR',
    currencySymbol: 'QAR',
    title: 'UPVC Pipes & Fittings - Qatar Prices',
    titleAr: 'أنابيب وتجهيزات UPVC - أسعار قطر',
    description: 'QCS compliant UPVC pipe catalog with Qatari riyal (QAR) pricing. Serving Doha, Lusail, and major infrastructure projects. Full technical support included.',
    descriptionAr: 'كتالوج أنابيب UPVC متوافق مع QCS بأسعار الريال القطري. خدمة الدوحة ولوسيل ومشاريع البنية التحتية.',
    canonicalBase: '/products/upvc-pipes',
    telephone: '+971 6 543 6781',
    deliveryTime: '5-7 business days',
    certifications: ['QCS Compliant', 'GSO EN 805', 'BS EN 1452'],
  },
];

// Product pricing by region (base prices in local currency)
export interface RegionalProductPrice {
  sku: string;
  productName: string;
  basePrice: number; // Per unit base price
  unit: string; // 'meter', 'piece', 'set'
  minOrder: number;
}

// UPVC Pressure Pipe pricing per region
export const upvcPipePricing: Record<string, RegionalProductPrice[]> = {
  uae: [
    { sku: 'UPVC-PP-20-PN16', productName: 'UPVC Pressure Pipe 20mm PN16', basePrice: 8.50, unit: 'meter', minOrder: 100 },
    { sku: 'UPVC-PP-25-PN16', productName: 'UPVC Pressure Pipe 25mm PN16', basePrice: 12.00, unit: 'meter', minOrder: 100 },
    { sku: 'UPVC-PP-32-PN16', productName: 'UPVC Pressure Pipe 32mm PN16', basePrice: 18.50, unit: 'meter', minOrder: 50 },
    { sku: 'UPVC-PP-40-PN16', productName: 'UPVC Pressure Pipe 40mm PN16', basePrice: 28.00, unit: 'meter', minOrder: 50 },
    { sku: 'UPVC-PP-50-PN16', productName: 'UPVC Pressure Pipe 50mm PN16', basePrice: 42.00, unit: 'meter', minOrder: 50 },
    { sku: 'UPVC-PP-63-PN16', productName: 'UPVC Pressure Pipe 63mm PN16', basePrice: 65.00, unit: 'meter', minOrder: 25 },
    { sku: 'UPVC-PP-75-PN10', productName: 'UPVC Pressure Pipe 75mm PN10', basePrice: 85.00, unit: 'meter', minOrder: 25 },
    { sku: 'UPVC-PP-90-PN10', productName: 'UPVC Pressure Pipe 90mm PN10', basePrice: 120.00, unit: 'meter', minOrder: 25 },
    { sku: 'UPVC-PP-110-PN10', productName: 'UPVC Pressure Pipe 110mm PN10', basePrice: 165.00, unit: 'meter', minOrder: 10 },
    { sku: 'UPVC-PP-160-PN10', productName: 'UPVC Pressure Pipe 160mm PN10', basePrice: 320.00, unit: 'meter', minOrder: 10 },
  ],
  saudi: [
    { sku: 'UPVC-PP-20-PN16', productName: 'UPVC Pressure Pipe 20mm PN16', basePrice: 9.00, unit: 'meter', minOrder: 100 },
    { sku: 'UPVC-PP-25-PN16', productName: 'UPVC Pressure Pipe 25mm PN16', basePrice: 12.50, unit: 'meter', minOrder: 100 },
    { sku: 'UPVC-PP-32-PN16', productName: 'UPVC Pressure Pipe 32mm PN16', basePrice: 19.50, unit: 'meter', minOrder: 50 },
    { sku: 'UPVC-PP-40-PN16', productName: 'UPVC Pressure Pipe 40mm PN16', basePrice: 29.50, unit: 'meter', minOrder: 50 },
    { sku: 'UPVC-PP-50-PN16', productName: 'UPVC Pressure Pipe 50mm PN16', basePrice: 44.00, unit: 'meter', minOrder: 50 },
    { sku: 'UPVC-PP-63-PN16', productName: 'UPVC Pressure Pipe 63mm PN16', basePrice: 68.00, unit: 'meter', minOrder: 25 },
    { sku: 'UPVC-PP-75-PN10', productName: 'UPVC Pressure Pipe 75mm PN10', basePrice: 89.00, unit: 'meter', minOrder: 25 },
    { sku: 'UPVC-PP-90-PN10', productName: 'UPVC Pressure Pipe 90mm PN10', basePrice: 125.00, unit: 'meter', minOrder: 25 },
    { sku: 'UPVC-PP-110-PN10', productName: 'UPVC Pressure Pipe 110mm PN10', basePrice: 175.00, unit: 'meter', minOrder: 10 },
    { sku: 'UPVC-PP-160-PN10', productName: 'UPVC Pressure Pipe 160mm PN10', basePrice: 340.00, unit: 'meter', minOrder: 10 },
  ],
  kuwait: [
    { sku: 'UPVC-PP-20-PN16', productName: 'UPVC Pressure Pipe 20mm PN16', basePrice: 2.50, unit: 'meter', minOrder: 100 },
    { sku: 'UPVC-PP-25-PN16', productName: 'UPVC Pressure Pipe 25mm PN16', basePrice: 3.50, unit: 'meter', minOrder: 100 },
    { sku: 'UPVC-PP-32-PN16', productName: 'UPVC Pressure Pipe 32mm PN16', basePrice: 5.50, unit: 'meter', minOrder: 50 },
    { sku: 'UPVC-PP-40-PN16', productName: 'UPVC Pressure Pipe 40mm PN16', basePrice: 8.50, unit: 'meter', minOrder: 50 },
    { sku: 'UPVC-PP-50-PN16', productName: 'UPVC Pressure Pipe 50mm PN16', basePrice: 12.50, unit: 'meter', minOrder: 50 },
    { sku: 'UPVC-PP-63-PN16', productName: 'UPVC Pressure Pipe 63mm PN16', basePrice: 19.00, unit: 'meter', minOrder: 25 },
    { sku: 'UPVC-PP-75-PN10', productName: 'UPVC Pressure Pipe 75mm PN10', basePrice: 25.00, unit: 'meter', minOrder: 25 },
    { sku: 'UPVC-PP-90-PN10', productName: 'UPVC Pressure Pipe 90mm PN10', basePrice: 35.00, unit: 'meter', minOrder: 25 },
    { sku: 'UPVC-PP-110-PN10', productName: 'UPVC Pressure Pipe 110mm PN10', basePrice: 48.00, unit: 'meter', minOrder: 10 },
    { sku: 'UPVC-PP-160-PN10', productName: 'UPVC Pressure Pipe 160mm PN10', basePrice: 95.00, unit: 'meter', minOrder: 10 },
  ],
  qatar: [
    { sku: 'UPVC-PP-20-PN16', productName: 'UPVC Pressure Pipe 20mm PN16', basePrice: 9.00, unit: 'meter', minOrder: 100 },
    { sku: 'UPVC-PP-25-PN16', productName: 'UPVC Pressure Pipe 25mm PN16', basePrice: 12.50, unit: 'meter', minOrder: 100 },
    { sku: 'UPVC-PP-32-PN16', productName: 'UPVC Pressure Pipe 32mm PN16', basePrice: 19.00, unit: 'meter', minOrder: 50 },
    { sku: 'UPVC-PP-40-PN16', productName: 'UPVC Pressure Pipe 40mm PN16', basePrice: 29.00, unit: 'meter', minOrder: 50 },
    { sku: 'UPVC-PP-50-PN16', productName: 'UPVC Pressure Pipe 50mm PN16', basePrice: 43.00, unit: 'meter', minOrder: 50 },
    { sku: 'UPVC-PP-63-PN16', productName: 'UPVC Pressure Pipe 63mm PN16', basePrice: 67.00, unit: 'meter', minOrder: 25 },
    { sku: 'UPVC-PP-75-PN10', productName: 'UPVC Pressure Pipe 75mm PN10', basePrice: 88.00, unit: 'meter', minOrder: 25 },
    { sku: 'UPVC-PP-90-PN10', productName: 'UPVC Pressure Pipe 90mm PN10', basePrice: 124.00, unit: 'meter', minOrder: 25 },
    { sku: 'UPVC-PP-110-PN10', productName: 'UPVC Pressure Pipe 110mm PN10', basePrice: 170.00, unit: 'meter', minOrder: 10 },
    { sku: 'UPVC-PP-160-PN10', productName: 'UPVC Pressure Pipe 160mm PN10', basePrice: 330.00, unit: 'meter', minOrder: 10 },
  ],
};

// Helper to get catalog by region slug
export function getRegionalCatalog(regionSlug: string): RegionalProductCatalog | undefined {
  return regionalProductCatalogs.find(c => c.regionSlug === regionSlug);
}

// Helper to get pricing by region slug
export function getRegionalPricing(regionSlug: string): RegionalProductPrice[] {
  return upvcPipePricing[regionSlug] || [];
}

// Get all region slugs for static generation
export function getAllRegionSlugs(): string[] {
  return regionalProductCatalogs.map(c => c.regionSlug);
}
