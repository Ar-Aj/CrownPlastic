/**
 * PVC/UPVC Fabrications & Accessories - Grease Traps (Type A, B, C, D)
 * 
 * Four separate detail pages, one per type, following the PVC Pressure pattern.
 * Designed as per Dubai Municipality approved drawings.
 */

import { type ProductDetailConfig, type PipeTable } from '@/types/productDetail';

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED DATA
// ═══════════════════════════════════════════════════════════════════════════════

const SEGMENT = 'UPVC Fabricated Fittings / Accessories';
const FAMILY = 'Grease Traps';
const STANDARDS = ['ISO 9001:2015', 'ISO 14001-2015', 'OHSAS 18001'];
const DUTY_CLASS = 'As per Dubai Municipality Approved Drawing';

const SYSTEM_DESCRIPTION = 'The CROWN PLASTIC Fabrication and Accessories catalogue presents custom-built PVC/UPVC fabricated products, including various designs of Grease Traps and Interceptors, as well as duct accessories and other miscellaneous fittings.';

const SHARED_FEATURES = [
  'Use of PVC/UPVC as primary material',
  'Custom Build product nature based on waste water and site condition',
  'Use of removable perforated buckets for solid waste collection',
];

const SHARED_DOS = [
  'Install as per Dubai Municipality approved drawings',
  'Regularly clean and maintain perforated buckets',
  'Ensure proper gasket sealing during reassembly',
  'Use appropriate lifting equipment for heavy covers',
  'Schedule periodic inspections for grease accumulation',
];

const SHARED_DONTS = [
  'Do not overload with solid waste beyond design capacity',
  'Do not use incompatible chemicals that may damage PVC/UPVC',
  'Do not neglect regular maintenance and cleaning schedules',
  'Do not modify the design without engineering approval',
  'Do not dispose of hazardous materials through grease traps',
];

// ═══════════════════════════════════════════════════════════════════════════════
// CONSTRUCTION DETAILS TABLES (per type)
// ═══════════════════════════════════════════════════════════════════════════════

const typeAConstructionTable: PipeTable = {
  id: 'type-a-construction',
  title: 'Type A – Construction Details',
  columns: [
    { key: 'component', label: 'Component', align: 'left' },
    { key: 'specification', label: 'Specification', align: 'left' },
  ],
  rows: [
    { component: 'Bucket Type', specification: 'Single removable PVC perforated bucket' },
    { component: 'Bucket Depth', specification: '450mm deep' },
    { component: 'Bucket Perforations', specification: '25 holes in four rows each side' },
    { component: 'Cover Material', specification: 'GRP sealed cover' },
    { component: 'Cover Dimensions', specification: '1070 × 820 × 15mm THK' },
    { component: 'Securing Hardware', specification: '10 × 30 BRASS WING NUT/BOLT' },
    { component: 'Gasket', specification: '5mm THICK NEOPRENE GASKET' },
  ],
};

const typeBConstructionTable: PipeTable = {
  id: 'type-b-construction',
  title: 'Type B – Construction Details',
  columns: [
    { key: 'component', label: 'Component', align: 'left' },
    { key: 'specification', label: 'Specification', align: 'left' },
  ],
  rows: [
    { component: 'Bucket Type', specification: 'Two removable PVC perforated buckets' },
    { component: 'Bucket Depth', specification: '260mm deep (each)' },
    { component: 'Bucket Perforations', specification: '25 holes in four rows each side' },
    { component: 'Lifting Feature', specification: 'Lifting handles included' },
    { component: 'Cover Material', specification: 'Thick GRP cover' },
    { component: 'Gasket', specification: '5mm THICK GASKET' },
  ],
};

const typeCConstructionTable: PipeTable = {
  id: 'type-c-construction',
  title: 'Type C – Construction Details',
  columns: [
    { key: 'component', label: 'Component', align: 'left' },
    { key: 'specification', label: 'Specification', align: 'left' },
  ],
  rows: [
    { component: 'Overall Length', specification: '1980mm' },
    { component: 'Baffle', specification: 'Internal baffle wall included' },
    { component: 'Bucket Type', specification: 'Removable PVC perforated bucket' },
    { component: 'Bucket Perforations', specification: '25 holes in five rows' },
    { component: 'Cover Dimensions', specification: '600 × 450mm' },
    { component: 'Cover Material', specification: 'PVC 8mm TOP COVER' },
    { component: 'Gasket', specification: '5mm THICK NEOPRENE GASKET' },
  ],
};

const typeDConstructionTable: PipeTable = {
  id: 'type-d-construction',
  title: 'Type D – Construction Details',
  columns: [
    { key: 'component', label: 'Component', align: 'left' },
    { key: 'specification', label: 'Specification', align: 'left' },
  ],
  rows: [
    { component: 'Cover Material', specification: 'GRP SEALED COVER' },
    { component: 'Cover Dimensions', specification: '670 × 670 × 15mm THICK' },
    { component: 'Securing Hardware', specification: 'WING NUTS (24 NOS)' },
    { component: 'Air Vent', specification: '055 (2") AIR VENT' },
    { component: 'Bucket Type', specification: 'Removable PVC perforated bucket' },
    { component: 'Bucket Dimensions', specification: '360 × 360 × 300mm DEEP' },
    { component: 'Bucket Perforations', specification: '12mm holes in 3 rows each' },
  ],
};

