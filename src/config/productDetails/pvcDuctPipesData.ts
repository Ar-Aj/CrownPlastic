/**
 * PVC Duct Pipes - Product Detail Configurations
 * Phase 2.6 — 6 sub-products for underground cable protection
 * SEO: UAE/GCC/Dubai/Etisalat/DU telecom keywords injected.
 */

import { type ProductDetailConfig } from '@/types/productDetail';

// ═══════════════════════════════════════════════════════════════════════════════
// 1) NEMA TC 2
// ═══════════════════════════════════════════════════════════════════════════════

export const pvcDuctPipesNemaTc2: ProductDetailConfig = {
  slug: "pvc-duct-pipes-nema-tc-2",
  categorySlug: 'pvc-duct-pipes',
  title: "PVC Duct Pipes — NEMA TC 2:2003",
  titleAr: "أنابيب مجاري PVC — NEMA TC 2:2003",
    titleFr: `PVC Duct Tuyaux — NEMA TC 2:2003`,
    shortDescription: "EPC 40/80 cable duct pipes to NEMA TC 2:2003 — ½″–8″.",
  shortDescriptionAr: "أنابيب مجاري كابلات EPC 40/80 وفق NEMA TC 2:2003 — ½″–8″.",
    shortDescriptionFr: `Câble EPC 40/80 duct tuyaux vers NEMA TC 2:2003 — ½″–8″.`,
    overview: "Crown Plastic Pipes / Fittings, a leading cable duct pipe manufacturer in the UAE, produces premium PVC-U duct pipes to NEMA TC 2:2003 standards. Available in EPC 40 (normal duty) and EPC 80 (heavy duty) grades from ½″ to 8″, these pipes are engineered for the critical protection of underground electrical and telecommunications cables across the UAE. Manufactured at our ISO 9001:2015 certified Umm Al Quwain facility in standard 5.8 m lengths.",
  overviewAr: "تصنّع كراون للأنابيب والوصلات البلاستيكية، الشركة الرائدة في تصنيع أنابيب حماية الكابلات في الإمارات، أنابيب مجاري PVC-U فاخرة وفق معايير NEMA TC 2:2003. متوفرة بدرجتي EPC 40 (عادية) و EPC 80 (شاقة) من ½″ إلى 8″، مصممة لحماية الكابلات الكهربائية والاتصالات تحت الأرض في دبي وأبوظبي والخليج. مصنعة في منشأتنا المعتمدة ISO 9001:2015 بأم القيوين بأطوال 5.8 م.",
    overviewFr: `Crown Plastic Pipes / Fittings, l'un des principaux fabricants de tuyaux de câble duct dans le UAE, produit des tuyaux PVC-U duct haut de gamme selon les normes NEMA TC 2:2003. Disponibles en qualités EPC 40 (duty normal) et EPC 80 (duty lourd) de ½″ à 8″, ​​ces tuyaux sont conçus pour la protection critique des câbles électriques et de télécommunications souterrains à travers le UAE. Mfabriqués dans notre usine certifiée ISO 9001:2015 d'Umm Al Quwain dans des longueurs standard 5.8 m.`,
    features: ["Compliance with NEMA TC 2, TC 6 & 8, and ASTM F 512 standards","Standard sizes available in both Metric (DIN 8062) and Imperial (BS 3505/06) dimensions","Specific formulations for normal duty (EPC 40) and heavy-duty (EPC 80) applications","Specialized designs for Encased Burial (EB) and Direct Burial (DB) requirements","Available in standard lengths of 5.8 meters or customized to project requirements","Manufactured in standard colors including Black and Dark Grey"],
  featuresAr: [
    'مطابقة لمعايير NEMA TC 2 و TC 6 و 8 و ASTM F 512 — مصنع رائد في الإمارات',
    'مقاسات قياسية متوفرة بالمتري (DIN 8062) والإنشي (BS 3505/06)',
    'تركيبات محددة للخدمة العادية (EPC 40) والشاقة (EPC 80)',
    'تصاميم متخصصة للدفن المغلف (EB) والدفن المباشر (DB)',
    'متوفرة بأطوال قياسية 5.8 متر أو مخصصة حسب متطلبات المشروع',
    'مصنعة بألوان قياسية تشمل الأسود والرمادي الداكن',
  ],
    featuresFr: [
            `Conformité avec NEMA TC 2, TC 6 & 8 et ASTM F 512 standards`,
            `Tailles standard disponibles en dimensions métriques (DIN 8062) et impériales (BS 3505/06)`,
            `Formulations spécifiques pour les applications normales à duty (EPC 40) et lourdes à duty (EPC 80)`,
            `Conceptions spécialisées pour les exigences d’enfouissement enfermé (EB) et d’enfouissement direct (DB)`,
            `Disponible en longueurs standard de 5.8 meters ou personnalisé selon les exigences du projet`,
            `Fabriqué dans des couleurs standard, notamment le noir et le gris foncé`
          ],
    applications: ["Underground telecommunications infrastructure following Etisalat & DU specifications","Electrical wire and cable protection for underground installations","Concrete-encased and direct burial electrical tubing and conduits","Street lighting and utility network ducting for major urban developments"],
  applicationsAr: [
    'البنية التحتية للاتصالات تحت الأرض وفق مواصفات اتصالات ودو',
    'حماية الأسلاك والكابلات الكهربائية للتركيبات تحت الأرض',
    'أنابيب ومجاري كهربائية مغلفة بالخرسانة ومدفونة مباشرة',
    'إنارة الشوارع ومجاري شبكات المرافق للتطويرات العمرانية الكبرى',
  ],
    applicationsFr: [
            `Infrastructure de télécommunications souterraine suivant les spécifications Etisalat & DU`,
            `Protection des fils et câbles électriques pour installations souterraines`,
            `Tubes et conduits électriques enrobés de béton et enterrés directement`,
            `Éclairage public et réseau électrique du adapté aux grands développements urbains`
          ],
    pipesTables: [
    {
      id: "pvc-duct-pipes-nema-tc-2-2003-electrical-pvc-u-tubing-conduits-table",
      title: "NEMA TC 2: 2003 ELECTRICAL PVC-U TUBING & CONDUITS", titleFr: 'NEMA TC 2: 2003 ELECTRICAL PVC-U TUBES & CONDUITS',
      columns: [
        { key: "size_inch", label: "Nominal Size (Inch)", labelFr: 'Taille Nominale (Inch)' },
        { key: "mean-outside-dia-mm-min", label: "Min", labelFr: 'Min', superGroupLabel: "Mean Outside Dia. (mm)", superGroupLabelFr: 'Diam. Ext. Moyen (mm)', superColSpan: 2 },
        { key: "mean-outside-dia-mm-max", label: "Max", labelFr: 'Max', superGroupLabel: "Mean Outside Dia. (mm)", superGroupLabelFr: 'Diam. Ext. Moyen (mm)' },
        { key: "minimum-wall-thickness-mm-epc-40-min", label: "Min", labelFr: 'Min', groupLabel: "EPC 40", groupLabelFr: 'EPC 40', colSpan: 2, superGroupLabel: "Minimum Wall Thickness (mm)", superGroupLabelFr: 'Épaisseur de Paroi Minimale (mm)', superColSpan: 4 },
        { key: "minimum-wall-thickness-mm-epc-40-max", label: "Max", labelFr: 'Max', groupLabel: "EPC 40", groupLabelFr: 'EPC 40', superGroupLabel: "Minimum Wall Thickness (mm)", superGroupLabelFr: 'Épaisseur de Paroi Minimale (mm)' },
        { key: "minimum-wall-thickness-mm-epc-80-min", label: "Min", labelFr: 'Min', groupLabel: "EPC 80", groupLabelFr: 'EPC 80', colSpan: 2, superGroupLabel: "Minimum Wall Thickness (mm)", superGroupLabelFr: 'Épaisseur de Paroi Minimale (mm)' },
        { key: "minimum-wall-thickness-mm-epc-80-max", label: "Max", labelFr: 'Max', groupLabel: "EPC 80", groupLabelFr: 'EPC 80', superGroupLabel: "Minimum Wall Thickness (mm)", superGroupLabelFr: 'Épaisseur de Paroi Minimale (mm)' }
      ],
      rows: [
        { "size_inch": "1/2\"", "mean-outside-dia-mm-min": "21.2", "mean-outside-dia-mm-max": "21.5", "minimum-wall-thickness-mm-epc-40-min": "2.77", "minimum-wall-thickness-mm-epc-40-max": "3.25", "minimum-wall-thickness-mm-epc-80-min": "3.73", "minimum-wall-thickness-mm-epc-80-max": "4.15" },
        { "size_inch": "3/4\"", "mean-outside-dia-mm-min": "26.6", "mean-outside-dia-mm-max": "26.9", "minimum-wall-thickness-mm-epc-40-min": "2.87", "minimum-wall-thickness-mm-epc-40-max": "3.25", "minimum-wall-thickness-mm-epc-80-min": "3.91", "minimum-wall-thickness-mm-epc-80-max": "4.42" },
        { "size_inch": "1\"", "mean-outside-dia-mm-min": "33.4", "mean-outside-dia-mm-max": "33.7", "minimum-wall-thickness-mm-epc-40-min": "3.38", "minimum-wall-thickness-mm-epc-40-max": "3.62", "minimum-wall-thickness-mm-epc-80-min": "4.55", "minimum-wall-thickness-mm-epc-80-max": "4.82" },
        { "size_inch": "1 1/4\"", "mean-outside-dia-mm-min": "42.1", "mean-outside-dia-mm-max": "42.4", "minimum-wall-thickness-mm-epc-40-min": "3.56", "minimum-wall-thickness-mm-epc-40-max": "3.80", "minimum-wall-thickness-mm-epc-80-min": "4.85", "minimum-wall-thickness-mm-epc-80-max": "5.10" },
        { "size_inch": "1 1/2\"", "mean-outside-dia-mm-min": "48.1", "mean-outside-dia-mm-max": "48.4", "minimum-wall-thickness-mm-epc-40-min": "3.68", "minimum-wall-thickness-mm-epc-40-max": "4.05", "minimum-wall-thickness-mm-epc-80-min": "5.08", "minimum-wall-thickness-mm-epc-80-max": "5.35" },
        { "size_inch": "2\"", "mean-outside-dia-mm-min": "60.2", "mean-outside-dia-mm-max": "60.5", "minimum-wall-thickness-mm-epc-40-min": "3.91", "minimum-wall-thickness-mm-epc-40-max": "4.25", "minimum-wall-thickness-mm-epc-80-min": "5.54", "minimum-wall-thickness-mm-epc-80-max": "6.02" },
        { "size_inch": "3\"", "mean-outside-dia-mm-min": "88.7", "mean-outside-dia-mm-max": "89.1", "minimum-wall-thickness-mm-epc-40-min": "5.49", "minimum-wall-thickness-mm-epc-40-max": "6.01", "minimum-wall-thickness-mm-epc-80-min": "7.62", "minimum-wall-thickness-mm-epc-80-max": "7.95" },
        { "size_inch": "4\"", "mean-outside-dia-mm-min": "114.1", "mean-outside-dia-mm-max": "114.5", "minimum-wall-thickness-mm-epc-40-min": "6.02", "minimum-wall-thickness-mm-epc-40-max": "7.05", "minimum-wall-thickness-mm-epc-80-min": "8.56", "minimum-wall-thickness-mm-epc-80-max": "9.25" },
        { "size_inch": "6\"", "mean-outside-dia-mm-min": "168.2", "mean-outside-dia-mm-max": "168.5", "minimum-wall-thickness-mm-epc-40-min": "7.11", "minimum-wall-thickness-mm-epc-40-max": "8.10", "minimum-wall-thickness-mm-epc-80-min": "10.97", "minimum-wall-thickness-mm-epc-80-max": "11.23" },
        { "size_inch": "8\"", "mean-outside-dia-mm-min": "218.8", "mean-outside-dia-mm-max": "219.4", "minimum-wall-thickness-mm-epc-40-min": "8.18", "minimum-wall-thickness-mm-epc-40-max": "9.56", "minimum-wall-thickness-mm-epc-80-min": "12.70", "minimum-wall-thickness-mm-epc-80-max": "13.15" }
      ],
    }
  ],
  fittings: [],
  downloads: [
    { label: 'PVC Duct Pipes Catalogue (PDF)', labelAr: 'كتالوج أنابيب مجاري PVC (PDF)', labelFr: 'Catalogue Tuyaux de Gaine PVC (PDF)', href: '/pdfs/UPVC%20DUCT%20PIPES%20AND%20ACCESSORIES.pdf' },
  ],
  dosDonts: {
    dos: ["Use EPC 40 for normal duty above ground or concrete-encased applications","Select EPC 80 for heavy-duty applications requiring higher wall thickness","Ensure EB type ducts are encased in concrete during installation","Utilize DB type ducts for direct burial without the need for concrete encasement"],
    donts: ["Do not use EB series ducts for direct burial applications without concrete encasement","Avoid using Class-O (non-pressure) pipes for applications requiring specified working pressures","Do not exceed the specified working pressure ratings for PN series pipes at 20°C","Avoid mismatched accessories; use standard duct sockets, end caps, and bellmouths for secure connections"],
  },
  dosDontsAr: {
    dos: [
      'استخدم EPC 40 للتطبيقات العادية فوق الأرض أو المغلفة بالخرسانة',
      'اختر EPC 80 للتطبيقات الشاقة التي تتطلب سمك جدار أعلى',
      'تأكد أن أنابيب نوع EB مغلفة بالخرسانة أثناء التركيب',
      'استخدم أنابيب نوع DB للدفن المباشر بدون الحاجة لتغليف بالخرسانة',
    ],
    donts: [
      'لا تستخدم أنابيب سلسلة EB للدفن المباشر بدون تغليف بالخرسانة',
      'تجنب استخدام أنابيب Class-O (غير ضغط) للتطبيقات التي تتطلب ضغط تشغيل محدد',
      'لا تتجاوز تصنيفات ضغط التشغيل المحددة لأنابيب سلسلة PN عند 20°C',
      'تجنب الملحقات غير المتطابقة؛ استخدم مقابس ومجاري وأغطية قياسية',
    ],
  },
    dosDontsFr: {
          dos: [
            `Utilisez EPC 40 pour les applications normales au-dessus du sol ou enrobées de béton.`,
            `Sélectionnez EPC 80 pour les applications lourdes nécessitant une épaisseur de paroi plus élevée`,
            `Assurez-vous que les ducts de type EB sont encastrés dans une installation en béton during.`,
            `Utiliser le type DB ducts pour un enterrement direct sans avoir besoin d'un enrobage en béton`
          ],
          donts: [
            `Ne pas utiliser la série EB ducts pour des applications enfouies directement sans enrobage de béton.`,
            `Évitez d'utiliser des tuyaux de classe O (sans pression) pour les applications nécessitant des pressions de service spécifiées.`,
            `Ne dépassez pas les pressions nominales de service spécifiées pour les tuyaux de la série PN à 20°C`,
            `Évitez les accessoires dépareillés ; utilisez des douilles, des embouts et des embouchures standard duct pour des connexions sécurisées`
          ]
        }
};


