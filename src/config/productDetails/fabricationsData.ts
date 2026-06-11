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
    { key: 'component', label: 'Component', labelFr: 'Composant', align: 'left' },
    { key: 'specification', label: 'Specification', labelFr: 'Specification', align: 'left' },
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
  titleFr: 'PVC/UPVC Piège à graisse – Type A',
  renderImage: '/images/fabrications/typea_main.png',
  diagramImage: '/images/fabrications/typea_diagram.png',

  shortDescription: 'Type A Grease Trap featuring a single 450 x 280 x 450 deep removable PVC perforated bucket with 25 holes in four rows on each side. Uses a 670x670x15mm GRP sealed cover.',
  shortDescriptionAr: 'مصيدة شحوم النوع A مع دلو PVC مثقب قابل للإزالة بعمق 450 مم وغطاء GRP محكم.',
  shortDescriptionFr: 'Piège à graisse de type A comprenant un seul seau perforé amovible PVC de 450 x 280 x 450 de profondeur avec 25 trous répartis sur quatre rangées de chaque côté. Utilise un couvercle scellé GRP 670x670x15mm.',

  overview: `Type A is a Grease Trap design featuring a single 450 x 280 x 450 deep removable PVC perforated bucket for solid waste collection. It securely fastens with a 670x670x15mm GRP sealed cover.

The CROWN PLASTIC Fabrication and Accessories catalogue presents custom-built PVC/UPVC fabricated products, including various designs of Grease Traps and Interceptors, as well as duct accessories and other miscellaneous fittings.

**Type A Key Specifications:**
• Material: PVC/UPVC, GRP (for cover), Brass (for hardware), Neoprene (for gasket)
• Bucket: Single removable, 450 x 280 x 450 deep, 25 holes in four rows each side
• Cover: GRP sealed, 670x670x15mm
• Duty/Class: As per Dubai Municipality Approved Drawing
• Standards: ISO 9001:2015, ISO 14001:2015, OHSAS 18001`,
  overviewFr: `Le Type A est un piège à graisse doté d'un seul seau PVC perforé amovible de 450 x 280 x 450 mm de profondeur pour la collecte des déchets solides. Il est solidement fixé par un couvercle étanche GRP de 670x670x15mm.

Le catalogue Crown Plastic Pipes / Fittings Fabrications et Accessoires présente des produits PVC/UPVC fabriqués sur mesure, incluant diverses conceptions de pièges à graisse et d'intercepteurs, ainsi que des accessoires de gaine et d'autres raccords divers.

**Spécifications clés Type A :**
• Matériau : PVC/UPVC, GRP (couvercle), Laiton (quincaillerie), Néoprène (joint)
• Seau : Amovible unique, 450 x 280 x 450 de profondeur, 25 trous sur quatre rangées de chaque côté
• Couvercle : GRP étanche, 670x670x15mm
• Classe/Usage : Conformément aux plans approuvés par la municipalité de Dubai
• Normes : ISO 9001:2015, ISO 14001:2015, OHSAS 18001`,

  features: [
    'Single 450 x 280 x 450 deep removable PVC perforated bucket',
    'Bucket has 25 holes in four rows on each side',
    'Uses a 670x670x15mm GRP sealed cover',
    'Secured with 10×30 BRASS WING NUT/BOLT and 5mm THICK NEOPRENE GASKET',
    'Use of PVC/UPVC as primary material',
    'Custom built product based on waste water and site condition',
  ],
  featuresFr: [
    'Seau PVC perforé amovible unique de 450 x 280 x 450 mm de profondeur',
    'Le seau comporte 25 trous répartis sur quatre rangées de chaque côté',
    'Couvercle étanche GRP de 670×670×15 mm',
    'Fixation par BOULON PAPILLON LAITON 10×30 et JOINT NÉOPRÈNE 5 mm',
    'PVC/UPVC utilisé comme matériau principal',
    'Produit fabriqué sur mesure selon les eaux usées et les conditions du site',
  ],

  applications: [
    'Grease Traps, as per Dubai Municipality approved drawing',
    'Commercial kitchen waste management',
    'Restaurant and food service facilities',
    'Industrial wastewater pre-treatment',
    'Grease Traps (Types A, B, C, D)',
    'Petrol/Oil and Water Triple Interceptor',
  ],
  applicationsFr: [
    'Pièges à graisse, conformément aux plans approuvés par la municipalité de Dubai',
    'Gestion des déchets de cuisine commerciale',
    'Établissements de restauration et de service alimentaire',
    'Prétraitement des eaux usées industrielles',
    'Pièges à graisse (Types A, B, C, D)',
    'Triple intercepteur pétrole/huile et eau',
  ],

  pipesTables: [typeAConstructionTable],
  fittings: [],

  downloads: [
    { label: 'PVC/UPVC Fabrications Catalogue (PDF)', labelAr: 'كتالوج تصنيعات PVC/UPVC (PDF)', labelFr: 'Catalogue Fabrications PVC/UPVC (PDF)', href: '/pdfs/UPVC%20FABRICATION%20AND%20ACCESSORIES.pdf' },
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
  dosDontsFr: {
    dos: [
      'Installer selon les plans approuvés par la municipalité de Dubai',
      'Nettoyer et entretenir régulièrement le seau unique perforé',
      'Assurer une bonne étanchéité du joint en néoprène lors du remontage',
      'Utiliser un équipement de levage approprié pour le couvercle GRP (1070×820mm)',
      'Planifier des inspections périodiques pour détecter l\'accumulation de graisse',
    ],
    donts: [
      'Ne pas surcharger avec des déchets solides au-delà de la capacité nominale',
      'Ne pas utiliser de produits chimiques incompatibles susceptibles d\'endommager PVC/UPVC',
      'Ne pas négliger les programmes d\'entretien et de nettoyage réguliers',
      'Ne pas modifier la conception sans approbation de l\'ingénieur',
      'Ne pas éliminer de matières dangereuses via les pièges à graisse',
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
    { key: 'component', label: 'Component', labelFr: 'Composant', align: 'left' },
    { key: 'specification', label: 'Specification', labelFr: 'Specification', align: 'left' },
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
  titleFr: 'PVC/UPVC Piège à graisse – Type B',
  renderImage: '/images/fabrications/typeb_main.png',
  diagramImage: '/images/fabrications/typeb_diagram.png',

  shortDescription: 'Type B Grease Trap featuring two removable PVC perforated buckets (260mm deep) with 250 holes in four rows on each side.',
  shortDescriptionAr: 'مصيدة شحوم النوع B بدلوين PVC مثقبين قابلين للإزالة بعمق 260 مم مع مقابض رفع.',
  shortDescriptionFr: 'Piège à graisse de type B comprenant deux seaux perforés amovibles PVC (260mm de profondeur) avec 250 trous répartis sur quatre rangées de chaque côté.',

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
  overviewFr: `Le Type B est un piège à graisse doté de deux seaux PVC perforés amovibles (260 mm de profondeur) avec 250 trous sur quatre rangées de chaque côté. Le système comprend des poignées de levage ainsi que des composants tels qu'un JOINT 5 mm D'ÉPAISSEUR et un COUVERCLE GRP.

Le catalogue Crown Plastic Pipes / Fittings Fabrications et Accessoires présente des produits PVC/UPVC fabriqués sur mesure, incluant diverses conceptions de pièges à graisse et d'intercepteurs, ainsi que des accessoires de gaine et d'autres raccords divers.

**Spécifications clés Type B :**
• Matériau : PVC/UPVC, GRP (couvercle)
• Configuration des seaux : Deux seaux perforés amovibles, 260 mm de profondeur chacun
• Perforations des seaux : 250 trous sur quatre rangées de chaque côté
• Ergonomie : Poignées de levage pour retrait facile
• Couvercle : Couvercle GRP épais
• Joint : Joint 5 mm d'épaisseur
• Classe/Usage : Conformément aux plans approuvés par la municipalité de Dubai
• Normes : ISO 9001:2015, ISO 14001-2015, OHSAS 18001`,

  features: [
    'Two removable PVC perforated buckets (260mm deep)',
    'Buckets have 250 holes in four rows on each side',
    'Includes lifting handle for easy bucket removal',
    'Features a thick GRP cover and 5mm thick gasket',
    'Use of PVC/UPVC as primary material',
    'Custom built product based on waste water and site condition',
  ],
  featuresFr: [
    'Deux seaux PVC perforés amovibles (260 mm de profondeur)',
    'Les seaux comportent 250 trous répartis sur quatre rangées de chaque côté',
    'Poignées de levage intégrées pour faciliter le retrait des seaux',
    'Couvercle GRP épais et joint de 5 mm d\'épaisseur',
    'PVC/UPVC utilisé comme matériau principal',
    'Produit fabriqué sur mesure selon les eaux usées et les conditions du site',
  ],

  applications: [
    'Grease Traps, as per Dubai Municipality approved drawing',
    'Commercial kitchen waste management requiring frequent access',
    'Restaurant and food service facilities with high grease volumes',
    'Sites requiring easy maintenance with dual bucket system',
    'Grease Traps (Types A, B, C, D)',
    'Petrol/Oil and Water Triple Interceptor',
  ],
  applicationsFr: [
    'Pièges à graisse, conformément aux plans approuvés par la municipalité de Dubai',
    'Gestion des déchets de cuisine commerciale nécessitant un accès fréquent',
    'Établissements de restauration et de service alimentaire à volume de graisses élevé',
    'Sites nécessitant une maintenance aisée grâce au système à double seau',
    'Pièges à graisse (Types A, B, C, D)',
    'Triple intercepteur pétrole/huile et eau',
  ],

  pipesTables: [typeBConstructionTable],
  fittings: [],

  downloads: [
    { label: 'PVC/UPVC Fabrications Catalogue (PDF)', labelAr: 'كتالوج تصنيعات PVC/UPVC (PDF)', labelFr: 'Catalogue Fabrications PVC/UPVC (PDF)', href: '/pdfs/UPVC%20FABRICATION%20AND%20ACCESSORIES.pdf' },
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
  dosDontsFr: {
    dos: [
      'Installer selon les plans approuvés par la municipalité de Dubai',
      'Nettoyer et entretenir régulièrement les deux seaux perforés',
      'Utiliser les poignées de levage lors du retrait des seaux pour le nettoyage',
      'Assurer une bonne étanchéité du joint 5 mm lors du remontage',
      'Planifier des inspections périodiques pour détecter l\'accumulation de graisse dans les deux seaux',
    ],
    donts: [
      'Ne pas surcharger les seaux avec des déchets solides au-delà de la capacité nominale',
      'Ne pas utiliser de produits chimiques incompatibles susceptibles d\'endommager PVC/UPVC',
      'Ne pas négliger l\'entretien régulier du système à double seau',
      'Ne pas modifier la conception sans approbation de l\'ingénieur',
      'Ne pas éliminer de matières dangereuses via les pièges à graisse',
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
    { key: 'component', label: 'Component', labelFr: 'Composant', align: 'left' },
    { key: 'specification', label: 'Specification', labelFr: 'Specification', align: 'left' },
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
  titleFr: 'PVC/UPVC Piège à graisse – Type C',
  renderImage: '/images/fabrications/typec_main.png',
  diagramImage: '/images/fabrications/typec_diagram.png',

  shortDescription: 'Type C Grease Trap featuring three removable PVC perforated buckets with 15 holes in five rows. Notable for its large size (1980mm length) and internal baffle.',
  shortDescriptionAr: 'مصيدة شحوم النوع C كبيرة الحجم بطول 1980 مم مع جدار حاجز داخلي لفصل الشحوم المحسن.',
  shortDescriptionFr: 'Piège à graisse de type C comprenant trois seaux perforés PVC amovibles avec 15 trous sur cinq rangées. Notable pour sa grande taille (longueur 1980mm) et son déflecteur interne.',

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
  overviewFr: `Le Type C est un piège à graisse remarquable par sa grande taille (longueur totale 1980 mm) et l'inclusion d'un DÉFLECTEUR. Il comprend trois seaux PVC perforés amovibles avec 15 trous sur cinq rangées pour une filtration des déchets solides améliorée.

Le catalogue Crown Plastic Pipes / Fittings Fabrications et Accessoires présente des produits PVC/UPVC fabriqués sur mesure, incluant diverses conceptions de pièges à graisse et d'intercepteurs, ainsi que des accessoires de gaine et d'autres raccords divers.

**Spécifications clés Type C :**
• Matériau : PVC/UPVC, Néoprène (joint)
• Longueur totale : 1980 mm (grand format)
• Déflecteur : Paroi déflectrice interne pour une séparation améliorée
• Configuration des seaux : Trois seaux PVC perforés amovibles
• Perforations des seaux : 15 trous sur cinq rangées
• Couvercle : COUVERCLE SUPÉRIEUR PVC 8 mm de 600×450 mm
• Joint : JOINT NÉOPRÈNE 5 mm D'ÉPAISSEUR
• Classe/Usage : Conformément aux plans approuvés par la municipalité de Dubai
• Normes : ISO 9001:2015, ISO 14001-2015, OHSAS 18001`,

  features: [
    'Three removable PVC perforated buckets',
    'Buckets feature 15 holes in five rows',
    'Includes a baffle wall for enhanced grease separation',
    '5mm THICK NEOPRENE GASKET for reliable sealing',
    '600×450mm PVC 8mm TOP COVER',
    'Large overall length of 1980mm for high capacity',
    'Custom built product based on waste water and site condition',
  ],
  featuresFr: [
    'Trois seaux PVC perforés amovibles',
    'Les seaux comportent 15 trous répartis sur cinq rangées',
    'Paroi déflectrice intégrée pour une séparation des graisses améliorée',
    'JOINT NÉOPRÈNE 5 mm d\'épaisseur pour une étanchéité fiable',
    'COUVERCLE SUPÉRIEUR PVC 8 mm de 600×450 mm',
    'Grande longueur totale de 1980 mm pour une haute capacité',
    'Produit fabriqué sur mesure selon les eaux usées et les conditions du site',
  ],

  applications: [
    'Grease Traps, as per Dubai Municipality approved drawing',
    'Large-volume commercial kitchen waste management',
    'Industrial food processing facilities with high grease output',
    'High-capacity wastewater pre-treatment systems',
    'Grease Traps (Types A, B, C, D)',
    'Petrol/Oil and Water Triple Interceptor',
  ],
  applicationsFr: [
    'Pièges à graisse, conformément aux plans approuvés par la municipalité de Dubai',
    'Gestion des déchets de cuisine commerciale à grand volume',
    'Installations industrielles de transformation alimentaire à haute production de graisses',
    'Systèmes de prétraitement des eaux usées à haute capacité',
    'Pièges à graisse (Types A, B, C, D)',
    'Triple intercepteur pétrole/huile et eau',
  ],

  pipesTables: [typeCConstructionTable],
  fittings: [],

  downloads: [
    { label: 'PVC/UPVC Fabrications Catalogue (PDF)', labelAr: 'كتالوج تصنيعات PVC/UPVC (PDF)', labelFr: 'Catalogue Fabrications PVC/UPVC (PDF)', href: '/pdfs/UPVC%20FABRICATION%20AND%20ACCESSORIES.pdf' },
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
  dosDontsFr: {
    dos: [
      'Installer selon les plans approuvés par la municipalité de Dubai',
      'Nettoyer et entretenir régulièrement le seau perforé et la paroi du déflecteur',
      'Assurer une bonne étanchéité du joint en néoprène lors du remontage',
      'Prévoir un espace suffisant pour la longueur totale de 1980 mm lors de l\'installation',
      'Planifier des inspections périodiques pour détecter l\'accumulation de graisse derrière le déflecteur',
    ],
    donts: [
      'Ne pas surcharger avec des déchets solides au-delà de la capacité nominale',
      'Ne pas utiliser de produits chimiques incompatibles susceptibles d\'endommager PVC/UPVC ou le déflecteur',
      'Ne pas négliger le nettoyage de la zone du déflecteur',
      'Ne pas modifier la conception du déflecteur sans approbation de l\'ingénieur',
      'Ne pas éliminer de matières dangereuses via les pièges à graisse',
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
    { key: 'component', label: 'Component', labelFr: 'Composant', align: 'left' },
    { key: 'specification', label: 'Specification', labelFr: 'Specification', align: 'left' },
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
  titleFr: 'PVC/UPVC Piège à graisse – Type D',
  renderImage: '/images/fabrications/typed_main.png',
  diagramImage: '/images/fabrications/typed_diagram.png',

  shortDescription: 'Type D Grease Trap featuring a single 360 x 360 x 300 deep removable PVC perforated bucket with 12mm holes in 3 rows each. Uses a 600x450mm PVC 8mm top cover.',
  shortDescriptionAr: 'مصيدة شحوم النوع D بغطاء GRP محكم 670×670×15 مم مثبت بـ 24 صامولة جناحية.',
  shortDescriptionFr: 'Piège à graisse de type D comprenant un seul seau perforé PVC amovible de 360 x 360 x 300 de profondeur avec des trous de 12mm sur 3 rangées chacun. Utilise un capot supérieur 600x450mm PVC 8mm.',

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
  overviewFr: `Le Type D est un piège à graisse utilisant un couvercle supérieur PVC 8 mm de 600x450 mm fixé par des ÉCROUS PAPILLON. Il comprend un seau PVC perforé amovible compact unique de 360 x 360 x 300 mm de profondeur avec des trous de 12 mm sur 3 rangées de chaque côté.

Le catalogue Crown Plastic Pipes / Fittings Fabrications et Accessoires présente des produits PVC/UPVC fabriqués sur mesure, incluant diverses conceptions de pièges à graisse et d'intercepteurs, ainsi que des accessoires de gaine et d'autres raccords divers.

**Spécifications clés Type D :**
• Matériau : PVC/UPVC, GRP (couvercle)
• Méthode d'assemblage : Fixation par écrous papillon/boulon
• Couvercle : Capot supérieur PVC 8 mm de 600x450 mm
• Fixation : ÉCROUS PAPILLON (24 pièces)
• Bouche d'aération : 055 (2") BOUCHE D'AÉRATION
• Seau : Seau PVC perforé amovible unique, 360x360x300 de profondeur
• Perforations : Trous de 12 mm sur 3 rangées de chaque côté
• Classe/Usage : Conformément aux plans approuvés par la municipalité de Dubai
• Normes : ISO 9001:2015, ISO 14001-2015, OHSAS 18001`,

  features: [
    'Single 360 x 360 x 300 deep removable PVC perforated bucket',
    'Bucket features 12mm holes in 3 rows each',
    'Uses a 600x450mm PVC 8mm top cover',
    'Cover secured by 055 (2") AIR VENT WING NUTS (24 NOS)',
    'Compact design suitable for space-constrained installations',
    'Custom built product based on waste water and site condition',
  ],
  featuresFr: [
    'Seau PVC perforé amovible unique de 360 x 360 x 300 mm de profondeur',
    'Le seau comporte des trous de 12 mm sur 3 rangées de chaque côté',
    'Capot supérieur PVC 8 mm de 600×450 mm',
    'Couvercle fixé par ÉCROUS PAPILLON ÉVENTS D\'AIR 055 (2") (24 pièces)',
    'Conception compacte adaptée aux installations à espace réduit',
    'Produit fabriqué sur mesure selon les eaux usées et les conditions du site',
  ],

  applications: [
    'Grease Traps, as per Dubai Municipality approved drawing',
    'Compact installation sites with space constraints',
    'Small to medium commercial kitchens',
    'Space-constrained building drainage systems',
    'Grease Traps (Types A, B, C, D)',
    'Petrol/Oil and Water Triple Interceptor',
  ],
  applicationsFr: [
    'Pièges à graisse, conformément aux plans approuvés par la municipalité de Dubai',
    'Sites d\'installation compacts à espace réduit',
    'Petites et moyennes cuisines commerciales',
    'Systèmes de drainage de bâtiments à espace contraint',
    'Pièges à graisse (Types A, B, C, D)',
    'Triple intercepteur pétrole/huile et eau',
  ],

  pipesTables: [typeDConstructionTable],
  fittings: [],

  downloads: [
    { label: 'PVC/UPVC Fabrications Catalogue (PDF)', labelAr: 'كتالوج تصنيعات PVC/UPVC (PDF)', labelFr: 'Catalogue Fabrications PVC/UPVC (PDF)', href: '/pdfs/UPVC%20FABRICATION%20AND%20ACCESSORIES.pdf' },
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
  dosDontsFr: {
    dos: [
      'Installer selon les plans approuvés par la municipalité de Dubai',
      'Nettoyer et entretenir régulièrement le seau perforé compact',
      'Fixer correctement les 24 écrous à oreilles lors du remontage',
      'S\'assurer que la bouche d\'aération de 2" n\'est pas obstruée',
      'Planifier des inspections périodiques pour l\'accumulation de graisse',
    ],
    donts: [
      'Ne pas surcharger le seau compact au-delà de sa capacité nominale',
      'Ne pas utiliser de produits chimiques incompatibles susceptibles d\'endommager PVC/UPVC',
      'Ne pas trop serrer les écrous à oreilles sur le couvercle GRP',
      'Ne pas modifier la conception sans approbation de l\'ingénieur',
      'Ne pas éliminer de matières dangereuses via les pièges à graisse',
    ],
  },
};
