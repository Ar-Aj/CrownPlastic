/**
 * Fabrications & Accessories - Product Detail Configurations
 * Phase 2.12 — 5 sub-products: Grease Traps A-D + Accessories
 * SEO: UAE/Dubai Municipality/MEP fabrication keywords injected.
 */

import { type ProductDetailConfig } from '@/types/productDetail';

// ═════════════════════════════════════════════════════════════════════════════
// 1) Grease Trap Type A
// ═════════════════════════════════════════════════════════════════════════════

export const fabricationGreaseTrapTypeA: ProductDetailConfig = {
  slug: "fabrication-grease-trap-type-a",
  categorySlug: 'fabrications-accessories',
  renderImage: '/images/fabrications/typea_main.png',
  diagramImage: '/images/fabrications/typea_diagram.png',
  title: "Fabricated Grease Trap Type A — Custom Build (Dubai Municipality Approved)",
  titleAr: "مصيدة الدهون المصنّعة النوع A — تفصيل حسب الطلب (معتمدة من بلدية دبي)",
  shortDescription: "Single bucket grease trap (450mm deep) with sealed GRP cover — Dubai Municipality approved.",
  shortDescriptionAr: "مصيدة دهون بدلو واحد (عمق 450 مم) مع غطاء GRP محكم — معتمدة من بلدية دبي.",
  overview: "Crown Plastic Pipes / Fittings manufactures custom-built Type A grease traps featuring a 450mm deep removable PVC perforated bucket with 25 holes in four rows per side. Sealed with a 1070 x 820 x 15mm GRP cover and 5mm neoprene gasket, these units are Dubai Municipality approved for commercial MEP drainage projects across the UAE and GCC. Each unit is custom-fabricated at our Umm Al Quwain facility to match specific site conditions and waste water flow rates.",
  overviewAr: "تصنّع كراون للأنابيب والوصلات البلاستيكية مصائد دهون النوع A حسب الطلب بدلو PVC مثقب قابل للإزالة بعمق 450 مم مع 25 ثقب في أربعة صفوف لكل جانب. محكمة بغطاء GRP بمقاس 1070 × 820 × 15 مم وحشية نيوبرين 5 مم. معتمدة من بلدية دبي لمشاريع الصرف MEP التجارية في الإمارات والخليج.",
  features: ["Custom build solutions tailored to specific site conditions and waste water flow rates","Dubai Municipality approved designs for grease traps and interceptors","High-quality corrosion-resistant materials including UPVC, GRP, and Neoprene","Removable perforated PVC buckets for high-efficiency solid waste collection","Precision-engineered ducting components including sockets, end caps, and bellmouths","Secure sealing systems utilizing brass wing nuts and 5mm thick neoprene gaskets"],
  featuresAr: [
    'حلول بناء مخصصة مصممة وفق ظروف الموقع المحددة ومعدلات تدفق مياه الصرف',
    'تصاميم معتمدة من بلدية دبي لمصائد الدهون والمعترضات',
    'مواد عالية الجودة مقاومة للتآكل بما في ذلك UPVC و GRP والنيوبرين',
    'دلاء PVC مثقبة قابلة للإزالة لجمع النفايات الصلبة بكفاءة عالية',
    'مكونات قنوات مصنعة بدقة بما في ذلك الوصلات والأغطية وفتحات الجرس',
    'أنظمة إحكام آمنة باستخدام صواميل فراشية نحاسية وحشيات نيوبرين 5 مم',
  ],
  applications: ["Commercial MEP and drainage infrastructure projects in Dubai and Abu Dhabi","Petrol, oil, and water triple interceptor systems for industrial utilities","Telecommunication and electrical ducting infrastructure for UAE municipalities","Pressure-breaking manholes and specialized catch basin assemblies"],
  applicationsAr: [
    'مشاريع البنية التحتية التجارية MEP والصرف في دبي وأبوظبي',
    'أنظمة معترضات ثلاثية للبنزين والزيت والمياه للمرافق الصناعية',
    'البنية التحتية للقنوات الاتصالات والكهربائية لبلديات الإمارات',
    'غرف تفتيش كسر الضغط وتجميعات أحواض الالتقاط المتخصصة',
  ],
  pipesTables: [
    {
      id: "fabrication-grease-trap-type-a-specs",
      title: "Type A",
      columns: [
      { key: "component", label: "Component" },
      { key: "details", label: "Details" }
      ],
      rows: [
      { "component": "Unit Dimensions", "details": "450 x 280 x 450 deep" },
      { "component": "Removable PVC Perforated Bucket", "details": "450mm deep with 25 holes in four rows each side" },
      { "component": "Cover Assembly", "details": "1070 x 820 x 15mm thick sealed cover in GRP with 40x15 support" },
      { "component": "Hardware", "details": "10 x 30 Brass wing nut/bolt and 5mm thick neoprene gasket" }
      ],
    }
  ],
  fittings: [],
  downloads: [
    { label: 'Fabrications & Accessories Catalogue (PDF)', href: '/pdfs/UPVC%20FABRICATION%20AND%20ACCESSORIES.pdf' },
  ],
  dosDonts: {
    dos: ["Ensure size and capacity are judged according to the amount of waste water processed per minute","Verify site conditions before manufacturing custom-build units","Use specified brass wing nuts and neoprene gaskets for a sealed GRP cover","Consult approved Dubai Municipality drawings for grease trap installations"],
    donts: ["Do not use generic sizes without considering specific site processing requirements","Do not compromise on seal integrity when installing interceptor covers","Do not install perforated buckets without ensuring proper hole count and row alignment","Do not bypass vent pipe requirements for grease trap and interceptor systems"],
  },
  dosDontsAr: {
    dos: [
      'تأكد أن الحجم والسعة محددان وفق كمية مياه الصرف المعالجة في الدقيقة',
      'تحقق من ظروف الموقع قبل تصنيع الوحدات المخصصة',
      'استخدم صواميل فراشية نحاسية وحشيات نيوبرين محددة لغطاء GRP محكم',
      'استشر رسومات بلدية دبي المعتمدة لتركيبات مصائد الدهون',
    ],
    donts: [
      'لا تستخدم مقاسات عامة دون مراعاة متطلبات المعالجة المحددة للموقع',
      'لا تتنازل عن سلامة الإحكام عند تركيب أغطية المعترضات',
      'لا تركّب الدلاء المثقبة دون التأكد من عدد الثقوب ومحاذاة الصفوف الصحيحة',
      'لا تتجاوز متطلبات أنابيب التهوية لأنظمة مصائد الدهون والمعترضات',
    ],
  },
};


