/**
 * PVC Duct Fittings - Product Detail Configuration
 * Phase 2.7 — 1 sub-product: pvc-duct-fittings-standard (6 fitting types)
 * SEO: UAE/GCC/Dubai/Etisalat/DU telecom infrastructure keywords injected.
 */

import { type ProductDetailConfig } from '@/types/productDetail';

export const pvcDuctFittingsStandard: ProductDetailConfig = {
  slug: 'pvc-duct-fittings-standard',
  categorySlug: 'pvc-duct-fittings',
  title: 'PVC Duct Fittings — Telecom & Electrical Infrastructure',
  titleAr: 'وصلات مجاري PVC — البنية التحتية للاتصالات والكهرباء',
  shortDescription: 'PVC-U duct fittings — end caps, sockets, bellmouths, and LR bends for Etisalat & DU.',
  shortDescriptionAr: 'وصلات مجاري PVC-U — أغطية نهايات، مقابس، أبواق، وانحناءات LR لاتصالات ودو.',
  overview: `Crown Plastic Pipes / Fittings, the leading PVC duct fittings manufacturer in the UAE, produces premium fittings engineered for the structural integrity and longevity of critical underground telecom and electrical infrastructure. Specifically designed for Etisalat and DU network compliance, our end caps, sockets, bellmouths, and long-radius bends facilitate seamless transitions and watertight seals in conduit networks across the UAE. Manufactured at our ISO 9001:2015 certified facility with precision-engineered dimensions for secure solvent-welded joints.`,
  overviewAr: `تصنّع كراون للأنابيب والوصلات البلاستيكية، الشركة الرائدة في تصنيع وصلات مجاري PVC في الإمارات، وصلات فاخرة مصممة لضمان السلامة الهيكلية والعمر الطويل للبنية التحتية الحرجة للاتصالات والكهرباء تحت الأرض. مصممة خصيصاً للامتثال لمعايير شبكات اتصالات ودو، توفر أغطية النهايات والمقابس والأبواق والانحناءات طويلة نصف القطر انتقالات سلسة وأختام مانعة للتسرب في شبكات المجاري في دبي وأبوظبي والشارقة والخليج. مصنعة في منشأتنا المعتمدة ISO 9001:2015 بأبعاد مهندسة بدقة لوصلات لحام بالمذيب آمنة.`,
  features: [
    "Full compliance with Etisalat and DU specifications for network infrastructure.",
    "High-impact resistance suitable for direct burial and concrete encasement.",
    "Precision-engineered dimensions for watertight, leak-proof solvent-welded joints.",
    "Corrosion-resistant material ideal for UAE soil conditions and high salinity.",
    "Broad temperature stability for consistent performance in extreme GCC heat.",
    "Smooth internal bores to facilitate effortless cable pulling and reduce friction."
],
  featuresAr: [
    'مطابقة كاملة لمواصفات اتصالات ودو للبنية التحتية للشبكات',
    'مقاومة صدمات عالية مناسبة للدفن المباشر والتغليف بالخرسانة',
    'أبعاد مهندسة بدقة لوصلات لحام بالمذيب مانعة للتسرب',
    'مادة مقاومة للتآكل مثالية لظروف تربة الإمارات والملوحة العالية',
    'استقرار حراري واسع لأداء متسق في حرارة الخليج القصوى',
    'تجويفات داخلية ملساء لتسهيل سحب الكابلات وتقليل الاحتكاك',
  ],
  applications: [
    "Telecommunication network expansions (Etisalat/DU infrastructure).",
    "Underground electrical power distribution conduits.",
    "Street and pole lighting cable protection systems.",
    "Direct burial and concrete-encased utility ducting."
],
  applicationsAr: [
    'توسعات شبكات الاتصالات (البنية التحتية لاتصالات ودو)',
    'مجاري توزيع الطاقة الكهربائية تحت الأرض',
    'أنظمة حماية كابلات إنارة الشوارع والأعمدة',
    'مجاري المرافق المدفونة مباشرة والمغلفة بالخرسانة',
  ],
  pipesTables: [],
  fittings: [
    {
      id: "duct-duct-end-caps",
      name: "DUCT END CAPS",
      family: 'moulded' as const,
      image: '/images/products/cover/upvs duct/fittings/duct-end-caps.png',
      sizes: [
      { sizeMm: "2\" C/56" },
      { sizeMm: "3\" C/54D" },
      { sizeMm: "4\" C/110 mm" },
      { sizeMm: "6\" C / 160 mm" },
      { sizeMm: "8\" C/200 mm" }
      ],
      table: {
        id: "duct-duct-end-caps-table",
        title: "DUCT END CAPS",
        columns: [
        { key: "size", label: "products.tables.duct_fit_size" },
        { key: "id", label: "products.tables.duct_fit_id" },
        { key: "h", label: "products.tables.duct_fit_h" }
        ],
        rows: [
        { "size": "2\" C/56", "id": "60.5/54", "h": "30" },
        { "size": "3\" C/54D", "id": "89.5/96.7", "h": "30" },
        { "size": "4\" C/110 mm", "id": "114.5/110", "h": "30" },
        { "size": "6\" C / 160 mm", "id": "168.5/160", "h": "40" },
        { "size": "8\" C/200 mm", "id": "219.4/200", "h": "45" }
        ],
      },
    },
    {
      id: "duct-duct-sockets",
      name: "DUCT SOCKETS",
      family: 'moulded' as const,
      image: '/images/products/cover/upvs duct/fittings/duct-socketa.png',
      sizes: [
      { sizeMm: "2\" C/56" },
      { sizeMm: "3\" C/54D" },
      { sizeMm: "4\" C/110 mm" },
      { sizeMm: "6\" C/160 mm" },
      { sizeMm: "8\" C/200 mm" }
      ],
      table: {
        id: "duct-duct-sockets-table",
        title: "DUCT SOCKETS",
        columns: [
        { key: "size", label: "products.tables.duct_fit_size" },
        { key: "id", label: "products.tables.duct_fit_id" },
        { key: "l", label: "products.tables.duct_fit_l" }
        ],
        rows: [
        { "size": "2\" C/56", "id": "60.5/54", "l": "116.5" },
        { "size": "3\" C/54D", "id": "89.5/96.7", "l": "162" },
        { "size": "4\" C/110 mm", "id": "114.5/110", "l": "172" },
        { "size": "6\" C/160 mm", "id": "168.5/160", "l": "258" },
        { "size": "8\" C/200 mm", "id": "219.4/200", "l": "294" }
        ],
      },
    },
    {
      id: "duct-duct-bellmouths",
      name: "DUCT BELLMOUTHS",
      family: 'moulded' as const,
      image: '/images/products/cover/upvs duct/fittings/duct-bellmouth.png',
      sizes: [
      { sizeMm: "2\" C/56" },
      { sizeMm: "3\" C/54D" },
      { sizeMm: "4\" C/110 mm" },
      { sizeMm: "6\" C/160 mm" },
      { sizeMm: "8\" C/200 mm" }
      ],
      table: {
        id: "duct-duct-bellmouths-table",
        title: "DUCT BELLMOUTHS",
        columns: [
        { key: "size", label: "products.tables.duct_fit_size" },
        { key: "id", label: "products.tables.duct_fit_id" },
        { key: "od", label: "products.tables.duct_fit_od" },
        { key: "wt", label: "products.tables.duct_fit_wt" }
        ],
        rows: [
        { "size": "2\" C/56", "id": "110", "od": "117", "wt": "3.5/1.63" },
        { "size": "3\" C/54D", "id": "161.5", "od": "168", "wt": "3.5/1.63" },
        { "size": "4\" C/110 mm", "id": "201", "od": "212", "wt": "4/340" },
        { "size": "6\" C/160 mm", "id": "250.5", "od": "265", "wt": "5.00" },
        { "size": "8\" C/200 mm", "id": "315", "od": "332", "wt": "6.25" }
        ],
      },
    },
    {
      id: "duct-duct-90-45-lr-bends",
      name: "DUCT 90/45° LR BENDS",
      family: 'moulded' as const,
      image: '/images/products/cover/upvs duct/fittings/duct 90-45 l r bends.png',
      sizes: [
      { sizeMm: "1\"" },
      { sizeMm: "1½\"" },
      { sizeMm: "2\" C/56" },
      { sizeMm: "3\" C/54D" },
      { sizeMm: "4\" C/110 mm" },
      { sizeMm: "6\" C/160 mm" },
      { sizeMm: "8\" C/200 mm" }
      ],
      table: {
        id: "duct-duct-90-45-lr-bends-table",
        title: "DUCT 90/45° LR BENDS",
        columns: [
        { key: "size", label: "products.tables.duct_fit_size" },
        { key: "l1", label: "products.tables.duct_fit_l1" },
        { key: "l2", label: "products.tables.duct_fit_l2" },
        { key: "l3", label: "products.tables.duct_fit_l3" },
        { key: "l4", label: "products.tables.duct_fit_l4" },
        { key: "r", label: "products.tables.duct_fit_r" }
        ],
        rows: [
        { "size": "1\"", "l1": "220", "l2": "220", "l3": "280", "l4": "280", "r": "200" },
        { "size": "1½\"", "l1": "310", "l2": "310", "l3": "400", "l4": "400", "r": "300" },
        { "size": "2\" C/56", "l1": "481", "l2": "481", "l3": "567", "l4": "567", "r": "300" },
        { "size": "3\" C/54D", "l1": "638", "l2": "638", "l3": "755", "l4": "755", "r": "400" },
        { "size": "4\" C/110 mm", "l1": "626", "l2": "626", "l3": "683", "l4": "683", "r": "400" },
        { "size": "6\" C/160 mm", "l1": "699", "l2": "699", "l3": "717", "l4": "717", "r": "400" },
        { "size": "8\" C/200 mm", "l1": "914", "l2": "914", "l3": "1090", "l4": "1090", "r": "600" }
        ],
      },
    },
    {
      id: "duct-duct-90-lighting-lr-bends-4",
      name: "DUCT 90° LIGHTING LR BENDS 4\"",
      family: 'moulded' as const,
      image: '/images/products/cover/upvs duct/fittings/duct 90 lightning l r bends 4.png',
      sizes: [
      { sizeMm: "4\" CLASS C" }
      ],
      table: {
        id: "duct-duct-90-lighting-lr-bends-4-table",
        title: "DUCT 90° LIGHTING LR BENDS 4\"",
        columns: [
        { key: "size", label: "Ø/SIZE" },
        { key: "poles", label: "Poles" },
        { key: "radius-mm", label: "Radius (mm)" },
        { key: "h-mm", label: "H (mm)" },
        { key: "w-mm", label: "W (mm)" }
        ],
        rows: [
        { "size": "4\" CLASS C", "poles": "12 Mtr.", "radius-mm": "600", "h-mm": "1050", "w-mm": "600" },
        { "size": "4\" CLASS C", "poles": "14 Mtr.", "radius-mm": "600", "h-mm": "1050", "w-mm": "600" },
        { "size": "4\" CLASS C", "poles": "16/18 Mtr.", "radius-mm": "600", "h-mm": "1070", "w-mm": "600" },
        { "size": "4\" CLASS C", "poles": "25 Mtr.", "radius-mm": "600", "h-mm": "1050", "w-mm": "1150" }
        ],
      },
    },
    {
      id: "duct-duct-90-street-lighting-l-r-bends-3",
      name: "DUCT 90° STREET LIGHTING L R BENDS 3\"",
      family: 'moulded' as const,
      image: '/images/products/cover/upvs duct/fittings/duct 90 street lighting l r bends 3.png',
      sizes: [
      { sizeMm: "3\" CLASS C" }
      ],
      table: {
        id: "duct-duct-90-street-lighting-l-r-bends-3-table",
        title: "DUCT 90° STREET LIGHTING L R BENDS 3\"",
        columns: [
        { key: "size", label: "Ø/SIZE" },
        { key: "poles", label: "Poles" },
        { key: "radius-mm", label: "Radius (mm)" },
        { key: "h-mm", label: "H (mm)" },
        { key: "w-mm", label: "W (mm)" }
        ],
        rows: [
        { "size": "3\" CLASS C", "poles": "3.5 Mtr.", "radius-mm": "600", "h-mm": "700", "w-mm": "600" },
        { "size": "3\" CLASS C", "poles": "5 Mtr.", "radius-mm": "600", "h-mm": "700", "w-mm": "600" },
        { "size": "3\" CLASS C", "poles": "6 Mtr.", "radius-mm": "600", "h-mm": "1050", "w-mm": "600" },
        { "size": "3\" CLASS C", "poles": "8 Mtr.", "radius-mm": "600", "h-mm": "1050", "w-mm": "600" },
        { "size": "3\" CLASS C", "poles": "10 Mtr.", "radius-mm": "600", "h-mm": "1050", "w-mm": "600" }
        ],
      },
    },
  ],
  colorLabel: 'black',
  downloads: [
    { label: 'PVC Duct Fittings Catalogue (PDF)', href: '/pdfs/UPVC%20DUCT%20PIPES%20AND%20ACCESSORIES.pdf' },
  ],
  dosDonts: {
    dos: [
    "Ensure all surfaces are clean and free of debris before applying solvent cement.",
    "Use only approved solvent cements for UPVC applications to ensure a permanent bond.",
    "Align fittings precisely before final assembly to prevent stress on the joints.",
    "Verify size and specification compliance with project standards (e.g., DIN 8062, BS 3505)."
],
    donts: [
    "Do not use damaged or cracked fittings for underground installations.",
    "Avoid over-applying solvent cement as it can weaken the pipe wall if trapped.",
    "Do not subject newly joined fittings to high pressure before the cement has fully cured.",
    "Never mix and match incompatible pipe standards (e.g., Metric and Imperial) without adapters."
],
  },
  dosDontsAr: {
    dos: [
      'تأكد أن جميع الأسطح نظيفة وخالية من الحطام قبل تطبيق أسمنت المذيب',
      'استخدم فقط أسمنت مذيب معتمد لتطبيقات UPVC لضمان رابطة دائمة',
      'قم بمحاذاة الوصلات بدقة قبل التجميع النهائي لمنع الإجهاد على المفاصل',
      'تحقق من مطابقة المقاس والمواصفات مع معايير المشروع (مثل DIN 8062، BS 3505)',
    ],
    donts: [
      'لا تستخدم وصلات تالفة أو متشققة للتركيبات تحت الأرض',
      'تجنب الإفراط في تطبيق أسمنت المذيب لأنه قد يضعف جدار الأنبوب إذا حُبس',
      'لا تعرّض الوصلات المجمّعة حديثاً لضغط عالٍ قبل معالجة الأسمنت بالكامل',
      'لا تخلط معايير أنابيب غير متوافقة (مثل المتري والإنشي) بدون محولات',
    ],
  },
};
