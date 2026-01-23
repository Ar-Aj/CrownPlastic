/**
 * Crown Plastic Pipes - Product Range Map
 * 
 * Normalized product data structure for visualization on the About Us page.
 * Extracted from src/config/products.ts
 * 
 * Summary:
 * - 6 top-level categories
 * - 24 total sub-items (product families/series)
 * 
 * Category breakdown:
 * 1. UPVC Pressure Pipes & Fittings: 3 items
 * 2. UPVC Drainage Pipes & Fittings: 4 items
 * 3. UPVC Duct Pipes & Accessories: 6 items
 * 4. PVC Conduit Pipes: 5 items
 * 5. PPR Pipes: 3 items
 * 6. HDPE Pipe Systems: 3 items
 */

export type ProductItem = {
  id: string;
  name: string;
  shortInfo?: string;
};

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  icon: string;
  items: ProductItem[];
};

export const PRODUCT_MAP: ProductCategory[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. UPVC PRESSURE PIPES & FITTINGS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'upvc-pressure',
    name: 'UPVC Pressure Pipes & Fittings',
    description: 'Pressure pipes for potable water supply systems. Metric & Inch series rated PN6–16 bar, certified to BS EN 1452, DIN 8061/62, and ASTM standards.',
    icon: '💧',
    items: [
      {
        id: 'pipes-metric',
        name: 'UPVC Pressure Pipes BS EN 1452',
        shortInfo: 'Metric series PN6-16 | Potable water supply',
      },
      {
        id: 'pipes-inch',
        name: 'UPVC Pressure Pipes ASTM D1785',
        shortInfo: 'Inch series Schedule 40 | Water distribution',
      },
      {
        id: 'fittings',
        name: 'UPVC Pressure Fittings',
        shortInfo: 'DIN 8063, BS EN 1452, ASTM D2466 | Elbows, tees, couplers',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. UPVC DRAINAGE PIPES & FITTINGS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'upvc-drainage',
    name: 'UPVC Drainage Pipes & Fittings',
    description: 'Above-ground and underground drainage systems for sewerage and stormwater. Certified to BS EN 1329/1401 and BS 4660/5255.',
    icon: '🔧',
    items: [
      {
        id: 'pipes-above-ground',
        name: 'UPVC Soil Pipes BS 5255',
        shortInfo: 'Above-ground soil & waste discharge',
      },
      {
        id: 'pipes-underground',
        name: 'UPVC Underground Pipes BS EN 1401',
        shortInfo: 'Heavy-duty sewerage & stormwater',
      },
      {
        id: 'pipes-non-standard',
        name: 'UPVC Custom Drainage Pipes',
        shortInfo: 'Made-to-order for specialized projects',
      },
      {
        id: 'fittings',
        name: 'UPVC Drainage Fittings',
        shortInfo: 'BS EN 1329 | Elbows, tees, reducers, floor drains',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. UPVC DUCT PIPES & ACCESSORIES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'upvc-duct',
    name: 'UPVC Duct Pipes & Accessories',
    description: 'Underground cable protection for telecom and electrical infrastructure. Meets DIN 8062, NEMA TC-2, and UAE telecom specifications (Etisalat/DU).',
    icon: '⚡',
    items: [
      {
        id: 'pipes-din',
        name: 'UPVC Duct Pipes DIN 8062',
        shortInfo: 'German standard | Underground cable protection',
      },
      {
        id: 'pipes-bs',
        name: 'UPVC Duct Pipes BS 3505/3506',
        shortInfo: 'British standard | Electrical & communication cables',
      },
      {
        id: 'pipes-nema',
        name: 'UPVC Duct Pipes NEMA TC-2',
        shortInfo: 'American standard | UL listed, flame retardant',
      },
      {
        id: 'pipes-special-d54-d56-d57',
        name: 'UPVC Telecom Duct D54/D56/D57',
        shortInfo: 'UAE telecom spec | Etisalat/DU infrastructure',
      },
      {
        id: 'pipes-telecom',
        name: 'UPVC Telecom Duct Pipes',
        shortInfo: 'Fiber-optic ready | Multiple duct options',
      },
      {
        id: 'accessories',
        name: 'UPVC Duct Accessories',
        shortInfo: 'End caps, sockets, bellmouths, bends',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. PVC CONDUIT PIPES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'pvc-conduit',
    name: 'PVC Conduit Pipes',
    description: 'Rigid electrical conduit for building wiring systems. Available in Schedule 40/80 and crush ratings 320N–1250N for residential to industrial use.',
    icon: '🔌',
    items: [
      {
        id: 'round-heavy',
        name: 'PVC Conduit 1250N Heavy Duty',
        shortInfo: 'Max crush resistance | Industrial & concrete embedment',
      },
      {
        id: 'round-medium',
        name: 'PVC Conduit 750N Medium Duty',
        shortInfo: 'Commercial grade | Versatile applications',
      },
      {
        id: 'round-light',
        name: 'PVC Conduit 320N Light Duty',
        shortInfo: 'Residential & light commercial | Cost-effective',
      },
      {
        id: 'schedule-40',
        name: 'PVC Conduit Schedule 40',
        shortInfo: 'US standard | UL listed | Standard wall',
      },
      {
        id: 'schedule-80',
        name: 'PVC Conduit Schedule 80',
        shortInfo: 'Extra heavy wall | Extreme conditions',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 5. PPR PIPES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'ppr',
    name: 'PPR Pipes',
    description: 'Polypropylene Random pipes for hot and cold potable water in buildings. PN10–20 bar rated, DIN 8077/78 certified, with 50+ year service life.',
    icon: '🚿',
    items: [
      {
        id: 'sdr11-pn10',
        name: 'PPR SDR11 PN10',
        shortInfo: '10 bar | Cold water systems',
      },
      {
        id: 'sdr7-4-pn16',
        name: 'PPR SDR7.4 PN16',
        shortInfo: '16 bar | Hot & cold water | Building installations',
      },
      {
        id: 'sdr6-pn20',
        name: 'PPR SDR6 PN20',
        shortInfo: '20 bar | High temperature | Industrial',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 6. HDPE PIPE SYSTEMS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'polyethylene',
    name: 'HDPE Pipe Systems',
    description: 'High-density polyethylene pipes for irrigation, water distribution, and agricultural applications. PE63/80/100 grades certified to ISO 4427.',
    icon: '🌊',
    items: [
      {
        id: 'hdpe-pe63-pe80-pe100',
        name: 'HDPE Pipes PE63/PE80/PE100',
        shortInfo: 'Water & gas distribution | 50+ year life',
      },
      {
        id: 'lldpe-ldpe-drip',
        name: 'LLDPE/LDPE Drip Irrigation Pipes',
        shortInfo: 'Agricultural drip systems | UV stabilized',
      },
      {
        id: 'water-distribution',
        name: 'HDPE Water Distribution PN10-16',
        shortInfo: 'Municipal networks | Fusion welded joints',
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HELPER FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────

/** Get category by ID */
export function getCategoryById(id: string): ProductCategory | undefined {
  return PRODUCT_MAP.find((cat) => cat.id === id);
}

/** Get item by category ID and item ID */
export function getItemById(categoryId: string, itemId: string): ProductItem | undefined {
  const category = getCategoryById(categoryId);
  return category?.items.find((item) => item.id === itemId);
}

/** Get total count of all items across categories */
export function getTotalItemCount(): number {
  return PRODUCT_MAP.reduce((sum, cat) => sum + cat.items.length, 0);
}

/** Get category count */
export function getCategoryCount(): number {
  return PRODUCT_MAP.length;
}