// ═════════════════════════════════════════════════════════════════════════════
// 2) Grease Trap Type B
// ═════════════════════════════════════════════════════════════════════════════

export const fabricationGreaseTrapTypeB: ProductDetailConfig = {
  slug: "fabrication-grease-trap-type-b",
  categorySlug: 'fabrications-accessories',
  renderImage: '/images/fabrications/typeb_main.png',
  diagramImage: '/images/fabrications/typeb_diagram.png',
  title: "Fabricated Grease Trap Type B — Twin Bucket (Dubai Municipality Approved)",
  titleAr: "مصيدة الدهون المصنّعة النوع B — دلو مزدوج (معتمدة من بلدية دبي)",
  shortDescription: "Twin bucket grease trap (260mm deep each) with 3-unit GRP cover assembly.",
  shortDescriptionAr: "مصيدة دهون بدلو مزدوج (عمق 260 مم لكل) مع تجميع غطاء GRP ثلاثي.",
  overview: "Crown Plastic Pipes / Fittings manufactures Type B twin bucket grease traps featuring two removable PVC perforated buckets (260mm deep) with 25 holes in four rows per side. The 1100mm long unit includes a 3-piece GRP cover assembly (595 x 595 x 16mm) with 5mm gaskets. Dubai Municipality approved for high-capacity commercial kitchens and food processing facilities across the UAE.",
  overviewAr: "تصنّع كراون للأنابيب والوصلات البلاستيكية مصائد دهون النوع B بدلو مزدوج بدلوين PVC مثقبين قابلين للإزالة (عمق 260 مم) مع 25 ثقب في أربعة صفوف لكل جانب. الوحدة بطول 1100 مم تتضمن تجميع غطاء GRP من 3 قطع. معتمدة من بلدية دبي للمطابخ التجارية عالية السعة.",
  features: ["Custom build solutions tailored to specific site conditions and waste water flow rates","Dubai Municipality approved designs for grease traps and interceptors","High-quality corrosion-resistant materials including UPVC, GRP, and Neoprene","Removable perforated PVC buckets for high-efficiency solid waste collection","Precision-engineered ducting components including sockets, end caps, and bellmouths","Secure sealing systems utilizing brass wing nuts and 5mm thick neoprene gaskets"],
  featuresAr: [
    'حلول بناء مخصصة مصممة وفق ظروف الموقع المحددة ومعدلات تدفق مياه الصرف',
    'تصاميم معتمدة من بلدية دبي لمصائد الدهون والمعترضات',
    'مواد عالية الجودة مقاومة للتآكل بما في ذلك UPVC و GRP والنيوبرين',
    'دلاء PVC مثقبة قابلة للإزالة لجمع النفايات الصلبة بكفاءة عالية',
    'مكونات قنوات مصنعة بدقة بما في ذلك الوصلات والأغطية وفتحات الجرس',
    'أنظمة إحكام آمنة باستخدام صواميل فراشية نحاسية وحشيات نيوبرين 5 مم',
  ],
  applications: ["Commercial MEP and drainage infrastructure projects in Dubai and Abu Dhabi","Petrol, oil, and water triple interceptor systems for industrial utilities","Telecommunication and electrical ducting infrastructure for UAE municipalities","Pressure-breaking manholes and specialized catch basin assemblies"],
  applicationsAr: [
    'مشاريع البنية التحتية التجارية MEP والصرف في دبي وأبوظبي',
    'أنظمة معترضات ثلاثية للبنزين والزيت والمياه للمرافق الصناعية',
    'البنية التحتية للقنوات الاتصالات والكهربائية لبلديات الإمارات',
    'غرف تفتيش كسر الضغط وتجميعات أحواض الالتقاط المتخصصة',
  ],
  pipesTables: [
    {
      id: "fabrication-grease-trap-type-b-specs",
      title: "Type B",
      columns: [
      { key: "component", label: "Component" },
      { key: "details", label: "Details" }
      ],
      rows: [
      { "component": "Unit Length", "details": "1100mm" },
      { "component": "Removable PVC Perforated Buckets", "details": "Two buckets 260 deep with 25 holes in four rows each side" },
      { "component": "Cover Assembly", "details": "3 units of 595 x 595 x 16mm thick GRP cover with 5mm thick gasket" },
      { "component": "Top PVC Plate", "details": "205 x 595 x 15 PVC top (2 nos)" }
      ],
    }
  ],
  fittings: [],
  downloads: [
    { label: 'Fabrications & Accessories Catalogue (PDF)', href: '/pdfs/UPVC%20FABRICATION%20AND%20ACCESSORIES.pdf' },
  ],
  dosDonts: {
    dos: ["Ensure size and capacity are judged according to the amount of waste water processed per minute","Verify site conditions before manufacturing custom-build units","Use specified brass wing nuts and neoprene gaskets for a sealed GRP cover","Consult approved Dubai Municipality drawings for grease trap installations"],
    donts: ["Do not use generic sizes without considering specific site processing requirements","Do not compromise on seal integrity when installing interceptor covers","Do not install perforated buckets without ensuring proper hole count and row alignment","Do not bypass vent pipe requirements for grease trap and interceptor systems"],
  },
  dosDontsAr: {
    dos: [
      'تأكد أن الحجم والسعة محددان وفق كمية مياه الصرف المعالجة في الدقيقة',
      'تحقق من ظروف الموقع قبل تصنيع الوحدات المخصصة',
      'استخدم صواميل فراشية نحاسية وحشيات نيوبرين محددة لغطاء GRP محكم',
      'استشر رسومات بلدية دبي المعتمدة لتركيبات مصائد الدهون',
    ],
    donts: [
      'لا تستخدم مقاسات عامة دون مراعاة متطلبات المعالجة المحددة للموقع',
      'لا تتنازل عن سلامة الإحكام عند تركيب أغطية المعترضات',
      'لا تركّب الدلاء المثقبة دون التأكد من عدد الثقوب ومحاذاة الصفوف الصحيحة',
      'لا تتجاوز متطلبات أنابيب التهوية لأنظمة مصائد الدهون والمعترضات',
    ],
  },
};


