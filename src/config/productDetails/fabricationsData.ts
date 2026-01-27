/**
 * PVC/UPVC Fabrications & Accessories - Grease Traps (Type A, B, C, D)
 * 
 * Four COMPLETELY SEPARATE detail pages, one per type.
 * Each config is fully standalone with NO shared references.
 * Designed as per Dubai Municipality approved drawings.
 */

import { type ProductDetailConfig, type PipeTable } from '@/types/productDetail';

// ═══════════════════════════════════════════════════════════════════════════════
// TYPE A – SINGLE BUCKET GREASE TRAP
// Source: typeA from fabricationsData JSON
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

export const greaseTrapTypeA: ProductDetailConfig = {
  slug: 'pvc-upvc-grease-trap-type-a',
  categorySlug: 'fabrications',
  
  title: 'PVC/UPVC Grease Trap – Type A',
  titleAr: 'مصيدة الشحوم PVC/UPVC – النوع A',
  
  shortDescription: 'Type A Grease Trap featuring a single removable PVC perforated bucket (450mm deep) for solid waste collection, with a GRP sealed cover (1070×820×15mm THK) and brass wing nut/bolt securing.',
  shortDescriptionAr: 'مصيدة شحوم النوع A مع دلو PVC مثقب قابل للإزالة بعمق 450 مم وغطاء GRP محكم.',
  
  overview: `Type A is a Grease Trap design featuring a single removable PVC perforated bucket (450mm deep) for solid waste collection, with a GRP sealed cover (1070×820×15mm THK). It includes a 10×30 BRASS WING NUT/BOLT and a 5mm THICK NEOPRENE GASKET for sealing.

The CROWN PLASTIC Fabrication and Accessories catalogue presents custom-built PVC/UPVC fabricated products, including various designs of Grease Traps and Interceptors, as well as duct accessories and other miscellaneous fittings.

**Type A Key Specifications:**
• Material: PVC/UPVC, GRP (for cover), Brass (for hardware), Neoprene (for gasket)
• Jointing Method: Wing nut/bolt securing (for cover)
• Bucket: Single removable, 450mm deep, 25 holes in four rows each side
• Cover: GRP sealed, 1070×820×15mm THK
• Hardware: 10×30 BRASS WING NUT/BOLT
• Duty/Class: As per Dubai Municipality Approved Drawing
• Standards: ISO 9001:2015, ISO 14001-2015, OHSAS 18001`,
  
  features: [
    'Removable PVC perforated bucket (450mm deep)',
    'Bucket has 25 holes in four rows each side',
    'Sealed cover in GRP (1070×820×15mm THK)',
    'Secured with 10×30 BRASS WING NUT/BOLT and 5mm THICK NEOPRENE GASKET',
    'Use of PVC/UPVC as primary material',
    'Custom built product based on waste water and site condition',
    'Removable perforated bucket for solid waste collection',
  ],
  
  applications: [
    'Grease Traps, as per Dubai Municipality approved drawing',
    'Commercial kitchen waste management',
    'Restaurant and food service facilities',
    'Industrial wastewater pre-treatment',
    'Grease Traps (Types A, B, C, D)',
    'Petrol/Oil and Water Triple Interceptor',
  ],
  
  pipesTables: [typeAConstructionTable],
  fittings: [],
  
  downloads: [
    { label: 'PVC/UPVC Fabrications Catalogue (PDF)', href: '/pdfs/UPVC-FABRICATIONS-CATALOGUE.pdf' },
  ],
  
  dosDonts: {
    dos: [
      'Install as per Dubai Municipality approved drawings',
      'Regularly clean and maintain the single perforated bucket',
      'Ensure proper neoprene gasket sealing during reassembly',
      'Use appropriate lifting equipment for the GRP cover (1070×820mm)',
      'Schedule periodic inspections for grease accumulation',
    ],
    donts: [
      'Do not overload with solid waste beyond design capacity',
      'Do not use incompatible chemicals that may damage PVC/UPVC',
      'Do not neglect regular maintenance and cleaning schedules',
      'Do not modify the design without engineering approval',
      'Do not dispose of hazardous materials through grease traps',
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// TYPE B – DUAL BUCKET GREASE TRAP
// Source: typeB from fabricationsData JSON
// ═══════════════════════════════════════════════════════════════════════════════

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

export const greaseTrapTypeB: ProductDetailConfig = {
  slug: 'pvc-upvc-grease-trap-type-b',
  categorySlug: 'fabrications',
  
  title: 'PVC/UPVC Grease Trap – Type B',
  titleAr: 'مصيدة الشحوم PVC/UPVC – النوع B',
  
  shortDescription: 'Type B Grease Trap similar to Type A but featuring two removable PVC perforated buckets (260mm deep). The system includes Lifting Handles for easier maintenance access.',
  shortDescriptionAr: 'مصيدة شحوم النوع B بدلوين PVC مثقبين قابلين للإزالة بعمق 260 مم مع مقابض رفع.',
  
  overview: `Type B is a Grease Trap design similar to Type A but featuring two removable PVC perforated buckets (260mm deep). The system includes a Lifting Handle and components like a 5mm THICK GASKET and GRP COVER.

The CROWN PLASTIC Fabrication and Accessories catalogue presents custom-built PVC/UPVC fabricated products, including various designs of Grease Traps and Interceptors, as well as duct accessories and other miscellaneous fittings.

**Type B Key Specifications:**
• Material: PVC/UPVC, GRP (for cover)
• Bucket Configuration: Two removable perforated buckets, 260mm deep each
• Bucket Perforations: 25 holes in four rows each side
• Lifting Feature: Lifting handles included for easy removal
• Cover: Thick GRP cover
• Gasket: 5mm thick gasket
• Duty/Class: As per Dubai Municipality Approved Drawing
• Standards: ISO 9001:2015, ISO 14001-2015, OHSAS 18001`,
  
  features: [
    'Removable PVC perforated two bucket system (260mm deep)',
    'Buckets have 25 holes in four rows each side',
    'Includes lifting handle for easy bucket removal',
    'Features a thick GRP cover and 5mm thick gasket',
    'Use of PVC/UPVC as primary material',
    'Custom built product based on waste water and site condition',
    'Dual removable perforated buckets for solid waste collection',
  ],
  
  applications: [
    'Grease Traps, as per Dubai Municipality approved drawing',
    'Commercial kitchen waste management requiring frequent access',
    'Restaurant and food service facilities with high grease volumes',
    'Sites requiring easy maintenance with dual bucket system',
    'Grease Traps (Types A, B, C, D)',
    'Petrol/Oil and Water Triple Interceptor',
  ],
  
  pipesTables: [typeBConstructionTable],
  fittings: [],
  
  downloads: [
    { label: 'PVC/UPVC Fabrications Catalogue (PDF)', href: '/pdfs/UPVC-FABRICATIONS-CATALOGUE.pdf' },
  ],
  
  dosDonts: {
    dos: [
      'Install as per Dubai Municipality approved drawings',
      'Regularly clean and maintain both perforated buckets',
      'Use lifting handles when removing buckets for cleaning',
      'Ensure proper 5mm gasket sealing during reassembly',
      'Schedule periodic inspections for grease accumulation in both buckets',
    ],
    donts: [
      'Do not overload either bucket with solid waste beyond design capacity',
      'Do not use incompatible chemicals that may damage PVC/UPVC',
      'Do not neglect regular maintenance of dual bucket system',
      'Do not modify the design without engineering approval',
      'Do not dispose of hazardous materials through grease traps',
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// TYPE C – LARGE BAFFLE GREASE TRAP
// Source: typeC from fabricationsData JSON
// ═══════════════════════════════════════════════════════════════════════════════

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

export const greaseTrapTypeC: ProductDetailConfig = {
  slug: 'pvc-upvc-grease-trap-type-c',
  categorySlug: 'fabrications',
  
  title: 'PVC/UPVC Grease Trap – Type C',
  titleAr: 'مصيدة الشحوم PVC/UPVC – النوع C',
  
  shortDescription: 'Type C Grease Trap notable for its large size (1980mm overall length) and inclusion of a BAFFLE for enhanced grease separation. Uses a removable PVC perforated bucket with 25 holes in five rows.',
  shortDescriptionAr: 'مصيدة شحوم النوع C كبيرة الحجم بطول 1980 مم مع جدار حاجز داخلي لفصل الشحوم المحسن.',
  
  overview: `Type C is a Grease Trap design notable for its large size (1980mm overall length) and inclusion of a BAFFLE. It uses a removable PVC perforated bucket with 25 holes in five rows.

The CROWN PLASTIC Fabrication and Accessories catalogue presents custom-built PVC/UPVC fabricated products, including various designs of Grease Traps and Interceptors, as well as duct accessories and other miscellaneous fittings.

**Type C Key Specifications:**
• Material: PVC/UPVC, Neoprene (for gasket)
• Overall Length: 1980mm (large format)
• Baffle: Internal baffle wall for enhanced separation
• Bucket: Removable PVC perforated bucket
• Bucket Perforations: 25 holes in five rows
• Cover: 600×450mm PVC 8mm TOP COVER
• Gasket: 5mm THICK NEOPRENE GASKET
• Duty/Class: As per Dubai Municipality Approved Drawing
• Standards: ISO 9001:2015, ISO 14001-2015, OHSAS 18001`,
  
  features: [
    'Includes a baffle wall for enhanced grease separation',
    'Removable PVC perforated bucket with 25 holes in five rows',
    '5mm THICK NEOPRENE GASKET for reliable sealing',
    '600×450mm PVC 8mm TOP COVER',
    'Large overall length of 1980mm for high capacity',
    'Custom built product based on waste water and site condition',
    'Removable perforated bucket for solid waste collection',
  ],
  
  applications: [
    'Grease Traps, as per Dubai Municipality approved drawing',
    'Large-volume commercial kitchen waste management',
    'Industrial food processing facilities with high grease output',
    'High-capacity wastewater pre-treatment systems',
    'Grease Traps (Types A, B, C, D)',
    'Petrol/Oil and Water Triple Interceptor',
  ],
  
  pipesTables: [typeCConstructionTable],
  fittings: [],
  
  downloads: [
    { label: 'PVC/UPVC Fabrications Catalogue (PDF)', href: '/pdfs/UPVC-FABRICATIONS-CATALOGUE.pdf' },
  ],
  
  dosDonts: {
    dos: [
      'Install as per Dubai Municipality approved drawings',
      'Regularly clean and maintain the perforated bucket and baffle wall',
      'Ensure proper neoprene gasket sealing during reassembly',
      'Allow adequate space for the 1980mm overall length during installation',
      'Schedule periodic inspections for grease accumulation behind baffle',
    ],
    donts: [
      'Do not overload with solid waste beyond design capacity',
      'Do not use incompatible chemicals that may damage PVC/UPVC or baffle',
      'Do not neglect cleaning the baffle wall area',
      'Do not modify the baffle design without engineering approval',
      'Do not dispose of hazardous materials through grease traps',
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// TYPE D – COMPACT WING NUT GREASE TRAP
// Source: typeD from fabricationsData JSON
// ═══════════════════════════════════════════════════════════════════════════════

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

export const greaseTrapTypeD: ProductDetailConfig = {
  slug: 'pvc-upvc-grease-trap-type-d',
  categorySlug: 'fabrications',
  
  title: 'PVC/UPVC Grease Trap – Type D',
  titleAr: 'مصيدة الشحوم PVC/UPVC – النوع D',
  
  shortDescription: 'Type D Grease Trap featuring a GRP SEALED COVER (670×670×15mm THICK) secured by WING NUTS (24 NOS). Uses a smaller, removable PVC perforated bucket (360×360×300mm DEEP) with 12mm holes in 3 rows.',
  shortDescriptionAr: 'مصيدة شحوم النوع D بغطاء GRP محكم 670×670×15 مم مثبت بـ 24 صامولة جناحية.',
  
  overview: `Type D is a Grease Trap design featuring a GRP SEALED COVER (670×670×15mm THICK) secured by WING NUTS. It uses a smaller, removable PVC perforated bucket (360×360×300mm DEEP) with 12mm holes in 3 rows.

The CROWN PLASTIC Fabrication and Accessories catalogue presents custom-built PVC/UPVC fabricated products, including various designs of Grease Traps and Interceptors, as well as duct accessories and other miscellaneous fittings.

**Type D Key Specifications:**
• Material: PVC/UPVC, GRP (for cover)
• Jointing Method: Wing nut/bolt securing
• Cover: GRP SEALED COVER, 670×670×15mm THICK
• Securing: WING NUTS (24 NOS)
• Air Vent: 055 (2") AIR VENT
• Bucket: Removable PVC perforated, 360×360×300mm DEEP
• Bucket Perforations: 12mm holes in 3 rows each
• Duty/Class: As per Dubai Municipality Approved Drawing
• Standards: ISO 9001:2015, ISO 14001-2015, OHSAS 18001`,
  
  features: [
    'GRP sealed cover (670×670×15mm THICK)',
    'Cover secured by 055 (2") AIR VENT WING NUTS (24 NOS)',
    'Removable PVC perforated bucket (360×360×300mm DEEP)',
    'Bucket has 12mm holes in 3 rows each',
    'Compact design suitable for space-constrained installations',
    'Custom built product based on waste water and site condition',
    'Smaller removable perforated bucket for solid waste collection',
  ],
  
  applications: [
    'Grease Traps, as per Dubai Municipality approved drawing',
    'Compact installation sites with space constraints',
    'Small to medium commercial kitchens',
    'Space-constrained building drainage systems',
    'Grease Traps (Types A, B, C, D)',
    'Petrol/Oil and Water Triple Interceptor',
  ],
  
  pipesTables: [typeDConstructionTable],
  fittings: [],
  
  downloads: [
    { label: 'PVC/UPVC Fabrications Catalogue (PDF)', href: '/pdfs/UPVC-FABRICATIONS-CATALOGUE.pdf' },
  ],
  
  dosDonts: {
    dos: [
      'Install as per Dubai Municipality approved drawings',
      'Regularly clean and maintain the compact perforated bucket',
      'Properly secure all 24 wing nuts during reassembly',
      'Ensure 2" air vent is unobstructed',
      'Schedule periodic inspections for grease accumulation',
    ],
    donts: [
      'Do not overload the compact bucket beyond design capacity',
      'Do not use incompatible chemicals that may damage PVC/UPVC',
      'Do not over-tighten wing nuts on GRP cover',
      'Do not modify the design without engineering approval',
      'Do not dispose of hazardous materials through grease traps',
    ],
  },
};
