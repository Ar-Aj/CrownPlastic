/**
 * PP-R Pipes - Product Detail Configurations
 * Phase 2.9 — 4 sub-products for hot & cold potable water
 * SEO: UAE/GCC/Dubai MEP plumbing keywords injected.
 */

import { type ProductDetailConfig } from '@/types/productDetail';

// ═══════════════════════════════════════════════════════════════════════════════
// 1) SDR11 / PN10
// ═══════════════════════════════════════════════════════════════════════════════

export const pprPipesSdr11Pn10: ProductDetailConfig = {
  slug: "ppr-pipes-sdr11-pn10",
  categorySlug: 'ppr-pipes',
  title: "PP-R Pipes — SDR11 / PN10 (DIN 8077/78)",
  titleAr: "أنابيب PP-R — SDR11 / PN10 (DIN 8077/78)",
  shortDescription: "PP-R pipes SDR11/PN10 — 10 bar cold water, 20–110 mm (DIN 8077/78).",
  shortDescriptionAr: "أنابيب PP-R وفق SDR11/PN10 — 10 بار مياه باردة، 20–110 مم (DIN 8077/78).",
  overview: "Crown Plastic Pipes / Fittings, a leading PP-R pipe manufacturer in the UAE, produces premium SDR11/PN10 polypropylene pipes to DIN 8077/78 standards. Rated at 10 bar for cold water distribution, these pipes feature thermo-fusion welding for 100% leak-proof connections. Available in 20–110 mm sizes, they are the preferred choice for residential and commercial plumbing across the UAE. Manufactured at our ISO 9001:2015 certified Umm Al Quwain facility with a guaranteed 50-year service life.",
  overviewAr: "تصنّع كراون للأنابيب والوصلات البلاستيكية، الشركة الرائدة في تصنيع أنابيب PP-R في الإمارات، أنابيب بولي بروبيلين SDR11/PN10 فاخرة وفق معايير DIN 8077/78. بتصنيف 10 بار لتوزيع المياه الباردة، تتميز بلحام حراري لوصلات مانعة للتسرب بنسبة 100%. متوفرة بمقاسات 20–110 مم، الخيار المفضل للسباكة السكنية والتجارية في دبي وأبوظبي والخليج. مصنعة في منشأتنا المعتمدة ISO 9001:2015 بأم القيوين بعمر خدمة مضمون 50 عاماً.",
  features: ["Guaranteed service life of 50 years","High impact strength and flexibility","Resistant to corrosion compared to metal products","Hygienic, non-toxic, and food-grade properties","Low thermal conductivity (0.24 W/mk)","Noise reduction through damped vibrations and sound absorption"],
  featuresAr: [
    'عمر خدمة مضمون 50 عاماً',
    'قوة صدم عالية ومرونة',
    'مقاومة للتآكل مقارنة بالمنتجات المعدنية',
    'خصائص صحية وغير سامة وغذائية الدرجة',
    'موصلية حرارية منخفضة (0.24 W/mk)',
    'تقليل الضوضاء من خلال تخميد الاهتزازات وامتصاص الصوت',
  ],
  applications: ["Hot & Cold potable water supply in residential and commercial buildings","HVAC and compressed air systems","Pipe networks for swimming pool facilities and rainwater utilization","Industrial transport of aggressive fluids, including acidic and alkaline chemicals"],
  applicationsAr: [
    'إمداد المياه الساخنة والباردة الصالحة للشرب في المباني السكنية والتجارية',
    'أنظمة التدفئة والتكييف والهواء المضغوط',
    'شبكات أنابيب حمامات السباحة واستخدام مياه الأمطار',
    'نقل السوائل العدوانية صناعياً بما في ذلك الكيماويات الحمضية والقلوية',
  ],
  pipesTables: [
    {
      id: "sdr11-pn10-table",
      title: "SDR11 / PN10",
      columns: [
      { key: "part", label: "PART" },
      { key: "dimensions", label: "DIMENSIONS" },
      { key: "wall_thickness", label: "WALL THICKNESS" },
      { key: "inner_diameter", label: "INNER DIAMETER" },
      { key: "packing_unit", label: "PACKING UNIT" },
      { key: "kg_mtr", label: "Kg/Mtr." }
      ],
      rows: [
      { "part": "CPPR1020", "dimensions": "20", "wall_thickness": "1.9", "inner_diameter": "16.0", "packing_unit": "100 Mtrs", "kg_mtr": "0.107" },
      { "part": "CPPR1025", "dimensions": "25", "wall_thickness": "2.3", "inner_diameter": "20.4", "packing_unit": "100 Mtrs", "kg_mtr": "0.164" },
      { "part": "CPPR1032", "dimensions": "32", "wall_thickness": "2.9", "inner_diameter": "26.2", "packing_unit": "40 Mtrs", "kg_mtr": "0.261" },
      { "part": "CPPR1040", "dimensions": "40", "wall_thickness": "3.7", "inner_diameter": "32.6", "packing_unit": "40 Mtrs", "kg_mtr": "0.412" },
      { "part": "CPPR1050", "dimensions": "50", "wall_thickness": "4.6", "inner_diameter": "40.8", "packing_unit": "20 Mtrs", "kg_mtr": "0.638" },
      { "part": "CPPR1063", "dimensions": "63", "wall_thickness": "5.8", "inner_diameter": "51.4", "packing_unit": "20 Mtrs", "kg_mtr": "1.010" },
      { "part": "CPPR1075", "dimensions": "75", "wall_thickness": "6.8", "inner_diameter": "61.4", "packing_unit": "16 Mtrs", "kg_mtr": "1.410" },
      { "part": "CPPR1090", "dimensions": "90", "wall_thickness": "8.2", "inner_diameter": "73.6", "packing_unit": "12 Mtrs", "kg_mtr": "2.030" },
      { "part": "CPPR10110", "dimensions": "110", "wall_thickness": "10.0", "inner_diameter": "90.0", "packing_unit": "8 Mtrs", "kg_mtr": "3.010" }
      ],
    }
  ],
  fittings: [],
  downloads: [
    { label: 'PP-R Pipes Catalogue (PDF)', href: '/pdfs/PPR%20PIPES%20CATALOGUE.pdf' },
  ],
  dosDonts: {
    dos: ["Ensure use of ISO 9001:2015 certified quality management systems for installation oversight","Utilize thermo-fusion welding for secure, leak-free joints","Apply in high-pressure environments up to PN25 where specified","Check compatibility for agricultural and horticultural pipe networks"],
    donts: ["Do not exceed the designated pressure ratings (PN) for specific SDR categories","Avoid using materials not meeting DIN 8077/78 standards for potable water","Do not ignore the impact of high temperatures on linear expansion","Avoid installation without verifying specific GCC climate condition suitability"],
  },
  dosDontsAr: {
    dos: [
      'تأكد من استخدام أنظمة إدارة الجودة المعتمدة ISO 9001:2015 لمراقبة التركيب',
      'استخدم اللحام الحراري لوصلات آمنة ومانعة للتسرب',
      'طبّق في بيئات الضغط العالي حتى PN25 حيث محدد',
      'تحقق من التوافق لشبكات الأنابيب الزراعية والبستانية',
    ],
    donts: [
      'لا تتجاوز تصنيفات الضغط المحددة (PN) لفئات SDR المحددة',
      'تجنب استخدام مواد لا تلبي معايير DIN 8077/78 للمياه الصالحة للشرب',
      'لا تتجاهل تأثير درجات الحرارة العالية على التمدد الخطي',
      'تجنب التركيب دون التحقق من ملاءمة ظروف مناخ الخليج المحددة',
    ],
  },
};


