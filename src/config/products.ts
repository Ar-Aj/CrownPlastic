// Products configuration for Crown Plastic Pipes
// Bilingual structure - English names with Arabic translations

export interface SubProduct {
  slug: string;
  name: string;
  nameAr?: string;
  standards: string[];  // Standards stay in English always
  shortDescription: string;
  shortDescriptionAr?: string;
  features?: string[];
  featuresAr?: string[];
}

export interface ProductCategory {
  slug: string;
  name: string;
  nameAr?: string;
  shortDescription: string;
  shortDescriptionAr?: string;
  icon: string;
  image?: string;
  subProducts: SubProduct[];
}

export const productCategories: ProductCategory[] = [
  {
    slug: 'upvc-pressure',
    name: 'UPVC Pressure Pipes & Fittings',
    nameAr: 'أنابيب وتوصيلات الضغط UPVC',
    shortDescription: 'Metric & Inch series | PN6-16 | BS EN 1452, DIN 8061/62, BS 3505/6',
    shortDescriptionAr: 'سلسلة متري وإنش | PN6-16 | BS EN 1452، DIN 8061/62، BS 3505/6',
    icon: '💧',
    image: '/images/products/upvc-pressure.jpg',
    subProducts: [
      {
        slug: 'pipes-metric',
        name: 'UPVC Pressure Pipes BS EN 1452',
        nameAr: 'أنابيب الضغط UPVC بمعيار BS EN 1452',
        standards: ['BS EN 1452', 'DIN 8061/62', 'ISO 4422'],
        shortDescription: 'Metric series PN6-16 | ISO 4422 superseded by BS EN 1452 | Potable water supply systems.',
        shortDescriptionAr: 'سلسلة متري PN6-16 | ISO 4422 حل محله BS EN 1452 | أنظمة إمداد المياه الصالحة للشرب.',
        features: ['Lead-free', 'Corrosion resistant', 'Long service life', 'Easy installation'],
        featuresAr: ['خالي من الرصاص', 'مقاوم للتآكل', 'عمر خدمة طويل', 'تركيب سهل'],
      },
      {
        slug: 'pipes-inch',
        name: 'UPVC Pressure Pipes ASTM D1785',
        nameAr: 'أنابيب الضغط UPVC بمعيار ASTM D1785',
        standards: ['ASTM D1785', 'ASTM D2241', 'BS 3505', 'BS 3506'],
        shortDescription: 'Inch series BS 3505/3506 | Schedule 40 | Water distribution networks.',
        shortDescriptionAr: 'سلسلة إنش BS 3505/3506 | Schedule 40 | شبكات توزيع المياه.',
        features: ['High pressure rating', 'UV stabilized', 'Leak-proof joints'],
        featuresAr: ['تصنيف ضغط عالي', 'مستقر ضد الأشعة فوق البنفسجية', 'وصلات مانعة للتسرب'],
      },
      {
        slug: 'fittings',
        name: 'UPVC Pressure Fittings Multi-Standard',
        nameAr: 'توصيلات الضغط UPVC متعددة المعايير',
        standards: ['DIN 8063', 'BS EN 1452', 'BS 4346 PN15', 'ASTM D2466 SCH40'],
        shortDescription: 'DIN 8063 | BS EN 1452 PN15 | ASTM D2466 SCH40 | Elbows, tees, couplers, adapters.',
        shortDescriptionAr: 'DIN 8063 | BS EN 1452 PN15 | ASTM D2466 SCH40 | أكواع، تيهات، وصلات، محولات.',
        features: ['Precision molded', 'Perfect fit', 'High pressure tolerance'],
        featuresAr: ['قولبة دقيقة', 'تركيب مثالي', 'تحمل ضغط عالي'],
      },
    ],
  },
  {
    slug: 'upvc-drainage',
    name: 'UPVC Drainage Pipes & Fittings',
    nameAr: 'أنابيب وتوصيلات الصرف UPVC',
    shortDescription: 'BS EN 1329/1401 | Above/underground | BS 5255/4514/4660',
    shortDescriptionAr: 'BS EN 1329/1401 | أرضي/تحت أرضي | BS 5255/4514/4660',
    icon: '🔧',
    image: '/images/products/upvc-drainage.jpg',
    subProducts: [
      {
        slug: 'pipes-above-ground',
        name: 'UPVC Soil Pipes BS 5255',
        nameAr: 'أنابيب الصرف الأرضية UPVC بمعيار BS 5255',
        standards: ['BS 5255', 'BS 4514', 'BS EN 1329'],
        shortDescription: 'Above-ground soil and waste discharge pipes for internal and external drainage systems.',
        shortDescriptionAr: 'أنابيب تصريف التربة والنفايات الأرضية لأنظمة الصرف الداخلية والخارجية.',
        features: ['Ring-seal joints', 'Sound dampening', 'Quick assembly'],
        featuresAr: ['وصلات بالحلقة المانعة', 'عزل صوتي', 'تجميع سريع'],
      },
      {
        slug: 'pipes-underground',
        name: 'UPVC Underground Pipes BS EN 1401',
        nameAr: 'أنابيب تحت الأرض UPVC بمعيار BS EN 1401',
        standards: ['BS EN 1401', 'BS 4660', 'BS 5481'],
        shortDescription: 'Heavy-duty underground drainage pipes for sewerage and stormwater applications.',
        shortDescriptionAr: 'أنابيب صرف تحت أرضية للخدمة الشاقة لتطبيقات الصرف الصحي ومياه الأمطار.',
        features: ['High impact resistance', 'Root resistant', 'Long-term durability'],
        featuresAr: ['مقاومة صدم عالية', 'مقاوم للجذور', 'متانة طويلة المدى'],
      },
      {
        slug: 'pipes-non-standard',
        name: 'UPVC Custom Drainage Pipes',
        nameAr: 'أنابيب صرف UPVC مخصصة',
        standards: ['Custom specifications'],
        shortDescription: 'Custom-manufactured drainage pipes for specialized project requirements.',
        shortDescriptionAr: 'أنابيب صرف مصنعة حسب الطلب لمتطلبات المشاريع المتخصصة.',
        features: ['Made to order', 'Custom dimensions', 'Special colors available'],
        featuresAr: ['مصنوع حسب الطلب', 'أبعاد مخصصة', 'ألوان خاصة متاحة'],
      },
      {
        slug: 'fittings',
        name: 'UPVC Drainage Fittings BS EN 1329',
        nameAr: 'توصيلات صرف UPVC بمعيار BS EN 1329',
        standards: ['BS EN 1329', 'BS 4514'],
        shortDescription: 'Comprehensive range including elbows, tees, sockets, reducers, access caps, and floor drains.',
        shortDescriptionAr: 'مجموعة شاملة تشمل أكواع، تيهات، مقابس، مخفضات، أغطية فحص، ومصارف أرضية.',
        features: ['Complete system compatibility', 'Easy maintenance access'],
        featuresAr: ['توافق تام مع النظام', 'سهولة الوصول للصيانة'],
      },
    ],
  },
  {
    slug: 'upvc-duct',
    name: 'UPVC Duct Pipes & Accessories',
    nameAr: 'أنابيب وملحقات قنوات UPVC',
    shortDescription: 'DIN 8062, NEMA TC-2, Etisalat/DU specs | D54/D56/D57',
    shortDescriptionAr: 'DIN 8062، NEMA TC-2، مواصفات Etisalat/DU | D54/D56/D57',
    icon: '⚡',
    image: '/images/products/upvc-duct.jpg',
    subProducts: [
      {
        slug: 'pipes-din',
        name: 'UPVC Duct Pipes DIN 8062',
        nameAr: 'أنابيب قنوات UPVC بمعيار DIN 8062',
        standards: ['DIN 8062'],
        shortDescription: 'German standard duct pipes for underground cable protection.',
        shortDescriptionAr: 'أنابيب قنوات بالمعيار الألماني لحماية الكابلات تحت الأرض.',
        features: ['Smooth bore', 'Low friction', 'Easy cable pulling'],
        featuresAr: ['تجويف أملس', 'احتكاك منخفض', 'سهولة سحب الكابلات'],
      },
      {
        slug: 'pipes-bs',
        name: 'UPVC Duct Pipes BS 3505/3506',
        nameAr: 'أنابيب قنوات UPVC بمعيار BS 3505/3506',
        standards: ['BS 3505', 'BS 3506'],
        shortDescription: 'British standard duct pipes for electrical and communication cables.',
        shortDescriptionAr: 'أنابيب قنوات بالمعيار البريطاني للكابلات الكهربائية والاتصالات.',
        features: ['High crush resistance', 'Watertight joints'],
        featuresAr: ['مقاومة سحق عالية', 'وصلات مانعة للماء'],
      },
      {
        slug: 'pipes-nema',
        name: 'UPVC Duct Pipes NEMA TC-2',
        nameAr: 'أنابيب قنوات UPVC بمعيار NEMA TC-2',
        standards: ['NEMA TC-2'],
        shortDescription: 'American NEMA standard conduit for electrical installations.',
        shortDescriptionAr: 'قنوات بالمعيار الأمريكي NEMA للتركيبات الكهربائية.',
        features: ['UL listed', 'Flame retardant'],
        featuresAr: ['معتمد UL', 'مثبط للهب'],
      },
      {
        slug: 'pipes-special-d54-d56-d57',
        name: 'UPVC Telecom Duct D54/D56/D57',
        nameAr: 'قنوات الاتصالات UPVC D54/D56/D57',
        standards: ['D54', 'D56', 'D57'],
        shortDescription: 'UAE telecom specification duct pipes for Etisalat/DU infrastructure.',
        shortDescriptionAr: 'أنابيب قنوات بمواصفات الاتصالات الإماراتية للبنية التحتية لـ Etisalat/DU.',
        features: ['Custom specifications', 'Project-specific design'],
        featuresAr: ['مواصفات مخصصة', 'تصميم خاص بالمشروع'],
      },
      {
        slug: 'pipes-telecom',
        name: 'UPVC Telecom Duct Pipes',
        nameAr: 'أنابيب قنوات الاتصالات UPVC',
        standards: ['Etisalat Spec', 'DU Spec'],
        shortDescription: 'Telecommunications duct pipes approved for UAE telecom infrastructure.',
        shortDescriptionAr: 'أنابيب قنوات الاتصالات المعتمدة للبنية التحتية للاتصالات في الإمارات.',
        features: ['Telecom approved', 'Fiber-optic ready', 'Multiple duct options'],
        featuresAr: ['معتمد للاتصالات', 'جاهز للألياف الضوئية', 'خيارات قنوات متعددة'],
      },
      {
        slug: 'accessories',
        name: 'UPVC Duct Accessories',
        nameAr: 'ملحقات قنوات UPVC',
        standards: ['Various'],
        shortDescription: 'Complete range of accessories including end caps, sockets, bellmouths, and bends.',
        shortDescriptionAr: 'مجموعة كاملة من الملحقات تشمل أغطية نهاية، مقابس، فتحات جرسية، وانحناءات.',
        features: ['90° bends', '45° bends', 'Long radius bends', 'End caps'],
        featuresAr: ['انحناءات 90°', 'انحناءات 45°', 'انحناءات نصف قطر طويل', 'أغطية نهاية'],
      },
    ],
  },
  {
    slug: 'pvc-conduit',
    name: 'PVC Conduit Pipes',
    nameAr: 'أنابيب القنوات PVC',
    shortDescription: 'Schedule 40/80 | 320N/750N/1250N crush resistance',
    shortDescriptionAr: 'Schedule 40/80 | مقاومة سحق 320N/750N/1250N',
    icon: '🔌',
    image: '/images/products/pvc-conduit.jpg',
    subProducts: [
      {
        slug: 'round-heavy',
        name: 'PVC Conduit 1250N Heavy Duty',
        nameAr: 'قنوات PVC 1250N للخدمة الشاقة',
        standards: ['1250N Crush Resistance'],
        shortDescription: 'Heavy-duty conduit rated at 1250N for maximum protection in demanding environments.',
        shortDescriptionAr: 'قنوات للخدمة الشاقة بتصنيف 1250N لأقصى حماية في البيئات الصعبة.',
        features: ['1250N rating', 'Concrete embedment', 'Industrial use'],
        featuresAr: ['تصنيف 1250N', 'للدفن في الخرسانة', 'للاستخدام الصناعي'],
      },
      {
        slug: 'round-medium',
        name: 'PVC Conduit 750N Medium Duty',
        nameAr: 'قنوات PVC 750N للخدمة المتوسطة',
        standards: ['750N Crush Resistance'],
        shortDescription: 'Medium-duty conduit rated at 750N for standard commercial installations.',
        shortDescriptionAr: 'قنوات للخدمة المتوسطة بتصنيف 750N للتركيبات التجارية القياسية.',
        features: ['750N rating', 'Commercial grade', 'Versatile applications'],
        featuresAr: ['تصنيف 750N', 'درجة تجارية', 'تطبيقات متعددة'],
      },
      {
        slug: 'round-light',
        name: 'PVC Conduit 320N Light Duty',
        nameAr: 'قنوات PVC 320N للخدمة الخفيفة',
        standards: ['320N Crush Resistance'],
        shortDescription: 'Light-duty conduit rated at 320N for residential and light commercial use.',
        shortDescriptionAr: 'قنوات للخدمة الخفيفة بتصنيف 320N للاستخدام السكني والتجاري الخفيف.',
        features: ['320N rating', 'Residential use', 'Cost-effective'],
        featuresAr: ['تصنيف 320N', 'للاستخدام السكني', 'اقتصادي'],
      },
      {
        slug: 'schedule-40',
        name: 'PVC Conduit Schedule 40',
        nameAr: 'قنوات PVC Schedule 40',
        standards: ['US Standard', 'UL Listed'],
        shortDescription: 'American standard Schedule 40 rigid PVC conduit for electrical installations.',
        shortDescriptionAr: 'قنوات PVC صلبة بالمعيار الأمريكي Schedule 40 للتركيبات الكهربائية.',
        features: ['UL listed', 'Standard wall thickness', 'Wide availability'],
        featuresAr: ['معتمد UL', 'سماكة جدار قياسية', 'توفر واسع'],
      },
      {
        slug: 'schedule-80',
        name: 'PVC Conduit Schedule 80',
        nameAr: 'قنوات PVC Schedule 80',
        standards: ['US Standard', 'UL Listed'],
        shortDescription: 'Heavy-duty Schedule 80 conduit with extra wall thickness for extreme conditions.',
        shortDescriptionAr: 'قنوات Schedule 80 للخدمة الشاقة بسماكة جدار إضافية للظروف القاسية.',
        features: ['Extra heavy wall', 'Maximum protection', 'Industrial environments'],
        featuresAr: ['جدار ثقيل إضافي', 'حماية قصوى', 'بيئات صناعية'],
      },
    ],
  },
  {
    slug: 'ppr',
    name: 'PPR Pipes',
    nameAr: 'أنابيب PPR',
    shortDescription: 'PN10/16/20 | DIN 8077/78 | Hot & cold water 50yr life',
    shortDescriptionAr: 'PN10/16/20 | DIN 8077/78 | مياه ساخنة وباردة بعمر 50 سنة',
    icon: '🚿',
    image: '/images/products/ppr-pipes.jpg',
    subProducts: [
      {
        slug: 'sdr11-pn10',
        name: 'PPR SDR11 PN10',
        nameAr: 'أنابيب PPR SDR11 PN10',
        standards: ['DIN 8077', 'DIN 8078', 'ISO 15874'],
        shortDescription: 'PPR pipes with 10 bar pressure rating for cold water applications.',
        shortDescriptionAr: 'أنابيب PPR بتصنيف ضغط 10 بار لتطبيقات المياه الباردة.',
        features: ['10 bar rating', 'Cold water systems', 'Economic choice'],
        featuresAr: ['تصنيف 10 بار', 'أنظمة المياه الباردة', 'خيار اقتصادي'],
      },
      {
        slug: 'sdr7-4-pn16',
        name: 'PPR SDR7.4 PN16',
        nameAr: 'أنابيب PPR SDR7.4 PN16',
        standards: ['DIN 8077', 'DIN 8078', 'ISO 15874'],
        shortDescription: 'PPR pipes with 16 bar pressure rating for hot and cold water systems.',
        shortDescriptionAr: 'أنابيب PPR بتصنيف ضغط 16 بار لأنظمة المياه الساخنة والباردة.',
        features: ['16 bar rating', 'Hot & cold water', 'Building installations'],
        featuresAr: ['تصنيف 16 بار', 'مياه ساخنة وباردة', 'تركيبات المباني'],
      },
      {
        slug: 'sdr6-pn20',
        name: 'PPR SDR6 PN20',
        nameAr: 'أنابيب PPR SDR6 PN20',
        standards: ['DIN 8077', 'DIN 8078', 'ISO 15874'],
        shortDescription: 'High-pressure PPR pipes rated at 20 bar for demanding applications.',
        shortDescriptionAr: 'أنابيب PPR عالية الضغط بتصنيف 20 بار للتطبيقات المتطلبة.',
        features: ['20 bar rating', 'High temperature', 'Industrial applications'],
        featuresAr: ['تصنيف 20 بار', 'درجة حرارة عالية', 'تطبيقات صناعية'],
      },
    ],
  },
  {
    slug: 'polyethylene',
    name: 'HDPE Pipe Systems',
    nameAr: 'أنظمة أنابيب HDPE',
    shortDescription: 'PE63/80/100 | ISO 4427 | Irrigation & water distribution',
    shortDescriptionAr: 'PE63/80/100 | ISO 4427 | الري وتوزيع المياه',
    icon: '🌊',
    image: '/images/products/pe-systems.jpg',
    subProducts: [
      {
        slug: 'hdpe-pe63-pe80-pe100',
        name: 'HDPE Pipes PE63/PE80/PE100',
        nameAr: 'أنابيب HDPE PE63/PE80/PE100',
        standards: ['ISO 4427', 'DIN 8074', 'EN 12201'],
        shortDescription: 'High-density polyethylene pipes in various grades for water and gas distribution.',
        shortDescriptionAr: 'أنابيب بولي إيثيلين عالي الكثافة بدرجات متنوعة لتوزيع المياه والغاز.',
        features: ['Flexible', 'Corrosion free', 'Long coil lengths', '50+ year life'],
        featuresAr: ['مرن', 'خالي من التآكل', 'أطوال لفات طويلة', 'عمر 50+ سنة'],
      },
      {
        slug: 'lldpe-ldpe-drip',
        name: 'LLDPE/LDPE Drip Irrigation Pipes',
        nameAr: 'أنابيب الري بالتنقيط LLDPE/LDPE',
        standards: ['ASAE S435', 'ASTM', 'AS/NZS 2698', 'BS 1972'],
        shortDescription: 'Linear low-density polyethylene pipes for agricultural drip irrigation systems.',
        shortDescriptionAr: 'أنابيب بولي إيثيلين خطي منخفض الكثافة لأنظمة الري بالتنقيط الزراعية.',
        features: ['UV stabilized', 'Flexible laying', 'Agricultural grade'],
        featuresAr: ['مستقر ضد الأشعة فوق البنفسجية', 'مد مرن', 'درجة زراعية'],
      },
      {
        slug: 'water-distribution',
        name: 'HDPE Water Distribution PN10-16',
        nameAr: 'توزيع المياه HDPE PN10-16',
        standards: ['ISO 4427', 'EN 12201'],
        shortDescription: 'Complete polyethylene piping systems for municipal water distribution networks.',
        shortDescriptionAr: 'أنظمة أنابيب بولي إيثيلين كاملة لشبكات توزيع المياه البلدية.',
        features: ['Large diameter available', 'Fusion welded joints', 'Leak-free system'],
        featuresAr: ['أقطار كبيرة متاحة', 'وصلات ملحومة بالانصهار', 'نظام خالي من التسرب'],
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
