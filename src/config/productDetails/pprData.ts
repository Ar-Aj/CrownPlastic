/**
 * PPR Pipes Product Detail Configurations
 * 
 * Source: pprSeriesData JSON (extracted from PPR PDF)
 * Three series: SDR11/PN10, SDR7.4/PN16, SDR6/PN20
 * 
 * Standard: DIN 8077/78
 */

import { type ProductDetailConfig } from '@/types/productDetail';

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED DATA (from pprSeriesData.globalNotes)
// ═══════════════════════════════════════════════════════════════════════════════

// Reference standards (kept for documentation)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _sharedStandards = [
  'ISO 9001 - 2015',
  'ISO 1183',
  'ISO 1133',
  'ISO 527-2/1',
  'ISO 527-2/50',
  'ISO 179',
  'ISO 2039-1',
  'ISO 868',
  'ISO 3146',
  'DIN 53612',
  'DIN 53752',
  'ISO 306/A50',
  'ISO 306/B50',
];

const sharedApplications = [
  'Hot & Cold potable water supply in residential and commercial buildings',
  'HVAC and compressed air system',
  'Pipe networks for rainwater utilization system',
  'Pipe networks for agricultural & horticultural use',
  'Pipe networks for swimming pool facilities',
  'Pipe networks for aggressive fluids (acidic, alkaline & corrosive chemicals etc.)',
];