// ═════════════════════════════════════════════════════════════════════════════
// 3) Grease Trap Type C
// ═════════════════════════════════════════════════════════════════════════════

export const fabricationGreaseTrapTypeC: ProductDetailConfig = {
  slug: "fabrication-grease-trap-type-c",
  categorySlug: 'fabrications-accessories',
  renderImage: '/images/fabrications/typec_main.png',
  diagramImage: '/images/fabrications/typec_diagram.png',
  title: "Fabricated Grease Trap Type C (Dubai Municipality Approved)",
  titleAr: "مصيدة الدهون المصنّعة النوع C (معتمدة من بلدية دبي)",
  shortDescription: "Large-capacity grease trap with 5-row perforated bucket and neoprene seal.",
  shortDescriptionAr: "مصيدة دهون كبيرة السعة بدلو مثقب 5 صفوف وحشية نيوبرين.",
  overview: "Crown Plastic Pipes / Fittings manufactures Type C grease traps for high-capacity drainage applications, featuring a removable PVC perforated bucket with 25 holes in five rows and a sealed neoprene gasket system. Dubai Municipality approved for large-scale commercial and industrial MEP projects across the UAE and GCC.",
  overviewAr: "تصنّع كراون للأنابيب والوصلات البلاستيكية مصائد دهون النوع C لتطبيقات الصرف عالية السعة، بدلو PVC مثقب قابل للإزالة مع 25 ثقب في خمسة صفوف ونظام حشية نيوبرين محكم. معتمدة من بلدية دبي لمشاريع MEP التجارية والصناعية الكبيرة.",
  features: ["Custom build solutions tailored to specific site conditions and waste water flow rates","Dubai Municipality approved designs for grease traps and interceptors","High-quality corrosion-resistant materials including UPVC, GRP, and Neoprene","Removable perforated PVC buckets for high-efficiency solid waste collection","Precision-engineered ducting components including sockets, end caps, and bellmouths","Secure sealing systems utilizing brass wing nuts and 5mm thick neoprene gaskets"],
  featuresAr: [
    'حلول بناء مخصصة مصممة وفق ظروف الموقع المحددة ومعدلات تدفق مياه الصرف',
    'تصاميم معتمدة من بلدية دبي لمصائد الدهون والمعترضات',
    'مواد عالية الجودة مقاومة للتآكل بما في ذلك UPVC و GRP والنيوبرين',
    'دلاء PVC مثقبة قابلة للإزالة لجمع النفايات الصلبة بكفاءة عالية',
    'مكونات قنوات مصنعة بدقة بما في ذلك الوصلات والأغطية وفتحات الجرس',
    'أنظمة إحكام آمنة باستخدام صواميل فراشية نحاسية وحشيات نيوبرين 5 مم',
  ],
  applications: ["Commercial MEP and drainage infrastructure projects in Dubai and Abu Dhabi","Petrol, oil, and water triple interceptor systems for industrial utilities","Telecommunication and electrical ducting infrastructure for UAE municipalities","Pressure-breaking manholes and specialized catch basin assemblies"],
  applicationsAr: [
    'مشاريع البنية التحتية التجارية MEP والصرف في دبي وأبوظبي',
    'أنظمة معترضات ثلاثية للبنزين والزيت والمياه للمرافق الصناعية',
    'البنية التحتية للقنوات الاتصالات والكهربائية لبلديات الإمارات',
    'غرف تفتيش كسر الضغط وتجميعات أحواض الالتقاط المتخصصة',
  ],
  pipesTables: [
    {
      id: "fabrication-grease-trap-type-c-specs",
      title: "Type C",
      columns: [
      { key: "component", label: "Component" },
      { key: "details", label: "Details" }
      ],
      rows: [
      { "component": "Removable PVC Perforated Bucket", "details": "Equipped with 25 holes in five rows" },
      { "component": "Sealing Component", "details": "5mm thick neoprene gasket" },
      { "component": "Support", "details": "Support for bucket seating" }
      ],
    }
  ],
  fittings: [],
  downloads: [
    { label: 'Fabrications & Accessories Catalogue (PDF)', href: '/pdfs/UPVC%20FABRICATION%20AND%20ACCESSORIES.pdf' },
  ],
  dosDonts: {
    dos: ["Ensure size and capacity are judged according to the amount of waste water processed per minute","Verify site conditions before manufacturing custom-build units","Use specified brass wing nuts and neoprene gaskets for a sealed GRP cover","Consult approved Dubai Municipality drawings for grease trap installations"],
    donts: ["Do not use generic sizes without considering specific site processing requirements","Do not compromise on seal integrity when installing interceptor covers","Do not install perforated buckets without ensuring proper hole count and row alignment","Do not bypass vent pipe requirements for grease trap and interceptor systems"],
  },
  dosDontsAr: {
    dos: [
      'تأكد أن الحجم والسعة محددان وفق كمية مياه الصرف المعالجة في الدقيقة',
      'تحقق من ظروف الموقع قبل تصنيع الوحدات المخصصة',
      'استخدم صواميل فراشية نحاسية وحشيات نيوبرين محددة لغطاء GRP محكم',
      'استشر رسومات بلدية دبي المعتمدة لتركيبات مصائد الدهون',
    ],
    donts: [
      'لا تستخدم مقاسات عامة دون مراعاة متطلبات المعالجة المحددة للموقع',
      'لا تتنازل عن سلامة الإحكام عند تركيب أغطية المعترضات',
      'لا تركّب الدلاء المثقبة دون التأكد من عدد الثقوب ومحاذاة الصفوف الصحيحة',
      'لا تتجاوز متطلبات أنابيب التهوية لأنظمة مصائد الدهون والمعترضات',
    ],
  },
};


