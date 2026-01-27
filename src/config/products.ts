// Products configuration for Crown Plastic Pipes
// Bilingual structure - English names with Arabic translations
// STANDARDISED PRODUCT CATALOG - Updated to match real product range

export interface SubProduct {
  slug: string;
  name: string;
  nameAr?: string;
  shortLabel?: string;  // Short label for compact UI (e.g., "DIN 8063")
  shortLabelAr?: string;
  standards: string[];  // Standards stay in English always
  shortDescription: string;
  shortDescriptionAr?: string;
  features?: string[];
  featuresAr?: string[];
  image?: string;  // Sub-product specific image, falls back to category image
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

// ═══════════════════════════════════════════════════════════════════════════════
// AUTHORITATIVE PRODUCT CATALOG
// Only categories and families listed here should appear in UI/nav/sitemap
// ═══════════════════════════════════════════════════════════════════════════════

export const productCategories: ProductCategory[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // A) PVC PRESSURE PIPES & FITTINGS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'upvc-pressure',
    name: 'PVC Pressure Pipes & Fittings',
    nameAr: 'أنابيب وتوصيلات الضغط PVC',
    shortDescription: 'DIN 8063 | BS EN 1452:23 / BS 4346 | ASTM D 2466 SCH-40',
    shortDescriptionAr: 'DIN 8063 | BS EN 1452:23 / BS 4346 | ASTM D 2466 SCH-40',
    icon: '💧',
    image: '/images/products/upvc-pressure.jpg',
    subProducts: [
      {
        slug: 'pvc-pressure-din-8063',
        name: 'PVC Pressure Pipes & Fittings DIN 8063',
        nameAr: 'أنابيب وتوصيلات الضغط PVC بمعيار DIN 8063',
        shortLabel: 'DIN 8063',
        shortLabelAr: 'DIN 8063',
        standards: ['DIN 8063'],
        shortDescription: 'German standard PVC pressure pipes and fittings for potable water supply systems.',
        shortDescriptionAr: 'أنابيب وتوصيلات الضغط PVC بالمعيار الألماني لأنظمة إمداد المياه الصالحة للشرب.',
        features: ['Lead-free', 'Corrosion resistant', 'Long service life', 'Easy installation'],
        featuresAr: ['خالي من الرصاص', 'مقاوم للتآكل', 'عمر خدمة طويل', 'تركيب سهل'],
        image: '/images/products/pvc-pressure-din-8063.jpg',
      },
      {
        slug: 'pvc-pressure-bs-en-1452',
        name: 'PVC Pressure Pipes & Fittings BS EN 1452:23 / BS 4346 (PN 15)',
        nameAr: 'أنابيب وتوصيلات الضغط PVC بمعيار BS EN 1452:23 / BS 4346 (PN 15)',
        shortLabel: 'BS EN 1452:23 / BS 4346',
        shortLabelAr: 'BS EN 1452:23 / BS 4346',
        standards: ['BS EN 1452:23', 'BS 4346', 'PN 15'],
        shortDescription: 'British standard PVC pressure pipes and fittings for water supply networks.',
        shortDescriptionAr: 'أنابيب وتوصيلات الضغط PVC بالمعيار البريطاني لشبكات إمداد المياه.',
        features: ['PN 15 rated', 'BS certified', 'Precision molded', 'High pressure tolerance'],
        featuresAr: ['تصنيف PN 15', 'معتمد BS', 'قولبة دقيقة', 'تحمل ضغط عالي'],
        image: '/images/products/pvc-pressure-bs-en-1452.jpg',
      },
      {
        slug: 'pvc-pressure-astm-d2466',
        name: 'PVC Pressure Pipes & Fittings ASTM D 2466 SCH-40',
        nameAr: 'أنابيب وتوصيلات الضغط PVC بمعيار ASTM D 2466 SCH-40',
        shortLabel: 'ASTM D 2466 SCH-40',
        shortLabelAr: 'ASTM D 2466 SCH-40',
        standards: ['ASTM D 2466', 'SCH-40'],
        shortDescription: 'American standard Schedule 40 PVC pressure pipes and fittings.',
        shortDescriptionAr: 'أنابيب وتوصيلات الضغط PVC بالمعيار الأمريكي Schedule 40.',
        features: ['Schedule 40 rating', 'ASTM certified', 'UV stabilized', 'Leak-proof joints'],
        featuresAr: ['تصنيف Schedule 40', 'معتمد ASTM', 'مستقر ضد الأشعة فوق البنفسجية', 'وصلات مانعة للتسرب'],
        image: '/images/products/pvc-pressure-astm-d2466.jpg',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // B) UPVC DRAINAGE PIPES AND FITTINGS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'upvc-drainage',
    name: 'UPVC Drainage Pipes & Fittings',
    nameAr: 'أنابيب وتوصيلات الصرف UPVC',
    shortDescription: 'BS EN 1329-1:2014 | BS EN 1401 | Above & underground drainage',
    shortDescriptionAr: 'BS EN 1329-1:2014 | BS EN 1401 | صرف أرضي وتحت أرضي',
    icon: '🔧',
    image: '/images/products/upvc-drainage.jpg',
    subProducts: [
      {
        slug: 'upvc-drainage-bs-en-1329',
        name: 'UPVC Drainage Pipes and Fittings BS EN 1329-1:2014 (Supersedes BS 5255 & BS 4514)',
        nameAr: 'أنابيب وتوصيلات الصرف UPVC بمعيار BS EN 1329-1:2014 (يحل محل BS 5255 و BS 4514)',
        shortLabel: 'BS EN 1329-1:2014',
        shortLabelAr: 'BS EN 1329-1:2014',
        standards: ['BS EN 1329-1:2014', 'Supersedes BS 5255', 'Supersedes BS 4514'],
        shortDescription: 'Above-ground soil and waste discharge pipes for internal and external drainage systems.',
        shortDescriptionAr: 'أنابيب تصريف التربة والنفايات الأرضية لأنظمة الصرف الداخلية والخارجية.',
        features: ['Ring-seal joints', 'Sound dampening', 'Quick assembly', 'Complete system compatibility'],
        featuresAr: ['وصلات بالحلقة المانعة', 'عزل صوتي', 'تجميع سريع', 'توافق تام مع النظام'],
        image: '/images/products/upvc-drainage-bs-en-1329.jpg',
      },
      {
        slug: 'upvc-drainage-bs-en-1401',
        name: 'UPVC Drainage Pipes and Fittings BS EN 1401 (Supersedes BS 4660 & BS 5481)',
        nameAr: 'أنابيب وتوصيلات الصرف UPVC بمعيار BS EN 1401 (يحل محل BS 4660 و BS 5481)',
        shortLabel: 'BS EN 1401',
        shortLabelAr: 'BS EN 1401',
        standards: ['BS EN 1401', 'Supersedes BS 4660', 'Supersedes BS 5481'],
        shortDescription: 'Heavy-duty underground drainage pipes for sewerage and stormwater applications.',
        shortDescriptionAr: 'أنابيب صرف تحت أرضية للخدمة الشاقة لتطبيقات الصرف الصحي ومياه الأمطار.',
        features: ['High impact resistance', 'Root resistant', 'Long-term durability', 'Easy maintenance access'],
        featuresAr: ['مقاومة صدم عالية', 'مقاوم للجذور', 'متانة طويلة المدى', 'سهولة الوصول للصيانة'],
        image: '/images/products/upvc-drainage-bs-en-1401.jpg',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // C) UPVC CONDUIT PIPES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'pvc-conduit',
    name: 'UPVC Conduit Pipes',
    nameAr: 'أنابيب قنوات UPVC',
    shortDescription: 'SCH 40 | SCH 80 | Electrical conduit systems',
    shortDescriptionAr: 'SCH 40 | SCH 80 | أنظمة القنوات الكهربائية',
    icon: '🔌',
    image: '/images/products/pvc-conduit.jpg',
    subProducts: [
      {
        slug: 'upvc-conduit-sch-40',
        name: 'UPVC Conduit Pipes SCH 40',
        nameAr: 'أنابيب قنوات UPVC SCH 40',
        shortLabel: 'SCH 40',
        shortLabelAr: 'SCH 40',
        standards: ['SCH 40', 'UL Listed'],
        shortDescription: 'Standard Schedule 40 UPVC conduit pipes for electrical installations.',
        shortDescriptionAr: 'أنابيب قنوات UPVC قياسية Schedule 40 للتركيبات الكهربائية.',
        features: ['UL listed', 'Standard wall thickness', 'Wide availability', 'Easy installation'],
        featuresAr: ['معتمد UL', 'سماكة جدار قياسية', 'توفر واسع', 'تركيب سهل'],
        image: '/images/products/upvc-conduit-sch-40.jpg',
      },
      {
        slug: 'upvc-conduit-sch-80',
        name: 'UPVC Conduit Pipes SCH 80',
        nameAr: 'أنابيب قنوات UPVC SCH 80',
        shortLabel: 'SCH 80',
        shortLabelAr: 'SCH 80',
        standards: ['SCH 80', 'UL Listed'],
        shortDescription: 'Heavy-duty Schedule 80 UPVC conduit pipes with extra wall thickness.',
        shortDescriptionAr: 'أنابيب قنوات UPVC للخدمة الشاقة Schedule 80 بسماكة جدار إضافية.',
        features: ['Extra heavy wall', 'Maximum protection', 'Industrial environments', 'Extreme conditions'],
        featuresAr: ['جدار ثقيل إضافي', 'حماية قصوى', 'بيئات صناعية', 'ظروف قاسية'],
        image: '/images/products/upvc-conduit-sch-80.jpg',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // D) PPR PIPES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'ppr',
    name: 'PPR Pipes',
    nameAr: 'أنابيب PPR',
    shortDescription: 'SDR11/PN10 | SDR7.4/PN16 | SDR6/PN20 | Hot & cold water systems',
    shortDescriptionAr: 'SDR11/PN10 | SDR7.4/PN16 | SDR6/PN20 | أنظمة المياه الساخنة والباردة',
    icon: '🚿',
    image: '/images/products/ppr-pipes.jpg',
    subProducts: [
      {
        slug: 'ppr-sdr11-pn10',
        name: 'PPR Pipes SDR11 / PN 10',
        nameAr: 'أنابيب PPR SDR11 / PN 10',
        shortLabel: 'SDR11 / PN 10',
        shortLabelAr: 'SDR11 / PN 10',
        standards: ['DIN 8077', 'DIN 8078', 'ISO 15874', 'PN 10'],
        shortDescription: 'PPR pipes with 10 bar pressure rating for cold water applications.',
        shortDescriptionAr: 'أنابيب PPR بتصنيف ضغط 10 بار لتطبيقات المياه الباردة.',
        features: ['10 bar rating', 'Cold water systems', 'Economic choice', '50+ year life'],
        featuresAr: ['تصنيف 10 بار', 'أنظمة المياه الباردة', 'خيار اقتصادي', 'عمر 50+ سنة'],
        image: '/images/products/ppr-sdr11-pn10.jpg',
      },
      {
        slug: 'ppr-sdr7-4-pn16',
        name: 'PPR Pipes SDR7.4 / PN 16',
        nameAr: 'أنابيب PPR SDR7.4 / PN 16',
        shortLabel: 'SDR7.4 / PN 16',
        shortLabelAr: 'SDR7.4 / PN 16',
        standards: ['DIN 8077', 'DIN 8078', 'ISO 15874', 'PN 16'],
        shortDescription: 'PPR pipes with 16 bar pressure rating for hot and cold water systems.',
        shortDescriptionAr: 'أنابيب PPR بتصنيف ضغط 16 بار لأنظمة المياه الساخنة والباردة.',
        features: ['16 bar rating', 'Hot & cold water', 'Building installations', 'Long service life'],
        featuresAr: ['تصنيف 16 بار', 'مياه ساخنة وباردة', 'تركيبات المباني', 'عمر خدمة طويل'],
        image: '/images/products/ppr-sdr7-4-pn16.jpg',
      },
      {
        slug: 'ppr-sdr6-pn20',
        name: 'PPR Pipes SDR6 / PN 20',
        nameAr: 'أنابيب PPR SDR6 / PN 20',
        shortLabel: 'SDR6 / PN 20',
        shortLabelAr: 'SDR6 / PN 20',
        standards: ['DIN 8077', 'DIN 8078', 'ISO 15874', 'PN 20'],
        shortDescription: 'High-pressure PPR pipes rated at 20 bar for demanding applications.',
        shortDescriptionAr: 'أنابيب PPR عالية الضغط بتصنيف 20 بار للتطبيقات المتطلبة.',
        features: ['20 bar rating', 'High temperature', 'Industrial applications', 'Maximum durability'],
        featuresAr: ['تصنيف 20 بار', 'درجة حرارة عالية', 'تطبيقات صناعية', 'أقصى متانة'],
        image: '/images/products/ppr-sdr6-pn20.jpg',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // E) UPVC DUCT PIPES & ACCESSORIES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'upvc-duct',
    name: 'UPVC Duct Pipes & Accessories',
    nameAr: 'أنابيب وملحقات قنوات UPVC',
    shortDescription: 'Black pipes & fittings | Cable protection systems',
    shortDescriptionAr: 'أنابيب وتوصيلات سوداء | أنظمة حماية الكابلات',
    icon: '⚡',
    image: '/images/products/upvc-duct.jpg',
    subProducts: [
      {
        slug: 'upvc-duct-black',
        name: 'UPVC Duct Pipes & Accessories Black Pipes / Fittings',
        nameAr: 'أنابيب وملحقات قنوات UPVC السوداء / التوصيلات',
        shortLabel: 'Black Pipes / Fittings',
        shortLabelAr: 'أنابيب / توصيلات سوداء',
        standards: ['Crown Specification'],
        shortDescription: 'Black UPVC duct pipes and accessories for underground cable protection.',
        shortDescriptionAr: 'أنابيب وملحقات قنوات UPVC السوداء لحماية الكابلات تحت الأرض.',
        features: ['Smooth bore', 'Low friction', 'Easy cable pulling', 'UV resistant'],
        featuresAr: ['تجويف أملس', 'احتكاك منخفض', 'سهولة سحب الكابلات', 'مقاوم للأشعة فوق البنفسجية'],
        image: '/images/products/upvc-duct-black.jpg',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // F) HDPE PIPE SYSTEMS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'polyethylene',
    name: 'HDPE Pipe Systems',
    nameAr: 'أنظمة أنابيب HDPE',
    shortDescription: 'PE63/80/100 | ISO 4427 | Irrigation & water distribution',
    shortDescriptionAr: 'PE63/80/100 | ISO 4427 | الري وتوزيع المياه',
    icon: '🌊',
    image: '/images/products/pe-systems.jpg',
    // No sub-families exposed in UI until real data is available
    subProducts: [],
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
