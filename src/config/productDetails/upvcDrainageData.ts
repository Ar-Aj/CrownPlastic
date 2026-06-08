/**
 * UPVC Drainage Pipes - Product Detail Configurations (NEW TAXONOMY)
 *
 * Maps to the NEW product catalog slugs from src/config/products.ts:
 *   1. upvc-drainage-pipes-bs5255-bs-en-1329  (Above Ground: BS 5255/BS EN 1329-1:2014)
 *   2. upvc-drainage-pipes-bs-en-1401         (Underground: BS EN 1401-1)
 *   3. upvc-drainage-pipes-non-standard        (Non-Standard)
 *
 * This file replaces the OLD drainageData.ts slug mappings while preserving
 * the existing BS EN 1329 fittings data for re-use.
 */

import { type ProductDetailConfig } from '@/types/productDetail';

// ═══════════════════════════════════════════════════════════════════════════════
// RE-IMPORT FITTINGS FROM EXISTING DATA
// The fittings catalogues remain identical — they describe the same hardware.
// ═══════════════════════════════════════════════════════════════════════════════

// We inline the fittings reference here.  The existing drainageData.ts
// will continue to serve as a secondary reference until fully deprecated.

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED CONTENT: UPVC Drainage Pipes category-wide copy
// ═══════════════════════════════════════════════════════════════════════════════

const SHARED_FEATURES = [
  'High impact resistance for long-service installations in extreme Gulf temperatures',
  'Smooth internal bore prevents scaling and blockages',
  'Chemical and corrosion resistant — unaffected by UAE soil and groundwater conditions',
  'Lightweight yet rigid for easy handling and installation',
  'Solvent cement and ring-seal jointing options',
  'UV stabilised formulation for Middle East outdoor exposure',
  'ISO 9001:2015 certified production at our Umm Al Quwain, UAE facility',
  '50+ year expected service life — trusted by GCC contractors',
];
const SHARED_FEATURESFr = [
  'High impact resistance for long-service installations in extreme Gulf temperatures',
  'Smooth internal bore prevents scaling and blockages',
  'Chemical and corrosion resistant — unaffected by UAE soil and groundwater conditions',
  'Lightweight yet rigid for easy handling and installation',
  'Solvent cement and ring-seal jointing options',
  'UV stabilised formulation for Middle East outdoor exposure',
  'ISO 9001:2015 certified production at our Umm Al Quwain, UAE facility',
  '50+ year expected service life — trusted by GCC contractors',
];

const SHARED_FEATURESAr = [
  'مقاومة صدمات عالية للتركيبات طويلة الخدمة في درجات حرارة الخليج القصوى',
  'تجويف داخلي أملس يمنع التكلس والانسدادات',
  'مقاوم للمواد الكيميائية والتآكل — غير متأثر بظروف التربة والمياه الجوفية في الإمارات',
  'خفيف الوزن وصلب لسهولة المناولة والتركيب',
  'خيارات اللحام بالمذيب ووصلات الحلقة المانعة',
  'تركيبة مثبّتة ضد الأشعة فوق البنفسجية لظروف الشرق الأوسط',
  'إنتاج معتمد بمعيار ISO 9001:2015 في منشأتنا بأم القيوين، الإمارات',
  'عمر خدمة متوقع يزيد عن 50 سنة — موثوقة من مقاولي الخليج',
];

const SHARED_APPLICATIONS = [
  'Above-ground soil and waste discharge systems across the UAE',
  'Underground sewerage networks for Dubai and Abu Dhabi developments',
  'Rainwater drainage systems suited to Gulf climate conditions',
  'Building internal drainage stacks',
  'Commercial and residential plumbing in the GCC',
  'Hospital and hotel sanitary systems',
  'Industrial effluent disposal in UAE free zones',
  'Town planning and municipal infrastructure projects',
];
const SHARED_APPLICATIONSFr = [
  'Above-ground soil and waste discharge systems across the UAE',
  'Underground sewerage networks for Dubai and Abu Dhabi developments',
  'Rainwater drainage systems suited to Gulf climate conditions',
  'Building internal drainage stacks',
  'Commercial and residential plumbing in the GCC',
  'Hospital and hotel sanitary systems',
  'Industrial effluent disposal in UAE free zones',
  'Town planning and municipal infrastructure projects',
];

