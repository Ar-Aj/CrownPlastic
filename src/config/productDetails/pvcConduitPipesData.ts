/**
 * PVC Conduit Pipes - Product Detail Configurations
 * Phase 2.8 — 3 sub-products for electrical cable management
 * SEO: UAE/GCC/Dubai MEP infrastructure keywords injected.
 */

import { type ProductDetailConfig } from '@/types/productDetail';

// ═══════════════════════════════════════════════════════════════════════════════
// 1) Compression Force (1250N / 750N / 320N) — 3 tables combined
// ═══════════════════════════════════════════════════════════════════════════════

export const pvcConduitPipesCompressionForce: ProductDetailConfig = {
  slug: "pvc-conduit-pipes-compression-force",
  categorySlug: 'pvc-conduit-pipes',
  title: "PVC Conduit Pipes — 1250N / 750N / 320N Compression Force",
  titleAr: "أنابيب القنوات PVC — قوة ضغط 1250N / 750N / 320N",
    titleFr: `PVC Conduit Tuyaux — 1250N / 750N / 320N Force de compression`,
    shortDescription: "Fire-retardant PVC conduit pipes — Heavy (1250N), Medium (750N) & Light (320N) grades.",
  shortDescriptionAr: "أنابيب قنوات PVC مقاومة للحريق — شاقة (1250N) ومتوسطة (750N) وخفيفة (320N).",
    shortDescriptionFr: `Tuyaux ignifuges PVC conduit — Qualités lourdes (1250N), moyennes (750N) et légères (320N).`,
    overview: "Crown Plastic Pipes / Fittings, a leading PVC conduit pipe manufacturer in the UAE, produces high-performance fire-retardant electrical conduits in Heavy (1250N), Medium (750N), and Light (320N) compression force grades. Designed for superior cable protection across residential, commercial, and industrial MEP infrastructure in the UAE, these conduits are manufactured at our ISO 9001:2015 certified Umm Al Quwain facility in standard 2.9 m lengths. Available in 20–50 mm sizes with precision-engineered internal diameters for effortless cable pulling.",
  overviewAr: "تصنّع كراون للأنابيب والوصلات البلاستيكية، الشركة الرائدة في تصنيع أنابيب القنوات PVC في الإمارات، قنوات كهربائية مقاومة للحريق عالية الأداء بدرجات قوة ضغط شاقة (1250N) ومتوسطة (750N) وخفيفة (320N). مصممة لحماية الكابلات الفائقة في البنية التحتية للتمديدات الميكانيكية والكهربائية والسباكة في دبي وأبوظبي والخليج. مصنعة في منشأتنا المعتمدة ISO 9001:2015 بأم القيوين بأطوال 2.9 م.",
    overviewFr: `Crown Plastic Pipes / Fittings, l'un des principaux fabricants de tuyaux PVC conduit dans le UAE, produit des conduits électriques ignifuges haute performance dans les niveaux de force de compression lourde (1250N), moyenne (750N) et légère (320N). Conçus pour une protection supérieure des câbles dans les infrastructures MEP résidentielles, commerciales et industrielles du UAE, ces conduits sont fabriqués dans notre usine certifiée ISO 9001:2015 d'Umm Al Quwain dans des longueurs standard 2.9 m. Disponible en tailles 20–50 mm avec des diamètres internes conçus avec précision pour un tirage de câble sans effort.`,
    features: ["High-impact resistance for heavy-duty MEP applications","Fire-retardant material properties for enhanced safety","Available in Heavy, Medium, and Light compression force grades","Full compliance with US Schedule 40 and Schedule 80 standards","ISO 9001:2015 and OHSAS 18001 certified manufacturing quality","Durable UPVC construction for long-term cable management"],
  featuresAr: [
    'مقاومة صدمات عالية لتطبيقات MEP الشاقة',
    'خصائص مادة مقاومة للحريق لسلامة محسّنة',
    'متوفرة بدرجات قوة ضغط شاقة ومتوسطة وخفيفة',
    'مطابقة كاملة لمعايير جدول 40 وجدول 80 الأمريكية',
    'جودة تصنيع معتمدة ISO 9001:2015 و OHSAS 18001',
    'بناء UPVC متين لإدارة الكابلات طويلة الأمد',
  ],
    featuresFr: [
            `Résistance élevée aux chocs pour les applications lourdes duty MEP`,
            `Propriétés des matériaux ignifuges pour une sécurité renforcée`,
            `Disponible en niveaux de force de compression lourde, moyenne et légère`,
            `Conformité totale aux normes américaines Schedule 40 et Schedule 80`,
            `Qualité de fabrication certifiée ISO 9001:2015 et OHSAS 18001`,
            `Construction Durable UPVC pour une gestion des câbles à long terme`
          ],
    applications: ["Residential and commercial electrical wiring systems","Industrial MEP infrastructure projects across the GCC","Urban development projects in Dubai and Abu Dhabi","Underground and exposed cable management solutions"],
  applicationsAr: [
    'أنظمة التمديدات الكهربائية السكنية والتجارية',
    'مشاريع البنية التحتية الصناعية MEP في الخليج',
    'مشاريع التطوير العمراني في دبي وأبوظبي',
    'حلول إدارة الكابلات تحت الأرض والمكشوفة',
  ],
    applicationsFr: [
            `Systèmes de câblage électrique résidentiels et commerciaux`,
            `Projets d'infrastructure dustrial MEP à travers le GCC`,
            `Projets de développement urbain à Dubai et Abu Dhabi`,
            `Solutions de gestion des câbles souterrains et exposés`
          ],
    pipesTables: [
    {
      id: "heavy-grade-round-conduit-1250n-compression-force-table",
      title: "HEAVY GRADE ROUND CONDUIT - 1250N COMPRESSION FORCE", titleFr: 'CONDUIT ROND DE CLASSE LOURDE - FORCE DE COMPRESSION 1250N',
      columns: [
        { key: "partno", label: "Part No#", labelFr: 'Part No#' },
        { key: "dimension", label: "Dimension", labelFr: 'Dimension' },
        { key: "minid", label: "Min. ID", labelFr: 'DI Min.' },
        { key: "pscpack", label: "Psc/Pack", labelFr: 'Pcs/Paquet' },
        { key: "mtrspack", label: "Mtrs/Pack", labelFr: 'Metres/Paquet' },
        { key: "lengthpc", label: "Length/Pc", labelFr: 'Longueur/Piece' }
      ],
      rows: [
      { "partno": "CPHD20", "dimension": "20 mm", "minid": "16.0 mm", "pscpack": "20", "mtrspack": "58", "lengthpc": "2.9 Mtr" },
      { "partno": "CPHD25", "dimension": "25 mm", "minid": "20.7 mm", "pscpack": "20", "mtrspack": "58", "lengthpc": "2.9 Mtr" },
      { "partno": "CPHD32", "dimension": "32 mm", "minid": "26.5 mm", "pscpack": "10", "mtrspack": "29", "lengthpc": "2.9 Mtr" },
      { "partno": "CPHD38", "dimension": "38 mm", "minid": "32.5 mm", "pscpack": "10", "mtrspack": "29", "lengthpc": "2.9 Mtr" },
      { "partno": "CPHD50", "dimension": "50 mm", "minid": "43.0 mm", "pscpack": "5", "mtrspack": "14.5", "lengthpc": "2.9 Mtr" }
      ],
    },
    {
      id: "medium-grade-round-conduit-750n-compression-force-table",
      title: "MEDIUM GRADE ROUND CONDUIT - 750N COMPRESSION FORCE", titleFr: 'CONDUIT ROND DE CLASSE MOYENNE - FORCE DE COMPRESSION 750N',
      columns: [
        { key: "partno", label: "Part No#", labelFr: 'Part No#' },
        { key: "dimension", label: "Dimension", labelFr: 'Dimension' },
        { key: "minid", label: "Min. ID", labelFr: 'DI Min.' },
        { key: "pscpack", label: "Psc/Pack", labelFr: 'Pcs/Paquet' },
        { key: "mtrspack", label: "Mtrs/Pack", labelFr: 'Metres/Paquet' },
        { key: "lengthpc", label: "Length/Pc", labelFr: 'Longueur/Piece' }
      ],
      rows: [
      { "partno": "CPMD20", "dimension": "20 mm", "minid": "16.5 mm", "pscpack": "20", "mtrspack": "58", "lengthpc": "2.9 Mtr" },
      { "partno": "CPMD25", "dimension": "25 mm", "minid": "20.9 mm", "pscpack": "20", "mtrspack": "58", "lengthpc": "2.9 Mtr" },
      { "partno": "CPMD32", "dimension": "32 mm", "minid": "27.3 mm", "pscpack": "10", "mtrspack": "29", "lengthpc": "2.9 Mtr" },
      { "partno": "CPMD38", "dimension": "38 mm", "minid": "33.1 mm", "pscpack": "10", "mtrspack": "29", "lengthpc": "2.9 Mtr" },
      { "partno": "CPMD50", "dimension": "50 mm", "minid": "44.4 mm", "pscpack": "5", "mtrspack": "14.5", "lengthpc": "2.9 Mtr" }
      ],
    },
    {
      id: "light-grade-round-conduit-320n-compression-force-table",
      title: "LIGHT GRADE ROUND CONDUIT - 320N COMPRESSION FORCE", titleFr: 'CONDUIT ROND DE CLASSE LÉGÈRE - FORCE DE COMPRESSION 320N',
      columns: [
        { key: "partno", label: "Part No#", labelFr: 'Part No#' },
        { key: "dimension", label: "Dimension", labelFr: 'Dimension' },
        { key: "minid", label: "Min. ID", labelFr: 'DI Min.' },
        { key: "pscpack", label: "Psc/Pack", labelFr: 'Pcs/Paquet' },
        { key: "mtrspack", label: "Mtrs/Pack", labelFr: 'Metres/Paquet' },
        { key: "lengthpc", label: "Length/Pc", labelFr: 'Longueur/Piece' }
      ],
      rows: [
      { "partno": "CPLD20", "dimension": "20 mm", "minid": "16.5 mm", "pscpack": "20", "mtrspack": "58", "lengthpc": "2.9 Mtr" },
      { "partno": "CPLD25", "dimension": "25 mm", "minid": "20.9 mm", "pscpack": "20", "mtrspack": "58", "lengthpc": "2.9 Mtr" },
      { "partno": "CPLD32", "dimension": "32 mm", "minid": "27.3 mm", "pscpack": "10", "mtrspack": "29", "lengthpc": "2.9 Mtr" },
      { "partno": "CPLD38", "dimension": "38 mm", "minid": "33.1 mm", "pscpack": "10", "mtrspack": "29", "lengthpc": "2.9 Mtr" },
      { "partno": "CPLD50", "dimension": "50 mm", "minid": "44.4 mm", "pscpack": "5", "mtrspack": "14.5", "lengthpc": "2.9 Mtr" }
      ],
    }
  ],
  fittings: [],
  downloads: [
    { label: 'PVC Conduit Pipes Catalogue (PDF)', labelAr: 'كتالوج أنابيب كوندويت PVC (PDF)', labelFr: 'Catalogue Tuyaux Conduit PVC (PDF)', href: '/pdfs/PVC%20CONDUIT%20PIPES%20CATALOGUE.pdf' },
  ],
  dosDonts: {
    dos: ["Select the correct compression force (1250N, 750N, or 320N) based on load requirements","Use Schedule 80 conduits for applications requiring thicker wall protection","Ensure all installations comply with UAE electrical safety standards","Verify part numbers against trade dimensions for precise fit"],
    donts: ["Do not use light-grade conduits where heavy-duty impact resistance is required","Avoid exceeding the recommended pieces per pack for safe handling","Do not substitute Schedule 40 for Schedule 80 in high-pressure environments","Never ignore the minimum ID requirements for cable pulling"],
  },
  dosDontsAr: {
    dos: [
      'اختر قوة الضغط المناسبة (1250N أو 750N أو 320N) بناءً على متطلبات الحمل',
      'استخدم قنوات جدول 80 للتطبيقات التي تتطلب حماية جدار أسمك',
      'تأكد أن جميع التركيبات تتوافق مع معايير السلامة الكهربائية في الإمارات',
      'تحقق من أرقام القطع مقابل أبعاد التجارة للملاءمة الدقيقة',
    ],
    donts: [
      'لا تستخدم قنوات الدرجة الخفيفة حيث تكون مقاومة الصدمات الشاقة مطلوبية',
      'تجنب تجاوز عدد القطع الموصى به لكل حزمة للمناولة الآمنة',
      'لا تستبدل جدول 40 بجدول 80 في بيئات الضغط العالي',
      'لا تتجاهل متطلبات القطر الداخلي الأدنى لسحب الكابلات',
    ],
  },
    dosDontsFr: {
          dos: [
            `Sélectionnez la force de compression correcte (1250N, 750N ou 320N) en fonction des exigences de charge`,
            `Utilisez Schedule 80 conduits pour les applications nécessitant une protection murale plus épaisse`,
            `Assurez-vous que toutes les installations sont conformes aux normes de sécurité électrique UAE`,
            `Vérifiez les numéros de pièces par rapport aux dimensions commerciales pour un ajustement précis`
          ],
          donts: [
            `N'utilisez pas de matériaux de qualité légère lorsqu'une résistance aux chocs élevée est requise.`,
            `Évitez de dépasser le nombre de pièces recommandé par paquet pour une manipulation en toute sécurité`,
            `Ne remplacez pas Schedule 40 par Schedule 80 dans des environnements à haute pression.`,
            `N'ignorez jamais les exigences minimales en matière d'identification pour le tirage de câbles`
          ]
        }
};