// ═══════════════════════════════════════════════════════════════════════════════
// 2) SDR7.4 / PN16
// ═══════════════════════════════════════════════════════════════════════════════

export const pprPipesSdr74Pn16: ProductDetailConfig = {
  slug: "ppr-pipes-sdr7-4-pn16",
  categorySlug: 'ppr-pipes',
  title: "PP-R Pipes — SDR7.4 / PN16 (DIN 8077/78)",
  titleAr: "أنابيب PP-R — SDR7.4 / PN16 (DIN 8077/78)",
  shortDescription: "PP-R pipes SDR7.4/PN16 — 16 bar hot & cold water, 20–110 mm (DIN 8077/78).",
  shortDescriptionAr: "أنابيب PP-R وفق SDR7.4/PN16 — 16 بار مياه ساخنة وباردة، 20–110 مم (DIN 8077/78).",
  overview: "Crown Plastic Pipes / Fittings manufactures PP-R SDR7.4/PN16 pipes to DIN 8077/78 standards, rated at 16 bar for both hot and cold potable water systems. Engineered for UAE's demanding MEP infrastructure, these pipes feature enhanced wall thickness for high-temperature applications in HVAC and plumbing across the UAE. Available in 20–110 mm with thermo-fusion welding for permanent, leak-free joints. Produced at our Umm Al Quwain facility with ISO 9001:2015 certification and a 50-year service life guarantee.",
  overviewAr: "تصنّع كراون للأنابيب والوصلات البلاستيكية أنابيب PP-R وفق SDR7.4/PN16 بمعايير DIN 8077/78، بتصنيف 16 بار لأنظمة المياه الساخنة والباردة. مصممة للبنية التحتية MEP المتطلبة في الإمارات، بسمك جدار محسّن لتطبيقات درجات الحرارة العالية في التدفئة والتكييف والسباكة في دبي وأبوظبي والخليج. متوفرة بمقاسات 20–110 مم بلحام حراري لوصلات دائمة مانعة للتسرب.",
  features: ["Guaranteed service life of 50 years","High impact strength and flexibility","Resistant to corrosion compared to metal products","Hygienic, non-toxic, and food-grade properties","Low thermal conductivity (0.24 W/mk)","Noise reduction through damped vibrations and sound absorption"],
  featuresAr: [
    'عمر خدمة مضمون 50 عاماً',
    'قوة صدم عالية ومرونة',
    'مقاومة للتآكل مقارنة بالمنتجات المعدنية',
    'خصائص صحية وغير سامة وغذائية الدرجة',
    'موصلية حرارية منخفضة (0.24 W/mk)',
    'تقليل الضوضاء من خلال تخميد الاهتزازات وامتصاص الصوت',
  ],
  applications: ["Hot & Cold potable water supply in residential and commercial buildings","HVAC and compressed air systems","Pipe networks for swimming pool facilities and rainwater utilization","Industrial transport of aggressive fluids, including acidic and alkaline chemicals"],
  applicationsAr: [
    'إمداد المياه الساخنة والباردة الصالحة للشرب في المباني السكنية والتجارية',
    'أنظمة التدفئة والتكييف والهواء المضغوط',
    'شبكات أنابيب حمامات السباحة واستخدام مياه الأمطار',
    'نقل السوائل العدوانية صناعياً بما في ذلك الكيماويات الحمضية والقلوية',
  ],
  pipesTables: [
    {
      id: "sdr7-4-pn16-table",
      title: "SDR7.4 / PN16",
      columns: [
      { key: "part", label: "PART" },
      { key: "dimensions", label: "DIMENSIONS" },
      { key: "wall_thickness", label: "WALL THICKNESS" },
      { key: "inner_diameter", label: "INNER DIAMETER" },
      { key: "packing_unit", label: "PACKING UNIT" },
      { key: "kg_mtr", label: "Kg/Mtr." }
      ],
      rows: [
      { "part": "CPPR1620", "dimensions": "20", "wall_thickness": "2.8", "inner_diameter": "14.4", "packing_unit": "100 Mtrs", "kg_mtr": "0.147" },
      { "part": "CPPR1625", "dimensions": "25", "wall_thickness": "3.5", "inner_diameter": "18", "packing_unit": "100 Mtrs", "kg_mtr": "0.229" },
      { "part": "CPPR1632", "dimensions": "32", "wall_thickness": "4.4", "inner_diameter": "23.2", "packing_unit": "40 Mtrs", "kg_mtr": "0.370" },
      { "part": "CPPR1640", "dimensions": "40", "wall_thickness": "5.5", "inner_diameter": "29", "packing_unit": "40 Mtrs", "kg_mtr": "0.578" },
      { "part": "CPPR1650", "dimensions": "50", "wall_thickness": "6.9", "inner_diameter": "36.2", "packing_unit": "20 Mtrs", "kg_mtr": "0.906" },
      { "part": "CPPR1663", "dimensions": "63", "wall_thickness": "8.6", "inner_diameter": "45.8", "packing_unit": "20 Mtrs", "kg_mtr": "1.426" },
      { "part": "CPPR1675", "dimensions": "75", "wall_thickness": "10.3", "inner_diameter": "54.4", "packing_unit": "16 Mtrs", "kg_mtr": "2.031" },
      { "part": "CPPR1690", "dimensions": "90", "wall_thickness": "12.3", "inner_diameter": "65.4", "packing_unit": "12 Mtrs", "kg_mtr": "2.880" },
      { "part": "CPPR16110", "dimensions": "110", "wall_thickness": "15.1", "inner_diameter": "79.8", "packing_unit": "8 Mtrs", "kg_mtr": "4.295" }
      ],
    }
  ],
  fittings: [],
  downloads: [
    { label: 'PP-R Pipes Catalogue (PDF)', href: '/pdfs/PPR%20PIPES%20CATALOGUE.pdf' },
  ],
  dosDonts: {
    dos: ["Ensure use of ISO 9001:2015 certified quality management systems for installation oversight","Utilize thermo-fusion welding for secure, leak-free joints","Apply in high-pressure environments up to PN25 where specified","Check compatibility for agricultural and horticultural pipe networks"],
    donts: ["Do not exceed the designated pressure ratings (PN) for specific SDR categories","Avoid using materials not meeting DIN 8077/78 standards for potable water","Do not ignore the impact of high temperatures on linear expansion","Avoid installation without verifying specific GCC climate condition suitability"],
  },
  dosDontsAr: {
    dos: [
      'تأكد من استخدام أنظمة إدارة الجودة المعتمدة ISO 9001:2015 لمراقبة التركيب',
      'استخدم اللحام الحراري لوصلات آمنة ومانعة للتسرب',
      'طبّق في بيئات الضغط العالي حتى PN25 حيث محدد',
      'تحقق من التوافق لشبكات الأنابيب الزراعية والبستانية',
    ],
    donts: [
      'لا تتجاوز تصنيفات الضغط المحددة (PN) لفئات SDR المحددة',
      'تجنب استخدام مواد لا تلبي معايير DIN 8077/78 للمياه الصالحة للشرب',
      'لا تتجاهل تأثير درجات الحرارة العالية على التمدد الخطي',
      'تجنب التركيب دون التحقق من ملاءمة ظروف مناخ الخليج المحددة',
    ],
  },
};


