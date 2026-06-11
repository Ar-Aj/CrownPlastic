/**
 * Crown Plastic Pipes - Product Range Map
 * 
 * Normalized product data structure for visualization on the About Us page.
 * Synchronized with src/config/products.ts
 * 
 * STANDARDISED CATALOG - Phase 1 Taxonomy Overhaul
 * 
 * Summary:
 * - 13 top-level categories
 * - 52 total sub-items (product families/series)
 * 
 * Category breakdown:
 * 1. UPVC Drainage Pipes: 3 items
 * 2. UPVC Drainage Fittings: 3 items
 * 3. PVC High Pressure Pipes: 7 items
 * 4. PVC High Pressure Fittings: 3 items
 * 5. PVC SCH 40 Fittings: 1 item
 * 6. PVC Duct Pipes: 6 items
 * 7. PVC Duct Fittings: 1 item
 * 8. PVC Conduit Pipes: 3 items
 * 9. PP-R Pipes: 4 items
 * 10. HDPE Pipes: 7 items
 * 11. PEX Pipes: 1 item
 * 12. Fabrications & Accessories: 5 items
 * 13. Solvents: 1 item
 */

export type ProductItem = {
  id: string;
  name: string;
  shortInfo?: string;
  image?: string;           // cover image path from products.ts (for About Us Galaxy cards)
};

export type ProductCategory = {
  nameAr?: string;
  nameFr?: string;
  id: string;
  name: string;
  description: string;
  icon: string;
  image?: string;           // category-level cover image (first sub-product image used for wheel node)
  items: ProductItem[];
};