// ═══════════════════════════════════════════════════════════════════════════════
// 2) Schedule 40 Conduit (US Standard)
// ═══════════════════════════════════════════════════════════════════════════════

export const pvcConduitPipesSch40: ProductDetailConfig = {
  slug: "pvc-conduit-pipes-sch-40",
  categorySlug: 'pvc-conduit-pipes',
  title: "PVC Conduit Pipes — Schedule 40 (US Standard)",
  titleAr: "أنابيب القنوات PVC — جدول 40 (معيار أمريكي)",
    titleFr: `PVC Conduit Pipes — Schémadule 40 (norme américaine)`,
    shortDescription: "Schedule 40 PVC electrical conduit — ½″ to 6″ (US standard).",
  shortDescriptionAr: "قنوات كهربائية PVC جدول 40 — ½″ إلى 6″ (معيار أمريكي).",
    shortDescriptionFr: `Schémadule 40 PVC conduit — ½″ à 6″ (norme américaine).`,
    overview: "Crown Plastic Pipes / Fittings manufactures Schedule 40 PVC electrical conduit pipes to US standards, providing reliable cable protection for MEP infrastructure across the UAE and GCC. Available from ½″ to 6″ in standard 3 m lengths, these conduits offer optimal wall thickness for general-purpose electrical installations in the UAE. Produced at our Umm Al Quwain facility with ISO 9001:2015 certification.",
  overviewAr: "تصنّع كراون للأنابيب والوصلات البلاستيكية أنابيب قنوات كهربائية PVC جدول 40 وفق المعايير الأمريكية، لحماية موثوقة للكابلات في البنية التحتية MEP في الإمارات والخليج. متوفرة من ½″ إلى 6″ بأطوال 3 م. مصنعة في منشأتنا بأم القيوين بشهادة ISO 9001:2015.",
    overviewFr: `Crown Plastic Pipes / Fittings fabrique des tuyaux de conduit électriques Schedule 40 PVC selon les normes américaines, offrant une protection fiable des câbles pour l'infrastructure MEP à travers les UAE et GCC. Disponibles de ½″ à 6″ dans les longueurs standard 3 m, ces conduits offrent une épaisseur de paroi optimale pour les installations électriques à usage général dans le UAE. Produced dans notre usine d'Umm Al Quwain avec la certification ISO 9001:2015.`,
    features: ["High-impact resistance for heavy-duty MEP applications","Fire-retardant material properties for enhanced safety","Available in Heavy, Medium, and Light compression force grades","Full compliance with US Schedule 40 and Schedule 80 standards","ISO 9001:2015 and OHSAS 18001 certified manufacturing quality","Durable UPVC construction for long-term cable management"],
  featuresAr: [
    'مقاومة صدمات عالية لتطبيقات MEP الشاقة',
    'خصائص مادة مقاومة للحريق لسلامة محسّنة',
    'متوفرة بدرجات قوة ضغط شاقة ومتوسطة وخفيفة',
    'مطابقة كاملة لمعايير جدول 40 وجدول 80 الأمريكية',
    'جودة تصنيع معتمدة ISO 9001:2015 و OHSAS 18001',
    'بناء UPVC متين لإدارة الكابلات طويلة الأمد',
  ],
    featuresFr: [
            `Résistance élevée aux chocs pour les applications lourdes duty MEP`,
            `Propriétés des matériaux ignifuges pour une sécurité renforcée`,
            `Disponible en niveaux de force de compression lourde, moyenne et légère`,
            `Conformité totale aux normes américaines Schedule 40 et Schedule 80`,
            `Qualité de fabrication certifiée ISO 9001:2015 et OHSAS 18001`,
            `Construction Durable UPVC pour une gestion des câbles à long terme`
          ],
    applications: ["Residential and commercial electrical wiring systems","Industrial MEP infrastructure projects across the GCC","Urban development projects in Dubai and Abu Dhabi","Underground and exposed cable management solutions"],
  applicationsAr: [
    'أنظمة التمديدات الكهربائية السكنية والتجارية',
    'مشاريع البنية التحتية الصناعية MEP في الخليج',
    'مشاريع التطوير العمراني في دبي وأبوظبي',
    'حلول إدارة الكابلات تحت الأرض والمكشوفة',
  ],
    applicationsFr: [
            `Systèmes de câblage électrique résidentiels et commerciaux`,
            `Projets d'infrastructure dustrial MEP à travers le GCC`,
            `Projets de développement urbain à Dubai et Abu Dhabi`,
            `Solutions de gestion des câbles souterrains et exposés`
          ],
    pipesTables: [
    {
      id: "schedule-40-conduit-us-table",
      title: "SCHEDULE 40 CONDUIT - US", titleFr: 'CONDUIT SCHEDULE 40 - US',
      columns: [
        { key: "partno", label: "Part No#", labelFr: 'Part No#' },
        { key: "tradedimension", label: "Trade Dimension", labelFr: 'Dimension Commerciale' },
        { key: "wallthicknessmm", label: "Wall Thickness (mm)", labelFr: 'Epaisseur de Paroi (mm)' },
        { key: "pscpack", label: "Pcs/Pack", labelFr: 'Pcs/Pack' },
        { key: "mtrspack", label: "Mtrs/Pack", labelFr: 'Metres/Paquet' },
        { key: "lengthpc", label: "Length/Pc", labelFr: 'Longueur/Piece' }
      ],
      rows: [
      { "partno": "CPUS 01240", "tradedimension": "1½\" (16 mm)", "wallthicknessmm": "2.77", "pscpack": "20", "mtrspack": "60", "lengthpc": "3 Mtr" },
      { "partno": "CPUS 03440", "tradedimension": "3½\" (21 mm)", "wallthicknessmm": "2.87", "pscpack": "10", "mtrspack": "30", "lengthpc": "3 Mtr" },
      { "partno": "CPUS 00140", "tradedimension": "1\" (27 mm)", "wallthicknessmm": "3.38", "pscpack": "10", "mtrspack": "30", "lengthpc": "3 Mtr" },
      { "partno": "CPUS 11440", "tradedimension": "1¼\" (35 mm)", "wallthicknessmm": "3.56", "pscpack": "5", "mtrspack": "15", "lengthpc": "3 Mtr" },
      { "partno": "CPUS 11240", "tradedimension": "1½\" (41 mm)", "wallthicknessmm": "3.68", "pscpack": "5", "mtrspack": "15", "lengthpc": "3 Mtr" },
      { "partno": "CPUS 00240", "tradedimension": "2\" (53 mm)", "wallthicknessmm": "3.91", "pscpack": "1", "mtrspack": "3", "lengthpc": "3 Mtr" },
      { "partno": "CPUS 00340", "tradedimension": "3\" (78 mm)", "wallthicknessmm": "5.49", "pscpack": "1", "mtrspack": "3", "lengthpc": "3 Mtr" },
      { "partno": "CPUS 00440", "tradedimension": "4\" (103 mm)", "wallthicknessmm": "6.02", "pscpack": "1", "mtrspack": "3", "lengthpc": "3 Mtr" },
      { "partno": "CPUS 00640", "tradedimension": "6\" (155 mm)", "wallthicknessmm": "7.11", "pscpack": "1", "mtrspack": "3", "lengthpc": "3 Mtr" }
      ],
    }
  ],
  fittings: [],
  downloads: [
    { label: 'PVC Conduit Pipes Catalogue (PDF)', labelAr: 'كتالوج أنابيب كوندويت PVC (PDF)', labelFr: 'Catalogue Tuyaux Conduit PVC (PDF)', href: '/pdfs/PVC%20CONDUIT%20PIPES%20CATALOGUE.pdf' },
  ],
  dosDonts: {
    dos: ["Select the correct compression force (1250N, 750N, or 320N) based on load requirements","Use Schedule 80 conduits for applications requiring thicker wall protection","Ensure all installations comply with UAE electrical safety standards","Verify part numbers against trade dimensions for precise fit"],
    donts: ["Do not use light-grade conduits where heavy-duty impact resistance is required","Avoid exceeding the recommended pieces per pack for safe handling","Do not substitute Schedule 40 for Schedule 80 in high-pressure environments","Never ignore the minimum ID requirements for cable pulling"],
  },
  dosDontsAr: {
    dos: [
      'اختر قوة الضغط المناسبة (1250N أو 750N أو 320N) بناءً على متطلبات الحمل',
      'استخدم قنوات جدول 80 للتطبيقات التي تتطلب حماية جدار أسمك',
      'تأكد أن جميع التركيبات تتوافق مع معايير السلامة الكهربائية في الإمارات',
      'تحقق من أرقام القطع مقابل أبعاد التجارة للملاءمة الدقيقة',
    ],
    donts: [
      'لا تستخدم قنوات الدرجة الخفيفة حيث تكون مقاومة الصدمات الشاقة مطلوبية',
      'تجنب تجاوز عدد القطع الموصى به لكل حزمة للمناولة الآمنة',
      'لا تستبدل جدول 40 بجدول 80 في بيئات الضغط العالي',
      'لا تتجاهل متطلبات القطر الداخلي الأدنى لسحب الكابلات',
    ],
  },
    dosDontsFr: {
          dos: [
            `Sélectionnez la force de compression correcte (1250N, 750N ou 320N) en fonction des exigences de charge`,
            `Utilisez Schedule 80 conduits pour les applications nécessitant une protection murale plus épaisse`,
            `Assurez-vous que toutes les installations sont conformes aux normes de sécurité électrique UAE`,
            `Vérifiez les numéros de pièces par rapport aux dimensions commerciales pour un ajustement précis`
          ],
          donts: [
            `N'utilisez pas de matériaux de qualité légère lorsqu'une résistance aux chocs élevée est requise.`,
            `Évitez de dépasser le nombre de pièces recommandé par paquet pour une manipulation en toute sécurité`,
            `Ne remplacez pas Schedule 40 par Schedule 80 dans des environnements à haute pression.`,
            `N'ignorez jamais les exigences minimales en matière d'identification pour le tirage de câbles`
          ]
        }
};