// ═══════════════════════════════════════════════════════════════════════════════
// 3) SDR6 / PN20
// ═══════════════════════════════════════════════════════════════════════════════

export const pprPipesSdr6Pn20: ProductDetailConfig = {
  slug: "ppr-pipes-sdr6-pn20",
  categorySlug: 'ppr-pipes',
  title: "PP-R Pipes — SDR6 / PN20 (DIN 8077/78)",
  titleAr: "أنابيب PP-R — SDR6 / PN20 (DIN 8077/78)",
  shortDescription: "PP-R pipes SDR6/PN20 — 20 bar high-pressure hot & cold, 20–110 mm (DIN 8077/78).",
  shortDescriptionAr: "أنابيب PP-R وفق SDR6/PN20 — 20 بار ضغط عالي ساخن وبارد، 20–110 مم (DIN 8077/78).",
  overview: "Crown Plastic Pipes / Fittings manufactures PP-R SDR6/PN20 pipes to DIN 8077/78 standards, rated at 20 bar for high-pressure hot and cold water applications. These heavy-duty pipes are engineered for demanding MEP projects including HVAC systems, industrial facilities, and high-rise buildings across the UAE. Available in 20–110 mm with thermo-fusion welding. Produced at our Umm Al Quwain facility with ISO 9001:2015 certification and a 50-year service life guarantee.",
  overviewAr: "تصنّع كراون للأنابيب والوصلات البلاستيكية أنابيب PP-R وفق SDR6/PN20 بمعايير DIN 8077/78، بتصنيف 20 بار لتطبيقات المياه الساخنة والباردة عالية الضغط. أنابيب شاقة مصممة لمشاريع MEP المتطلبة بما في ذلك أنظمة التدفئة والتكييف والمنشآت الصناعية والأبراج في دبي وأبوظبي والخليج. متوفرة بمقاسات 20–110 مم.",
  features: ["Guaranteed service life of 50 years","High impact strength and flexibility","Resistant to corrosion compared to metal products","Hygienic, non-toxic, and food-grade properties","Low thermal conductivity (0.24 W/mk)","Noise reduction through damped vibrations and sound absorption"],
  featuresAr: [
    'عمر خدمة مضمون 50 عاماً',
    'قوة صدم عالية ومرونة',
    'مقاومة للتآكل مقارنة بالمنتجات المعدنية',
    'خصائص صحية وغير سامة وغذائية الدرجة',
    'موصلية حرارية منخفضة (0.24 W/mk)',
    'تقليل الضوضاء من خلال تخميد الاهتزازات وامتصاص الصوت',
  ],
  applications: ["Hot & Cold potable water supply in residential and commercial buildings","HVAC and compressed air systems","Pipe networks for swimming pool facilities and rainwater utilization","Industrial transport of aggressive fluids, including acidic and alkaline chemicals"],
  applicationsAr: [
    'إمداد المياه الساخنة والباردة الصالحة للشرب في المباني السكنية والتجارية',
    'أنظمة التدفئة والتكييف والهواء المضغوط',
    'شبكات أنابيب حمامات السباحة واستخدام مياه الأمطار',
    'نقل السوائل العدوانية صناعياً بما في ذلك الكيماويات الحمضية والقلوية',
  ],
  pipesTables: [
    {
      id: "sdr6-pn20-table",
      title: "SDR6 / PN20",
      columns: [
      { key: "part", label: "PART" },
      { key: "dimensions", label: "DIMENSIONS" },
      { key: "wall_thickness", label: "WALL THICKNESS" },
      { key: "inner_diameter", label: "INNER DIAMETER" },
      { key: "packing_unit", label: "PACKING UNIT" },
      { key: "kg_mtr", label: "Kg/Mtr." }
      ],
      rows: [
      { "part": "CPPR2020", "dimensions": "20", "wall_thickness": "3.4", "inner_diameter": "13.2", "packing_unit": "100 Mtrs", "kg_mtr": "0.172" },
      { "part": "CPPR2025", "dimensions": "25", "wall_thickness": "4.2", "inner_diameter": "16.6", "packing_unit": "100 Mtrs", "kg_mtr": "0.266" },
      { "part": "CPPR2032", "dimensions": "32", "wall_thickness": "5.4", "inner_diameter": "21.2", "packing_unit": "40 Mtrs", "kg_mtr": "0.432" },
      { "part": "CPPR2040", "dimensions": "40", "wall_thickness": "6.7", "inner_diameter": "26.6", "packing_unit": "40 Mtrs", "kg_mtr": "0.670" },
      { "part": "CPPR2050", "dimensions": "50", "wall_thickness": "8.3", "inner_diameter": "33.4", "packing_unit": "20 Mtrs", "kg_mtr": "1.040" },
      { "part": "CPPR2063", "dimensions": "63", "wall_thickness": "10.5", "inner_diameter": "42.0", "packing_unit": "20 Mtrs", "kg_mtr": "1.645" },
      { "part": "CPPR2075", "dimensions": "75", "wall_thickness": "12.5", "inner_diameter": "50.0", "packing_unit": "16 Mtrs", "kg_mtr": "2.340" },
      { "part": "CPPR2090", "dimensions": "90", "wall_thickness": "15.0", "inner_diameter": "60.0", "packing_unit": "12 Mtrs", "kg_mtr": "3.360" },
      { "part": "CPPR20110", "dimensions": "110", "wall_thickness": "18.3", "inner_diameter": "73.4", "packing_unit": "8 Mtrs", "kg_mtr": "5.008" }
      ],
    }
  ],
  fittings: [],
  downloads: [
    { label: 'PP-R Pipes Catalogue (PDF)', href: '/pdfs/PPR%20PIPES%20CATALOGUE.pdf' },
  ],
  dosDonts: {
    dos: ["Ensure use of ISO 9001:2015 certified quality management systems for installation oversight","Utilize thermo-fusion welding for secure, leak-free joints","Apply in high-pressure environments up to PN25 where specified","Check compatibility for agricultural and horticultural pipe networks"],
    donts: ["Do not exceed the designated pressure ratings (PN) for specific SDR categories","Avoid using materials not meeting DIN 8077/78 standards for potable water","Do not ignore the impact of high temperatures on linear expansion","Avoid installation without verifying specific GCC climate condition suitability"],
  },
  dosDontsAr: {
    dos: [
      'تأكد من استخدام أنظمة إدارة الجودة المعتمدة ISO 9001:2015 لمراقبة التركيب',
      'استخدم اللحام الحراري لوصلات آمنة ومانعة للتسرب',
      'طبّق في بيئات الضغط العالي حتى PN25 حيث محدد',
      'تحقق من التوافق لشبكات الأنابيب الزراعية والبستانية',
    ],
    donts: [
      'لا تتجاوز تصنيفات الضغط المحددة (PN) لفئات SDR المحددة',
      'تجنب استخدام مواد لا تلبي معايير DIN 8077/78 للمياه الصالحة للشرب',
      'لا تتجاهل تأثير درجات الحرارة العالية على التمدد الخطي',
      'تجنب التركيب دون التحقق من ملاءمة ظروف مناخ الخليج المحددة',
    ],
  },
};


