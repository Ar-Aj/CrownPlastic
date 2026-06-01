/**
 * UPVC Drainage Fittings - Product Detail Configurations (NEW TAXONOMY)
 *
 * Maps to the NEW product catalog slugs from src/config/products.ts:
 *   1. upvc-drainage-fittings-bs-en-1329  (Above Ground: BS EN 1329-1:2014)
 *   2. upvc-drainage-fittings-bs-en-1401  (Underground: BS EN 1401)
 *   3. upvc-drainage-fittings-pushfit      (Pushfit — placeholder)
 *
 * Re-uses the fully typed Fitting[] arrays from drainageData.ts to avoid
 * duplicating 1200+ lines of specification tables.
 */

import { type ProductDetailConfig } from '@/types/productDetail';
import { bsEn1329Fittings, bsEn1401Fittings, pushfitFittings } from './drainageData';

// ═══════════════════════════════════════════════════════════════════════════════
// 1) BS EN 1329-1:2014 — Above Ground Drainage Fittings (24 fittings)
// ═══════════════════════════════════════════════════════════════════════════════

export const upvcDrainageFittingsBsEn1329: ProductDetailConfig = {
  slug: 'upvc-drainage-fittings-bs-en-1329',
  categorySlug: 'upvc-drainage-fittings',

  title: 'UPVC Drainage Fittings BS EN 1329-1:2014 (Supersedes BS 5255 & BS 4514)',
  titleAr: 'وصلات الصرف UPVC وفق BS EN 1329-1:2014 (تحل محل BS 5255 و BS 4514)',

  shortDescription: 'High-quality above-ground UPVC drainage fittings certified to BS EN 1329-1:2014 for soil and waste discharge systems.',
  shortDescriptionAr: 'وصلات صرف UPVC عالية الجودة فوق الأرض معتمدة وفق BS EN 1329-1:2014 لأنظمة تصريف التربة والنفايات.',

  overview: `Crown Plastic Pipes / Fittings, a leading UPVC fittings manufacturer in the UAE, produces a comprehensive range of drainage fittings conforming to BS EN 1329-1:2014, the modern European standard that supersedes both BS 5255 and BS 4514. Designed for above-ground soil and waste discharge systems, these fittings provide secure, leak-free connections across sizes from 1½″ to 8″. The range includes elbows, tees, reducers, access caps, floor drains, roof drains, and specialty items — all manufactured at our ISO 9001:2015 certified Umm Al Quwain facility with tight dimensional tolerances and smooth internal bores, trusted by contractors across Dubai, Abu Dhabi, and the wider GCC.`,
  overviewAr: `تصنّع كراون للأنابيب والوصلات البلاستيكية، الشركة الرائدة في تصنيع وصلات UPVC في الإمارات، مجموعة شاملة من وصلات الصرف المطابقة لمعيار BS EN 1329-1:2014، المعيار الأوروبي الحديث الذي يحل محل BS 5255 و BS 4514. مصممة لأنظمة تصريف التربة والنفايات فوق الأرض، توفر هذه الوصلات توصيلات آمنة ومانعة للتسرب بمقاسات من 1½″ إلى 8″. يشمل النطاق الأكواع والتيات والمخفضات وأغطية التنظيف ومصارف الأرضيات والأسطح — جميعها مصنعة في منشأتنا المعتمدة ISO 9001:2015 بأم القيوين بتفاوتات أبعاد دقيقة، موثوقة من مقاولي دبي وأبوظبي والخليج.`,

  features: [
    'Full compliance with BS EN 1329-1:2014 standards',
    'Supersedes older BS 5255 & BS 4514 specifications',
    'Wide size range from 1½″ to 8″ nominal diameters',
    'High chemical resistance characteristic of PVC-U',
    'Smooth internal bore prevents sediment build-up',
    'Tight dimensional tolerances for consistent jointing',
    'ISO 9001:2015 certified production at our UAE facility',
    'Complete range: elbows, tees, reducers, drains, access caps — trusted across the GCC',
  ],
  featuresAr: [
    'مطابقة كاملة لمعايير BS EN 1329-1:2014',
    'تحل محل مواصفات BS 5255 و BS 4514 القديمة',
    'نطاق مقاسات واسع من 1½″ إلى 8″ أقطار اسمية',
    'مقاومة كيميائية عالية مميزة لمادة PVC-U',
    'تجويف داخلي أملس يمنع تراكم الرواسب',
    'تفاوتات أبعاد دقيقة لوصل متسق',
    'إنتاج معتمد بمعيار ISO 9001:2015 في منشأتنا بالإمارات',
    'نطاق كامل: أكواع، تيات، مخفضات، مصارف، أغطية تنظيف — موثوقة في الخليج',
  ],

  applications: [
    'Above-ground gravity drainage systems across the UAE',
    'Soil and waste discharge for residential buildings in Dubai and Abu Dhabi',
    'Commercial plumbing and drainage infrastructure in the GCC',
    'Ventilation systems for sanitary pipework',
    'Hospital and hotel sanitary installations in the Middle East',
    'Rainwater downpipe connections suited to Gulf climate',
    'Kitchen and bathroom waste systems',
    'Balcony and terrace drainage for high-rise developments',
  ],
  applicationsAr: [
    'أنظمة الصرف بالجاذبية فوق الأرض في الإمارات',
    'تصريف التربة والنفايات للمباني السكنية في دبي وأبوظبي',
    'البنية التحتية للسباكة والصرف التجارية في الخليج',
    'أنظمة التهوية للأعمال الصحية',
    'التركيبات الصحية للمستشفيات والفنادق في الشرق الأوسط',
    'توصيلات ماسورة تصريف مياه الأمطار المناسبة لمناخ الخليج',
    'أنظمة صرف المطبخ والحمام',
    'صرف الشرفات والتراسات للأبراج السكنية',
  ],

  pipesTables: [],
  fittings: bsEn1329Fittings,

  downloads: [
    { label: 'BS EN 1329-1:2014 Drainage Fittings Catalogue (PDF)', href: '/pdfs/UPVC%20DRAINAGE%20FITTING%20BS%20EN%201329-1%202014%20-%20SUPERSEDED%20BS%205255%20%26%20BS%204514.pdf' },
  ],

  dosDonts: {
    dos: [
      'Ensure all joints are clean and dry before solvent welding',
      'Use compatible PVC-U solvent cement for secure connections',
      'Verify standard compliance for the intended application',
      'Follow expansion and support spacing guidelines',
    ],
    donts: [
      'Do not use these fittings for high-pressure water supply lines',
      'Do not mix with incompatible pipe materials or non-standard fittings',
      'Avoid excessive solvent cement application that weakens pipe walls',
      'Do not install where temperatures exceed UPVC recommended limits',
    ],
  },
  dosDontsAr: {
    dos: [
      'تأكد أن جميع الوصلات نظيفة وجافة قبل اللحام بالمذيب',
      'استخدم أسمنت مذيب PVC-U متوافق للتوصيلات الآمنة',
      'تحقق من مطابقة المعيار للتطبيق المقصود',
      'اتبع إرشادات التمدد وتباعد الدعامات',
    ],
    donts: [
      'لا تستخدم هذه الوصلات لخطوط إمداد المياه عالية الضغط',
      'لا تخلط مع مواد أنابيب غير متوافقة أو وصلات غير قياسية',
      'تجنب الإفراط في تطبيق أسمنت المذيب لأنه يضعف جدران الأنابيب',
      'لا تركّب في أماكن تتجاوز فيها الحرارة الحدود الموصى بها لـ UPVC',
    ],
  },
};


