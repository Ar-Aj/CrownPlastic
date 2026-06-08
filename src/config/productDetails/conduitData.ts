/**
 * PVC Conduit Pipes Product Detail Configurations
 * 
 * Source: upvcConduitData JSON
 * Two series: Schedule 40 (SCH 40) and Schedule 80 (SCH 80)
 * 
 * Covers PVC Conduit Pipes including heavy-duty and light-duty round conduits
 * based on compression force (1250N, 750N, 320N) and US-standard schedules.
 */

import { type ProductDetailConfig, type PipeTable } from '@/types/productDetail';

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED DATA (from upvcConduitData.globalNotes)
// ═══════════════════════════════════════════════════════════════════════════════

// Standards reference (kept for documentation)
// const sharedStandards = ['ISO 9001:2015', 'ISO 18001'];

const sharedApplications = [
  'Protection of electrical wiring in commercial and residential projects',
  'Cable routing in industrial plants and infrastructure',
  'Underground electrical conduit installations',
  'Communication cable protection systems',
];
const sharedApplicationsFr = [
  'Protection of electrical wiring in commercial and residential projects',
  'Cable routing in industrial plants and infrastructure',
  'Underground electrical conduit installations',
  'Communication cable protection systems',
];

// Features reference (kept for documentation)
// const sharedFeatures = [
//   'Designed for electrical conduit applications in US trade sizes',
//   'Consistent dimensional control for reliable installations',
//   'Excellent electrical insulation properties',
//   'Corrosion-resistant and maintenance-free',
//   'Lightweight for easy handling and installation',
// ];

// ═══════════════════════════════════════════════════════════════════════════════
// PIPE TABLES - Extracted from src/PVC CONDUIT PIPE.txt JSON
// Part No columns excluded per spec
// ═══════════════════════════════════════════════════════════════════════════════