const SHARED_APPLICATIONSAr = [
  'أنظمة تصريف التربة والنفايات فوق الأرض في الإمارات',
  'شبكات الصرف الصحي تحت الأرض لمشاريع دبي وأبوظبي',
  'أنظمة تصريف مياه الأمطار المناسبة لمناخ الخليج',
  'أعمدة الصرف الداخلية للمباني',
  'السباكة التجارية والسكنية في دول الخليج',
  'الأنظمة الصحية للمستشفيات والفنادق',
  'التخلص من النفايات الصناعية في المناطق الحرة الإماراتية',
  'مشاريع التخطيط العمراني والبنية التحتية البلدية',
];

const SHARED_DOS_DONTS = {
  dos: [
    'Use appropriate solvent cement grade for the pipe class',
    'Allow for thermal expansion in long horizontal runs',
    'Use correct chamfering tools before jointing',
    'Support pipes at manufacturer-recommended intervals',
  ],
  donts: [
    'Do not drop pipes from heights — impact damage may be invisible',
    'Do not use incompatible solvents or adhesives',
    'Do not expose stored pipes to prolonged direct sunlight',
    'Do not exceed the recommended temperature limit of 60 °C',
  ],
};
const SHARED_DOS_DONTSFr = {
  dos: [
    'Use appropriate solvent cement grade for the pipe class',
    'Allow for thermal expansion in long horizontal runs',
    'Use correct chamfering tools before jointing',
    'Support pipes at manufacturer-recommended intervals',
  ],
  donts: [
    'Do not drop pipes from heights — impact damage may be invisible',
    'Do not use incompatible solvents or adhesives',
    'Do not expose stored pipes to prolonged direct sunlight',
    'Do not exceed the recommended temperature limit of 60 °C',
  ],
};

const SHARED_DOS_DONTSAr = {
  dos: [
    'استخدم الدرجة المناسبة من أسمنت المذيب لفئة الأنبوب',
    'اسمح بالتمدد الحراري في المسارات الأفقية الطويلة',
    'استخدم أدوات الشطف الصحيحة قبل الوصل',
    'ادعم الأنابيب على فترات موصى بها من الشركة المصنعة',
  ],
  donts: [
    'لا تسقط الأنابيب من ارتفاعات — قد يكون ضرر الصدم غير مرئي',
    'لا تستخدم مذيبات أو لاصقات غير متوافقة',
    'لا تعرّض الأنابيب المخزنة لأشعة الشمس المباشرة لفترات طويلة',
    'لا تتجاوز حد درجة الحرارة الموصى به وهو 60 درجة مئوية',
  ],
};


// ═══════════════════════════════════════════════════════════════════════════════
// 1) BS 5255 / BS EN 1329-1:2014 — Above Ground Soil & Waste Pipes
// ═══════════════════════════════════════════════════════════════════════════════