export const PRODUCT_MAP: ProductCategory[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1) UPVC DRAINAGE PIPES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'upvc-drainage-pipes',
    name: 'UPVC Drainage Pipes',
    nameAr: 'أنابيب الصرف UPVC',
    nameFr: "Tuyaux d'Évacuation UPVC",
    description: 'Above-ground and underground drainage pipe systems certified to BS EN 1329-1:2014 and BS EN 1401-1.',
    icon: '🔧',
    image: '/images/products/cover/upvc-drainage/pipes/upvcdrainagepipesbs5255.png',
    items: [
      { id: 'upvc-drainage-pipes-bs5255-bs-en-1329', name: 'UPVC Drainage Pipes BS 5255/BS EN 1329-1:2014 & BS 4514/BS EN 1329-1:2014', shortInfo: 'BS 5255 / BS EN 1329-1:2014 | Above-ground', image: '/images/products/cover/upvc-drainage/pipes/upvcdrainagepipesbs5255.png' },
      { id: 'upvc-drainage-pipes-bs-en-1401', name: 'UPVC Drainage Pipes BS EN 1401-1 (BS 4660 & BS 5481)', shortInfo: 'BS EN 1401-1 | Underground drainage', image: '/images/products/cover/upvc-drainage/pipes/upvcdrainagepipesbs1401.png' },
      { id: 'upvc-drainage-pipes-non-standard', name: 'UPVC Drainage Non-Standard Pipes', shortInfo: 'Non-Standard | Custom specifications', image: '/images/products/cover/upvc-drainage/pipes/upvcdrainagepipesnonstandard.png' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2) UPVC DRAINAGE FITTINGS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'upvc-drainage-fittings',
    name: 'UPVC Drainage Fittings',
    nameAr: 'وصلات الصرف UPVC',
    nameFr: "Raccords d'Évacuation UPVC",
    description: 'Drainage fittings certified to BS EN 1329-1:2014 and BS EN 1401, including push-fit solutions.',
    icon: '🔩',
    image: '/images/products/cover/upvc-drainage/fittings/BS EN 1329-12014.png',
    items: [
      { id: 'upvc-drainage-fittings-bs-en-1329', name: 'UPVC Drainage Fittings BS EN 1329-1:2014 (Supersedes BS 5255 & BS 4514)', shortInfo: 'BS EN 1329-1:2014 | Above-ground fittings', image: '/images/products/cover/upvc-drainage/fittings/BS EN 1329-12014.png' },
      { id: 'upvc-drainage-fittings-bs-en-1401', name: 'UPVC Drainage Fittings BS EN 1401 (Supersedes BS 4660 & BS 5481)', shortInfo: 'BS EN 1401 | Underground fittings', image: '/images/products/cover/upvc-drainage/fittings/BS EN 1401.png' },
      { id: 'upvc-drainage-fittings-pushfit', name: 'UPVC Drainage Pushfit Fittings', shortInfo: 'Pushfit | Quick-connect fittings', image: '/images/products/cover/upvc-drainage/fittings/Pushfit drainage fittings.png' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3) PVC HIGH PRESSURE PIPES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'pvc-high-pressure-pipes',
    name: 'PVC High Pressure Pipes',
    nameAr: 'أنابيب الضغط العالي PVC',
    nameFr: "Tuyaux Haute Pression PVC",
    description: 'High pressure PVC pipes available in ISO, DIN, BS, and ASTM standards for potable water and industrial applications.',
    icon: '💧',
    image: '/images/products/cover/pvc high pressure/CROWN PLASTIC PVC HIGH PRESSURE PIPE ISO 4422-21996.png',
    items: [
      { id: 'pvc-hp-pipes-iso-4422', name: 'PVC HP Pipes ISO 4422-2:1996 (mm)', shortInfo: 'ISO 4422-2:1996 | Metric', image: '/images/products/cover/pvc high pressure/CROWN PLASTIC PVC HIGH PRESSURE PIPE ISO 4422-21996.png' },
      { id: 'pvc-hp-pipes-din-8061-62', name: 'PVC HP Pipes DIN 8061/62 (mm)', shortInfo: 'DIN 8061/62 | SASO 14-15 | Metric', image: '/images/products/cover/pvc high pressure/CROWN PLASTIC PVC HIGH PRESSURE PIPE DIN 8061.png' },
      { id: 'pvc-hp-pipes-bs-en-iso-1452-2', name: 'PVC HP Pipes BS EN ISO 1452-2 (Inch)', shortInfo: 'BS EN ISO 1452-2:2009 | Imperial', image: '/images/products/cover/pvc high pressure/CROWN PLASTIC PVC HIGH PRESSURE PIPE BS EN ISO 1452-22009.png' },
      { id: 'pvc-hp-pipes-bs-3505', name: 'PVC HP Pipes BS 3505:1986 (Inch)', shortInfo: 'BS 3505:1986 | Cold potable water', image: '/images/products/cover/pvc high pressure/CROWN PLASTIC PVC HIGH PRESSURE PIPE BS 35051986.png' },
      { id: 'pvc-hp-pipes-bs-3506', name: 'PVC HP Pipes BS 3506:1969 (Inch)', shortInfo: 'BS 3506:1969 | Industrial', image: '/images/products/cover/pvc high pressure/CROWN PLASTIC PVC HIGH PRESSURE PIPE BS 35061969.png' },
      { id: 'pvc-hp-pipes-astm-d1785', name: 'PVC HP Pipes ASTM D 1785 SCH40/SCH80 (Inch)', shortInfo: 'ASTM D 1785 | SCH40/80 | Imperial', image: '/images/products/cover/pvc high pressure/CROWN PLASTIC PVC HIGH PRESSURE PIPE ASTM D 1785.png' },
      { id: 'pvc-hp-pipes-astm-d2241', name: 'PVC HP Pipes ASTM D 2241 (Inch)', shortInfo: 'ASTM D 2241 | Imperial', image: '/images/products/cover/pvc high pressure/CROWN PLASTIC PVC HIGH PRESSURE PIPE ASTM D 2241.png' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4) PVC HIGH PRESSURE FITTINGS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'pvc-high-pressure-fittings',
    name: 'PVC High Pressure Fittings',
    nameAr: 'وصلات الضغط العالي PVC',
    nameFr: "Raccords Haute Pression PVC",
    description: 'High pressure PVC fittings and valves in DIN 8063 and BS EN 1452:3/BS 4346 standards.',
    icon: '💧',
    image: '/images/products/cover/pvc high pressure/fittings/DIN 8063.png',
    items: [
      { id: 'pvc-hp-fittings-din-8063', name: 'PVC HP Fittings DIN 8063', shortInfo: 'DIN 8063 | Pressure fittings', image: '/images/products/cover/pvc high pressure/fittings/DIN 8063.png' },
      { id: 'pvc-hp-fittings-bs-en-1452-3', name: 'PVC HP Fittings BS EN 1452:3/BS 4346 (PN 15)', shortInfo: 'BS EN 1452:3 | PN 15', image: '/images/products/cover/pvc high pressure/fittings/BS EN 14523BS 4346 PN 15.png' },
      { id: 'pvc-hp-fittings-valves', name: 'PVC High Pressure Valves', shortInfo: 'Valves | Flow control', image: '/images/products/cover/pvc high pressure/fittings/valves.png' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 5) PVC SCH 40 FITTINGS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'pvc-sch-40-fittings',
    name: 'PVC SCH 40 Fittings',
    nameAr: 'وصلات PVC جدول 40',
    nameFr: "Raccords PVC SCH 40",
    description: 'Schedule 40 PVC pressure fittings to ASTM D 2466 standard.',
    icon: '🔩',
    image: '/images/products/cover/pvc high pressure/fittings/PVC SCH 40 Fittings.png',
    items: [
      { id: 'pvc-sch-40-fittings-astm-d2466', name: 'PVC SCH 40 Fittings ASTM D 2466', shortInfo: 'ASTM D 2466 | SCH 40', image: '/images/products/cover/pvc high pressure/fittings/PVC SCH 40 Fittings.png' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 6) PVC DUCT PIPES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'pvc-duct-pipes',
    name: 'PVC Duct Pipes',
    nameAr: 'أنابيب مجاري PVC',
    nameFr: "Tuyaux de Gaines PVC",
    description: 'Underground cable protection duct systems in NEMA, DIN, and BS standards, including Etisalat & DU approved.',
    icon: '⚡',
    image: '/images/products/cover/upvs duct/pipes/CROWN PLASTIC PVC DUCT PIPE NEMA TC 22003.png',
    items: [
      { id: 'pvc-duct-pipes-nema-tc-2', name: 'PVC Duct Pipes NEMA TC 2: 2003', shortInfo: 'NEMA TC 2:2003 | Electrical ducting', image: '/images/products/cover/upvs duct/pipes/CROWN PLASTIC PVC DUCT PIPE NEMA TC 22003.png' },
      { id: 'pvc-duct-pipes-nema-tc-6-8', name: 'PVC Duct Pipes NEMA TC 6 & 8/ASTM F 512', shortInfo: 'NEMA TC 6 & 8 | ASTM F 512', image: '/images/products/cover/upvs duct/pipes/CROWN PLASTIC PVC DUCT PIPE ASTM F512.png' },
      { id: 'pvc-duct-pipes-din-8062', name: 'PVC Duct Pipes DIN 8062', shortInfo: 'DIN 8062 | Ducting', image: '/images/products/cover/upvs duct/pipes/CROWN PLASTIC PVC DUCT PIPE DIN 8062.png' },
      { id: 'pvc-duct-pipes-etisalat-du', name: 'PVC Duct Pipes For Etisalat & DU', shortInfo: 'Etisalat & DU | Telecom approved', image: '/images/products/cover/upvs duct/pipes/CROWN PLASTIC PVC DUCT PIPEetisalat&du.png' },
      { id: 'pvc-duct-pipes-bs-3505-06', name: 'PVC Duct Pipes BS 3505/06', shortInfo: 'BS 3505/06 | Ducting', image: '/images/products/cover/upvs duct/pipes/CROWN PLASTIC PVC DUCT PIPE BS 3505.png' },
      { id: 'pvc-duct-pipes-non-standard', name: 'PVC Duct Non-Standard Pipes', shortInfo: 'Non-Standard | Custom specifications', image: '/images/products/cover/upvs duct/pipes/CROWN PLASTIC PVC DUCT PIPEnonstandard.png' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 7) PVC DUCT FITTINGS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'pvc-duct-fittings',
    name: 'PVC Duct Fittings',
    nameAr: 'وصلات مجاري PVC',
    nameFr: "Raccords de Gaines PVC",
    description: 'Duct fittings for underground cable protection systems.',
    icon: '⚡',
    image: '/images/products/cover/upvs duct/fittings/duct-socketa.png',
    items: [
      { id: 'pvc-duct-fittings-socket', name: 'PVC Duct Socket / Coupler', shortInfo: 'Socket | Connecting sections', image: '/images/products/cover/upvs duct/fittings/duct-socketa.png' },
      { id: 'pvc-duct-fittings-bellmouth', name: 'PVC Duct Bellmouth', shortInfo: 'Bellmouth | Cable entry', image: '/images/products/cover/upvs duct/fittings/duct-bellmouth.png' },
      { id: 'pvc-duct-fittings-end-caps', name: 'PVC Duct End Caps', shortInfo: 'End Caps | Sealing open ends', image: '/images/products/cover/upvs duct/fittings/duct-end-caps.png' },
      { id: 'pvc-duct-fittings-lr-bends-90-45', name: 'PVC Duct 90°/45° LR Bends', shortInfo: '90°/45° LR | Directional changes', image: '/images/products/cover/upvs duct/fittings/duct 90-45 l r bends.png' },
      { id: 'pvc-duct-fittings-street-lighting-bends', name: 'PVC Duct 90° Street Lighting LR Bends', shortInfo: 'Street Lighting | 90° LR bend', image: '/images/products/cover/upvs duct/fittings/duct 90 street lighting l r bends 3.png' },
      { id: 'pvc-duct-fittings-lightning-bends', name: 'PVC Duct 90° Lightning LR Bends', shortInfo: 'Lightning Protection | 90° LR', image: '/images/products/cover/upvs duct/fittings/duct 90 lightning l r bends 4.png' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 8) PVC CONDUIT PIPES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'pvc-conduit-pipes',
    name: 'PVC Conduit Pipes',
    nameAr: 'أنابيب قنوات PVC',
    nameFr: "Tuyaux de Conduits PVC",
    description: 'Rigid PVC electrical conduit pipes for building wiring systems. Available in compression force ratings and Schedule 40/80.',
    icon: '🔌',
    image: '/images/products/cover/conduits/pipes/CROWN PLASTIC PVC CONDUIT PIPE 1250N.png',
    items: [
      { id: 'pvc-conduit-pipes-compression-force', name: 'PVC Conduit Pipes 1250N / 750N / 320N Compression Force', shortInfo: '1250N / 750N / 320N | Compression rated', image: '/images/products/cover/conduits/pipes/CROWN PLASTIC PVC CONDUIT PIPE 1250N.png' },
      { id: 'pvc-conduit-pipes-sch-40', name: 'PVC Conduit Pipes SCH 40 CONDUIT- US', shortInfo: 'SCH 40 | US standard', image: '/images/products/cover/conduits/pipes/CROWN PLASTIC PVC CONDUIT PIPE SCH 40.png' },
      { id: 'pvc-conduit-pipes-sch-80', name: 'PVC Conduit Pipes SCH 80 CONDUIT- US', shortInfo: 'SCH 80 | Heavy duty', image: '/images/products/cover/conduits/pipes/CROWN PLASTIC PVC CONDUIT PIPE SCH 80.png' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 9) PP-R PIPES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'ppr-pipes',
    name: 'PP-R Pipes',
    nameAr: 'أنابيب PP-R',
    nameFr: "Tuyaux PP-R",
    description: 'Polypropylene Random pipes for hot and cold potable water. PN10-PN25 rated, DIN 8077/78 certified.',
    icon: '🛃',
    image: '/images/products/cover/ppr/pipes/CROWN PLASTIC PPR PIPE SDR11 PN10.png',
    items: [
      { id: 'ppr-pipes-sdr11-pn10', name: 'PP-R Pipes SDR11/PN10 DIN 8077/78', shortInfo: 'SDR11 / PN10 | Cold water | 10 bar', image: '/images/products/cover/ppr/pipes/CROWN PLASTIC PPR PIPE SDR11 PN10.png' },
      { id: 'ppr-pipes-sdr7-4-pn16', name: 'PP-R Pipes SDR7.4/PN16 DIN 8077/78', shortInfo: 'SDR7.4 / PN16 | Hot & cold | 16 bar', image: '/images/products/cover/ppr/pipes/CROWN PLASTIC PPR PIPE SDR7.4 PN16.png' },
      { id: 'ppr-pipes-sdr6-pn20', name: 'PP-R Pipes SDR6/PN20 DIN 8077/78', shortInfo: 'SDR6 / PN20 | High pressure | 20 bar', image: '/images/products/cover/ppr/pipes/CROWN PLASTIC PPR PIPE SDR11 PN20.png' },
      { id: 'ppr-pipes-sdr5-pn25', name: 'PP-R Pipes SDR5/PN25 DIN 8077/78', shortInfo: 'SDR5 / PN25 | Max pressure | 25 bar', image: '/images/products/cover/ppr/pipes/CROWN PLASTIC PPR PIPE SDR5 PN25.png' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 10) HDPE PIPES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'hdpe-pipes',
    name: 'HDPE Pipes',
    nameAr: 'أنابيب HDPE',
    nameFr: "Tuyaux HDPE",
    description: 'High-density polyethylene pipes for irrigation, water distribution, and agricultural applications. PE63/80/100 grades.',
    icon: '🌊',
    image: '/images/products/cover/hdpe/pipes/CROWN PLASTIC HDPE PIPE PE63.png',
    items: [
      { id: 'hdpe-pipes-5mpa-pe63', name: 'HDPE Pipes 5 MPa (PE63)', shortInfo: '5 MPa | PE63 grade', image: '/images/products/cover/hdpe/pipes/CROWN PLASTIC HDPE PIPE PE63.png' },
      { id: 'hdpe-pipes-6-3mpa-pe80', name: 'HDPE Pipes 6.3 MPa (PE80)', shortInfo: '6.3 MPa | PE80 grade', image: '/images/products/cover/hdpe/pipes/CROWN PLASTIC HDPE PIPE PE80.png' },
      { id: 'hdpe-pipes-8mpa-pe100', name: 'HDPE Pipes 8 MPa (PE100)', shortInfo: '8 MPa | PE100 grade', image: '/images/products/cover/hdpe/pipes/CROWN PLASTIC HDPE PIPE PE100.png' },
      { id: 'hdpe-pipes-din-8072', name: 'HDPE Pipes DIN 8072', shortInfo: 'DIN 8072 | German standard', image: '/images/products/cover/hdpe/pipes/CROWN PLASTIC HDPE PIPE DIN 8072.png' },
      { id: 'hdpe-pipes-asae-s435', name: 'HDPE Pipes ASAE S435', shortInfo: 'ASAE S435 | Agricultural', image: '/images/products/cover/hdpe/pipes/CROWN PLASTIC HDPE PIPE ASAE S435.png' },
      { id: 'hdpe-pipes-aust-std-2698', name: 'HDPE Pipes AUST STD 2698-1: 1984', shortInfo: 'AUST STD 2698-1 | Australian', image: '/images/products/cover/hdpe/pipes/CROWN PLASTIC HDPE PIPE AUST STD 2698-11984.png' },
      { id: 'hdpe-pipes-bs-1972-67', name: 'HDPE Pipes BS 1972/67', shortInfo: 'BS 1972/67 | British standard', image: '/images/products/cover/hdpe/pipes/CROWN PLASTIC HDPE PIPE BS 1972.png' },
      { id: 'polyethylene-pipe-rolls', name: 'Polyethylene Pipe Rolls (Class C / HD)', shortInfo: 'Class C | HD Pipe Rolls', image: '/images/products/cover/hdpe/pipes/CROWN PLASTIC HDPE PIPE PE63.png' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 11) PEX PIPES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'pex-pipes',
    name: 'PEX Pipes',
    nameAr: 'أنابيب PEX',
    nameFr: "Tuyaux PEX",
    description: 'Cross-linked polyethylene pipes for hot and cold water distribution. PN 12.5 & PN 20 rated.',
    icon: '🔴',
    image: '/images/products/cover/pex/pipes/pex.png',
    items: [
      { id: 'pex-pipes-pn-12-5-pn-20', name: 'PEX Pipes PN 12.5 & PN 20', shortInfo: 'PN 12.5 & PN 20 | Cross-linked PE', image: '/images/products/cover/pex/pipes/pex.png' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 12) FABRICATIONS & ACCESSORIES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'fabrications-accessories',
    name: 'Fabrications & Accessories',
    nameAr: 'التصنيع والملحقات',
    nameFr: "Fabrications & Accessoires",
    description: 'Custom PVC/UPVC fabrications including Dubai Municipality approved grease traps and specialty accessories.',
    icon: '🏭',
    items: [
      { id: 'fabrication-grease-trap-type-a', name: 'PVC/UPVC Fabrication Grease Trap Type - A', shortInfo: 'Type A | Single bucket | 450mm', image: '/images/products/cover/fabrication/grease-trap-type-a.png' },
      { id: 'fabrication-grease-trap-type-b', name: 'PVC/UPVC Fabrication Grease Trap Type - B', shortInfo: 'Type B | Dual bucket | 260mm', image: '/images/products/cover/fabrication/grease-trap-type-b.png' },
      { id: 'fabrication-grease-trap-type-c', name: 'PVC/UPVC Fabrication Grease Trap Type - C', shortInfo: 'Type C | Large baffle | 1980mm', image: '/images/products/cover/fabrication/grease-trap-type-c.png' },
      { id: 'fabrication-grease-trap-type-d', name: 'PVC/UPVC Fabrication Grease Trap Type - D', shortInfo: 'Type D | Compact | 24 wing nuts', image: '/images/products/cover/fabrication/grease-trap-type-d.png' },
      { id: 'fabrication-accessories', name: 'PVC/UPVC Fabrication Accessories', shortInfo: 'Accessories | Custom fabrications', image: '/images/fabrications/fabrications-cover-composite.jpg' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 13) SOLVENTS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'solvents',
    name: 'Solvents',
    nameAr: 'المذيبات',
    nameFr: "Solvants",
    description: 'PVC solvent cements for secure and durable pipe joints.',
    icon: '🧴',
    image: '/images/products/cover/solvent/Solventcover.png',
    items: [
      { id: 'pvc-solvents', name: 'PVC Solvents', shortInfo: 'PVC Solvents | Pipe jointing', image: '/images/products/cover/solvent/Solventcover.png' },
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