// ═══════════════════════════════════════════════════════════════════════════════
// 2) NEMA TC 6 & 8 / ASTM F 512
// ═══════════════════════════════════════════════════════════════════════════════

export const pvcDuctPipesNemaTc68: ProductDetailConfig = {
  slug: "pvc-duct-pipes-nema-tc-6-8",
  categorySlug: 'pvc-duct-pipes',
  title: "PVC Duct Pipes — NEMA TC 6 & 8 / ASTM F 512",
  titleAr: "أنابيب مجاري PVC — NEMA TC 6 و 8 / ASTM F 512",
    titleFr: `PVC Duct Tuyaux — NEMA TC 6 & 8 / ASTM F 512`,
    shortDescription: "EB/DB duct pipes to NEMA TC 6 & 8 / ASTM F 512 — 1″–6″.",
  shortDescriptionAr: "أنابيب مجاري EB/DB وفق NEMA TC 6 و 8 / ASTM F 512 — 1″–6″.",
    shortDescriptionFr: `EB/DB duct conduits vers NEMA TC 6 & 8 / ASTM F 512 — 1″–6″.`,
    overview: "Crown Plastic Pipes / Fittings manufactures PVC-U duct pipes to NEMA TC 6 & 8 / ASTM F 512 standards, designed for both Encased Burial (EB) and Direct Burial (DB) applications across the UAE and GCC. Available in ratings from EB-20 to DB-120, these pipes provide reliable protection for underground cables in the UAE. Produced at our Umm Al Quwain facility with ISO 9001:2015 certification.",
  overviewAr: "تصنّع كراون للأنابيب والوصلات البلاستيكية أنابيب مجاري PVC-U وفق معايير NEMA TC 6 و 8 / ASTM F 512، مصممة للدفن المغلف (EB) والدفن المباشر (DB) في الإمارات والخليج. متوفرة بتصنيفات من EB-20 إلى DB-120، توفر حماية موثوقة للكابلات تحت الأرض في دبي وأبوظبي ومشاريع البنية التحتية الكبرى.",
    overviewFr: `Crown Plastic Pipes / Fittings fabrique des tuyaux PVC-U duct selon NEMA TC 6 et 8 / ASTM F 512 standards, conçus pour les applications d'enfouissement enfermé (EB) et d'enfouissement direct (DB) à travers les UAE et GCC. Disponibles dans les calibres EB-20 à DB-120, ces tuyaux offrent une protection fiable aux câbles souterrains dans le UAE. Produced dans notre usine d'Umm Al Quwain avec la certification ISO 9001:2015.`,
    features: ["Compliance with NEMA TC 2, TC 6 & 8, and ASTM F 512 standards","Standard sizes available in both Metric (DIN 8062) and Imperial (BS 3505/06) dimensions","Specific formulations for normal duty (EPC 40) and heavy-duty (EPC 80) applications","Specialized designs for Encased Burial (EB) and Direct Burial (DB) requirements","Available in standard lengths of 5.8 meters or customized to project requirements","Manufactured in standard colors including Black and Dark Grey"],
  featuresAr: [
    'مطابقة لمعايير NEMA TC 2 و TC 6 و 8 و ASTM F 512 — مصنع رائد في الإمارات',
    'مقاسات قياسية متوفرة بالمتري (DIN 8062) والإنشي (BS 3505/06)',
    'تركيبات محددة للخدمة العادية (EPC 40) والشاقة (EPC 80)',
    'تصاميم متخصصة للدفن المغلف (EB) والدفن المباشر (DB)',
    'متوفرة بأطوال قياسية 5.8 متر أو مخصصة حسب متطلبات المشروع',
    'مصنعة بألوان قياسية تشمل الأسود والرمادي الداكن',
  ],
    featuresFr: [
            `Conformité avec NEMA TC 2, TC 6 & 8 et ASTM F 512 standards`,
            `Tailles standard disponibles en dimensions métriques (DIN 8062) et impériales (BS 3505/06)`,
            `Formulations spécifiques pour les applications normales à duty (EPC 40) et lourdes à duty (EPC 80)`,
            `Conceptions spécialisées pour les exigences d’enfouissement enfermé (EB) et d’enfouissement direct (DB)`,
            `Disponible en longueurs standard de 5.8 meters ou personnalisé selon les exigences du projet`,
            `Fabriqué dans des couleurs standard, notamment le noir et le gris foncé`
          ],
    applications: ["Underground telecommunications infrastructure following Etisalat & DU specifications","Electrical wire and cable protection for underground installations","Concrete-encased and direct burial electrical tubing and conduits","Street lighting and utility network ducting for major urban developments"],
  applicationsAr: [
    'البنية التحتية للاتصالات تحت الأرض وفق مواصفات اتصالات ودو',
    'حماية الأسلاك والكابلات الكهربائية للتركيبات تحت الأرض',
    'أنابيب ومجاري كهربائية مغلفة بالخرسانة ومدفونة مباشرة',
    'إنارة الشوارع ومجاري شبكات المرافق للتطويرات العمرانية الكبرى',
  ],
    applicationsFr: [
            `Infrastructure de télécommunications souterraine suivant les spécifications Etisalat & DU`,
            `Protection des fils et câbles électriques pour installations souterraines`,
            `Tubes et conduits électriques enrobés de béton et enterrés directement`,
            `Éclairage public et réseau électrique du adapté aux grands développements urbains`
          ],
    pipesTables: [
    {
      id: "pvc-duct-pipes-nema-tc-6-8-table",
      title: "NEMA TC 6 & 8/ASTM F 512 PVC-U DUCT PIPE FOR UNDER GROUND INSTALLATIONS", titleFr: 'NEMA TC 6 & 8/ASTM F 512 PVC-U TUYAUX DE GAINE POUR SOUTERRAIN INSTALLATIONS',
      columns: [
        { key: "size_inch", label: "Nominal Size (Inch)", labelFr: 'Taille Nominale (Inch)' },
        { key: "mean-outside-dia-mm-min", label: "Min", labelFr: 'Min', groupLabel: "Mean Outside Dia. (mm)", groupLabelFr: 'Diam. Ext. Moyen (mm)', colSpan: 2 },
        { key: "mean-outside-dia-mm-max", label: "Max", labelFr: 'Max', groupLabel: "Mean Outside Dia. (mm)", groupLabelFr: 'Diam. Ext. Moyen (mm)' },
        { key: "minimum-wall-thickness-mm-eb-20", label: "EB-20", labelFr: 'EB-20', groupLabel: "Minimum Wall Thickness (mm)", groupLabelFr: 'Épaisseur de Paroi Minimale (mm)', colSpan: 5 },
        { key: "minimum-wall-thickness-mm-eb-35", label: "EB-35", labelFr: 'EB-35', groupLabel: "Minimum Wall Thickness (mm)", groupLabelFr: 'Épaisseur de Paroi Minimale (mm)' },
        { key: "minimum-wall-thickness-mm-db-60", label: "DB-60", labelFr: 'DB-60', groupLabel: "Minimum Wall Thickness (mm)", groupLabelFr: 'Épaisseur de Paroi Minimale (mm)' },
        { key: "minimum-wall-thickness-mm-db-100", label: "DB -100", labelFr: 'DB -100', groupLabel: "Minimum Wall Thickness (mm)", groupLabelFr: 'Épaisseur de Paroi Minimale (mm)' },
        { key: "minimum-wall-thickness-mm-db-120", label: "DB -120", labelFr: 'DB -120', groupLabel: "Minimum Wall Thickness (mm)", groupLabelFr: 'Épaisseur de Paroi Minimale (mm)' }
      ],
      rows: [
        { "size_inch": "1\"", "mean-outside-dia-mm-min": "33.4", "mean-outside-dia-mm-max": "33.7", "minimum-wall-thickness-mm-eb-20": "", "minimum-wall-thickness-mm-eb-35": "", "minimum-wall-thickness-mm-db-60": "", "minimum-wall-thickness-mm-db-100": "", "minimum-wall-thickness-mm-db-120": "1.52" },
        { "size_inch": "1 1/2\"", "mean-outside-dia-mm-min": "48.1", "mean-outside-dia-mm-max": "48.4", "minimum-wall-thickness-mm-eb-20": "", "minimum-wall-thickness-mm-eb-35": "", "minimum-wall-thickness-mm-db-60": "1.52", "minimum-wall-thickness-mm-db-100": "", "minimum-wall-thickness-mm-db-120": "1.65" },
        { "size_inch": "2\"", "mean-outside-dia-mm-min": "60.2", "mean-outside-dia-mm-max": "60.5", "minimum-wall-thickness-mm-eb-20": "", "minimum-wall-thickness-mm-eb-35": "1.52", "minimum-wall-thickness-mm-db-60": "1.65", "minimum-wall-thickness-mm-db-100": "", "minimum-wall-thickness-mm-db-120": "2.11" },
        { "size_inch": "3\"", "mean-outside-dia-mm-min": "88.7", "mean-outside-dia-mm-max": "89.1", "minimum-wall-thickness-mm-eb-20": "1.70", "minimum-wall-thickness-mm-eb-35": "2.08", "minimum-wall-thickness-mm-db-60": "2.54", "minimum-wall-thickness-mm-db-100": "3.07", "minimum-wall-thickness-mm-db-120": "3.23" },
        { "size_inch": "4\"", "mean-outside-dia-mm-min": "114.1", "mean-outside-dia-mm-max": "114.5", "minimum-wall-thickness-mm-eb-20": "2.26", "minimum-wall-thickness-mm-eb-35": "2.77", "minimum-wall-thickness-mm-db-60": "3.33", "minimum-wall-thickness-mm-db-100": "3.94", "minimum-wall-thickness-mm-db-120": "4.22" },
        { "size_inch": "6\"", "mean-outside-dia-mm-min": "168.2", "mean-outside-dia-mm-max": "168.5", "minimum-wall-thickness-mm-eb-20": "3.43", "minimum-wall-thickness-mm-eb-35": "4.17", "minimum-wall-thickness-mm-db-60": "4.98", "minimum-wall-thickness-mm-db-100": "5.82", "minimum-wall-thickness-mm-db-120": "6.20" }
      ],
    }
  ],
  fittings: [],
  downloads: [
    { label: 'PVC Duct Pipes Catalogue (PDF)', labelAr: 'كتالوج أنابيب مجاري PVC (PDF)', labelFr: 'Catalogue Tuyaux de Gaine PVC (PDF)', href: '/pdfs/UPVC%20DUCT%20PIPES%20AND%20ACCESSORIES.pdf' },
  ],
  dosDonts: {
    dos: ["Use EPC 40 for normal duty above ground or concrete-encased applications","Select EPC 80 for heavy-duty applications requiring higher wall thickness","Ensure EB type ducts are encased in concrete during installation","Utilize DB type ducts for direct burial without the need for concrete encasement"],
    donts: ["Do not use EB series ducts for direct burial applications without concrete encasement","Avoid using Class-O (non-pressure) pipes for applications requiring specified working pressures","Do not exceed the specified working pressure ratings for PN series pipes at 20°C","Avoid mismatched accessories; use standard duct sockets, end caps, and bellmouths for secure connections"],
  },
  dosDontsAr: {
    dos: [
      'استخدم EPC 40 للتطبيقات العادية فوق الأرض أو المغلفة بالخرسانة',
      'اختر EPC 80 للتطبيقات الشاقة التي تتطلب سمك جدار أعلى',
      'تأكد أن أنابيب نوع EB مغلفة بالخرسانة أثناء التركيب',
      'استخدم أنابيب نوع DB للدفن المباشر بدون الحاجة لتغليف بالخرسانة',
    ],
    donts: [
      'لا تستخدم أنابيب سلسلة EB للدفن المباشر بدون تغليف بالخرسانة',
      'تجنب استخدام أنابيب Class-O (غير ضغط) للتطبيقات التي تتطلب ضغط تشغيل محدد',
      'لا تتجاوز تصنيفات ضغط التشغيل المحددة لأنابيب سلسلة PN عند 20°C',
      'تجنب الملحقات غير المتطابقة؛ استخدم مقابس ومجاري وأغطية قياسية',
    ],
  },
    dosDontsFr: {
          dos: [
            `Utilisez EPC 40 pour les applications normales au-dessus du sol ou enrobées de béton.`,
            `Sélectionnez EPC 80 pour les applications lourdes nécessitant une épaisseur de paroi plus élevée`,
            `Assurez-vous que les ducts de type EB sont encastrés dans une installation en béton during.`,
            `Utiliser le type DB ducts pour un enterrement direct sans avoir besoin d'un enrobage en béton`
          ],
          donts: [
            `Ne pas utiliser la série EB ducts pour des applications enfouies directement sans enrobage de béton.`,
            `Évitez d'utiliser des tuyaux de classe O (sans pression) pour les applications nécessitant des pressions de service spécifiées.`,
            `Ne dépassez pas les pressions nominales de service spécifiées pour les tuyaux de la série PN à 20°C`,
            `Évitez les accessoires dépareillés ; utilisez des douilles, des embouts et des embouchures standard duct pour des connexions sécurisées`
          ]
        }
};