// ═══════════════════════════════════════════════════════════════════════════════
// 4) SDR5 / PN25 (Note-only — refer to technical team)
// ═══════════════════════════════════════════════════════════════════════════════

export const pprPipesSdr5Pn25: ProductDetailConfig = {
  slug: "ppr-pipes-sdr5-pn25",
  categorySlug: 'ppr-pipes',
  title: "PP-R Pipes — SDR5 / PN25 (DIN 8077/78)",
  titleAr: "أنابيب PP-R — SDR5 / PN25 (DIN 8077/78)",
  shortDescription: "PP-R pipes SDR5/PN25 — 25 bar maximum pressure rating (DIN 8077/78).",
  shortDescriptionAr: "أنابيب PP-R وفق SDR5/PN25 — 25 بار تصنيف ضغط أقصى (DIN 8077/78).",
  overview: "Crown Plastic Pipes / Fittings manufactures PP-R SDR5/PN25 pipes to DIN 8077/78 standards, delivering the highest pressure rating in the PP-R range at 25 bar. Designed for the most demanding industrial and commercial high-pressure applications across the UAE and GCC, these pipes represent the ultimate solution for critical MEP infrastructure. Contact our technical team for detailed specifications and availability. Produced at our Umm Al Quwain facility with ISO 9001:2015 certification.",
  overviewAr: "تصنّع كراون للأنابيب والوصلات البلاستيكية أنابيب PP-R وفق SDR5/PN25 بمعايير DIN 8077/78، بأعلى تصنيف ضغط في نطاق PP-R عند 25 بار. مصممة لأكثر التطبيقات الصناعية والتجارية تطلباً في الإمارات والخليج. تواصل مع فريقنا الفني للمواصفات التفصيلية والتوفر. مصنعة في منشأتنا بأم القيوين بشهادة ISO 9001:2015.",
  features: ["Guaranteed service life of 50 years","High impact strength and flexibility","Resistant to corrosion compared to metal products","Hygienic, non-toxic, and food-grade properties","Low thermal conductivity (0.24 W/mk)","Noise reduction through damped vibrations and sound absorption"],
  featuresAr: [
    'عمر خدمة مضمون 50 عاماً',
    'قوة صدم عالية ومرونة',
    'مقاومة للتآكل مقارنة بالمنتجات المعدنية',
    'خصائص صحية وغير سامة وغذائية الدرجة',
    'موصلية حرارية منخفضة (0.24 W/mk)',
    'تقليل الضوضاء من خلال تخميد الاهتزازات وامتصاص الصوت',
  ],
  applications: ["Hot & Cold potable water supply in residential and commercial buildings","HVAC and compressed air systems","Pipe networks for swimming pool facilities and rainwater utilization","Industrial transport of aggressive fluids, including acidic and alkaline chemicals"],
  applicationsAr: [
    'إمداد المياه الساخنة والباردة الصالحة للشرب في المباني السكنية والتجارية',
    'أنظمة التدفئة والتكييف والهواء المضغوط',
    'شبكات أنابيب حمامات السباحة واستخدام مياه الأمطار',
    'نقل السوائل العدوانية صناعياً بما في ذلك الكيماويات الحمضية والقلوية',
  ],
  pipesTables: [
    {
      id: 'sdr5-pn25-table',
      title: "SDR5 / PN25",
      columns: [
        { key: "part", label: "PART" },
        { key: "dimensions", label: "DIMENSIONS" },
        { key: "wall_thickness", label: "WALL THICKNESS" },
        { key: "inner_diameter", label: "INNER DIAMETER" },
        { key: "water_content", label: "WATER CONTENT (l/mtr)" },
        { key: "packing_unit", label: "PACKING UNIT" },
        { key: "kg_mtr", label: "Kg/Mtr." },
      ],
      rows: [
        { "part": "CPPR2520", "dimensions": "20", "wall_thickness": "4.1", "inner_diameter": "11.8", "water_content": "0.111", "packing_unit": "100 Mtrs", "kg_mtr": "0.198" },
        { "part": "CPPR2525", "dimensions": "25", "wall_thickness": "5.1", "inner_diameter": "14.8", "water_content": "0.178", "packing_unit": "100 Mtrs", "kg_mtr": "0.307" },
        { "part": "CPPR2532", "dimensions": "32", "wall_thickness": "6.5", "inner_diameter": "19.0", "water_content": "0.291", "packing_unit": "40 Mtrs", "kg_mtr": "0.498" },
        { "part": "CPPR2540", "dimensions": "40", "wall_thickness": "8.1", "inner_diameter": "23.8", "water_content": "0.461", "packing_unit": "40 Mtrs", "kg_mtr": "0.775" },
        { "part": "CPPR2550", "dimensions": "50", "wall_thickness": "10.1", "inner_diameter": "29.8", "water_content": "0.703", "packing_unit": "20 Mtrs", "kg_mtr": "1.210" },
        { "part": "CPPR2563", "dimensions": "63", "wall_thickness": "12.7", "inner_diameter": "37.6", "water_content": "1.137", "packing_unit": "20 Mtrs", "kg_mtr": "1.910" },
        { "part": "CPPR2575", "dimensions": "75", "wall_thickness": "15.1", "inner_diameter": "44.8", "water_content": "1.619", "packing_unit": "16 Mtrs", "kg_mtr": "2.701" },
        { "part": "CPPR2590", "dimensions": "90", "wall_thickness": "18.1", "inner_diameter": "53.8", "water_content": "2.336", "packing_unit": "12 Mtrs", "kg_mtr": "3.880" },
        { "part": "CPPR25110", "dimensions": "110", "wall_thickness": "22.1", "inner_diameter": "65.8", "water_content": "2.742", "packing_unit": "8 Mtrs", "kg_mtr": "5.780" },
      ],
    }
  ],
  fittings: [],
  downloads: [
    { label: 'PP-R Pipes Catalogue (PDF)', href: '/pdfs/PPR%20PIPES%20CATALOGUE.pdf' },
  ],
  dosDonts: {
    dos: ["Ensure use of ISO 9001:2015 certified quality management systems for installation oversight","Utilize thermo-fusion welding for secure, leak-free joints","Apply in high-pressure environments up to PN25 where specified","Check compatibility for agricultural and horticultural pipe networks"],
    donts: ["Do not exceed the designated pressure ratings (PN) for specific SDR categories","Avoid using materials not meeting DIN 8077/78 standards for potable water","Do not ignore the impact of high temperatures on linear expansion","Avoid installation without verifying specific GCC climate condition suitability"],
  },
  dosDontsAr: {
    dos: [
      'تأكد من استخدام أنظمة إدارة الجودة المعتمدة ISO 9001:2015 لمراقبة التركيب',
      'استخدم اللحام الحراري لوصلات آمنة ومانعة للتسرب',
      'طبّق في بيئات الضغط العالي حتى PN25 حيث محدد',
      'تحقق من التوافق لشبكات الأنابيب الزراعية والبستانية',
    ],
    donts: [
      'لا تتجاوز تصنيفات الضغط المحددة (PN) لفئات SDR المحددة',
      'تجنب استخدام مواد لا تلبي معايير DIN 8077/78 للمياه الصالحة للشرب',
      'لا تتجاهل تأثير درجات الحرارة العالية على التمدد الخطي',
      'تجنب التركيب دون التحقق من ملاءمة ظروف مناخ الخليج المحددة',
    ],
  },
};
