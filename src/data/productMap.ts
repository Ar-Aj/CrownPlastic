/**
 * Crown Plastic Pipes - Product Range Map
 * 
 * Normalized product data structure for visualization on the About Us page.
 * Synchronized with src/config/products.ts
 * 
 * STANDARDISED CATALOG - Updated to match real product range
 * 
 * Summary:
 * - 7 top-level categories
 * - 16 total sub-items (product families/series)
 * 
 * Category breakdown:
 * 1. PVC Pressure Pipes & Fittings: 3 items (DIN 8063, BS EN 1452, ASTM D2466)
 * 2. UPVC Drainage Pipes & Fittings: 2 items (BS EN 1329, BS EN 1401)
 * 3. UPVC Conduit Pipes: 2 items (SCH 40, SCH 80)
 * 4. PPR Pipes: 3 items (SDR11/PN10, SDR7.4/PN16, SDR6/PN20)
 * 5. UPVC Duct Pipes & Accessories: 1 item (Black Pipes/Fittings)
 * 6. UPVC Fabrications & Accessories: 4 items (Type A-D)
 * 7. HDPE Pipe Systems: 0 items (category only, no subfamilies)
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
  // A) PVC PRESSURE PIPES & FITTINGS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'upvc-pressure',
    name: 'PVC Pressure Pipes & Fittings',
    description: 'Pressure pipes and fittings for potable water supply systems. Available in DIN 8063, BS EN 1452:23/BS 4346 (PN 15), and ASTM D 2466 SCH-40 standards.',
    icon: '💧',
    items: [
      {
        id: 'pvc-pressure-din-8063',
        name: 'PVC Pressure Pipes & Fittings DIN 8063',
        shortInfo: 'DIN 8063 | German standard | Potable water',
      },
      {
        id: 'pvc-pressure-bs-en-1452',
        name: 'PVC Pressure Pipes & Fittings BS EN 1452:23 / BS 4346 (PN 15)',
        shortInfo: 'BS EN 1452:23 / BS 4346 | British standard | PN 15',
      },
      {
        id: 'pvc-pressure-astm-d2466',
        name: 'PVC Pressure Pipes & Fittings ASTM D 2466 SCH-40',
        shortInfo: 'ASTM D 2466 | Schedule 40 | American standard',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // B) UPVC DRAINAGE PIPES AND FITTINGS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'upvc-drainage',
    name: 'UPVC Drainage Pipes & Fittings',
    description: 'Above-ground and underground drainage systems for sewerage and stormwater. Certified to BS EN 1329-1:2014 and BS EN 1401.',
    icon: '🔧',
    items: [
      {
        id: 'upvc-drainage-bs-en-1329',
        name: 'UPVC Drainage Pipes and Fittings BS EN 1329-1:2014',
        shortInfo: 'BS EN 1329-1:2014 | Above-ground drainage',
      },
      {
        id: 'upvc-drainage-bs-en-1401',
        name: 'UPVC Drainage Pipes and Fittings BS EN 1401',
        shortInfo: 'BS EN 1401 | Underground drainage',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // C) UPVC CONDUIT PIPES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'pvc-conduit',
    name: 'UPVC Conduit Pipes',
    description: 'Rigid UPVC electrical conduit for building wiring systems. Available in Schedule 40 and Schedule 80 for standard to heavy-duty applications.',
    icon: '🔌',
    items: [
      {
        id: 'upvc-conduit-sch-40',
        name: 'UPVC Conduit Pipes SCH 40',
        shortInfo: 'SCH 40 | Standard wall | UL listed',
      },
      {
        id: 'upvc-conduit-sch-80',
        name: 'UPVC Conduit Pipes SCH 80',
        shortInfo: 'SCH 80 | Heavy wall | Industrial use',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // D) PPR PIPES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'ppr',
    name: 'PPR Pipes',
    description: 'Polypropylene Random pipes for hot and cold potable water in buildings. PN10–20 bar rated, DIN 8077/78 certified, with 50+ year service life.',
    icon: '🚿',
    items: [
      {
        id: 'ppr-sdr11-pn10',
        name: 'PPR Pipes SDR11 / PN 10',
        shortInfo: 'SDR11 / PN 10 | Cold water | 10 bar',
      },
      {
        id: 'ppr-sdr7-4-pn16',
        name: 'PPR Pipes SDR7.4 / PN 16',
        shortInfo: 'SDR7.4 / PN 16 | Hot & cold | 16 bar',
      },
      {
        id: 'ppr-sdr6-pn20',
        name: 'PPR Pipes SDR6 / PN 20',
        shortInfo: 'SDR6 / PN 20 | High pressure | 20 bar',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // E) UPVC DUCT PIPES & ACCESSORIES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'upvc-duct',
    name: 'UPVC Duct Pipes & Accessories',
    description: 'Underground cable protection systems. Black UPVC duct pipes and accessories for telecom and electrical infrastructure.',
    icon: '⚡',
    items: [
      {
        id: 'upvc-duct-black',
        name: 'UPVC Duct Pipes & Accessories Black Pipes / Fittings',
        shortInfo: 'Black Pipes / Fittings | Cable protection',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // F) UPVC FABRICATIONS AND ACCESSORIES - NEW CATEGORY
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'upvc-fabrications',
    name: 'UPVC Fabrications & Accessories',
    description: 'Custom UPVC fabrications and accessories for specialized project requirements. Available in Type A, B, C, and D configurations.',
    icon: '🔩',
    items: [
      {
        id: 'upvc-fabrications-type-a',
        name: 'UPVC Fabrications and Accessories Type A',
        shortInfo: 'Type A | Custom fabrications',
      },
      {
        id: 'upvc-fabrications-type-b',
        name: 'UPVC Fabrications and Accessories Type B',
        shortInfo: 'Type B | Custom fabrications',
      },
      {
        id: 'upvc-fabrications-type-c',
        name: 'UPVC Fabrications and Accessories Type C',
        shortInfo: 'Type C | Custom fabrications',
      },
      {
        id: 'upvc-fabrications-type-d',
        name: 'UPVC Fabrications and Accessories Type D',
        shortInfo: 'Type D | Custom fabrications',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // G) HDPE PIPE SYSTEMS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'polyethylene',
    name: 'HDPE Pipe Systems',
    description: 'High-density polyethylene pipes for irrigation, water distribution, and agricultural applications. PE63/80/100 grades certified to ISO 4427.',
    icon: '🌊',
    // No sub-families exposed in UI until real data is available
    items: [],
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
