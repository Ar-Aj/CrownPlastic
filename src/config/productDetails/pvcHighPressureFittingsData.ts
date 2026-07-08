/**
 * PVC High Pressure Fittings - Product Detail Configurations
 * Phase 2.4 — 3 sub-products:
 *   1. pvc-hp-fittings-din-8063        → DIN 8063 (13 fitting types)
 *   2. pvc-hp-fittings-bs-en-1452-3    → BS EN 1452:3 / BS 4346 (17 fitting types)
 *   3. pvc-hp-fittings-valves          → Valves (4 fitting types)
 * SEO: UAE/GCC/Dubai locality keywords injected.
 */
import { type ProductDetailConfig } from '@/types/productDetail';
// ═══════════════════════════════════════════════════════════════════════════════
// 1) DIN 8063 Fittings
// ═══════════════════════════════════════════════════════════════════════════════
export const pvcHpFittingsDin8063: ProductDetailConfig = {
  slug: 'pvc-hp-fittings-din-8063',
  categorySlug: 'pvc-high-pressure-fittings',
  title: 'PVC High Pressure Fittings DIN 8063',
  titleAr: 'وصلات الضغط العالي PVC وفق DIN 8063',
    titleFr: `PVC Raccords haute pression DIN 8063`,
    shortDescription: 'PVC-U pressure fittings to DIN 8063 — PN 10/16, metric 20–200 mm.',
  shortDescriptionAr: 'وصلات ضغط PVC-U وفق DIN 8063 — PN 10/16، متري 20–200 مم.',
    shortDescriptionFr: `Raccords à pression PVC-U selon DIN 8063 — PN 10/16, métrique 20–200 mm.`,
    overview: `Crown Plastic Pipes / Fittings, a leading PVC-U pressure fittings manufacturer in the UAE, produces a comprehensive range of DIN 8063 metric fittings engineered for the demanding industrial environments of the Gulf region. Rated PN 10 and PN 16, these fittings offer superior chemical resistance and high-pressure tolerance — the preferred choice for contractors across the UAE. Manufactured at our ISO 9001:2015 certified facility in Umm Al Quwain, the range spans 20 mm to 200 mm and includes elbows, tees, reducers, adaptors, unions, and end caps.`,
  overviewAr: `تصنّع كراون للأنابيب والوصلات البلاستيكية، الشركة الرائدة في تصنيع وصلات الضغط PVC-U في الإمارات، مجموعة شاملة من وصلات DIN 8063 المترية المصممة للبيئات الصناعية الصعبة في منطقة الخليج. مصنفة PN 10 و PN 16، توفر هذه الوصلات مقاومة كيميائية فائقة وتحمل ضغط عالٍ — الخيار المفضل للمقاولين في دبي وأبوظبي والخليج. مصنعة في منشأتنا المعتمدة ISO 9001:2015 بأم القيوين، يتراوح النطاق من 20 مم إلى 200 مم.`,
    overviewFr: `Crown Plastic Pipes / Fittings, l'un des principaux fabricants de raccords à pression PVC-U dans le UAE, produit une gamme complète de raccords métriques DIN 8063 conçus pour les environnements industriels exigeants de la région du Golfe. Classés PN 10 et PN 16, ces raccords offrent une résistance chimique supérieure et une tolérance à haute pression - le choix préféré des entrepreneurs du UAE. Mfabriqués dans notre usine certifiée ISO 9001:2015 à Umm Al Quwain, la gamme s'étend du 20 mm au 200 mm et comprend des coudes, des tés, des raccords, des adaptateurs, des raccords et des extrémités. casquettes.`,
    features: [
    'Manufactured to strict DIN 8063 standards for metric pressure piping — leading UAE producer',
    'High-pressure tolerance ratings of PN16 and PN10 for industrial reliability',
    'Premium PVC-U material ensures excellent chemical and corrosion resistance',
    'Comprehensive size range from 20 mm up to 200 mm nominal diameters',
    'ISO 9001:2015 certified quality management at our Umm Al Quwain facility',
    'Designed for extreme GCC climates with durable solvent cement joints',
  ],
  featuresAr: [
    'مصنعة وفق معايير DIN 8063 الصارمة للأنابيب المترية — مصنع رائد في الإمارات',
    'تصنيف ضغط عالٍ PN16 و PN10 للموثوقية الصناعية',
    'مادة PVC-U فاخرة تضمن مقاومة كيميائية وتآكل ممتازة',
    'نطاق مقاسات شامل من 20 مم حتى 200 مم أقطار اسمية',
    'إدارة جودة معتمدة ISO 9001:2015 في منشأتنا بأم القيوين',
    'مصممة لمناخات الخليج القاسية مع وصلات لحام بالمذيب المتينة',
  ],
    featuresFr: [
            `Fabriqué selon les normes strictes DIN 8063 pour les canalisations à pression métrique — principal fabricant UAE`,
            `Tolérances haute pression de PN16 et PN10 pour une fiabilité industrielle irréprochable`,
            `Le matériau premium PVC-U assure une excellente résistance aux produits chimiques et à la corrosion`,
            `Gamme complète de tailles allant de 20 mm à 200 mm diamètres nominaux`,
            `Gestion de la qualité certifiée ISO 9001:2015 dans notre usine d'Umm Al Quwain`,
            `Conçu pour les climats extrêmes GCC avec des joints de ciment à solvant durables`
          ],
    applications: [
    'Potable water distribution and municipal water supply systems in the UAE',
    'Industrial chemical processing and fluid handling',
    'High-pressure irrigation and landscaping networks in UAE/GCC',
    'Water treatment facilities and industrial cooling systems',
  ],
  applicationsAr: [
    'أنظمة توزيع مياه الشرب والإمداد البلدي في الإمارات',
    'المعالجة الكيميائية الصناعية ومناولة السوائل',
    'شبكات الري والتنسيق عالية الضغط في الإمارات والخليج',
    'محطات معالجة المياه وأنظمة التبريد الصناعية',
  ],
    applicationsFr: [
            `Réseaux de distribution d’eau potable et d’approvisionnement en eau municipale dans le UAE`,
            `Traitement chimique industriel et manipulation des fluides`,
            `Réseaux d'irrigation et d'aménagement paysager à haute pression en UAE/GCC`,
            `Installations de traitement des eaux et systèmes de refroidissement industriels`
          ],
    pipesTables: [],
  fittings: [
    {
      id: 'elbow-90--din-8063',
      name: 'ELBOW 90°',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/PVC PRESSURE FITTINGS DIN 8063/elbow-90.png',
      sizes: [ { sizeMm: '20' }, { sizeMm: '25' }, { sizeMm: '32' }, { sizeMm: '40' }, { sizeMm: '50' }, { sizeMm: '63' }, { sizeMm: '75' }, { sizeMm: '90' }, { sizeMm: '110' }, { sizeMm: '160' }, { sizeMm: '200' } ],
      table: {
        id: 'elbow-90--din-8063-table',
        title: 'ELBOW 90° DIN 8063', titleFr: 'COUDE 90° DIN 8063',
        columns: [
{ key: 'hp_fit_nominal_size_mm', label: 'products.tables.hp_fit_nominal_size_mm', labelFr: 'products.tables.hp_fit_nominal_size_mm' },
          { key: 'hp_fit_dimensions_mm_d', label: 'products.tables.hp_fit_dimensions_mm_d', labelFr: 'products.tables.hp_fit_dimensions_mm_d' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' , colSpan: 3 },
          { key: 'hp_fit_dimensions_mm_l', label: 'products.tables.hp_fit_dimensions_mm_l', labelFr: 'products.tables.hp_fit_dimensions_mm_l' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_mm': '20', 'hp_fit_dimensions_mm_d': '20', 'hp_fit_dimensions_mm_l': '16.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '25', 'hp_fit_dimensions_mm_d': '25', 'hp_fit_dimensions_mm_l': '19.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '32', 'hp_fit_dimensions_mm_d': '32', 'hp_fit_dimensions_mm_l': '22.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '40', 'hp_fit_dimensions_mm_d': '40', 'hp_fit_dimensions_mm_l': '26.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '50', 'hp_fit_dimensions_mm_d': '50', 'hp_fit_dimensions_mm_l': '31.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '63', 'hp_fit_dimensions_mm_d': '63', 'hp_fit_dimensions_mm_l': '38.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '75', 'hp_fit_dimensions_mm_d': '75', 'hp_fit_dimensions_mm_l': '44.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '90', 'hp_fit_dimensions_mm_d': '90', 'hp_fit_dimensions_mm_l': '51.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '110', 'hp_fit_dimensions_mm_d': '110', 'hp_fit_dimensions_mm_l': '61.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '160', 'hp_fit_dimensions_mm_d': '160', 'hp_fit_dimensions_mm_l': '86.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '200', 'hp_fit_dimensions_mm_d': '200', 'hp_fit_dimensions_mm_l': '106.5', 'hp_fit_pn': '10' }
        ]
      }
    },
    {
      id: 'elbow-45--din-8063',
      name: 'ELBOW 45°',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/PVC PRESSURE FITTINGS DIN 8063/elbow-45.png',
      sizes: [ { sizeMm: '20' }, { sizeMm: '25' }, { sizeMm: '32' }, { sizeMm: '40' }, { sizeMm: '50' }, { sizeMm: '63' }, { sizeMm: '75' }, { sizeMm: '90' }, { sizeMm: '110' }, { sizeMm: '160' }, { sizeMm: '200' } ],
      table: {
        id: 'elbow-45--din-8063-table',
        title: 'ELBOW 45° DIN 8063', titleFr: 'COUDE 45° DIN 8063',
        columns: [
{ key: 'hp_fit_nominal_size_mm', label: 'products.tables.hp_fit_nominal_size_mm', labelFr: 'products.tables.hp_fit_nominal_size_mm' },
          { key: 'hp_fit_dimensions_mm_d', label: 'products.tables.hp_fit_dimensions_mm_d', labelFr: 'products.tables.hp_fit_dimensions_mm_d' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' , colSpan: 3 },
          { key: 'hp_fit_dimensions_mm_l', label: 'products.tables.hp_fit_dimensions_mm_l', labelFr: 'products.tables.hp_fit_dimensions_mm_l' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_dimensions_mm_pn', label: 'products.tables.hp_fit_dimensions_mm_pn', labelFr: 'products.tables.hp_fit_dimensions_mm_pn' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_mm': '20', 'hp_fit_dimensions_mm_d': '20', 'hp_fit_dimensions_mm_l': '16.5', 'hp_fit_dimensions_mm_pn': '16' },
          { 'hp_fit_nominal_size_mm': '25', 'hp_fit_dimensions_mm_d': '25', 'hp_fit_dimensions_mm_l': '19.5', 'hp_fit_dimensions_mm_pn': '16' },
          { 'hp_fit_nominal_size_mm': '32', 'hp_fit_dimensions_mm_d': '32', 'hp_fit_dimensions_mm_l': '22.5', 'hp_fit_dimensions_mm_pn': '16' },
          { 'hp_fit_nominal_size_mm': '40', 'hp_fit_dimensions_mm_d': '40', 'hp_fit_dimensions_mm_l': '26.5', 'hp_fit_dimensions_mm_pn': '16' },
          { 'hp_fit_nominal_size_mm': '50', 'hp_fit_dimensions_mm_d': '50', 'hp_fit_dimensions_mm_l': '31.5', 'hp_fit_dimensions_mm_pn': '16' },
          { 'hp_fit_nominal_size_mm': '63', 'hp_fit_dimensions_mm_d': '63', 'hp_fit_dimensions_mm_l': '38.5', 'hp_fit_dimensions_mm_pn': '16' },
          { 'hp_fit_nominal_size_mm': '75', 'hp_fit_dimensions_mm_d': '75', 'hp_fit_dimensions_mm_l': '44.5', 'hp_fit_dimensions_mm_pn': '16' },
          { 'hp_fit_nominal_size_mm': '90', 'hp_fit_dimensions_mm_d': '90', 'hp_fit_dimensions_mm_l': '51.5', 'hp_fit_dimensions_mm_pn': '16' },
          { 'hp_fit_nominal_size_mm': '110', 'hp_fit_dimensions_mm_d': '110', 'hp_fit_dimensions_mm_l': '61.5', 'hp_fit_dimensions_mm_pn': '16' },
          { 'hp_fit_nominal_size_mm': '160', 'hp_fit_dimensions_mm_d': '160', 'hp_fit_dimensions_mm_l': '86.5', 'hp_fit_dimensions_mm_pn': '16' },
          { 'hp_fit_nominal_size_mm': '200', 'hp_fit_dimensions_mm_d': '200', 'hp_fit_dimensions_mm_l': '106.5', 'hp_fit_dimensions_mm_pn': '10' }
        ]
      }
    },
    {
      id: 'female-elbow-90--din-8063',
      name: 'FEMALE ELBOW 90°',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/PVC PRESSURE FITTINGS DIN 8063/female-elbow-90.png',
      sizes: [ { sizeMm: '20 x 1/2"', sizeInch: '20 x 1/2"' }, { sizeMm: '25 x 3/4"', sizeInch: '25 x 3/4"' }, { sizeMm: '32 x 1"', sizeInch: '32 x 1"' }, { sizeMm: '40 x 1 1/4"', sizeInch: '40 x 1 1/4"' }, { sizeMm: '50 x 1 1/2"', sizeInch: '50 x 1 1/2"' }, { sizeMm: '63 x 2"', sizeInch: '63 x 2"' } ],
      table: {
        id: 'female-elbow-90--din-8063-table',
        title: 'FEMALE ELBOW 90° DIN 8063', titleFr: 'FEMELLE COUDE 90° DIN 8063',
        columns: [
{ key: 'hp_fit_nominal_size_mm', label: 'products.tables.hp_fit_nominal_size_mm', labelFr: 'products.tables.hp_fit_nominal_size_mm' },
          { key: 'hp_fit_dimensions_mm_d', label: 'products.tables.hp_fit_dimensions_mm_d', labelFr: 'products.tables.hp_fit_dimensions_mm_d' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' , colSpan: 4 },
          { key: 'hp_fit_dimensions_mm_g', label: 'products.tables.hp_fit_dimensions_mm_g', labelFr: 'products.tables.hp_fit_dimensions_mm_g' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_dimensions_mm_l', label: 'products.tables.hp_fit_dimensions_mm_l', labelFr: 'products.tables.hp_fit_dimensions_mm_l' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_mm': '20 x 1/2"', 'hp_fit_dimensions_mm_d': '20', 'hp_fit_dimensions_mm_g': '1/2"', 'hp_fit_dimensions_mm_l': '16.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '25 x 3/4"', 'hp_fit_dimensions_mm_d': '25', 'hp_fit_dimensions_mm_g': '3/4"', 'hp_fit_dimensions_mm_l': '19.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '32 x 1"', 'hp_fit_dimensions_mm_d': '32', 'hp_fit_dimensions_mm_g': '1"', 'hp_fit_dimensions_mm_l': '22.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '40 x 1 1/4"', 'hp_fit_dimensions_mm_d': '40', 'hp_fit_dimensions_mm_g': '1 1/4"', 'hp_fit_dimensions_mm_l': '26.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '50 x 1 1/2"', 'hp_fit_dimensions_mm_d': '50', 'hp_fit_dimensions_mm_g': '1 1/2"', 'hp_fit_dimensions_mm_l': '31.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '63 x 2"', 'hp_fit_dimensions_mm_d': '63', 'hp_fit_dimensions_mm_g': '2"', 'hp_fit_dimensions_mm_l': '38.5', 'hp_fit_pn': '16' }
        ]
      }
    },
    {
      id: 'socket-coupler-din-8063',
      name: 'SOCKET/COUPLER',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/PVC PRESSURE FITTINGS DIN 8063/socket-coupler.png',
      sizes: [ { sizeMm: '20' }, { sizeMm: '25' }, { sizeMm: '32' }, { sizeMm: '40' }, { sizeMm: '50' }, { sizeMm: '63' }, { sizeMm: '75' }, { sizeMm: '90' }, { sizeMm: '110' }, { sizeMm: '160' }, { sizeMm: '200' } ],
      table: {
        id: 'socket-coupler-din-8063-table',
        title: 'SOCKET/COUPLER DIN 8063', titleFr: 'MANCHON/COUPLER DIN 8063',
        columns: [
{ key: 'hp_fit_nominal_size_mm', label: 'products.tables.hp_fit_nominal_size_mm', labelFr: 'products.tables.hp_fit_nominal_size_mm' },
          { key: 'hp_fit_dimensions_mm_d', label: 'products.tables.hp_fit_dimensions_mm_d', labelFr: 'products.tables.hp_fit_dimensions_mm_d' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' , colSpan: 3 },
          { key: 'hp_fit_dimensions_mm_l', label: 'products.tables.hp_fit_dimensions_mm_l', labelFr: 'products.tables.hp_fit_dimensions_mm_l' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_mm': '20', 'hp_fit_dimensions_mm_d': '20', 'hp_fit_dimensions_mm_l': '16.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '25', 'hp_fit_dimensions_mm_d': '25', 'hp_fit_dimensions_mm_l': '19.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '32', 'hp_fit_dimensions_mm_d': '32', 'hp_fit_dimensions_mm_l': '22.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '40', 'hp_fit_dimensions_mm_d': '40', 'hp_fit_dimensions_mm_l': '26.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '50', 'hp_fit_dimensions_mm_d': '50', 'hp_fit_dimensions_mm_l': '31.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '63', 'hp_fit_dimensions_mm_d': '63', 'hp_fit_dimensions_mm_l': '38.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '75', 'hp_fit_dimensions_mm_d': '75', 'hp_fit_dimensions_mm_l': '44.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '90', 'hp_fit_dimensions_mm_d': '90', 'hp_fit_dimensions_mm_l': '51.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '110', 'hp_fit_dimensions_mm_d': '110', 'hp_fit_dimensions_mm_l': '61.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '160', 'hp_fit_dimensions_mm_d': '160', 'hp_fit_dimensions_mm_l': '86.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '200', 'hp_fit_dimensions_mm_d': '200', 'hp_fit_dimensions_mm_l': '106.5', 'hp_fit_pn': '10' }
        ]
      }
    },
    {
      id: 'reducer-bush-socket-din-8063',
      name: 'REDUCER BUSH/SOCKET',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/PVC PRESSURE FITTINGS DIN 8063/reducer-bush.png',
      sizeHeaderOverride: 'products.tables.hp_fit_nominal_size_mm_mm',
      sizes: [ { sizeMm: '25 X 20' }, { sizeMm: '32 X 20' }, { sizeMm: '32 X 25' }, { sizeMm: '40 X 20' }, { sizeMm: '40 X 25' }, { sizeMm: '40 X 32' }, { sizeMm: '50 X 20' }, { sizeMm: '50 X 25' }, { sizeMm: '50 X 32' }, { sizeMm: '50 X 40' }, { sizeMm: '63 X 25' }, { sizeMm: '63 X 32' }, { sizeMm: '63 X 40' }, { sizeMm: '63 X 50' }, { sizeMm: '75 X 50' }, { sizeMm: '75 X 63' }, { sizeMm: '90 X 63' }, { sizeMm: '90 X 75' }, { sizeMm: '110 X 63' }, { sizeMm: '110 X 75' }, { sizeMm: '110 X 90' }, { sizeMm: '160 X 90' }, { sizeMm: '160 X 110' } ],
      table: {
        id: 'reducer-bush-socket-din-8063-table',
        title: 'REDUCER BUSH/SOCKET DIN 8063', titleFr: 'BAGUE DE RÉDUCTION/MANCHON DIN 8063',
        columns: [
{ key: 'hp_fit_nominal_size_mm', label: 'Nominal Size (mm x mm)', labelFr: 'Taille Nominale (mm x mm)' },
          { key: 'hp_fit_dimensions_mm_d', label: 'products.tables.hp_fit_dimensions_mm_d', labelFr: 'products.tables.hp_fit_dimensions_mm_d' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' , colSpan: 4 },
          { key: 'hp_fit_dimensions_mm_d', label: 'products.tables.hp_fit_dimensions_mm_d', labelFr: 'products.tables.hp_fit_dimensions_mm_d' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_dimensions_mm_l', label: 'products.tables.hp_fit_dimensions_mm_l', labelFr: 'products.tables.hp_fit_dimensions_mm_l' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_mm': '25 X 20', 'hp_fit_dimensions_mm_d': '20', 'hp_fit_dimensions_mm_l': '16.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '32 X 20', 'hp_fit_dimensions_mm_d': '20', 'hp_fit_dimensions_mm_l': '16.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '32 X 25', 'hp_fit_dimensions_mm_d': '25', 'hp_fit_dimensions_mm_l': '19.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '40 X 20', 'hp_fit_dimensions_mm_d': '20', 'hp_fit_dimensions_mm_l': '16.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '40 X 25', 'hp_fit_dimensions_mm_d': '25', 'hp_fit_dimensions_mm_l': '19.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '40 X 32', 'hp_fit_dimensions_mm_d': '32', 'hp_fit_dimensions_mm_l': '22.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '50 X 20', 'hp_fit_dimensions_mm_d': '20', 'hp_fit_dimensions_mm_l': '16.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '50 X 25', 'hp_fit_dimensions_mm_d': '25', 'hp_fit_dimensions_mm_l': '19.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '50 X 32', 'hp_fit_dimensions_mm_d': '32', 'hp_fit_dimensions_mm_l': '22.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '50 X 40', 'hp_fit_dimensions_mm_d': '40', 'hp_fit_dimensions_mm_l': '26.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '63 X 25', 'hp_fit_dimensions_mm_d': '25', 'hp_fit_dimensions_mm_l': '19.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '63 X 32', 'hp_fit_dimensions_mm_d': '32', 'hp_fit_dimensions_mm_l': '22.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '63 X 40', 'hp_fit_dimensions_mm_d': '40', 'hp_fit_dimensions_mm_l': '26.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '63 X 50', 'hp_fit_dimensions_mm_d': '50', 'hp_fit_dimensions_mm_l': '31.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '75 X 50', 'hp_fit_dimensions_mm_d': '50', 'hp_fit_dimensions_mm_l': '31.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '75 X 63', 'hp_fit_dimensions_mm_d': '63', 'hp_fit_dimensions_mm_l': '38.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '90 X 63', 'hp_fit_dimensions_mm_d': '63', 'hp_fit_dimensions_mm_l': '38.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '90 X 75', 'hp_fit_dimensions_mm_d': '75', 'hp_fit_dimensions_mm_l': '44.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '110 X 63', 'hp_fit_dimensions_mm_d': '63', 'hp_fit_dimensions_mm_l': '38.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '110 X 75', 'hp_fit_dimensions_mm_d': '75', 'hp_fit_dimensions_mm_l': '44.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '110 X 90', 'hp_fit_dimensions_mm_d': '90', 'hp_fit_dimensions_mm_l': '51.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '160 X 90', 'hp_fit_dimensions_mm_d': '90', 'hp_fit_dimensions_mm_l': '51.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '160 X 110', 'hp_fit_dimensions_mm_d': '110', 'hp_fit_dimensions_mm_l': '61.5', 'hp_fit_pn': '16' }
        ]
      }
    },
    {
      id: 'male-threaded-adaptor-socket-nipple-socket-din-8063',
      name: 'MALE THREADED ADAPTOR/SOCKET/ NIPPLE SOCKET',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/PVC PRESSURE FITTINGS DIN 8063/male-threaded-adaptor.png',
      sizes: [ { sizeMm: '20 x 1/2"', sizeInch: '20 x 1/2"' }, { sizeMm: '25 x 3/4"', sizeInch: '25 x 3/4"' }, { sizeMm: '32 x 1"', sizeInch: '32 x 1"' }, { sizeMm: '40 x 1 1/4"', sizeInch: '40 x 1 1/4"' }, { sizeMm: '50 x 1 1/2"', sizeInch: '50 x 1 1/2"' }, { sizeMm: '63 x 2"', sizeInch: '63 x 2"' }, { sizeMm: '75 x 2 1/2"', sizeInch: '75 x 2 1/2"' }, { sizeMm: '90 x 3"', sizeInch: '90 x 3"' }, { sizeMm: '110 x 4"', sizeInch: '110 x 4"' } ],
      table: {
        id: 'male-threaded-adaptor-socket-nipple-socket-din-8063-table',
        title: 'MALE THREADED ADAPTOR/SOCKET/ NIPPLE SOCKET DIN 8063', titleFr: 'FILETÉ MÂLE ADAPTATEUR/MANCHON/ NIPPLE MANCHON DIN 8063',
        columns: [
{ key: 'hp_fit_nominal_size_mm', label: 'products.tables.hp_fit_nominal_size_mm', labelFr: 'products.tables.hp_fit_nominal_size_mm' },
          { key: 'hp_fit_dimensions_mm_d', label: 'products.tables.hp_fit_dimensions_mm_d', labelFr: 'products.tables.hp_fit_dimensions_mm_d' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' , colSpan: 4 },
          { key: 'hp_fit_dimensions_mm_g', label: 'products.tables.hp_fit_dimensions_mm_g', labelFr: 'products.tables.hp_fit_dimensions_mm_g' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_dimensions_mm_l', label: 'products.tables.hp_fit_dimensions_mm_l', labelFr: 'products.tables.hp_fit_dimensions_mm_l' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_mm': '20 x 1/2"', 'hp_fit_dimensions_mm_d': '20', 'hp_fit_dimensions_mm_g': '1/2"', 'hp_fit_dimensions_mm_l': '16.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '25 x 3/4"', 'hp_fit_dimensions_mm_d': '25', 'hp_fit_dimensions_mm_g': '3/4"', 'hp_fit_dimensions_mm_l': '19.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '32 x 1"', 'hp_fit_dimensions_mm_d': '32', 'hp_fit_dimensions_mm_g': '1"', 'hp_fit_dimensions_mm_l': '22.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '40 x 1 1/4"', 'hp_fit_dimensions_mm_d': '40', 'hp_fit_dimensions_mm_g': '1 1/4"', 'hp_fit_dimensions_mm_l': '26.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '50 x 1 1/2"', 'hp_fit_dimensions_mm_d': '50', 'hp_fit_dimensions_mm_g': '1 1/2"', 'hp_fit_dimensions_mm_l': '31.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '63 x 2"', 'hp_fit_dimensions_mm_d': '63', 'hp_fit_dimensions_mm_g': '2"', 'hp_fit_dimensions_mm_l': '38.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '75 x 2 1/2"', 'hp_fit_dimensions_mm_d': '75', 'hp_fit_dimensions_mm_g': '2 1/2"', 'hp_fit_dimensions_mm_l': '44.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '90 x 3"', 'hp_fit_dimensions_mm_d': '90', 'hp_fit_dimensions_mm_g': '3"', 'hp_fit_dimensions_mm_l': '51.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '110 x 4"', 'hp_fit_dimensions_mm_d': '110', 'hp_fit_dimensions_mm_g': '4"', 'hp_fit_dimensions_mm_l': '61.5', 'hp_fit_pn': '16' }
        ]
      }
    },
    {
      id: 'female-threaded-adaptor-socket-din-8063',
      name: 'FEMALE THREADED ADAPTOR/SOCKET',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/PVC PRESSURE FITTINGS DIN 8063/female-threaded-adaptor.png',
      sizes: [ { sizeMm: '20 x 1/2"', sizeInch: '20 x 1/2"' }, { sizeMm: '25 x 3/4"', sizeInch: '25 x 3/4"' }, { sizeMm: '32 x 1"', sizeInch: '32 x 1"' }, { sizeMm: '40 x 1 1/4"', sizeInch: '40 x 1 1/4"' }, { sizeMm: '50 x 1 1/2"', sizeInch: '50 x 1 1/2"' }, { sizeMm: '63 x 2"', sizeInch: '63 x 2"' }, { sizeMm: '75 x 2 1/2"', sizeInch: '75 x 2 1/2"' }, { sizeMm: '90 x 3"', sizeInch: '90 x 3"' }, { sizeMm: '110 x 4"', sizeInch: '110 x 4"' } ],
      table: {
        id: 'female-threaded-adaptor-socket-din-8063-table',
        title: 'FEMALE THREADED ADAPTOR/SOCKET DIN 8063', titleFr: 'FEFILETÉ MÂLE ADAPTATEUR/MANCHON DIN 8063',
        columns: [
{ key: 'hp_fit_nominal_size_mm', label: 'products.tables.hp_fit_nominal_size_mm', labelFr: 'products.tables.hp_fit_nominal_size_mm' },
          { key: 'hp_fit_d', label: 'products.tables.hp_fit_d', labelFr: 'products.tables.hp_fit_d' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' , colSpan: 4 },
          { key: 'hp_fit_dimensions_mm_g', label: 'products.tables.hp_fit_dimensions_mm_g', labelFr: 'products.tables.hp_fit_dimensions_mm_g' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_dimensions_mm_l', label: 'products.tables.hp_fit_dimensions_mm_l', labelFr: 'products.tables.hp_fit_dimensions_mm_l' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_mm': '20 x 1/2"', 'hp_fit_d': '20', 'hp_fit_dimensions_mm_g': '1/2"', 'hp_fit_dimensions_mm_l': '16.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '25 x 3/4"', 'hp_fit_d': '25', 'hp_fit_dimensions_mm_g': '3/4"', 'hp_fit_dimensions_mm_l': '19.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '32 x 1"', 'hp_fit_d': '32', 'hp_fit_dimensions_mm_g': '1"', 'hp_fit_dimensions_mm_l': '22.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '40 x 1 1/4"', 'hp_fit_d': '40', 'hp_fit_dimensions_mm_g': '1 1/4"', 'hp_fit_dimensions_mm_l': '26.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '50 x 1 1/2"', 'hp_fit_d': '50', 'hp_fit_dimensions_mm_g': '1 1/2"', 'hp_fit_dimensions_mm_l': '31.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '63 x 2"', 'hp_fit_d': '63', 'hp_fit_dimensions_mm_g': '2"', 'hp_fit_dimensions_mm_l': '38.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '75 x 2 1/2"', 'hp_fit_d': '75', 'hp_fit_dimensions_mm_g': '2 1/2"', 'hp_fit_dimensions_mm_l': '44.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '90 x 3"', 'hp_fit_d': '90', 'hp_fit_dimensions_mm_g': '3"', 'hp_fit_dimensions_mm_l': '51.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '110 x 4"', 'hp_fit_d': '110', 'hp_fit_dimensions_mm_g': '4"', 'hp_fit_dimensions_mm_l': '61.5', 'hp_fit_pn': '16' }
        ]
      }
    },
    {
      id: 'equal-tee-din-8063',
      name: 'EQUAL TEE',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/PVC PRESSURE FITTINGS DIN 8063/equal-tee.png',
      sizes: [ { sizeMm: '20' }, { sizeMm: '25' }, { sizeMm: '32' }, { sizeMm: '40' }, { sizeMm: '50' }, { sizeMm: '63' }, { sizeMm: '75' }, { sizeMm: '90' }, { sizeMm: '110' }, { sizeMm: '160' } ],
      table: {
        id: 'equal-tee-din-8063-table',
        title: 'EQUAL TEE DIN 8063', titleFr: 'ÉGAL TÉ DIN 8063',
        columns: [
{ key: 'hp_fit_nominal_size_mm', label: 'products.tables.hp_fit_nominal_size_mm', labelFr: 'products.tables.hp_fit_nominal_size_mm' },
          { key: 'hp_fit_dimensions_mm_d', label: 'products.tables.hp_fit_dimensions_mm_d', labelFr: 'products.tables.hp_fit_dimensions_mm_d' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' , colSpan: 3 },
          { key: 'hp_fit_dimensions_mm_l', label: 'products.tables.hp_fit_dimensions_mm_l', labelFr: 'products.tables.hp_fit_dimensions_mm_l' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_mm': '20', 'hp_fit_dimensions_mm_d': '20', 'hp_fit_dimensions_mm_l': '16.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '25', 'hp_fit_dimensions_mm_d': '25', 'hp_fit_dimensions_mm_l': '19.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '32', 'hp_fit_dimensions_mm_d': '32', 'hp_fit_dimensions_mm_l': '22.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '40', 'hp_fit_dimensions_mm_d': '40', 'hp_fit_dimensions_mm_l': '26.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '50', 'hp_fit_dimensions_mm_d': '50', 'hp_fit_dimensions_mm_l': '31.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '63', 'hp_fit_dimensions_mm_d': '63', 'hp_fit_dimensions_mm_l': '38.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '75', 'hp_fit_dimensions_mm_d': '75', 'hp_fit_dimensions_mm_l': '44.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '90', 'hp_fit_dimensions_mm_d': '90', 'hp_fit_dimensions_mm_l': '51.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '110', 'hp_fit_dimensions_mm_d': '110', 'hp_fit_dimensions_mm_l': '61.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '160', 'hp_fit_dimensions_mm_d': '160', 'hp_fit_dimensions_mm_l': '86.5', 'hp_fit_pn': '16' }
        ]
      }
    },
    {
      id: 'female-threaded-tee-din-8063',
      name: 'FEMALE THREADED TEE',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/PVC PRESSURE FITTINGS DIN 8063/female-threaded-tee.png',
      sizeHeaderOverride: 'products.tables.hp_fit_nominal_size_mm_inch_mm',
      sizes: [ { sizeMm: '20 X 2 X 20' }, { sizeMm: '25 x 1/2 x 25' }, { sizeMm: '25 X 4 X 25' }, { sizeMm: '32 x 1/2 x 32' }, { sizeMm: '32 X 4 X 32' }, { sizeMm: '32 X 1 X 32' }, { sizeMm: '40 x 1 1/4 x 40' }, { sizeMm: '50 x 1 1/2 x 50' }, { sizeMm: '63 x 2 x 63' }, { sizeMm: '75 x 2 1/2 x 75' }, { sizeMm: '90 X 3 X 90' } ],
      table: {
        id: 'female-threaded-tee-din-8063-table',
        title: 'FEMALE THREADED TEE DIN 8063', titleFr: 'FEFILETÉ MÂLE TÉ DIN 8063',
        columns: [
{ key: 'hp_fit_nominal_size_mm', label: 'products.tables.hp_fit_nominal_size_mm_inch_mm', labelFr: 'products.tables.hp_fit_nominal_size_mm_inch_mm' },
          { key: 'hp_fit_d', label: 'products.tables.hp_fit_d', labelFr: 'products.tables.hp_fit_d' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' , colSpan: 4 },
          { key: 'hp_fit_dimensions_mm_g', label: 'products.tables.hp_fit_dimensions_mm_g', labelFr: 'products.tables.hp_fit_dimensions_mm_g' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_dimensions_mm_l', label: 'products.tables.hp_fit_dimensions_mm_l', labelFr: 'products.tables.hp_fit_dimensions_mm_l' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_mm': '20 X 2 X 20', 'hp_fit_d': '20', 'hp_fit_dimensions_mm_g': '1/2"', 'hp_fit_dimensions_mm_l': '16.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '25 x 1/2 x 25', 'hp_fit_d': '25', 'hp_fit_dimensions_mm_g': '1/2"', 'hp_fit_dimensions_mm_l': '19.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '25 X 4 X 25', 'hp_fit_d': '25', 'hp_fit_dimensions_mm_g': '3/4"', 'hp_fit_dimensions_mm_l': '19.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '32 x 1/2 x 32', 'hp_fit_d': '32', 'hp_fit_dimensions_mm_g': '1/2"', 'hp_fit_dimensions_mm_l': '22.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '32 X 4 X 32', 'hp_fit_d': '32', 'hp_fit_dimensions_mm_g': '3/4"', 'hp_fit_dimensions_mm_l': '22.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '32 X 1 X 32', 'hp_fit_d': '32', 'hp_fit_dimensions_mm_g': '1"', 'hp_fit_dimensions_mm_l': '22.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '40 x 1 1/4 x 40', 'hp_fit_d': '40', 'hp_fit_dimensions_mm_g': '1 1/4"', 'hp_fit_dimensions_mm_l': '26.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '50 x 1 1/2 x 50', 'hp_fit_d': '50', 'hp_fit_dimensions_mm_g': '1 1/2"', 'hp_fit_dimensions_mm_l': '31.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '63 x 2 x 63', 'hp_fit_d': '63', 'hp_fit_dimensions_mm_g': '2"', 'hp_fit_dimensions_mm_l': '38.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '75 x 2 1/2 x 75', 'hp_fit_d': '75', 'hp_fit_dimensions_mm_g': '2 1/2"', 'hp_fit_dimensions_mm_l': '44.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '90 X 3 X 90', 'hp_fit_d': '90', 'hp_fit_dimensions_mm_g': '3"', 'hp_fit_dimensions_mm_l': '51.5', 'hp_fit_pn': '16' }
        ]
      }
    },
    {
      id: 'reducing-tee-din-8063',
      name: 'REDUCING TEE',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/PVC PRESSURE FITTINGS DIN 8063/reducing-tee.png',
      sizeHeaderOverride: 'products.tables.hp_fit_nominal_size_mm_mm_mm',
      sizes: [ { sizeMm: '25 X 20 X 25' }, { sizeMm: '32 X 20 X 32' }, { sizeMm: '32 X 25 X 32' }, { sizeMm: '40 X 20 X 40' }, { sizeMm: '40 X 25 X 40' }, { sizeMm: '40 X 32 X 40' }, { sizeMm: '50 X 20 X 50' }, { sizeMm: '50 X 25 X 50' }, { sizeMm: '50 X 32 X 50' }, { sizeMm: '50 X 40 X 50' }, { sizeMm: '63 X 25 X 63' }, { sizeMm: '63 X 32 X 63' }, { sizeMm: '63 X 40 X 63' }, { sizeMm: '63 X 50 X 63' }, { sizeMm: '75 X 40 X 75' }, { sizeMm: '75 X 50 X 75' }, { sizeMm: '75 X 63 X 75' }, { sizeMm: '90 X 63 X 90' }, { sizeMm: '90 X 75 X 90' }, { sizeMm: '110 x 90 x 110' }, { sizeMm: '160 x 110 x 160' } ],
      table: {
        id: 'reducing-tee-din-8063-table',
        title: 'REDUCING TEE DIN 8063', titleFr: 'TÉ RÉDUIT DIN 8063',
        columns: [
{ key: 'hp_fit_nominal_size_mm', label: 'products.tables.hp_fit_nominal_size_mm_mm_mm', labelFr: 'products.tables.hp_fit_nominal_size_mm_mm_mm' },
          { key: 'hp_fit_d', label: 'products.tables.hp_fit_d', labelFr: 'products.tables.hp_fit_d' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' , colSpan: 4 },
          { key: 'hp_fit_dimensions_mm_d1', label: 'products.tables.hp_fit_dimensions_mm_d1', labelFr: 'products.tables.hp_fit_dimensions_mm_d1' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_dimensions_mm_l', label: 'products.tables.hp_fit_dimensions_mm_l', labelFr: 'products.tables.hp_fit_dimensions_mm_l' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_mm': '25 X 20 X 25', 'hp_fit_d': '25', 'hp_fit_dimensions_mm_d1': '20', 'hp_fit_dimensions_mm_l': '19.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '32 X 20 X 32', 'hp_fit_d': '32', 'hp_fit_dimensions_mm_d1': '20', 'hp_fit_dimensions_mm_l': '22.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '32 X 25 X 32', 'hp_fit_d': '32', 'hp_fit_dimensions_mm_d1': '25', 'hp_fit_dimensions_mm_l': '22.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '40 X 20 X 40', 'hp_fit_d': '40', 'hp_fit_dimensions_mm_d1': '20', 'hp_fit_dimensions_mm_l': '26.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '40 X 25 X 40', 'hp_fit_d': '40', 'hp_fit_dimensions_mm_d1': '25', 'hp_fit_dimensions_mm_l': '26.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '40 X 32 X 40', 'hp_fit_d': '40', 'hp_fit_dimensions_mm_d1': '32', 'hp_fit_dimensions_mm_l': '26.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '50 X 20 X 50', 'hp_fit_d': '50', 'hp_fit_dimensions_mm_d1': '20', 'hp_fit_dimensions_mm_l': '31.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '50 X 25 X 50', 'hp_fit_d': '50', 'hp_fit_dimensions_mm_d1': '25', 'hp_fit_dimensions_mm_l': '31.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '50 X 32 X 50', 'hp_fit_d': '50', 'hp_fit_dimensions_mm_d1': '32', 'hp_fit_dimensions_mm_l': '31.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '50 X 40 X 50', 'hp_fit_d': '50', 'hp_fit_dimensions_mm_d1': '40', 'hp_fit_dimensions_mm_l': '31.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '63 X 25 X 63', 'hp_fit_d': '63', 'hp_fit_dimensions_mm_d1': '25', 'hp_fit_dimensions_mm_l': '38.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '63 X 32 X 63', 'hp_fit_d': '63', 'hp_fit_dimensions_mm_d1': '32', 'hp_fit_dimensions_mm_l': '38.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '63 X 40 X 63', 'hp_fit_d': '63', 'hp_fit_dimensions_mm_d1': '40', 'hp_fit_dimensions_mm_l': '38.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '63 X 50 X 63', 'hp_fit_d': '63', 'hp_fit_dimensions_mm_d1': '50', 'hp_fit_dimensions_mm_l': '38.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '75 X 40 X 75', 'hp_fit_d': '75', 'hp_fit_dimensions_mm_d1': '40', 'hp_fit_dimensions_mm_l': '44.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '75 X 50 X 75', 'hp_fit_d': '75', 'hp_fit_dimensions_mm_d1': '50', 'hp_fit_dimensions_mm_l': '44.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '75 X 63 X 75', 'hp_fit_d': '75', 'hp_fit_dimensions_mm_d1': '63', 'hp_fit_dimensions_mm_l': '44.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '90 X 63 X 90', 'hp_fit_d': '90', 'hp_fit_dimensions_mm_d1': '63', 'hp_fit_dimensions_mm_l': '51.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '90 X 75 X 90', 'hp_fit_d': '90', 'hp_fit_dimensions_mm_d1': '75', 'hp_fit_dimensions_mm_l': '51.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '110 x 90 x 110', 'hp_fit_d': '110', 'hp_fit_dimensions_mm_d1': '90', 'hp_fit_dimensions_mm_l': '61.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '160 x 110 x 160', 'hp_fit_d': '110', 'hp_fit_dimensions_mm_d1': '110', 'hp_fit_dimensions_mm_l': '86.5', 'hp_fit_pn': '16' }
        ]
      }
    },
    {
      id: 'female-reducer-bush-din-8063',
      name: 'FEMALE REDUCER BUSH',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/PVC PRESSURE FITTINGS DIN 8063/female-reducer-bush.png',
      sizes: [ { sizeMm: '25 x 1/2"', sizeInch: '25 x 1/2"' }, { sizeMm: '32 x 1/2"', sizeInch: '32 x 1/2"' }, { sizeMm: '32 x 3/4"', sizeInch: '32 x 3/4"' }, { sizeMm: '40 x 1/2"', sizeInch: '40 x 1/2"' }, { sizeMm: '50 x 1/2"', sizeInch: '50 x 1/2"' } ],
      table: {
        id: 'female-reducer-bush-din-8063-table',
        title: 'FEMALE REDUCER BUSH DIN 8063', titleFr: 'FEMELLE BAGUE DE RÉDUCTION DIN 8063',
        columns: [
{ key: 'hp_fit_nominal_size_mm', label: 'products.tables.hp_fit_nominal_size_mm', labelFr: 'products.tables.hp_fit_nominal_size_mm' },
          { key: 'hp_fit_dimensions_mm_d', label: 'products.tables.hp_fit_dimensions_mm_d', labelFr: 'products.tables.hp_fit_dimensions_mm_d' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' , colSpan: 4 },
          { key: 'hp_fit_dimensions_mm_g', label: 'products.tables.hp_fit_dimensions_mm_g', labelFr: 'products.tables.hp_fit_dimensions_mm_g' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_dimensions_mm_l', label: 'products.tables.hp_fit_dimensions_mm_l', labelFr: 'products.tables.hp_fit_dimensions_mm_l' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_mm': '25 x 1/2"', 'hp_fit_dimensions_mm_d': '25', 'hp_fit_dimensions_mm_g': '1/2"', 'hp_fit_dimensions_mm_l': '32.4', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '32 x 1/2"', 'hp_fit_dimensions_mm_d': '32', 'hp_fit_dimensions_mm_g': '1/2"', 'hp_fit_dimensions_mm_l': '35.6', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '32 x 3/4"', 'hp_fit_dimensions_mm_d': '32', 'hp_fit_dimensions_mm_g': '3/4"', 'hp_fit_dimensions_mm_l': '35.6', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '40 x 1/2"', 'hp_fit_dimensions_mm_d': '40', 'hp_fit_dimensions_mm_g': '1/2"', 'hp_fit_dimensions_mm_l': '40.0', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '50 x 1/2"', 'hp_fit_dimensions_mm_d': '50', 'hp_fit_dimensions_mm_g': '1/2"', 'hp_fit_dimensions_mm_l': '43.0', 'hp_fit_pn': '16' }
        ]
      }
    },
    
    {
      id: 'end-cap-din-8063',
      name: 'END CAP',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/PVC PRESSURE FITTINGS DIN 8063/end-cap.png',
      sizes: [ { sizeMm: '20' }, { sizeMm: '25' }, { sizeMm: '32' }, { sizeMm: '40' }, { sizeMm: '50' }, { sizeMm: '63' }, { sizeMm: '75' }, { sizeMm: '90' }, { sizeMm: '110' } ],
      table: {
        id: 'end-cap-din-8063-table',
        title: 'END CAP DIN 8063', titleFr: 'BOUCHON DIN 8063',
        columns: [
{ key: 'hp_fit_nominal_size_mm', label: 'products.tables.hp_fit_nominal_size_mm', labelFr: 'products.tables.hp_fit_nominal_size_mm' },
          { key: 'hp_fit_dimensions_mm_d', label: 'products.tables.hp_fit_dimensions_mm_d', labelFr: 'products.tables.hp_fit_dimensions_mm_d' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' , colSpan: 3 },
          { key: 'hp_fit_dimensions_mm_l', label: 'products.tables.hp_fit_dimensions_mm_l', labelFr: 'products.tables.hp_fit_dimensions_mm_l' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn' , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_mm': '20', 'hp_fit_dimensions_mm_d': '20', 'hp_fit_dimensions_mm_l': '16.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '25', 'hp_fit_dimensions_mm_d': '25', 'hp_fit_dimensions_mm_l': '19.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '32', 'hp_fit_dimensions_mm_d': '32', 'hp_fit_dimensions_mm_l': '22.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '40', 'hp_fit_dimensions_mm_d': '40', 'hp_fit_dimensions_mm_l': '26.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '50', 'hp_fit_dimensions_mm_d': '50', 'hp_fit_dimensions_mm_l': '31.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '63', 'hp_fit_dimensions_mm_d': '63', 'hp_fit_dimensions_mm_l': '38.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '75', 'hp_fit_dimensions_mm_d': '75', 'hp_fit_dimensions_mm_l': '44.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '90', 'hp_fit_dimensions_mm_d': '90', 'hp_fit_dimensions_mm_l': '51.5', 'hp_fit_pn': '16' },
          { 'hp_fit_nominal_size_mm': '110', 'hp_fit_dimensions_mm_d': '110', 'hp_fit_dimensions_mm_l': '61.5', 'hp_fit_pn': '16' }
        ]
      }
    }
  ],
  colorLabel: 'dark-grey',
  downloads: [
    { label: 'PVC HP Fittings DIN 8063 Catalogue (PDF)', labelAr: 'كتالوج وصلات PVC ضغط عالي DIN 8063 (PDF)', labelFr: 'Catalogue Raccords PVC HP DIN 8063 (PDF)', href: '/pdfs/UPVC%20PRESSURE%20FITTINGS%20DIN%208063.pdf' },
  ],
  dosDonts: {
    dos: [
      'Verify the PN rating (PN16 or PN10) matches your system\'s operating pressure',
      'Ensure all pipe ends are clean and chamfered before solvent welding',
      'Use only approved solvent cements compatible with PVC-U materials',
      'Allow adequate curing time for joints before pressure testing the system',
    ],
    donts: [
      'Do not exceed the maximum PN pressure rating specified for each fitting size',
      'Do not use these fittings with compressed air or high-pressure gases',
      'Avoid mixing different standards; ensure pipes and fittings both follow metric DIN 8063',
      'Do not expose fittings to incompatible chemicals that may degrade PVC-U material',
    ]},
  dosDontsAr: {
    dos: [
      'تحقق أن تصنيف PN (PN16 أو PN10) يتطابق مع ضغط تشغيل نظامك',
      'تأكد أن جميع أطراف الأنابيب نظيفة ومشطوفة قبل اللحام بالمذيب',
      'استخدم فقط أسمنت مذيب معتمد ومتوافق مع مواد PVC-U',
      'اسمح بوقت معالجة كافٍ للوصلات قبل اختبار ضغط النظام',
    ],
    donts: [
      'لا تتجاوز الحد الأقصى لتصنيف ضغط PN المحدد لكل مقاس وصلة',
      'لا تستخدم هذه الوصلات مع الهواء المضغوط أو الغازات عالية الضغط',
      'تجنب خلط معايير مختلفة؛ تأكد أن الأنابيب والوصلات تتبع DIN 8063 المتري',
      'لا تعرّض الوصلات لمواد كيميائية غير متوافقة قد تتلف مادة PVC-U',
    ]},
    dosDontsFr: {
          dos: [
            `Vérifiez que la valeur nominale PN (PN16 ou PN10) correspond à la pression de fonctionnement de votre système.`,
            `Assurez-vous que toutes les extrémités des tuyaux sont propres et chanfreinées avant le soudage au solvant.`,
            `Utilisez uniquement des colles à solvant approuvées et compatibles avec les matériaux PVC-U`,
            `Prévoyez un temps de durcissement adéquat pour les joints avant de tester la pression du système.`
          ],
          donts: [
            `Ne dépassez pas la pression nominale PN maximale spécifiée pour chaque taille de raccord.`,
            `N'utilisez pas ces raccords avec de l'air comprimé ou des gaz à haute pression`,
            `Évitez de mélanger différentes normes ; assurez-vous que les tuyaux et les raccords suivent tous deux le système métrique DIN 8063`,
            `N'exposez pas les raccords à des produits chimiques incompatibles qui pourraient dégrader le matériau PVC-U`
          ]
        }
};
// ═══════════════════════════════════════════════════════════════════════════════
// 2) BS EN 1452:3 / BS 4346 Fittings (PN 15)
// ═══════════════════════════════════════════════════════════════════════════════
export const pvcHpFittingsBsEn14523: ProductDetailConfig = {
  slug: 'pvc-hp-fittings-bs-en-1452-3',
  categorySlug: 'pvc-high-pressure-fittings',
  title: 'PVC High Pressure Fittings BS EN 1452:3 / BS 4346 (PN 15)',
  titleAr: 'وصلات الضغط العالي PVC وفق BS EN 1452:3 / BS 4346 (PN 15)',
    titleFr: `PVC Raccords haute pression BS EN 1452:3 / BS 4346 (PN 15)`,
    shortDescription: 'PVC-U pressure fittings to BS EN 1452:3/BS 4346 — Class E / PN 15, imperial 1/2\"–8\".',
  shortDescriptionAr: 'وصلات ضغط PVC-U وفق BS EN 1452:3/BS 4346 — فئة E / PN 15، إنشي ½″–8″.',
    shortDescriptionFr: `Raccords à pression PVC-U à BS EN 1452:3/BS 4346 — Classe E / PN 15, impérial 1/2"–8".`,
    overview: `Crown Plastic Pipes / Fittings, a trusted PVC pressure fittings supplier in Dubai and Abu Dhabi, manufactures the definitive range of BS EN 1452:3 and BS 4346 high-pressure fittings — the benchmark for fluid handling across the UAE and wider GCC. Rated Class E / PN 15, these imperial-sized fittings (½″ to 8″) ensure leak-proof reliability in water mains, industrial transport, and high-rise building distribution. Manufactured at our Umm Al Quwain facility with ISO 9001:2015 certification.`,
  overviewAr: `تصنّع كراون للأنابيب والوصلات البلاستيكية، المورد الموثوق لوصلات الضغط PVC في دبي وأبوظبي، المجموعة المرجعية لوصلات الضغط العالي وفق BS EN 1452:3 و BS 4346 — المعيار الأساسي لمناولة السوائل في الإمارات والخليج. مصنفة فئة E / PN 15، هذه الوصلات بمقاسات إنشية (½″ إلى 8″) تضمن موثوقية مانعة للتسرب. مصنعة في منشأتنا بأم القيوين بشهادة ISO 9001:2015.`,
    overviewFr: `Crown Plastic Pipes / Fittings, un fournisseur de raccords à pression PVC de confiance à Dubai et à Abu Dhabi, fabrique la gamme définitive de raccords haute pression BS EN 1452:3 et BS 4346 - la référence pour la manipulation des fluides à travers le UAE et le GCC plus large. Classés Classe E / PN 15, ces raccords de taille impériale (½″ à 8″) garantissent une fiabilité étanche dans les conduites d'eau, le transport industrial et la distribution dans les immeubles de grande hauteur. Mfabriqués dans notre usine d'Umm Al Quwain avec la certification ISO 9001:2015.`,
    features: [
    'Manufactured to strict BS EN 1452:3 and BS 4346 standards — leading UAE supplier',
    'High-pressure rating of PN 15 for demanding applications',
    'Precision-engineered for Class E high-pressure fluid transport',
    'Superior chemical and corrosion resistance for longevity',
    'Comprehensive range of sizes from 1/2\" up to 8\"',
    'Certified quality management systems including ISO 9001:2015',
  ],
  featuresAr: [
    'مصنعة وفق معايير BS EN 1452:3 و BS 4346 الصارمة — مورد رائد في الإمارات',
    'تصنيف ضغط عالٍ PN 15 للتطبيقات الصعبة',
    'هندسة دقيقة لنقل السوائل عالي الضغط فئة E',
    'مقاومة كيميائية وتآكل فائقة لعمر خدمة طويل',
    'نطاق مقاسات شامل من ½″ حتى 8″',
    'أنظمة إدارة جودة معتمدة ISO 9001:2015',
  ],
    featuresFr: [
            `Fabriqué selon les normes strictes BS EN 1452:3 et BS 4346 — principal fournisseur UAE`,
            `Haute pression nominale de PN 15 pour les applications exigeantes`,
            `Conçu avec précision pour le transport de fluides à haute pression de classe E`,
            `Résistance supérieure aux produits chimiques et à la corrosion pour la longévité`,
            `Gamme complète de tailles de 1/2" à 8"`,
            `Systèmes de gestion de la qualité certifiés, y compris ISO 9001:2015`
          ],
    applications: [
    'High-pressure municipal water mains and utility networks in the UAE',
    'Industrial chemical and fluid transport systems',
    'Commercial plumbing and high-rise building water distribution',
    'UAE and GCC infrastructure and irrigation projects',
  ],
  applicationsAr: [
    'شبكات المياه الرئيسية البلدية عالية الضغط والمرافق في الإمارات',
    'أنظمة النقل الكيميائي والسوائل الصناعية',
    'السباكة التجارية وتوزيع المياه في المباني الشاهقة',
    'مشاريع البنية التحتية والري في الإمارات والخليج',
  ],
    applicationsFr: [
            `Conduites d’eau municipales à haute pression et réseaux de services publics dans le UAE`,
            `Systèmes de transport de produits chimiques et de fluides industriels`,
            `Plomberie commerciale et distribution d'eau dans les immeubles de grande hauteur`,
            `Projets d’infrastructures et d’irrigation UAE et GCC`
          ],
    pipesTables: [],
  fittings: [
    {
      id: 'elbow-90--bs-en-1452-3',
      name: 'ELBOW 90°',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/BS EN 1452/elbow-90.png',
      sizes: [ { sizeMm: '1/2"', sizeInch: '1/2"' }, { sizeMm: '3/4"', sizeInch: '3/4"' }, { sizeMm: '1"', sizeInch: '1"' }, { sizeMm: '1 1/4"', sizeInch: '1 1/4"' }, { sizeMm: '1 1/2"', sizeInch: '1 1/2"' }, { sizeMm: '2"', sizeInch: '2"' }, { sizeMm: '3"', sizeInch: '3"' }, { sizeMm: '4"', sizeInch: '4"' }, { sizeMm: '6"', sizeInch: '6"' } ],
      table: {
        id: 'elbow-90--bs-en-1452-3-table',
        title: 'ELBOW 90° BS EN 1452:3 / BS 4346 (PN 15)', titleFr: 'COUDE 90° BS EN 1452:3 / BS 4346 (PN 15)',
        columns: [
{ key: 'hp_fit_nominal_size_inch', label: 'products.tables.hp_fit_nominal_size_inch', labelFr: 'products.tables.hp_fit_nominal_size_inch'   },
          { key: 'hp_fit_dimensions_mm_d', label: 'products.tables.hp_fit_dimensions_mm_d', labelFr: 'products.tables.hp_fit_dimensions_mm_d'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm', colSpan: 3 },
          { key: 'hp_fit_dimensions_mm_l', label: 'products.tables.hp_fit_dimensions_mm_l', labelFr: 'products.tables.hp_fit_dimensions_mm_l'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_inch': '1/2"', 'hp_fit_dimensions_mm_d': '16.5', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '3/4"', 'hp_fit_dimensions_mm_d': '19.5', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1"', 'hp_fit_dimensions_mm_d': '22.5', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/4"', 'hp_fit_dimensions_mm_d': '26.5', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/2"', 'hp_fit_dimensions_mm_d': '31.5', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '2"', 'hp_fit_dimensions_mm_d': '36.5', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '3"', 'hp_fit_dimensions_mm_d': '51', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '4"', 'hp_fit_dimensions_mm_d': '63.5', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '6"', 'hp_fit_dimensions_mm_d': '91', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' }
        ]
      }
    },
    {
      id: 'elbow-45--bs-en-1452-3',
      name: 'ELBOW 45°',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/BS EN 1452/elbow-45.png',
      sizes: [ { sizeMm: '1/2"', sizeInch: '1/2"' }, { sizeMm: '3/4"', sizeInch: '3/4"' }, { sizeMm: '1"', sizeInch: '1"' }, { sizeMm: '1 1/4"', sizeInch: '1 1/4"' }, { sizeMm: '1 1/2"', sizeInch: '1 1/2"' }, { sizeMm: '2"', sizeInch: '2"' }, { sizeMm: '3"', sizeInch: '3"' }, { sizeMm: '4"', sizeInch: '4"' }, { sizeMm: '6"', sizeInch: '6"' } ],
      table: {
        id: 'elbow-45--bs-en-1452-3-table',
        title: 'ELBOW 45° BS EN 1452:3 / BS 4346 (PN 15)', titleFr: 'COUDE 45° BS EN 1452:3 / BS 4346 (PN 15)',
        columns: [
{ key: 'hp_fit_nominal_size_inch', label: 'products.tables.hp_fit_nominal_size_inch', labelFr: 'products.tables.hp_fit_nominal_size_inch'   },
          { key: 'hp_fit_dimensions_mm_d', label: 'products.tables.hp_fit_dimensions_mm_d', labelFr: 'products.tables.hp_fit_dimensions_mm_d'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm', colSpan: 3 },
          { key: 'hp_fit_dimensions_mm_l', label: 'products.tables.hp_fit_dimensions_mm_l', labelFr: 'products.tables.hp_fit_dimensions_mm_l'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_inch': '1/2"', 'hp_fit_dimensions_mm_d': '16.5', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '3/4"', 'hp_fit_dimensions_mm_d': '19.5', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1"', 'hp_fit_dimensions_mm_d': '22.5', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/4"', 'hp_fit_dimensions_mm_d': '26.5', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/2"', 'hp_fit_dimensions_mm_d': '31.5', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '2"', 'hp_fit_dimensions_mm_d': '36.5', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '3"', 'hp_fit_dimensions_mm_d': '51', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '4"', 'hp_fit_dimensions_mm_d': '63.5', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '6"', 'hp_fit_dimensions_mm_d': '91', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' }
        ]
      }
    },
    {
      id: 'female-elbow-90--bs-en-1452-3',
      name: 'FEMALE ELBOW 90°',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/BS EN 1452/female-elbow-90.png',
      sizes: [ { sizeMm: '1/2"', sizeInch: '1/2"' }, { sizeMm: '3/4"', sizeInch: '3/4"' }, { sizeMm: '1"', sizeInch: '1"' }, { sizeMm: '1 1/4"', sizeInch: '1 1/4"' }, { sizeMm: '1 1/2"', sizeInch: '1 1/2"' }, { sizeMm: '2"', sizeInch: '2"' } ],
      table: {
        id: 'female-elbow-90--bs-en-1452-3-table',
        title: 'FEMALE ELBOW 90° BS EN 1452:3 / BS 4346 (PN 15)', titleFr: 'FEMELLE COUDE 90° BS EN 1452:3 / BS 4346 (PN 15)',
        columns: [
{ key: 'hp_fit_nominal_size_inch', label: 'products.tables.hp_fit_nominal_size_inch', labelFr: 'products.tables.hp_fit_nominal_size_inch'   },
          { key: 'hp_fit_dimensions_g', label: 'products.tables.hp_fit_dimensions_g', labelFr: 'products.tables.hp_fit_dimensions_g'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm', colSpan: 3 },
          { key: 'hp_fit_dimensions_l', label: 'products.tables.hp_fit_dimensions_l', labelFr: 'products.tables.hp_fit_dimensions_l'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_inch': '1/2"', 'hp_fit_dimensions_g': '1/2"', 'hp_fit_dimensions_l': '16.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '3/4"', 'hp_fit_dimensions_g': '3/4"', 'hp_fit_dimensions_l': '19.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1"', 'hp_fit_dimensions_g': '1"', 'hp_fit_dimensions_l': '22.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/4"', 'hp_fit_dimensions_g': '1 1/4"', 'hp_fit_dimensions_l': '26.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/2"', 'hp_fit_dimensions_g': '1 1/2"', 'hp_fit_dimensions_l': '31.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '2"', 'hp_fit_dimensions_g': '2"', 'hp_fit_dimensions_l': '36.5', 'hp_fit_pn': '15' }
        ]
      }
    },
    {
      id: 'socket-coupler-bs-en-1452-3',
      name: 'SOCKET/COUPLER',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/BS EN 1452/socket-coupler.png',
      sizes: [ { sizeMm: '1/2"', sizeInch: '1/2"' }, { sizeMm: '3/4"', sizeInch: '3/4"' }, { sizeMm: '1"', sizeInch: '1"' }, { sizeMm: '1 1/4"', sizeInch: '1 1/4"' }, { sizeMm: '1 1/2"', sizeInch: '1 1/2"' }, { sizeMm: '2"', sizeInch: '2"' }, { sizeMm: '3"', sizeInch: '3"' }, { sizeMm: '4"', sizeInch: '4"' }, { sizeMm: '6"', sizeInch: '6"' } ],
      table: {
        id: 'socket-coupler-bs-en-1452-3-table',
        title: 'SOCKET/COUPLER BS EN 1452:3 / BS 4346 (PN 15)', titleFr: 'MANCHON/COUPLER BS EN 1452:3 / BS 4346 (PN 15)',
        columns: [
{ key: 'hp_fit_nominal_size_inch', label: 'products.tables.hp_fit_nominal_size_inch', labelFr: 'products.tables.hp_fit_nominal_size_inch'   },
          { key: 'hp_fit_dimensions_mm_d', label: 'products.tables.hp_fit_dimensions_mm_d', labelFr: 'products.tables.hp_fit_dimensions_mm_d'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm', colSpan: 3 },
          { key: 'hp_fit_dimensions_mm_l', label: 'products.tables.hp_fit_dimensions_mm_l', labelFr: 'products.tables.hp_fit_dimensions_mm_l'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_inch': '1/2"', 'hp_fit_dimensions_mm_d': '16.5', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '3/4"', 'hp_fit_dimensions_mm_d': '19.5', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1"', 'hp_fit_dimensions_mm_d': '22.5', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/4"', 'hp_fit_dimensions_mm_d': '26.5', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/2"', 'hp_fit_dimensions_mm_d': '31.5', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '2"', 'hp_fit_dimensions_mm_d': '36.5', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '3"', 'hp_fit_dimensions_mm_d': '51', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '4"', 'hp_fit_dimensions_mm_d': '63.5', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '6"', 'hp_fit_dimensions_mm_d': '91', 'hp_fit_dimensions_mm_l': '15', 'hp_fit_pn': '15' }
        ]
      }
    },
    {
      id: 'reducer-bush-socket-bs-en-1452-3',
      name: 'REDUCER BUSH/SOCKET',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/BS EN 1452/reducer-bush.png',
      sizeHeaderOverride: 'products.tables.hp_fit_nominal_size_inch_inch',
      sizes: [ { sizeMm: '3/4" x 1/2"', sizeInch: '3/4" x 1/2"' }, { sizeMm: '1" x 1/2"', sizeInch: '1" x 1/2"' }, { sizeMm: '1" x 3/4"', sizeInch: '1" x 3/4"' }, { sizeMm: '1 1/4" x 1/2"', sizeInch: '1 1/4" x 1/2"' }, { sizeMm: '1 1/4" x 3/4"', sizeInch: '1 1/4" x 3/4"' }, { sizeMm: '1 1/4" x 1"', sizeInch: '1 1/4" x 1"' }, { sizeMm: '1 1/2" x 1/2"', sizeInch: '1 1/2" x 1/2"' }, { sizeMm: '1 1/2" x 3/4"', sizeInch: '1 1/2" x 3/4"' }, { sizeMm: '1 1/2" x 1"', sizeInch: '1 1/2" x 1"' }, { sizeMm: '2" x 1/2"', sizeInch: '2" x 1/2"' }, { sizeMm: '2" x 3/4"', sizeInch: '2" x 3/4"' }, { sizeMm: '2" x 1"', sizeInch: '2" x 1"' }, { sizeMm: '2" x 1 1/2"', sizeInch: '2" x 1 1/2"' }, { sizeMm: '3" x 1 1/2"', sizeInch: '3" x 1 1/2"' }, { sizeMm: '3" x 2"', sizeInch: '3" x 2"' }, { sizeMm: '4" x 2"', sizeInch: '4" x 2"' }, { sizeMm: '4" x 3"', sizeInch: '4" x 3"' }, { sizeMm: '6" x 3"', sizeInch: '6" x 3"' }, { sizeMm: '6" x 4"', sizeInch: '6" x 4"' } ],
      table: {
        id: 'reducer-bush-socket-bs-en-1452-3-table',
        title: 'REDUCER BUSH/SOCKET BS EN 1452:3 / BS 4346 (PN 15)', titleFr: 'BAGUE DE RÉDUCTION/MANCHON BS EN 1452:3 / BS 4346 (PN 15)',
        columns: [
{ key: 'hp_fit_nominal_size_mm_inch', label: 'products.tables.hp_fit_nominal_size_inch_inch', labelFr: 'products.tables.hp_fit_nominal_size_inch_inch'   },
          { key: 'hp_fit_nominal_size_mm_d', label: 'products.tables.hp_fit_nominal_size_mm_d', labelFr: 'products.tables.hp_fit_nominal_size_mm_d'   , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm', colSpan: 4 },
          { key: 'hp_fit_dimensions_mm_d', label: 'products.tables.hp_fit_dimensions_mm_d', labelFr: 'products.tables.hp_fit_dimensions_mm_d'     , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_dimensions_mm_l', label: 'products.tables.hp_fit_dimensions_mm_l', labelFr: 'products.tables.hp_fit_dimensions_mm_l'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_mm_inch': '3/4" x 1/2"', 'hp_fit_nominal_size_mm_d': '26.67', 'hp_fit_dimensions_mm_d': '21.34', 'hp_fit_dimensions_mm_l': '16.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_mm_inch': '1" x 1/2"', 'hp_fit_nominal_size_mm_d': '33.4', 'hp_fit_dimensions_mm_d': '21.34', 'hp_fit_dimensions_mm_l': '16.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_mm_inch': '1" x 3/4"', 'hp_fit_nominal_size_mm_d': '33.4', 'hp_fit_dimensions_mm_d': '26.67', 'hp_fit_dimensions_mm_l': '19.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_mm_inch': '1 1/4" x 1/2"', 'hp_fit_nominal_size_mm_d': '42.16', 'hp_fit_dimensions_mm_d': '21.34', 'hp_fit_dimensions_mm_l': '16.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_mm_inch': '1 1/4" x 3/4"', 'hp_fit_nominal_size_mm_d': '42.16', 'hp_fit_dimensions_mm_d': '26.67', 'hp_fit_dimensions_mm_l': '19.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_mm_inch': '1 1/4" x 1"', 'hp_fit_nominal_size_mm_d': '42.16', 'hp_fit_dimensions_mm_d': '33.4', 'hp_fit_dimensions_mm_l': '22.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_mm_inch': '1 1/2" x 1/2"', 'hp_fit_nominal_size_mm_d': '48.26', 'hp_fit_dimensions_mm_d': '21.34', 'hp_fit_dimensions_mm_l': '16.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_mm_inch': '1 1/2" x 3/4"', 'hp_fit_nominal_size_mm_d': '48.26', 'hp_fit_dimensions_mm_d': '26.67', 'hp_fit_dimensions_mm_l': '19.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_mm_inch': '1 1/2" x 1"', 'hp_fit_nominal_size_mm_d': '48.26', 'hp_fit_dimensions_mm_d': '33.4', 'hp_fit_dimensions_mm_l': '22.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_mm_inch': '2" x 1/2"', 'hp_fit_nominal_size_mm_d': '60.33', 'hp_fit_dimensions_mm_d': '21.34', 'hp_fit_dimensions_mm_l': '16.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_mm_inch': '2" x 3/4"', 'hp_fit_nominal_size_mm_d': '60.33', 'hp_fit_dimensions_mm_d': '26.67', 'hp_fit_dimensions_mm_l': '19.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_mm_inch': '2" x 1"', 'hp_fit_nominal_size_mm_d': '60.33', 'hp_fit_dimensions_mm_d': '33.4', 'hp_fit_dimensions_mm_l': '22.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_mm_inch': '2" x 1 1/2"', 'hp_fit_nominal_size_mm_d': '60.33', 'hp_fit_dimensions_mm_d': '48.26', 'hp_fit_dimensions_mm_l': '26.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_mm_inch': '3" x 1 1/2"', 'hp_fit_nominal_size_mm_d': '88.9', 'hp_fit_dimensions_mm_d': '48.26', 'hp_fit_dimensions_mm_l': '26.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_mm_inch': '3" x 2"', 'hp_fit_nominal_size_mm_d': '88.9', 'hp_fit_dimensions_mm_d': '60.33', 'hp_fit_dimensions_mm_l': '36.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_mm_inch': '4" x 2"', 'hp_fit_nominal_size_mm_d': '114.3', 'hp_fit_dimensions_mm_d': '60.33', 'hp_fit_dimensions_mm_l': '36.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_mm_inch': '4" x 3"', 'hp_fit_nominal_size_mm_d': '114.3', 'hp_fit_dimensions_mm_d': '88.9', 'hp_fit_dimensions_mm_l': '51', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_mm_inch': '6" x 3"', 'hp_fit_nominal_size_mm_d': '168.3', 'hp_fit_dimensions_mm_d': '88.9', 'hp_fit_dimensions_mm_l': '60.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_mm_inch': '6" x 4"', 'hp_fit_nominal_size_mm_d': '168.3', 'hp_fit_dimensions_mm_d': '114.3', 'hp_fit_dimensions_mm_l': '63.5', 'hp_fit_pn': '15' }
        ]
      }
    },
    {
      id: 'male-threaded-adaptor-socket-nipple-socket-bs-en-1452-3',
      name: 'MALE THREADED ADAPTOR /SOCKET/NIPPLE SOCKET',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/BS EN 1452/male-threaded-adaptor.png',
      sizes: [ { sizeMm: '1/2"', sizeInch: '1/2"' }, { sizeMm: '3/4"', sizeInch: '3/4"' }, { sizeMm: '1"', sizeInch: '1"' }, { sizeMm: '1 1/4"', sizeInch: '1 1/4"' }, { sizeMm: '1 1/2"', sizeInch: '1 1/2"' }, { sizeMm: '2"', sizeInch: '2"' }, { sizeMm: '3"', sizeInch: '3"' }, { sizeMm: '4"', sizeInch: '4"' }, { sizeMm: '6"', sizeInch: '6"' } ],
      table: {
        id: 'male-threaded-adaptor-socket-nipple-socket-bs-en-1452-3-table',
        title: 'MALE THREADED ADAPTOR /SOCKET/NIPPLE SOCKET BS EN 1452:3 / BS 4346 (PN 15)', titleFr: 'FILETÉ MÂLE ADAPTATEUR /MANCHON/NIPPLE MANCHON BS EN 1452:3 / BS 4346 (PN 15)',
        columns: [
{ key: 'hp_fit_nominal_size_inch', label: 'products.tables.hp_fit_nominal_size_inch', labelFr: 'products.tables.hp_fit_nominal_size_inch'   },
          { key: 'hp_fit_dimensions_g', label: 'products.tables.hp_fit_dimensions_g', labelFr: 'products.tables.hp_fit_dimensions_g'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm', colSpan: 3 },
          { key: 'hp_fit_dimensions_l', label: 'products.tables.hp_fit_dimensions_l', labelFr: 'products.tables.hp_fit_dimensions_l'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_inch': '1/2"', 'hp_fit_dimensions_g': '1/2"', 'hp_fit_dimensions_l': '16.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '3/4"', 'hp_fit_dimensions_g': '3/4"', 'hp_fit_dimensions_l': '19.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1"', 'hp_fit_dimensions_g': '1"', 'hp_fit_dimensions_l': '22.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/4"', 'hp_fit_dimensions_g': '1 1/4"', 'hp_fit_dimensions_l': '26.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/2"', 'hp_fit_dimensions_g': '1 1/2"', 'hp_fit_dimensions_l': '31.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '2"', 'hp_fit_dimensions_g': '2"', 'hp_fit_dimensions_l': '36.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '3"', 'hp_fit_dimensions_g': '3"', 'hp_fit_dimensions_l': '51', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '4"', 'hp_fit_dimensions_g': '4"', 'hp_fit_dimensions_l': '63.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '6"', 'hp_fit_dimensions_g': '6"', 'hp_fit_dimensions_l': '91', 'hp_fit_pn': '15' }
        ]
      }
    },
    {
      id: 'female-threaded-adaptor-socket-bs-en-1452-3',
      name: 'FEMALE THREADED ADAPTOR/SOCKET',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/BS EN 1452/female-threaded-adaptor.png',
      sizes: [ { sizeMm: '1/2"', sizeInch: '1/2"' }, { sizeMm: '3/4"', sizeInch: '3/4"' }, { sizeMm: '1"', sizeInch: '1"' }, { sizeMm: '1 1/4"', sizeInch: '1 1/4"' }, { sizeMm: '1 1/2"', sizeInch: '1 1/2"' }, { sizeMm: '2"', sizeInch: '2"' }, { sizeMm: '3"', sizeInch: '3"' }, { sizeMm: '4"', sizeInch: '4"' }, { sizeMm: '6"', sizeInch: '6"' } ],
      table: {
        id: 'female-threaded-adaptor-socket-bs-en-1452-3-table',
        title: 'FEMALE THREADED ADAPTOR/SOCKET BS EN 1452:3 / BS 4346 (PN 15)', titleFr: 'FEFILETÉ MÂLE ADAPTATEUR/MANCHON BS EN 1452:3 / BS 4346 (PN 15)',
        columns: [
{ key: 'hp_fit_nominal_size_inch', label: 'products.tables.hp_fit_nominal_size_inch', labelFr: 'products.tables.hp_fit_nominal_size_inch'   },
          { key: 'hp_fit_dimensions_g', label: 'products.tables.hp_fit_dimensions_g', labelFr: 'products.tables.hp_fit_dimensions_g'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm', colSpan: 3 },
          { key: 'hp_fit_dimensions_l', label: 'products.tables.hp_fit_dimensions_l', labelFr: 'products.tables.hp_fit_dimensions_l'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_inch': '1/2"', 'hp_fit_dimensions_g': '1/2"', 'hp_fit_dimensions_l': '16.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '3/4"', 'hp_fit_dimensions_g': '3/4"', 'hp_fit_dimensions_l': '19.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1"', 'hp_fit_dimensions_g': '1"', 'hp_fit_dimensions_l': '22.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/4"', 'hp_fit_dimensions_g': '1 1/4"', 'hp_fit_dimensions_l': '26.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/2"', 'hp_fit_dimensions_g': '1 1/2"', 'hp_fit_dimensions_l': '31.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '2"', 'hp_fit_dimensions_g': '2"', 'hp_fit_dimensions_l': '36.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '3"', 'hp_fit_dimensions_g': '3"', 'hp_fit_dimensions_l': '51', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '4"', 'hp_fit_dimensions_g': '4"', 'hp_fit_dimensions_l': '63.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '6"', 'hp_fit_dimensions_g': '6"', 'hp_fit_dimensions_l': '91', 'hp_fit_pn': '-' }
        ]
      }
    },
    {
      id: 'equal-tee-bs-en-1452-3',
      name: 'EQUAL TEE',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/BS EN 1452/equal-tee.png',
      sizes: [ { sizeMm: '1/2"', sizeInch: '1/2"' }, { sizeMm: '3/4"', sizeInch: '3/4"' }, { sizeMm: '1"', sizeInch: '1"' }, { sizeMm: '1 1/4"', sizeInch: '1 1/4"' }, { sizeMm: '1 1/2"', sizeInch: '1 1/2"' }, { sizeMm: '2"', sizeInch: '2"' }, { sizeMm: '3"', sizeInch: '3"' }, { sizeMm: '4"', sizeInch: '4"' }, { sizeMm: '6"', sizeInch: '6"' } ],
      table: {
        id: 'equal-tee-bs-en-1452-3-table',
        title: 'EQUAL TEE BS EN 1452:3 / BS 4346 (PN 15)', titleFr: 'ÉGAL TÉ BS EN 1452:3 / BS 4346 (PN 15)',
        columns: [
{ key: 'hp_fit_nominal_size_inch', label: 'products.tables.hp_fit_nominal_size_inch', labelFr: 'products.tables.hp_fit_nominal_size_inch'   },
          { key: 'hp_fit_dimensions_l', label: 'products.tables.hp_fit_dimensions_l', labelFr: 'products.tables.hp_fit_dimensions_l'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm', colSpan: 2 },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_inch': '1/2"', 'hp_fit_dimensions_l': '16.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '3/4"', 'hp_fit_dimensions_l': '19.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1"', 'hp_fit_dimensions_l': '22.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/4"', 'hp_fit_dimensions_l': '26.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/2"', 'hp_fit_dimensions_l': '31.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '2"', 'hp_fit_dimensions_l': '36.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '3"', 'hp_fit_dimensions_l': '51', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '4"', 'hp_fit_dimensions_l': '63.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '6"', 'hp_fit_dimensions_l': '91', 'hp_fit_pn': '15' }
        ]
      }
    },
    {
      id: 'reducing-tee-bs-en-1452-3',
      name: 'REDUCING TEE',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/BS EN 1452/reducing-tee.png',
      sizeHeaderOverride: 'products.tables.hp_fit_nominal_size_inch_inch_inch',
      sizes: [ { sizeMm: '3/4" x 1/2" x 3/4"', sizeInch: '3/4" x 1/2" x 3/4"' }, { sizeMm: '1" x 1/2" x 1"', sizeInch: '1" x 1/2" x 1"' }, { sizeMm: '1" x 3/4" x 1"', sizeInch: '1" x 3/4" x 1"' }, { sizeMm: '1 1/2" x 1/2" x 1 1/2"', sizeInch: '1 1/2" x 1/2" x 1 1/2"' }, { sizeMm: '1 1/2" x 3/4" x 1 1/2"', sizeInch: '1 1/2" x 3/4" x 1 1/2"' }, { sizeMm: '1 1/2" x 1" x 1 1/2"', sizeInch: '1 1/2" x 1" x 1 1/2"' }, { sizeMm: '2" x 1/2" x 2"', sizeInch: '2" x 1/2" x 2"' }, { sizeMm: '2" x 3/4" x 2"', sizeInch: '2" x 3/4" x 2"' }, { sizeMm: '2" x 1" x 2"', sizeInch: '2" x 1" x 2"' }, { sizeMm: '2" x 1 1/2" x 2"', sizeInch: '2" x 1 1/2" x 2"' } ],
      table: {
        id: 'reducing-tee-bs-en-1452-3-table',
        title: 'REDUCING TEE BS EN 1452:3 / BS 4346 (PN 15)', titleFr: 'TÉ RÉDUIT BS EN 1452:3 / BS 4346 (PN 15)',
        columns: [
{ key: 'hp_fit_nominal_size_inch', label: 'products.tables.hp_fit_nominal_size_inch_inch_inch', labelFr: 'products.tables.hp_fit_nominal_size_inch_inch_inch'   },
          { key: 'hp_fit_nominal_size_mm_d', label: 'products.tables.hp_fit_nominal_size_mm_d', labelFr: 'products.tables.hp_fit_nominal_size_mm_d'   , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm', colSpan: 4 },
          { key: 'hp_fit_dimensions_di', label: 'products.tables.hp_fit_dimensions_di', labelFr: 'products.tables.hp_fit_dimensions_di'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_dimensions_l', label: 'products.tables.hp_fit_dimensions_l', labelFr: 'products.tables.hp_fit_dimensions_l'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_inch': '3/4" x 1/2" x 3/4"', 'hp_fit_nominal_size_mm_d': '26.67', 'hp_fit_dimensions_di': '21.34', 'hp_fit_dimensions_l': '19.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1" x 1/2" x 1"', 'hp_fit_nominal_size_mm_d': '33.4', 'hp_fit_dimensions_di': '21.34', 'hp_fit_dimensions_l': '22.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1" x 3/4" x 1"', 'hp_fit_nominal_size_mm_d': '33.4', 'hp_fit_dimensions_di': '26.67', 'hp_fit_dimensions_l': '22.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/2" x 1/2" x 1 1/2"', 'hp_fit_nominal_size_mm_d': '48.26', 'hp_fit_dimensions_di': '21.34', 'hp_fit_dimensions_l': '31.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/2" x 3/4" x 1 1/2"', 'hp_fit_nominal_size_mm_d': '48.26', 'hp_fit_dimensions_di': '26.67', 'hp_fit_dimensions_l': '31.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/2" x 1" x 1 1/2"', 'hp_fit_nominal_size_mm_d': '48.26', 'hp_fit_dimensions_di': '33.4', 'hp_fit_dimensions_l': '31.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '2" x 1/2" x 2"', 'hp_fit_nominal_size_mm_d': '60.33', 'hp_fit_dimensions_di': '21.34', 'hp_fit_dimensions_l': '36.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '2" x 3/4" x 2"', 'hp_fit_nominal_size_mm_d': '60.33', 'hp_fit_dimensions_di': '26.67', 'hp_fit_dimensions_l': '36.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '2" x 1" x 2"', 'hp_fit_nominal_size_mm_d': '60.33', 'hp_fit_dimensions_di': '33.4', 'hp_fit_dimensions_l': '36.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '2" x 1 1/2" x 2"', 'hp_fit_nominal_size_mm_d': '60.33', 'hp_fit_dimensions_di': '48.26', 'hp_fit_dimensions_l': '36.5', 'hp_fit_pn': '15' }
        ]
      }
    },
    {
      id: 'female-threaded-reducing-tee-bs-en-1452-3',
      name: 'FEMALE THREADED REDUCING TEE',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/BS EN 1452/female-reducing-tee.png',
      sizeHeaderOverride: 'products.tables.hp_fit_nominal_size_inch_inch_inch',
      sizes: [ { sizeMm: '3/4" x 1/2" x 3/4"', sizeInch: '3/4" x 1/2" x 3/4"' }, { sizeMm: '1" x 1/2" x 1"', sizeInch: '1" x 1/2" x 1"' }, { sizeMm: '1" x 3/4" x 1"', sizeInch: '1" x 3/4" x 1"' }, { sizeMm: '1 1/2" x 1/2" x 1 1/2"', sizeInch: '1 1/2" x 1/2" x 1 1/2"' }, { sizeMm: '1 1/2" x 3/4" x 1 1/2"', sizeInch: '1 1/2" x 3/4" x 1 1/2"' }, { sizeMm: '1 1/2" x 1" x 1 1/2"', sizeInch: '1 1/2" x 1" x 1 1/2"' }, { sizeMm: '2" x 1/2" x 2"', sizeInch: '2" x 1/2" x 2"' }, { sizeMm: '2" x 3/4" x 2"', sizeInch: '2" x 3/4" x 2"' }, { sizeMm: '2" x 1" x 2"', sizeInch: '2" x 1" x 2"' } ],
      table: {
        id: 'female-threaded-reducing-tee-bs-en-1452-3-table',
        title: 'FEMALE THREADED REDUCING TEE BS EN 1452:3 / BS 4346 (PN 15)', titleFr: 'FEFILETÉ MÂLE TÉ RÉDUIT BS EN 1452:3 / BS 4346 (PN 15)',
        columns: [
{ key: 'hp_fit_nominal_size_inch', label: 'products.tables.hp_fit_nominal_size_inch_inch_inch', labelFr: 'products.tables.hp_fit_nominal_size_inch_inch_inch'   },
          { key: 'hp_fit_nominal_size_mm_d', label: 'products.tables.hp_fit_nominal_size_mm_d', labelFr: 'products.tables.hp_fit_nominal_size_mm_d'   , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm', colSpan: 4 },
          { key: 'hp_fit_dimensions_g', label: 'products.tables.hp_fit_dimensions_g', labelFr: 'products.tables.hp_fit_dimensions_g'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_dimensions_l', label: 'products.tables.hp_fit_dimensions_l', labelFr: 'products.tables.hp_fit_dimensions_l'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_inch': '3/4" x 1/2" x 3/4"', 'hp_fit_nominal_size_mm_d': '21.34', 'hp_fit_dimensions_g': '1/2"', 'hp_fit_dimensions_l': '19.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1" x 1/2" x 1"', 'hp_fit_nominal_size_mm_d': '33.4', 'hp_fit_dimensions_g': '1/2"', 'hp_fit_dimensions_l': '22.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1" x 3/4" x 1"', 'hp_fit_nominal_size_mm_d': '33.4', 'hp_fit_dimensions_g': '3/4"', 'hp_fit_dimensions_l': '22.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/2" x 1/2" x 1 1/2"', 'hp_fit_nominal_size_mm_d': '48.26', 'hp_fit_dimensions_g': '1 1/2"', 'hp_fit_dimensions_l': '31.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/2" x 3/4" x 1 1/2"', 'hp_fit_nominal_size_mm_d': '48.26', 'hp_fit_dimensions_g': '3/4"', 'hp_fit_dimensions_l': '31.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/2" x 1" x 1 1/2"', 'hp_fit_nominal_size_mm_d': '48.26', 'hp_fit_dimensions_g': '1"', 'hp_fit_dimensions_l': '31.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '2" x 1/2" x 2"', 'hp_fit_nominal_size_mm_d': '60.33', 'hp_fit_dimensions_g': '1/2"', 'hp_fit_dimensions_l': '36.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '2" x 3/4" x 2"', 'hp_fit_nominal_size_mm_d': '60.33', 'hp_fit_dimensions_g': '3/4"', 'hp_fit_dimensions_l': '36.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '2" x 1" x 2"', 'hp_fit_nominal_size_mm_d': '60.33', 'hp_fit_dimensions_g': '1"', 'hp_fit_dimensions_l': '36.5', 'hp_fit_pn': '15' }
        ]
      }
    },
    {
      id: 'female-threaded-equal-tee-bs-en-1452-3',
      name: 'FEMALE THREADED EQUAL TEE',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/BS EN 1452/female-threaded-tee.png',
      sizeHeaderOverride: 'products.tables.hp_fit_nominal_size_inch_inch_inch',
      sizes: [ { sizeMm: '1/2" x 1/2" x 1/2"', sizeInch: '1/2" x 1/2" x 1/2"' }, { sizeMm: '3/4" x 3/4" x 3/4"', sizeInch: '3/4" x 3/4" x 3/4"' }, { sizeMm: '1" x 1" x 1"', sizeInch: '1" x 1" x 1"' }, { sizeMm: '1 1/4" x 1 1/4" x 1 1/4"', sizeInch: '1 1/4" x 1 1/4" x 1 1/4"' }, { sizeMm: '1 1/2" x 1 1/2" x 1 1/2"', sizeInch: '1 1/2" x 1 1/2" x 1 1/2"' }, { sizeMm: '2" x 2" x 2"', sizeInch: '2" x 2" x 2"' } ],
      table: {
        id: 'female-threaded-equal-tee-bs-en-1452-3-table',
        title: 'FEMALE THREADED EQUAL TEE BS EN 1452:3 / BS 4346 (PN 15)', titleFr: 'FEFILETÉ MÂLE ÉGAL TÉ BS EN 1452:3 / BS 4346 (PN 15)',
        columns: [
{ key: 'hp_fit_nominal_size_inch', label: 'products.tables.hp_fit_nominal_size_inch_inch_inch', labelFr: 'products.tables.hp_fit_nominal_size_inch_inch_inch'   },
          { key: 'hp_fit_nominal_size_mm_d', label: 'products.tables.hp_fit_nominal_size_mm_d', labelFr: 'products.tables.hp_fit_nominal_size_mm_d'   , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm', colSpan: 4 },
          { key: 'hp_fit_dimensions_mm_g', label: 'products.tables.hp_fit_dimensions_mm_g', labelFr: 'products.tables.hp_fit_dimensions_mm_g'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_dimensions_mm_l', label: 'products.tables.hp_fit_dimensions_mm_l', labelFr: 'products.tables.hp_fit_dimensions_mm_l'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_inch': '1/2" x 1/2" x 1/2"', 'hp_fit_nominal_size_mm_d': '21.34', 'hp_fit_dimensions_mm_g': '1/2"', 'hp_fit_dimensions_mm_l': '16.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '3/4" x 3/4" x 3/4"', 'hp_fit_nominal_size_mm_d': '26.67', 'hp_fit_dimensions_mm_g': '3/4"', 'hp_fit_dimensions_mm_l': '19.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1" x 1" x 1"', 'hp_fit_nominal_size_mm_d': '33.4', 'hp_fit_dimensions_mm_g': '1"', 'hp_fit_dimensions_mm_l': '22.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/4" x 1 1/4" x 1 1/4"', 'hp_fit_nominal_size_mm_d': '42.16', 'hp_fit_dimensions_mm_g': '1 1/4"', 'hp_fit_dimensions_mm_l': '26.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/2" x 1 1/2" x 1 1/2"', 'hp_fit_nominal_size_mm_d': '48.26', 'hp_fit_dimensions_mm_g': '1 1/2"', 'hp_fit_dimensions_mm_l': '31.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '2" x 2" x 2"', 'hp_fit_nominal_size_mm_d': '60.33', 'hp_fit_dimensions_mm_g': '2"', 'hp_fit_dimensions_mm_l': '36.5', 'hp_fit_pn': '15' }
        ]
      }
    },
    {
      id: 'female-threaded-reducer-bush-bs-en-1452-3',
      name: 'FEMALE THREADED REDUCER BUSH',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/BS EN 1452/female-reducer-bush.png',
      sizeHeaderOverride: 'products.tables.hp_fit_nominal_size_inch_inch',
      sizes: [ { sizeMm: '3/4" x 1/2"', sizeInch: '3/4" x 1/2"' }, { sizeMm: '1" x 1/2"', sizeInch: '1" x 1/2"' }, { sizeMm: '1" x 3/4"', sizeInch: '1" x 3/4"' }, { sizeMm: '1 1/2" x 1/2"', sizeInch: '1 1/2" x 1/2"' }, { sizeMm: '2" x 1/2"', sizeInch: '2" x 1/2"' } ],
      table: {
        id: 'female-threaded-reducer-bush-bs-en-1452-3-table',
        title: 'FEMALE THREADED REDUCER BUSH BS EN 1452:3 / BS 4346 (PN 15)', titleFr: 'FEFILETÉ MÂLE BAGUE DE RÉDUCTION BS EN 1452:3 / BS 4346 (PN 15)',
        columns: [
{ key: 'hp_fit_nominal_size_inch', label: 'products.tables.hp_fit_nominal_size_inch_inch', labelFr: 'products.tables.hp_fit_nominal_size_inch_inch'   },
          { key: 'hp_fit_nominal_size_mm_d', label: 'products.tables.hp_fit_nominal_size_mm_d', labelFr: 'products.tables.hp_fit_nominal_size_mm_d'   , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm', colSpan: 4 },
          { key: 'hp_fit_dimensions_g', label: 'products.tables.hp_fit_dimensions_g', labelFr: 'products.tables.hp_fit_dimensions_g'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_dimensions_l', label: 'products.tables.hp_fit_dimensions_l', labelFr: 'products.tables.hp_fit_dimensions_l'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_inch': '3/4" x 1/2"', 'hp_fit_nominal_size_mm_d': '21.34', 'hp_fit_dimensions_g': '1/2"', 'hp_fit_dimensions_l': '32.4', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1" x 1/2"', 'hp_fit_nominal_size_mm_d': '33.4', 'hp_fit_dimensions_g': '1/2"', 'hp_fit_dimensions_l': '35.6', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1" x 3/4"', 'hp_fit_nominal_size_mm_d': '33.4', 'hp_fit_dimensions_g': '3/4"', 'hp_fit_dimensions_l': '35.6', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/2" x 1/2"', 'hp_fit_nominal_size_mm_d': '48.26', 'hp_fit_dimensions_g': '1/2"', 'hp_fit_dimensions_l': '43.0', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '2" x 1/2"', 'hp_fit_nominal_size_mm_d': '60.33', 'hp_fit_dimensions_g': '1/2"', 'hp_fit_dimensions_l': '47.4', 'hp_fit_pn': '15' }
        ]
      }
    },
    
    {
      id: 'flanges-with-stub-bs-en-1452-3',
      name: 'FLANGES WITH STUB',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/BS EN 1452/Flange-with-stub.png',
      sizes: [ { sizeMm: '2"', sizeInch: '2"' }, { sizeMm: '2 1/2"', sizeInch: '2 1/2"' }, { sizeMm: '3"', sizeInch: '3"' }, { sizeMm: '4"', sizeInch: '4"' }, { sizeMm: '6"', sizeInch: '6"' } ],
      table: {
        id: 'flanges-with-stub-bs-en-1452-3-table',
        title: 'FLANGES WITH STUB BS EN 1452:3 / BS 4346 (PN 15)', titleFr: 'BRIDES AVEC STUB BS EN 1452:3 / BS 4346 (PN 15)',
        columns: [
{ key: 'hp_fit_nominal_size_inch', label: 'products.tables.hp_fit_nominal_size_inch', labelFr: 'products.tables.hp_fit_nominal_size_inch'   },
          { key: 'hp_fit_nominal_size_mm_d1', label: 'products.tables.hp_fit_nominal_size_mm_d1', labelFr: 'products.tables.hp_fit_nominal_size_mm_d1'   , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm', colSpan: 9 },
          { key: 'hp_fit_nominal_size_mm_d2', label: 'products.tables.hp_fit_nominal_size_mm_d2', labelFr: 'products.tables.hp_fit_nominal_size_mm_d2'   , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_nominal_size_mm_h', label: 'products.tables.hp_fit_nominal_size_mm_h', labelFr: 'products.tables.hp_fit_nominal_size_mm_h'   , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_dimensions_mm_d1', label: 'products.tables.hp_fit_dimensions_mm_d1', labelFr: 'products.tables.hp_fit_dimensions_mm_d1'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_dimensions_mm_d2', label: 'products.tables.hp_fit_dimensions_mm_d2', labelFr: 'products.tables.hp_fit_dimensions_mm_d2'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_dimensions_mm_d3', label: 'products.tables.hp_fit_dimensions_mm_d3', labelFr: 'products.tables.hp_fit_dimensions_mm_d3'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_dimensions_mm_d4', label: 'products.tables.hp_fit_dimensions_mm_d4', labelFr: 'products.tables.hp_fit_dimensions_mm_d4'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_dimensions_mm_h', label: 'products.tables.hp_fit_dimensions_mm_h', labelFr: 'products.tables.hp_fit_dimensions_mm_h'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_inch': '2"', 'hp_fit_nominal_size_mm_d1': '91.8', 'hp_fit_nominal_size_mm_d2': '60', 'hp_fit_nominal_size_mm_h': '43.5', 'hp_fit_dimensions_mm_d1': '92.5', 'hp_fit_dimensions_mm_d2': '120', 'hp_fit_dimensions_mm_d3': '152.4', 'hp_fit_dimensions_mm_d4': '77.6', 'hp_fit_dimensions_mm_h': '20.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '2 1/2"', 'hp_fit_nominal_size_mm_d1': '107.2', 'hp_fit_nominal_size_mm_d2': '73.4', 'hp_fit_nominal_size_mm_h': '49', 'hp_fit_dimensions_mm_d1': '107.6', 'hp_fit_dimensions_mm_d2': '140', 'hp_fit_dimensions_mm_d3': '177.6', 'hp_fit_dimensions_mm_d4': '92.6', 'hp_fit_dimensions_mm_h': '24.8', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '3"', 'hp_fit_nominal_size_mm_d1': '119.9', 'hp_fit_nominal_size_mm_d2': '89.4', 'hp_fit_nominal_size_mm_h': '54.9', 'hp_fit_dimensions_mm_d1': '120.6', 'hp_fit_dimensions_mm_d2': '152.5', 'hp_fit_dimensions_mm_d3': '191.4', 'hp_fit_dimensions_mm_d4': '109.4', 'hp_fit_dimensions_mm_h': '26.4', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '4"', 'hp_fit_nominal_size_mm_d1': '152.5', 'hp_fit_nominal_size_mm_d2': '110.4', 'hp_fit_nominal_size_mm_h': '64.8', 'hp_fit_dimensions_mm_d1': '153.0', 'hp_fit_dimensions_mm_d2': '191', 'hp_fit_dimensions_mm_d3': '229.7', 'hp_fit_dimensions_mm_d4': '134', 'hp_fit_dimensions_mm_h': '28.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '6"', 'hp_fit_nominal_size_mm_d1': '206', 'hp_fit_nominal_size_mm_d2': '160.5', 'hp_fit_nominal_size_mm_h': '85', 'hp_fit_dimensions_mm_d1': '207.5', 'hp_fit_dimensions_mm_d2': '241', 'hp_fit_dimensions_mm_d3': '284', 'hp_fit_dimensions_mm_d4': '192.5', 'hp_fit_dimensions_mm_h': '32', 'hp_fit_pn': '15' }
        ]
      }
    },
    {
      id: 'hex-nipple-bs-en-1452-3',
      name: 'HEX NIPPLE',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/BS EN 1452/hex-nipple.png',
      sizes: [ { sizeMm: '1/2"', sizeInch: '1/2"' }, { sizeMm: '3/4"', sizeInch: '3/4"' }, { sizeMm: '1"', sizeInch: '1"' }, { sizeMm: '1 1/2"', sizeInch: '1 1/2"' }, { sizeMm: '2"', sizeInch: '2"' } ],
      table: {
        id: 'hex-nipple-bs-en-1452-3-table',
        title: 'HEX NIPPLE BS EN 1452:3 / BS 4346 (PN 15)', titleFr: 'MAMELON HEXAGONAL BS EN 1452:3 / BS 4346 (PN 15)',
        columns: [
{ key: 'hp_fit_nominal_size_inch', label: 'products.tables.hp_fit_nominal_size_inch', labelFr: 'products.tables.hp_fit_nominal_size_inch'   },
          { key: 'hp_fit_dimensions_g', label: 'products.tables.hp_fit_dimensions_g', labelFr: 'products.tables.hp_fit_dimensions_g'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm', colSpan: 3 },
          { key: 'hp_fit_dimensions_l', label: 'products.tables.hp_fit_dimensions_l', labelFr: 'products.tables.hp_fit_dimensions_l'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_inch': '1/2"', 'hp_fit_dimensions_g': '1/2"', 'hp_fit_dimensions_l': '16.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '3/4"', 'hp_fit_dimensions_g': '3/4"', 'hp_fit_dimensions_l': '19.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1"', 'hp_fit_dimensions_g': '1"', 'hp_fit_dimensions_l': '22.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/2"', 'hp_fit_dimensions_g': '1 1/2"', 'hp_fit_dimensions_l': '31.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '2"', 'hp_fit_dimensions_g': '2"', 'hp_fit_dimensions_l': '36.5', 'hp_fit_pn': '15' }
        ]
      }
    },
    {
      id: 'repair-socket-convertable-socket-bs-en-1452-3',
      name: 'REPAIR SOCKET/ CONVERTABLE SOCKET',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/BS EN 1452/repair-socket.png',
      sizeHeaderOverride: 'products.tables.hp_fit_nominal_size_inch_mm',
      sizes: [ { sizeMm: '1/2" x 20', sizeInch: '1/2" x 20' }, { sizeMm: '3/4" x 25', sizeInch: '3/4" x 25' }, { sizeMm: '1" x 32', sizeInch: '1" x 32' }, { sizeMm: '1 1/4" x 40', sizeInch: '1 1/4" x 40' }, { sizeMm: '1 1/2" x 50', sizeInch: '1 1/2" x 50' }, { sizeMm: '2" x 63', sizeInch: '2" x 63' }, { sizeMm: '2 1/2" x 75', sizeInch: '2 1/2" x 75' }, { sizeMm: '3" x 90', sizeInch: '3" x 90' }, { sizeMm: '4" x 110', sizeInch: '4" x 110' }, { sizeMm: '6" x 160', sizeInch: '6" x 160' }, { sizeMm: '8" x 200', sizeInch: '8" x 200' } ],
      table: {
        id: 'repair-socket-convertable-socket-bs-en-1452-3-table',
        title: 'REPAIR SOCKET/ CONVERTABLE SOCKET BS EN 1452:3 / BS 4346 (PN 15)', titleFr: 'REPAIR MANCHON/ CONVERTABLE MANCHON BS EN 1452:3 / BS 4346 (PN 15)',
        columns: [
{ key: 'hp_fit_nominal_size_inch', label: 'products.tables.hp_fit_nominal_size_inch_mm', labelFr: 'products.tables.hp_fit_nominal_size_inch_mm'   },
          { key: 'hp_fit_nominal_size_mm_d', label: 'products.tables.hp_fit_nominal_size_mm_d', labelFr: 'products.tables.hp_fit_nominal_size_mm_d'   , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm', colSpan: 4 },
          { key: 'hp_fit_dimensions_mm_d1', label: 'products.tables.hp_fit_dimensions_mm_d1', labelFr: 'products.tables.hp_fit_dimensions_mm_d1'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_dimensions_mm_l', label: 'products.tables.hp_fit_dimensions_mm_l', labelFr: 'products.tables.hp_fit_dimensions_mm_l'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_inch': '1/2" x 20', 'hp_fit_nominal_size_mm_d': '21.34', 'hp_fit_dimensions_mm_d1': '20', 'hp_fit_dimensions_mm_l': '16.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '3/4" x 25', 'hp_fit_nominal_size_mm_d': '26.67', 'hp_fit_dimensions_mm_d1': '25', 'hp_fit_dimensions_mm_l': '19.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1" x 32', 'hp_fit_nominal_size_mm_d': '33.4', 'hp_fit_dimensions_mm_d1': '32', 'hp_fit_dimensions_mm_l': '22.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/4" x 40', 'hp_fit_nominal_size_mm_d': '-', 'hp_fit_dimensions_mm_d1': '-', 'hp_fit_dimensions_mm_l': '-', 'hp_fit_pn': '-' },
          { 'hp_fit_nominal_size_inch': '1 1/2" x 50', 'hp_fit_nominal_size_mm_d': '48.26', 'hp_fit_dimensions_mm_d1': '50', 'hp_fit_dimensions_mm_l': '31.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '2" x 63', 'hp_fit_nominal_size_mm_d': '60.33', 'hp_fit_dimensions_mm_d1': '63', 'hp_fit_dimensions_mm_l': '38', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '2 1/2" x 75', 'hp_fit_nominal_size_mm_d': '-', 'hp_fit_dimensions_mm_d1': '-', 'hp_fit_dimensions_mm_l': '-', 'hp_fit_pn': '-' },
          { 'hp_fit_nominal_size_inch': '3" x 90', 'hp_fit_nominal_size_mm_d': '-', 'hp_fit_dimensions_mm_d1': '-', 'hp_fit_dimensions_mm_l': '-', 'hp_fit_pn': '-' },
          { 'hp_fit_nominal_size_inch': '4" x 110', 'hp_fit_nominal_size_mm_d': '-', 'hp_fit_dimensions_mm_d1': '-', 'hp_fit_dimensions_mm_l': '-', 'hp_fit_pn': '-' },
          { 'hp_fit_nominal_size_inch': '6" x 160', 'hp_fit_nominal_size_mm_d': '-', 'hp_fit_dimensions_mm_d1': '-', 'hp_fit_dimensions_mm_l': '-', 'hp_fit_pn': '-' },
          { 'hp_fit_nominal_size_inch': '8" x 200', 'hp_fit_nominal_size_mm_d': '-', 'hp_fit_dimensions_mm_d1': '-', 'hp_fit_dimensions_mm_l': '-', 'hp_fit_pn': '-' }
        ]
      }
    },
    {
      id: 'end-cap-bs-en-1452-3',
      name: 'END CAP',
      family: 'moulded',
      image: '/images/fittings/PVC High PRESSURE FITTINGS/BS EN 1452/end-cap.png',
      sizes: [ { sizeMm: '1/2"', sizeInch: '1/2"' }, { sizeMm: '3/4"', sizeInch: '3/4"' }, { sizeMm: '1"', sizeInch: '1"' }, { sizeMm: '1 1/2"', sizeInch: '1 1/2"' }, { sizeMm: '2"', sizeInch: '2"' }, { sizeMm: '3"', sizeInch: '3"' }, { sizeMm: '4"', sizeInch: '4"' }, { sizeMm: '6"', sizeInch: '6"' } ],
      table: {
        id: 'end-cap-bs-en-1452-3-table',
        title: 'END CAP BS EN 1452:3 / BS 4346 (PN 15)', titleFr: 'BOUCHON BS EN 1452:3 / BS 4346 (PN 15)',
        columns: [
{ key: 'hp_fit_nominal_size_inch', label: 'products.tables.hp_fit_nominal_size_inch', labelFr: 'products.tables.hp_fit_nominal_size_inch'   },
          { key: 'hp_fit_nominal_size_mm_d', label: 'products.tables.hp_fit_nominal_size_mm_d', labelFr: 'products.tables.hp_fit_nominal_size_mm_d'   , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm', colSpan: 3 },
          { key: 'hp_fit_dimensions_mm_l', label: 'products.tables.hp_fit_dimensions_mm_l', labelFr: 'products.tables.hp_fit_dimensions_mm_l'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' },
          { key: 'hp_fit_pn', label: 'products.tables.hp_fit_pn', labelFr: 'products.tables.hp_fit_pn'    , groupLabel: 'products.tables.dimensions_mm', groupLabelFr: 'products.tables.dimensions_mm' }
        ],
        rows: [
          { 'hp_fit_nominal_size_inch': '1/2"', 'hp_fit_nominal_size_mm_d': '21.34', 'hp_fit_dimensions_mm_l': '16.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '3/4"', 'hp_fit_nominal_size_mm_d': '26.67', 'hp_fit_dimensions_mm_l': '19.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1"', 'hp_fit_nominal_size_mm_d': '33.4', 'hp_fit_dimensions_mm_l': '22.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '1 1/2"', 'hp_fit_nominal_size_mm_d': '48.26', 'hp_fit_dimensions_mm_l': '31.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '2"', 'hp_fit_nominal_size_mm_d': '60.33', 'hp_fit_dimensions_mm_l': '36.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '3"', 'hp_fit_nominal_size_mm_d': '88.9', 'hp_fit_dimensions_mm_l': '51.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '4"', 'hp_fit_nominal_size_mm_d': '114.3', 'hp_fit_dimensions_mm_l': '63.5', 'hp_fit_pn': '15' },
          { 'hp_fit_nominal_size_inch': '6"', 'hp_fit_nominal_size_mm_d': '168.3', 'hp_fit_dimensions_mm_l': '91', 'hp_fit_pn': '15' }
        ]
      }
    }
  ],
  colorLabel: 'dark-grey',
  downloads: [
    { label: 'PVC HP Fittings BS EN 1452:3/BS 4346 Catalogue (PDF)', labelAr: 'كتالوج وصلات PVC ضغط عالي BS EN 1452:3/BS 4346 (PDF)', labelFr: 'Catalogue Raccords PVC HP BS EN 1452:3/BS 4346 (PDF)', href: '/pdfs/UPVC%20PRESSURE%20FITTINGS%20BS%20EN%2014523%20-%20BS%204346%20PN%2015.pdf' },
  ],
  dosDonts: {
    dos: [
      'Ensure all joints are properly cleaned before solvent welding',
      'Use only compatible solvent cements designed for PVC-U pressure systems',
      'Verify that system pressure does not exceed the PN 15 rating',
      'Follow local UAE/GCC building codes for installation',
    ],
    donts: [
      'Do not use these fittings for compressed air or gas transport',
      'Do not exceed the specified nominal pressure (PN) limits',
      'Do not install fittings that show signs of physical damage or cracks',
      'Do not subject the fittings to temperatures beyond recommended PVC-U limits',
    ]},
  dosDontsAr: {
    dos: [
      'تأكد أن جميع الوصلات نظيفة بشكل صحيح قبل اللحام بالمذيب',
      'استخدم فقط أسمنت مذيب متوافق مصمم لأنظمة ضغط PVC-U',
      'تحقق أن ضغط النظام لا يتجاوز تصنيف PN 15',
      'اتبع أكواد البناء المحلية في الإمارات والخليج للتركيب',
    ],
    donts: [
      'لا تستخدم هذه الوصلات لنقل الهواء المضغوط أو الغاز',
      'لا تتجاوز حدود الضغط الاسمي (PN) المحددة',
      'لا تركّب وصلات تظهر عليها علامات تلف فيزيائي أو تشققات',
      'لا تعرّض الوصلات لدرجات حرارة تتجاوز الحدود الموصى بها لـ PVC-U',
    ]},
    dosDontsFr: {
          dos: [
            `Assurez-vous que tous les joints sont correctement nettoyés avant le soudage au solvant.`,
            `Utilisez uniquement des colles à solvant compatibles conçues pour les systèmes sous pression PVC-U`,
            `Vérifiez que la pression du système ne dépasse pas la valeur nominale PN 15`,
            `Suivez les codes du bâtiment locaux UAE/GCC pour l'installation.`
          ],
          donts: [
            `N'utilisez pas ces raccords pour le transport d'air comprimé ou de gaz`,
            `Ne dépassez pas les limites de pression nominale (PN) spécifiées.`,
            `N'installez pas de raccords présentant des signes de dommages physiques ou de fissures.`,
            `Ne pas soumettre les raccords à des températures supérieures aux limites recommandées PVC-U`
          ]
        }
};
// ═══════════════════════════════════════════════════════════════════════════════
// 3) Valves
// ═══════════════════════════════════════════════════════════════════════════════
export const pvcHpFittingsValves: ProductDetailConfig = {
  slug: 'pvc-hp-fittings-valves',
  categorySlug: 'pvc-high-pressure-fittings',
  title: 'PVC High Pressure Industrial Valves',
  titleAr: 'صمامات الضغط العالي الصناعية PVC',
    titleFr: `PVC Vannes d'entrée haute pressiondustrial`,
    shortDescription: 'PVC-U industrial valves — unions, compact ball, true union, single union.',
  shortDescriptionAr: 'صمامات PVC-U صناعية — اتحادات، كرة مدمجة، اتحاد حقيقي، اتحاد فردي.',
    shortDescriptionFr: `PVC-U vannes industrial — raccords-unions, bille compacte, véritable raccord-union, raccord simple.`,
    overview: `Crown Plastic Pipes / Fittings, a premium valve manufacturer in the UAE, delivers PVC-U high pressure industrial valves engineered for maximum operational safety and longevity. Trusted by contractors across the UAE for critical flow control applications, these valves feature precision-machined internals, true union and compact designs for easy maintenance, and UV-resistant materials suited to harsh desert and coastal climates. Available in both metric (mm) and imperial (inch) sizes from our ISO 9001:2015 certified Umm Al Quwain facility.`,
  overviewAr: `تصنّع كراون للأنابيب والوصلات البلاستيكية، مصنع الصمامات المتميز في الإمارات، صمامات ضغط عالي صناعية PVC-U مصممة لأقصى درجات السلامة التشغيلية والمتانة. موثوقة من المقاولين في دبي وأبوظبي والخليج لتطبيقات التحكم في التدفق الحرجة. متوفرة بمقاسات مترية وإنشية من منشأتنا المعتمدة ISO 9001:2015 بأم القيوين.`,
    overviewFr: `Crown Plastic Pipes / Fittings, un fabricant de vannes haut de gamme dans le UAE, propose des vannes industrielles haute pression PVC-U du conçues pour une sécurité opérationnelle et une longévité maximales. Approuvées par les entrepreneurs du UAE pour les applications critiques de contrôle de débit, ces vannes sont dotées de composants internes usinés avec précision, d'un véritable raccord et de conceptions compactes pour un entretien facile, ainsi que de matériaux résistants aux UV adaptés aux climats désertiques et côtiers rigoureux. Disponible en tailles métriques (mm) et impériales (pouces) dans notre usine d'Umm Al Quwain certifiée ISO 9001:2015.`,
    features: [
    'Superior PVC-U composition for exceptional corrosion resistance — UAE manufactured',
    'Pressure-rated design ensures leak-proof performance in high-head systems',
    'Precision-machined internal components for smooth, controlled flow regulation',
    'True union and compact designs for easy installation and in-line maintenance',
    'UV-resistant materials suitable for harsh Gulf desert climates and outdoor installations',
    'Comprehensive size range in both metric (mm) and imperial (inch) for seamless project integration',
  ],
  featuresAr: [
    'تركيبة PVC-U فائقة لمقاومة تآكل استثنائية — مصنعة في الإمارات',
    'تصميم مصنف للضغط يضمن أداءً مانعاً للتسرب في أنظمة الضغط العالي',
    'مكونات داخلية مشغولة بدقة لتنظيم تدفق سلس ومتحكم',
    'تصاميم اتحاد حقيقي ومدمجة لسهولة التركيب والصيانة',
    'مواد مقاومة للأشعة فوق البنفسجية مناسبة لمناخات صحراء الخليج',
    'نطاق مقاسات شامل بالمتري والإنشي لتكامل سلس مع المشاريع',
  ],
    featuresFr: [
            `Composition PVC-U supérieure pour une résistance exceptionnelle à la corrosion — fabriqué UAE`,
            `La conception résistante à la pression garantit des performances étanches dans les systèmes à haute pression`,
            `Composants internes usinés avec précision pour une régulation du débit fluide et contrôlée`,
            `Véritable union et conceptions compactes pour une installation et une maintenance en ligne faciles`,
            `Matériaux résistants aux UV adaptés aux climats rigoureux du désert du Golfe et aux installations extérieures`,
            `Gamme complète de tailles en mesures métriques (mm) et impériales (pouces) pour une intégration transparente au projet`
          ],
    applications: [
    'Water treatment plants (desalination, filtration, distribution) in the UAE',
    'Chemical processing and aggressive fluid handling',
    'Industrial cooling and heating circulation systems',
    'Mining and mineral extraction operations in challenging environments',
  ],
  applicationsAr: [
    'محطات معالجة المياه (تحلية، ترشيح، توزيع) في الإمارات',
    'المعالجة الكيميائية ومناولة السوائل العدوانية',
    'أنظمة تدوير التبريد والتسخين الصناعية',
    'عمليات التعدين واستخراج المعادن في البيئات الصعبة',
  ],
    applicationsFr: [
            `Stations de traitement d'eau (dessalement, filtration, distribution) dans le UAE`,
            `Traitement chimique et manipulation de fluides agressifs`,
            `Systèmes de circulation de refroidissement et de chauffage industriels`,
            `Opérations minières et d’extraction de minéraux dans des environnements difficiles`
          ],
    pipesTables: [],
  fittings: [
    {
      id: "pvc-high-pressure-union",
      name: "PVC High Pressure Union",
      nameFr: "Raccord Union Haute Pression PVC",
      family: 'moulded' as const,
      image: '/images/fittings/PVC High PRESSURE FITTINGS/Valves/High_Pressure_Union.png',
      sizeHeaderOverride: 'products.tables.nominal_size_mm',
      sizes: [
        { sizeMm: '1/2"' }, { sizeMm: '3/4"' }, { sizeMm: '1"' }, { sizeMm: '1 ¼"' }, { sizeMm: '1 ½"' }, { sizeMm: '2"' }, { sizeMm: '2 ½"' }, { sizeMm: '3"' }
      ],
      sizesMM: [
        { sizeMm: '20mm' }, { sizeMm: '25mm' }, { sizeMm: '32mm' }, { sizeMm: '40mm' }, { sizeMm: '50mm' }, { sizeMm: '63mm' }, { sizeMm: '75mm' }, { sizeMm: '90mm' }
      ],
      table: {
        id: "pvc-high-pressure-union-table",
        title: "PVC High Pressure Union", titleFr: 'PVC High Pression Union',
        columns: [
          { key: "size", label: "NOMINAL SIZE", labelFr: 'NOMINAL TAILLE' },
          { key: "unit", label: "Unit", labelFr: 'Unité' }
        ],
        rows: [
          { "size": "25", "unit": "mm" },
          { "size": "40", "unit": "mm" },
          { "size": "50", "unit": "mm" },
          { "size": "75", "unit": "mm" },
          { "size": "90", "unit": "mm" },
          { "size": '1 1/4"', "unit": "Inch" },
          { "size": '1"', "unit": "Inch" }
        ]
      }
    },
    {
      id: "pvc-high-pressure-compact-ball-valve",
      name: "PVC High Pressure Compact Ball Valve",
      nameFr: "Vanne à Bille Compacte Haute Pression PVC",
      family: 'moulded' as const,
      image: '/images/fittings/PVC High PRESSURE FITTINGS/Valves/Compact_Ball_Valve.png',
      sizeHeaderOverride: 'products.tables.nominal_size_mm',
      sizes: [
        { sizeMm: '1/2"' }, { sizeMm: '3/4"' }, { sizeMm: '1"' }, { sizeMm: '1 ¼"' }, { sizeMm: '1 ½"' }, { sizeMm: '2"' }, { sizeMm: '3"' }, { sizeMm: '4"' }
      ],
      sizesMM: [
        { sizeMm: '20mm' }, { sizeMm: '25mm' }, { sizeMm: '32mm' }, { sizeMm: '40mm' }, { sizeMm: '50mm' }, { sizeMm: '63mm' }, { sizeMm: '90mm' }, { sizeMm: '110mm' }
      ],
      table: {
        id: "pvc-high-pressure-compact-ball-valve-table",
        title: "PVC High Pressure Compact Ball Valve", titleFr: 'PVC High Pression Compact VANNE À BOISSEAU SPHÉRIQUE',
        columns: [
          { key: "size", label: "NOMINAL SIZE", labelFr: 'NOMINAL TAILLE' },
          { key: "unit", label: "Unit", labelFr: 'Unité' }
        ],
        rows: [
          { "size": "25", "unit": "mm" },
          { "size": "32", "unit": "mm" },
          { "size": "50", "unit": "mm" },
          { "size": "63", "unit": "mm" },
          { "size": "90", "unit": "mm" },
          { "size": "110", "unit": "mm" },
          { "size": '1"', "unit": "Inch" },
          { "size": '1 1/2"', "unit": "Inch" },
          { "size": '2"', "unit": "Inch" },
          { "size": '3"', "unit": "Inch" },
          { "size": '4"', "unit": "Inch" }
        ]
      }
    },
    {
      id: "pvc-high-pressure-true-union",
      name: "PVC High Pressure True Union",
      nameFr: "Raccord Double Union Haute Pression PVC",
      family: 'moulded' as const,
      image: '/images/fittings/PVC High PRESSURE FITTINGS/Valves/True_Union_Ball.png',
      sizeHeaderOverride: 'products.tables.nominal_size_mm',
      sizes: [
        { sizeMm: '1/2"' }, { sizeMm: '3/4"' }, { sizeMm: '1"' }, { sizeMm: '1 ¼"' }, { sizeMm: '1 ½"' }, { sizeMm: '2"' }, { sizeMm: '3"' }, { sizeMm: '4"' }
      ],
      sizesMM: [
        { sizeMm: '20mm' }, { sizeMm: '25mm' }, { sizeMm: '32mm' }, { sizeMm: '40mm' }, { sizeMm: '50mm' }, { sizeMm: '63mm' }, { sizeMm: '90mm' }, { sizeMm: '110mm' }
      ],
      table: {
        id: "pvc-high-pressure-true-union-table",
        title: "PVC High Pressure True Union", titleFr: 'PVC High Pression True Union',
        columns: [
          { key: "size", label: "NOMINAL SIZE", labelFr: 'NOMINAL TAILLE' },
          { key: "unit", label: "Unit", labelFr: 'Unité' }
        ],
        rows: [
          { "size": "63", "unit": "mm" },
          { "size": "90", "unit": "mm" },
          { "size": '1"', "unit": "Inch" },
          { "size": '1 1/2"', "unit": "Inch" },
          { "size": '3"', "unit": "Inch" }
        ]
      }
    },
    {
      id: "pvc-high-pressure-single-union",
      name: "PVC High Pressure Single Union",
      nameFr: "Vanne à Simple Union Haute Pression PVC",
      family: 'moulded' as const,
      image: '/images/fittings/PVC High PRESSURE FITTINGS/Valves/Single_Union_Ball.png',
      sizeHeaderOverride: 'products.tables.nominal_size_mm',
      sizes: [
        { sizeMm: '1/2"' }, { sizeMm: '3/4"' }, { sizeMm: '1"' }, { sizeMm: '1 ¼"' }, { sizeMm: '1 ½"' }, { sizeMm: '2"' }, { sizeMm: '3"' }, { sizeMm: '4"' }
      ],
      sizesMM: [
        { sizeMm: '20mm' }, { sizeMm: '25mm' }, { sizeMm: '32mm' }, { sizeMm: '40mm' }, { sizeMm: '50mm' }, { sizeMm: '63mm' }, { sizeMm: '90mm' }, { sizeMm: '110mm' }
      ],
      table: {
        id: "pvc-high-pressure-single-union-table",
        title: "PVC High Pressure Single Union", titleFr: 'PVC High Pression Simple Union',
        columns: [
          { key: "size", label: "NOMINAL SIZE", labelFr: 'NOMINAL TAILLE' },
          { key: "unit", label: "Unit", labelFr: 'Unité' }
        ],
        rows: [
          { "size": '2"', "unit": "Inch" },
          { "size": '3"', "unit": "Inch" }
        ]
      }
    }
  ],
  colorLabel: 'dark-grey',
  downloads: [
    { label: 'PVC HP Valves Catalogue (PDF)', labelAr: 'كتالوج صمامات PVC ضغط عالي (PDF)', labelFr: 'Catalogue Vannes PVC HP (PDF)', href: '/pdfs/UPVC%20PRESSURE%20PIPES.pdf' },
  ],
  dosDonts: {
    dos: [
      'Verify pressure ratings against system specifications before installation',
      'Use appropriate PVC-U solvent cement and application techniques for secure joints',
      'Perform periodic visual inspections for material integrity and seal performance',
      'Install in a location that allows full access for maintenance and operation',
    ],
    donts: [
      'Do not exceed the valve\'s maximum rated operating temperature or pressure',
      'Do not use with media incompatible with PVC-U materials',
      'Do not over-tighten union nuts, which can damage seals and compromise the connection',
      'Do not expose to direct flames or extreme heat sources',
    ]},
  dosDontsAr: {
    dos: [
      'تحقق من تصنيفات الضغط مقابل مواصفات النظام قبل التركيب',
      'استخدم أسمنت مذيب PVC-U المناسب وتقنيات التطبيق للوصلات الآمنة',
      'أجرِ فحوصات بصرية دورية لسلامة المادة وأداء الأختام',
      'ركّب في موقع يسمح بالوصول الكامل للصيانة والتشغيل',
    ],
    donts: [
      'لا تتجاوز الحد الأقصى لدرجة حرارة أو ضغط التشغيل المصنف للصمام',
      'لا تستخدم مع وسائط غير متوافقة مع مواد PVC-U',
      'لا تفرط في شد صواميل الاتحاد مما قد يتلف الأختام',
      'لا تعرّض للهب المباشر أو مصادر حرارة شديدة',
    ]},
    dosDontsFr: {
          dos: [
            `Vérifier les pressions nominales par rapport aux spécifications du système avant l'installation`,
            `Utiliser la colle à solvant PVC-U et les techniques d'application appropriées pour sécuriser les joints.`,
            `Effectuer des inspections visuelles périodiques pour vérifier l'intégrité des matériaux et les performances des joints.`,
            `Installer dans un emplacement qui permet un accès complet pour la maintenance et l'exploitation`
          ],
          donts: [
            `Ne dépassez pas la température ou la pression de fonctionnement nominale maximale de la vanne.`,
            `Ne pas utiliser avec des supports incompatibles avec les matériaux PVC-U`,
            `Ne serrez pas trop les écrous-raccords, car cela pourrait endommager les joints et compromettre la connexion.`,
            `Ne pas exposer aux flammes directes ou aux sources de chaleur extrême`
          ]
        }
};
