// Products configuration for Crown Plastic Pipes
// Bilingual structure - English names with Arabic translations
// STANDARDISED PRODUCT CATALOG - Phase 1 Taxonomy + Phase 2 Arabic Sync

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
  // 1) UPVC DRAINAGE PIPES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'upvc-drainage-pipes',
    name: 'UPVC Drainage Pipes',
    nameAr: 'أنابيب الصرف UPVC',
    shortDescription: 'BS 5255 / BS EN 1329-1:2014 | BS EN 1401-1 | Non-Standard drainage pipe systems',
    shortDescriptionAr: 'أنظمة أنابيب الصرف وفق BS 5255 / BS EN 1329-1:2014 | BS EN 1401-1 | غير قياسية',
    icon: '🔧',
    image: '/images/products/sub_products/Drainage.jpg',
    subProducts: [
      {
        slug: 'upvc-drainage-pipes-bs5255-bs-en-1329',
        name: 'UPVC Drainage Pipes BS 5255/BS EN 1329-1:2014 & BS 4514/BS EN 1329-1:2014',
        nameAr: 'أنابيب الصرف UPVC وفق BS 5255/BS EN 1329-1:2014 و BS 4514/BS EN 1329-1:2014',
        shortLabel: 'BS 5255 / BS EN 1329-1:2014',
        shortLabelAr: 'BS 5255 / BS EN 1329-1:2014',
        standards: ['BS 5255', 'BS EN 1329-1:2014', 'BS 4514'],
        shortDescription: 'Above-ground soil and waste discharge drainage pipes certified to BS 5255/BS EN 1329-1:2014 & BS 4514/BS EN 1329-1:2014.',
        shortDescriptionAr: 'أنابيب الصرف فوق الأرض لتصريف التربة والنفايات معتمدة وفق BS 5255/BS EN 1329-1:2014 و BS 4514/BS EN 1329-1:2014.',
        features: ['BS 5255 & BS EN 1329-1:2014 certified', 'Smooth internal bore prevents scaling', 'Chemical & corrosion resistant', 'Solvent cement jointing', '50+ year service life'],
        featuresAr: ['معتمدة وفق BS 5255 و BS EN 1329-1:2014', 'تجويف داخلي أملس يمنع التكلس', 'مقاوم للمواد الكيميائية والتآكل', 'وصل بأسمنت المذيب', 'عمر خدمة يزيد عن 50 سنة'],
        image: '/images/products/cover/upvc-drainage/pipes/upvcdrainagepipesbs5255.png',
      },
      {
        slug: 'upvc-drainage-pipes-bs-en-1401',
        name: 'UPVC Drainage Pipes BS EN 1401-1 (BS 4660 & BS 5481)',
        nameAr: 'أنابيب الصرف UPVC وفق BS EN 1401-1 (BS 4660 و BS 5481)',
        shortLabel: 'BS EN 1401-1',
        shortLabelAr: 'BS EN 1401-1',
        standards: ['BS EN 1401-1', 'BS 4660', 'BS 5481'],
        shortDescription: 'Underground drainage pipes certified to BS EN 1401-1 (supersedes BS 4660 & BS 5481).',
        shortDescriptionAr: 'أنابيب الصرف تحت الأرض معتمدة وفق BS EN 1401-1 (تحل محل BS 4660 و BS 5481).',
        features: ['BS EN 1401-1 certified (supersedes BS 4660 & BS 5481)', 'High ring stiffness for underground loading', 'Root-resistant construction', 'Orange colour for underground ID', '50+ year service life'],
        featuresAr: ['معتمدة وفق BS EN 1401-1 (تحل محل BS 4660 و BS 5481)', 'صلابة حلقية عالية لأحمال تحت الأرض', 'بناء مقاوم للجذور', 'لون برتقالي للتعرف تحت الأرض', 'عمر خدمة يزيد عن 50 سنة'],
        image: '/images/products/cover/upvc-drainage/pipes/upvcdrainagepipesbs1401.png',
      },
      {
        slug: 'upvc-drainage-pipes-non-standard',
        name: 'UPVC Drainage Non-Standard Pipes',
        nameAr: 'أنابيب الصرف UPVC غير القياسية',
        shortLabel: 'Non-Standard',
        shortLabelAr: 'غير قياسية',
        standards: ['Crown Specification'],
        shortDescription: 'Non-standard UPVC drainage pipes for specialized project requirements.',
        shortDescriptionAr: 'أنابيب صرف UPVC غير قياسية لمتطلبات المشاريع المتخصصة.',
        features: ['Custom dimensions outside BS/EN scope', 'Same high-grade PVC-U compound', 'Sizes from 1¼″ to 12″', 'Ideal for retrofit & renovation', 'Chemical resistant'],
        featuresAr: ['أبعاد مخصصة خارج نطاق معايير BS/EN', 'نفس مركب PVC-U عالي الجودة', 'مقاسات من 1¼″ إلى 12″', 'مثالي للتجديد والترميم', 'مقاوم للمواد الكيميائية'],
        image: '/images/products/cover/upvc-drainage/pipes/upvcdrainagepipesnonstandard.png',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2) UPVC DRAINAGE FITTINGS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'upvc-drainage-fittings',
    name: 'UPVC Drainage Fittings',
    nameAr: 'وصلات الصرف UPVC',
    shortDescription: 'BS EN 1329-1:2014 | BS EN 1401 | Pushfit drainage fittings',
    shortDescriptionAr: 'وصلات الصرف وفق BS EN 1329-1:2014 | BS EN 1401 | وصلات الدفع',
    icon: '🔩',
    image: '/images/products/sub_products/Drainage.jpg',
    subProducts: [
      {
        slug: 'upvc-drainage-fittings-bs-en-1329',
        name: 'UPVC Drainage Fittings BS EN 1329-1:2014 (Supersedes BS 5255 & BS 4514)',
        nameAr: 'وصلات الصرف UPVC وفق BS EN 1329-1:2014 (تحل محل BS 5255 و BS 4514)',
        shortLabel: 'BS EN 1329-1:2014',
        shortLabelAr: 'BS EN 1329-1:2014',
        standards: ['BS EN 1329-1:2014', 'Supersedes BS 5255', 'Supersedes BS 4514'],
        shortDescription: 'Above-ground drainage fittings certified to BS EN 1329-1:2014.',
        shortDescriptionAr: 'وصلات الصرف فوق الأرض معتمدة وفق BS EN 1329-1:2014.',
        features: ['BS EN 1329-1:2014 certified', 'Sizes from 1½″ to 8″', '24 fitting types available', 'Smooth internal bore', 'Solvent cement jointing'],
        featuresAr: ['معتمدة وفق BS EN 1329-1:2014', 'مقاسات من 1½″ إلى 8″', '24 نوع وصلة متوفرة', 'تجويف داخلي أملس', 'وصل بأسمنت المذيب'],
        image: '/images/products/cover/upvc-drainage/fittings/BS EN 1329-12014.png',
      },
      {
        slug: 'upvc-drainage-fittings-bs-en-1401',
        name: 'UPVC Drainage Fittings BS EN 1401 (Supersedes BS 4660 & BS 5481)',
        nameAr: 'وصلات الصرف UPVC وفق BS EN 1401 (تحل محل BS 4660 و BS 5481)',
        shortLabel: 'BS EN 1401',
        shortLabelAr: 'BS EN 1401',
        standards: ['BS EN 1401', 'Supersedes BS 4660', 'Supersedes BS 5481'],
        shortDescription: 'Underground drainage fittings certified to BS EN 1401.',
        shortDescriptionAr: 'وصلات الصرف تحت الأرض معتمدة وفق BS EN 1401.',
        features: ['BS EN 1401 certified', 'Underground sewerage rated', '8 fitting types available', 'High chemical resistance', 'Ring-seal jointing'],
        featuresAr: ['معتمدة وفق BS EN 1401', 'مصنفة للصرف الصحي تحت الأرض', '8 أنواع وصلات متوفرة', 'مقاومة كيميائية عالية', 'وصل بالحلقة المانعة'],
        image: '/images/products/cover/upvc-drainage/fittings/BS EN 1401.png',
      },
      {
        slug: 'upvc-drainage-fittings-pushfit',
        name: 'UPVC Drainage Pushfit Fittings',
        nameAr: 'وصلات الصرف UPVC بالدفع',
        shortLabel: 'Pushfit',
        shortLabelAr: 'وصلات الدفع',
        standards: ['Crown Specification'],
        shortDescription: 'Push-fit drainage fittings for quick and secure connections.',
        shortDescriptionAr: 'وصلات صرف بالدفع للتوصيل السريع والآمن.',
        features: ['Tool-free push-fit installation', 'Integral rubber ring seals', 'Easy disassembly for maintenance', 'Compatible with UPVC drainage pipes'],
        featuresAr: ['تركيب بالدفع بدون أدوات', 'حلقات مطاطية مدمجة', 'سهولة التفكيك للصيانة', 'متوافقة مع أنابيب الصرف UPVC'],
        image: '/images/products/cover/upvc-drainage/fittings/Pushfit drainage fittings.png',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3) PVC HIGH PRESSURE PIPES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'pvc-high-pressure-pipes',
    name: 'PVC High Pressure Pipes',
    nameAr: 'أنابيب الضغط العالي PVC',
    shortDescription: 'ISO 4422-2 | DIN 8061/62 | BS EN ISO 1452-2 | BS 3505 | BS 3506 | ASTM D 1785 | ASTM D 2241',
    shortDescriptionAr: 'أنابيب الضغط العالي وفق ISO 4422-2 | DIN 8061/62 | BS EN ISO 1452-2 | BS 3505 | BS 3506 | ASTM D 1785 | ASTM D 2241',
    icon: '💧',
    image: '/images/products/sub_products/PVC.jpg',
    subProducts: [
      {
        slug: 'pvc-hp-pipes-iso-4422',
        name: 'PVC High Pressure Pipes ISO 4422-2:1996 (Superseded by ISO 1452-2/BS EN 1452:2009) (mm)',
        nameAr: 'أنابيب الضغط العالي PVC وفق ISO 4422-2:1996 (حلت محلها ISO 1452-2/BS EN 1452:2009) (مم)',
        shortLabel: 'ISO 4422-2:1996',
        shortLabelAr: 'ISO 4422-2:1996',
        standards: ['ISO 4422-2:1996', 'ISO 1452-2', 'BS EN 1452:2009'],
        shortDescription: 'PVC pressure pipes to ISO 4422-2:1996 standard (metric).',
        shortDescriptionAr: 'أنابيب ضغط PVC وفق معيار ISO 4422-2:1996 (متري).',
        features: ['ISO 4422-2:1996 certified', 'PN 6/10/16 pressure classes', 'Sizes 20–400 mm', 'Potable water approved', 'UV stabilised for Gulf climate'],
        featuresAr: ['معتمدة وفق ISO 4422-2:1996', 'فئات ضغط PN 6/10/16', 'مقاسات 20–400 مم', 'معتمدة لمياه الشرب', 'مثبّتة ضد الأشعة فوق البنفسجية لمناخ الخليج'],
        image: '/images/products/cover/pvc high pressure/CROWN PLASTIC PVC HIGH PRESSURE PIPE ISO 4422-21996.png',
      },
      {
        slug: 'pvc-hp-pipes-din-8061-62',
        name: 'PVC High Pressure Pipes DIN 8061/62: 2009 Equivalent to SASO 14-15: 1998 (mm)',
        nameAr: 'أنابيب الضغط العالي PVC وفق DIN 8061/62: 2009 المكافئ لـ SASO 14-15: 1998 (مم)',
        shortLabel: 'DIN 8061/62',
        shortLabelAr: 'DIN 8061/62',
        standards: ['DIN 8061', 'DIN 8062', 'SASO 14-15:1998'],
        shortDescription: 'PVC pressure pipes to DIN 8061/62 standard, equivalent to SASO 14-15 (metric).',
        shortDescriptionAr: 'أنابيب ضغط PVC وفق معيار DIN 8061/62 المكافئ لـ SASO 14-15 (متري).',
        features: ['DIN 8061/62 & SASO 14-15 certified', 'PN 4/6/10/16 classes', 'GCC & Saudi market standard', 'Chemical resistant PVC-U', 'ISO 9001:2015 production'],
        featuresAr: ['معتمدة وفق DIN 8061/62 و SASO 14-15', 'فئات PN 4/6/10/16', 'معيار أسواق الخليج والسعودية', 'PVC-U مقاوم كيميائياً', 'إنتاج معتمد ISO 9001:2015'],
        image: '/images/products/cover/pvc high pressure/CROWN PLASTIC PVC HIGH PRESSURE PIPE DIN 8061.png',
      },
      {
        slug: 'pvc-hp-pipes-bs-en-iso-1452-2',
        name: 'PVC High Pressure Pipes BS EN ISO 1452-2: 2009 (Inch)',
        nameAr: 'أنابيب الضغط العالي PVC وفق BS EN ISO 1452-2: 2009 (إنش)',
        shortLabel: 'BS EN ISO 1452-2',
        shortLabelAr: 'BS EN ISO 1452-2',
        standards: ['BS EN ISO 1452-2:2009'],
        shortDescription: 'PVC pressure pipes to BS EN ISO 1452-2:2009 standard (imperial).',
        shortDescriptionAr: 'أنابيب ضغط PVC وفق معيار BS EN ISO 1452-2:2009 (إنش).',
        features: ['BS EN ISO 1452-2:2009 certified', 'Imperial sizes ½″–12″', 'PN 9/12/15 pressure classes', 'Dubai Municipality approved', 'Potable water rated'],
        featuresAr: ['معتمدة وفق BS EN ISO 1452-2:2009', 'مقاسات إنشية ½″–12″', 'فئات ضغط PN 9/12/15', 'معتمدة من بلدية دبي', 'مصنفة لمياه الشرب'],
        image: '/images/products/cover/pvc high pressure/CROWN PLASTIC PVC HIGH PRESSURE PIPE BS EN ISO 1452-22009.png',
      },
      {
        slug: 'pvc-hp-pipes-bs-3505',
        name: 'PVC High Pressure Pipes BS 3505:1986 For Cold Potable Water (Inch)',
        nameAr: 'أنابيب الضغط العالي PVC وفق BS 3505:1986 لمياه الشرب الباردة (إنش)',
        shortLabel: 'BS 3505:1986',
        shortLabelAr: 'BS 3505:1986',
        standards: ['BS 3505:1986'],
        shortDescription: 'PVC pressure pipes to BS 3505:1986 for cold potable water supply (imperial).',
        shortDescriptionAr: 'أنابيب ضغط PVC وفق BS 3505:1986 لإمدادات مياه الشرب الباردة (إنش).',
        features: ['BS 3505:1986 — potable water approved', 'Imperial sizes ½″–12″', 'Classes up to PN 15', 'Hygiene & safety certified', 'UAE water authority compliant'],
        featuresAr: ['BS 3505:1986 — معتمدة لمياه الشرب', 'مقاسات إنشية ½″–12″', 'فئات حتى PN 15', 'معتمدة للنظافة والسلامة', 'متوافقة مع هيئات المياه الإماراتية'],
        image: '/images/products/cover/pvc high pressure/CROWN PLASTIC PVC HIGH PRESSURE PIPE BS 35051986.png',
      },
      {
        slug: 'pvc-hp-pipes-bs-3506',
        name: 'PVC High Pressure Pipes BS 3506:1969 For Industrial Uses (Inch)',
        nameAr: 'أنابيب الضغط العالي PVC وفق BS 3506:1969 للاستخدامات الصناعية (إنش)',
        shortLabel: 'BS 3506:1969',
        shortLabelAr: 'BS 3506:1969',
        standards: ['BS 3506:1969'],
        shortDescription: 'PVC pressure pipes to BS 3506:1969 for industrial applications (imperial).',
        shortDescriptionAr: 'أنابيب ضغط PVC وفق BS 3506:1969 للتطبيقات الصناعية (إنش).',
        features: ['BS 3506:1969 — industrial grade', 'Imperial sizes ½″–12″', 'Chemical processing rated', 'Classes up to PN 15', 'JAFZA/KIZAD industrial zones'],
        featuresAr: ['BS 3506:1969 — درجة صناعية', 'مقاسات إنشية ½″–12″', 'مصنفة للمعالجة الكيميائية', 'فئات حتى PN 15', 'المناطق الصناعية جافزا/كيزاد'],
        image: '/images/products/cover/pvc high pressure/CROWN PLASTIC PVC HIGH PRESSURE PIPE BS 35061969.png',
      },
      {
        slug: 'pvc-hp-pipes-astm-d1785',
        name: 'PVC High Pressure Pipes ASTM D 1785 SCH40 / SCH 80 (Inch)',
        nameAr: 'أنابيب الضغط العالي PVC وفق ASTM D 1785 جدول 40 / جدول 80 (إنش)',
        shortLabel: 'ASTM D 1785',
        shortLabelAr: 'ASTM D 1785',
        standards: ['ASTM D 1785', 'SCH 40', 'SCH 80'],
        shortDescription: 'PVC pressure pipes to ASTM D 1785 Schedule 40/80 (imperial).',
        shortDescriptionAr: 'أنابيب ضغط PVC وفق ASTM D 1785 جدول 40/80 (إنش).',
        features: ['ASTM D 1785 certified', 'Schedule 40 & Schedule 80', 'Up to 58.6 bar pressure', 'American-spec projects', 'Oil & gas auxiliary systems'],
        featuresAr: ['معتمدة وفق ASTM D 1785', 'جدول 40 وجدول 80', 'ضغط يصل إلى 58.6 بار', 'مشاريع المواصفات الأمريكية', 'الأنظمة المساعدة للنفط والغاز'],
        image: '/images/products/cover/pvc high pressure/CROWN PLASTIC PVC HIGH PRESSURE PIPE ASTM D 1785.png',
      },
      {
        slug: 'pvc-hp-pipes-astm-d2241',
        name: 'PVC High Pressure Pipes ASTM D 2241 (Inch)',
        nameAr: 'أنابيب الضغط العالي PVC وفق ASTM D 2241 (إنش)',
        shortLabel: 'ASTM D 2241',
        shortLabelAr: 'ASTM D 2241',
        standards: ['ASTM D 2241'],
        shortDescription: 'PVC pressure pipes to ASTM D 2241 standard (imperial).',
        shortDescriptionAr: 'أنابيب ضغط PVC وفق معيار ASTM D 2241 (إنش).',
        features: ['ASTM D 2241 certified', 'SDR-rated pressure classes', 'Cost-effective wall optimisation', 'Imperial sizes', 'UAE contractor preferred'],
        featuresAr: ['معتمدة وفق ASTM D 2241', 'فئات ضغط مصنفة SDR', 'تحسين اقتصادي لسماكة الجدار', 'مقاسات إنشية', 'مفضلة لدى مقاولي الإمارات'],
        image: '/images/products/cover/pvc high pressure/CROWN PLASTIC PVC HIGH PRESSURE PIPE ASTM D 2241.png',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4) PVC HIGH PRESSURE FITTINGS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'pvc-high-pressure-fittings',
    name: 'PVC High Pressure Fittings',
    nameAr: 'وصلات الضغط العالي PVC',
    shortDescription: 'DIN 8063 | BS EN 1452:3/BS 4346 (PN 15) | Valves',
    shortDescriptionAr: 'وصلات الضغط العالي وفق DIN 8063 | BS EN 1452:3/BS 4346 (PN 15) | صمامات',
    icon: '💧',
    image: '/images/products/sub_products/PVC.jpg',
    subProducts: [
      {
        slug: 'pvc-hp-fittings-din-8063',
        name: 'PVC High Pressure Fittings DIN 8063',
        nameAr: 'وصلات الضغط العالي PVC وفق DIN 8063',
        shortLabel: 'DIN 8063',
        shortLabelAr: 'DIN 8063',
        standards: ['DIN 8063'],
        shortDescription: 'PVC high pressure fittings to DIN 8063 standard.',
        shortDescriptionAr: 'وصلات ضغط عالي PVC وفق معيار DIN 8063.',
        features: ['DIN 8063 certified', 'PN 10/16 rated', 'Metric 20–200 mm', 'UAE contractor preferred', 'ISO 9001:2015 production'],
        featuresAr: ['معتمدة وفق DIN 8063', 'مصنفة PN 10/16', 'متري 20–200 مم', 'مفضلة لدى مقاولي الإمارات', 'إنتاج ISO 9001:2015'],
        image: '/images/products/cover/pvc high pressure/fittings/DIN 8063.png',
      },
      {
        slug: 'pvc-hp-fittings-bs-en-1452-3',
        name: 'PVC High Pressure Fittings BS EN 1452:3/BS 4346 (PN 15)',
        nameAr: 'وصلات الضغط العالي PVC وفق BS EN 1452:3/BS 4346 (PN 15)',
        shortLabel: 'BS EN 1452:3 / BS 4346',
        shortLabelAr: 'BS EN 1452:3 / BS 4346',
        standards: ['BS EN 1452:3', 'BS 4346', 'PN 15'],
        shortDescription: 'PVC high pressure fittings to BS EN 1452:3/BS 4346 (PN 15) standard.',
        shortDescriptionAr: 'وصلات ضغط عالي PVC وفق معيار BS EN 1452:3/BS 4346 (PN 15).',
        features: ['BS EN 1452:3 / BS 4346 certified', 'Class E / PN 15 rated', 'Imperial ½″–8″', 'Dubai Municipality approved', 'Flanges & hex nipples'],
        featuresAr: ['معتمدة BS EN 1452:3 / BS 4346', 'مصنفة فئة E / PN 15', 'إنشي ½″–8″', 'معتمدة من بلدية دبي', 'فلنجات ونيبلات سداسية'],
        image: '/images/products/cover/pvc high pressure/fittings/BS EN 14523BS 4346 PN 15.png',
      },
      {
        slug: 'pvc-hp-fittings-valves',
        name: 'PVC High Pressure Valves',
        nameAr: 'صمامات الضغط العالي PVC',
        shortLabel: 'Valves',
        shortLabelAr: 'صمامات',
        standards: ['Crown Specification'],
        shortDescription: 'PVC high pressure valves for flow control applications.',
        shortDescriptionAr: 'صمامات ضغط عالي PVC للتحكم في التدفق.',
        features: ['True union & compact ball valves', 'Precision flow control', 'UV resistant for Gulf climate', 'Metric & imperial sizes', 'ISO 9001:2015 UAE facility'],
        featuresAr: ['صمامات اتحاد حقيقي وكرة مدمجة', 'تحكم دقيق بالتدفق', 'مقاومة UV لمناخ الخليج', 'مقاسات مترية وإنشية', 'منشأة ISO 9001:2015 بالإمارات'],
        image: '/images/products/cover/pvc high pressure/fittings/valves.png',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 5) PVC SCH 40 FITTINGS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'pvc-sch-40-fittings',
    name: 'PVC SCH 40 Fittings',
    nameAr: 'وصلات PVC جدول 40',
    shortDescription: 'ASTM D 2466 Schedule 40 pressure fittings',
    shortDescriptionAr: 'وصلات ضغط جدول 40 وفق ASTM D 2466',
    icon: '🔩',
    image: '/images/products/cover/pvc high pressure/fittings/PVC SCH 40 Fittings.png',
    subProducts: [
      {
        slug: 'pvc-sch-40-fittings-astm-d2466',
        name: 'PVC SCH 40 Fittings ASTM D 2466',
        nameAr: 'وصلات PVC جدول 40 وفق ASTM D 2466',
        shortLabel: 'ASTM D 2466',
        shortLabelAr: 'ASTM D 2466',
        standards: ['ASTM D 2466', 'SCH 40'],
        shortDescription: 'PVC Schedule 40 fittings to ASTM D 2466 standard.',
        shortDescriptionAr: 'وصلات PVC جدول 40 وفق معيار ASTM D 2466.',
        features: ['ASTM D 2466 certified', 'SCH 40 pressure rated', 'Imperial ½″–8″', 'Pool & irrigation specialist', 'ISO 9001:2015 UAE facility'],
        featuresAr: ['معتمدة ASTM D 2466', 'مصنفة ضغط SCH 40', 'إنشي ½″–8″', 'متخصصة بالمسابح والري', 'منشأة ISO 9001:2015 بالإمارات'],
        image: '/images/products/cover/pvc high pressure/fittings/PVC SCH 40 Fittings.png',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 6) PVC DUCT PIPES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'pvc-duct-pipes',
    name: 'PVC Duct Pipes',
    nameAr: 'أنابيب مجاري PVC',
    shortDescription: 'NEMA TC 2 | NEMA TC 6 & 8 | DIN 8062 | Etisalat & DU | BS 3505/06 | Non-Standard',
    shortDescriptionAr: 'أنابيب مجاري وفق NEMA TC 2 | NEMA TC 6 و 8 | DIN 8062 | اتصالات ودو | BS 3505/06 | غير قياسية',
    icon: '⚡',
    image: '/images/products/sub_products/upvc-duct-orange.jpg',
    subProducts: [
      {
        slug: 'pvc-duct-pipes-nema-tc-2',
        name: 'PVC Duct Pipes NEMA TC 2: 2003',
        nameAr: 'أنابيب مجاري PVC وفق NEMA TC 2: 2003',
        shortLabel: 'NEMA TC 2',
        shortLabelAr: 'NEMA TC 2',
        standards: ['NEMA TC 2:2003'],
        shortDescription: 'PVC duct pipes to NEMA TC 2:2003 standard for electrical cable ducting.',
        shortDescriptionAr: 'أنابيب مجاري PVC وفق معيار NEMA TC 2:2003 لمجاري الكابلات الكهربائية.',
        features: ['NEMA TC 2:2003 certified', 'EPC 40 & EPC 80 grades', 'Imperial ½″–8″', 'Cable duct specialist', 'ISO 9001:2015 UAE facility'],
        featuresAr: ['معتمدة NEMA TC 2:2003', 'درجات EPC 40 و EPC 80', 'إنشي ½″–8″', 'متخصصة بمجاري الكابلات', 'منشأة ISO 9001:2015 بالإمارات'],
        image: '/images/products/cover/upvs duct/pipes/CROWN PLASTIC PVC DUCT PIPE NEMA TC 22003.png',
      },
      {
        slug: 'pvc-duct-pipes-nema-tc-6-8',
        name: 'PVC Duct Pipes NEMA TC 6 & 8/ASTM F 512',
        nameAr: 'أنابيب مجاري PVC وفق NEMA TC 6 و 8/ASTM F 512',
        shortLabel: 'NEMA TC 6 & 8',
        shortLabelAr: 'NEMA TC 6 و 8',
        standards: ['NEMA TC 6', 'NEMA TC 8', 'ASTM F 512'],
        shortDescription: 'PVC duct pipes to NEMA TC 6 & 8/ASTM F 512 standard.',
        shortDescriptionAr: 'أنابيب مجاري PVC وفق معيار NEMA TC 6 و 8/ASTM F 512.',
        features: ['NEMA TC 6 & 8 / ASTM F 512', 'EB & DB burial rated', 'Imperial 1″–6″', 'Direct & encased burial', 'GCC infrastructure approved'],
        featuresAr: ['NEMA TC 6 و 8 / ASTM F 512', 'مصنفة للدفن EB و DB', 'إنشي 1″–6″', 'دفن مباشر ومغلف', 'معتمدة للبنية التحتية بالخليج'],
        image: '/images/products/cover/upvs duct/pipes/CROWN PLASTIC PVC DUCT PIPE ASTM F512.png',
      },
      {
        slug: 'pvc-duct-pipes-din-8062',
        name: 'PVC Duct Pipes DIN 8062',
        nameAr: 'أنابيب مجاري PVC وفق DIN 8062',
        shortLabel: 'DIN 8062',
        shortLabelAr: 'DIN 8062',
        standards: ['DIN 8062'],
        shortDescription: 'PVC duct pipes to DIN 8062 standard.',
        shortDescriptionAr: 'أنابيب مجاري PVC وفق معيار DIN 8062.',
        features: ['DIN 8062 certified', 'PN 4 to PN 16 classes', 'Metric 20–315 mm', 'Multi-pressure rated', 'UAE manufactured'],
        featuresAr: ['معتمدة DIN 8062', 'فئات PN 4 إلى PN 16', 'متري 20–315 مم', 'متعددة تصنيفات الضغط', 'مصنعة في الإمارات'],
        image: '/images/products/cover/upvs duct/pipes/CROWN PLASTIC PVC DUCT PIPE DIN 8062.png',
      },
      {
        slug: 'pvc-duct-pipes-etisalat-du',
        name: 'PVC Duct Pipes For Etisalat & DU',
        nameAr: 'أنابيب مجاري PVC لاتصالات ودو',
        shortLabel: 'Etisalat & DU',
        shortLabelAr: 'اتصالات ودو',
        standards: ['Etisalat Approved', 'DU Approved'],
        shortDescription: 'PVC duct pipes approved for Etisalat and DU telecom infrastructure.',
        shortDescriptionAr: 'أنابيب مجاري PVC معتمدة للبنية التحتية لاتصالات ودو.',
        features: ['Etisalat & DU approved', 'D54/D56/D57 specifications', 'UAE telecom standard', 'Underground cable protection', 'Crown Plastic certified'],
        featuresAr: ['معتمدة من اتصالات ودو', 'مواصفات D54/D56/D57', 'معيار اتصالات الإمارات', 'حماية كابلات تحت الأرض', 'معتمدة من كراون بلاستيك'],
        image: '/images/products/cover/upvs duct/pipes/CROWN PLASTIC PVC DUCT PIPEetisalat&du.png',
      },
      {
        slug: 'pvc-duct-pipes-bs-3505-06',
        name: 'PVC Duct Pipes BS 3505/06',
        nameAr: 'أنابيب مجاري PVC وفق BS 3505/06',
        shortLabel: 'BS 3505/06',
        shortLabelAr: 'BS 3505/06',
        standards: ['BS 3505', 'BS 3506'],
        shortDescription: 'PVC duct pipes to BS 3505/06 standard.',
        shortDescriptionAr: 'أنابيب مجاري PVC وفق معيار BS 3505/06.',
        features: ['BS 3505/06 certified', 'PN 6 to PN 15 classes', 'Imperial ½″–12″', 'Class-O to Class-E', 'Dubai contractor preferred'],
        featuresAr: ['معتمدة BS 3505/06', 'فئات PN 6 إلى PN 15', 'إنشي ½″–12″', 'Class-O إلى Class-E', 'مفضلة لدى مقاولي دبي'],
        image: '/images/products/cover/upvs duct/pipes/CROWN PLASTIC PVC DUCT PIPE BS 3505.png',
      },
      {
        slug: 'pvc-duct-pipes-non-standard',
        name: 'PVC Duct Non-Standard Pipes',
        nameAr: 'أنابيب مجاري PVC غير القياسية',
        shortLabel: 'Non-Standard',
        shortLabelAr: 'غير قياسية',
        standards: ['Crown Specification'],
        shortDescription: 'Non-standard PVC duct pipes for specialized project requirements.',
        shortDescriptionAr: 'أنابيب مجاري PVC غير قياسية لمتطلبات المشاريع المتخصصة.',
        features: ['Custom sizes 75–160 mm', 'Specialized project specs', 'Crown Specification', 'UAE manufactured', 'Flexible wall thickness'],
        featuresAr: ['مقاسات مخصصة 75–160 مم', 'مواصفات مشاريع متخصصة', 'مواصفات كراون', 'مصنعة في الإمارات', 'سمك جدار مرن'],
        image: '/images/products/cover/upvs duct/pipes/CROWN PLASTIC PVC DUCT PIPEnonstandard.png',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 7) PVC DUCT FITTINGS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'pvc-duct-fittings',
    name: 'PVC Duct Fittings',
    nameAr: 'وصلات مجاري PVC',
    shortDescription: 'Duct fittings for cable protection systems',
    shortDescriptionAr: 'وصلات المجاري لأنظمة حماية الكابلات',
    icon: '⚡',
    image: '/images/products/cover/upvs duct/fittings/duct-socketa.png',
    subProducts: [
      {
        slug: 'pvc-duct-fittings-standard',
        name: 'PVC Duct Fittings',
        nameAr: 'وصلات مجاري PVC',
        shortLabel: 'Duct Fittings',
        shortLabelAr: 'وصلات المجاري',
        standards: ['Crown Specification'],
        shortDescription: 'PVC duct fittings for underground cable protection systems.',
        shortDescriptionAr: 'وصلات مجاري PVC لأنظمة حماية الكابلات تحت الأرض.',
        features: ['Etisalat & DU compliant', 'End caps, sockets, bellmouths', 'LR bends for street lighting', 'Corrosion resistant for UAE soil', 'Watertight solvent-welded joints'],
        featuresAr: ['متوافقة مع اتصالات ودو', 'أغطية ومقابس وأبواق', 'انحناءات LR لإنارة الشوارع', 'مقاومة تآكل لتربة الإمارات', 'وصلات لحام بالمذيب مانعة للتسرب'],
        image: '/images/products/cover/upvs duct/fittings/duct-socketa.png',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 8) PVC CONDUIT PIPES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'pvc-conduit-pipes',
    name: 'PVC Conduit Pipes',
    nameAr: 'أنابيب القنوات PVC',
    shortDescription: '1250N / 750N / 320N | SCH 40 | SCH 80 electrical conduit systems',
    shortDescriptionAr: 'أنظمة القنوات الكهربائية 1250N / 750N / 320N | جدول 40 | جدول 80',
    icon: '🔌',
    image: '/images/products/sub_products/upvc-conduit-sch-40.jpg',
    subProducts: [
      {
        slug: 'pvc-conduit-pipes-compression-force',
        name: 'PVC Conduit Pipes 1250N / 750N / 320N Compression Force',
        nameAr: 'أنابيب القنوات PVC بقوة ضغط 1250N / 750N / 320N',
        shortLabel: '1250N / 750N / 320N',
        shortLabelAr: '1250N / 750N / 320N',
        standards: ['1250N', '750N', '320N'],
        shortDescription: 'PVC conduit pipes rated at 1250N, 750N, and 320N compression force.',
        shortDescriptionAr: 'أنابيب قنوات PVC بتصنيف 1250N و 750N و 320N لقوة الضغط.',
        features: ['1250N / 750N / 320N grades', 'Fire-retardant PVC-U', '20–50 mm sizes', 'MEP infrastructure specialist', 'ISO 9001:2015 UAE facility'],
        featuresAr: ['درجات 1250N / 750N / 320N', 'PVC-U مقاوم للحريق', 'مقاسات 20–50 مم', 'متخصصة بالبنية التحتية MEP', 'منشأة ISO 9001:2015 بالإمارات'],
        image: '/images/products/cover/conduits/pipes/CROWN PLASTIC PVC CONDUIT PIPE 1250N.png',
      },
      {
        slug: 'pvc-conduit-pipes-sch-40',
        name: 'PVC Conduit Pipes SCH 40 CONDUIT- US',
        nameAr: 'أنابيب القنوات PVC جدول 40 - أمريكي',
        shortLabel: 'SCH 40',
        shortLabelAr: 'جدول 40',
        standards: ['SCH 40', 'UL Listed'],
        shortDescription: 'Standard Schedule 40 PVC conduit pipes for electrical installations (US standard).',
        shortDescriptionAr: 'أنابيب قنوات PVC جدول 40 القياسية للتمديدات الكهربائية (معيار أمريكي).',
        features: ['US Schedule 40 standard', '½″–6″ trade sizes', 'Optimal wall thickness', 'General-purpose conduit', 'ISO 9001:2015 certified'],
        featuresAr: ['معيار جدول 40 الأمريكي', 'مقاسات تجارية ½″–6″', 'سمك جدار مثالي', 'قنوات للأغراض العامة', 'معتمدة ISO 9001:2015'],
        image: '/images/products/cover/conduits/pipes/CROWN PLASTIC PVC CONDUIT PIPE SCH 40.png',
      },
      {
        slug: 'pvc-conduit-pipes-sch-80',
        name: 'PVC Conduit Pipes SCH 80 CONDUIT- US',
        nameAr: 'أنابيب القنوات PVC جدول 80 - أمريكي',
        shortLabel: 'SCH 80',
        shortLabelAr: 'جدول 80',
        standards: ['SCH 80', 'UL Listed'],
        shortDescription: 'Heavy-duty Schedule 80 PVC conduit pipes for electrical installations (US standard).',
        shortDescriptionAr: 'أنابيب قنوات PVC جدول 80 للخدمة الشاقة للتمديدات الكهربائية (معيار أمريكي).',
        features: ['US Schedule 80 heavy-duty', '½″–6″ trade sizes', 'Enhanced wall thickness', 'High-traffic & industrial', 'ISO 9001:2015 certified'],
        featuresAr: ['جدول 80 الأمريكي شاق', 'مقاسات تجارية ½″–6″', 'سمك جدار محسّن', 'مناطق حركة عالية وصناعية', 'معتمدة ISO 9001:2015'],
        image: '/images/products/cover/conduits/pipes/CROWN PLASTIC PVC CONDUIT PIPE SCH 80.png',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 9) PP-R PIPES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'ppr-pipes',
    name: 'PP-R Pipes',
    nameAr: 'أنابيب PP-R',
    shortDescription: 'SDR11/PN10 | SDR7.4/PN16 | SDR6/PN20 | SDR5/PN25 | DIN 8077/78',
    shortDescriptionAr: 'أنابيب PP-R وفق SDR11/PN10 | SDR7.4/PN16 | SDR6/PN20 | SDR5/PN25 | DIN 8077/78',
    icon: '🚿',
    image: '/images/products/sub_products/ppr-sdr11-pn10.jpg',
    subProducts: [
      {
        slug: 'ppr-pipes-sdr11-pn10',
        name: 'PP-R Pipes SDR11/PN10 DIN 8077/78',
        nameAr: 'أنابيب PP-R وفق SDR11/PN10 DIN 8077/78',
        shortLabel: 'SDR11 / PN10',
        shortLabelAr: 'SDR11 / PN10',
        standards: ['DIN 8077', 'DIN 8078', 'PN 10', 'SDR11'],
        shortDescription: 'PP-R pipes with 10 bar pressure rating for cold water applications.',
        shortDescriptionAr: 'أنابيب PP-R بتصنيف ضغط 10 بار لتطبيقات المياه الباردة.',
        features: ['SDR11 / PN10 rated', 'DIN 8077/78 certified', '20–110 mm', '50-year service life', 'Thermo-fusion welding'],
        featuresAr: ['مصنفة SDR11 / PN10', 'معتمدة DIN 8077/78', '20–110 مم', 'عمر خدمة 50 عاماً', 'لحام حراري'],
        image: '/images/products/cover/ppr/pipes/CROWN PLASTIC PPR PIPE SDR11 PN10.png',
      },
      {
        slug: 'ppr-pipes-sdr7-4-pn16',
        name: 'PP-R Pipes SDR7.4/PN16 DIN 8077/78',
        nameAr: 'أنابيب PP-R وفق SDR7.4/PN16 DIN 8077/78',
        shortLabel: 'SDR7.4 / PN16',
        shortLabelAr: 'SDR7.4 / PN16',
        standards: ['DIN 8077', 'DIN 8078', 'PN 16', 'SDR7.4'],
        shortDescription: 'PP-R pipes with 16 bar pressure rating for hot and cold water systems.',
        shortDescriptionAr: 'أنابيب PP-R بتصنيف ضغط 16 بار لأنظمة المياه الساخنة والباردة.',
        features: ['SDR7.4 / PN16 rated', 'Hot & cold water', 'DIN 8077/78 certified', '20–110 mm', 'HVAC compatible'],
        featuresAr: ['مصنفة SDR7.4 / PN16', 'مياه ساخنة وباردة', 'معتمدة DIN 8077/78', '20–110 مم', 'متوافقة مع HVAC'],
        image: '/images/products/cover/ppr/pipes/CROWN PLASTIC PPR PIPE SDR7.4 PN16.png',
      },
      {
        slug: 'ppr-pipes-sdr6-pn20',
        name: 'PP-R Pipes SDR6/PN20 DIN 8077/78',
        nameAr: 'أنابيب PP-R وفق SDR6/PN20 DIN 8077/78',
        shortLabel: 'SDR6 / PN20',
        shortLabelAr: 'SDR6 / PN20',
        standards: ['DIN 8077', 'DIN 8078', 'PN 20', 'SDR6'],
        shortDescription: 'PP-R pipes with 20 bar pressure rating for demanding applications.',
        shortDescriptionAr: 'أنابيب PP-R بتصنيف ضغط 20 بار للتطبيقات المتطلبة.',
        features: ['SDR6 / PN20 high-pressure', 'Hot & cold 20 bar', 'DIN 8077/78 certified', '20–110 mm', 'Industrial grade'],
        featuresAr: ['ضغط عالي SDR6 / PN20', 'ساخن وبارد 20 بار', 'معتمدة DIN 8077/78', '20–110 مم', 'درجة صناعية'],
        image: '/images/products/cover/ppr/pipes/CROWN PLASTIC PPR PIPE SDR11 PN20.png',
      },
      {
        slug: 'ppr-pipes-sdr5-pn25',
        name: 'PP-R Pipes SDR5/PN25 DIN 8077/78',
        nameAr: 'أنابيب PP-R وفق SDR5/PN25 DIN 8077/78',
        shortLabel: 'SDR5 / PN25',
        shortLabelAr: 'SDR5 / PN25',
        standards: ['DIN 8077', 'DIN 8078', 'PN 25', 'SDR5'],
        shortDescription: 'PP-R pipes with 25 bar pressure rating for high-pressure applications.',
        shortDescriptionAr: 'أنابيب PP-R بتصنيف ضغط 25 بار لتطبيقات الضغط العالي.',
        features: ['SDR5 / PN25 maximum pressure', '25 bar rated', 'DIN 8077/78 certified', 'Critical infrastructure', 'Contact for specs'],
        featuresAr: ['ضغط أقصى SDR5 / PN25', 'مصنفة 25 بار', 'معتمدة DIN 8077/78', 'بنية تحتية حرجة', 'تواصل للمواصفات'],
        image: '/images/products/cover/ppr/pipes/CROWN PLASTIC PPR PIPE SDR5 PN25.png',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 10) HDPE PIPES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'hdpe-pipes',
    name: 'HDPE Pipes',
    nameAr: 'أنابيب HDPE',
    shortDescription: 'PE63 | PE80 | PE100 | DIN 8072 | ASAE S435 | AUST STD 2698-1 | BS 1972/67',
    shortDescriptionAr: 'أنابيب HDPE وفق PE63 | PE80 | PE100 | DIN 8072 | ASAE S435 | AUST STD 2698-1 | BS 1972/67',
    icon: '🌊',
    image: '/images/products/sub_products/HDPE.jpg',
    subProducts: [
      {
        slug: 'hdpe-pipes-5mpa-pe63',
        name: 'HDPE Pipes 5 MPa (PE63)',
        nameAr: 'أنابيب HDPE بضغط 5 ميجاباسكال (PE63)',
        shortLabel: '5 MPa (PE63)',
        shortLabelAr: '5 MPa (PE63)',
        standards: ['PE63', '5 MPa'],
        shortDescription: 'HDPE pipes rated at 5 MPa (PE63 grade).',
        shortDescriptionAr: 'أنابيب HDPE بتصنيف 5 ميجاباسكال (درجة PE63).',
        features: ['PE63 grade — 5 MPa', 'ISO 4427 / DIN 8074', 'SDR 7.4 to SDR 33', 'dn 16–400 mm', '100% virgin polyethylene'],
        featuresAr: ['درجة PE63 — 5 ميجاباسكال', 'معتمدة ISO 4427 / DIN 8074', 'SDR 7.4 إلى SDR 33', 'dn 16–400 مم', 'بولي إيثيلين خام 100%'],
        image: '/images/products/cover/hdpe/pipes/CROWN PLASTIC HDPE PIPE PE63.png',
      },
      {
        slug: 'hdpe-pipes-6-3mpa-pe80',
        name: 'HDPE Pipes 6.3 MPa (PE80)',
        nameAr: 'أنابيب HDPE بضغط 6.3 ميجاباسكال (PE80)',
        shortLabel: '6.3 MPa (PE80)',
        shortLabelAr: '6.3 MPa (PE80)',
        standards: ['PE80', '6.3 MPa'],
        shortDescription: 'HDPE pipes rated at 6.3 MPa (PE80 grade).',
        shortDescriptionAr: 'أنابيب HDPE بتصنيف 6.3 ميجاباسكال (درجة PE80).',
        features: ['PE80 grade — 6.3 MPa', 'ISO 4427 / DIN 8074', 'Water & gas networks', 'HDD trenchless compatible', '50-year service life'],
        featuresAr: ['درجة PE80 — 6.3 ميجاباسكال', 'معتمدة ISO 4427 / DIN 8074', 'شبكات مياه وغاز', 'متوافقة مع الحفر الأفقي HDD', 'عمر خدمة 50 عاماً'],
        image: '/images/products/cover/hdpe/pipes/CROWN PLASTIC HDPE PIPE PE80.png',
      },
      {
        slug: 'hdpe-pipes-8mpa-pe100',
        name: 'HDPE Pipes 8 MPa (PE100)',
        nameAr: 'أنابيب HDPE بضغط 8 ميجاباسكال (PE100)',
        shortLabel: '8 MPa (PE100)',
        shortLabelAr: '8 MPa (PE100)',
        standards: ['PE100', '8 MPa'],
        shortDescription: 'HDPE pipes rated at 8 MPa (PE100 grade).',
        shortDescriptionAr: 'أنابيب HDPE بتصنيف 8 ميجاباسكال (درجة PE100).',
        features: ['PE100 grade — 8 MPa', 'Highest design stress', 'SDR 11 to SDR 17', 'dn 32–400 mm', 'High-pressure gas & water'],
        featuresAr: ['درجة PE100 — 8 ميجاباسكال', 'أعلى إجهاد تصميم', 'SDR 11 إلى SDR 17', 'dn 32–400 مم', 'غاز ومياه ضغط عالي'],
        image: '/images/products/cover/hdpe/pipes/CROWN PLASTIC HDPE PIPE PE100.png',
      },
      {
        slug: 'hdpe-pipes-din-8072',
        name: 'HDPE Pipes DIN 8072',
        nameAr: 'أنابيب HDPE وفق DIN 8072',
        shortLabel: 'DIN 8072',
        shortLabelAr: 'DIN 8072',
        standards: ['DIN 8072'],
        shortDescription: 'HDPE pipes to DIN 8072 standard.',
        shortDescriptionAr: 'أنابيب HDPE وفق معيار DIN 8072.',
        features: ['DIN 8072 LLDPE', '2.5 to 10 bar', '10–110 mm', 'Agricultural irrigation', 'UAE manufactured'],
        featuresAr: ['معتمدة DIN 8072 LLDPE', '2.5 إلى 10 بار', '10–110 مم', 'الري الزراعي', 'مصنعة في الإمارات'],
        image: '/images/products/cover/hdpe/pipes/CROWN PLASTIC HDPE PIPE DIN 8072.png',
      },
      {
        slug: 'hdpe-pipes-asae-s435',
        name: 'HDPE Pipes ASAE S435',
        nameAr: 'أنابيب HDPE وفق ASAE S435',
        shortLabel: 'ASAE S435',
        shortLabelAr: 'ASAE S435',
        standards: ['ASAE S435'],
        shortDescription: 'HDPE pipes to ASAE S435 standard for agricultural applications.',
        shortDescriptionAr: 'أنابيب HDPE وفق معيار ASAE S435 للتطبيقات الزراعية.',
        features: ['ASAE S435 certified', 'Drip tubing ½″–1″', 'Precision irrigation', 'Up to 4.8 bar', 'UAE agriculture'],
        featuresAr: ['معتمدة ASAE S435', 'أنابيب تنقيط ½″–1″', 'ري دقيق', 'حتى 4.8 بار', 'زراعة الإمارات'],
        image: '/images/products/cover/hdpe/pipes/CROWN PLASTIC HDPE PIPE ASAE S435.png',
      },
      {
        slug: 'hdpe-pipes-aust-std-2698',
        name: 'HDPE Pipes AUST STD 2698-1: 1984',
        nameAr: 'أنابيب HDPE وفق المعيار الأسترالي 2698-1: 1984',
        shortLabel: 'AUST STD 2698-1',
        shortLabelAr: 'AUST STD 2698-1',
        standards: ['AUST STD 2698-1:1984'],
        shortDescription: 'HDPE pipes to Australian Standard 2698-1:1984.',
        shortDescriptionAr: 'أنابيب HDPE وفق المعيار الأسترالي 2698-1:1984.',
        features: ['AUST STD 2698-1:1984', '250 m coils', 'Drip irrigation', '3–4 bar working pressure', 'Large-scale farming'],
        featuresAr: ['المعيار الأسترالي 2698-1:1984', 'لفات 250 متر', 'ري بالتنقيط', 'ضغط تشغيل 3–4 بار', 'زراعة واسعة النطاق'],
        image: '/images/products/cover/hdpe/pipes/CROWN PLASTIC HDPE PIPE AUST STD 2698-11984.png',
      },
      {
        slug: 'hdpe-pipes-bs-1972-67',
        name: 'HDPE Pipes BS 1972/67',
        nameAr: 'أنابيب HDPE وفق BS 1972/67',
        shortLabel: 'BS 1972/67',
        shortLabelAr: 'BS 1972/67',
        standards: ['BS 1972/67'],
        shortDescription: 'HDPE pipes to BS 1972/67 standard.',
        shortDescriptionAr: 'أنابيب HDPE وفق معيار BS 1972/67.',
        features: ['BS 1972/67 LDPE', 'Class B, C, D', '⅔″–4″', 'Low-to-medium pressure', 'Irrigation & water'],
        featuresAr: ['معتمدة BS 1972/67 LDPE', 'فئة B و C و D', '⅔″–4″', 'ضغط منخفض إلى متوسط', 'ري ومياه'],
        image: '/images/products/cover/hdpe/pipes/CROWN PLASTIC HDPE PIPE BS 1972.png',
      },
      {
        slug: 'polyethylene-pipe-rolls',
        name: 'Polyethylene Pipe Rolls (Class C / HD)',
        nameAr: 'لفات أنابيب البولي إيثيلين (الفئة C / HD)',
        shortLabel: 'Polyethylene Rolls',
        shortLabelAr: 'لفات بولي إيثيلين',
        standards: ['Class C', 'HD'],
        shortDescription: 'High-density polythene (HDPE) pipe rolls designed for flexible, long-distance agricultural, irrigation, and industrial fluid distribution.',
        shortDescriptionAr: 'لفات أنابيب بولي إيثيلين عالي الكثافة (HDPE) مصممة للتوزيع المرن للسوائل لمسافات طويلة في الزراعة والري والصناعة.',
        features: ['High flexibility for easy installation', 'Excellent resistance to environmental stress cracking', 'UV stabilized for outdoor deployment', 'Continuous lengths', 'Leak-free performance'],
        featuresAr: ['مرونة عالية لسهولة التركيب', 'مقاومة ممتازة للتشقق بسبب الإجهاد البيئي', 'مثبتة ضد الأشعة فوق البنفسجية للاستخدام الخارجي', 'أطوال مستمرة', 'أداء مانع للتسرب'],
        image: '/images/products/sub_products/HDPE.jpg',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 11) PEX PIPES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'pex-pipes',
    name: 'PEX Pipes',
    nameAr: 'أنابيب PEX',
    shortDescription: 'PN 12.5 & PN 20 cross-linked polyethylene pipe systems',
    shortDescriptionAr: 'أنظمة أنابيب البولي إيثيلين المتشابك PEX وفق PN 12.5 و PN 20',
    icon: '🔴',
    image: '/images/products/cover/pex/pipes/pex.png',
    subProducts: [
      {
        slug: 'pex-pipes-pn-12-5-pn-20',
        name: 'PEX Pipes PN 12.5 & PN 20',
        nameAr: 'أنابيب PEX وفق PN 12.5 و PN 20',
        shortLabel: 'PN 12.5 & PN 20',
        shortLabelAr: 'PN 12.5 و PN 20',
        standards: ['PN 12.5', 'PN 20'],
        shortDescription: 'Cross-linked polyethylene (PEX) pipes rated at PN 12.5 and PN 20.',
        shortDescriptionAr: 'أنابيب البولي إيثيلين المتشابك (PEX) بتصنيف PN 12.5 و PN 20.',
        features: ['PN 12.5 & PN 20 rated', 'DIN 16892/16893 certified', 'Up to 95°C hot water', 'Underfloor heating specialist', '50-year service life'],
        featuresAr: ['مصنفة PN 12.5 و PN 20', 'معتمدة DIN 16892/16893', 'مياه ساخنة حتى 95°C', 'متخصصة بالتدفئة تحت الأرضية', 'عمر خدمة 50 عاماً'],
        image: '/images/products/cover/pex/pipes/pex.png',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 12) FABRICATIONS & ACCESSORIES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'fabrications-accessories',
    name: 'Fabrications & Accessories',
    nameAr: 'التصنيعات والإكسسوارات',
    shortDescription: 'Grease Traps Types A-D | Custom Fabrications | Dubai Municipality Approved',
    shortDescriptionAr: 'مصائد الدهون أنواع A-D | تصنيعات مخصصة | معتمدة من بلدية دبي',
    icon: '🏭',
    image: '/images/products/cover/fabrication/grease-trap-type-a.png',
    subProducts: [
      {
        slug: 'fabrication-grease-trap-type-a',
        name: 'PVC/UPVC Fabrication Grease Trap Type - A',
        nameAr: 'مصيدة الدهون PVC/UPVC النوع A',
        shortLabel: 'Type A',
        shortLabelAr: 'النوع A',
        standards: ['Dubai Municipality Approved', 'ISO 9001:2015'],
        shortDescription: 'Single bucket grease trap (450mm deep) with GRP sealed cover.',
        shortDescriptionAr: 'مصيدة دهون بدلو واحد (عمق 450 مم) مع غطاء GRP محكم.',
        features: ['Custom build to site specs', 'Dubai Municipality approved', '450mm deep PVC bucket', 'GRP sealed cover', 'Neoprene gasket seal'],
        featuresAr: ['تصنيع حسب مواصفات الموقع', 'معتمدة من بلدية دبي', 'دلو PVC بعمق 450 مم', 'غطاء GRP محكم', 'حشية نيوبرين'],
        image: '/images/products/cover/fabrication/grease-trap-type-a.png',
      },
      {
        slug: 'fabrication-grease-trap-type-b',
        name: 'PVC/UPVC Fabrication Grease Trap Type - B',
        nameAr: 'مصيدة الدهون PVC/UPVC النوع B',
        shortLabel: 'Type B',
        shortLabelAr: 'النوع B',
        standards: ['Dubai Municipality Approved', 'ISO 9001:2015'],
        shortDescription: 'Dual bucket grease trap (260mm deep each) with lifting handles.',
        shortDescriptionAr: 'مصيدة دهون بدلوين (عمق 260 مم لكل منهما) مع مقابض رفع.',
        features: ['Twin bucket design', 'Dubai Municipality approved', '260mm deep each', '3-unit GRP cover', 'High-capacity kitchen use'],
        featuresAr: ['تصميم دلو مزدوج', 'معتمدة من بلدية دبي', 'عمق 260 مم لكل منهما', 'غطاء GRP من 3 قطع', 'استخدام مطابخ عالية السعة'],
        image: '/images/products/cover/fabrication/grease-trap-type-b.png',
      },
      {
        slug: 'fabrication-grease-trap-type-c',
        name: 'PVC/UPVC Fabrication Grease Trap Type - C',
        nameAr: 'مصيدة الدهون PVC/UPVC النوع C',
        shortLabel: 'Type C',
        shortLabelAr: 'النوع C',
        standards: ['Dubai Municipality Approved', 'ISO 9001:2015'],
        shortDescription: 'Large baffle grease trap (1980mm length) for high-capacity applications.',
        shortDescriptionAr: 'مصيدة دهون كبيرة بحواجز (طول 1980 مم) لتطبيقات السعة العالية.',
        features: ['Large-capacity baffle', 'Dubai Municipality approved', '5-row perforated bucket', 'Neoprene sealed', 'Industrial MEP projects'],
        featuresAr: ['حاجز كبير السعة', 'معتمدة من بلدية دبي', 'دلو مثقب 5 صفوف', 'محكمة بالنيوبرين', 'مشاريع MEP صناعية'],
        image: '/images/products/cover/fabrication/grease-trap-type-c.png',
      },
      {
        slug: 'fabrication-grease-trap-type-d',
        name: 'PVC/UPVC Fabrication Grease Trap Type - D',
        nameAr: 'مصيدة الدهون PVC/UPVC النوع D',
        shortLabel: 'Type D',
        shortLabelAr: 'النوع D',
        standards: ['Dubai Municipality Approved', 'ISO 9001:2015'],
        shortDescription: 'Compact grease trap with GRP cover secured by 24 wing nuts.',
        shortDescriptionAr: 'مصيدة دهون مدمجة مع غطاء GRP مثبت بـ 24 صامولة فراشية.',
        features: ['Compact design', 'Dubai Municipality approved', '2″ PVC waste inlet', '600×450mm PVC cover', '24 wing nut secured'],
        featuresAr: ['تصميم مدمج', 'معتمدة من بلدية دبي', 'مدخل مخلفات PVC 2″', 'غطاء PVC بمقاس 600×450 مم', 'مثبت بـ 24 صامولة فراشية'],
        image: '/images/products/cover/fabrication/grease-trap-type-d.png',
      },
      {
        slug: 'fabrication-accessories',
        name: 'PVC/UPVC Fabrication Accessories',
        nameAr: 'إكسسوارات التصنيع PVC/UPVC',
        shortLabel: 'Accessories',
        shortLabelAr: 'الإكسسوارات',
        standards: ['Crown Specification'],
        shortDescription: 'Custom PVC/UPVC fabrication accessories for specialized projects.',
        shortDescriptionAr: 'إكسسوارات تصنيع PVC/UPVC مخصصة للمشاريع المتخصصة.',
        features: ['Duct caps & sockets', 'Bellmouths & LR bends', 'Brass hardware', 'Custom fabrication', 'UAE telecom & electrical'],
        featuresAr: ['أغطية ووصلات قنوات', 'فتحات جرس وانحناءات', 'عتاد نحاسي', 'تصنيع مخصص', 'اتصالات وكهرباء الإمارات'],
        image: '/images/fabrications/fabrications-cover-composite.jpg',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 13) SOLVENTS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'solvents',
    name: 'Solvents',
    nameAr: 'المذيبات',
    shortDescription: 'PVC solvent cements for pipe jointing',
    shortDescriptionAr: 'أسمنت مذيب PVC لوصل الأنابيب',
    icon: '🧴',
    image: '/images/products/sub_products/PVC.jpg',
    subProducts: [
      {
        slug: 'pvc-solvents',
        name: 'PVC Solvents',
        nameAr: 'مذيبات PVC',
        shortLabel: 'PVC Solvents',
        shortLabelAr: 'مذيبات PVC',
        standards: ['Crown Specification'],
        shortDescription: 'PVC solvent cements for secure and durable pipe joints.',
        shortDescriptionAr: 'أسمنت مذيب PVC للوصلات الآمنة والمتينة.',
        features: [],
        featuresAr: [],
        image: '/images/products/cover/solvent/Solventcover.png',
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
