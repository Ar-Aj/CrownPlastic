/**
 * PVC SCH 40 Fittings - Product Detail Configuration
 * Phase 2.5 — 1 sub-product: pvc-sch-40-fittings-astm-d2466 (17 fitting types)
 * SEO: UAE/GCC/Dubai locality keywords injected.
 */

import { type ProductDetailConfig } from '@/types/productDetail';

export const pvcSch40FittingsAstmD2466: ProductDetailConfig = {
  slug: 'pvc-sch-40-fittings-astm-d2466',
  categorySlug: 'pvc-sch-40-fittings',
  title: 'PVC SCH 40 Fittings — ASTM D 2466',
  titleAr: 'وصلات PVC جدول 40 — ASTM D 2466',
  shortDescription: 'ASTM D 2466 Schedule 40 PVC-U pressure fittings — imperial ½″–8″.',
  shortDescriptionAr: 'وصلات ضغط PVC-U جدول 40 وفق ASTM D 2466 — إنشي ½″–8″.',
  overview: `Crown Plastic Pipes / Fittings, a leading PVC Schedule 40 fittings manufacturer in the UAE, produces high-performance SCH 40 pressure fittings engineered to ASTM D 2466 standards. These fittings are the preferred choice for swimming pool installations, industrial cooling systems, and large-scale irrigation projects across the UAE. Manufactured at our ISO 9001:2015 certified Umm Al Quwain facility, the range spans ½″ to 8″ and includes elbows, tees, reducers, adaptors, unions, flanges, hex nipples, repair sockets, and end caps — providing cost-effective, corrosion-resistant solutions for modern Middle East infrastructure.`,
  overviewAr: `تصنّع كراون للأنابيب والوصلات البلاستيكية، الشركة الرائدة في تصنيع وصلات PVC جدول 40 في الإمارات، وصلات ضغط SCH 40 عالية الأداء وفق معايير ASTM D 2466. هذه الوصلات هي الخيار المفضل لتركيبات حمامات السباحة وأنظمة التبريد الصناعية ومشاريع الري واسعة النطاق في دبي وأبوظبي والخليج. مصنعة في منشأتنا المعتمدة ISO 9001:2015 بأم القيوين، يمتد النطاق من ½″ إلى 8″ ويشمل الأكواع والتيات والمخفضات والمحولات والاتحادات والفلنجات وأغطية النهايات — حلول اقتصادية ومقاومة للتآكل للبنية التحتية الحديثة في الشرق الأوسط.`,
  features: [
    'Full compliance with ASTM D 2466 standards for Schedule 40 PVC fittings — UAE manufactured',
    'High chemical and corrosion resistance suitable for UAE soil and water conditions',
    'Manufactured in ISO 9001:2015 certified facility in Umm Al Quwain, UAE',
    'Precision-molded dimensions for leak-proof solvent cement joints',
    'Lightweight construction for easy handling and rapid onsite installation',
    'Superior smooth internal bore to minimize pressure loss and optimize flow',
  ],
  featuresAr: [
    'مطابقة كاملة لمعايير ASTM D 2466 لوصلات PVC جدول 40 — مصنعة في الإمارات',
    'مقاومة كيميائية وتآكل عالية مناسبة لظروف التربة والمياه في الإمارات',
    'مصنعة في منشأة معتمدة ISO 9001:2015 بأم القيوين، الإمارات',
    'أبعاد مقولبة بدقة لوصلات لحام بالمذيب مانعة للتسرب',
    'بناء خفيف الوزن لسهولة المناولة والتركيب السريع في الموقع',
    'تجويف داخلي أملس فائق لتقليل فقدان الضغط وتحسين التدفق',
  ],
  applications: [
    'Potable cold-water pressure distribution systems across the UAE',
    'Commercial and residential swimming pool and spa plumbing in Dubai and Abu Dhabi',
    'Landscaping, turf, and agricultural irrigation networks in the GCC',
    'Industrial cooling water loops and chilled water systems',
  ],
  applicationsAr: [
    'أنظمة توزيع ضغط المياه الباردة الصالحة للشرب في الإمارات',
    'سباكة حمامات السباحة والمنتجعات السكنية والتجارية في دبي وأبوظبي',
    'شبكات الري والتنسيق والزراعة في الخليج',
    'حلقات مياه التبريد الصناعية وأنظمة المياه المبردة',
  ],
  pipesTables: [],
  fittings: [
    {
      id: "elbow-90-astm-d-2466-sch-40",
      name: "ELBOW 90° - ASTM D 2466 SCH-40",
      family: 'moulded' as const,
      image: '/images/fittings/PVC High PRESSURE FITTINGS/ASTM D 2466 SCH 40/elbow907.png',
      sizes: [
      { sizeMm: "1/2\"" },
      { sizeMm: "3/4\"" },
      { sizeMm: "1\"" },
      { sizeMm: "1 1/4\"" },
      { sizeMm: "1 1/2\"" },
      { sizeMm: "2\"" },
      { sizeMm: "3\"" },
      { sizeMm: "4\"" },
      { sizeMm: "6\"" }
      ],
      table: {
        id: "elbow-90-astm-d-2466-sch-40-table",
        title: "ELBOW 90° - ASTM D 2466 SCH-40",
        columns: [
        { key: "partnumber", label: "PartNumber" },
        { key: "size", label: "Size" },
        { key: "d", label: "d" },
        { key: "l", label: "L" }
        ],
        rows: [
        { "partnumber": "SCH40E90 0.5CR", "size": "1/2\"", "d": "21.34", "l": "16.5" },
        { "partnumber": "SCH40E90 0.75CR", "size": "3/4\"", "d": "26.67", "l": "19.5" },
        { "partnumber": "SCH40E90 1CR", "size": "1\"", "d": "33.4", "l": "22.5" },
        { "partnumber": "SCH40E90 1.25CR", "size": "1 1/4\"", "d": "42.16", "l": "26.5" },
        { "partnumber": "SCH40E90 1.5CR", "size": "1 1/2\"", "d": "48.26", "l": "31.5" },
        { "partnumber": "SCH40E90 2CR", "size": "2\"", "d": "60.33", "l": "36.5" },
        { "partnumber": "SCH40E90 3CR", "size": "3\"", "d": "88.9", "l": "51" },
        { "partnumber": "SCH40E90 4CR", "size": "4\"", "d": "114.3", "l": "63.5" },
        { "partnumber": "SCH40E90 6CR", "size": "6\"", "d": "168.3", "l": "91" }
        ],
      },
    },
    {
      id: "elbow-45-astm-d-2466-sch-40",
      name: "ELBOW 45° - ASTM D 2466 SCH-40",
      family: 'moulded' as const,
      image: '/images/fittings/PVC High PRESSURE FITTINGS/ASTM D 2466 SCH 40/elbow45.png',
      sizes: [
      { sizeMm: "1/2\"" },
      { sizeMm: "3/4\"" },
      { sizeMm: "1\"" },
      { sizeMm: "1 1/4\"" },
      { sizeMm: "1 1/2\"" },
      { sizeMm: "2\"" },
      { sizeMm: "3\"" },
      { sizeMm: "4\"" },
      { sizeMm: "6\"" }
      ],
      table: {
        id: "elbow-45-astm-d-2466-sch-40-table",
        title: "ELBOW 45° - ASTM D 2466 SCH-40",
        columns: [
        { key: "partnumber", label: "PartNumber" },
        { key: "size", label: "Size" },
        { key: "d", label: "d" },
        { key: "l", label: "L" }
        ],
        rows: [
        { "partnumber": "SCH40E45 0.5CR", "size": "1/2\"", "d": "21.34", "l": "16.5" },
        { "partnumber": "SCH40E45 0.75CR", "size": "3/4\"", "d": "26.67", "l": "19.5" },
        { "partnumber": "SCH40E45 1CR", "size": "1\"", "d": "33.4", "l": "22.5" },
        { "partnumber": "SCH40E45 1.25CR", "size": "1 1/4\"", "d": "42.16", "l": "26.5" },
        { "partnumber": "SCH40E45 1.5CR", "size": "1 1/2\"", "d": "48.26", "l": "31.5" },
        { "partnumber": "SCH40E45 2CR", "size": "2\"", "d": "60.33", "l": "36.5" },
        { "partnumber": "SCH40E45 3CR", "size": "3\"", "d": "88.9", "l": "51" },
        { "partnumber": "SCH40E45 4CR", "size": "4\"", "d": "114.3", "l": "63.5" },
        { "partnumber": "SCH40E45 6CR", "size": "6\"", "d": "168.3", "l": "91" }
        ],
      },
    },
    {
      id: "female-elbow-90",
      name: "FEMALE ELBOW 90°",
      family: 'moulded' as const,
      image: '/images/fittings/PVC High PRESSURE FITTINGS/ASTM D 2466 SCH 40/female-elbow90.png',
      sizes: [
      { sizeMm: "1/2\"" },
      { sizeMm: "3/4\"" },
      { sizeMm: "1\"" },
      { sizeMm: "1 1/4\"" },
      { sizeMm: "1 1/2\"" },
      { sizeMm: "2\"" }
      ],
      table: {
        id: "female-elbow-90-table",
        title: "FEMALE ELBOW 90°",
        columns: [
        { key: "partnumber", label: "PartNumber" },
        { key: "size", label: "Size" },
        { key: "d", label: "d" },
        { key: "g", label: "G" },
        { key: "l", label: "L" }
        ],
        rows: [
        { "partnumber": "SCH40FE 0.5X0.5CR", "size": "1/2\"", "d": "21.34", "g": "1/2\"", "l": "16.5" },
        { "partnumber": "SCH40FE 0.75X0.75CR", "size": "3/4\"", "d": "26.67", "g": "3/4\"", "l": "19.5" },
        { "partnumber": "SCH40FE 1X1CR", "size": "1\"", "d": "33.4", "g": "1\"", "l": "22.5" },
        { "partnumber": "SCH40FE 1.25X1.25CR", "size": "1 1/4\"", "d": "42.16", "g": "1 1/4\"", "l": "26.5" },
        { "partnumber": "SCH40FE 1.5X1.5CR", "size": "1 1/2\"", "d": "48.26", "g": "1 1/2\"", "l": "31.5" },
        { "partnumber": "SCH40FE 2X2CR", "size": "2\"", "d": "60.33", "g": "2\"", "l": "36.5" }
        ],
      },
    },
    {
      id: "socket-coupler-astm-d-2466-sch-40",
      name: "SOCKET/COUPLER - ASTM D 2466 SCH-40",
      family: 'moulded' as const,
      image: '/images/fittings/PVC High PRESSURE FITTINGS/ASTM D 2466 SCH 40/Socket.png',
      sizes: [
      { sizeMm: "1/2\"" },
      { sizeMm: "3/4\"" },
      { sizeMm: "1\"" },
      { sizeMm: "1 1/4\"" },
      { sizeMm: "1 1/2\"" },
      { sizeMm: "2\"" },
      { sizeMm: "3\"" },
      { sizeMm: "4\"" },
      { sizeMm: "6\"" }
      ],
      table: {
        id: "socket-coupler-astm-d-2466-sch-40-table",
        title: "SOCKET/COUPLER - ASTM D 2466 SCH-40",
        columns: [
        { key: "partnumber", label: "PartNumber" },
        { key: "size", label: "Size" },
        { key: "d", label: "d" },
        { key: "l", label: "L" }
        ],
        rows: [
        { "partnumber": "SCH40S 0.5CR", "size": "1/2\"", "d": "21.34", "l": "16.5" },
        { "partnumber": "SCH40S 0.75CR", "size": "3/4\"", "d": "26.67", "l": "19.5" },
        { "partnumber": "SCH40S 1CR", "size": "1\"", "d": "33.4", "l": "22.5" },
        { "partnumber": "SCH40S 1.25CR", "size": "1 1/4\"", "d": "42.16", "l": "26.5" },
        { "partnumber": "SCH40S 1.5CR", "size": "1 1/2\"", "d": "48.26", "l": "31.5" },
        { "partnumber": "SCH40S 2CR", "size": "2\"", "d": "60.33", "l": "36.5" },
        { "partnumber": "SCH40S 3CR", "size": "3\"", "d": "88.9", "l": "51" },
        { "partnumber": "SCH40S 4CR", "size": "4\"", "d": "114.3", "l": "63.5" },
        { "partnumber": "SCH40S 6CR", "size": "6\"", "d": "168.3", "l": "91" }
        ],
      },
    },
    {
      id: "reducer-bush-socket",
      name: "REDUCER BUSH/SOCKET",
      family: 'moulded' as const,
      image: '/images/fittings/PVC High PRESSURE FITTINGS/ASTM D 2466 SCH 40/reducer.png',
      sizeHeaderOverride: 'products.tables.hp_fit_nominal_size_inch_inch',
      sizes: [
      { sizeMm: "3/4\" X 1/2\"" },
      { sizeMm: "1\" X 1/2\"" },
      { sizeMm: "1\" X 3/4\"" },
      { sizeMm: "1 1/4\" X 1/2\"" },
      { sizeMm: "1 1/4\" X 3/4\"" },
      { sizeMm: "1 1/4\" X 1\"" },
      { sizeMm: "1 1/2\" X 1/2\"" },
      { sizeMm: "1 1/2\" X 3/4\"" },
      { sizeMm: "1 1/2\" X 1\"" },
      { sizeMm: "2\" X 1/2\"" },
      { sizeMm: "2\" X 3/4\"" },
      { sizeMm: "2\" X 1\"" },
      { sizeMm: "2\" X 1 1/2\"" },
      { sizeMm: "3\" X 1 1/2\"" },
      { sizeMm: "3\" X 2\"" },
      { sizeMm: "4\" X 2\"" },
      { sizeMm: "4\" X 3\"" },
      { sizeMm: "6\" X 3\"" },
      { sizeMm: "6\" X 4\"" }
      ],
      table: {
        id: "reducer-bush-socket-table",
        title: "REDUCER BUSH/SOCKET",
        columns: [
        { key: "size", label: "Nominal Size (Inch x Inch)" },
        { key: "d", label: "D" },
        { key: "d_upper", label: "d" },
        { key: "l", label: "L" }
        ],
        rows: [
        { "size": "3/4\" X 1/2\"", "d": "26.67", "d_upper": "21.34", "l": "32.6" },
        { "size": "1\" X 1/2\"", "d": "33.4", "d_upper": "21.34", "l": "34.1" },
        { "size": "1\" X 3/4\"", "d": "33.4", "d_upper": "26.67", "l": "34.1" },
        { "size": "1 1/4\" X 1/2\"", "d": "42.16", "d_upper": "21.34", "l": "36" },
        { "size": "1 1/4\" X 3/4\"", "d": "42.16", "d_upper": "26.67", "l": "36" },
        { "size": "1 1/4\" X 1\"", "d": "42.16", "d_upper": "33.4", "l": "36" },
        { "size": "1 1/2\" X 1/2\"", "d": "48.26", "d_upper": "21.34", "l": "40.8" },
        { "size": "1 1/2\" X 3/4\"", "d": "48.26", "d_upper": "26.67", "l": "40.8" },
        { "size": "1 1/2\" X 1\"", "d": "48.26", "d_upper": "33.4", "l": "40.8" },
        { "size": "2\" X 1/2\"", "d": "60.33", "d_upper": "21.34", "l": "47.4" },
        { "size": "2\" X 3/4\"", "d": "60.33", "d_upper": "26.67", "l": "47.4" },
        { "size": "2\" X 1\"", "d": "60.33", "d_upper": "33.4", "l": "47.4" },
        { "size": "2\" X 1 1/2\"", "d": "60.33", "d_upper": "48.26", "l": "47.4" },
        { "size": "3\" X 1 1/2\"", "d": "88.9", "d_upper": "48.26", "l": "58" },
        { "size": "3\" X 2\"", "d": "88.9", "d_upper": "60.33", "l": "58" },
        { "size": "4\" X 2\"", "d": "114.3", "d_upper": "60.33", "l": "54" },
        { "size": "4\" X 3\"", "d": "114.3", "d_upper": "88.9", "l": "54" },
        { "size": "6\" X 3\"", "d": "168.3", "d_upper": "88.9", "l": "80" },
        { "size": "6\" X 4\"", "d": "168.3", "d_upper": "114.3", "l": "80" }
        ],
      },
    },
    {
      id: "male-threaded-adaptor-socket-nipple-socket",
      name: "MALE THREADED ADAPTOR/SOCKET/NIPPLE SOCKET",
      family: 'moulded' as const,
      image: '/images/fittings/PVC High PRESSURE FITTINGS/ASTM D 2466 SCH 40/Male_Threaded_Adaptor_Final.png',
      sizes: [
      { sizeMm: "1/2\"" },
      { sizeMm: "3/4\"" },
      { sizeMm: "1\"" },
      { sizeMm: "1 1/4\"" },
      { sizeMm: "1 1/2\"" },
      { sizeMm: "2\"" },
      { sizeMm: "3\"" },
      { sizeMm: "4\"" },
      { sizeMm: "6\"" }
      ],
      table: {
        id: "male-threaded-adaptor-socket-nipple-socket-table",
        title: "MALE THREADED ADAPTOR/SOCKET/NIPPLE SOCKET",
        columns: [
        { key: "partnumber", label: "PartNumber" },
        { key: "size", label: "Size" },
        { key: "d", label: "d" },
        { key: "g", label: "G" },
        { key: "l", label: "L" }
        ],
        rows: [
        { "partnumber": "SCH40MA 0.5X0.5CR", "size": "1/2\"", "d": "21.34", "g": "1/2\"", "l": "16.5" },
        { "partnumber": "SCH40MA 0.75X0.75CR", "size": "3/4\"", "d": "26.67", "g": "3/4\"", "l": "19.5" },
        { "partnumber": "SCH40MA 1X1CR", "size": "1\"", "d": "33.4", "g": "1\"", "l": "22.5" },
        { "partnumber": "SCH40MA 1.25X1.25CR", "size": "1 1/4\"", "d": "42.16", "g": "1 1/4\"", "l": "26.5" },
        { "partnumber": "SCH40MA 1.5X1.5CR", "size": "1 1/2\"", "d": "48.26", "g": "1 1/2\"", "l": "31.5" },
        { "partnumber": "SCH40MA 2X2CR", "size": "2\"", "d": "60.33", "g": "2\"", "l": "36.5" },
        { "partnumber": "SCH40MA 3X3CR", "size": "3\"", "d": "88.9", "g": "3\"", "l": "51.5" },
        { "partnumber": "SCH40MA 4X4CR", "size": "4\"", "d": "114.3", "g": "4\"", "l": "63.5" },
        { "partnumber": "SCH40MA 6X6CR", "size": "6\"", "d": "168.3", "g": "6\"", "l": "91" }
        ],
      },
    },
    {
      id: "female-threaded-adaptor-socket",
      name: "FEMALE THREADED ADAPTOR/SOCKET",
      family: 'moulded' as const,
      image: '/images/fittings/PVC High PRESSURE FITTINGS/ASTM D 2466 SCH 40/femalethreadedadaptor.png',
      sizes: [
      { sizeMm: "1/2\"" },
      { sizeMm: "3/4\"" },
      { sizeMm: "1\"" },
      { sizeMm: "1 1/4\"" },
      { sizeMm: "1 1/2\"" },
      { sizeMm: "2\"" },
      { sizeMm: "3\"" },
      { sizeMm: "4\"" },
      { sizeMm: "6\"" }
      ],
      table: {
        id: "female-threaded-adaptor-socket-table",
        title: "FEMALE THREADED ADAPTOR/SOCKET",
        columns: [
        { key: "partnumber", label: "PartNumber" },
        { key: "size", label: "Size" },
        { key: "d", label: "d" },
        { key: "g", label: "G" },
        { key: "l", label: "L" }
        ],
        rows: [
        { "partnumber": "SCH40FS 0.5X0.5CR", "size": "1/2\"", "d": "21.34", "g": "1/2\"", "l": "16.5" },
        { "partnumber": "SCH40FS 0.75X0.75CR", "size": "3/4\"", "d": "26.67", "g": "3/4\"", "l": "19.5" },
        { "partnumber": "SCH40FS 1X1CR", "size": "1\"", "d": "33.4", "g": "1\"", "l": "22.5" },
        { "partnumber": "SCH40FS 1.25X1.25CR", "size": "1 1/4\"", "d": "42.16", "g": "1 1/4\"", "l": "26.5" },
        { "partnumber": "SCH40FS 1.5X1.5CR", "size": "1 1/2\"", "d": "48.26", "g": "1 1/2\"", "l": "31.5" },
        { "partnumber": "SCH40FS 2X2CR", "size": "2\"", "d": "60.33", "g": "2\"", "l": "36.5" },
        { "partnumber": "SCH40FS 3X3CR", "size": "3\"", "d": "88.9", "g": "3\"", "l": "51.5" },
        { "partnumber": "SCH40FS 4X4CR", "size": "4\"", "d": "114.3", "g": "4\"", "l": "63.5" },
        { "partnumber": "SCH40FS 6X6CR", "size": "6\"", "d": "168.3", "g": "6\"", "l": "91" }
        ],
      },
    },
    {
      id: "equal-tee",
      name: "EQUAL TEE",
      family: 'moulded' as const,
      image: '/images/fittings/PVC High PRESSURE FITTINGS/ASTM D 2466 SCH 40/equaltee.png',
      sizes: [
      { sizeMm: "1/2\"" },
      { sizeMm: "3/4\"" },
      { sizeMm: "1\"" },
      { sizeMm: "1 1/4\"" },
      { sizeMm: "1 1/2\"" },
      { sizeMm: "2\"" },
      { sizeMm: "3\"" },
      { sizeMm: "4\"" },
      { sizeMm: "6\"" }
      ],
      table: {
        id: "equal-tee-table",
        title: "EQUAL TEE",
        columns: [
        { key: "partnumber", label: "PartNumber" },
        { key: "size", label: "Size" },
        { key: "d", label: "d" },
        { key: "l", label: "L" }
        ],
        rows: [
        { "partnumber": "SCH40T 0.5CR", "size": "1/2\"", "d": "21.34", "l": "16.5" },
        { "partnumber": "SCH40T 0.75CR", "size": "3/4\"", "d": "26.67", "l": "19.5" },
        { "partnumber": "SCH40T 1CR", "size": "1\"", "d": "33.4", "l": "22.5" },
        { "partnumber": "SCH40T 1.25CR", "size": "1 1/4\"", "d": "42.16", "l": "26.5" },
        { "partnumber": "SCH40T 1.5CR", "size": "1 1/2\"", "d": "48.26", "l": "31.5" },
        { "partnumber": "SCH40T 2CR", "size": "2\"", "d": "60.33", "l": "36.5" },
        { "partnumber": "SCH40T 3CR", "size": "3\"", "d": "88.9", "l": "51.5" },
        { "partnumber": "SCH40T 4CR", "size": "4\"", "d": "114.3", "l": "63.5" },
        { "partnumber": "SCH40T 6CR", "size": "6\"", "d": "168.3", "l": "91" }
        ],
      },
    },
    {
      id: "reducing-tee",
      name: "REDUCING TEE",
      family: 'moulded' as const,
      image: '/images/fittings/PVC High PRESSURE FITTINGS/ASTM D 2466 SCH 40/reducingtee.png',
      sizeHeaderOverride: 'products.tables.hp_fit_nominal_size_inch_inch_inch',
      sizes: [
      { sizeMm: "3/4\" X 1/2\" X 3/4\"" },
      { sizeMm: "1\" X 1/2\" X 1\"" },
      { sizeMm: "1\" X 3/4\" X 1\"" },
      { sizeMm: "1 1/2\" X 1/2\" X 1 1/2\"" },
      { sizeMm: "1 1/2\" X 3/4\" X 1 1/2\"" },
      { sizeMm: "1 1/2\" X 1\" X 1 1/2\"" },
      { sizeMm: "2\" X 1/2\" X 2\"" },
      { sizeMm: "2\" X 3/4\" X 2\"" },
      { sizeMm: "2\" X 1\" X 2\"" },
      { sizeMm: "2\" X 1 1/2\" X 2\"" }
      ],
      table: {
        id: "reducing-tee-table",
        title: "REDUCING TEE",
        columns: [
        { key: "size", label: "Nominal Size (Inch x Inch x Inch)" },
        { key: "d", label: "d" },
        { key: "di", label: "di" },
        { key: "l", label: "L" }
        ],
        rows: [
        { "size": "3/4\" X 1/2\" X 3/4\"", "d": "26.67", "di": "21.34", "l": "19.5" },
        { "size": "1\" X 1/2\" X 1\"", "d": "33.4", "di": "21.34", "l": "22.5" },
        { "size": "1\" X 3/4\" X 1\"", "d": "33.4", "di": "26.67", "l": "22.5" },
        { "size": "1 1/2\" X 1/2\" X 1 1/2\"", "d": "48.26", "di": "21.34", "l": "31.5" },
        { "size": "1 1/2\" X 3/4\" X 1 1/2\"", "d": "48.26", "di": "26.67", "l": "31.5" },
        { "size": "1 1/2\" X 1\" X 1 1/2\"", "d": "48.26", "di": "33.4", "l": "31.5" },
        { "size": "2\" X 1/2\" X 2\"", "d": "60.33", "di": "21.34", "l": "36.5" },
        { "size": "2\" X 3/4\" X 2\"", "d": "60.33", "di": "26.67", "l": "36.5" },
        { "size": "2\" X 1\" X 2\"", "d": "60.33", "di": "33.4", "l": "36.5" },
        { "size": "2\" X 1 1/2\" X 2\"", "d": "60.33", "di": "48.26", "l": "36.5" }
        ],
      },
    },
    {
      id: "female-threaded-reducing-tee",
      name: "FEMALE THREADED REDUCING TEE",
      family: 'moulded' as const,
      image: '/images/fittings/PVC High PRESSURE FITTINGS/ASTM D 2466 SCH 40/femalereducingtee.png',
      sizeHeaderOverride: 'products.tables.hp_fit_nominal_size_inch_inch_inch',
      sizes: [
      { sizeMm: "3/4\" X 1/2\" X 3/4\"" },
      { sizeMm: "1\" X 1/2\" X 1\"" },
      { sizeMm: "1\" X 3/4\" X 1\"" },
      { sizeMm: "1 1/2\" X 1/2\" X 1 1/2\"" },
      { sizeMm: "1 1/2\" X 3/4\" X 1 1/2\"" },
      { sizeMm: "1 1/2\" X 1\" X 1 1/2\"" },
      { sizeMm: "2\" X 1/2\" X 2\"" },
      { sizeMm: "2\" X 3/4\" X 2\"" },
      { sizeMm: "2\" X 1\" X 2\"" }
      ],
      table: {
        id: "female-threaded-reducing-tee-table",
        title: "FEMALE THREADED REDUCING TEE",
        columns: [
        { key: "size", label: "Nominal Size (Inch x Inch x Inch)" },
        { key: "d", label: "d" },
        { key: "g", label: "G" },
        { key: "l", label: "L" }
        ],
        rows: [
        { "size": "3/4\" X 1/2\" X 3/4\"", "d": "21.34", "g": "1/2\"", "l": "19.5" },
        { "size": "1\" X 1/2\" X 1\"", "d": "33.4", "g": "1/2\"", "l": "22.5" },
        { "size": "1\" X 3/4\" X 1\"", "d": "33.4", "g": "3/4\"", "l": "22.5" },
        { "size": "1 1/2\" X 1/2\" X 1 1/2\"", "d": "48.26", "g": "1/2\"", "l": "31.5" },
        { "size": "1 1/2\" X 3/4\" X 1 1/2\"", "d": "48.26", "g": "3/4\"", "l": "31.5" },
        { "size": "1 1/2\" X 1\" X 1 1/2\"", "d": "48.26", "g": "1\"", "l": "31.5" },
        { "size": "2\" X 1/2\" X 2\"", "d": "60.33", "g": "1/2\"", "l": "36.5" },
        { "size": "2\" X 3/4\" X 2\"", "d": "60.33", "g": "3/4\"", "l": "36.5" },
        { "size": "2\" X 1\" X 2\"", "d": "60.33", "g": "1\"", "l": "36.5" }
        ],
      },
    },
    {
      id: "female-threaded-equal-tee",
      name: "FEMALE THREADED EQUAL TEE",
      family: 'moulded' as const,
      image: '/images/fittings/PVC High PRESSURE FITTINGS/ASTM D 2466 SCH 40/femaleequaltee.png',
      sizeHeaderOverride: 'products.tables.hp_fit_nominal_size_inch_inch_inch',
      sizes: [
      { sizeMm: "1/2\" X 1/2\" X 1/2\"" },
      { sizeMm: "3/4\" X 3/4\" X 3/4\"" },
      { sizeMm: "1\" X 1\" X 1\"" },
      { sizeMm: "1 1/4\" X 1 1/4\" X 1 1/4\"" },
      { sizeMm: "1 1/2\" X 1 1/2\" X 1 1/2\"" },
      { sizeMm: "2\" X 2\" X 2\"" }
      ],
      table: {
        id: "female-threaded-equal-tee-table",
        title: "FEMALE THREADED EQUAL TEE",
        columns: [
        { key: "size", label: "Nominal Size (Inch x Inch x Inch)" },
        { key: "d", label: "d" },
        { key: "g", label: "G" },
        { key: "l", label: "L" },
        { key: "pn", label: "PN" }
        ],
        rows: [
        { "size": "1/2\" X 1/2\" X 1/2\"", "d": "21.34", "g": "1/2\"", "l": "16.5", "pn": "15" },
        { "size": "3/4\" X 3/4\" X 3/4\"", "d": "26.67", "g": "3/4\"", "l": "19.5", "pn": "15" },
        { "size": "1\" X 1\" X 1\"", "d": "33.4", "g": "1\"", "l": "22.5", "pn": "15" },
        { "size": "1 1/4\" X 1 1/4\" X 1 1/4\"", "d": "42.16", "g": "1 1/4\"", "l": "26.5", "pn": "15" },
        { "size": "1 1/2\" X 1 1/2\" X 1 1/2\"", "d": "48.26", "g": "1 1/2\"", "l": "31.5", "pn": "15" },
        { "size": "2\" X 2\" X 2\"", "d": "60.33", "g": "2\"", "l": "36.5", "pn": "15" }
        ],
      },
    },
    {
      id: "female-threaded-reducer-bush",
      name: "FEMALE THREADED REDUCER BUSH",
      family: 'moulded' as const,
      image: '/images/fittings/PVC High PRESSURE FITTINGS/ASTM D 2466 SCH 40/femalereducerbush.png',
      sizeHeaderOverride: 'products.tables.hp_fit_nominal_size_inch_inch',
      sizes: [
      { sizeMm: "3/4\" X 1/2\"" },
      { sizeMm: "1\" X 1/2\"" },
      { sizeMm: "1\" X 3/4\"" },
      { sizeMm: "1 1/2\" X 1/2\"" },
      { sizeMm: "2\" X 1/2\"" }
      ],
      table: {
        id: "female-threaded-reducer-bush-table",
        title: "FEMALE THREADED REDUCER BUSH",
        columns: [
        { key: "size", label: "Nominal Size (Inch x Inch)" },
        { key: "d", label: "D" },
        { key: "g", label: "G" },
        { key: "l", label: "L" }
        ],
        rows: [
        { "size": "3/4\" X 1/2\"", "d": "21.34", "g": "1/2\"", "l": "32.4" },
        { "size": "1\" X 1/2\"", "d": "33.4", "g": "1/2\"", "l": "35.6" },
        { "size": "1\" X 3/4\"", "d": "33.4", "g": "3/4\"", "l": "35.6" },
        { "size": "1 1/2\" X 1/2\"", "d": "48.26", "g": "1/2\"", "l": "43.0" },
        { "size": "2\" X 1/2\"", "d": "60.33", "g": "1/2\"", "l": "47.4" }
        ],
      },
    },
    {
      id: "union",
      name: "UNION",
      family: 'moulded' as const,
      image: '/images/fittings/PVC High PRESSURE FITTINGS/ASTM D 2466 SCH 40/union.png',
      sizes: [
      { sizeMm: "1/2\"" },
      { sizeMm: "3/4\"" },
      { sizeMm: "1\"" },
      { sizeMm: "1 1/2\"" },
      { sizeMm: "2\"" }
      ],
      table: {
        id: "union-table",
        title: "UNION",
        columns: [
        { key: "partnumber", label: "PartNumber" },
        { key: "size", label: "Size" },
        { key: "d", label: "d" },
        { key: "l", label: "L" }
        ],
        rows: [
        { "partnumber": "SCH40U 0.5CR", "size": "1/2\"", "d": "21.34", "l": "16.5" },
        { "partnumber": "SCH40U 0.75CR", "size": "3/4\"", "d": "26.67", "l": "19.5" },
        { "partnumber": "SCH40U 1CR", "size": "1\"", "d": "33.4", "l": "22.5" },
        { "partnumber": "SCH40U 1.5CR", "size": "1 1/2\"", "d": "48.26", "l": "31.5" },
        { "partnumber": "SCH40U 2CR", "size": "2\"", "d": "60.33", "l": "36.5" }
        ],
      },
    },
    {
      id: "flanges-with-stub",
      name: "FLANGES WITH STUB",
      family: 'moulded' as const,
      image: '/images/fittings/PVC High PRESSURE FITTINGS/ASTM D 2466 SCH 40/flanges-with-stub.png',
      sizes: [
      { sizeMm: "2\"" },
      { sizeMm: "2 1/2\"" },
      { sizeMm: "3\"" },
      { sizeMm: "4\"" },
      { sizeMm: "6\"" }
      ],
      table: {
        id: "flanges-with-stub-table",
        title: "FLANGES WITH STUB",
        columns: [
        { key: "partnumber", label: "PartNumber" },
        { key: "size", label: "Size" },
        { key: "d2", label: "D2" },
        { key: "d1", label: "D1" },
        { key: "d2_stub", label: "D2_Stub" },
        { key: "d3", label: "D3" },
        { key: "d4", label: "D4" },
        { key: "h", label: "H" },
        { key: "h_upper", label: "h" }
        ],
        rows: [
        { "partnumber": "SCH40FL 2CR", "size": "2\"", "d2": "60", "d1": "43.5", "d2_stub": "92.5", "d3": "120", "d4": "152.4", "h": "77.6", "h_upper": "20.5" },
        { "partnumber": "SCH40FL 2.5CR", "size": "2 1/2\"", "d2": "107.2", "d1": "73.4", "d2_stub": "49", "d3": "107.6", "d4": "140", "h": "177.6", "h_upper": "92.6" },
        { "partnumber": "SCH40FL 3CR", "size": "3\"", "d2": "24.8", "d1": "119.9", "d2_stub": "89.4", "d3": "54.9", "d4": "120.6", "h": "152.5", "h_upper": "191.4" },
        { "partnumber": "SCH40FL 4CR", "size": "4\"", "d2": "109.4", "d1": "26.4", "d2_stub": "152.5", "d3": "110.4", "d4": "64.8", "h": "153.0", "h_upper": "191" },
        { "partnumber": "SCH40FL 6CR", "size": "6\"", "d2": "229.7", "d1": "134", "d2_stub": "28.5", "d3": "206", "d4": "160.5", "h": "85", "h_upper": "207.5" }
        ],
      },
    },
    {
      id: "hex-nipple",
      name: "HEX NIPPLE",
      family: 'moulded' as const,
      image: '/images/fittings/PVC High PRESSURE FITTINGS/ASTM D 2466 SCH 40/hex%20nipple.png',
      sizes: [
      { sizeMm: "1/2\"" },
      { sizeMm: "3/4\"" },
      { sizeMm: "1\"" },
      { sizeMm: "1 1/2\"" }
      ],
      table: {
        id: "hex-nipple-table",
        title: "HEX NIPPLE",
        columns: [
        { key: "partnumber", label: "PartNumber" },
        { key: "size", label: "Size" },
        { key: "g", label: "G" },
        { key: "l", label: "L" }
        ],
        rows: [
        { "partnumber": "SCH40HN 0.5CR", "size": "1/2\"", "g": "1/2\"", "l": "16.5" },
        { "partnumber": "SCH40HN 0.75CR", "size": "3/4\"", "g": "3/4\"", "l": "19.5" },
        { "partnumber": "SCH40HN 1CR", "size": "1\"", "g": "1\"", "l": "22.5" },
        { "partnumber": "SCH40HN 1.5CR", "size": "1 1/2\"", "g": "1 1/2\"", "l": "31.5" }
        ],
      },
    },
    {
      id: "repair-socket-convertable-socket",
      name: "REPAIR SOCKET/ CONVERTABLE SOCKET",
      family: 'moulded' as const,
      image: '/images/fittings/PVC High PRESSURE FITTINGS/ASTM D 2466 SCH 40/Socket.png',
      sizeHeaderOverride: 'products.tables.hp_fit_nominal_size_inch_mm',
      sizes: [
      { sizeMm: "1/2\" X 20" },
      { sizeMm: "3/4\" X 25" },
      { sizeMm: "1\" X 32" },
      { sizeMm: "1 1/4\" X 40" },
      { sizeMm: "1 1/2\" X 50" },
      { sizeMm: "2\" X 63" },
      { sizeMm: "2 1/2\" X 75" },
      { sizeMm: "3\" X 90" },
      { sizeMm: "4\" X 110" },
      { sizeMm: "6\" X 160" },
      { sizeMm: "8\" X 200" }
      ],
      table: {
        id: "repair-socket-convertable-socket-table",
        title: "REPAIR SOCKET/ CONVERTABLE SOCKET",
        columns: [
        { key: "size", label: "Nominal Size (Inch x mm)" },
        { key: "d", label: "d" },
        { key: "d1", label: "d1" },
        { key: "l", label: "L" }
        ],
        rows: [
        { "size": "1/2\" X 20", "d": "21.34", "d1": "20", "l": "16.5" },
        { "size": "3/4\" X 25", "d": "26.67", "d1": "25", "l": "19.5" },
        { "size": "1\" X 32", "d": "33.4", "d1": "32", "l": "22.5" },
        { "size": "1 1/4\" X 40", "d": "N/A", "d1": "N/A", "l": "N/A" },
        { "size": "1 1/2\" X 50", "d": "48.26", "d1": "50", "l": "31.5" },
        { "size": "2\" X 63", "d": "60.33", "d1": "63", "l": "38" },
        { "size": "2 1/2\" X 75", "d": "N/A", "d1": "N/A", "l": "N/A" },
        { "size": "3\" X 90", "d": "N/A", "d1": "N/A", "l": "N/A" },
        { "size": "4\" X 110", "d": "N/A", "d1": "N/A", "l": "N/A" },
        { "size": "6\" X 160", "d": "N/A", "d1": "N/A", "l": "N/A" },
        { "size": "8\" X 200", "d": "N/A", "d1": "N/A", "l": "N/A" }
        ],
      },
    },
    {
      id: "end-cap",
      name: "END CAP",
      family: 'moulded' as const,
      image: '/images/fittings/PVC High PRESSURE FITTINGS/ASTM D 2466 SCH 40/end%20cap.png',
      sizes: [
      { sizeMm: "1/2\"" },
      { sizeMm: "3/4\"" },
      { sizeMm: "1\"" },
      { sizeMm: "1 1/2\"" },
      { sizeMm: "2\"" },
      { sizeMm: "3\"" },
      { sizeMm: "4\"" },
      { sizeMm: "6\"" }
      ],
      table: {
        id: "end-cap-table",
        title: "END CAP",
        columns: [
        { key: "partnumber", label: "PartNumber" },
        { key: "size", label: "Size" },
        { key: "d", label: "d" },
        { key: "l", label: "L" }
        ],
        rows: [
        { "partnumber": "SCH40EC 0.5CR", "size": "1/2\"", "d": "21.34", "l": "16.5" },
        { "partnumber": "SCH40EC 0.75CR", "size": "3/4\"", "d": "26.67", "l": "19.5" },
        { "partnumber": "SCH40EC 1CR", "size": "1\"", "d": "33.4", "l": "22.5" },
        { "partnumber": "SCH40EC 1.5CR", "size": "1 1/2\"", "d": "48.26", "l": "31.5" },
        { "partnumber": "SCH40EC 2CR", "size": "2\"", "d": "60.33", "l": "36.5" },
        { "partnumber": "SCH40EC 3CR", "size": "3\"", "d": "88.9", "l": "51" },
        { "partnumber": "SCH40EC 4CR", "size": "4\"", "d": "114.3", "l": "63.5" },
        { "partnumber": "SCH40EC 6CR", "size": "6\"", "d": "168.3", "l": "91" }
        ],
      },
    }
  ],
  downloads: [
    { label: 'PVC SCH 40 Fittings ASTM D 2466 Catalogue (PDF)', href: '/pdfs/PVC%20SCH%2040%20FITTINGS%20(ASTM%20D%202466)%20CATALOGUE.pdf' },
  ],
  dosDonts: {
    dos: [
      'Use only with pressure-rated cold water applications',
      'Ensure cut pipe is square and deburred before solvent welding',
      'Apply appropriate PVC primer and solvent cement for a secure bond',
      'Allow sufficient curing time based on UAE ambient temperatures before testing',
    ],
    donts: [
      'Do not use for compressed air or high-pressure gas systems',
      'Do not exceed the temperature ratings for standard PVC materials',
      'Do not use with incompatible chemical substances',
      'Do not over-tighten threaded connections to prevent stress cracking',
    ],
  },
  dosDontsAr: {
    dos: [
      'استخدم فقط مع تطبيقات المياه الباردة المصنفة للضغط',
      'تأكد أن القطع مربع ومنزوع النتوءات قبل اللحام بالمذيب',
      'طبّق برايمر PVC المناسب وأسمنت المذيب للحصول على رابطة آمنة',
      'اسمح بوقت معالجة كافٍ بناءً على درجات الحرارة المحيطة في الإمارات قبل الاختبار',
    ],
    donts: [
      'لا تستخدم للهواء المضغوط أو أنظمة الغاز عالي الضغط',
      'لا تتجاوز تصنيفات درجة الحرارة لمواد PVC القياسية',
      'لا تستخدم مع مواد كيميائية غير متوافقة',
      'لا تفرط في شد التوصيلات الملولبة لمنع التشقق الإجهادي',
    ],
  },
};