// ═══════════════════════════════════════════════════════════════════════════════
// 3) DIN 8062
// ═══════════════════════════════════════════════════════════════════════════════

export const pvcDuctPipesDin8062: ProductDetailConfig = {
  slug: "pvc-duct-pipes-din-8062",
  categorySlug: 'pvc-duct-pipes',
  title: "PVC Duct Pipes — DIN 8062",
  titleAr: "أنابيب مجاري PVC — DIN 8062",
    titleFr: `PVC Duct Tuyaux — DIN 8062`,
    shortDescription: "Metric duct pipes to DIN 8062 — PN 4 to PN 16, 20–315 mm.",
  shortDescriptionAr: "أنابيب مجاري مترية وفق DIN 8062 — PN 4 إلى PN 16، 20–315 مم.",
    shortDescriptionFr: `Tuyaux métriques duct vers DIN 8062 — PN 4 vers PN 16, 20–315 mm.`,
    overview: "Crown Plastic Pipes / Fittings, a trusted metric duct pipe supplier in the UAE, produces PVC-U duct pipes to DIN 8062 standards. Available in pressure classes from PN 4 to PN 16 with sizes from 20 mm to 315 mm, these pipes serve the demanding cable protection requirements of industrial, commercial, and municipal projects across the UAE. Manufactured at our ISO 9001:2015 certified Umm Al Quwain facility.",
  overviewAr: "تصنّع كراون للأنابيب والوصلات البلاستيكية، المورد الموثوق لأنابيب المجاري المترية في الإمارات، أنابيب مجاري PVC-U وفق معايير DIN 8062. متوفرة بفئات ضغط من PN 4 إلى PN 16 بمقاسات من 20 مم إلى 315 مم. مصنعة في منشأتنا المعتمدة ISO 9001:2015 بأم القيوين.",
    overviewFr: `Crown Plastic Pipes / Fittings, un fournisseur de tuyaux métriques duct de confiance dans le UAE, fabrique des tuyaux PVC-U duct selon les normes DIN 8062. Disponibles dans les classes de pression de PN 4 à PN 16 avec des tailles de 20 mm à 315 mm, ces tuyaux répondent aux exigences exigeantes de protection des câbles des projets industriels, commerciaux et municipaux du à travers le UAE. Mfabriqués dans notre usine certifiée ISO 9001:2015 d'Umm Al Quwain.`,
    features: ["Compliance with NEMA TC 2, TC 6 & 8, and ASTM F 512 standards","Standard sizes available in both Metric (DIN 8062) and Imperial (BS 3505/06) dimensions","Specific formulations for normal duty (EPC 40) and heavy-duty (EPC 80) applications","Specialized designs for Encased Burial (EB) and Direct Burial (DB) requirements","Available in standard lengths of 5.8 meters or customized to project requirements","Manufactured in standard colors including Black and Dark Grey"],
  featuresAr: [
    'مطابقة لمعايير NEMA TC 2 و TC 6 و 8 و ASTM F 512 — مصنع رائد في الإمارات',
    'مقاسات قياسية متوفرة بالمتري (DIN 8062) والإنشي (BS 3505/06)',
    'تركيبات محددة للخدمة العادية (EPC 40) والشاقة (EPC 80)',
    'تصاميم متخصصة للدفن المغلف (EB) والدفن المباشر (DB)',
    'متوفرة بأطوال قياسية 5.8 متر أو مخصصة حسب متطلبات المشروع',
    'مصنعة بألوان قياسية تشمل الأسود والرمادي الداكن',
  ],
    featuresFr: [
            `Conformité avec NEMA TC 2, TC 6 & 8 et ASTM F 512 standards`,
            `Tailles standard disponibles en dimensions métriques (DIN 8062) et impériales (BS 3505/06)`,
            `Formulations spécifiques pour les applications normales à duty (EPC 40) et lourdes à duty (EPC 80)`,
            `Conceptions spécialisées pour les exigences d’enfouissement enfermé (EB) et d’enfouissement direct (DB)`,
            `Disponible en longueurs standard de 5.8 meters ou personnalisé selon les exigences du projet`,
            `Fabriqué dans des couleurs standard, notamment le noir et le gris foncé`
          ],
    applications: ["Underground telecommunications infrastructure following Etisalat & DU specifications","Electrical wire and cable protection for underground installations","Concrete-encased and direct burial electrical tubing and conduits","Street lighting and utility network ducting for major urban developments"],
  applicationsAr: [
    'البنية التحتية للاتصالات تحت الأرض وفق مواصفات اتصالات ودو',
    'حماية الأسلاك والكابلات الكهربائية للتركيبات تحت الأرض',
    'أنابيب ومجاري كهربائية مغلفة بالخرسانة ومدفونة مباشرة',
    'إنارة الشوارع ومجاري شبكات المرافق للتطويرات العمرانية الكبرى',
  ],
    applicationsFr: [
            `Infrastructure de télécommunications souterraine suivant les spécifications Etisalat & DU`,
            `Protection des fils et câbles électriques pour installations souterraines`,
            `Tubes et conduits électriques enrobés de béton et enterrés directement`,
            `Éclairage public et réseau électrique du adapté aux grands développements urbains`
          ],
    pipesTables: [
    {
      id: "pvc-duct-pipes-din-8062-metric-size-pressure-pipes-table",
      title: "DIN 8062 Metric size Pressure Pipes", titleFr: 'DIN 8062 Metric taille TUYAUX SOUS PRESSION',
      columns: [
        { key: "sizeMm", label: "Nominal Size mm", labelFr: 'Taille Nominale mm' },
        { key: "mean-outside-dia-min", label: "Min", labelFr: 'Min', superGroupLabel: "Mean Outside Dia.", superGroupLabelFr: 'Diam. Ext. Moyen', superColSpan: 2 },
        { key: "mean-outside-dia-max", label: "Max", labelFr: 'Max', superGroupLabel: "Mean Outside Dia.", superGroupLabelFr: 'Diam. Ext. Moyen' },
        { key: "mean-wall-thickness-pn-16-class-16-min", label: "Min", labelFr: 'Min', groupLabel: "PN-16 (CLASS-16)", groupLabelFr: 'PN-16 (CLASSE-16)', colSpan: 2, superGroupLabel: "Mean Wall Thickness", superGroupLabelFr: 'Epaisseur Moy. de Paroi', superColSpan: 8 },
        { key: "mean-wall-thickness-pn-16-class-16-max", label: "Max", labelFr: 'Max', groupLabel: "PN-16 (CLASS-16)", groupLabelFr: 'PN-16 (CLASSE-16)', superGroupLabel: "Mean Wall Thickness", superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
        { key: "mean-wall-thickness-pn-10-class-10-min", label: "Min", labelFr: 'Min', groupLabel: "PN-10 (CLASS-10)", groupLabelFr: 'PN-10 (CLASSE-10)', colSpan: 2, superGroupLabel: "Mean Wall Thickness", superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
        { key: "mean-wall-thickness-pn-10-class-10-max", label: "Max", labelFr: 'Max', groupLabel: "PN-10 (CLASS-10)", groupLabelFr: 'PN-10 (CLASSE-10)', superGroupLabel: "Mean Wall Thickness", superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
        { key: "mean-wall-thickness-pn-6-class-6-min", label: "Min", labelFr: 'Min', groupLabel: "PN-6 (CLASS-6)", groupLabelFr: 'PN-6 (CLASSE-6)', colSpan: 2, superGroupLabel: "Mean Wall Thickness", superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
        { key: "mean-wall-thickness-pn-6-class-6-max", label: "Max", labelFr: 'Max', groupLabel: "PN-6 (CLASS-6)", groupLabelFr: 'PN-6 (CLASSE-6)', superGroupLabel: "Mean Wall Thickness", superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
        { key: "mean-wall-thickness-pn-4-class-4-min", label: "Min", labelFr: 'Min', groupLabel: "PN-4 (CLASS-4)", groupLabelFr: 'PN-4 (CLASSE-4)', colSpan: 2, superGroupLabel: "Mean Wall Thickness", superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
        { key: "mean-wall-thickness-pn-4-class-4-max", label: "Max", labelFr: 'Max', groupLabel: "PN-4 (CLASS-4)", groupLabelFr: 'PN-4 (CLASSE-4)', superGroupLabel: "Mean Wall Thickness", superGroupLabelFr: 'Epaisseur Moy. de Paroi' }
      ],
      rows: [
        { "sizeMm": "20 mm", "mean-outside-dia-min": "20.0", "mean-outside-dia-max": "20.2", "mean-wall-thickness-pn-16-class-16-min": "1.5", "mean-wall-thickness-pn-16-class-16-max": "1.9", "mean-wall-thickness-pn-10-class-10-min": "", "mean-wall-thickness-pn-10-class-10-max": "", "mean-wall-thickness-pn-6-class-6-min": "", "mean-wall-thickness-pn-6-class-6-max": "", "mean-wall-thickness-pn-4-class-4-min": "", "mean-wall-thickness-pn-4-class-4-max": "" },
        { "sizeMm": "25 mm", "mean-outside-dia-min": "25.0", "mean-outside-dia-max": "25.2", "mean-wall-thickness-pn-16-class-16-min": "1.9", "mean-wall-thickness-pn-16-class-16-max": "2.3", "mean-wall-thickness-pn-10-class-10-min": "1.5", "mean-wall-thickness-pn-10-class-10-max": "1.8", "mean-wall-thickness-pn-6-class-6-min": "", "mean-wall-thickness-pn-6-class-6-max": "", "mean-wall-thickness-pn-4-class-4-min": "", "mean-wall-thickness-pn-4-class-4-max": "" },
        { "sizeMm": "32 mm", "mean-outside-dia-min": "32.0", "mean-outside-dia-max": "32.2", "mean-wall-thickness-pn-16-class-16-min": "2.4", "mean-wall-thickness-pn-16-class-16-max": "2.9", "mean-wall-thickness-pn-10-class-10-min": "1.8", "mean-wall-thickness-pn-10-class-10-max": "1.9", "mean-wall-thickness-pn-6-class-6-min": "", "mean-wall-thickness-pn-6-class-6-max": "", "mean-wall-thickness-pn-4-class-4-min": "", "mean-wall-thickness-pn-4-class-4-max": "" },
        { "sizeMm": "40 mm", "mean-outside-dia-min": "40.0", "mean-outside-dia-max": "40.2", "mean-wall-thickness-pn-16-class-16-min": "3.0", "mean-wall-thickness-pn-16-class-16-max": "3.5", "mean-wall-thickness-pn-10-class-10-min": "1.9", "mean-wall-thickness-pn-10-class-10-max": "2.3", "mean-wall-thickness-pn-6-class-6-min": "1.8", "mean-wall-thickness-pn-6-class-6-max": "", "mean-wall-thickness-pn-4-class-4-min": "", "mean-wall-thickness-pn-4-class-4-max": "" },
        { "sizeMm": "50 mm", "mean-outside-dia-min": "50.0", "mean-outside-dia-max": "50.2", "mean-wall-thickness-pn-16-class-16-min": "3.7", "mean-wall-thickness-pn-16-class-16-max": "4.3", "mean-wall-thickness-pn-10-class-10-min": "2.4", "mean-wall-thickness-pn-10-class-10-max": "2.9", "mean-wall-thickness-pn-6-class-6-min": "1.8", "mean-wall-thickness-pn-6-class-6-max": "", "mean-wall-thickness-pn-4-class-4-min": "", "mean-wall-thickness-pn-4-class-4-max": "" },
        { "sizeMm": "63 mm", "mean-outside-dia-min": "63.0", "mean-outside-dia-max": "63.2", "mean-wall-thickness-pn-16-class-16-min": "4.7", "mean-wall-thickness-pn-16-class-16-max": "5.4", "mean-wall-thickness-pn-10-class-10-min": "3.0", "mean-wall-thickness-pn-10-class-10-max": "3.4", "mean-wall-thickness-pn-6-class-6-min": "1.9", "mean-wall-thickness-pn-6-class-6-max": "", "mean-wall-thickness-pn-4-class-4-min": "", "mean-wall-thickness-pn-4-class-4-max": "" },
        { "sizeMm": "75 mm", "mean-outside-dia-min": "75.0", "mean-outside-dia-max": "75.3", "mean-wall-thickness-pn-16-class-16-min": "5.6", "mean-wall-thickness-pn-16-class-16-max": "6.4", "mean-wall-thickness-pn-10-class-10-min": "3.6", "mean-wall-thickness-pn-10-class-10-max": "4.2", "mean-wall-thickness-pn-6-class-6-min": "2.2", "mean-wall-thickness-pn-6-class-6-max": "", "mean-wall-thickness-pn-4-class-4-min": "1.8", "mean-wall-thickness-pn-4-class-4-max": "2.2" },
        { "sizeMm": "90 mm", "mean-outside-dia-min": "90.0", "mean-outside-dia-max": "90.3", "mean-wall-thickness-pn-16-class-16-min": "6.7", "mean-wall-thickness-pn-16-class-16-max": "7.6", "mean-wall-thickness-pn-10-class-10-min": "4.3", "mean-wall-thickness-pn-10-class-10-max": "5.1", "mean-wall-thickness-pn-6-class-6-min": "2.7", "mean-wall-thickness-pn-6-class-6-max": "", "mean-wall-thickness-pn-4-class-4-min": "1.8", "mean-wall-thickness-pn-4-class-4-max": "2.3" },
        { "sizeMm": "110 mm", "mean-outside-dia-min": "110.0", "mean-outside-dia-max": "110.3", "mean-wall-thickness-pn-16-class-16-min": "8.2", "mean-wall-thickness-pn-16-class-16-max": "9.3", "mean-wall-thickness-pn-10-class-10-min": "5.3", "mean-wall-thickness-pn-10-class-10-max": "5.9", "mean-wall-thickness-pn-6-class-6-min": "3.2", "mean-wall-thickness-pn-6-class-6-max": "", "mean-wall-thickness-pn-4-class-4-min": "2.2", "mean-wall-thickness-pn-4-class-4-max": "2.6" },
        { "sizeMm": "125 mm", "mean-outside-dia-min": "125.0", "mean-outside-dia-max": "125.3", "mean-wall-thickness-pn-16-class-16-min": "9.3", "mean-wall-thickness-pn-16-class-16-max": "10.3", "mean-wall-thickness-pn-10-class-10-min": "6.0", "mean-wall-thickness-pn-10-class-10-max": "6.8", "mean-wall-thickness-pn-6-class-6-min": "3.7", "mean-wall-thickness-pn-6-class-6-max": "", "mean-wall-thickness-pn-4-class-4-min": "2.5", "mean-wall-thickness-pn-4-class-4-max": "2.9" },
        { "sizeMm": "140 mm", "mean-outside-dia-min": "140.0", "mean-outside-dia-max": "140.4", "mean-wall-thickness-pn-16-class-16-min": "10.4", "mean-wall-thickness-pn-16-class-16-max": "11.8", "mean-wall-thickness-pn-10-class-10-min": "6.7", "mean-wall-thickness-pn-10-class-10-max": "7.5", "mean-wall-thickness-pn-6-class-6-min": "4.1", "mean-wall-thickness-pn-6-class-6-max": "", "mean-wall-thickness-pn-4-class-4-min": "2.8", "mean-wall-thickness-pn-4-class-4-max": "3.3" },
        { "sizeMm": "160 mm", "mean-outside-dia-min": "160.0", "mean-outside-dia-max": "160.4", "mean-wall-thickness-pn-16-class-16-min": "11.9", "mean-wall-thickness-pn-16-class-16-max": "11.3", "mean-wall-thickness-pn-10-class-10-min": "7.7", "mean-wall-thickness-pn-10-class-10-max": "8.5", "mean-wall-thickness-pn-6-class-6-min": "4.7", "mean-wall-thickness-pn-6-class-6-max": "", "mean-wall-thickness-pn-4-class-4-min": "3.2", "mean-wall-thickness-pn-4-class-4-max": "3.8" },
        { "sizeMm": "180 mm", "mean-outside-dia-min": "180.0", "mean-outside-dia-max": "180.4", "mean-wall-thickness-pn-16-class-16-min": "13.4", "mean-wall-thickness-pn-16-class-16-max": "15.0", "mean-wall-thickness-pn-10-class-10-min": "8.6", "mean-wall-thickness-pn-10-class-10-max": "9.4", "mean-wall-thickness-pn-6-class-6-min": "5.3", "mean-wall-thickness-pn-6-class-6-max": "", "mean-wall-thickness-pn-4-class-4-min": "3.6", "mean-wall-thickness-pn-4-class-4-max": "4.2" },
        { "sizeMm": "200 mm", "mean-outside-dia-min": "200.0", "mean-outside-dia-max": "200.4", "mean-wall-thickness-pn-16-class-16-min": "14.9", "mean-wall-thickness-pn-16-class-16-max": "16.6", "mean-wall-thickness-pn-10-class-10-min": "9.6", "mean-wall-thickness-pn-10-class-10-max": "10.7", "mean-wall-thickness-pn-6-class-6-min": "5.9", "mean-wall-thickness-pn-6-class-6-max": "", "mean-wall-thickness-pn-4-class-4-min": "4.0", "mean-wall-thickness-pn-4-class-4-max": "4.4" },
        { "sizeMm": "225 mm", "mean-outside-dia-min": "225.0", "mean-outside-dia-max": "225.5", "mean-wall-thickness-pn-16-class-16-min": "16.7", "mean-wall-thickness-pn-16-class-16-max": "18.6", "mean-wall-thickness-pn-10-class-10-min": "10.8", "mean-wall-thickness-pn-10-class-10-max": "11.6", "mean-wall-thickness-pn-6-class-6-min": "6.6", "mean-wall-thickness-pn-6-class-6-max": "", "mean-wall-thickness-pn-4-class-4-min": "4.5", "mean-wall-thickness-pn-4-class-4-max": "4.9" },
        { "sizeMm": "250 mm", "mean-outside-dia-min": "250.0", "mean-outside-dia-max": "250.5", "mean-wall-thickness-pn-16-class-16-min": "18.6", "mean-wall-thickness-pn-16-class-16-max": "20.7", "mean-wall-thickness-pn-10-class-10-min": "11.9", "mean-wall-thickness-pn-10-class-10-max": "13.3", "mean-wall-thickness-pn-6-class-6-min": "7.3", "mean-wall-thickness-pn-6-class-6-max": "", "mean-wall-thickness-pn-4-class-4-min": "4.9", "mean-wall-thickness-pn-4-class-4-max": "5.7" },
        { "sizeMm": "280 mm", "mean-outside-dia-min": "280.0", "mean-outside-dia-max": "280.5", "mean-wall-thickness-pn-16-class-16-min": "20.8", "mean-wall-thickness-pn-16-class-16-max": "23.1", "mean-wall-thickness-pn-10-class-10-min": "13.4", "mean-wall-thickness-pn-10-class-10-max": "14.9", "mean-wall-thickness-pn-6-class-6-min": "8.2", "mean-wall-thickness-pn-6-class-6-max": "", "mean-wall-thickness-pn-4-class-4-min": "5.5", "mean-wall-thickness-pn-4-class-4-max": "6.3" },
        { "sizeMm": "315 mm", "mean-outside-dia-min": "315.0", "mean-outside-dia-max": "315.6", "mean-wall-thickness-pn-16-class-16-min": "23.4", "mean-wall-thickness-pn-16-class-16-max": "26.0", "mean-wall-thickness-pn-10-class-10-min": "15.0", "mean-wall-thickness-pn-10-class-10-max": "16.7", "mean-wall-thickness-pn-6-class-6-min": "9.2", "mean-wall-thickness-pn-6-class-6-max": "10.4", "mean-wall-thickness-pn-4-class-4-min": "6.2", "mean-wall-thickness-pn-4-class-4-max": "7.1" }
      ],
    }
  ],
  fittings: [],
  downloads: [
    { label: 'PVC Duct Pipes Catalogue (PDF)', labelAr: 'كتالوج أنابيب مجاري PVC (PDF)', labelFr: 'Catalogue Tuyaux de Gaine PVC (PDF)', href: '/pdfs/UPVC%20DUCT%20PIPES%20AND%20ACCESSORIES.pdf' },
  ],
  dosDonts: {
    dos: ["Use EPC 40 for normal duty above ground or concrete-encased applications","Select EPC 80 for heavy-duty applications requiring higher wall thickness","Ensure EB type ducts are encased in concrete during installation","Utilize DB type ducts for direct burial without the need for concrete encasement"],
    donts: ["Do not use EB series ducts for direct burial applications without concrete encasement","Avoid using Class-O (non-pressure) pipes for applications requiring specified working pressures","Do not exceed the specified working pressure ratings for PN series pipes at 20°C","Avoid mismatched accessories; use standard duct sockets, end caps, and bellmouths for secure connections"],
  },
  dosDontsAr: {
    dos: [
      'استخدم EPC 40 للتطبيقات العادية فوق الأرض أو المغلفة بالخرسانة',
      'اختر EPC 80 للتطبيقات الشاقة التي تتطلب سمك جدار أعلى',
      'تأكد أن أنابيب نوع EB مغلفة بالخرسانة أثناء التركيب',
      'استخدم أنابيب نوع DB للدفن المباشر بدون الحاجة لتغليف بالخرسانة',
    ],
    donts: [
      'لا تستخدم أنابيب سلسلة EB للدفن المباشر بدون تغليف بالخرسانة',
      'تجنب استخدام أنابيب Class-O (غير ضغط) للتطبيقات التي تتطلب ضغط تشغيل محدد',
      'لا تتجاوز تصنيفات ضغط التشغيل المحددة لأنابيب سلسلة PN عند 20°C',
      'تجنب الملحقات غير المتطابقة؛ استخدم مقابس ومجاري وأغطية قياسية',
    ],
  },
    dosDontsFr: {
          dos: [
            `Utilisez EPC 40 pour les applications normales au-dessus du sol ou enrobées de béton.`,
            `Sélectionnez EPC 80 pour les applications lourdes nécessitant une épaisseur de paroi plus élevée`,
            `Assurez-vous que les ducts de type EB sont encastrés dans une installation en béton during.`,
            `Utiliser le type DB ducts pour un enterrement direct sans avoir besoin d'un enrobage en béton`
          ],
          donts: [
            `Ne pas utiliser la série EB ducts pour des applications enfouies directement sans enrobage de béton.`,
            `Évitez d'utiliser des tuyaux de classe O (sans pression) pour les applications nécessitant des pressions de service spécifiées.`,
            `Ne dépassez pas les pressions nominales de service spécifiées pour les tuyaux de la série PN à 20°C`,
            `Évitez les accessoires dépareillés ; utilisez des douilles, des embouts et des embouchures standard duct pour des connexions sécurisées`
          ]
        }
};


// ═══════════════════════════════════════════════════════════════════════════════
// 4) Etisalat & DU (Telecom Specifications)
// ═══════════════════════════════════════════════════════════════════════════════

export const pvcDuctPipesEtisalatDu: ProductDetailConfig = {
  slug: "pvc-duct-pipes-etisalat-du",
  categorySlug: 'pvc-duct-pipes',
  title: "PVC Duct Pipes for Etisalat & DU",
  titleAr: "أنابيب مجاري PVC لاتصالات ودو",
    titleFr: `PVC Duct Tuyaux pour Etisalat & DU`,
    shortDescription: "Telecom duct pipes approved for Etisalat & DU — D54/D56/D57.",
  shortDescriptionAr: "أنابيب مجاري اتصالات معتمدة من اتصالات ودو — D54/D56/D57.",
    shortDescriptionFr: `Tuyaux Telecom duct approuvés pour Etisalat & DU — D54/D56/D57.`,
    overview: "Crown Plastic Pipes, the leading telecom duct pipe manufacturer in the UAE, produces PVC-U duct pipes specifically designed and approved for Etisalat and DU telecommunications infrastructure. Our D54, D56, and D57 duct pipes meet the stringent specifications required by UAE's premier telecom operators, ensuring reliable underground cable protection across the UAE. Manufactured at our ISO 9001:2015 certified facility.",
  overviewAr: "تصنّع كراون للأنابيب والوصلات البلاستيكية، الشركة الرائدة في تصنيع أنابيب مجاري الاتصالات في الإمارات، أنابيب مجاري PVC-U مصممة ومعتمدة خصيصاً للبنية التحتية لاتصالات ودو. تلبي أنابيب D54 و D56 و D57 المواصفات الصارمة المطلوبة من مشغلي الاتصالات الرائدين في الإمارات، لضمان حماية موثوقة للكابلات تحت الأرض في دبي وأبوظبي والشارقة وكل الإمارات.",
    overviewFr: `Crown Plastic Pipes, le principal fabricant de tuyaux de télécommunications duct dans le UAE, fabrique des tuyaux duces PVC-U duct spécifiquement conçus et approuvés pour les infrastructures de télécommunications Etisalat et DU. Nos tuyaux D54, D56 et D57 duct répondent aux spécifications strictes requises par les principaux opérateurs de télécommunications de UAE, ​​garantissant une protection fiable des câbles souterrains à travers le UAE. Mfabriqués dans notre installation certifiée ISO 9001:2015.`,
    features: ["Compliance with NEMA TC 2, TC 6 & 8, and ASTM F 512 standards","Standard sizes available in both Metric (DIN 8062) and Imperial (BS 3505/06) dimensions","Specific formulations for normal duty (EPC 40) and heavy-duty (EPC 80) applications","Specialized designs for Encased Burial (EB) and Direct Burial (DB) requirements","Available in standard lengths of 5.8 meters or customized to project requirements","Manufactured in standard colors including Black and Dark Grey"],
  featuresAr: [
    'مطابقة لمعايير NEMA TC 2 و TC 6 و 8 و ASTM F 512 — مصنع رائد في الإمارات',
    'مقاسات قياسية متوفرة بالمتري (DIN 8062) والإنشي (BS 3505/06)',
    'تركيبات محددة للخدمة العادية (EPC 40) والشاقة (EPC 80)',
    'تصاميم متخصصة للدفن المغلف (EB) والدفن المباشر (DB)',
    'متوفرة بأطوال قياسية 5.8 متر أو مخصصة حسب متطلبات المشروع',
    'مصنعة بألوان قياسية تشمل الأسود والرمادي الداكن',
  ],
    featuresFr: [
            `Conformité avec NEMA TC 2, TC 6 & 8 et ASTM F 512 standards`,
            `Tailles standard disponibles en dimensions métriques (DIN 8062) et impériales (BS 3505/06)`,
            `Formulations spécifiques pour les applications normales à duty (EPC 40) et lourdes à duty (EPC 80)`,
            `Conceptions spécialisées pour les exigences d’enfouissement enfermé (EB) et d’enfouissement direct (DB)`,
            `Disponible en longueurs standard de 5.8 meters ou personnalisé selon les exigences du projet`,
            `Fabriqué dans des couleurs standard, notamment le noir et le gris foncé`
          ],
    applications: ["Underground telecommunications infrastructure following Etisalat & DU specifications","Electrical wire and cable protection for underground installations","Concrete-encased and direct burial electrical tubing and conduits","Street lighting and utility network ducting for major urban developments"],
  applicationsAr: [
    'البنية التحتية للاتصالات تحت الأرض وفق مواصفات اتصالات ودو',
    'حماية الأسلاك والكابلات الكهربائية للتركيبات تحت الأرض',
    'أنابيب ومجاري كهربائية مغلفة بالخرسانة ومدفونة مباشرة',
    'إنارة الشوارع ومجاري شبكات المرافق للتطويرات العمرانية الكبرى',
  ],
    applicationsFr: [
            `Infrastructure de télécommunications souterraine suivant les spécifications Etisalat & DU`,
            `Protection des fils et câbles électriques pour installations souterraines`,
            `Tubes et conduits électriques enrobés de béton et enterrés directement`,
            `Éclairage public et réseau électrique du adapté aux grands développements urbains`
          ],
    pipesTables: [
    {
      id: "pvc-duct-pipes-etisalat-du-specifications-table",
      title: "Etisalat & DU specifications", titleFr: 'Spécifications Etisalat & DU',
      columns: [
        { key: "product", label: "Product", labelFr: 'Produit' },
        { key: "outside-diameter-min", label: "Min", labelFr: 'Min', groupLabel: "Outside Diameter", groupLabelFr: 'Extérieur Diamètre', colSpan: 2 },
        { key: "outside-diameter-max", label: "Max", labelFr: 'Max', groupLabel: "Outside Diameter", groupLabelFr: 'Extérieur Diamètre' },
        { key: "wall-thickness-min", label: "Min", labelFr: 'Min', groupLabel: "Wall Thickness", groupLabelFr: 'Paroi Épaisseur', colSpan: 2 },
        { key: "wall-thickness-max", label: "Max", labelFr: 'Max', groupLabel: "Wall Thickness", groupLabelFr: 'Paroi Épaisseur' }
      ],
      rows: [
        { "product": "D54 DUCT PIPE", "outside-diameter-min": "96.30", "outside-diameter-max": "96.70", "wall-thickness-min": "3.25", "wall-thickness-max": "3.65" },
        { "product": "D56 DUCT PIPE", "outside-diameter-min": "53.80", "outside-diameter-max": "54.00", "wall-thickness-min": "1.55", "wall-thickness-max": "1.70" },
        { "product": "D57 DUCT PIPE", "outside-diameter-min": "114.30", "outside-diameter-max": "114.50", "wall-thickness-min": "3.40", "wall-thickness-max": "3.65" }
      ],
    }
  ],
  fittings: [],
  downloads: [
    { label: 'PVC Duct Pipes Catalogue (PDF)', labelAr: 'كتالوج أنابيب مجاري PVC (PDF)', labelFr: 'Catalogue Tuyaux de Gaine PVC (PDF)', href: '/pdfs/UPVC%20DUCT%20PIPES%20AND%20ACCESSORIES.pdf' },
  ],
  dosDonts: {
    dos: ["Use EPC 40 for normal duty above ground or concrete-encased applications","Select EPC 80 for heavy-duty applications requiring higher wall thickness","Ensure EB type ducts are encased in concrete during installation","Utilize DB type ducts for direct burial without the need for concrete encasement"],
    donts: ["Do not use EB series ducts for direct burial applications without concrete encasement","Avoid using Class-O (non-pressure) pipes for applications requiring specified working pressures","Do not exceed the specified working pressure ratings for PN series pipes at 20°C","Avoid mismatched accessories; use standard duct sockets, end caps, and bellmouths for secure connections"],
  },
  dosDontsAr: {
    dos: [
      'استخدم EPC 40 للتطبيقات العادية فوق الأرض أو المغلفة بالخرسانة',
      'اختر EPC 80 للتطبيقات الشاقة التي تتطلب سمك جدار أعلى',
      'تأكد أن أنابيب نوع EB مغلفة بالخرسانة أثناء التركيب',
      'استخدم أنابيب نوع DB للدفن المباشر بدون الحاجة لتغليف بالخرسانة',
    ],
    donts: [
      'لا تستخدم أنابيب سلسلة EB للدفن المباشر بدون تغليف بالخرسانة',
      'تجنب استخدام أنابيب Class-O (غير ضغط) للتطبيقات التي تتطلب ضغط تشغيل محدد',
      'لا تتجاوز تصنيفات ضغط التشغيل المحددة لأنابيب سلسلة PN عند 20°C',
      'تجنب الملحقات غير المتطابقة؛ استخدم مقابس ومجاري وأغطية قياسية',
    ],
  },
    dosDontsFr: {
          dos: [
            `Utilisez EPC 40 pour les applications normales au-dessus du sol ou enrobées de béton.`,
            `Sélectionnez EPC 80 pour les applications lourdes nécessitant une épaisseur de paroi plus élevée`,
            `Assurez-vous que les ducts de type EB sont encastrés dans une installation en béton during.`,
            `Utiliser le type DB ducts pour un enterrement direct sans avoir besoin d'un enrobage en béton`
          ],
          donts: [
            `Ne pas utiliser la série EB ducts pour des applications enfouies directement sans enrobage de béton.`,
            `Évitez d'utiliser des tuyaux de classe O (sans pression) pour les applications nécessitant des pressions de service spécifiées.`,
            `Ne dépassez pas les pressions nominales de service spécifiées pour les tuyaux de la série PN à 20°C`,
            `Évitez les accessoires dépareillés ; utilisez des douilles, des embouts et des embouchures standard duct pour des connexions sécurisées`
          ]
        }
};


// ═══════════════════════════════════════════════════════════════════════════════
// 5) BS 3505/06
// ═══════════════════════════════════════════════════════════════════════════════

export const pvcDuctPipesBs350506: ProductDetailConfig = {
  slug: "pvc-duct-pipes-bs-3505-06",
  categorySlug: 'pvc-duct-pipes',
  title: "PVC Duct Pipes — BS 3505/06",
  titleAr: "أنابيب مجاري PVC — BS 3505/06",
    titleFr: `PVC Duct Tuyaux — BS 3505/06`,
    shortDescription: "Imperial duct pipes to BS 3505/06 — PN 6 to PN 15, ½″–12″.",
  shortDescriptionAr: "أنابيب مجاري إنشية وفق BS 3505/06 — PN 6 إلى PN 15، ½″–12″.",
    shortDescriptionFr: `Tuyaux impériaux duct à BS 3505/06 — PN 6 à PN 15, ½″–12″.`,
    overview: "Crown Plastic Pipes / Fittings manufactures PVC-U duct pipes to BS 3505/06 British Standards, offering a comprehensive range from ½″ to 12″ in pressure classes from non-pressure (Class-O) to PN 15 (Class-E). Trusted by contractors across the UAE for underground cable protection in residential, commercial, and infrastructure projects. Produced at our Umm Al Quwain facility with ISO 9001:2015 certification.",
  overviewAr: "تصنّع كراون للأنابيب والوصلات البلاستيكية أنابيب مجاري PVC-U وفق المعايير البريطانية BS 3505/06، بنطاق شامل من ½″ إلى 12″ بفئات ضغط من غير ضغط (Class-O) إلى PN 15 (Class-E). موثوقة من المقاولين في دبي وأبوظبي والخليج لحماية الكابلات تحت الأرض.",
    overviewFr: `Crown Plastic Pipes/Raccords fabrique des tuyaux PVC-U duct selon les normes britanniques BS 3505/06, offrant une gamme complète de ½″ à 12″ dans des classes de pression allant de sans pression (Classe-O) à PN 15 (Classe-E). Approuvé par les entrepreneurs du UAE pour la protection des câbles souterrains dans les projets résidentiels, commerciaux et d'infrastructure. Producé dans notre usine d'Umm Al Quwain avec la certification ISO 9001:2015.`,
    features: ["Compliance with NEMA TC 2, TC 6 & 8, and ASTM F 512 standards","Standard sizes available in both Metric (DIN 8062) and Imperial (BS 3505/06) dimensions","Specific formulations for normal duty (EPC 40) and heavy-duty (EPC 80) applications","Specialized designs for Encased Burial (EB) and Direct Burial (DB) requirements","Available in standard lengths of 5.8 meters or customized to project requirements","Manufactured in standard colors including Black and Dark Grey"],
  featuresAr: [
    'مطابقة لمعايير NEMA TC 2 و TC 6 و 8 و ASTM F 512 — مصنع رائد في الإمارات',
    'مقاسات قياسية متوفرة بالمتري (DIN 8062) والإنشي (BS 3505/06)',
    'تركيبات محددة للخدمة العادية (EPC 40) والشاقة (EPC 80)',
    'تصاميم متخصصة للدفن المغلف (EB) والدفن المباشر (DB)',
    'متوفرة بأطوال قياسية 5.8 متر أو مخصصة حسب متطلبات المشروع',
    'مصنعة بألوان قياسية تشمل الأسود والرمادي الداكن',
  ],
    featuresFr: [
            `Conformité avec NEMA TC 2, TC 6 & 8 et ASTM F 512 standards`,
            `Tailles standard disponibles en dimensions métriques (DIN 8062) et impériales (BS 3505/06)`,
            `Formulations spécifiques pour les applications normales à duty (EPC 40) et lourdes à duty (EPC 80)`,
            `Conceptions spécialisées pour les exigences d’enfouissement enfermé (EB) et d’enfouissement direct (DB)`,
            `Disponible en longueurs standard de 5.8 meters ou personnalisé selon les exigences du projet`,
            `Fabriqué dans des couleurs standard, notamment le noir et le gris foncé`
          ],
    applications: ["Underground telecommunications infrastructure following Etisalat & DU specifications","Electrical wire and cable protection for underground installations","Concrete-encased and direct burial electrical tubing and conduits","Street lighting and utility network ducting for major urban developments"],
  applicationsAr: [
    'البنية التحتية للاتصالات تحت الأرض وفق مواصفات اتصالات ودو',
    'حماية الأسلاك والكابلات الكهربائية للتركيبات تحت الأرض',
    'أنابيب ومجاري كهربائية مغلفة بالخرسانة ومدفونة مباشرة',
    'إنارة الشوارع ومجاري شبكات المرافق للتطويرات العمرانية الكبرى',
  ],
    applicationsFr: [
            `Infrastructure de télécommunications souterraine suivant les spécifications Etisalat & DU`,
            `Protection des fils et câbles électriques pour installations souterraines`,
            `Tubes et conduits électriques enrobés de béton et enterrés directement`,
            `Éclairage public et réseau électrique du adapté aux grands développements urbains`
          ],
    pipesTables: [
    {
      id: "pvc-duct-pipes-bs-3505-table",
      title: "BS 3505/06 Imperial size Pressure Pipes", titleFr: 'BS 3505/06 Imperial taille TUYAUX SOUS PRESSION',
      columns: [
        { key: "size_inch", label: "Nominal Size inch", labelFr: 'Taille Nominale inch' },
        { key: "mean-outside-dia-min", label: "Min", labelFr: 'Min', superGroupLabel: "Mean Outside Dia", superGroupLabelFr: 'Moyen Extérieur Dia', superColSpan: 2 },
        { key: "mean-outside-dia-max", label: "Max", labelFr: 'Max', superGroupLabel: "Mean Outside Dia", superGroupLabelFr: 'Moyen Extérieur Dia' },
        { key: "nominal-wall-thickness-pn-15-class-e-min", label: "Min", labelFr: 'Min', groupLabel: "PN-15(Class-E)", groupLabelFr: 'PN-15(Classe-E)', colSpan: 2, superGroupLabel: "Nominal Wall thickness", superGroupLabelFr: 'Nominal Paroi épaisseur', superColSpan: 10 },
        { key: "nominal-wall-thickness-pn-15-class-e-max", label: "Max", labelFr: 'Max', groupLabel: "PN-15(Class-E)", groupLabelFr: 'PN-15(Classe-E)', superGroupLabel: "Nominal Wall thickness", superGroupLabelFr: 'Nominal Paroi épaisseur' },
        { key: "nominal-wall-thickness-pn-12-class-d-min", label: "Min", labelFr: 'Min', groupLabel: "PN-12 (Class-D)", groupLabelFr: 'PN-12 (Classe-D)', colSpan: 2, superGroupLabel: "Nominal Wall thickness", superGroupLabelFr: 'Nominal Paroi épaisseur' },
        { key: "nominal-wall-thickness-pn-12-class-d-max", label: "Max", labelFr: 'Max', groupLabel: "PN-12 (Class-D)", groupLabelFr: 'PN-12 (Classe-D)', superGroupLabel: "Nominal Wall thickness", superGroupLabelFr: 'Nominal Paroi épaisseur' },
        { key: "nominal-wall-thickness-pn-9-class-c-min", label: "Min", labelFr: 'Min', groupLabel: "PN-9 (Class-C)", groupLabelFr: 'PN-9 (Classe-C)', colSpan: 2, superGroupLabel: "Nominal Wall thickness", superGroupLabelFr: 'Nominal Paroi épaisseur' },
        { key: "nominal-wall-thickness-pn-9-class-c-max", label: "Max", labelFr: 'Max', groupLabel: "PN-9 (Class-C)", groupLabelFr: 'PN-9 (Classe-C)', superGroupLabel: "Nominal Wall thickness", superGroupLabelFr: 'Nominal Paroi épaisseur' },
        { key: "nominal-wall-thickness-pn-6-class-b-min", label: "Min", labelFr: 'Min', groupLabel: "PN-6 (Class-B)", groupLabelFr: 'PN-6 (Classe-B)', colSpan: 2, superGroupLabel: "Nominal Wall thickness", superGroupLabelFr: 'Nominal Paroi épaisseur' },
        { key: "nominal-wall-thickness-pn-6-class-b-max", label: "Max", labelFr: 'Max', groupLabel: "PN-6 (Class-B)", groupLabelFr: 'PN-6 (Classe-B)', superGroupLabel: "Nominal Wall thickness", superGroupLabelFr: 'Nominal Paroi épaisseur' },
        { key: "nominal-wall-thickness-non-pressure-class-o-min", label: "Min", labelFr: 'Min', groupLabel: "Non Pressure (Class-O)", groupLabelFr: 'Non Pression (Classe-O)', colSpan: 2, superGroupLabel: "Nominal Wall thickness", superGroupLabelFr: 'Nominal Paroi épaisseur' },
        { key: "nominal-wall-thickness-non-pressure-class-o-max", label: "Max", labelFr: 'Max', groupLabel: "Non Pressure (Class-O)", groupLabelFr: 'Non Pression (Classe-O)', superGroupLabel: "Nominal Wall thickness", superGroupLabelFr: 'Nominal Paroi épaisseur' }
      ],
      rows: [
        { "size_inch": "1/2\"", "mean-outside-dia-min": "21.2", "mean-outside-dia-max": "21.5", "nominal-wall-thickness-pn-15-class-e-min": "1.7", "nominal-wall-thickness-pn-15-class-e-max": "2.1", "nominal-wall-thickness-pn-12-class-d-min": "", "nominal-wall-thickness-pn-12-class-d-max": "", "nominal-wall-thickness-pn-9-class-c-min": "", "nominal-wall-thickness-pn-9-class-c-max": "", "nominal-wall-thickness-pn-6-class-b-min": "", "nominal-wall-thickness-pn-6-class-b-max": "", "nominal-wall-thickness-non-pressure-class-o-min": "", "nominal-wall-thickness-non-pressure-class-o-max": "" },
        { "size_inch": "3/4\"", "mean-outside-dia-min": "26.6", "mean-outside-dia-max": "26.9", "nominal-wall-thickness-pn-15-class-e-min": "1.9", "nominal-wall-thickness-pn-15-class-e-max": "2.5", "nominal-wall-thickness-pn-12-class-d-min": "", "nominal-wall-thickness-pn-12-class-d-max": "", "nominal-wall-thickness-pn-9-class-c-min": "", "nominal-wall-thickness-pn-9-class-c-max": "", "nominal-wall-thickness-pn-6-class-b-min": "", "nominal-wall-thickness-pn-6-class-b-max": "", "nominal-wall-thickness-non-pressure-class-o-min": "", "nominal-wall-thickness-non-pressure-class-o-max": "" },
        { "size_inch": "1\"", "mean-outside-dia-min": "33.4", "mean-outside-dia-max": "33.7", "nominal-wall-thickness-pn-15-class-e-min": "2.2", "nominal-wall-thickness-pn-15-class-e-max": "2.8", "nominal-wall-thickness-pn-12-class-d-min": "", "nominal-wall-thickness-pn-12-class-d-max": "", "nominal-wall-thickness-pn-9-class-c-min": "", "nominal-wall-thickness-pn-9-class-c-max": "", "nominal-wall-thickness-pn-6-class-b-min": "", "nominal-wall-thickness-pn-6-class-b-max": "", "nominal-wall-thickness-non-pressure-class-o-min": "", "nominal-wall-thickness-non-pressure-class-o-max": "" },
        { "size_inch": "1 1/4\"", "mean-outside-dia-min": "42.1", "mean-outside-dia-max": "42.4", "nominal-wall-thickness-pn-15-class-e-min": "2.7", "nominal-wall-thickness-pn-15-class-e-max": "3.3", "nominal-wall-thickness-pn-12-class-d-min": "2.2", "nominal-wall-thickness-pn-12-class-d-max": "2.7", "nominal-wall-thickness-pn-9-class-c-min": "", "nominal-wall-thickness-pn-9-class-c-max": "", "nominal-wall-thickness-pn-6-class-b-min": "", "nominal-wall-thickness-pn-6-class-b-max": "", "nominal-wall-thickness-non-pressure-class-o-min": "1.8", "nominal-wall-thickness-non-pressure-class-o-max": "2.2" },
        { "size_inch": "1 1/2\"", "mean-outside-dia-min": "48.1", "mean-outside-dia-max": "48.4", "nominal-wall-thickness-pn-15-class-e-min": "3.1", "nominal-wall-thickness-pn-15-class-e-max": "3.7", "nominal-wall-thickness-pn-12-class-d-min": "2.5", "nominal-wall-thickness-pn-12-class-d-max": "3.0", "nominal-wall-thickness-pn-9-class-c-min": "", "nominal-wall-thickness-pn-9-class-c-max": "", "nominal-wall-thickness-pn-6-class-b-min": "", "nominal-wall-thickness-pn-6-class-b-max": "", "nominal-wall-thickness-non-pressure-class-o-min": "1.8", "nominal-wall-thickness-non-pressure-class-o-max": "2.2" },
        { "size_inch": "2\"", "mean-outside-dia-min": "60.2", "mean-outside-dia-max": "60.5", "nominal-wall-thickness-pn-15-class-e-min": "3.9", "nominal-wall-thickness-pn-15-class-e-max": "4.5", "nominal-wall-thickness-pn-12-class-d-min": "3.1", "nominal-wall-thickness-pn-12-class-d-max": "3.7", "nominal-wall-thickness-pn-9-class-c-min": "2.5", "nominal-wall-thickness-pn-9-class-c-max": "3.0", "nominal-wall-thickness-pn-6-class-b-min": "", "nominal-wall-thickness-pn-6-class-b-max": "", "nominal-wall-thickness-non-pressure-class-o-min": "1.8", "nominal-wall-thickness-non-pressure-class-o-max": "2.2" },
        { "size_inch": "3\"", "mean-outside-dia-min": "88.7", "mean-outside-dia-max": "89.1", "nominal-wall-thickness-pn-15-class-e-min": "5.7", "nominal-wall-thickness-pn-15-class-e-max": "6.6", "nominal-wall-thickness-pn-12-class-d-min": "4.6", "nominal-wall-thickness-pn-12-class-d-max": "5.3", "nominal-wall-thickness-pn-9-class-c-min": "3.5", "nominal-wall-thickness-pn-9-class-c-max": "4.1", "nominal-wall-thickness-pn-6-class-b-min": "2.9", "nominal-wall-thickness-pn-6-class-b-max": "3.4", "nominal-wall-thickness-non-pressure-class-o-min": "1.8", "nominal-wall-thickness-non-pressure-class-o-max": "2.2" },
        { "size_inch": "4\"", "mean-outside-dia-min": "114.1", "mean-outside-dia-max": "114.5", "nominal-wall-thickness-pn-15-class-e-min": "7.3", "nominal-wall-thickness-pn-15-class-e-max": "8.4", "nominal-wall-thickness-pn-12-class-d-min": "6.0", "nominal-wall-thickness-pn-12-class-d-max": "6.9", "nominal-wall-thickness-pn-9-class-c-min": "4.5", "nominal-wall-thickness-pn-9-class-c-max": "5.2", "nominal-wall-thickness-pn-6-class-b-min": "3.4", "nominal-wall-thickness-pn-6-class-b-max": "4.0", "nominal-wall-thickness-non-pressure-class-o-min": "2.3", "nominal-wall-thickness-non-pressure-class-o-max": "3.1" },
        { "size_inch": "6\"", "mean-outside-dia-min": "168", "mean-outside-dia-max": "168.5", "nominal-wall-thickness-pn-15-class-e-min": "10.8", "nominal-wall-thickness-pn-15-class-e-max": "12.5", "nominal-wall-thickness-pn-12-class-d-min": "8.8", "nominal-wall-thickness-pn-12-class-d-max": "10.2", "nominal-wall-thickness-pn-9-class-c-min": "6.6", "nominal-wall-thickness-pn-9-class-c-max": "7.6", "nominal-wall-thickness-pn-6-class-b-min": "4.5", "nominal-wall-thickness-pn-6-class-b-max": "5.2", "nominal-wall-thickness-non-pressure-class-o-min": "3.1", "nominal-wall-thickness-non-pressure-class-o-max": "3.7" },
        { "size_inch": "8\"", "mean-outside-dia-min": "218.8", "mean-outside-dia-max": "219.4", "nominal-wall-thickness-pn-15-class-e-min": "12.6", "nominal-wall-thickness-pn-15-class-e-max": "14.5", "nominal-wall-thickness-pn-12-class-d-min": "10.3", "nominal-wall-thickness-pn-12-class-d-max": "11.9", "nominal-wall-thickness-pn-9-class-c-min": "7.8", "nominal-wall-thickness-pn-9-class-c-max": "9.0", "nominal-wall-thickness-pn-6-class-b-min": "5.3", "nominal-wall-thickness-pn-6-class-b-max": "6.1", "nominal-wall-thickness-non-pressure-class-o-min": "3.1", "nominal-wall-thickness-non-pressure-class-o-max": "3.7" },
        { "size_inch": "10\"", "mean-outside-dia-min": "272.6", "mean-outside-dia-max": "273.4", "nominal-wall-thickness-pn-15-class-e-min": "15.7", "nominal-wall-thickness-pn-15-class-e-max": "18.1", "nominal-wall-thickness-pn-12-class-d-min": "12.8", "nominal-wall-thickness-pn-12-class-d-max": "14.8", "nominal-wall-thickness-pn-9-class-c-min": "9.7", "nominal-wall-thickness-pn-9-class-c-max": "11.2", "nominal-wall-thickness-pn-6-class-b-min": "6.6", "nominal-wall-thickness-pn-6-class-b-max": "7.6", "nominal-wall-thickness-non-pressure-class-o-min": "3.1", "nominal-wall-thickness-non-pressure-class-o-max": "3.7" },
        { "size_inch": "12\"", "mean-outside-dia-min": "323.4", "mean-outside-dia-max": "324.3", "nominal-wall-thickness-pn-15-class-e-min": "18.7", "nominal-wall-thickness-pn-15-class-e-max": "21.6", "nominal-wall-thickness-pn-12-class-d-min": "15.2", "nominal-wall-thickness-pn-12-class-d-max": "17.5", "nominal-wall-thickness-pn-9-class-c-min": "11.5", "nominal-wall-thickness-pn-9-class-c-max": "13.3", "nominal-wall-thickness-pn-6-class-b-min": "7.8", "nominal-wall-thickness-pn-6-class-b-max": "9.0", "nominal-wall-thickness-non-pressure-class-o-min": "3.1", "nominal-wall-thickness-non-pressure-class-o-max": "3.7" }
      ],
    }
  ],
  fittings: [],
  downloads: [
    { label: 'PVC Duct Pipes Catalogue (PDF)', labelAr: 'كتالوج أنابيب مجاري PVC (PDF)', labelFr: 'Catalogue Tuyaux de Gaine PVC (PDF)', href: '/pdfs/UPVC%20DUCT%20PIPES%20AND%20ACCESSORIES.pdf' },
  ],
  dosDonts: {
    dos: ["Use EPC 40 for normal duty above ground or concrete-encased applications","Select EPC 80 for heavy-duty applications requiring higher wall thickness","Ensure EB type ducts are encased in concrete during installation","Utilize DB type ducts for direct burial without the need for concrete encasement"],
    donts: ["Do not use EB series ducts for direct burial applications without concrete encasement","Avoid using Class-O (non-pressure) pipes for applications requiring specified working pressures","Do not exceed the specified working pressure ratings for PN series pipes at 20°C","Avoid mismatched accessories; use standard duct sockets, end caps, and bellmouths for secure connections"],
  },
  dosDontsAr: {
    dos: [
      'استخدم EPC 40 للتطبيقات العادية فوق الأرض أو المغلفة بالخرسانة',
      'اختر EPC 80 للتطبيقات الشاقة التي تتطلب سمك جدار أعلى',
      'تأكد أن أنابيب نوع EB مغلفة بالخرسانة أثناء التركيب',
      'استخدم أنابيب نوع DB للدفن المباشر بدون الحاجة لتغليف بالخرسانة',
    ],
    donts: [
      'لا تستخدم أنابيب سلسلة EB للدفن المباشر بدون تغليف بالخرسانة',
      'تجنب استخدام أنابيب Class-O (غير ضغط) للتطبيقات التي تتطلب ضغط تشغيل محدد',
      'لا تتجاوز تصنيفات ضغط التشغيل المحددة لأنابيب سلسلة PN عند 20°C',
      'تجنب الملحقات غير المتطابقة؛ استخدم مقابس ومجاري وأغطية قياسية',
    ],
  },
    dosDontsFr: {
          dos: [
            `Utilisez EPC 40 pour les applications normales au-dessus du sol ou enrobées de béton.`,
            `Sélectionnez EPC 80 pour les applications lourdes nécessitant une épaisseur de paroi plus élevée`,
            `Assurez-vous que les ducts de type EB sont encastrés dans une installation en béton during.`,
            `Utiliser le type DB ducts pour un enterrement direct sans avoir besoin d'un enrobage en béton`
          ],
          donts: [
            `Ne pas utiliser la série EB ducts pour des applications enfouies directement sans enrobage de béton.`,
            `Évitez d'utiliser des tuyaux de classe O (sans pression) pour les applications nécessitant des pressions de service spécifiées.`,
            `Ne dépassez pas les pressions nominales de service spécifiées pour les tuyaux de la série PN à 20°C`,
            `Évitez les accessoires dépareillés ; utilisez des douilles, des embouts et des embouchures standard duct pour des connexions sécurisées`
          ]
        }
};


// ═══════════════════════════════════════════════════════════════════════════════
// 6) Non-Standard
// ═══════════════════════════════════════════════════════════════════════════════

export const pvcDuctPipesNonStandard: ProductDetailConfig = {
  slug: "pvc-duct-pipes-non-standard",
  categorySlug: 'pvc-duct-pipes',
  title: "PVC Duct Non-Standard Pipes",
  titleAr: "أنابيب مجاري PVC غير القياسية",
    titleFr: `PVC Duct Tuyaux non standards`,
    shortDescription: "Non-standard duct pipes for specialized projects — 75–160 mm.",
  shortDescriptionAr: "أنابيب مجاري غير قياسية للمشاريع المتخصصة — 75–160 مم.",
    shortDescriptionFr: `Tuyaux duct non standard pour projets spécialisés — 75–160 mm.`,
    overview: "Crown Plastic Pipes / Fittings manufactures non-standard PVC-U duct pipes for specialized project requirements across the UAE and GCC. Available in 75 mm, 90 mm, 110 mm, and 160 mm sizes, these pipes cater to unique cable protection needs that fall outside conventional standards. Produced at our Umm Al Quwain facility with ISO 9001:2015 certification.",
  overviewAr: "تصنّع كراون للأنابيب والوصلات البلاستيكية أنابيب مجاري PVC-U غير قياسية لمتطلبات المشاريع المتخصصة في الإمارات والخليج. متوفرة بمقاسات 75 مم و 90 مم و 110 مم و 160 مم. مصنعة في منشأتنا بأم القيوين بشهادة ISO 9001:2015.",
    overviewFr: `Crown Plastic Pipes / Fittings fabrique des tuyaux PVC-U duct non standard pour les exigences de projets spécialisés dans les UAE et GCC. Disponibles dans les tailles 75 mm, 90 mm, 110 mm et 160 mm, ces tuyaux répondent à des besoins uniques en matière de protection des câbles qui dépassent les normes conventionnelles. Produced dans notre usine d'Umm Al Quwain avec la certification ISO 9001:2015.`,
    features: ["Compliance with NEMA TC 2, TC 6 & 8, and ASTM F 512 standards","Standard sizes available in both Metric (DIN 8062) and Imperial (BS 3505/06) dimensions","Specific formulations for normal duty (EPC 40) and heavy-duty (EPC 80) applications","Specialized designs for Encased Burial (EB) and Direct Burial (DB) requirements","Available in standard lengths of 5.8 meters or customized to project requirements","Manufactured in standard colors including Black and Dark Grey"],
  featuresAr: [
    'مطابقة لمعايير NEMA TC 2 و TC 6 و 8 و ASTM F 512 — مصنع رائد في الإمارات',
    'مقاسات قياسية متوفرة بالمتري (DIN 8062) والإنشي (BS 3505/06)',
    'تركيبات محددة للخدمة العادية (EPC 40) والشاقة (EPC 80)',
    'تصاميم متخصصة للدفن المغلف (EB) والدفن المباشر (DB)',
    'متوفرة بأطوال قياسية 5.8 متر أو مخصصة حسب متطلبات المشروع',
    'مصنعة بألوان قياسية تشمل الأسود والرمادي الداكن',
  ],
    featuresFr: [
            `Conformité avec NEMA TC 2, TC 6 & 8 et ASTM F 512 standards`,
            `Tailles standard disponibles en dimensions métriques (DIN 8062) et impériales (BS 3505/06)`,
            `Formulations spécifiques pour les applications normales à duty (EPC 40) et lourdes à duty (EPC 80)`,
            `Conceptions spécialisées pour les exigences d’enfouissement enfermé (EB) et d’enfouissement direct (DB)`,
            `Disponible en longueurs standard de 5.8 meters ou personnalisé selon les exigences du projet`,
            `Fabriqué dans des couleurs standard, notamment le noir et le gris foncé`
          ],
    applications: ["Underground telecommunications infrastructure following Etisalat & DU specifications","Electrical wire and cable protection for underground installations","Concrete-encased and direct burial electrical tubing and conduits","Street lighting and utility network ducting for major urban developments"],
  applicationsAr: [
    'البنية التحتية للاتصالات تحت الأرض وفق مواصفات اتصالات ودو',
    'حماية الأسلاك والكابلات الكهربائية للتركيبات تحت الأرض',
    'أنابيب ومجاري كهربائية مغلفة بالخرسانة ومدفونة مباشرة',
    'إنارة الشوارع ومجاري شبكات المرافق للتطويرات العمرانية الكبرى',
  ],
    applicationsFr: [
            `Infrastructure de télécommunications souterraine suivant les spécifications Etisalat & DU`,
            `Protection des fils et câbles électriques pour installations souterraines`,
            `Tubes et conduits électriques enrobés de béton et enterrés directement`,
            `Éclairage public et réseau électrique du adapté aux grands développements urbains`
          ],
    pipesTables: [
    {
      id: "pvc-duct-pipes-non-standard-duct-pipe-table",
      title: "NON-STANDARD DUCT PIPE", titleFr: 'NON-STANDARD TUYAUX DE GAINE',
      columns: [
        { key: "product", label: "Product", labelFr: 'Produit' },
        { key: "outside-diameter-min", label: "Min", labelFr: 'Min', groupLabel: "Outside Diameter", groupLabelFr: 'Extérieur Diamètre', colSpan: 2 },
        { key: "outside-diameter-max", label: "Max", labelFr: 'Max', groupLabel: "Outside Diameter", groupLabelFr: 'Extérieur Diamètre' },
        { key: "wall-thickness-min", label: "Min", labelFr: 'Min', groupLabel: "Wall Thickness", groupLabelFr: 'Paroi Épaisseur', colSpan: 2 },
        { key: "wall-thickness-max", label: "Max", labelFr: 'Max', groupLabel: "Wall Thickness", groupLabelFr: 'Paroi Épaisseur' }
      ],
      rows: [
        { "product": "75 DUCT PIPE", "outside-diameter-min": "75.00", "outside-diameter-max": "75.30", "wall-thickness-min": "1.70", "wall-thickness-max": "2.00" },
        { "product": "90 DUCT PIPE", "outside-diameter-min": "90.00", "outside-diameter-max": "90.30", "wall-thickness-min": "1.70", "wall-thickness-max": "2.00" },
        { "product": "110 DUCT PIPE", "outside-diameter-min": "110.00", "outside-diameter-max": "110.40", "wall-thickness-min": "2.40", "wall-thickness-max": "2.80" },
        { "product": "160 DUCT PIPE", "outside-diameter-min": "160.00", "outside-diameter-max": "160.40", "wall-thickness-min": "3.60", "wall-thickness-max": "4.00" }
      ],
    }
  ],
  fittings: [],
  downloads: [
    { label: 'PVC Duct Pipes Catalogue (PDF)', labelAr: 'كتالوج أنابيب مجاري PVC (PDF)', labelFr: 'Catalogue Tuyaux de Gaine PVC (PDF)', href: '/pdfs/UPVC%20DUCT%20PIPES%20AND%20ACCESSORIES.pdf' },
  ],
  dosDonts: {
    dos: ["Use EPC 40 for normal duty above ground or concrete-encased applications","Select EPC 80 for heavy-duty applications requiring higher wall thickness","Ensure EB type ducts are encased in concrete during installation","Utilize DB type ducts for direct burial without the need for concrete encasement"],
    donts: ["Do not use EB series ducts for direct burial applications without concrete encasement","Avoid using Class-O (non-pressure) pipes for applications requiring specified working pressures","Do not exceed the specified working pressure ratings for PN series pipes at 20°C","Avoid mismatched accessories; use standard duct sockets, end caps, and bellmouths for secure connections"],
  },
  dosDontsAr: {
    dos: [
      'استخدم EPC 40 للتطبيقات العادية فوق الأرض أو المغلفة بالخرسانة',
      'اختر EPC 80 للتطبيقات الشاقة التي تتطلب سمك جدار أعلى',
      'تأكد أن أنابيب نوع EB مغلفة بالخرسانة أثناء التركيب',
      'استخدم أنابيب نوع DB للدفن المباشر بدون الحاجة لتغليف بالخرسانة',
    ],
    donts: [
      'لا تستخدم أنابيب سلسلة EB للدفن المباشر بدون تغليف بالخرسانة',
      'تجنب استخدام أنابيب Class-O (غير ضغط) للتطبيقات التي تتطلب ضغط تشغيل محدد',
      'لا تتجاوز تصنيفات ضغط التشغيل المحددة لأنابيب سلسلة PN عند 20°C',
      'تجنب الملحقات غير المتطابقة؛ استخدم مقابس ومجاري وأغطية قياسية',
    ],
  },
    dosDontsFr: {
          dos: [
            `Utilisez EPC 40 pour les applications normales au-dessus du sol ou enrobées de béton.`,
            `Sélectionnez EPC 80 pour les applications lourdes nécessitant une épaisseur de paroi plus élevée`,
            `Assurez-vous que les ducts de type EB sont encastrés dans une installation en béton during.`,
            `Utiliser le type DB ducts pour un enterrement direct sans avoir besoin d'un enrobage en béton`
          ],
          donts: [
            `Ne pas utiliser la série EB ducts pour des applications enfouies directement sans enrobage de béton.`,
            `Évitez d'utiliser des tuyaux de classe O (sans pression) pour les applications nécessitant des pressions de service spécifiées.`,
            `Ne dépassez pas les pressions nominales de service spécifiées pour les tuyaux de la série PN à 20°C`,
            `Évitez les accessoires dépareillés ; utilisez des douilles, des embouts et des embouchures standard duct pour des connexions sécurisées`
          ]
        }
};
