// Products configuration for Crown Plastic Pipes

export interface SubProduct {
  slug: string;
  name: string;
  standards: string[];
  shortDescription: string;
  features?: string[];
}

export interface ProductCategory {
  slug: string;
  name: string;
  shortDescription: string;
  icon: string;
  image?: string;
  subProducts: SubProduct[];
}

export const productCategories: ProductCategory[] = [
  {
    slug: 'upvc-pressure',
    name: 'UPVC Pressure Pipes & Fittings',
    shortDescription: 'Metric & Inch series | PN6-16 | BS EN 1452, DIN 8061/62, BS 3505/6',
    icon: '💧',
    image: '/images/products/upvc-pressure.jpg',
    subProducts: [
      {
        slug: 'pipes-metric',
        name: 'UPVC Pressure Pipes BS EN 1452',
        standards: ['BS EN 1452', 'DIN 8061/62', 'ISO 4422'],
        shortDescription: 'Metric series PN6-16 | ISO 4422 superseded by BS EN 1452 | Potable water supply systems.',
        features: ['Lead-free', 'Corrosion resistant', 'Long service life', 'Easy installation'],
      },
      {
        slug: 'pipes-inch',
        name: 'UPVC Pressure Pipes ASTM D1785',
        standards: ['ASTM D1785', 'ASTM D2241', 'BS 3505', 'BS 3506'],
        shortDescription: 'Inch series BS 3505/3506 | Schedule 40 | Water distribution networks.',
        features: ['High pressure rating', 'UV stabilized', 'Leak-proof joints'],
      },
      {
        slug: 'fittings',
        name: 'UPVC Pressure Fittings Multi-Standard',
        standards: ['DIN 8063', 'BS EN 1452', 'BS 4346 PN15', 'ASTM D2466 SCH40'],
        shortDescription: 'DIN 8063 | BS EN 1452 PN15 | ASTM D2466 SCH40 | Elbows, tees, couplers, adapters.',
        features: ['Precision molded', 'Perfect fit', 'High pressure tolerance'],
      },
    ],
  },
  {
    slug: 'upvc-drainage',
    name: 'UPVC Drainage Pipes & Fittings',
    shortDescription: 'BS EN 1329/1401 | Above/underground | BS 5255/4514/4660',
    icon: '🔧',
    image: '/images/products/upvc-drainage.jpg',
    subProducts: [
      {
        slug: 'pipes-above-ground',
        name: 'UPVC Soil Pipes BS 5255',
        standards: ['BS 5255', 'BS 4514', 'BS EN 1329'],
        shortDescription: 'Above-ground soil and waste discharge pipes for internal and external drainage systems.',
        features: ['Ring-seal joints', 'Sound dampening', 'Quick assembly'],
      },
      {
        slug: 'pipes-underground',
        name: 'UPVC Underground Pipes BS EN 1401',
        standards: ['BS EN 1401', 'BS 4660', 'BS 5481'],
        shortDescription: 'Heavy-duty underground drainage pipes for sewerage and stormwater applications.',
        features: ['High impact resistance', 'Root resistant', 'Long-term durability'],
      },
      {
        slug: 'pipes-non-standard',
        name: 'UPVC Custom Drainage Pipes',
        standards: ['Custom specifications'],
        shortDescription: 'Custom-manufactured drainage pipes for specialized project requirements.',
        features: ['Made to order', 'Custom dimensions', 'Special colors available'],
      },
      {
        slug: 'fittings',
        name: 'UPVC Drainage Fittings BS EN 1329',
        standards: ['BS EN 1329', 'BS 4514'],
        shortDescription: 'Comprehensive range including elbows, tees, sockets, reducers, access caps, and floor drains.',
        features: ['Complete system compatibility', 'Easy maintenance access'],
      },
    ],
  },
  {
    slug: 'upvc-duct',
    name: 'UPVC Duct Pipes & Accessories',
    shortDescription: 'DIN 8062, NEMA TC-2, Etisalat/DU specs | D54/D56/D57',
    icon: '⚡',
    image: '/images/products/upvc-duct.jpg',
    subProducts: [
      {
        slug: 'pipes-din',
        name: 'UPVC Duct Pipes DIN 8062',
        standards: ['DIN 8062'],
        shortDescription: 'German standard duct pipes for underground cable protection.',
        features: ['Smooth bore', 'Low friction', 'Easy cable pulling'],
      },
      {
        slug: 'pipes-bs',
        name: 'UPVC Duct Pipes BS 3505/3506',
        standards: ['BS 3505', 'BS 3506'],
        shortDescription: 'British standard duct pipes for electrical and communication cables.',
        features: ['High crush resistance', 'Watertight joints'],
      },
      {
        slug: 'pipes-nema',
        name: 'UPVC Duct Pipes NEMA TC-2',
        standards: ['NEMA TC-2'],
        shortDescription: 'American NEMA standard conduit for electrical installations.',
        features: ['UL listed', 'Flame retardant'],
      },
      {
        slug: 'pipes-special-d54-d56-d57',
        name: 'UPVC Telecom Duct D54/D56/D57',
        standards: ['D54', 'D56', 'D57'],
        shortDescription: 'UAE telecom specification duct pipes for Etisalat/DU infrastructure.',
        features: ['Custom specifications', 'Project-specific design'],
      },
      {
        slug: 'pipes-telecom',
        name: 'UPVC Telecom Duct Pipes',
        standards: ['Etisalat Spec', 'DU Spec'],
        shortDescription: 'Telecommunications duct pipes approved for UAE telecom infrastructure.',
        features: ['Telecom approved', 'Fiber-optic ready', 'Multiple duct options'],
      },
      {
        slug: 'accessories',
        name: 'UPVC Duct Accessories',
        standards: ['Various'],
        shortDescription: 'Complete range of accessories including end caps, sockets, bellmouths, and bends.',
        features: ['90° bends', '45° bends', 'Long radius bends', 'End caps'],
      },
    ],
  },
  {
    slug: 'pvc-conduit',
    name: 'PVC Conduit Pipes',
    shortDescription: 'Schedule 40/80 | 320N/750N/1250N crush resistance',
    icon: '🔌',
    image: '/images/products/pvc-conduit.jpg',
    subProducts: [
      {
        slug: 'round-heavy',
        name: 'PVC Conduit 1250N Heavy Duty',
        standards: ['1250N Crush Resistance'],
        shortDescription: 'Heavy-duty conduit rated at 1250N for maximum protection in demanding environments.',
        features: ['1250N rating', 'Concrete embedment', 'Industrial use'],
      },
      {
        slug: 'round-medium',
        name: 'PVC Conduit 750N Medium Duty',
        standards: ['750N Crush Resistance'],
        shortDescription: 'Medium-duty conduit rated at 750N for standard commercial installations.',
        features: ['750N rating', 'Commercial grade', 'Versatile applications'],
      },
      {
        slug: 'round-light',
        name: 'PVC Conduit 320N Light Duty',
        standards: ['320N Crush Resistance'],
        shortDescription: 'Light-duty conduit rated at 320N for residential and light commercial use.',
        features: ['320N rating', 'Residential use', 'Cost-effective'],
      },
      {
        slug: 'schedule-40',
        name: 'PVC Conduit Schedule 40',
        standards: ['US Standard', 'UL Listed'],
        shortDescription: 'American standard Schedule 40 rigid PVC conduit for electrical installations.',
        features: ['UL listed', 'Standard wall thickness', 'Wide availability'],
      },
      {
        slug: 'schedule-80',
        name: 'PVC Conduit Schedule 80',
        standards: ['US Standard', 'UL Listed'],
        shortDescription: 'Heavy-duty Schedule 80 conduit with extra wall thickness for extreme conditions.',
        features: ['Extra heavy wall', 'Maximum protection', 'Industrial environments'],
      },
    ],
  },
  {
    slug: 'ppr',
    name: 'PPR Pipes',
    shortDescription: 'PN10/16/20 | DIN 8077/78 | Hot & cold water 50yr life',
    icon: '🚿',
    image: '/images/products/ppr-pipes.jpg',
    subProducts: [
      {
        slug: 'sdr11-pn10',
        name: 'PPR SDR11 PN10',
        standards: ['DIN 8077', 'DIN 8078', 'ISO 15874'],
        shortDescription: 'PPR pipes with 10 bar pressure rating for cold water applications.',
        features: ['10 bar rating', 'Cold water systems', 'Economic choice'],
      },
      {
        slug: 'sdr7-4-pn16',
        name: 'PPR SDR7.4 PN16',
        standards: ['DIN 8077', 'DIN 8078', 'ISO 15874'],
        shortDescription: 'PPR pipes with 16 bar pressure rating for hot and cold water systems.',
        features: ['16 bar rating', 'Hot & cold water', 'Building installations'],
      },
      {
        slug: 'sdr6-pn20',
        name: 'PPR SDR6 PN20',
        standards: ['DIN 8077', 'DIN 8078', 'ISO 15874'],
        shortDescription: 'High-pressure PPR pipes rated at 20 bar for demanding applications.',
        features: ['20 bar rating', 'High temperature', 'Industrial applications'],
      },
    ],
  },
  {
    slug: 'polyethylene',
    name: 'HDPE Pipe Systems',
    shortDescription: 'PE63/80/100 | ISO 4427 | Irrigation & water distribution',
    icon: '🌊',
    image: '/images/products/pe-systems.jpg',
    subProducts: [
      {
        slug: 'hdpe-pe63-pe80-pe100',
        name: 'HDPE Pipes PE63/PE80/PE100',
        standards: ['ISO 4427', 'DIN 8074', 'EN 12201'],
        shortDescription: 'High-density polyethylene pipes in various grades for water and gas distribution.',
        features: ['Flexible', 'Corrosion free', 'Long coil lengths', '50+ year life'],
      },
      {
        slug: 'lldpe-ldpe-drip',
        name: 'LLDPE/LDPE Drip Irrigation Pipes',
        standards: ['ASAE S435', 'ASTM', 'AS/NZS 2698', 'BS 1972'],
        shortDescription: 'Linear low-density polyethylene pipes for agricultural drip irrigation systems.',
        features: ['UV stabilized', 'Flexible laying', 'Agricultural grade'],
      },
      {
        slug: 'water-distribution',
        name: 'HDPE Water Distribution PN10-16',
        standards: ['ISO 4427', 'EN 12201'],
        shortDescription: 'Complete polyethylene piping systems for municipal water distribution networks.',
        features: ['Large diameter available', 'Fusion welded joints', 'Leak-free system'],
      },
    ],
  },
];

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((cat) => cat.slug === slug);
}

// Helper function to get sub-product by slugs
export function getSubProductBySlugs(categorySlug: string, productSlug: string): SubProduct | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.subProducts.find((p) => p.slug === productSlug);
}

// Helper to get all products flat
export function getAllProducts(): { category: ProductCategory; product: SubProduct }[] {
  return productCategories.flatMap((category) =>
    category.subProducts.map((product) => ({ category, product }))
  );
}