export const upvcDrainagePipesBs5255BsEn1329: ProductDetailConfig = {
  slug: 'upvc-drainage-pipes-bs5255-bs-en-1329',
  categorySlug: 'upvc-drainage-pipes',

  title: 'UPVC Drainage Pipes BS 5255/BS EN 1329-1:2014 & BS 4514/BS EN 1329-1:2014',
  titleAr: 'أنابيب الصرف UPVC وفق BS 5255/BS EN 1329-1:2014 و BS 4514/BS EN 1329-1:2014',
    titleFr: `UPVC Tuyaux de drainage BS 5255/BS EN 1329-1:2014 et BS 4514/BS EN 1329-1:2014`,
    shortDescription: 'Above-ground soil and waste discharge drainage pipes certified to BS 5255/BS EN 1329-1:2014 & BS 4514/BS EN 1329-1:2014.',
  shortDescriptionAr: 'أنابيب الصرف فوق الأرض لتصريف التربة والنفايات معتمدة وفق BS 5255/BS EN 1329-1:2014 و BS 4514/BS EN 1329-1:2014.',
    shortDescriptionFr: `Tuyaux de drainage hors sol des sols et des déchets certifiés BS 5255/BS EN 1329-1:2014 et BS 4514/BS EN 1329-1:2014.`,
    overview: `Crown Plastic Pipes / Fittings, a leading UPVC drainage pipe manufacturer in the UAE, produces a comprehensive range conforming to BS 5255/BS EN 1329-1:2014 and BS 4514/BS EN 1329-1:2014 standards. Engineered for above-ground soil and waste discharge applications, these pipes deliver exceptional durability, chemical resistance, and a smooth internal bore that prevents scaling and blockage build-up. The range covers nominal sizes from 1¼″ through 6″, making it the preferred specification for residential, commercial, and institutional drainage installations across the UAE.`,
  overviewAr: `تصنّع كراون للأنابيب والوصلات البلاستيكية، الشركة الرائدة في تصنيع أنابيب الصرف UPVC في الإمارات، مجموعة شاملة من أنابيب الصرف المطابقة لمعايير BS 5255/BS EN 1329-1:2014 و BS 4514/BS EN 1329-1:2014. مصممة لتطبيقات تصريف التربة والنفايات فوق الأرض، توفر هذه الأنابيب متانة استثنائية ومقاومة كيميائية وتجويفاً داخلياً أملس يمنع التكلس وتراكم الانسدادات. يغطي النطاق المقاسات الاسمية من 1¼″ إلى 6″، مما يجعلها المواصفة المفضلة للتركيبات السكنية والتجارية والمؤسسية في دبي وأبوظبي ومنطقة الخليج.`,
    overviewFr: `Crown Plastic Pipes/Raccords, l'un des principaux fabricants de tuyaux de drainage UPVC dans le UAE, propose une gamme complète conforme aux normes BS 5255/BS EN 1329-1:2014 et BS 4514/BS EN 1329-1:2014. Conçus pour les applications de décharge de sol et de déchets en surface, ces tuyaux offrent une durabilité exceptionnelle, une résistance chimique et un alésage interne lisse qui empêche l'accumulation de tartre et de blocage. La gamme couvre les tailles nominales de 1¼″ à 6″, ​​ce qui en fait la spécification préférée pour les installations de drainage résidentielles, commerciales et institutionnelles à travers le UAE.`,
    features: SHARED_FEATURES,
  featuresAr: SHARED_FEATURESAr,
    featuresFr: SHARED_FEATURESFr,
    applications: SHARED_APPLICATIONS,
  applicationsAr: SHARED_APPLICATIONSAr,
    applicationsFr: SHARED_APPLICATIONSFr,
    // ───────────────────────────────────────────────────────────────────────────
  // Pipe Specification Tables
  // ───────────────────────────────────────────────────────────────────────────
  pipesTables: [
    // Table 1: BS 5255 / BS EN 1329-1:2014 (smaller sizes)
    {
      id: 'bs-5255-bs-en-1329-pipes',
      title: 'Above Ground Soil & Waste Pipes: BS 5255/BS EN 1329-1:2014',
      columns: [
        { key: 'size', label: 'Nominal Size (Inch)' },
        { key: 'odMin', label: 'Min', groupLabel: 'Mean Outside Dia. (mm)', colSpan: 2 },
        { key: 'odMax', label: 'Max', groupLabel: 'Mean Outside Dia. (mm)' },
        { key: 'wtMin', label: 'Min', groupLabel: 'Mean Wall Thickness (mm)', colSpan: 2 },
        { key: 'wtMax', label: 'Max', groupLabel: 'Mean Wall Thickness (mm)' },
      ],
      rows: [
        { size: '1 1/4"', odMin: '36.15', odMax: '36.45', wtMin: '1.8', wtMax: '2.2' },
        { size: '1 1/2"', odMin: '42.75', odMax: '43.05', wtMin: '1.9', wtMax: '2.3' },
        { size: '2"',     odMin: '55.85', odMax: '56.05', wtMin: '2.0', wtMax: '2.4' },
      ],
    },
    // Table 2: BS 4514 / BS EN 1329-1:2014 (larger sizes)
    {
      id: 'bs-4514-bs-en-1329-pipes',
      title: 'Above Ground Soil & Waste Pipes: BS 4514/BS EN 1329-1:2014',
      columns: [
        { key: 'size', label: 'Nominal Size (Inch)' },
        { key: 'odMin', label: 'Min', groupLabel: 'Mean Outside Dia. (mm)', colSpan: 2 },
        { key: 'odMax', label: 'Max', groupLabel: 'Mean Outside Dia. (mm)' },
        { key: 'wtMin', label: 'Min', groupLabel: 'Mean Wall Thickness (mm)', colSpan: 2 },
        { key: 'wtMax', label: 'Max', groupLabel: 'Mean Wall Thickness (mm)' },
      ],
      rows: [
        { size: '3"', odMin: '82.00',  odMax: '82.35',  wtMin: '3.2', wtMax: '3.5' },
        { size: '4"', odMin: '110.00', odMax: '110.32', wtMin: '3.2', wtMax: '3.8' },
        { size: '6"', odMin: '160.00', odMax: '160.45', wtMin: '3.2', wtMax: '3.8' },
      ],
    },
  ],

  // No fittings on a "pipes" page — fittings are in a separate category
    dosDontsFr: SHARED_DOS_DONTSFr,
    fittings: [],

  downloads: [
    { label: 'UPVC Drainage Pipes Catalogue (PDF)', href: '/pdfs/UPVC%20DRAINAGE%20PIPES.pdf' },
  ],

  dosDonts: SHARED_DOS_DONTS,
  dosDontsAr: SHARED_DOS_DONTSAr,
};