// ═════════════════════════════════════════════════════════════════════════════
// 4) Grease Trap Type D
// ═════════════════════════════════════════════════════════════════════════════

export const fabricationGreaseTrapTypeD: ProductDetailConfig = {
  slug: "fabrication-grease-trap-type-d",
  categorySlug: 'fabrications-accessories',
  renderImage: '/images/fabrications/typed_main.png',
  diagramImage: '/images/fabrications/typed_diagram.png',
  title: "Fabricated Grease Trap Type D (Dubai Municipality Approved)",
  titleAr: "مصيدة الدهون المصنّعة النوع D (معتمدة من بلدية دبي)",
  shortDescription: "Compact grease trap with 2″ PVC inlet and 600 x 450mm cover.",
  shortDescriptionAr: "مصيدة دهون مدمجة بمدخل PVC 2″ وغطاء 600 × 450 مم.",
  overview: "Crown Plastic Pipes / Fittings manufactures compact Type D grease traps featuring a 2-inch PVC waste inlet and a removable perforated bucket (360 x 360 x 300mm deep) with 12mm holes in 3 rows per side. Fitted with a 600 x 450mm PVC 8mm top cover. Dubai Municipality approved for smaller commercial and residential drainage applications across the UAE.",
  overviewAr: "تصنّع كراون للأنابيب والوصلات البلاستيكية مصائد دهون النوع D المدمجة بمدخل مخلفات PVC بحجم 2 بوصة ودلو مثقب قابل للإزالة (360 × 360 × 300 مم) مع ثقوب 12 مم في 3 صفوف لكل جانب. مزودة بغطاء PVC علوي 8 مم بمقاس 600 × 450 مم. معتمدة من بلدية دبي.",
  features: ["Custom build solutions tailored to specific site conditions and waste water flow rates","Dubai Municipality approved designs for grease traps and interceptors","High-quality corrosion-resistant materials including UPVC, GRP, and Neoprene","Removable perforated PVC buckets for high-efficiency solid waste collection","Precision-engineered ducting components including sockets, end caps, and bellmouths","Secure sealing systems utilizing brass wing nuts and 5mm thick neoprene gaskets"],
  featuresAr: [
    'حلول بناء مخصصة مصممة وفق ظروف الموقع المحددة ومعدلات تدفق مياه الصرف',
    'تصاميم معتمدة من بلدية دبي لمصائد الدهون والمعترضات',
    'مواد عالية الجودة مقاومة للتآكل بما في ذلك UPVC و GRP والنيوبرين',
    'دلاء PVC مثقبة قابلة للإزالة لجمع النفايات الصلبة بكفاءة عالية',
    'مكونات قنوات مصنعة بدقة بما في ذلك الوصلات والأغطية وفتحات الجرس',
    'أنظمة إحكام آمنة باستخدام صواميل فراشية نحاسية وحشيات نيوبرين 5 مم',
  ],
  applications: ["Commercial MEP and drainage infrastructure projects in Dubai and Abu Dhabi","Petrol, oil, and water triple interceptor systems for industrial utilities","Telecommunication and electrical ducting infrastructure for UAE municipalities","Pressure-breaking manholes and specialized catch basin assemblies"],
  applicationsAr: [
    'مشاريع البنية التحتية التجارية MEP والصرف في دبي وأبوظبي',
    'أنظمة معترضات ثلاثية للبنزين والزيت والمياه للمرافق الصناعية',
    'البنية التحتية للقنوات الاتصالات والكهربائية لبلديات الإمارات',
    'غرف تفتيش كسر الضغط وتجميعات أحواض الالتقاط المتخصصة',
  ],
  pipesTables: [
    {
      id: "fabrication-grease-trap-type-d-specs",
      title: "Type D",
      columns: [
      { key: "component", label: "Component" },
      { key: "details", label: "Details" }
      ],
      rows: [
      { "component": "Inlet", "details": "2 inch PVC waste inlet" },
      { "component": "Removable PVC Perforated Bucket", "details": "360 x 360 x 300 deep with 12mm holes in 3 rows each" },
      { "component": "Cover Assembly", "details": "600 x 450mm PVC 8mm top cover" }
      ],
    }
  ],
  fittings: [],
  downloads: [
    { label: 'Fabrications & Accessories Catalogue (PDF)', href: '/pdfs/UPVC%20FABRICATION%20AND%20ACCESSORIES.pdf' },
  ],
  dosDonts: {
    dos: ["Ensure size and capacity are judged according to the amount of waste water processed per minute","Verify site conditions before manufacturing custom-build units","Use specified brass wing nuts and neoprene gaskets for a sealed GRP cover","Consult approved Dubai Municipality drawings for grease trap installations"],
    donts: ["Do not use generic sizes without considering specific site processing requirements","Do not compromise on seal integrity when installing interceptor covers","Do not install perforated buckets without ensuring proper hole count and row alignment","Do not bypass vent pipe requirements for grease trap and interceptor systems"],
  },
  dosDontsAr: {
    dos: [
      'تأكد أن الحجم والسعة محددان وفق كمية مياه الصرف المعالجة في الدقيقة',
      'تحقق من ظروف الموقع قبل تصنيع الوحدات المخصصة',
      'استخدم صواميل فراشية نحاسية وحشيات نيوبرين محددة لغطاء GRP محكم',
      'استشر رسومات بلدية دبي المعتمدة لتركيبات مصائد الدهون',
    ],
    donts: [
      'لا تستخدم مقاسات عامة دون مراعاة متطلبات المعالجة المحددة للموقع',
      'لا تتنازل عن سلامة الإحكام عند تركيب أغطية المعترضات',
      'لا تركّب الدلاء المثقبة دون التأكد من عدد الثقوب ومحاذاة الصفوف الصحيحة',
      'لا تتجاوز متطلبات أنابيب التهوية لأنظمة مصائد الدهون والمعترضات',
    ],
  },
};