// ═══════════════════════════════════════════════════════════════════════════════
// 3) Schedule 80 Conduit (US Standard)
// ═══════════════════════════════════════════════════════════════════════════════

export const pvcConduitPipesSch80: ProductDetailConfig = {
  slug: "pvc-conduit-pipes-sch-80",
  categorySlug: 'pvc-conduit-pipes',
  title: "PVC Conduit Pipes — Schedule 80 (US Standard)",
  titleAr: "أنابيب القنوات PVC — جدول 80 (معيار أمريكي)",
    titleFr: `PVC Conduit Pipes — Schémadule 80 (norme américaine)`,
    shortDescription: "Heavy-duty Schedule 80 PVC electrical conduit — ½″ to 6″ (US standard).",
  shortDescriptionAr: "قنوات كهربائية PVC جدول 80 شاقة — ½″ إلى 6″ (معيار أمريكي).",
    shortDescriptionFr: `Heavy-duty Schedule 80 PVC conduit — ½″ à 6″ (norme américaine).`,
    overview: "Crown Plastic Pipes / Fittings manufactures heavy-duty Schedule 80 PVC electrical conduit pipes to US standards, delivering enhanced wall thickness and impact resistance for demanding MEP applications across the UAE and GCC. Available from ½″ to 6″ in standard 3 m lengths, these conduits are the preferred choice for high-traffic areas, industrial facilities, and critical infrastructure in Dubai and Abu Dhabi. Produced at our Umm Al Quwain facility with ISO 9001:2015 certification.",
  overviewAr: "تصنّع كراون للأنابيب والوصلات البلاستيكية أنابيب قنوات كهربائية PVC جدول 80 للخدمة الشاقة وفق المعايير الأمريكية، بسمك جدار محسّن ومقاومة صدمات لتطبيقات MEP المتطلبة في الإمارات والخليج. متوفرة من ½″ إلى 6″ بأطوال 3 م. مصنعة في منشأتنا بأم القيوين بشهادة ISO 9001:2015.",
    overviewFr: `Crown Plastic Pipes / Fittings fabrique des tuyaux de conduit électriques lourds-duty Schedule 80 PVC selon les normes américaines, offrant une épaisseur de paroi et une résistance aux chocs améliorées pour les applications MEP exigeantes dans les UAE et GCC. Disponibles de ½″ à 6″ dans des longueurs standard 3 m, ​​ces conduits sont le choix préféré pour les zones à fort trafic, les installations industrielles du et les infrastructures critiques à Dubai et Abu Dhabi. Produced dans notre usine d'Umm Al Quwain avec la certification ISO 9001:2015.`,
    features: ["High-impact resistance for heavy-duty MEP applications","Fire-retardant material properties for enhanced safety","Available in Heavy, Medium, and Light compression force grades","Full compliance with US Schedule 40 and Schedule 80 standards","ISO 9001:2015 and OHSAS 18001 certified manufacturing quality","Durable UPVC construction for long-term cable management"],
  featuresAr: [
    'مقاومة صدمات عالية لتطبيقات MEP الشاقة',
    'خصائص مادة مقاومة للحريق لسلامة محسّنة',
    'متوفرة بدرجات قوة ضغط شاقة ومتوسطة وخفيفة',
    'مطابقة كاملة لمعايير جدول 40 وجدول 80 الأمريكية',
    'جودة تصنيع معتمدة ISO 9001:2015 و OHSAS 18001',
    'بناء UPVC متين لإدارة الكابلات طويلة الأمد',
  ],
    featuresFr: [
            `Résistance élevée aux chocs pour les applications lourdes duty MEP`,
            `Propriétés des matériaux ignifuges pour une sécurité renforcée`,
            `Disponible en niveaux de force de compression lourde, moyenne et légère`,
            `Conformité totale aux normes américaines Schedule 40 et Schedule 80`,
            `Qualité de fabrication certifiée ISO 9001:2015 et OHSAS 18001`,
            `Construction Durable UPVC pour une gestion des câbles à long terme`
          ],
    applications: ["Residential and commercial electrical wiring systems","Industrial MEP infrastructure projects across the GCC","Urban development projects in Dubai and Abu Dhabi","Underground and exposed cable management solutions"],
  applicationsAr: [
    'أنظمة التمديدات الكهربائية السكنية والتجارية',
    'مشاريع البنية التحتية الصناعية MEP في الخليج',
    'مشاريع التطوير العمراني في دبي وأبوظبي',
    'حلول إدارة الكابلات تحت الأرض والمكشوفة',
  ],
    applicationsFr: [
            `Systèmes de câblage électrique résidentiels et commerciaux`,
            `Projets d'infrastructure dustrial MEP à travers le GCC`,
            `Projets de développement urbain à Dubai et Abu Dhabi`,
            `Solutions de gestion des câbles souterrains et exposés`
          ],
    pipesTables: [
    {
      id: "schedule-80-conduit-us-table",
      title: "SCHEDULE 80 CONDUIT - US", titleFr: 'CONDUIT SCHEDULE 80 - US',
      columns: [
        { key: "partno", label: "Part No#", labelFr: 'Part No#' },
        { key: "tradedimension", label: "Trade Dimension", labelFr: 'Dimension Commerciale' },
        { key: "wallthicknessmm", label: "Wall Thickness (mm)", labelFr: 'Epaisseur de Paroi (mm)' },
        { key: "pscpack", label: "Pcs/Pack", labelFr: 'Pcs/Pack' },
        { key: "mtrspack", label: "Mtrs/Pack", labelFr: 'Metres/Paquet' },
        { key: "lengthpc", label: "Length/Pc", labelFr: 'Longueur/Piece' }
      ],
      rows: [
      { "partno": "CPUS 01280", "tradedimension": "1½\" (16 mm)", "wallthicknessmm": "3.73", "pscpack": "20", "mtrspack": "60", "lengthpc": "3 Mtr" },
      { "partno": "CPUS 03480", "tradedimension": "½\" (21 mm)", "wallthicknessmm": "3.91", "pscpack": "10", "mtrspack": "30", "lengthpc": "3 Mtr" },
      { "partno": "CPUS 00180", "tradedimension": "1\" (27 mm)", "wallthicknessmm": "4.55", "pscpack": "10", "mtrspack": "30", "lengthpc": "3 Mtr" },
      { "partno": "CPUS 11480", "tradedimension": "1¼\" (35 mm)", "wallthicknessmm": "4.85", "pscpack": "5", "mtrspack": "15", "lengthpc": "3 Mtr" },
      { "partno": "CPUS 11280", "tradedimension": "1½\" (41 mm)", "wallthicknessmm": "5.08", "pscpack": "5", "mtrspack": "15", "lengthpc": "3 Mtr" },
      { "partno": "CPUS 00280", "tradedimension": "2\" (53 mm)", "wallthicknessmm": "5.54", "pscpack": "1", "mtrspack": "3", "lengthpc": "3 Mtr" },
      { "partno": "CPUS 00380", "tradedimension": "3\" (78 mm)", "wallthicknessmm": "7.62", "pscpack": "1", "mtrspack": "3", "lengthpc": "3 Mtr" },
      { "partno": "CPUS 00480", "tradedimension": "4\" (103 mm)", "wallthicknessmm": "8.56", "pscpack": "1", "mtrspack": "3", "lengthpc": "3 Mtr" },
      { "partno": "CPUS 00680", "tradedimension": "6\" (155 mm)", "wallthicknessmm": "10.97", "pscpack": "1", "mtrspack": "3", "lengthpc": "3 Mtr" }
      ],
    }
  ],
  fittings: [],
  downloads: [
    { label: 'PVC Conduit Pipes Catalogue (PDF)', labelAr: 'كتالوج أنابيب كوندويت PVC (PDF)', labelFr: 'Catalogue Tuyaux Conduit PVC (PDF)', href: '/pdfs/PVC%20CONDUIT%20PIPES%20CATALOGUE.pdf' },
  ],
  dosDonts: {
    dos: ["Select the correct compression force (1250N, 750N, or 320N) based on load requirements","Use Schedule 80 conduits for applications requiring thicker wall protection","Ensure all installations comply with UAE electrical safety standards","Verify part numbers against trade dimensions for precise fit"],
    donts: ["Do not use light-grade conduits where heavy-duty impact resistance is required","Avoid exceeding the recommended pieces per pack for safe handling","Do not substitute Schedule 40 for Schedule 80 in high-pressure environments","Never ignore the minimum ID requirements for cable pulling"],
  },
  dosDontsAr: {
    dos: [
      'اختر قوة الضغط المناسبة (1250N أو 750N أو 320N) بناءً على متطلبات الحمل',
      'استخدم قنوات جدول 80 للتطبيقات التي تتطلب حماية جدار أسمك',
      'تأكد أن جميع التركيبات تتوافق مع معايير السلامة الكهربائية في الإمارات',
      'تحقق من أرقام القطع مقابل أبعاد التجارة للملاءمة الدقيقة',
    ],
    donts: [
      'لا تستخدم قنوات الدرجة الخفيفة حيث تكون مقاومة الصدمات الشاقة مطلوبية',
      'تجنب تجاوز عدد القطع الموصى به لكل حزمة للمناولة الآمنة',
      'لا تستبدل جدول 40 بجدول 80 في بيئات الضغط العالي',
      'لا تتجاهل متطلبات القطر الداخلي الأدنى لسحب الكابلات',
    ],
  },
    dosDontsFr: {
          dos: [
            `Sélectionnez la force de compression correcte (1250N, 750N ou 320N) en fonction des exigences de charge`,
            `Utilisez Schedule 80 conduits pour les applications nécessitant une protection murale plus épaisse`,
            `Assurez-vous que toutes les installations sont conformes aux normes de sécurité électrique UAE`,
            `Vérifiez les numéros de pièces par rapport aux dimensions commerciales pour un ajustement précis`
          ],
          donts: [
            `N'utilisez pas de matériaux de qualité légère lorsqu'une résistance aux chocs élevée est requise.`,
            `Évitez de dépasser le nombre de pièces recommandé par paquet pour une manipulation en toute sécurité`,
            `Ne remplacez pas Schedule 40 par Schedule 80 dans des environnements à haute pression.`,
            `N'ignorez jamais les exigences minimales en matière d'identification pour le tirage de câbles`
          ]
        }
};