// ═══════════════════════════════════════════════════════════════════════════════
// 2) BS EN 1401 — Underground Drainage Fittings (8 fittings)
// ═══════════════════════════════════════════════════════════════════════════════

export const upvcDrainageFittingsBsEn1401: ProductDetailConfig = {
  slug: 'upvc-drainage-fittings-bs-en-1401',
  categorySlug: 'upvc-drainage-fittings',

  title: 'UPVC Drainage Fittings BS EN 1401 (Supersedes BS 4660 & BS 5481)',
  titleAr: 'وصلات الصرف UPVC وفق BS EN 1401 (تحل محل BS 4660 و BS 5481)',

  shortDescription: 'Heavy-duty underground UPVC drainage fittings certified to BS EN 1401 for sewerage and stormwater systems.',
  shortDescriptionAr: 'وصلات صرف UPVC للخدمة الشاقة تحت الأرض معتمدة وفق BS EN 1401 لأنظمة الصرف الصحي ومياه الأمطار.',

  overview: `Crown Plastic Pipes / Fittings, a trusted underground fittings supplier in the UAE, produces a complete range of UPVC drainage fittings conforming to BS EN 1401, the standard that supersedes BS 4660 and BS 5481. These heavy-duty fittings are specifically designed for non-pressure underground drainage and sewerage systems, providing reliable watertight connections in buried gravity-fed pipe networks. Manufactured at our Umm Al Quwain facility for exceptional durability and chemical resistance, they ensure long-term performance in the diverse soil and groundwater conditions found across Dubai, Abu Dhabi, and the wider GCC.`,
  overviewAr: `تنتج كراون للأنابيب والوصلات البلاستيكية، المورد الموثوق لوصلات الصرف تحت الأرض في الإمارات، مجموعة كاملة من وصلات الصرف UPVC المطابقة لمعيار BS EN 1401، الذي يحل محل BS 4660 و BS 5481. هذه الوصلات للخدمة الشاقة مصممة خصيصاً لأنظمة الصرف تحت الأرض بدون ضغط، وتوفر توصيلات موثوقة مانعة للماء. مصنعة في منشأتنا بأم القيوين لمتانة استثنائية ومقاومة كيميائية، تضمن أداءً طويل المدى في ظروف التربة والمياه الجوفية المتنوعة في دبي وأبوظبي والخليج.`,

  features: [
    'Full compliance with BS EN 1401 requirements',
    'High chemical resistance to domestic sewage substances',
    'Smooth internal bore for superior hydraulic flow',
    'Robust construction suitable for underground burial',
    'Tight dimensional tolerances for consistent jointing',
    'Lightweight and easy to handle during installation',
    'ISO 9001:2015 certified production at our Umm Al Quwain, UAE facility',
    'Orange colour coded for underground identification — GCC standard',
  ],
  featuresAr: [
    'مطابقة كاملة لمتطلبات BS EN 1401',
    'مقاومة كيميائية عالية لمواد الصرف المنزلي',
    'تجويف داخلي أملس لتدفق هيدروليكي متفوق',
    'بناء متين مناسب للدفن تحت الأرض',
    'تفاوتات أبعاد دقيقة لوصل متسق',
    'خفيفة الوزن وسهلة المناولة أثناء التركيب',
    'إنتاج معتمد بمعيار ISO 9001:2015',
    'مرمزة باللون البرتقالي للتعرف تحت الأرض',
  ],

  applications: [
    'Underground domestic drainage systems across the UAE',
    'Main public sewerage networks in Dubai and Abu Dhabi',
    'Stormwater and surface water management in the GCC',
    'Industrial waste drainage in UAE free zones',
    'Building-to-sewer lateral connections',
    'Highway and road drainage infrastructure',
    'Foul water drainage networks',
    'Municipal infrastructure projects in the Middle East',
  ],
  applicationsAr: [
    'أنظمة الصرف المنزلي تحت الأرض',
    'شبكات الصرف الصحي العامة الرئيسية',
    'إدارة مياه الأمطار والمياه السطحية',
    'أنظمة صرف النفايات الصناعية',
    'التوصيلات الفرعية من المباني إلى المجاري',
    'البنية التحتية لصرف الطرق السريعة والشوارع',
    'شبكات صرف المياه الملوثة',
    'مشاريع البنية التحتية البلدية',
  ],

  pipesTables: [],
  fittings: bsEn1401Fittings,

  downloads: [
    { label: 'BS EN 1401 Drainage Fittings Catalogue (PDF)', href: '/pdfs/UPVC%20DRAINAGE%20FITTINGS%20BS%20EN%201401%20-%20SUPERSEDED%20BS%204660%20%26%20BS%205481.pdf' },
  ],

  dosDonts: {
    dos: [
      'Verify all fittings meet BS EN 1401 before installation',
      'Ensure trench bed is properly levelled and free of sharp stones',
      'Use approved UPVC solvent cement and cleaner for secure jointing',
      'Perform pressure or air test on the system before backfilling',
    ],
    donts: [
      'Do not use these fittings for high-pressure water supply',
      'Do not install fittings with visible damage or cracking',
      'Avoid incompatible solvent cements or lubricants',
      'Do not backfill with large rocks or frozen soil',
    ],
  },
  dosDontsAr: {
    dos: [
      'تحقق أن جميع الوصلات تستوفي BS EN 1401 قبل التركيب',
      'تأكد أن قاع الخندق مستوٍ وخالٍ من الحجارة الحادة',
      'استخدم أسمنت مذيب ومنظف UPVC معتمد لتوصيل آمن',
      'أجرِ اختبار الضغط أو الهواء على النظام قبل الردم',
    ],
    donts: [
      'لا تستخدم هذه الوصلات لإمداد المياه عالي الضغط',
      'لا تركّب وصلات بها أضرار أو تشققات ظاهرة',
      'تجنب أسمنت المذيب أو مواد التزليق غير المتوافقة',
      'لا تردم بحجارة كبيرة أو تربة متجمدة',
    ],
  },
};