// ═════════════════════════════════════════════════════════════════════════════
// 5) Accessories (Grouped)
// ═════════════════════════════════════════════════════════════════════════════

export const fabricationAccessories: ProductDetailConfig = {
  slug: "fabrication-accessories",
  categorySlug: 'fabrications-accessories',
  title: "Piping Accessories & Fabricated Components — Ducting, Sockets, Bends, Hardware",
  titleAr: "إكسسوارات الأنابيب والمكونات المصنّعة — قنوات، وصلات، انحناءات، عتاد",
  shortDescription: "Custom duct caps, sockets, bellmouths, LR bends, and hardware accessories.",
  shortDescriptionAr: "أغطية قنوات ووصلات وفتحات جرس وانحناءات ومعدات مخصصة.",
  overview: "Crown Plastic Pipes / Fittings manufactures a comprehensive range of piping system accessories and fabricated ducting components including duct end caps, sockets, bellmouths, 90°/45° long-radius bends, and street lighting bends. Hardware accessories include brass wing nuts, neoprene gaskets, and GRP sealed covers. All components are custom-fabricated at our Umm Al Quwain facility for UAE telecom, electrical, and infrastructure projects.",
  overviewAr: "تصنّع كراون للأنابيب والوصلات البلاستيكية مجموعة شاملة من إكسسوارات أنظمة الأنابيب والمكونات المصنّعة بما في ذلك أغطية القنوات النهائية والوصلات وفتحات الجرس والانحناءات طويلة نصف القطر 90°/45° وانحناءات إنارة الشوارع. تشمل الملحقات المعدنية صواميل فراشية نحاسية وحشيات نيوبرين وأغطية GRP محكمة.",
  features: ["Custom build solutions tailored to specific site conditions and waste water flow rates","Dubai Municipality approved designs for grease traps and interceptors","High-quality corrosion-resistant materials including UPVC, GRP, and Neoprene","Removable perforated PVC buckets for high-efficiency solid waste collection","Precision-engineered ducting components including sockets, end caps, and bellmouths","Secure sealing systems utilizing brass wing nuts and 5mm thick neoprene gaskets"],
  featuresAr: [
    'حلول بناء مخصصة مصممة وفق ظروف الموقع المحددة ومعدلات تدفق مياه الصرف',
    'تصاميم معتمدة من بلدية دبي لمصائد الدهون والمعترضات',
    'مواد عالية الجودة مقاومة للتآكل بما في ذلك UPVC و GRP والنيوبرين',
    'دلاء PVC مثقبة قابلة للإزالة لجمع النفايات الصلبة بكفاءة عالية',
    'مكونات قنوات مصنعة بدقة بما في ذلك الوصلات والأغطية وفتحات الجرس',
    'أنظمة إحكام آمنة باستخدام صواميل فراشية نحاسية وحشيات نيوبرين 5 مم',
  ],
  applications: ["Commercial MEP and drainage infrastructure projects in Dubai and Abu Dhabi","Petrol, oil, and water triple interceptor systems for industrial utilities","Telecommunication and electrical ducting infrastructure for UAE municipalities","Pressure-breaking manholes and specialized catch basin assemblies"],
  applicationsAr: [
    'مشاريع البنية التحتية التجارية MEP والصرف في دبي وأبوظبي',
    'أنظمة معترضات ثلاثية للبنزين والزيت والمياه للمرافق الصناعية',
    'البنية التحتية للقنوات الاتصالات والكهربائية لبلديات الإمارات',
    'غرف تفتيش كسر الضغط وتجميعات أحواض الالتقاط المتخصصة',
  ],
  pipesTables: [],
  accessoriesGallery: [
    { name: 'GRP Bucket', imageSrc: 'GRP BUCKET.png' },
    { name: 'Dry Manholes', imageSrc: 'DRY MANHOLES.png' },
    { name: 'UPVC End Cap', imageSrc: 'UPVC END CAP.png' },
    { name: 'UPVC Gully Trap', imageSrc: 'UPVC GULLY TRAP.png' },
    { name: 'UPVC Hopper', imageSrc: 'UPVC HOPPER.png' },
    { name: 'UPVC Pressure Breaking Manhole', imageSrc: 'UPVC PRESSURE BREAKING MANHOLE.png' },
    { name: 'UPVC Double Y', imageSrc: 'UPVC DOUBLE Y.png' },
    { name: 'UPVC Saddle', imageSrc: 'UPVC SADDLE.png' },
    { name: 'UPVC Sand Trap Bucket', imageSrc: 'UPVC SAND TRAP BUCKET.png' },
    { name: 'UPVC Segmented Bend', imageSrc: 'UPVC SEDMENTED BEND.png' },
    { name: 'UPVC Vent Cowl', imageSrc: 'UPVC VENT COWL.png' },
    { name: 'UPVC Catch Basin', imageSrc: 'UPVC CATCH BASIN.png' },
    { name: 'Roof Outlet', imageSrc: 'ROOF OUTLET.png' },
    { name: 'Pressure Header', imageSrc: 'PRESSURE HEADER.png' },
    { name: 'UPVC Puddle Flange', imageSrc: 'UPVC PUDDLE FLANGE.png' },
    { name: 'Weeping Puddle Flange', imageSrc: 'WEEPING PUDDLE FLANGE.png' },
  ],
  fittings: [],
  downloads: [
    { label: 'Fabrications & Accessories Catalogue (PDF)', href: '/pdfs/UPVC%20FABRICATION%20AND%20ACCESSORIES.pdf' },
  ],
  dosDonts: {
    dos: ["Ensure size and capacity are judged according to the amount of waste water processed per minute","Verify site conditions before manufacturing custom-build units","Use specified brass wing nuts and neoprene gaskets for a sealed GRP cover","Consult approved Dubai Municipality drawings for grease trap installations"],
    donts: ["Do not use generic sizes without considering specific site processing requirements","Do not compromise on seal integrity when installing interceptor covers","Do not install perforated buckets without ensuring proper hole count and row alignment","Do not bypass vent pipe requirements for grease trap and interceptor systems"],
  },
  dosDontsAr: {
    dos: [
      'تأكد أن الحجم والسعة محددان وفق كمية مياه الصرف المعالجة في الدقيقة',
      'تحقق من ظروف الموقع قبل تصنيع الوحدات المخصصة',
      'استخدم صواميل فراشية نحاسية وحشيات نيوبرين محددة لغطاء GRP محكم',
      'استشر رسومات بلدية دبي المعتمدة لتركيبات مصائد الدهون',
    ],
    donts: [
      'لا تستخدم مقاسات عامة دون مراعاة متطلبات المعالجة المحددة للموقع',
      'لا تتنازل عن سلامة الإحكام عند تركيب أغطية المعترضات',
      'لا تركّب الدلاء المثقبة دون التأكد من عدد الثقوب ومحاذاة الصفوف الصحيحة',
      'لا تتجاوز متطلبات أنابيب التهوية لأنظمة مصائد الدهون والمعترضات',
    ],
  },
};