// ═══════════════════════════════════════════════════════════════════════════════
// 2) BS EN 1401-1 — Underground Drainage & Sewerage Pipes
// ═══════════════════════════════════════════════════════════════════════════════

export const upvcDrainagePipesBsEn1401: ProductDetailConfig = {
  slug: 'upvc-drainage-pipes-bs-en-1401',
  categorySlug: 'upvc-drainage-pipes',

  title: 'UPVC Drainage Pipes BS EN 1401-1 (BS 4660 & BS 5481)',
  titleAr: 'أنابيب الصرف UPVC وفق BS EN 1401-1 (BS 4660 و BS 5481)',
    titleFr: `UPVC Tuyaux de drainage BS EN 1401-1 (BS 4660 & BS 5481)`,
    shortDescription: 'Underground drainage pipes certified to BS EN 1401-1 (supersedes BS 4660 & BS 5481).',
  shortDescriptionAr: 'أنابيب الصرف تحت الأرض معتمدة وفق BS EN 1401-1 (تحل محل BS 4660 و BS 5481).',
    shortDescriptionFr: `Tuyaux de drainage souterrains certifiés BS EN 1401-1 (remplace BS 4660 et BS 5481).`,
    overview: `Crown Plastic Pipes / Fittings, a trusted supplier in Dubai and Abu Dhabi, produces a full range of UPVC underground drainage pipes conforming to BS EN 1401-1, the European standard that supersedes both BS 4660 and BS 5481. Manufactured from 100% virgin PVC-U compound with high ring stiffness at our ISO 9001:2015 certified facility in Umm Al Quwain, these orange-coloured pipes are purpose-built for underground sewerage, foul water, and stormwater networks. Available in sizes from 3″ to 12″, they offer long-term structural integrity under the varying soil and traffic loading conditions found across the UAE and GCC.`,
  overviewAr: `تنتج كراون للأنابيب والوصلات البلاستيكية، المورد الموثوق في دبي وأبوظبي، مجموعة كاملة من أنابيب الصرف UPVC تحت الأرض المطابقة لمعيار BS EN 1401-1، المعيار الأوروبي الذي يحل محل BS 4660 و BS 5481. مصنعة من مركب PVC-U بكر 100% بصلابة حلقية عالية في منشأتنا المعتمدة بمعيار ISO 9001:2015 في أم القيوين، هذه الأنابيب البرتقالية مصممة خصيصاً لشبكات الصرف الصحي والمياه الملوثة ومياه الأمطار تحت الأرض. متوفرة بمقاسات من 3″ إلى 12″، وتوفر سلامة هيكلية طويلة المدى تحت ظروف التربة والأحمال المرورية المتغيرة في الإمارات والخليج.`,
    overviewFr: `Crown Plastic Pipes / Fittings, un fournisseur de confiance à Dubai et Abu Dhabi, produit une gamme complète de tuyaux de drainage souterrains UPVC conformes à BS EN 1401-1, la norme européenne qui remplace à la fois BS 4660 et BS 5481. M, fabriqués à partir de 100% composé vierge PVC-U avec une rigidité annulaire élevée dans notre usine certifiée ISO 9001:2015 à Umm. Al Quwain, ces canalisations de couleur orange sont spécialement conçues pour les réseaux souterrains d'égouts, d'eaux usées et d'eaux pluviales. Disponibles dans les tailles 3″ à 12″, ils offrent une intégrité structurelle à long terme dans les différentes conditions de sol et de charge de trafic trouvées dans les UAE et GCC.`,
    features: [
    'Conforms to BS EN 1401-1 (supersedes BS 4660 & BS 5481)',
    'High ring stiffness for underground loading resistance',
    'Root-resistant construction prevents infiltration',
    'Chemical and corrosion resistant — ideal for aggressive soils',
    'Orange colour coding for underground identification',
    'Ring-seal joints ensure watertight connections',
    'ISO 9001:2015 certified production',
    '50+ year expected service life',
  ],
  featuresAr: [
    'مطابق لمعيار BS EN 1401-1 (يحل محل BS 4660 و BS 5481)',
    'صلابة حلقية عالية لمقاومة الأحمال تحت الأرض',
    'بناء مقاوم للجذور يمنع التسرب',
    'مقاوم للمواد الكيميائية والتآكل — مثالي للتربة العدوانية',
    'ترميز لوني برتقالي للتعرف تحت الأرض',
    'وصلات بالحلقة المانعة تضمن توصيلات مانعة للماء',
    'إنتاج معتمد بمعيار ISO 9001:2015',
    'عمر خدمة متوقع يزيد عن 50 سنة',
  ],
    featuresFr: [
            `Conforme à BS EN 1401-1 (remplace BS 4660 et BS 5481)`,
            `Rigidité annulaire élevée pour la résistance aux charges souterraines`,
            `La construction résistante aux racines empêche l'infiltration`,
            `Résistant aux produits chimiques et à la corrosion – idéal pour les sols agressifs`,
            `Code couleur orange pour l'identification souterraine`,
            `Les joints annulaires assurent des connexions étanches`,
            `ISO 9001:2015 production certifiée`,
            `Durée de vie prévue de plus de 50 ans`
          ],
    applications: [
    'Underground sewerage systems',
    'Stormwater drainage networks',
    'Foul water drainage',
    'Building-to-sewer connections',
    'Highway and road drainage',
    'Property sewer laterals',
    'Industrial effluent disposal',
    'Municipal infrastructure projects',
  ],
  applicationsAr: [
    'أنظمة الصرف الصحي تحت الأرض',
    'شبكات صرف مياه الأمطار',
    'صرف المياه الملوثة',
    'توصيلات المباني بالمجاري',
    'صرف الطرق السريعة والشوارع',
    'مواسير الصرف الفرعية للممتلكات',
    'التخلص من النفايات الصناعية',
    'مشاريع البنية التحتية البلدية',
  ],
    applicationsFr: [
            `Systèmes d'égouts souterrains`,
            `Réseaux de drainage des eaux pluviales`,
            `Évacuation des eaux usées`,
            `Raccordements bâtiment-égout`,
            `Drainage des autoroutes et des routes`,
            `Conduits d'égouts immobiliers`,
            `Élimination des effluents industriaux`,
            `Projets d'infrastructures municipales`
          ],
    // ───────────────────────────────────────────────────────────────────────────
  // Pipe Specification Table 3 — Underground
  // ───────────────────────────────────────────────────────────────────────────
  pipesTables: [
    {
      id: 'bs-en-1401-underground-pipes',
      title: 'Underground Drainage & Sewerage: BS EN 1401-1 (BS 4660 & BS 5481)',
      columns: [
        { key: 'size', label: 'Nominal Size (Inch)' },
        { key: 'odMin', label: 'Min', groupLabel: 'Mean Outside Dia. (mm)', colSpan: 2 },
        { key: 'odMax', label: 'Max', groupLabel: 'Mean Outside Dia. (mm)' },
        { key: 'wtMin', label: 'Min', groupLabel: 'Mean Wall Thickness (mm)', colSpan: 2 },
        { key: 'wtMax', label: 'Max', groupLabel: 'Mean Wall Thickness (mm)' },
      ],
      rows: [
        { size: '3"',  odMin: '82.00',  odMax: '82.35',  wtMin: '3.2', wtMax: '3.5' },
        { size: '4"',  odMin: '110.00', odMax: '110.32', wtMin: '3.2', wtMax: '3.8' },
        { size: '6"',  odMin: '160.00', odMax: '160.45', wtMin: '4.0', wtMax: '4.8' },
        { size: '8"',  odMin: '200.00', odMax: '200.65', wtMin: '4.9', wtMax: '5.9' },
        { size: '10"', odMin: '250.00', odMax: '250.75', wtMin: '6.1', wtMax: '7.5' },
        { size: '12"', odMin: '315.00', odMax: '315.90', wtMin: '7.7', wtMax: '8.8' },
      ],
    },
  ],

  fittings: [],
    dosDontsFr: {
          dos: [
            `Assurer un litage et un remblai appropriés pour les conduites souterraines`,
            `Utiliser des joints à bague d'étanchéité avec le lubrifiant approprié`,
            `Respecter les exigences minimales de profondeur de couverture`,
            `Remblai compacté en couches pour éviter d’endommager les canalisations`
          ],
          donts: [
            `Ne pas installer sans litière granulaire appropriée`,
            `Ne remblayez pas avec de grosses pierres ou des débris pointus`,
            `Ne pas exposer les canalisations souterraines orange au-dessus du sol en permanence`,
            `Ne pas connecter directement aux systèmes sous pression`
          ]
        },
    downloads: [
    { label: 'UPVC Underground Drainage Pipes Catalogue (PDF)', href: '/pdfs/UPVC%20DRAINAGE%20PIPES.pdf' },
  ],

  dosDonts: {
    dos: [
      'Ensure proper bedding and backfill for underground pipes',
      'Use ring-seal joints with correct lubricant',
      'Follow minimum cover depth requirements',
      'Compact backfill in layers to avoid pipe damage',
    ],
    donts: [
      'Do not install without proper granular bedding',
      'Do not backfill with large stones or sharp debris',
      'Do not expose orange underground pipes above ground permanently',
      'Do not connect directly to pressure systems',
    ],
  },
  dosDontsAr: {
    dos: [
      'تأكد من الفرشة والردم المناسبين للأنابيب تحت الأرض',
      'استخدم وصلات الحلقة المانعة مع المادة المزلقة الصحيحة',
      'اتبع متطلبات الحد الأدنى لعمق الغطاء',
      'رصّ الردم على طبقات لتجنب إتلاف الأنابيب',
    ],
    donts: [
      'لا تركّب بدون فرشة حبيبية مناسبة',
      'لا تردم بالحجارة الكبيرة أو الأنقاض الحادة',
      'لا تعرّض الأنابيب البرتقالية تحت الأرض فوق الأرض بشكل دائم',
      'لا توصل مباشرة بأنظمة الضغط',
    ],
  },
};