const sharedFeatures = [
  'Very long life time with a guaranteed service life of 50 years',
  'High impact strength & flexibility',
  'Damage resistance',
  'Damped vibrations and sounds are absorbed resulting to noise reduction',
  'Light weight, easy to install and low labour cost of installations',
  'Resistant to corrosion as compared to metal products',
  'Environment-friendly as it takes less energy to manufacture PPR pipes and are recyclable compared to its metal counterparts',
  'Hygienic and non-toxic compared to metal or other plastic products',
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _sharedBenefits = [
  'Very long life time with a guaranteed service life of 50 years',
  'Cost effective pipeline networks',
  'Low labour cost of installations',
  'Environment-friendly as it takes less energy to manufacture PPR pipes and are recyclable compared to its metal counterparts',
  'Hygienic and non-toxic compared to metal or other plastic products',
];

// ═══════════════════════════════════════════════════════════════════════════════
// PPR PIPES SDR11 / PN 10
// ═══════════════════════════════════════════════════════════════════════════════

export const pprSdr11Pn10: ProductDetailConfig = {
  slug: 'ppr-sdr11-pn10',
  categorySlug: 'ppr',
  
  title: 'CROWN PPR PIPES – SDR11 / PN 10',
  titleAr: 'أنابيب كراون PPR – SDR11 / PN 10',
  
  shortDescription: 'CROWN PPR Pipe SDR11/PN10 is specified according to DIN 8077/78. It is suitable for various applications including hot and cold water supply, HVAC, and aggressive fluids.',
  shortDescriptionAr: 'أنابيب كراون PPR SDR11/PN10 مطابقة لمعيار DIN 8077/78. مناسبة لتطبيقات متعددة بما في ذلك إمداد المياه الساخنة والباردة.',
  
  overview: `Parameters of PPR Pipe SDR11/PN10 in accordance to DIN 8077/78.

CROWN PPR Pipe SDR11/PN10 is specified according to DIN 8077/78. It is suitable for various applications including hot and cold water supply, HVAC, and aggressive fluids.

**Key Specifications:**
• Material: PPR
• Pressure Class: SDR11 / PN 10
• Size Range: 20 to 110 (Dimensions in mm)
• Length Options: 8 Mtrs to 100 Mtrs (per packing unit)
• Standard: DIN 8077/78
• Colour: Available according to standards and custom colour`,
  overviewAr: `معايير أنابيب PPR SDR11/PN10 وفقاً لمعيار DIN 8077/78.

أنابيب كراون PPR SDR11/PN10 مطابقة لمعيار DIN 8077/78. مناسبة لتطبيقات متعددة بما في ذلك إمداد المياه الساخنة والباردة ونظام التدفئة والتهوية والتكييف والسوائل العدوانية.`,
  
  features: sharedFeatures,
  featuresAr: [
    'عمر خدمة طويل جداً مع ضمان 50 سنة',
    'قوة تحمل عالية ومرونة',
    'مقاومة للتلف',
    'امتصاص الاهتزازات والأصوات مما يؤدي إلى تقليل الضوضاء',
    'خفيف الوزن وسهل التركيب وتكلفة عمالة منخفضة',
    'مقاوم للتآكل مقارنة بالمنتجات المعدنية',
    'صديق للبيئة حيث يتطلب طاقة أقل للتصنيع وقابل لإعادة التدوير',
    'صحي وغير سام مقارنة بالمنتجات المعدنية أو البلاستيكية الأخرى',
  ],
  
  applications: sharedApplications,
  applicationsAr: [
    'إمداد مياه الشرب الساخنة والباردة في المباني السكنية والتجارية',
    'نظام التدفئة والتهوية والتكييف والهواء المضغوط',
    'شبكات الأنابيب لنظام استخدام مياه الأمطار',
    'شبكات الأنابيب للاستخدام الزراعي والبستاني',
    'شبكات الأنابيب لمرافق حمامات السباحة',
    'شبكات الأنابيب للسوائل العدوانية (الأحماض والقلويات والمواد الكيميائية المسببة للتآكل)',
  ],
  
  // ───────────────────────────────────────────────────────────────────────────
  // Pipes Section (populated from src/PPR PIPES.txt)
  // ───────────────────────────────────────────────────────────────────────────
  pipesTables: [
    {
      id: 'ppr-sdr11-pn10-pipes',
      title: 'Parameters of PPR Pipe SDR11/PN10 in accordance to DIN 8077/78',
      columns: [
        { key: 'dimensions', label: 'DIMENSIONS' },
        { key: 'wall_thickness', label: 'WALL THICKNESS' },
        { key: 'inner_diameter', label: 'INNER DIAMETER' },
        { key: 'packing_unit', label: 'PACKING UNIT' },
        { key: 'kg_mtr', label: 'Kg/Mtr.' },
      ],
      rows: [
        { dimensions: '20', wall_thickness: '1.9', inner_diameter: '16.0', packing_unit: '100 Mtrs', kg_mtr: '0.107' },
        { dimensions: '25', wall_thickness: '2.3', inner_diameter: '20.4', packing_unit: '100 Mtrs', kg_mtr: '0.164' },
        { dimensions: '32', wall_thickness: '2.9', inner_diameter: '26.2', packing_unit: '40 Mtrs', kg_mtr: '0.261' },
        { dimensions: '40', wall_thickness: '3.7', inner_diameter: '32.6', packing_unit: '40 Mtrs', kg_mtr: '0.412' },
        { dimensions: '50', wall_thickness: '4.6', inner_diameter: '40.8', packing_unit: '20 Mtrs', kg_mtr: '0.638' },
        { dimensions: '63', wall_thickness: '5.8', inner_diameter: '51.4', packing_unit: '20 Mtrs', kg_mtr: '1.010' },
        { dimensions: '75', wall_thickness: '6.8', inner_diameter: '61.4', packing_unit: '16 Mtrs', kg_mtr: '1.410' },
        { dimensions: '90', wall_thickness: '8.2', inner_diameter: '73.6', packing_unit: '12 Mtrs', kg_mtr: '2.030' },
        { dimensions: '110', wall_thickness: '10.0', inner_diameter: '90.0', packing_unit: '8 Mtrs', kg_mtr: '3.010' },
      ],
    },
  ],
  
  // ───────────────────────────────────────────────────────────────────────────
  // Fittings Section (placeholder - to be populated from PPR fittings JSON later)
  // ───────────────────────────────────────────────────────────────────────────
  fittings: [],
  
  downloads: [
    { label: 'PPR Pipes Catalogue (PDF)', href: '/pdfs/PPR-PIPES-CATALOGUE.pdf' },
  ],
  
  dosDonts: {
    dos: [
      'Use heat fusion welding for joining PPR pipes and fittings',
      'Ensure correct fusion temperature (typically 260°C for PPR)',
      'Allow adequate cooling time before pressure testing',
      'Support pipes at recommended intervals',
      'Store pipes away from direct sunlight and heat sources',
    ],
    donts: [
      'Do not use solvent cement – PPR requires heat fusion',
      'Do not expose to temperatures above the rated limit',
      'Do not use incompatible fittings from other material systems',
      'Do not overtighten threaded connections',
      'Do not use damaged or deformed pipes',
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// PPR PIPES SDR7.4 / PN 16
// ═══════════════════════════════════════════════════════════════════════════════

export const pprSdr7_4Pn16: ProductDetailConfig = {
  slug: 'ppr-sdr7-4-pn16',
  categorySlug: 'ppr',
  
  title: 'CROWN PPR PIPES – SDR7.4 / PN 16',
  titleAr: 'أنابيب كراون PPR – SDR7.4 / PN 16',
  
  shortDescription: 'CROWN PPR Pipe SDR7.4/PN16 is specified according to DIN 8077/78. It is a higher pressure class suitable for a wide range of applications including potable water and aggressive fluids.',
  shortDescriptionAr: 'أنابيب كراون PPR SDR7.4/PN16 مطابقة لمعيار DIN 8077/78. فئة ضغط أعلى مناسبة لمجموعة واسعة من التطبيقات.',
  
  overview: `Parameters of PPR Pipe SDR7.4/PN16 in accordance to DIN 8077/78.

CROWN PPR Pipe SDR7.4/PN16 is specified according to DIN 8077/78. It is a higher pressure class suitable for a wide range of applications including potable water and aggressive fluids.

**Key Specifications:**
• Material: PPR
• Pressure Class: SDR7.4 / PN 16
• Size Range: 20 to 110 (Dimensions in mm)
• Length Options: 8 Mtrs to 100 Mtrs (per packing unit)
• Standard: DIN 8077/78
• Colour: Available according to standards and custom colour`,
  overviewAr: `معايير أنابيب PPR SDR7.4/PN16 وفقاً لمعيار DIN 8077/78.

أنابيب كراون PPR SDR7.4/PN16 مطابقة لمعيار DIN 8077/78. فئة ضغط أعلى مناسبة لمجموعة واسعة من التطبيقات بما في ذلك مياه الشرب والسوائل العدوانية.`,
  
  features: sharedFeatures,
  featuresAr: [
    'عمر خدمة طويل جداً مع ضمان 50 سنة',
    'قوة تحمل عالية ومرونة',
    'مقاومة للتلف',
    'امتصاص الاهتزازات والأصوات مما يؤدي إلى تقليل الضوضاء',
    'خفيف الوزن وسهل التركيب وتكلفة عمالة منخفضة',
    'مقاوم للتآكل مقارنة بالمنتجات المعدنية',
    'صديق للبيئة حيث يتطلب طاقة أقل للتصنيع وقابل لإعادة التدوير',
    'صحي وغير سام مقارنة بالمنتجات المعدنية أو البلاستيكية الأخرى',
  ],
  
  applications: sharedApplications,
  applicationsAr: [
    'إمداد مياه الشرب الساخنة والباردة في المباني السكنية والتجارية',
    'نظام التدفئة والتهوية والتكييف والهواء المضغوط',
    'شبكات الأنابيب لنظام استخدام مياه الأمطار',
    'شبكات الأنابيب للاستخدام الزراعي والبستاني',
    'شبكات الأنابيب لمرافق حمامات السباحة',
    'شبكات الأنابيب للسوائل العدوانية (الأحماض والقلويات والمواد الكيميائية المسببة للتآكل)',
  ],
  
  // ───────────────────────────────────────────────────────────────────────────
  // Pipes Section (populated from src/PPR PIPES.txt)
  // ───────────────────────────────────────────────────────────────────────────
  pipesTables: [
    {
      id: 'ppr-sdr7-4-pn16-pipes',
      title: 'Parameters of PPR Pipe SDR7.4/PN16 in accordance to DIN 8077/78',
      columns: [
        { key: 'dimensions', label: 'DIMENSIONS' },
        { key: 'wall_thickness', label: 'WALL THICKNESS' },
        { key: 'inner_diameter', label: 'INNER DIAMETER' },
        { key: 'packing_unit', label: 'PACKING UNIT' },
        { key: 'kg_mtr', label: 'Kg/Mtr.' },
      ],
      rows: [
        { dimensions: '20', wall_thickness: '2.8', inner_diameter: '14.4', packing_unit: '100 Mtrs', kg_mtr: '0.147' },
        { dimensions: '25', wall_thickness: '3.5', inner_diameter: '18', packing_unit: '100 Mtrs', kg_mtr: '0.229' },
        { dimensions: '32', wall_thickness: '4.4', inner_diameter: '23.2', packing_unit: '40 Mtrs', kg_mtr: '0.370' },
        { dimensions: '40', wall_thickness: '5.5', inner_diameter: '29', packing_unit: '40 Mtrs', kg_mtr: '0.578' },
        { dimensions: '50', wall_thickness: '6.9', inner_diameter: '36.2', packing_unit: '20 Mtrs', kg_mtr: '0.906' },
        { dimensions: '63', wall_thickness: '8.6', inner_diameter: '45.8', packing_unit: '20 Mtrs', kg_mtr: '1.426' },
        { dimensions: '75', wall_thickness: '10.3', inner_diameter: '54.4', packing_unit: '16 Mtrs', kg_mtr: '2.031' },
        { dimensions: '90', wall_thickness: '12.3', inner_diameter: '65.4', packing_unit: '12 Mtrs', kg_mtr: '2.880' },
        { dimensions: '110', wall_thickness: '15.1', inner_diameter: '79.8', packing_unit: '8 Mtrs', kg_mtr: '4.295' },
      ],
    },
  ],
  
  // ───────────────────────────────────────────────────────────────────────────
  // Fittings Section (placeholder - to be populated from PPR fittings JSON later)
  // ───────────────────────────────────────────────────────────────────────────
  fittings: [],
  
  downloads: [
    { label: 'PPR Pipes Catalogue (PDF)', href: '/pdfs/PPR-PIPES-CATALOGUE.pdf' },
  ],
  
  dosDonts: {
    dos: [
      'Use heat fusion welding for joining PPR pipes and fittings',
      'Ensure correct fusion temperature (typically 260°C for PPR)',
      'Allow adequate cooling time before pressure testing',
      'Support pipes at recommended intervals',
      'Store pipes away from direct sunlight and heat sources',
    ],
    donts: [
      'Do not use solvent cement – PPR requires heat fusion',
      'Do not expose to temperatures above the rated limit',
      'Do not use incompatible fittings from other material systems',
      'Do not overtighten threaded connections',
      'Do not use damaged or deformed pipes',
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// PPR PIPES SDR6 / PN 20
// ═══════════════════════════════════════════════════════════════════════════════

export const pprSdr6Pn20: ProductDetailConfig = {
  slug: 'ppr-sdr6-pn20',
  categorySlug: 'ppr',
  
  title: 'CROWN PPR PIPES – SDR6 / PN 20',
  titleAr: 'أنابيب كراون PPR – SDR6 / PN 20',
  
  shortDescription: 'CROWN PPR Pipe SDR6/PN20 is specified according to DIN 8077/78. This is the highest pressure class presented, suitable for demanding applications including hot and cold water supply and aggressive fluids.',
  shortDescriptionAr: 'أنابيب كراون PPR SDR6/PN20 مطابقة لمعيار DIN 8077/78. هذه أعلى فئة ضغط مناسبة للتطبيقات المتطلبة.',
  
  overview: `Parameters of PPR Pipe SDR6/PN20 in accordance to DIN 8077/78.

CROWN PPR Pipe SDR6/PN20 is specified according to DIN 8077/78. This is the highest pressure class presented, suitable for demanding applications including hot and cold water supply and aggressive fluids.

**Key Specifications:**
• Material: PPR
• Pressure Class: SDR6 / PN 20
• Size Range: 20 to 110 (Dimensions in mm)
• Length Options: 8 Mtrs to 100 Mtrs (per packing unit)
• Standard: DIN 8077/78
• Colour: Available according to standards and custom colour`,
  overviewAr: `معايير أنابيب PPR SDR6/PN20 وفقاً لمعيار DIN 8077/78.

أنابيب كراون PPR SDR6/PN20 مطابقة لمعيار DIN 8077/78. هذه أعلى فئة ضغط مقدمة، مناسبة للتطبيقات المتطلبة بما في ذلك إمداد المياه الساخنة والباردة والسوائل العدوانية.`,
  
  features: sharedFeatures,
  featuresAr: [
    'عمر خدمة طويل جداً مع ضمان 50 سنة',
    'قوة تحمل عالية ومرونة',
    'مقاومة للتلف',
    'امتصاص الاهتزازات والأصوات مما يؤدي إلى تقليل الضوضاء',
    'خفيف الوزن وسهل التركيب وتكلفة عمالة منخفضة',
    'مقاوم للتآكل مقارنة بالمنتجات المعدنية',
    'صديق للبيئة حيث يتطلب طاقة أقل للتصنيع وقابل لإعادة التدوير',
    'صحي وغير سام مقارنة بالمنتجات المعدنية أو البلاستيكية الأخرى',
  ],
  
  applications: sharedApplications,
  applicationsAr: [
    'إمداد مياه الشرب الساخنة والباردة في المباني السكنية والتجارية',
    'نظام التدفئة والتهوية والتكييف والهواء المضغوط',
    'شبكات الأنابيب لنظام استخدام مياه الأمطار',
    'شبكات الأنابيب للاستخدام الزراعي والبستاني',
    'شبكات الأنابيب لمرافق حمامات السباحة',
    'شبكات الأنابيب للسوائل العدوانية (الأحماض والقلويات والمواد الكيميائية المسببة للتآكل)',
  ],
  
  // ───────────────────────────────────────────────────────────────────────────
  // Pipes Section (populated from src/PPR PIPES.txt)
  // ───────────────────────────────────────────────────────────────────────────
  pipesTables: [
    {
      id: 'ppr-sdr6-pn20-pipes',
      title: 'Parameters of PPR Pipe SDR6/PN20 in accordance to DIN 8077/78',
      columns: [
        { key: 'dimensions', label: 'DIMENSIONS' },
        { key: 'wall_thickness', label: 'WALL THICKNESS' },
        { key: 'inner_diameter', label: 'INNER DIAMETER' },
        { key: 'packing_unit', label: 'PACKING UNIT' },
        { key: 'kg_mtr', label: 'Kg/Mtr.' },
      ],
      rows: [
        { dimensions: '20', wall_thickness: '3.4', inner_diameter: '13.2', packing_unit: '100 Mtrs', kg_mtr: '0.172' },
        { dimensions: '25', wall_thickness: '4.2', inner_diameter: '16.6', packing_unit: '100 Mtrs', kg_mtr: '0.266' },
        { dimensions: '32', wall_thickness: '5.4', inner_diameter: '21.2', packing_unit: '40 Mtrs', kg_mtr: '0.432' },
        { dimensions: '40', wall_thickness: '6.7', inner_diameter: '26.6', packing_unit: '40 Mtrs', kg_mtr: '0.670' },
        { dimensions: '50', wall_thickness: '8.3', inner_diameter: '33.4', packing_unit: '20 Mtrs', kg_mtr: '1.040' },
        { dimensions: '63', wall_thickness: '10.5', inner_diameter: '42.0', packing_unit: '20 Mtrs', kg_mtr: '1.645' },
        { dimensions: '75 90', wall_thickness: '12.5 15.0', inner_diameter: '50.0 60.0', packing_unit: '16 Mtrs 12 Mtrs', kg_mtr: '2.340 3.360' },
        { dimensions: '110', wall_thickness: '18.3', inner_diameter: '73.4', packing_unit: '8 Mtrs', kg_mtr: '5.008' },
      ],
    },
  ],
  
  // ───────────────────────────────────────────────────────────────────────────
  // Fittings Section (placeholder - to be populated from PPR fittings JSON later)
  // ───────────────────────────────────────────────────────────────────────────
  fittings: [],
  
  downloads: [
    { label: 'PPR Pipes Catalogue (PDF)', href: '/pdfs/PPR-PIPES-CATALOGUE.pdf' },
  ],
  
  dosDonts: {
    dos: [
      'Use heat fusion welding for joining PPR pipes and fittings',
      'Ensure correct fusion temperature (typically 260°C for PPR)',
      'Allow adequate cooling time before pressure testing',
      'Support pipes at recommended intervals',
      'Store pipes away from direct sunlight and heat sources',
    ],
    donts: [
      'Do not use solvent cement – PPR requires heat fusion',
      'Do not expose to temperatures above the rated limit',
      'Do not use incompatible fittings from other material systems',
      'Do not overtighten threaded connections',
      'Do not use damaged or deformed pipes',
    ],
  },
};