// ═══════════════════════════════════════════════════════════════════════════════
// TYPE A – SINGLE BUCKET GREASE TRAP
// ═══════════════════════════════════════════════════════════════════════════════

export const greaseTrapTypeA: ProductDetailConfig = {
  slug: 'pvc-upvc-grease-trap-type-a',
  categorySlug: 'upvc-fabrications',
  
  title: 'PVC/UPVC Grease Trap – Type A',
  titleAr: 'مصيدة الشحوم PVC/UPVC – النوع A',
  
  shortDescription: 'Single bucket grease trap featuring a removable PVC perforated bucket (450mm deep) with GRP sealed cover and brass wing nut/bolt securing. Designed as per Dubai Municipality approved drawings.',
  shortDescriptionAr: 'مصيدة شحوم بدلو واحد مع دلو PVC مثقب قابل للإزالة وغطاء GRP محكم.',
  
  overview: `Type A is a Grease Trap design featuring a single removable PVC perforated bucket (450mm deep) for solid waste collection, with a GRP sealed cover (1070×820×15mm THK). It includes a 10×30 BRASS WING NUT/BOLT and a 5mm THICK NEOPRENE GASKET for sealing.

${SYSTEM_DESCRIPTION}

**Key Specifications:**
• Material: PVC/UPVC, GRP (for cover), Brass (for hardware), Neoprene (for gasket)
• Jointing Method: Wing nut/bolt securing (for cover)
• Duty/Class: ${DUTY_CLASS}
• Application: Grease Traps, as per Dubai Municipality approved drawing
• Custom built to site conditions
• Standards: ${STANDARDS.join(', ')}`,
  
  features: [
    'Removable PVC perforated bucket (450mm deep)',
    'Bucket has 25 holes in four rows each side',
    'Sealed cover in GRP (1070×820×15mm THK)',
    'Secured with 10×30 BRASS WING NUT/BOLT and 5mm THICK NEOPRENE GASKET',
    ...SHARED_FEATURES,
  ],
  
  applications: [
    'Grease Traps, as per Dubai Municipality approved drawing',
    'Commercial kitchen waste management',
    'Restaurant and food service facilities',
    'Industrial wastewater pre-treatment',
  ],
  
  pipesTables: [typeAConstructionTable],
  fittings: [],
  
  downloads: [
    { label: 'PVC/UPVC Fabrications Catalogue (PDF)', href: '/pdfs/UPVC-FABRICATIONS-CATALOGUE.pdf' },
  ],
  
  dosDonts: {
    dos: SHARED_DOS,
    donts: SHARED_DONTS,
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// TYPE B – DUAL BUCKET GREASE TRAP
// ═══════════════════════════════════════════════════════════════════════════════

export const greaseTrapTypeB: ProductDetailConfig = {
  slug: 'pvc-upvc-grease-trap-type-b',
  categorySlug: 'upvc-fabrications',
  
  title: 'PVC/UPVC Grease Trap – Type B',
  titleAr: 'مصيدة الشحوم PVC/UPVC – النوع B',
  
  shortDescription: 'Dual bucket grease trap similar to Type A but featuring two removable PVC perforated buckets (260mm deep) with lifting handles for easier maintenance access.',
  shortDescriptionAr: 'مصيدة شحوم بدلوين مع دلاء PVC مثقبة قابلة للإزالة ومقابض رفع.',
  
  overview: `Type B is a Grease Trap design similar to Type A but featuring two removable PVC perforated buckets (260mm deep). The system includes Lifting Handles and components like a 5mm THICK GASKET and GRP COVER for enhanced maintenance accessibility.

${SYSTEM_DESCRIPTION}

**Key Specifications:**
• Material: PVC/UPVC, GRP (for cover)
• Bucket Configuration: Two removable perforated buckets
• Duty/Class: ${DUTY_CLASS}
• Application: Grease Traps, as per Dubai Municipality approved drawing
• Custom built to site conditions
• Standards: ${STANDARDS.join(', ')}`,
  
  features: [
    'Removable PVC perforated two bucket system (260mm deep)',
    'Buckets have 25 holes in four rows each side',
    'Includes lifting handle',
    'Features a thick GRP cover and 5mm thick gasket',
    ...SHARED_FEATURES,
  ],
  
  applications: [
    'Grease Traps, as per Dubai Municipality approved drawing',
    'Commercial kitchen waste management',
    'Restaurant and food service facilities',
    'High-frequency maintenance sites',
  ],
  
  pipesTables: [typeBConstructionTable],
  fittings: [],
  
  downloads: [
    { label: 'PVC/UPVC Fabrications Catalogue (PDF)', href: '/pdfs/UPVC-FABRICATIONS-CATALOGUE.pdf' },
  ],
  
  dosDonts: {
    dos: SHARED_DOS,
    donts: SHARED_DONTS,
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// TYPE C – LARGE BAFFLE GREASE TRAP
// ═══════════════════════════════════════════════════════════════════════════════

export const greaseTrapTypeC: ProductDetailConfig = {
  slug: 'pvc-upvc-grease-trap-type-c',
  categorySlug: 'upvc-fabrications',
  
  title: 'PVC/UPVC Grease Trap – Type C',
  titleAr: 'مصيدة الشحوم PVC/UPVC – النوع C',
  
  shortDescription: 'Large grease trap design (1980mm overall length) featuring an internal baffle wall for enhanced grease separation, with removable PVC perforated bucket.',
  shortDescriptionAr: 'مصيدة شحوم كبيرة مع جدار حاجز داخلي لفصل الشحوم المحسن.',
  
  overview: `Type C is a Grease Trap design notable for its large size (1980mm overall length) and inclusion of a BAFFLE for enhanced grease separation. It uses a removable PVC perforated bucket with 25 holes in five rows.

${SYSTEM_DESCRIPTION}

**Key Specifications:**
• Material: PVC/UPVC, Neoprene (for gasket)
• Overall Length: 1980mm
• Baffle: Internal baffle wall included
• Duty/Class: ${DUTY_CLASS}
• Application: Grease Traps, as per Dubai Municipality approved drawing
• Custom built to site conditions
• Standards: ${STANDARDS.join(', ')}`,
  
  features: [
    'Includes a baffle wall',
    'Removable PVC perforated bucket with 25 holes in five rows',
    '5mm THICK NEOPRENE GASKET',
    '600×450mm PVC 8mm TOP COVER',
    ...SHARED_FEATURES,
  ],
  
  applications: [
    'Grease Traps, as per Dubai Municipality approved drawing',
    'Large-volume commercial kitchen waste management',
    'Industrial food processing facilities',
    'High-capacity wastewater pre-treatment',
  ],
  
  pipesTables: [typeCConstructionTable],
  fittings: [],
  
  downloads: [
    { label: 'PVC/UPVC Fabrications Catalogue (PDF)', href: '/pdfs/UPVC-FABRICATIONS-CATALOGUE.pdf' },
  ],
  
  dosDonts: {
    dos: SHARED_DOS,
    donts: SHARED_DONTS,
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// TYPE D – COMPACT WING NUT GREASE TRAP
// ═══════════════════════════════════════════════════════════════════════════════

export const greaseTrapTypeD: ProductDetailConfig = {
  slug: 'pvc-upvc-grease-trap-type-d',
  categorySlug: 'upvc-fabrications',
  
  title: 'PVC/UPVC Grease Trap – Type D',
  titleAr: 'مصيدة الشحوم PVC/UPVC – النوع D',
  
  shortDescription: 'Compact grease trap design featuring a GRP sealed cover (670×670×15mm) secured by 24 wing nuts, with a smaller removable PVC perforated bucket.',
  shortDescriptionAr: 'مصيدة شحوم صغيرة الحجم مع غطاء GRP محكم ومثبت بـ 24 صامولة جناحية.',
  
  overview: `Type D is a Grease Trap design featuring a GRP SEALED COVER (670×670×15mm THICK) secured by WING NUTS (24 NOS). It uses a smaller, removable PVC perforated bucket (360×360×300mm DEEP) with 12mm holes in 3 rows for compact installations.

${SYSTEM_DESCRIPTION}

**Key Specifications:**
• Material: PVC/UPVC, GRP (for cover)
• Jointing Method: Wing nut/bolt securing
• Cover: 670×670×15mm GRP sealed cover
• Bucket: 360×360×300mm deep compact design
• Duty/Class: ${DUTY_CLASS}
• Application: Grease Traps, as per Dubai Municipality approved drawing
• Custom built to site conditions
• Standards: ${STANDARDS.join(', ')}`,
  
  features: [
    'GRP sealed cover (670×670×15mm THICK)',
    'Cover secured by 055 (2") AIR VENT WING NUTS (24 NOS)',
    'Removable PVC perforated bucket (360×360×300mm DEEP)',
    'Bucket has 12mm holes in 3 rows each',
    ...SHARED_FEATURES,
  ],
  
  applications: [
    'Grease Traps, as per Dubai Municipality approved drawing',
    'Compact installation sites',
    'Small to medium commercial kitchens',
    'Space-constrained building drainage systems',
  ],
  
  pipesTables: [typeDConstructionTable],
  fittings: [],
  
  downloads: [
    { label: 'PVC/UPVC Fabrications Catalogue (PDF)', href: '/pdfs/UPVC-FABRICATIONS-CATALOGUE.pdf' },
  ],
  
  dosDonts: {
    dos: SHARED_DOS,
    donts: SHARED_DONTS,
  },
};