// ═══════════════════════════════════════════════════════════════════════════════
// 3) Non-Standard Pipes for Drainage Applications
// ═══════════════════════════════════════════════════════════════════════════════

export const upvcDrainagePipesNonStandard: ProductDetailConfig = {
  slug: 'upvc-drainage-pipes-non-standard',
  categorySlug: 'upvc-drainage-pipes',

  title: 'UPVC Drainage Non-Standard Pipes',
  titleAr: 'أنابيب الصرف UPVC غير القياسية',
    titleFr: `UPVC Tuyaux de drainage non standards`,
    shortDescription: 'Non-standard UPVC drainage pipes for specialized project requirements.',
  shortDescriptionAr: 'أنابيب صرف UPVC غير قياسية لمتطلبات المشاريع المتخصصة.',
    shortDescriptionFr: `Tuyaux de drainage UPVC non standard pour les exigences de projets spécialisés.`,
    overview: `Crown Plastic Pipes / Fittings, a leading manufacturer in the UAE, offers a versatile range of non-standard UPVC drainage pipes tailored for projects that require dimensions or wall thicknesses outside the scope of BS EN 1329 or BS EN 1401 standards. Available in sizes from 1¼″ to 12″, these pipes are manufactured at our Umm Al Quwain facility from the same high-grade PVC-U compounds, ensuring chemical resistance, smooth internal surfaces, and long service life. Ideal for retrofit, renovation, or bespoke infrastructure works across the UAE where standard specifications may not apply.`,
  overviewAr: `تقدم كراون للأنابيب والوصلات البلاستيكية، الشركة الرائدة في التصنيع في الإمارات، مجموعة متنوعة من أنابيب الصرف UPVC غير القياسية المصممة للمشاريع التي تتطلب أبعاداً أو سماكات جدار خارج نطاق معايير BS EN 1329 أو BS EN 1401. متوفرة بمقاسات من 1¼″ إلى 12″، تُصنع هذه الأنابيب في منشأتنا بأم القيوين من نفس مركبات PVC-U عالية الجودة، مما يضمن مقاومة كيميائية وأسطحاً داخلية ملساء وعمر خدمة طويل. مثالية لأعمال التجديد والترميم أو البنية التحتية المخصصة في دبي وأبوظبي ومنطقة الخليج.`,
    overviewFr: `Crown Plastic Pipes/Raccords, l'un des principaux fabricants du UAE, propose une gamme polyvalente de tuyaux de drainage non standard UPVC adaptés aux projets qui nécessitent des dimensions ou des épaisseurs de paroi en dehors de la portée des normes BS EN 1329 ou BS EN 1401. Disponibles dans des tailles allant de 1¼″ à 12″, ces tuyaux sont fabriqués dans notre usine d'Umm Al Quwain à partir des mêmes composés PVC-U de haute qualité, garantissant une résistance chimique, des surfaces internes lisses et une longue durée de vie. Idéal pour les travaux de rénovation, de rénovation ou d'infrastructure sur mesure dans le UAE où les spécifications standard peuvent ne pas s'appliquer.`,
    features: SHARED_FEATURES,
  featuresAr: SHARED_FEATURESAr,
    featuresFr: SHARED_FEATURESFr,
    applications: SHARED_APPLICATIONS,
  applicationsAr: SHARED_APPLICATIONSAr,
    applicationsFr: SHARED_APPLICATIONSFr,
    // ───────────────────────────────────────────────────────────────────────────
  // Pipe Specification Table 4 — Non-Standard
  // ───────────────────────────────────────────────────────────────────────────
  pipesTables: [
    {
      id: 'non-standard-drainage-pipes',
      title: 'Non-Standard Pipes for Drainage Applications',
      columns: [
        { key: 'size', label: 'Nominal Size (Inch)' },
        { key: 'odMin', label: 'Min', groupLabel: 'Mean Outside Dia. (mm)', colSpan: 2 },
        { key: 'odMax', label: 'Max', groupLabel: 'Mean Outside Dia. (mm)' },
        { key: 'wtMin', label: 'Min', groupLabel: 'Mean Wall Thickness (mm)', colSpan: 2 },
        { key: 'wtMax', label: 'Max', groupLabel: 'Mean Wall Thickness (mm)' },
      ],
      rows: [
        { size: '1 1/4"', odMin: '36.15',  odMax: '36.45',  wtMin: '1.5', wtMax: '2.0' },
        { size: '1 1/2"', odMin: '42.75',  odMax: '43.05',  wtMin: '1.5', wtMax: '2.0' },
        { size: '2"',     odMin: '55.85',  odMax: '56.05',  wtMin: '1.5', wtMax: '2.0' },
        { size: '3"',     odMin: '82.00',  odMax: '82.35',  wtMin: '2.2', wtMax: '2.5' },
        { size: '4"',     odMin: '110.00', odMax: '110.32', wtMin: '2.2', wtMax: '2.5' },
        { size: '6"',     odMin: '160.00', odMax: '160.45', wtMin: '3.0', wtMax: '3.5' },
        { size: '8"',     odMin: '200.00', odMax: '200.65', wtMin: '3.5', wtMax: '4.0' },
        { size: '10"',    odMin: '250.00', odMax: '250.75', wtMin: '4.0', wtMax: '4.6' },
        { size: '12"',    odMin: '315.00', odMax: '315.90', wtMin: '6.1', wtMax: '7.0' },
      ],
    },
  ],

  fittings: [],
    dosDontsFr: SHARED_DOS_DONTSFr,
    downloads: [
    { label: 'UPVC Drainage Non-Standard Pipes Catalogue (PDF)', href: '/pdfs/UPVC%20DRAINAGE%20PIPES.pdf' },
  ],

  dosDonts: SHARED_DOS_DONTS,
  dosDontsAr: SHARED_DOS_DONTSAr,
};
