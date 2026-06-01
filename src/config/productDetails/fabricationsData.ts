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

  renderImage: '/images/fabrications/typea_main.png',
  diagramImage: '/images/fabrications/typea_diagram.png',

  shortDescription: 'Type A Grease Trap featuring a single 450 x 280 x 450 deep removable PVC perforated bucket with 25 holes in four rows on each side. Uses a 670x670x15mm GRP sealed cover.',
  shortDescriptionAr: 'مصيدة شحوم النوع A مع دلو PVC مثقب قابل للإزالة بعمق 450 مم وغطاء GRP محكم.',

  overview: `Type A is a Grease Trap design featuring a single 450 x 280 x 450 deep removable PVC perforated bucket for solid waste collection. It securely fastens with a 670x670x15mm GRP sealed cover.

The CROWN PLASTIC Fabrication and Accessories catalogue presents custom-built PVC/UPVC fabricated products, including various designs of Grease Traps and Interceptors, as well as duct accessories and other miscellaneous fittings.

**Type A Key Specifications:**
• Material: PVC/UPVC, GRP (for cover), Brass (for hardware), Neoprene (for gasket)
• Bucket: Single removable, 450 x 280 x 450 deep, 25 holes in four rows each side
• Cover: GRP sealed, 670x670x15mm
• Duty/Class: As per Dubai Municipality Approved Drawing
• Standards: ISO 9001:2015, ISO 14001:2015, OHSAS 18001`,

  features: [
    'Single 450 x 280 x 450 deep removable PVC perforated bucket',
    'Bucket has 25 holes in four rows on each side',
    'Uses a 670x670x15mm GRP sealed cover',
    'Secured with 10×30 BRASS WING NUT/BOLT and 5mm THICK NEOPRENE GASKET',
    'Use of PVC/UPVC as primary material',
    'Custom built product based on waste water and site condition',
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
    { label: 'PVC/UPVC Fabrications Catalogue (PDF)', href: '/pdfs/UPVC%20FABRICATION%20AND%20ACCESSORIES.pdf' },
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
  dosDontsAr: {
    dos: [
      'ركّب وفقاً لرسومات بلدية دبي المعتمدة',
      'نظّف وصُن الدلو المثقب الفردي بانتظام',
      'تأكد من إحكام حشية النيوبرين عند إعادة التجميع',
      'استخدم معدات رفع مناسبة لغطاء GRP (1070×820 مم)',
      'جدوِل فحوصات دورية لتراكم الشحوم',
    ],
    donts: [
      'لا تُحمّل النفايات الصلبة فوق السعة التصميمية',
      'لا تستخدم مواد كيميائية غير متوافقة قد تضر بالـ PVC/UPVC',
      'لا تهمل جداول الصيانة والتنظيف المنتظمة',
      'لا تعدّل التصميم بدون موافقة هندسية',
      'لا تتخلص من المواد الخطرة عبر مصايد الشحوم',
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

  renderImage: '/images/fabrications/typeb_main.png',
  diagramImage: '/images/fabrications/typeb_diagram.png',

  shortDescription: 'Type B Grease Trap featuring two removable PVC perforated buckets (260mm deep) with 250 holes in four rows on each side.',
  shortDescriptionAr: 'مصيدة شحوم النوع B بدلوين PVC مثقبين قابلين للإزالة بعمق 260 مم مع مقابض رفع.',

  overview: `Type B is a Grease Trap design featuring two removable PVC perforated buckets (260mm deep) with 250 holes in four rows on each side. The system includes a Lifting Handle and components like a 5mm THICK GASKET and GRP COVER.

The CROWN PLASTIC Fabrication and Accessories catalogue presents custom-built PVC/UPVC fabricated products, including various designs of Grease Traps and Interceptors, as well as duct accessories and other miscellaneous fittings.

**Type B Key Specifications:**
• Material: PVC/UPVC, GRP (for cover)
• Bucket Configuration: Two removable perforated buckets, 260mm deep each
• Bucket Perforations: 250 holes in four rows on each side
• Lifting Feature: Lifting handles included for easy removal
• Cover: Thick GRP cover
• Gasket: 5mm thick gasket
• Duty/Class: As per Dubai Municipality Approved Drawing
• Standards: ISO 9001:2015, ISO 14001-2015, OHSAS 18001`,

  features: [
    'Two removable PVC perforated buckets (260mm deep)',
    'Buckets have 250 holes in four rows on each side',
    'Includes lifting handle for easy bucket removal',
    'Features a thick GRP cover and 5mm thick gasket',
    'Use of PVC/UPVC as primary material',
    'Custom built product based on waste water and site condition',
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
    { label: 'PVC/UPVC Fabrications Catalogue (PDF)', href: '/pdfs/UPVC%20FABRICATION%20AND%20ACCESSORIES.pdf' },
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
  dosDontsAr: {
    dos: [
      'ركّب وفقاً لرسومات بلدية دبي المعتمدة',
      'نظّف وصُن كلا الدلوين المثقبين بانتظام',
      'استخدم مقابض الرفع عند إزالة الدلاء للتنظيف',
      'تأكد من إحكام حشية 5 مم عند إعادة التجميع',
      'جدوِل فحوصات دورية لتراكم الشحوم في كلا الدلوين',
    ],
    donts: [
      'لا تُحمّل أياً من الدلاء بالنفايات الصلبة فوق السعة التصميمية',
      'لا تستخدم مواد كيميائية غير متوافقة قد تضر بالـ PVC/UPVC',
      'لا تهمل الصيانة المنتظمة لنظام الدلو المزدوج',
      'لا تعدّل التصميم بدون موافقة هندسية',
      'لا تتخلص من المواد الخطرة عبر مصايد الشحوم',
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

  renderImage: '/images/fabrications/typec_main.png',
  diagramImage: '/images/fabrications/typec_diagram.png',

  shortDescription: 'Type C Grease Trap featuring three removable PVC perforated buckets with 15 holes in five rows. Notable for its large size (1980mm length) and internal baffle.',
  shortDescriptionAr: 'مصيدة شحوم النوع C كبيرة الحجم بطول 1980 مم مع جدار حاجز داخلي لفصل الشحوم المحسن.',

  overview: `Type C is a Grease Trap design notable for its large size (1980mm overall length) and inclusion of a BAFFLE. It features three removable PVC perforated buckets with 15 holes in five rows for enhanced solid waste filtration.

The CROWN PLASTIC Fabrication and Accessories catalogue presents custom-built PVC/UPVC fabricated products, including various designs of Grease Traps and Interceptors, as well as duct accessories and other miscellaneous fittings.

**Type C Key Specifications:**
• Material: PVC/UPVC, Neoprene (for gasket)
• Overall Length: 1980mm (large format)
• Baffle: Internal baffle wall for enhanced separation
• Bucket Configuration: Three removable PVC perforated buckets
• Bucket Perforations: 15 holes in five rows
• Cover: 600×450mm PVC 8mm TOP COVER
• Gasket: 5mm THICK NEOPRENE GASKET
• Duty/Class: As per Dubai Municipality Approved Drawing
• Standards: ISO 9001:2015, ISO 14001-2015, OHSAS 18001`,

  features: [
    'Three removable PVC perforated buckets',
    'Buckets feature 15 holes in five rows',
    'Includes a baffle wall for enhanced grease separation',
    '5mm THICK NEOPRENE GASKET for reliable sealing',
    '600×450mm PVC 8mm TOP COVER',
    'Large overall length of 1980mm for high capacity',
    'Custom built product based on waste water and site condition',
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
    { label: 'PVC/UPVC Fabrications Catalogue (PDF)', href: '/pdfs/UPVC%20FABRICATION%20AND%20ACCESSORIES.pdf' },
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
  dosDontsAr: {
    dos: [
      'ركّب وفقاً لرسومات بلدية دبي المعتمدة',
      'نظّف وصُن الدلو المثقب والجدار الحاجز بانتظام',
      'تأكد من إحكام حشية النيوبرين عند إعادة التجميع',
      'وفّر مساحة كافية للطول الإجمالي 1980 مم عند التركيب',
      'جدوِل فحوصات دورية لتراكم الشحوم خلف الجدار الحاجز',
    ],
    donts: [
      'لا تُحمّل النفايات الصلبة فوق السعة التصميمية',
      'لا تستخدم مواد كيميائية غير متوافقة قد تضر بالـ PVC/UPVC أو الحاجز',
      'لا تهمل تنظيف منطقة الجدار الحاجز',
      'لا تعدّل تصميم الحاجز بدون موافقة هندسية',
      'لا تتخلص من المواد الخطرة عبر مصايد الشحوم',
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

  renderImage: '/images/fabrications/typed_main.png',
  diagramImage: '/images/fabrications/typed_diagram.png',

  shortDescription: 'Type D Grease Trap featuring a single 360 x 360 x 300 deep removable PVC perforated bucket with 12mm holes in 3 rows each. Uses a 600x450mm PVC 8mm top cover.',
  shortDescriptionAr: 'مصيدة شحوم النوع D بغطاء GRP محكم 670×670×15 مم مثبت بـ 24 صامولة جناحية.',

  overview: `Type D is a Grease Trap design utilizing a 600x450mm PVC 8mm top cover secured by WING NUTS. It features a single compact 360 x 360 x 300 deep removable PVC perforated bucket with 12mm holes in 3 rows each.

The CROWN PLASTIC Fabrication and Accessories catalogue presents custom-built PVC/UPVC fabricated products, including various designs of Grease Traps and Interceptors, as well as duct accessories and other miscellaneous fittings.

**Type D Key Specifications:**
• Material: PVC/UPVC, GRP (for cover)
• Jointing Method: Wing nut/bolt securing
• Cover: 600x450mm PVC 8mm top cover
• Securing: WING NUTS (24 NOS)
• Air Vent: 055 (2") AIR VENT
• Bucket: Single removable PVC perforated, 360x360x300 deep
• Bucket Perforations: 12mm holes in 3 rows each
• Duty/Class: As per Dubai Municipality Approved Drawing
• Standards: ISO 9001:2015, ISO 14001-2015, OHSAS 18001`,

  features: [
    'Single 360 x 360 x 300 deep removable PVC perforated bucket',
    'Bucket features 12mm holes in 3 rows each',
    'Uses a 600x450mm PVC 8mm top cover',
    'Cover secured by 055 (2") AIR VENT WING NUTS (24 NOS)',
    'Compact design suitable for space-constrained installations',
    'Custom built product based on waste water and site condition',
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
    { label: 'PVC/UPVC Fabrications Catalogue (PDF)', href: '/pdfs/UPVC%20FABRICATION%20AND%20ACCESSORIES.pdf' },
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
  dosDontsAr: {
    dos: [
      'ركّب وفقاً لرسومات بلدية دبي المعتمدة',
      'نظّف وصُن الدلو المثقب المدمج بانتظام',
      'ثبّت جميع الصامولات الجناحية الـ 24 بشكل صحيح عند إعادة التجميع',
      'تأكد من عدم انسداد فتحة التهوية 2 بوصة',
      'جدوِل فحوصات دورية لتراكم الشحوم',
    ],
    donts: [
      'لا تُحمّل الدلو المدمج فوق السعة التصميمية',
      'لا تستخدم مواد كيميائية غير متوافقة قد تضر بالـ PVC/UPVC',
      'لا تُفرط في شد الصامولات الجناحية على غطاء GRP',
      'لا تعدّل التصميم بدون موافقة هندسية',
      'لا تتخلص من المواد الخطرة عبر مصايد الشحوم',
    ],
  },
};