// ═══════════════════════════════════════════════════════════════════════════════
// 3) Pushfit Fittings — Placeholder
// ═══════════════════════════════════════════════════════════════════════════════

export const upvcDrainageFittingsPushfit: ProductDetailConfig = {
  slug: 'upvc-drainage-fittings-pushfit',
  categorySlug: 'upvc-drainage-fittings',

  title: 'UPVC Drainage Pushfit Fittings',
  titleAr: 'وصلات الصرف UPVC بالدفع',

  shortDescription: 'Push-fit drainage fittings for quick and secure tool-free connections.',
  shortDescriptionAr: 'وصلات صرف بالدفع للتوصيل السريع والآمن بدون أدوات.',

  overview: `Crown Plastic Pipes / Fittings, a premium drainage fittings manufacturer in the UAE, offers UPVC push-fit drainage fittings designed for fast, tool-free installation. These fittings utilise integral rubber ring seals that create watertight connections without solvent cement, making them ideal for rapid plumbing works across Dubai, Abu Dhabi, and the wider GCC where speed and reliability are critical.`,
  overviewAr: `تقدم كراون للأنابيب والوصلات البلاستيكية، مصنع وصلات الصرف المتميز في الإمارات، وصلات صرف UPVC بالدفع مصممة للتركيب السريع بدون أدوات. تستخدم حلقات مطاطية مدمجة تنشئ توصيلات مانعة للماء بدون أسمنت المذيب، مثالية لأعمال السباكة السريعة في دبي وأبوظبي والخليج.`,

  features: [
    'Tool-free push-fit installation',
    'Integral rubber ring seals for watertight connections',
    'Easy disassembly for maintenance access',
    'Compatible with standard UPVC drainage pipes',
    'Lightweight and easy to handle',
    'ISO 9001:2015 certified production',
  ],
  featuresAr: [
    'تركيب بالدفع بدون أدوات',
    'حلقات مطاطية مدمجة للتوصيلات المانعة للماء',
    'سهولة التفكيك للوصول للصيانة',
    'متوافقة مع أنابيب الصرف UPVC القياسية',
    'خفيفة الوزن وسهلة المناولة',
    'إنتاج معتمد بمعيار ISO 9001:2015',
  ],

  applications: [
    'Residential drainage connections',
    'Commercial washroom installations',
    'Temporary drainage works',
    'Maintenance-accessible drainage runs',
  ],
  applicationsAr: [
    'توصيلات الصرف السكنية',
    'تركيبات دورات المياه التجارية',
    'أعمال الصرف المؤقتة',
    'مسارات الصرف سهلة الوصول للصيانة',
  ],

  pipesTables: [],
  fittings: pushfitFittings,

  dosDonts: {
    dos: [
      'Ensure pipe ends are chamfered and clean before insertion',
      'Apply silicone lubricant to the rubber seal before assembly',
      'Mark insertion depth on the pipe before pushing home',
      'Support pipes at recommended intervals',
    ],
    donts: [
      'Do not use petroleum-based lubricants on seals',
      'Do not force fittings — misalignment causes seal damage',
      'Do not exceed recommended temperature limits',
      'Do not use for pressure applications',
    ],
  },
  dosDontsAr: {
    dos: [
      'تأكد أن أطراف الأنابيب مشطوفة ونظيفة قبل الإدخال',
      'ضع مادة تزليق سيليكونية على الحلقة المطاطية قبل التجميع',
      'حدد عمق الإدخال على الأنبوب قبل الدفع',
      'ادعم الأنابيب على فترات موصى بها',
    ],
    donts: [
      'لا تستخدم مواد تزليق بترولية على الحلقات المانعة',
      'لا تدفع الوصلات بالقوة — عدم المحاذاة يتلف الحلقة',
      'لا تتجاوز حدود درجة الحرارة الموصى بها',
      'لا تستخدم لتطبيقات الضغط',
    ],
  },
};