// SCH 40 Tables (4 tables)
const sch40PipesTables: PipeTable[] = [
  // Table 1: SCHEDULE 40 CONDUIT - US
  {
    id: 'schedule_40_conduit_us',
    title: 'SCHEDULE 40 CONDUIT - US',
    columns: [
      { key: 'trade_dimension', label: 'Trade Dimension' },
      { key: 'wall_thickness_mm', label: 'Wall Thickness (mm)' },
      { key: 'mtrs_pack', label: 'Mtrs/Pack' },
      { key: 'length_pc', label: 'Length/Pc' },
    ],
    rows: [
      { trade_dimension: '1½" (16 mm)', wall_thickness_mm: '2.77', mtrs_pack: '20', length_pc: '3 Mtr' },
      { trade_dimension: '3½" (21 mm)', wall_thickness_mm: '2.87', mtrs_pack: '10', length_pc: '3 Mtr' },
      { trade_dimension: '1" (27 mm)', wall_thickness_mm: '3.38', mtrs_pack: '10', length_pc: '3 Mtr' },
      { trade_dimension: '1¼" (35 mm)', wall_thickness_mm: '3.56', mtrs_pack: '5', length_pc: '3 Mtr' },
      { trade_dimension: '1½" (41 mm)', wall_thickness_mm: '3.68', mtrs_pack: '5', length_pc: '3 Mtr' },
      { trade_dimension: '2" (53 mm)', wall_thickness_mm: '3.91', mtrs_pack: '1', length_pc: '3 Mtr' },
      { trade_dimension: '3" (78 mm)', wall_thickness_mm: '5.49', mtrs_pack: '1', length_pc: '3 Mtr' },
      { trade_dimension: '4" (103 mm)', wall_thickness_mm: '6.02', mtrs_pack: '1', length_pc: '3 Mtr' },
      { trade_dimension: '6" (155 mm)', wall_thickness_mm: '7.11', mtrs_pack: '1', length_pc: '3 Mtr' },
    ],
  },
  // Table 2: HEAVY GRADE ROUND CONDUIT - 1250N COMPRESSION FORCE
  {
    id: 'heavy_grade_round_conduit_1250n_compression_force',
    title: 'HEAVY GRADE ROUND CONDUIT - 1250N COMPRESSION FORCE',
    columns: [
      { key: 'dimension', label: 'Dimension' },
      { key: 'min_id', label: 'Min. ID' },
      { key: 'psc_pack', label: 'Psc/Pack' },
      { key: 'mtrs_pack', label: 'Mtrs/Pack' },
      { key: 'length_pc', label: 'Length/Pc' },
    ],
    rows: [
      { dimension: '20 mm', min_id: '16.0 mm', psc_pack: '20', mtrs_pack: '58', length_pc: '2.9 Mtr' },
      { dimension: '25 mm', min_id: '20.7 mm', psc_pack: '20', mtrs_pack: '58', length_pc: '2.9 Mtr' },
      { dimension: '32 mm', min_id: '26.5 mm', psc_pack: '10', mtrs_pack: '29', length_pc: '2.9 Mtr' },
      { dimension: '38 mm', min_id: '32.5 mm', psc_pack: '10', mtrs_pack: '29', length_pc: '2.9 Mtr' },
      { dimension: '50 mm', min_id: '43.0 mm', psc_pack: '5', mtrs_pack: '14.5', length_pc: '2.9 Mtr' },
    ],
  },
  // Table 3: MEDIUM GRADE ROUND CONDUIT - 750N COMPRESSION FORCE
  {
    id: 'medium_grade_round_conduit_750n_compression_force',
    title: 'MEDIUM GRADE ROUND CONDUIT - 750N COMPRESSION FORCE',
    columns: [
      { key: 'dimension', label: 'Dimension' },
      { key: 'min_id', label: 'Min. ID' },
      { key: 'psc_pack', label: 'Psc/Pack' },
      { key: 'mtrs_pack', label: 'Mtrs/Pack' },
      { key: 'length_pc', label: 'Length/Pc' },
    ],
    rows: [
      { dimension: '20 mm', min_id: '16.5 mm', psc_pack: '20', mtrs_pack: '58', length_pc: '2.9 Mtr' },
      { dimension: '25 mm', min_id: '20.9 mm', psc_pack: '20', mtrs_pack: '58', length_pc: '2.9 Mtr' },
      { dimension: '32 mm', min_id: '27.3 mm', psc_pack: '10', mtrs_pack: '29', length_pc: '2.9 Mtr' },
      { dimension: '38 mm', min_id: '33.1 mm', psc_pack: '10', mtrs_pack: '29', length_pc: '2.9 Mtr' },
      { dimension: '50 mm', min_id: '44.4 mm', psc_pack: '5', mtrs_pack: '14.5', length_pc: '2.9 Mtr' },
    ],
  },
  // Table 4: LIGHT GRADE ROUND CONDUIT - 320N COMPRESSION FORCE
  {
    id: 'light_grade_round_conduit_320n_compression_force',
    title: 'LIGHT GRADE ROUND CONDUIT - 320N COMPRESSION FORCE',
    columns: [
      { key: 'dimension', label: 'Dimension' },
      { key: 'min_id', label: 'Min. ID' },
      { key: 'psc_pack', label: 'Psc/Pack' },
      { key: 'mtrs_pack', label: 'Mtrs/Pack' },
      { key: 'length_pc', label: 'Length/Pc' },
    ],
    rows: [
      { dimension: '20 mm', min_id: '16.5 mm', psc_pack: '20', mtrs_pack: '58', length_pc: '2.9 Mtr' },
      { dimension: '25 mm', min_id: '20.9 mm', psc_pack: '20', mtrs_pack: '58', length_pc: '2.9 Mtr' },
      { dimension: '32 mm', min_id: '27.3 mm', psc_pack: '10', mtrs_pack: '29', length_pc: '2.9 Mtr' },
      { dimension: '38 mm', min_id: '33.1 mm', psc_pack: '10', mtrs_pack: '29', length_pc: '2.9 Mtr' },
      { dimension: '50 mm', min_id: '44.4 mm', psc_pack: '5', mtrs_pack: '14.5', length_pc: '2.9 Mtr' },
    ],
  },
];

// SCH 80 Tables (1 table)
const sch80PipesTables: PipeTable[] = [
  // Table 1: SCHEDULE 80 CONDUIT - US
  {
    id: 'schedule_80_conduit_us',
    title: 'SCHEDULE 80 CONDUIT - US',
    columns: [
      { key: 'trade_dimension', label: 'Trade Dimension' },
      { key: 'wall_thickness_mm', label: 'Wall Thickness (mm)' },
      { key: 'mtrs_pack', label: 'Mtrs/Pack' },
      { key: 'length_pc', label: 'Length/Pc' },
    ],
    rows: [
      { trade_dimension: '1½" (16 mm)', wall_thickness_mm: '3.73', mtrs_pack: '20', length_pc: '3 Mtr' },
      { trade_dimension: '½" (21 mm)', wall_thickness_mm: '3.91', mtrs_pack: '10', length_pc: '3 Mtr' },
      { trade_dimension: '1" (27 mm)', wall_thickness_mm: '4.55', mtrs_pack: '10', length_pc: '3 Mtr' },
      { trade_dimension: '1¼" (35 mm)', wall_thickness_mm: '4.85', mtrs_pack: '5', length_pc: '3 Mtr' },
      { trade_dimension: '1½" (41 mm)', wall_thickness_mm: '5.08', mtrs_pack: '5', length_pc: '3 Mtr' },
      { trade_dimension: '2" (53 mm)', wall_thickness_mm: '5.54', mtrs_pack: '1', length_pc: '3 Mtr' },
      { trade_dimension: '3" (78 mm)', wall_thickness_mm: '7.62', mtrs_pack: '1', length_pc: '3 Mtr' },
      { trade_dimension: '4" (103 mm)', wall_thickness_mm: '8.56', mtrs_pack: '1', length_pc: '3 Mtr' },
      { trade_dimension: '6" (155 mm)', wall_thickness_mm: '10.97', mtrs_pack: '1', length_pc: '3 Mtr' },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// PVC CONDUIT PIPES – SCHEDULE 40 (SCH 40)
// ═══════════════════════════════════════════════════════════════════════════════

export const upvcConduitSch40: ProductDetailConfig = {
  slug: 'pvc-conduit-sch-40',
  categorySlug: 'pvc-conduit',

  title: 'PVC Conduit Pipes – SCH 40',
  titleAr: 'أنابيب قنوات UPVC – SCH 40',
    titleFr: `PVC Conduit Tuyaux – SCH 40`,
    shortDescription: 'Schedule 40 PVC conduit pipes for US market applications. Designed for electrical conduit installations with standard wall thickness, available in trade sizes from 1/2" to 6".',
  shortDescriptionAr: 'أنابيب قنوات PVC جدول 40 لتطبيقات السوق الأمريكي. مصممة لتركيبات القنوات الكهربائية بسماكة جدار قياسية.',
    shortDescriptionFr: `Schémadule 40 PVC conduit tuyaux pour les applications du marché américain. Conçu pour les installations électriques avec une épaisseur de paroi standard, disponible dans les tailles commerciales de 1/2" à 6".`,
    overview: `The SCHEDULE 40 CONDUIT is a type of PVC conduit pipe listed for the US market, indicated by the 'US' designation and the use of Trade Dimensions (e.g., 1/2", 3/4", 1").

This document primarily covers PVC Conduit Pipes, including both heavy-duty and light-duty round conduits based on compression force (1250N, 750N, 320N) and the US-standard SCHEDULE 40 and SCHEDULE 80 conduits.

**Key Specifications:**
• Material: PVC
• Duty / Schedule: SCH 40 (Standard Wall)
• System: Heavy / light duty conduit system (US trade sizes)
• Trade Sizes: 1/2" to 6"
• Standards / Certifications: ISO 9001:2015, ISO 18001`,
  overviewAr: `أنابيب قنوات جدول 40 هي نوع من أنابيب قنوات PVC المدرجة للسوق الأمريكي، ويشار إليها بتسمية "US" واستخدام أبعاد التجارة.

**المواصفات الرئيسية:**
• المادة: PVC
• الجدول: SCH 40 (جدار قياسي)
• النظام: نظام قنوات ثقيل/خفيف (مقاسات تجارية أمريكية)
• المعايير: ISO 9001:2015، ISO 18001`,
    overviewFr: `Le SCHEDULE 40 CONDUIT est un type de tuyau PVC conduit répertorié pour le marché américain, indiqué par la désignation « US » et l'utilisation de dimensions commerciales (par exemple, 1/2", 3/4", 1").

Ce document couvre principalement les tuyaux PVC Conduit, y compris les tuyaux ronds duty lourds et légers duty basés sur la force de compression (1250N, 750N, 320N) et la norme américaine SCHEDULE 40 et SCHEDULE 80 conduits.

**Spécifications clés :**
• Matériel : PVC
• Duty / Schedule : SCH 40 (Mur standard)
• Système : Système lourd/léger duty conduit (tailles commerciales américaines)
• Tailles commerciales : 1/2" à 6"
• Normes/Certifications : ISO 9001:2015, ISO 18001`,
    features: [
    'Designed for electrical conduit applications in US trade sizes',
    'Consistent dimensional control for reliable installations',
    'Compatible with SCH 40 PVC fittings and accessories',
    'Excellent electrical insulation properties',
    'Corrosion-resistant and maintenance-free',
    'Lightweight for easy handling and installation',
    'Smooth interior for easy cable pulling',
  ],
  featuresAr: [
    'مصمم لتطبيقات القنوات الكهربائية بمقاسات التجارة الأمريكية',
    'تحكم أبعاد متسق لتركيبات موثوقة',
    'متوافق مع توصيلات وإكسسوارات PVC جدول 40',
    'خصائص عزل كهربائي ممتازة',
    'مقاوم للتآكل ولا يحتاج صيانة',
    'خفيف الوزن لسهولة المناولة والتركيب',
  ],
    featuresFr: [
            `Conçu pour les applications de conduit électriques dans les tailles commerciales américaines`,
            `Contrôle dimensionnel cohérent pour des installations fiables`,
            `Compatible avec les raccords et accessoires SCH 40 PVC`,
            `Excellentes propriétés d'isolation électrique`,
            `Résistant à la corrosion et sans entretien`,
            `Léger pour une manipulation et une installation faciles`,
            `Intérieur lisse pour tirer facilement le câble`
          ],
    applications: sharedApplications,
  applicationsAr: [
    'حماية الأسلاك الكهربائية في المشاريع التجارية والسكنية',
    'توجيه الكابلات في المصانع والبنية التحتية',
    'تركيبات القنوات الكهربائية تحت الأرض',
    'أنظمة حماية كابلات الاتصالات',
  ],
    applicationsFr: sharedApplicationsFr,
    // ───────────────────────────────────────────────────────────────────────────
  // Pipes Section (populated from PVC CONDUIT PIPE.txt JSON)
  // 4 tables: Schedule 40, Heavy Grade, Medium Grade, Light Grade
  // ───────────────────────────────────────────────────────────────────────────
  pipesTables: sch40PipesTables,
    dosDontsFr: {
          dos: [
            `Utilisez une colle à solvant appropriée pour assembler les tuyaux conduit`,
            `Assurer un support et un serrage appropriés aux intervalles recommandés`,
            `Permet la dilatation thermique sur de longues distances`,
            `Utilisez des boîtes de tirage à intervalles appropriés pour les longs câbles.`,
            `Suivez les codes électriques locaux pour l'installation`
          ],
          donts: [
            `Ne pas exposer directement au soleil pendant de longues périodes sans protection UV.`,
            `Ne dépassez pas la capacité de remplissage maximale avec les câbles`,
            `N'utilisez pas de conduit endommagé ou fissuré`,
            `Ne pas mélanger avec des systèmes conduit incompatibles`,
            `Ne pas utiliser pour le transport d’air comprimé ou de fluide`
          ]
        },
    // ───────────────────────────────────────────────────────────────────────────
  // Fittings Section (conduit is pipe-only for now)
  // ───────────────────────────────────────────────────────────────────────────
  fittings: [],

  downloads: [
    { label: 'PVC Conduit Pipes Catalogue (PDF)', href: '/pdfs/UPVC-CONDUIT-PIPES-CATALOGUE.pdf' },
  ],

  dosDonts: {
    dos: [
      'Use appropriate solvent cement for joining conduit pipes',
      'Ensure proper support and clamping at recommended intervals',
      'Allow for thermal expansion in long runs',
      'Use pull boxes at appropriate intervals for long cable runs',
      'Follow local electrical codes for installation',
    ],
    donts: [
      'Do not expose to direct sunlight for extended periods without UV protection',
      'Do not exceed maximum fill capacity with cables',
      'Do not use damaged or cracked conduit',
      'Do not mix with incompatible conduit systems',
      'Do not use for compressed air or fluid transport',
    ],
  },
  dosDontsAr: {
    dos: [
      'استخدم لاصق مذيب مناسب لتوصيل أنابيب القنوات',
      'تأكد من الدعم والتثبيت المناسب على فترات موصى بها',
      'اسمح بالتمدد الحراري في المسارات الطويلة',
      'استخدم صناديق السحب على فترات مناسبة لمسارات الكابلات الطويلة',
      'اتبع أكواد الكهرباء المحلية للتركيب',
    ],
    donts: [
      'لا تعرّض لأشعة الشمس المباشرة لفترات طويلة بدون حماية من الأشعة فوق البنفسجية',
      'لا تتجاوز الحد الأقصى لسعة ملء الكابلات',
      'لا تستخدم قنوات تالفة أو متشققة',
      'لا تخلط مع أنظمة قنوات غير متوافقة',
      'لا تستخدم للهواء المضغوط أو نقل السوائل',
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// PVC CONDUIT PIPES – SCHEDULE 80 (SCH 80)
// ═══════════════════════════════════════════════════════════════════════════════

export const upvcConduitSch80: ProductDetailConfig = {
  slug: 'pvc-conduit-sch-80',
  categorySlug: 'pvc-conduit',

  title: 'PVC Conduit Pipes – SCH 80',
  titleAr: 'أنابيب قنوات UPVC – SCH 80',
    titleFr: `PVC Conduit Tuyaux – SCH 80`,
    shortDescription: 'Schedule 80 heavy-duty PVC conduit pipes for US market applications. Features thicker walls compared to SCH 40 for demanding installations requiring extra protection.',
  shortDescriptionAr: 'أنابيب قنوات PVC جدول 80 ثقيلة الاستخدام لتطبيقات السوق الأمريكي. تتميز بجدران أكثر سماكة مقارنة بجدول 40.',
    shortDescriptionFr: `Schémadule 80 tuyaux lourds-duty PVC conduit pour les applications du marché américain. Présente des parois plus épaisses par rapport au SCH 40 pour les installations exigeantes nécessitant une protection supplémentaire.`,
    overview: `The SCHEDULE 80 CONDUIT is a heavy-duty PVC conduit pipe for the US market, featuring thicker walls compared to SCH 40 for demanding installations requiring extra protection and mechanical strength.

This document primarily covers PVC Conduit Pipes, including both heavy-duty and light-duty round conduits based on compression force (1250N, 750N, 320N) and the US-standard SCHEDULE 40 and SCHEDULE 80 conduits.

**Key Specifications:**
• Material: PVC
• Duty / Schedule: SCH 80 (Heavy Duty / Extra-Thick Wall)
• System: Heavy duty conduit system (US trade sizes)
• Trade Sizes: 1/2" to 6"
• Standards / Certifications: ISO 9001:2015, ISO 18001`,
  overviewAr: `أنابيب قنوات جدول 80 هي أنابيب قنوات PVC ثقيلة الاستخدام للسوق الأمريكي، تتميز بجدران أكثر سماكة مقارنة بجدول 40 للتركيبات المطلوبة التي تحتاج حماية إضافية.

**المواصفات الرئيسية:**
• المادة: PVC
• الجدول: SCH 80 (استخدام ثقيل / جدار سميك إضافي)
• النظام: نظام قنوات ثقيل (مقاسات تجارية أمريكية)
• المعايير: ISO 9001:2015، ISO 18001`,
    overviewFr: `Le SCHEDULE 80 CONDUIT est un tuyau lourd duty PVC conduit destiné au marché américain, doté de parois plus épaisses que le SCH 40 pour les installations exigeantes nécessitant une protection et une résistance mécanique supplémentaires.

Ce document couvre principalement les tuyaux PVC Conduit, y compris les tuyaux ronds duty lourds et légers duty basés sur la force de compression (1250N, 750N, 320N) et les normes américaines SCHEDULE 40 et SCHEDULE 80 conduits.

**Spécifications clés :**
• Matériel : PVC
• Duty / Schedule : SCH 80 (Lourd Duty / Paroi très épaisse)
• Système : système lourd duty conduit (tailles commerciales américaines)
• Tailles commerciales : 1/2" à 6"
• Normes/Certifications : ISO 9001:2015, ISO 18001`,
    features: [
    'Heavy-duty construction with thicker walls than SCH 40',
    'Enhanced mechanical protection for demanding environments',
    'Designed for electrical conduit applications in US trade sizes',
    'Suitable for direct burial and concrete encasement',
    'Compatible with SCH 80 PVC fittings and accessories',
    'Excellent electrical insulation properties',
    'Corrosion-resistant and maintenance-free',
    'Higher crush resistance for industrial applications',
  ],
  featuresAr: [
    'بناء ثقيل الاستخدام بجدران أكثر سماكة من جدول 40',
    'حماية ميكانيكية معززة للبيئات المتطلبة',
    'مصمم لتطبيقات القنوات الكهربائية بمقاسات التجارة الأمريكية',
    'مناسب للدفن المباشر والتغليف بالخرسانة',
    'متوافق مع توصيلات وإكسسوارات PVC جدول 80',
    'خصائص عزل كهربائي ممتازة',
    'مقاوم للتآكل ولا يحتاج صيانة',
  ],
    featuresFr: [
            `Construction lourde-duty avec des murs plus épais que SCH 40`,
            `Protection mécanique améliorée pour les environnements exigeants`,
            `Conçu pour les applications de conduit électriques dans les tailles commerciales américaines`,
            `Convient pour un enterrement direct et un enrobage de béton`,
            `Compatible avec les raccords et accessoires SCH 80 PVC`,
            `Excellentes propriétés d'isolation électrique`,
            `Résistant à la corrosion et sans entretien`,
            `Résistance à l'écrasement plus élevée pour les applications industrielles`
          ],
    applications: [
    'Protection of electrical wiring in commercial and industrial facilities',
    'Underground and direct burial electrical installations',
    'Cable routing in heavy industrial plants',
    'Areas requiring high mechanical protection',
    'Concrete-encased electrical conduit runs',
    'Communication infrastructure in demanding environments',
  ],
  applicationsAr: [
    'حماية الأسلاك الكهربائية في المنشآت التجارية والصناعية',
    'التركيبات الكهربائية تحت الأرض والدفن المباشر',
    'توجيه الكابلات في المصانع الصناعية الثقيلة',
    'المناطق التي تتطلب حماية ميكانيكية عالية',
    'مسارات القنوات الكهربائية المغلفة بالخرسانة',
  ],
    applicationsFr: [
            `Protection du câblage électrique dans les installations commerciales et industrielles`,
            `Installations électriques souterraines et enterrées directement`,
            `Acheminement des câbles dans les installations industrielles lourdes`,
            `Zones nécessitant une haute protection mécanique`,
            `Connexion électrique sous bétonduelle fonctionne`,
            `Infrastructure de communication dans des environnements exigeants`
          ],
    // ───────────────────────────────────────────────────────────────────────────
  // Pipes Section (populated from PVC CONDUIT PIPE.txt JSON)
  // 1 table: Schedule 80
  // ───────────────────────────────────────────────────────────────────────────
  pipesTables: sch80PipesTables,
    dosDontsFr: {
          dos: [
            `Utilisez une colle à solvant appropriée pour assembler les tuyaux conduit`,
            `Assurer un support et un serrage appropriés aux intervalles recommandés`,
            `Permet la dilatation thermique sur de longues distances`,
            `Utilisez des boîtes de tirage à intervalles appropriés pour les longs câbles.`,
            `Suivez les codes électriques locaux pour l'installation`,
            `Utilisez les raccords SCH 80 avec SCH 80 conduit pour une épaisseur de paroi constante`
          ],
          donts: [
            `Ne pas exposer directement au soleil pendant de longues périodes sans protection UV.`,
            `Ne dépassez pas la capacité de remplissage maximale avec les câbles`,
            `N'utilisez pas de conduit endommagé ou fissuré`,
            `Ne mélangez pas SCH 80 avec SCH 40 dans le même passage sans transitions appropriées`,
            `Ne pas utiliser pour le transport d’air comprimé ou de fluide`
          ]
        },
    // ───────────────────────────────────────────────────────────────────────────
  // Fittings Section (conduit is pipe-only for now)
  // ───────────────────────────────────────────────────────────────────────────
  fittings: [],

  downloads: [
    { label: 'PVC Conduit Pipes Catalogue (PDF)', href: '/pdfs/UPVC-CONDUIT-PIPES-CATALOGUE.pdf' },
  ],

  dosDonts: {
    dos: [
      'Use appropriate solvent cement for joining conduit pipes',
      'Ensure proper support and clamping at recommended intervals',
      'Allow for thermal expansion in long runs',
      'Use pull boxes at appropriate intervals for long cable runs',
      'Follow local electrical codes for installation',
      'Use SCH 80 fittings with SCH 80 conduit for consistent wall thickness',
    ],
    donts: [
      'Do not expose to direct sunlight for extended periods without UV protection',
      'Do not exceed maximum fill capacity with cables',
      'Do not use damaged or cracked conduit',
      'Do not mix SCH 80 with SCH 40 in the same run without proper transitions',
      'Do not use for compressed air or fluid transport',
    ],
  },
  dosDontsAr: {
    dos: [
      'استخدم لاصق مذيب مناسب لتوصيل أنابيب القنوات',
      'تأكد من الدعم والتثبيت المناسب على فترات موصى بها',
      'اسمح بالتمدد الحراري في المسارات الطويلة',
      'استخدم صناديق السحب على فترات مناسبة لمسارات الكابلات الطويلة',
      'اتبع أكواد الكهرباء المحلية للتركيب',
      'استخدم توصيلات جدول 80 مع قنوات جدول 80 لسماكة جدار متسقة',
    ],
    donts: [
      'لا تعرّض لأشعة الشمس المباشرة لفترات طويلة بدون حماية من الأشعة فوق البنفسجية',
      'لا تتجاوز الحد الأقصى لسعة ملء الكابلات',
      'لا تستخدم قنوات تالفة أو متشققة',
      'لا تخلط جدول 80 مع جدول 40 في نفس المسار بدون انتقالات مناسبة',
      'لا تستخدم للهواء المضغوط أو نقل السوائل',
    ],
  },
};
