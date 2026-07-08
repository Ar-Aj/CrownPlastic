const seoOverviewFr = (standard: string, description: string) => `Crown Plastic Pipes / Fittings, fabricant leader de PVC-U dans le UAE, produit une gamme complète de tuyaux haute pression conformes à ${standard}. ${description} Fabriqués dans notre usine certifiée ISO 9001:2015 à Umm Al Quwain, ces tuyaux sont approuvés par les entrepreneurs, consultants et autorités gouvernementales dans tout le UAE.`;
/**
 * PVC High Pressure Pipes - Product Detail Configurations
 *
 * 7 sub-products mapped from src/config/products.ts:
 *   1. pvc-hp-pipes-iso-4422       → ISO 4422-2:1996
 *   2. pvc-hp-pipes-din-8061-62    → DIN 8061/62:2009
 *   3. pvc-hp-pipes-bs-en-iso-1452-2 → BS EN ISO 1452-2:2009
 *   4. pvc-hp-pipes-bs-3505        → BS 3505:1986
 *   5. pvc-hp-pipes-bs-3506        → BS 3506:1969
 *   6. pvc-hp-pipes-astm-d1785     → ASTM D 1785 SCH 40/80
 *   7. pvc-hp-pipes-astm-d2241     → ASTM D 2241
 *
 * SEO: Copy enhanced with UAE/GCC/Dubai locality keywords.
 */

import { type ProductDetailConfig } from '@/types/productDetail';

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED CONTENT
// ═══════════════════════════════════════════════════════════════════════════════

const HP_FEATURES = [
  'High-pressure tolerance up to PN 16 and Schedule 80 ratings',
  'Excellent chemical resistance against corrosive industrial fluids',
  'Full compliance with ISO, DIN, BS, and ASTM international standards',
  'Corrosion-resistant PVC-U ensures long service life in Gulf climate conditions',
  'Smooth internal bore for optimised flow rates and reduced scale build-up',
  'Lightweight construction for easy handling and efficient installation',
  'UV-stabilised formulation suited to Middle East outdoor exposure',
  'ISO 9001:2015 certified production in the UAE',
];
const HP_FEATURESFr = [
  'Tolérance haute pression jusqu\'à PN 16 et aux cotes Schedule 80',
  'Excellente résistance chimique contre les fluides industriels corrosifs',
  'Conformité totale aux normes internationales ISO, DIN, BS et ASTM',
  'Le PVC-U résistant à la corrosion garantit une longue durée de service dans le climat du Golfe',
  'Alésage interne lisse pour des débits optimisés et une réduction des dépôts calcaires',
  'Construction légère pour une manutention facile et une installation efficace',
  'Formulation stabilisée aux UV adaptée à l\'exposition extérieure au Moyen-Orient',
  'Production certifiée ISO 9001:2015 dans le UAE',
];
const HP_FEATURESAr = [
  'تحمل ضغط عالٍ يصل إلى PN 16 وتصنيف جدول 80',
  'مقاومة كيميائية ممتازة ضد السوائل الصناعية المسببة للتآكل',
  'مطابقة كاملة للمعايير الدولية ISO و DIN و BS و ASTM',
  'مادة PVC-U مقاومة للتآكل تضمن عمر خدمة طويل في مناخ الخليج',
  'تجويف داخلي أملس لمعدلات تدفق محسّنة وتقليل تراكم الترسبات',
  'بناء خفيف الوزن لسهولة المناولة والتركيب الفعال',
  'تركيبة مثبّتة ضد الأشعة فوق البنفسجية مناسبة لظروف الشرق الأوسط',
  'إنتاج معتمد بمعيار ISO 9001:2015 في الإمارات',
];

const HP_APPLICATIONS = [
  'Potable water supply and distribution networks across the UAE',
  'Industrial chemical processing and fluid transport',
  'Municipal sewerage and wastewater management systems',
  'Agricultural irrigation and high-pressure water delivery in GCC',
  'Electrical and telecommunications ducting applications',
  'HVAC systems and cooling water circulation',
  'Swimming pool and water feature installations',
  'Desalination plant auxiliary piping',
];
const HP_APPLICATIONSFr = [
  'Réseaux d\'alimentation et de distribution d\'eau potable dans tout le UAE',
  'Traitement chimique industriel et transport de fluides',
  'Systèmes municipaux d\'assainissement et de gestion des eaux usées',
  'Irrigation agricole et acheminement d\'eau à haute pression dans le GCC',
  'Applications de canalisations électriques et de télécommunications',
  'Systèmes HVAC et circulation des eaux de refroidissement',
  'Installations de piscines et de fontaines',
  'Canalisations auxiliaires de centrales de dessalement',
];
const HP_APPLICATIONSAr = [
  'شبكات إمداد وتوزيع مياه الشرب في الإمارات',
  'المعالجة الكيميائية الصناعية ونقل السوائل',
  'أنظمة الصرف الصحي البلدية وإدارة المياه العادمة',
  'الري الزراعي وتوصيل المياه عالي الضغط في الخليج',
  'تطبيقات قنوات الكهرباء والاتصالات',
  'أنظمة التكييف وتدوير مياه التبريد',
  'تركيبات أحواض السباحة والنوافير',
  'الأنابيب المساعدة لمحطات تحلية المياه',
];

const HP_DOS_DONTS = {
  dos: [
    'Follow standard solvent welding or mechanical joining procedures',
    'Ensure pipes are supported at recommended intervals to prevent sagging',
    'Verify that the chosen pressure rating exceeds maximum system pressure',
    'Conduct pressure testing before full commissioning',
  ],
  donts: [
    'Do not exceed the maximum sustained working pressure for the temperature',
    'Avoid dropping or dragging pipes on rough surfaces',
    'Do not use for compressed air or gas transport unless specifically rated',
    'Avoid prolonged UV exposure without adequate protection',
  ],
};
const HP_DOS_DONTSFr = {
  dos: [
    'Suivre les procédures standard de soudage au solvant ou d\'assemblage mécanique',
    'S\'assurer que les tuyaux sont supportés aux intervalles recommandés pour éviter l\'affaissement',
    'Vérifier que la valeur nominale de pression choisie dépasse la pression maximale du système',
    'Effectuer des tests de pression avant la mise en service complète',
  ],
  donts: [
    'Ne pas dépasser la pression de travail maximale soutenue pour la température donnée',
    'Éviter de laisser tomber ou de traîner les tuyaux sur des surfaces rugueuses',
    'Ne pas utiliser pour le transport d\'air comprimé ou de gaz sauf si spécifiquement homologué',
    'Éviter l\'exposition prolongée aux UV sans protection adéquate',
  ],
};
const HP_DOS_DONTSAr = {
  dos: [
    'اتبع إجراءات اللحام بالمذيب أو الوصل الميكانيكي القياسية',
    'تأكد من دعم الأنابيب على فترات موصى بها لمنع الترهل',
    'تحقق أن تصنيف الضغط المختار يتجاوز الحد الأقصى لضغط النظام',
    'أجرِ اختبار الضغط قبل التشغيل الكامل',
  ],
  donts: [
    'لا تتجاوز الحد الأقصى لضغط العمل المستمر لدرجة الحرارة',
    'تجنب إسقاط أو سحب الأنابيب على أسطح خشنة',
    'لا تستخدم لنقل الهواء المضغوط أو الغاز إلا إذا كانت مصنفة لذلك',
    'تجنب التعرض المطول للأشعة فوق البنفسجية بدون حماية كافية',
  ],
};

/** Helper: build overview with SEO locality */
function seoOverview(standard: string, detail: string): string {
  return `Crown Plastic Pipes / Fittings, a leading PVC-U manufacturer in the UAE, produces a comprehensive range of high-pressure pipes conforming to ${standard}. ${detail} Manufactured at our ISO 9001:2015 certified facility in Umm Al Quwain, these pipes are trusted by contractors, consultants, and government authorities across the UAE.`;
}
function seoOverviewAr(standard: string, detail: string): string {
  return `تصنّع كراون للأنابيب والوصلات البلاستيكية، الشركة الرائدة في تصنيع أنابيب PVC-U في الإمارات، مجموعة شاملة من أنابيب الضغط العالي المطابقة لمعيار ${standard}. ${detail} مصنعة في منشأتنا المعتمدة بمعيار ISO 9001:2015 في أم القيوين، هذه الأنابيب موثوقة من قبل المقاولين والمستشارين والجهات الحكومية في دبي وأبوظبي ومنطقة الخليج.`;
}


// ═══════════════════════════════════════════════════════════════════════════════
// 1) ISO 4422-2:1996
// ═══════════════════════════════════════════════════════════════════════════════

export const pvcHpPipesIso4422: ProductDetailConfig = {
  slug: 'pvc-hp-pipes-iso-4422',
  categorySlug: 'pvc-high-pressure-pipes',
  title: 'PVC High Pressure Pipes ISO 4422-2:1996',
  titleAr: 'أنابيب الضغط العالي PVC وفق ISO 4422-2:1996',
    titleFr: `PVC Tuyaux haute pression ISO 4422-2:1996`,
    shortDescription: 'PVC-U pressure pipes to ISO 4422-2:1996 — sizes 20 mm to 400 mm, PN 6/10/16.',
  shortDescriptionAr: 'أنابيب ضغط PVC-U وفق ISO 4422-2:1996 — مقاسات 20 مم إلى 400 مم، PN 6/10/16.',
    shortDescriptionFr: `Conduites sous pression PVC-U vers ISO 4422-2:1996 — tailles 20 mm à 400 mm, PN 6/10/16.`,
    overview: seoOverview('ISO 4422-2:1996 (superseded by ISO 1452-2/BS EN 1452:2009)', 'Engineered for potable water supply, irrigation, and industrial fluid transport, these metric pipes are available in sizes from 20 mm to 400 mm with pressure classes PN 6, PN 10, and PN 16.'),
  overviewAr: seoOverviewAr('ISO 4422-2:1996', 'مصممة لإمداد مياه الشرب والري ونقل السوائل الصناعية، هذه الأنابيب المترية متوفرة بمقاسات من 20 مم إلى 400 مم بفئات ضغط PN 6 و PN 10 و PN 16.'),
    overviewFr: seoOverviewFr('ISO 4422-2:1996 (superseded by ISO 1452-2/BS EN 1452:2009)', 'Conçus pour l\'approvisionnement en eau potable, l\'irrigation et le transport de fluides industriels, ces tuyaux métriques sont disponibles dans des tailles allant de 20 mm à 400 mm avec des classes de pression PN 6, PN 10 et PN 16.'),
  features: HP_FEATURES, featuresAr: HP_FEATURESAr,
    featuresFr: HP_FEATURESFr,
    applications: HP_APPLICATIONS, applicationsAr: HP_APPLICATIONSAr,
    applicationsFr: HP_APPLICATIONSFr,
    pipesTables: [
    // ── Table 1: Coefficient C = 2.5 (4-tier header) ──
    {
      id: 'pvcHpPipesIso4422-c25',
      title: 'Metric size Pressure Pipes — ISO 4422-2:1996', titleFr: 'Metric taille TUYAUX SOUS PRESSION — ISO 4422-2:1996',
      columns: [
        { key: 'nominal_od', label: 'Nominal Outside Diameter', labelFr: 'Diametre Exterieur Nominal' },
        { key: 's20_sdr41',   label: '-', labelFr: '-',      groupLabel: 'Nominal pressure PN based on service (design) coefficient C = 2.5', groupLabelFr: 'Pression Nominale PN basee sur le coeff. de service C=2.5', colSpan: 6, superGroupLabel: 'S 20 (SDR 41)', superGroupLabelFr: 'S 20 (SDR 41)',    superColSpan: 1, megaGroupLabel: 'Nominal Wall Thickness (Minimum)', megaGroupLabelFr: 'Epaisseur Nominale de Paroi (Minimum)', megaColSpan: 6 },
        { key: 's16_sdr33',   label: 'PN 6', labelFr: 'PN 6',   groupLabel: 'Nominal pressure PN based on service (design) coefficient C = 2.5', groupLabelFr: 'Pression Nominale PN basee sur le coeff. de service C=2.5',             superGroupLabel: 'S 16 (SDR 33)', superGroupLabelFr: 'S 16 (SDR 33)',    superColSpan: 1, megaGroupLabel: 'Nominal Wall Thickness (Minimum)', megaGroupLabelFr: 'Epaisseur Nominale de Paroi (Minimum)' },
        { key: 's125_sdr26',  label: '-', labelFr: '-',       groupLabel: 'Nominal pressure PN based on service (design) coefficient C = 2.5', groupLabelFr: 'Pression Nominale PN basee sur le coeff. de service C=2.5',             superGroupLabel: 'S 12.5 (SDR 26)', superGroupLabelFr: 'S 12.5 (SDR 26)',  superColSpan: 1, megaGroupLabel: 'Nominal Wall Thickness (Minimum)', megaGroupLabelFr: 'Epaisseur Nominale de Paroi (Minimum)' },
        { key: 's10_sdr21',   label: 'PN 10', labelFr: 'PN 10',   groupLabel: 'Nominal pressure PN based on service (design) coefficient C = 2.5', groupLabelFr: 'Pression Nominale PN basee sur le coeff. de service C=2.5',             superGroupLabel: 'S 10 (SDR 21)', superGroupLabelFr: 'S 10 (SDR 21)',    superColSpan: 1, megaGroupLabel: 'Nominal Wall Thickness (Minimum)', megaGroupLabelFr: 'Epaisseur Nominale de Paroi (Minimum)' },
        { key: 's8_sdr17',    label: '-', labelFr: '-',        groupLabel: 'Nominal pressure PN based on service (design) coefficient C = 2.5', groupLabelFr: 'Pression Nominale PN basee sur le coeff. de service C=2.5',             superGroupLabel: 'S 8 (SDR 17)', superGroupLabelFr: 'S 8 (SDR 17)',     superColSpan: 1, megaGroupLabel: 'Nominal Wall Thickness (Minimum)', megaGroupLabelFr: 'Epaisseur Nominale de Paroi (Minimum)' },
        { key: 's63_sdr136',  label: 'PN 16', labelFr: 'PN 16',    groupLabel: 'Nominal pressure PN based on service (design) coefficient C = 2.5', groupLabelFr: 'Pression Nominale PN basee sur le coeff. de service C=2.5',             superGroupLabel: 'S 6.3 (SDR 13.6)', superGroupLabelFr: 'S 6.3 (SDR 13.6)', superColSpan: 1, megaGroupLabel: 'Nominal Wall Thickness (Minimum)', megaGroupLabelFr: 'Epaisseur Nominale de Paroi (Minimum)' },
      ],
      rows: [
        { nominal_od: '20 mm',  s20_sdr41: '-', s16_sdr33: '-',   s125_sdr26: '-', s10_sdr21: '-',   s8_sdr17: '-',   s63_sdr136: '1.5' },
        { nominal_od: '25 mm',  s20_sdr41: '-', s16_sdr33: '-',   s125_sdr26: '-', s10_sdr21: '-',   s8_sdr17: '-',   s63_sdr136: '1.9' },
        { nominal_od: '32 mm',  s20_sdr41: '-', s16_sdr33: '-',   s125_sdr26: '-', s10_sdr21: '1.6', s8_sdr17: '-',   s63_sdr136: '2.4' },
        { nominal_od: '40 mm',  s20_sdr41: '-', s16_sdr33: '1.5', s125_sdr26: '-', s10_sdr21: '1.9', s8_sdr17: '-',   s63_sdr136: '3.0' },
        { nominal_od: '50 mm',  s20_sdr41: '-', s16_sdr33: '1.6', s125_sdr26: '-', s10_sdr21: '2.4', s8_sdr17: '-',   s63_sdr136: '3.7' },
        { nominal_od: '63 mm',  s20_sdr41: '-', s16_sdr33: '2.0', s125_sdr26: '-', s10_sdr21: '3.0', s8_sdr17: '-',   s63_sdr136: '4.7' },
        { nominal_od: '75 mm',  s20_sdr41: '-', s16_sdr33: '2.3', s125_sdr26: '-', s10_sdr21: '3.6', s8_sdr17: '-',   s63_sdr136: '5.6' },
        { nominal_od: '90 mm',  s20_sdr41: '-', s16_sdr33: '2.8', s125_sdr26: '-', s10_sdr21: '4.3', s8_sdr17: '-',   s63_sdr136: '6.7' },
      ],
    },
    // ── Table 2: Coefficient C = 2.0 (2-tier header) ──
    {
      id: 'pvcHpPipesIso4422-c20',
      title: 'Metric size Pressure Pipes — ISO 4422-2:1996', titleFr: 'Metric taille TUYAUX SOUS PRESSION — ISO 4422-2:1996',
      columns: [
        { key: 'nominal_od', label: 'Nominal Outside Diameter', labelFr: 'Diametre Exterieur Nominal' },
        { key: 's20_sdr41',   label: 'PN 6', labelFr: 'PN 6',  groupLabel: 'Nominal pressure PN Base on service (design) coefficient C=2.0', groupLabelFr: 'Pression Nominale PN basee sur le coeff. de service C=2.0', colSpan: 6 },
        { key: 's16_sdr33',   label: '-', labelFr: '-',      groupLabel: 'Nominal pressure PN Base on service (design) coefficient C=2.0', groupLabelFr: 'Pression Nominale PN basee sur le coeff. de service C=2.0' },
        { key: 's125_sdr26',  label: 'PN 10', labelFr: 'PN 10',  groupLabel: 'Nominal pressure PN Base on service (design) coefficient C=2.0', groupLabelFr: 'Pression Nominale PN basee sur le coeff. de service C=2.0' },
        { key: 's10_sdr21',   label: '-', labelFr: '-',       groupLabel: 'Nominal pressure PN Base on service (design) coefficient C=2.0', groupLabelFr: 'Pression Nominale PN basee sur le coeff. de service C=2.0' },
        { key: 's8_sdr17',    label: 'PN 16', labelFr: 'PN 16',   groupLabel: 'Nominal pressure PN Base on service (design) coefficient C=2.0', groupLabelFr: 'Pression Nominale PN basee sur le coeff. de service C=2.0' },
        { key: 's63_sdr136',  label: '-', labelFr: '-',        groupLabel: 'Nominal pressure PN Base on service (design) coefficient C=2.0', groupLabelFr: 'Pression Nominale PN basee sur le coeff. de service C=2.0' },
      ],
      rows: [
        { nominal_od: '110 mm', s20_sdr41: '2.7', s16_sdr33: '-', s125_sdr26: '4.2',  s10_sdr21: '-', s8_sdr17: '6.6',  s63_sdr136: '-' },
        { nominal_od: '125 mm', s20_sdr41: '3.1', s16_sdr33: '-', s125_sdr26: '4.8',  s10_sdr21: '-', s8_sdr17: '7.4',  s63_sdr136: '-' },
        { nominal_od: '140 mm', s20_sdr41: '3.5', s16_sdr33: '-', s125_sdr26: '5.4',  s10_sdr21: '-', s8_sdr17: '8.3',  s63_sdr136: '-' },
        { nominal_od: '160 mm', s20_sdr41: '4.0', s16_sdr33: '-', s125_sdr26: '6.2',  s10_sdr21: '-', s8_sdr17: '9.5',  s63_sdr136: '-' },
        { nominal_od: '180 mm', s20_sdr41: '4.4', s16_sdr33: '-', s125_sdr26: '6.9',  s10_sdr21: '-', s8_sdr17: '10.7', s63_sdr136: '-' },
        { nominal_od: '200 mm', s20_sdr41: '4.9', s16_sdr33: '-', s125_sdr26: '7.7',  s10_sdr21: '-', s8_sdr17: '11.9', s63_sdr136: '-' },
        { nominal_od: '225 mm', s20_sdr41: '5.5', s16_sdr33: '-', s125_sdr26: '8.6',  s10_sdr21: '-', s8_sdr17: '13.4', s63_sdr136: '-' },
        { nominal_od: '250 mm', s20_sdr41: '6.2', s16_sdr33: '-', s125_sdr26: '9.6',  s10_sdr21: '-', s8_sdr17: '14.8', s63_sdr136: '-' },
        { nominal_od: '280 mm', s20_sdr41: '6.9', s16_sdr33: '-', s125_sdr26: '10.7', s10_sdr21: '-', s8_sdr17: '16.6', s63_sdr136: '-' },
        { nominal_od: '315 mm', s20_sdr41: '7.7', s16_sdr33: '-', s125_sdr26: '12.1', s10_sdr21: '-', s8_sdr17: '18.7', s63_sdr136: '-' },
        { nominal_od: '355 mm', s20_sdr41: '8.7', s16_sdr33: '-', s125_sdr26: '13.6', s10_sdr21: '-', s8_sdr17: '21.1', s63_sdr136: '-' },
        { nominal_od: '400 mm', s20_sdr41: '9.8', s16_sdr33: '-', s125_sdr26: '15.3', s10_sdr21: '-', s8_sdr17: '23.7', s63_sdr136: '-' },
      ],
    },
  ],
  fittings: [],
  downloads: [{ label: 'PVC High Pressure Pipes Catalogue (PDF)', labelAr: 'كتالوج أنابيب PVC عالية الضغط (PDF)', labelFr: 'Catalogue Tuyaux PVC Haute Pression (PDF)', href: '/pdfs/UPVC%20PRESSURE%20PIPES.pdf' }],
  dosDonts: HP_DOS_DONTS, dosDontsAr: HP_DOS_DONTSAr,
    dosDontsFr: HP_DOS_DONTSFr
};


// ═══════════════════════════════════════════════════════════════════════════════
// 2) DIN 8061/62:2009
// ═══════════════════════════════════════════════════════════════════════════════

export const pvcHpPipesDin806162: ProductDetailConfig = {
  slug: 'pvc-hp-pipes-din-8061-62',
  categorySlug: 'pvc-high-pressure-pipes',
  title: 'PVC High Pressure Pipes DIN 8061/62:2009',
  titleAr: 'أنابيب الضغط العالي PVC وفق DIN 8061/62:2009',
    titleFr: `PVC Tuyaux haute pression DIN 8061/62:2009`,
    shortDescription: 'PVC-U pressure pipes to DIN 8061/62:2009, equivalent to SASO 14-15:1998.',
  shortDescriptionAr: 'أنابيب ضغط PVC-U وفق DIN 8061/62:2009 المكافئ لـ SASO 14-15:1998.',
    shortDescriptionFr: `Conduites sous pression PVC-U vers DIN 8061/62:2009, équivalent à SASO 14-15:1998.`,
    overview: seoOverview('DIN 8061/62:2009 (equivalent to SASO 14-15:1998)', 'Widely specified across the GCC and Saudi Arabian markets, these metric pipes are available from 20 mm to 315 mm with pressure classes PN 4, PN 6, PN 10, and PN 16 — ideal for potable water and industrial applications in the Gulf climate.'),
  overviewAr: seoOverviewAr('DIN 8061/62:2009 (المكافئ لـ SASO 14-15:1998)', 'مواصفة شائعة في أسواق الخليج والسعودية، هذه الأنابيب المترية متوفرة من 20 مم إلى 315 مم بفئات ضغط PN 4 و PN 6 و PN 10 و PN 16 — مثالية لمياه الشرب والتطبيقات الصناعية في مناخ الخليج.'),
    overviewFr: seoOverviewFr('DIN 8061/62:2009 (equivalent to SASO 14-15:1998)', 'Largement spécifiés sur les marchés GCC et saoudien, ces tuyaux métriques sont disponibles de 20 mm à 315 mm avec des classes de pression PN 4, PN 6, PN 10 et PN 16 — idéaux pour l\'eau potable et les applications industrielles du dans le climat du Golfe.'),
  features: HP_FEATURES, featuresAr: HP_FEATURESAr,
    featuresFr: HP_FEATURESFr,
    applications: HP_APPLICATIONS, applicationsAr: HP_APPLICATIONSAr,
    applicationsFr: HP_APPLICATIONSFr,
    pipesTables: [{
    id: 'pvcHpPipesDin806162-pipes',
    title: 'Metric size Pressure Pipes', titleFr: 'Metric taille TUYAUX SOUS PRESSION',
    columns: [
      { key: 'hp_size', label: 'Size', labelFr: 'Taille' },
      { key: 'hp_mean_outside_dia_min', label: 'Min', labelFr: 'Min', superGroupLabel: 'Mean Outside Dia.', superGroupLabelFr: 'Diam. Ext. Moyen', superColSpan: 2 },
      { key: 'hp_mean_outside_dia_max', label: 'Max', labelFr: 'Max', superGroupLabel: 'Mean Outside Dia.', superGroupLabelFr: 'Diam. Ext. Moyen' },
      { key: 'hp_mean_wall_thickness_mm_pn_16_class_16_min', label: 'Min', labelFr: 'Min', groupLabel: 'PN-16(CLASS-16)', groupLabelFr: 'PN-16(CLASSE-16)', colSpan: 2, superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi', superColSpan: 8 },
      { key: 'hp_mean_wall_thickness_mm_pn_16_class_16_max', label: 'Max', labelFr: 'Max', groupLabel: 'PN-16(CLASS-16)', groupLabelFr: 'PN-16(CLASSE-16)', superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
      { key: 'hp_mean_wall_thickness_mm_pn_10_class_10_min', label: 'Min', labelFr: 'Min', groupLabel: 'PN-10(CLASS-10)', groupLabelFr: 'PN-10(CLASSE-10)', colSpan: 2, superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
      { key: 'hp_mean_wall_thickness_mm_pn_10_class_10_max', label: 'Max', labelFr: 'Max', groupLabel: 'PN-10(CLASS-10)', groupLabelFr: 'PN-10(CLASSE-10)', superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
      { key: 'hp_mean_wall_thickness_mm_pn_6_class_6_min', label: 'Min', labelFr: 'Min', groupLabel: 'PN-6(CLASS-6)', groupLabelFr: 'PN-6(CLASSE-6)', colSpan: 2, superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
      { key: 'hp_mean_wall_thickness_mm_pn_6_class_6_max', label: 'Max', labelFr: 'Max', groupLabel: 'PN-6(CLASS-6)', groupLabelFr: 'PN-6(CLASSE-6)', superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
      { key: 'hp_mean_wall_thickness_mm_pn_4_class_4_min', label: 'Min', labelFr: 'Min', groupLabel: 'PN-4(CLASS-4)', groupLabelFr: 'PN-4(CLASSE-4)', colSpan: 2, superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
      { key: 'hp_mean_wall_thickness_mm_pn_4_class_4_max', label: 'Max', labelFr: 'Max', groupLabel: 'PN-4(CLASS-4)', groupLabelFr: 'PN-4(CLASSE-4)', superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' }
    ],
    rows: [
      { hp_size: '20 mm', hp_mean_outside_dia_min: '20.0', hp_mean_outside_dia_max: '20.2', hp_mean_wall_thickness_mm_pn_16_class_16_min: '1.5', hp_mean_wall_thickness_mm_pn_16_class_16_max: '1.9', hp_mean_wall_thickness_mm_pn_10_class_10_min: null, hp_mean_wall_thickness_mm_pn_10_class_10_max: null, hp_mean_wall_thickness_mm_pn_6_class_6_min: null, hp_mean_wall_thickness_mm_pn_6_class_6_max: null, hp_mean_wall_thickness_mm_pn_4_class_4_min: null, hp_mean_wall_thickness_mm_pn_4_class_4_max: null },
      { hp_size: '25 mm', hp_mean_outside_dia_min: '25.0', hp_mean_outside_dia_max: '25.2', hp_mean_wall_thickness_mm_pn_16_class_16_min: '1.9', hp_mean_wall_thickness_mm_pn_16_class_16_max: '2.3', hp_mean_wall_thickness_mm_pn_10_class_10_min: '1.5', hp_mean_wall_thickness_mm_pn_10_class_10_max: '1.8', hp_mean_wall_thickness_mm_pn_6_class_6_min: null, hp_mean_wall_thickness_mm_pn_6_class_6_max: null, hp_mean_wall_thickness_mm_pn_4_class_4_min: null, hp_mean_wall_thickness_mm_pn_4_class_4_max: null },
      { hp_size: '32 mm', hp_mean_outside_dia_min: '32.0', hp_mean_outside_dia_max: '32.2', hp_mean_wall_thickness_mm_pn_16_class_16_min: '2.4', hp_mean_wall_thickness_mm_pn_16_class_16_max: '2.9', hp_mean_wall_thickness_mm_pn_10_class_10_min: '1.8', hp_mean_wall_thickness_mm_pn_10_class_10_max: '1.9', hp_mean_wall_thickness_mm_pn_6_class_6_min: null, hp_mean_wall_thickness_mm_pn_6_class_6_max: null, hp_mean_wall_thickness_mm_pn_4_class_4_min: null, hp_mean_wall_thickness_mm_pn_4_class_4_max: null },
      { hp_size: '40 mm', hp_mean_outside_dia_min: '40.0', hp_mean_outside_dia_max: '40.2', hp_mean_wall_thickness_mm_pn_16_class_16_min: '3.0', hp_mean_wall_thickness_mm_pn_16_class_16_max: '3.5', hp_mean_wall_thickness_mm_pn_10_class_10_min: '1.9', hp_mean_wall_thickness_mm_pn_10_class_10_max: '2.3', hp_mean_wall_thickness_mm_pn_6_class_6_min: '1.8', hp_mean_wall_thickness_mm_pn_6_class_6_max: '2.1', hp_mean_wall_thickness_mm_pn_4_class_4_min: null, hp_mean_wall_thickness_mm_pn_4_class_4_max: null },
      { hp_size: '50 mm', hp_mean_outside_dia_min: '50.0', hp_mean_outside_dia_max: '50.2', hp_mean_wall_thickness_mm_pn_16_class_16_min: '3.7', hp_mean_wall_thickness_mm_pn_16_class_16_max: '4.3', hp_mean_wall_thickness_mm_pn_10_class_10_min: '2.4', hp_mean_wall_thickness_mm_pn_10_class_10_max: '2.9', hp_mean_wall_thickness_mm_pn_6_class_6_min: '1.8', hp_mean_wall_thickness_mm_pn_6_class_6_max: '2.2', hp_mean_wall_thickness_mm_pn_4_class_4_min: null, hp_mean_wall_thickness_mm_pn_4_class_4_max: null },
      { hp_size: '63 mm', hp_mean_outside_dia_min: '63.0', hp_mean_outside_dia_max: '63.2', hp_mean_wall_thickness_mm_pn_16_class_16_min: '4.7', hp_mean_wall_thickness_mm_pn_16_class_16_max: '5.4', hp_mean_wall_thickness_mm_pn_10_class_10_min: '3.0', hp_mean_wall_thickness_mm_pn_10_class_10_max: '3.4', hp_mean_wall_thickness_mm_pn_6_class_6_min: '1.9', hp_mean_wall_thickness_mm_pn_6_class_6_max: '2.3', hp_mean_wall_thickness_mm_pn_4_class_4_min: null, hp_mean_wall_thickness_mm_pn_4_class_4_max: null },
      { hp_size: '75 mm', hp_mean_outside_dia_min: '75.0', hp_mean_outside_dia_max: '75.3', hp_mean_wall_thickness_mm_pn_16_class_16_min: '5.6', hp_mean_wall_thickness_mm_pn_16_class_16_max: '6.4', hp_mean_wall_thickness_mm_pn_10_class_10_min: '3.6', hp_mean_wall_thickness_mm_pn_10_class_10_max: '4.2', hp_mean_wall_thickness_mm_pn_6_class_6_min: '2.2', hp_mean_wall_thickness_mm_pn_6_class_6_max: '2.6', hp_mean_wall_thickness_mm_pn_4_class_4_min: '1.8', hp_mean_wall_thickness_mm_pn_4_class_4_max: '2.2' },
      { hp_size: '90 mm', hp_mean_outside_dia_min: '90.0', hp_mean_outside_dia_max: '90.3', hp_mean_wall_thickness_mm_pn_16_class_16_min: '6.7', hp_mean_wall_thickness_mm_pn_16_class_16_max: '7.6', hp_mean_wall_thickness_mm_pn_10_class_10_min: '4.3', hp_mean_wall_thickness_mm_pn_10_class_10_max: '5.1', hp_mean_wall_thickness_mm_pn_6_class_6_min: '2.7', hp_mean_wall_thickness_mm_pn_6_class_6_max: '3.2', hp_mean_wall_thickness_mm_pn_4_class_4_min: '1.8', hp_mean_wall_thickness_mm_pn_4_class_4_max: '2.3' },
      { hp_size: '110 mm', hp_mean_outside_dia_min: '110.0', hp_mean_outside_dia_max: '110.3', hp_mean_wall_thickness_mm_pn_16_class_16_min: '8.2', hp_mean_wall_thickness_mm_pn_16_class_16_max: '9.3', hp_mean_wall_thickness_mm_pn_10_class_10_min: '5.3', hp_mean_wall_thickness_mm_pn_10_class_10_max: '5.9', hp_mean_wall_thickness_mm_pn_6_class_6_min: '3.2', hp_mean_wall_thickness_mm_pn_6_class_6_max: '3.8', hp_mean_wall_thickness_mm_pn_4_class_4_min: '2.2', hp_mean_wall_thickness_mm_pn_4_class_4_max: '2.6' },
      { hp_size: '125 mm', hp_mean_outside_dia_min: '125.0', hp_mean_outside_dia_max: '125.3', hp_mean_wall_thickness_mm_pn_16_class_16_min: '9.3', hp_mean_wall_thickness_mm_pn_16_class_16_max: '10.3', hp_mean_wall_thickness_mm_pn_10_class_10_min: '6.0', hp_mean_wall_thickness_mm_pn_10_class_10_max: '6.8', hp_mean_wall_thickness_mm_pn_6_class_6_min: '3.7', hp_mean_wall_thickness_mm_pn_6_class_6_max: '4.0', hp_mean_wall_thickness_mm_pn_4_class_4_min: '2.5', hp_mean_wall_thickness_mm_pn_4_class_4_max: '2.9' },
      { hp_size: '140 mm', hp_mean_outside_dia_min: '140.0', hp_mean_outside_dia_max: '140.4', hp_mean_wall_thickness_mm_pn_16_class_16_min: '10.4', hp_mean_wall_thickness_mm_pn_16_class_16_max: '11.8', hp_mean_wall_thickness_mm_pn_10_class_10_min: '6.7', hp_mean_wall_thickness_mm_pn_10_class_10_max: '7.5', hp_mean_wall_thickness_mm_pn_6_class_6_min: '4.1', hp_mean_wall_thickness_mm_pn_6_class_6_max: '4.5', hp_mean_wall_thickness_mm_pn_4_class_4_min: '2.8', hp_mean_wall_thickness_mm_pn_4_class_4_max: '3.3' },
      { hp_size: '160 mm', hp_mean_outside_dia_min: '160.0', hp_mean_outside_dia_max: '160.4', hp_mean_wall_thickness_mm_pn_16_class_16_min: '11.9', hp_mean_wall_thickness_mm_pn_16_class_16_max: '11.3', hp_mean_wall_thickness_mm_pn_10_class_10_min: '7.7', hp_mean_wall_thickness_mm_pn_10_class_10_max: '8.5', hp_mean_wall_thickness_mm_pn_6_class_6_min: '4.7', hp_mean_wall_thickness_mm_pn_6_class_6_max: '5.2', hp_mean_wall_thickness_mm_pn_4_class_4_min: '3.2', hp_mean_wall_thickness_mm_pn_4_class_4_max: '3.8' },
      { hp_size: '180 mm', hp_mean_outside_dia_min: '180.0', hp_mean_outside_dia_max: '180.4', hp_mean_wall_thickness_mm_pn_16_class_16_min: '13.4', hp_mean_wall_thickness_mm_pn_16_class_16_max: '15.0', hp_mean_wall_thickness_mm_pn_10_class_10_min: '8.6', hp_mean_wall_thickness_mm_pn_10_class_10_max: '9.4', hp_mean_wall_thickness_mm_pn_6_class_6_min: '5.3', hp_mean_wall_thickness_mm_pn_6_class_6_max: '5.7', hp_mean_wall_thickness_mm_pn_4_class_4_min: '3.6', hp_mean_wall_thickness_mm_pn_4_class_4_max: '4.2' },
      { hp_size: '200 mm', hp_mean_outside_dia_min: '200.0', hp_mean_outside_dia_max: '200.4', hp_mean_wall_thickness_mm_pn_16_class_16_min: '14.9', hp_mean_wall_thickness_mm_pn_16_class_16_max: '16.6', hp_mean_wall_thickness_mm_pn_10_class_10_min: '9.6', hp_mean_wall_thickness_mm_pn_10_class_10_max: '10.7', hp_mean_wall_thickness_mm_pn_6_class_6_min: '5.9', hp_mean_wall_thickness_mm_pn_6_class_6_max: '6.7', hp_mean_wall_thickness_mm_pn_4_class_4_min: '4.0', hp_mean_wall_thickness_mm_pn_4_class_4_max: '4.4' },
      { hp_size: '225 mm', hp_mean_outside_dia_min: '225.0', hp_mean_outside_dia_max: '225.5', hp_mean_wall_thickness_mm_pn_16_class_16_min: '16.7', hp_mean_wall_thickness_mm_pn_16_class_16_max: '18.6', hp_mean_wall_thickness_mm_pn_10_class_10_min: '10.8', hp_mean_wall_thickness_mm_pn_10_class_10_max: '11.6', hp_mean_wall_thickness_mm_pn_6_class_6_min: '6.6', hp_mean_wall_thickness_mm_pn_6_class_6_max: '7.2', hp_mean_wall_thickness_mm_pn_4_class_4_min: '4.5', hp_mean_wall_thickness_mm_pn_4_class_4_max: '4.9' },
      { hp_size: '250 mm', hp_mean_outside_dia_min: '250.0', hp_mean_outside_dia_max: '250.5', hp_mean_wall_thickness_mm_pn_16_class_16_min: '18.6', hp_mean_wall_thickness_mm_pn_16_class_16_max: '20.7', hp_mean_wall_thickness_mm_pn_10_class_10_min: '11.9', hp_mean_wall_thickness_mm_pn_10_class_10_max: '13.3', hp_mean_wall_thickness_mm_pn_6_class_6_min: '7.3', hp_mean_wall_thickness_mm_pn_6_class_6_max: '8.0', hp_mean_wall_thickness_mm_pn_4_class_4_min: '4.9', hp_mean_wall_thickness_mm_pn_4_class_4_max: '5.7' },
      { hp_size: '280 mm', hp_mean_outside_dia_min: '280.0', hp_mean_outside_dia_max: '280.5', hp_mean_wall_thickness_mm_pn_16_class_16_min: '20.8', hp_mean_wall_thickness_mm_pn_16_class_16_max: '23.1', hp_mean_wall_thickness_mm_pn_10_class_10_min: '13.4', hp_mean_wall_thickness_mm_pn_10_class_10_max: '14.9', hp_mean_wall_thickness_mm_pn_6_class_6_min: '8.2', hp_mean_wall_thickness_mm_pn_6_class_6_max: '9.0', hp_mean_wall_thickness_mm_pn_4_class_4_min: '5.5', hp_mean_wall_thickness_mm_pn_4_class_4_max: '6.3' },
      { hp_size: '315 mm', hp_mean_outside_dia_min: '315.0', hp_mean_outside_dia_max: '315.6', hp_mean_wall_thickness_mm_pn_16_class_16_min: '23.4', hp_mean_wall_thickness_mm_pn_16_class_16_max: '26.0', hp_mean_wall_thickness_mm_pn_10_class_10_min: '15.0', hp_mean_wall_thickness_mm_pn_10_class_10_max: '16.7', hp_mean_wall_thickness_mm_pn_6_class_6_min: '9.2', hp_mean_wall_thickness_mm_pn_6_class_6_max: '10.4', hp_mean_wall_thickness_mm_pn_4_class_4_min: '6.2', hp_mean_wall_thickness_mm_pn_4_class_4_max: '7.1' }
    ]
  }],
  fittings: [],
  downloads: [{ label: 'PVC High Pressure Pipes Catalogue (PDF)', labelAr: 'كتالوج أنابيب PVC عالية الضغط (PDF)', labelFr: 'Catalogue Tuyaux PVC Haute Pression (PDF)', href: '/pdfs/UPVC%20PRESSURE%20PIPES.pdf' }],
  dosDonts: HP_DOS_DONTS, dosDontsAr: HP_DOS_DONTSAr,
    dosDontsFr: HP_DOS_DONTSFr
};


// ═══════════════════════════════════════════════════════════════════════════════
// 3) BS EN ISO 1452-2:2009 (Inch)
// ═══════════════════════════════════════════════════════════════════════════════

export const pvcHpPipesBsEnIso14522: ProductDetailConfig = {
  slug: 'pvc-hp-pipes-bs-en-iso-1452-2',
  categorySlug: 'pvc-high-pressure-pipes',
  title: 'PVC High Pressure Pipes BS EN ISO 1452-2:2009 (Inch)',
  titleAr: 'أنابيب الضغط العالي PVC وفق BS EN ISO 1452-2:2009 (إنش)',
    titleFr: `PVC Tuyaux haute pression BS EN ISO 1452-2:2009 (pouces)`,
    shortDescription: 'PVC-U pressure pipes to BS EN ISO 1452-2:2009 — imperial sizes ½″ to 12″.',
  shortDescriptionAr: 'أنابيب ضغط PVC-U وفق BS EN ISO 1452-2:2009 — مقاسات إنشية من ½″ إلى 12″.',
    shortDescriptionFr: `Tuyaux sous pression PVC-U à BS EN ISO 1452-2:2009 — tailles impériales ½″ à 12″.`,
    overview: seoOverview('BS EN ISO 1452-2:2009', 'The modern European standard for PVC-U pressure pipe systems, these imperial-sized pipes are available from ½″ to 12″ with pressure classes PN 9, PN 12, and PN 15 — widely specified by Dubai Municipality and Abu Dhabi utility authorities.'),
  overviewAr: seoOverviewAr('BS EN ISO 1452-2:2009', 'المعيار الأوروبي الحديث لأنظمة أنابيب الضغط PVC-U، هذه الأنابيب بمقاسات إنشية متوفرة من ½″ إلى 12″ بفئات ضغط PN 9 و PN 12 و PN 15 — مواصفة شائعة لدى بلدية دبي وهيئات المرافق في أبوظبي.'),
    overviewFr: seoOverviewFr('BS EN ISO 1452-2:2009', 'Norme européenne moderne pour les systèmes de canalisations sous pression PVC-U, ces canalisations de taille impériale sont disponibles de ½″ à 12″ avec les classes de pression PN 9, PN 12 et PN 15 — largement spécifiées par la municipalité de Dubai et les autorités des services publics d\'Abu Dhabi.'),
  features: HP_FEATURES, featuresAr: HP_FEATURESAr,
    featuresFr: HP_FEATURESFr,
    applications: HP_APPLICATIONS, applicationsAr: HP_APPLICATIONSAr,
    applicationsFr: HP_APPLICATIONSFr,
    pipesTables: [{
    id: 'pvcHpPipesBsEnIso14522-pipes',
    title: 'Inch size Pressure Pipes', titleFr: 'Pouces taille TUYAUX SOUS PRESSION',
    columns: [
      { key: 'hp_size', label: 'Size', labelFr: 'Taille' },
      { key: 'hp_mean_outside_dia_min', label: 'Min', labelFr: 'Min', superGroupLabel: 'Mean Outside Dia.', superGroupLabelFr: 'Diam. Ext. Moyen', superColSpan: 2 },
      { key: 'hp_mean_outside_dia_max', label: 'Max', labelFr: 'Max', superGroupLabel: 'Mean Outside Dia.', superGroupLabelFr: 'Diam. Ext. Moyen' },
      { key: 'hp_wall_thickness_mm_pn_15_class_e_min', label: 'Min', labelFr: 'Min', groupLabel: 'PN-15(CLASS-E)', groupLabelFr: 'PN-15(CLASSE-E)', colSpan: 2, superGroupLabel: 'Wall Thickness', superGroupLabelFr: 'Epaisseur de Paroi', superColSpan: 2 },
      { key: 'hp_wall_thickness_mm_pn_15_class_e_max', label: 'Max', labelFr: 'Max', groupLabel: 'PN-15(CLASS-E)', groupLabelFr: 'PN-15(CLASSE-E)', superGroupLabel: 'Wall Thickness', superGroupLabelFr: 'Epaisseur de Paroi' },
      { key: 'hp_wall_thickness_mm_pn_12_class_d_min', label: 'Min', labelFr: 'Min', groupLabel: 'PN-12(CLASS-D)', groupLabelFr: 'PN-12(CLASSE-D)', colSpan: 2, superGroupLabel: 'Wall Thickness', superGroupLabelFr: 'Epaisseur de Paroi', superColSpan: 2 },
      { key: 'hp_wall_thickness_mm_pn_12_class_d_max', label: 'Max', labelFr: 'Max', groupLabel: 'PN-12(CLASS-D)', groupLabelFr: 'PN-12(CLASSE-D)', superGroupLabel: 'Wall Thickness', superGroupLabelFr: 'Epaisseur de Paroi' },
      { key: 'hp_wall_thickness_mm_pn_9_class_c_min', label: 'Min', labelFr: 'Min', groupLabel: 'PN-9(CLASS-C)', groupLabelFr: 'PN-9(CLASSE-C)', colSpan: 2, superGroupLabel: 'Wall Thickness', superGroupLabelFr: 'Epaisseur de Paroi', superColSpan: 2 },
      { key: 'hp_wall_thickness_mm_pn_9_class_c_max', label: 'Max', labelFr: 'Max', groupLabel: 'PN-9(CLASS-C)', groupLabelFr: 'PN-9(CLASSE-C)', superGroupLabel: 'Wall Thickness', superGroupLabelFr: 'Epaisseur de Paroi' }
    ],
    rows: [
      { hp_size: '1/2"', hp_mean_outside_dia_min: '21.2', hp_mean_outside_dia_max: '21.5', hp_wall_thickness_mm_pn_15_class_e_min: '1.7', hp_wall_thickness_mm_pn_15_class_e_max: '2.1', hp_wall_thickness_mm_pn_12_class_d_min: null, hp_wall_thickness_mm_pn_12_class_d_max: null, hp_wall_thickness_mm_pn_9_class_c_min: null, hp_wall_thickness_mm_pn_9_class_c_max: null },
      { hp_size: '3/4"', hp_mean_outside_dia_min: '26.6', hp_mean_outside_dia_max: '26.9', hp_wall_thickness_mm_pn_15_class_e_min: '1.9', hp_wall_thickness_mm_pn_15_class_e_max: '2.5', hp_wall_thickness_mm_pn_12_class_d_min: null, hp_wall_thickness_mm_pn_12_class_d_max: null, hp_wall_thickness_mm_pn_9_class_c_min: null, hp_wall_thickness_mm_pn_9_class_c_max: null },
      { hp_size: '1"', hp_mean_outside_dia_min: '33.4', hp_mean_outside_dia_max: '33.7', hp_wall_thickness_mm_pn_15_class_e_min: '2.2', hp_wall_thickness_mm_pn_15_class_e_max: '2.8', hp_wall_thickness_mm_pn_12_class_d_min: null, hp_wall_thickness_mm_pn_12_class_d_max: null, hp_wall_thickness_mm_pn_9_class_c_min: null, hp_wall_thickness_mm_pn_9_class_c_max: null },
      { hp_size: '1 1/4"', hp_mean_outside_dia_min: '42.1', hp_mean_outside_dia_max: '42.4', hp_wall_thickness_mm_pn_15_class_e_min: '2.7', hp_wall_thickness_mm_pn_15_class_e_max: '3.3', hp_wall_thickness_mm_pn_12_class_d_min: '2.2', hp_wall_thickness_mm_pn_12_class_d_max: '2.7', hp_wall_thickness_mm_pn_9_class_c_min: null, hp_wall_thickness_mm_pn_9_class_c_max: null },
      { hp_size: '1 1/2"', hp_mean_outside_dia_min: '48.1', hp_mean_outside_dia_max: '48.4', hp_wall_thickness_mm_pn_15_class_e_min: '3.1', hp_wall_thickness_mm_pn_15_class_e_max: '3.7', hp_wall_thickness_mm_pn_12_class_d_min: '2.5', hp_wall_thickness_mm_pn_12_class_d_max: '3.0', hp_wall_thickness_mm_pn_9_class_c_min: null, hp_wall_thickness_mm_pn_9_class_c_max: null },
      { hp_size: '2"', hp_mean_outside_dia_min: '60.2', hp_mean_outside_dia_max: '60.5', hp_wall_thickness_mm_pn_15_class_e_min: '3.9', hp_wall_thickness_mm_pn_15_class_e_max: '4.5', hp_wall_thickness_mm_pn_12_class_d_min: '3.1', hp_wall_thickness_mm_pn_12_class_d_max: '3.7', hp_wall_thickness_mm_pn_9_class_c_min: '2.5', hp_wall_thickness_mm_pn_9_class_c_max: '3.0' },
      { hp_size: '3"', hp_mean_outside_dia_min: '88.7', hp_mean_outside_dia_max: '89.1', hp_wall_thickness_mm_pn_15_class_e_min: '5.7', hp_wall_thickness_mm_pn_15_class_e_max: '6.6', hp_wall_thickness_mm_pn_12_class_d_min: '4.6', hp_wall_thickness_mm_pn_12_class_d_max: '5.3', hp_wall_thickness_mm_pn_9_class_c_min: '3.5', hp_wall_thickness_mm_pn_9_class_c_max: '4.1' },
      { hp_size: '4"', hp_mean_outside_dia_min: '114.1', hp_mean_outside_dia_max: '114.5', hp_wall_thickness_mm_pn_15_class_e_min: '7.3', hp_wall_thickness_mm_pn_15_class_e_max: '8.4', hp_wall_thickness_mm_pn_12_class_d_min: '6.0', hp_wall_thickness_mm_pn_12_class_d_max: '6.9', hp_wall_thickness_mm_pn_9_class_c_min: '4.5', hp_wall_thickness_mm_pn_9_class_c_max: '5.2' },
      { hp_size: '6"', hp_mean_outside_dia_min: '168.0', hp_mean_outside_dia_max: '168.5', hp_wall_thickness_mm_pn_15_class_e_min: '10.8', hp_wall_thickness_mm_pn_15_class_e_max: '12.5', hp_wall_thickness_mm_pn_12_class_d_min: '8.8', hp_wall_thickness_mm_pn_12_class_d_max: '10.2', hp_wall_thickness_mm_pn_9_class_c_min: '6.6', hp_wall_thickness_mm_pn_9_class_c_max: '7.6' },
      { hp_size: '8"', hp_mean_outside_dia_min: '218.8', hp_mean_outside_dia_max: '219.4', hp_wall_thickness_mm_pn_15_class_e_min: '12.6', hp_wall_thickness_mm_pn_15_class_e_max: '14.5', hp_wall_thickness_mm_pn_12_class_d_min: '10.3', hp_wall_thickness_mm_pn_12_class_d_max: '11.9', hp_wall_thickness_mm_pn_9_class_c_min: '7.8', hp_wall_thickness_mm_pn_9_class_c_max: '9.0' },
      { hp_size: '10"', hp_mean_outside_dia_min: '272.6', hp_mean_outside_dia_max: '273.4', hp_wall_thickness_mm_pn_15_class_e_min: '15.7', hp_wall_thickness_mm_pn_15_class_e_max: '18.1', hp_wall_thickness_mm_pn_12_class_d_min: '12.8', hp_wall_thickness_mm_pn_12_class_d_max: '14.8', hp_wall_thickness_mm_pn_9_class_c_min: '9.7', hp_wall_thickness_mm_pn_9_class_c_max: '11.2' },
      { hp_size: '12"', hp_mean_outside_dia_min: '323.4', hp_mean_outside_dia_max: '324.3', hp_wall_thickness_mm_pn_15_class_e_min: '18.7', hp_wall_thickness_mm_pn_15_class_e_max: '21.6', hp_wall_thickness_mm_pn_12_class_d_min: '15.2', hp_wall_thickness_mm_pn_12_class_d_max: '17.5', hp_wall_thickness_mm_pn_9_class_c_min: '11.5', hp_wall_thickness_mm_pn_9_class_c_max: '13.3' }
    ]
  }],
  fittings: [],
  downloads: [{ label: 'PVC High Pressure Pipes Catalogue (PDF)', labelAr: 'كتالوج أنابيب PVC عالية الضغط (PDF)', labelFr: 'Catalogue Tuyaux PVC Haute Pression (PDF)', href: '/pdfs/UPVC%20PRESSURE%20PIPES.pdf' }],
  dosDonts: HP_DOS_DONTS, dosDontsAr: HP_DOS_DONTSAr,
    dosDontsFr: HP_DOS_DONTSFr
};


// ═══════════════════════════════════════════════════════════════════════════════
// 4) BS 3505:1986 — Cold Potable Water
// ═══════════════════════════════════════════════════════════════════════════════

export const pvcHpPipesBs3505: ProductDetailConfig = {
  slug: 'pvc-hp-pipes-bs-3505',
  categorySlug: 'pvc-high-pressure-pipes',
  title: 'PVC High Pressure Pipes BS 3505:1986 — Cold Potable Water',
  titleAr: 'أنابيب الضغط العالي PVC وفق BS 3505:1986 — مياه الشرب الباردة',
    titleFr: `PVC Tuyaux haute pression BS 3505:1986 — Eau potable froide`,
    shortDescription: 'PVC-U pressure pipes to BS 3505:1986 for cold potable water — ½″ to 12″.',
  shortDescriptionAr: 'أنابيب ضغط PVC-U وفق BS 3505:1986 لمياه الشرب الباردة — ½″ إلى 12″.',
    shortDescriptionFr: `Tuyaux sous pression PVC-U vers BS 3505:1986 pour l'eau potable froide — ½″ vers 12″.`,
    overview: seoOverview('BS 3505:1986', 'Specifically designed and approved for cold potable water supply, these imperial-sized pipes meet the stringent hygiene and safety requirements demanded by water authorities across the UAE and GCC. Available from ½″ to 12″ with pressure classes up to PN 15 (Class E).'),
  overviewAr: seoOverviewAr('BS 3505:1986', 'مصممة ومعتمدة خصيصاً لإمداد مياه الشرب الباردة، تلبي هذه الأنابيب بمقاسات إنشية متطلبات النظافة والسلامة الصارمة لهيئات المياه في الإمارات والخليج. متوفرة من ½″ إلى 12″ بفئات ضغط حتى PN 15 (فئة E).'),
    overviewFr: seoOverviewFr('BS 3505:1986', 'Spécialement conçus et approuvés pour l\'approvisionnement en eau potable froide, ces tuyaux de taille impériale répondent aux exigences strictes d\'hygiène et de sécurité exigées par les autorités des eaux des UAE et GCC. Disponible de ½″ à 12″ avec des classes de pression jusqu\'à PN 15 (Classe E).'),
  features: HP_FEATURES, featuresAr: HP_FEATURESAr,
    featuresFr: HP_FEATURESFr,
    applications: HP_APPLICATIONS, applicationsAr: HP_APPLICATIONSAr,
    applicationsFr: HP_APPLICATIONSFr,
    pipesTables: [{
    id: 'pvcHpPipesBs3505-pipes',
    title: 'Inch size Pressure Pipes', titleFr: 'Pouces taille TUYAUX SOUS PRESSION',
    columns: [
      { key: 'hp_size', label: 'Size', labelFr: 'Taille' },
      { key: 'hp_mean_outside_dia_min', label: 'Min', labelFr: 'Min', superGroupLabel: 'Mean Outside Dia.', superGroupLabelFr: 'Diam. Ext. Moyen', superColSpan: 2 },
      { key: 'hp_mean_outside_dia_max', label: 'Max', labelFr: 'Max', superGroupLabel: 'Mean Outside Dia.', superGroupLabelFr: 'Diam. Ext. Moyen' },
      { key: 'hp_wall_thickness_mm_pn_15_class_e_min', label: 'Min', labelFr: 'Min', groupLabel: 'PN-15(CLASS-E)', groupLabelFr: 'PN-15(CLASSE-E)', colSpan: 2, superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi', superColSpan: 6 },
      { key: 'hp_wall_thickness_mm_pn_15_class_e_max', label: 'Max', labelFr: 'Max', groupLabel: 'PN-15(CLASS-E)', groupLabelFr: 'PN-15(CLASSE-E)', superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
      { key: 'hp_wall_thickness_mm_pn_12_class_d_min', label: 'Min', labelFr: 'Min', groupLabel: 'PN-12(CLASS-D)', groupLabelFr: 'PN-12(CLASSE-D)', colSpan: 2, superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
      { key: 'hp_wall_thickness_mm_pn_12_class_d_max', label: 'Max', labelFr: 'Max', groupLabel: 'PN-12(CLASS-D)', groupLabelFr: 'PN-12(CLASSE-D)', superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
      { key: 'hp_wall_thickness_mm_pn_9_class_c_min', label: 'Min', labelFr: 'Min', groupLabel: 'PN-9(CLASS-C)', groupLabelFr: 'PN-9(CLASSE-C)', colSpan: 2, superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
      { key: 'hp_wall_thickness_mm_pn_9_class_c_max', label: 'Max', labelFr: 'Max', groupLabel: 'PN-9(CLASS-C)', groupLabelFr: 'PN-9(CLASSE-C)', superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' }
    ],
    rows: [
      { hp_size: '1/2"', hp_mean_outside_dia_min: '21.2', hp_mean_outside_dia_max: '21.5', hp_wall_thickness_mm_pn_15_class_e_min: '1.7', hp_wall_thickness_mm_pn_15_class_e_max: '2.1', hp_wall_thickness_mm_pn_12_class_d_min: null, hp_wall_thickness_mm_pn_12_class_d_max: null, hp_wall_thickness_mm_pn_9_class_c_min: null, hp_wall_thickness_mm_pn_9_class_c_max: null },
      { hp_size: '3/4"', hp_mean_outside_dia_min: '26.6', hp_mean_outside_dia_max: '26.9', hp_wall_thickness_mm_pn_15_class_e_min: '1.9', hp_wall_thickness_mm_pn_15_class_e_max: '2.5', hp_wall_thickness_mm_pn_12_class_d_min: null, hp_wall_thickness_mm_pn_12_class_d_max: null, hp_wall_thickness_mm_pn_9_class_c_min: null, hp_wall_thickness_mm_pn_9_class_c_max: null },
      { hp_size: '1"', hp_mean_outside_dia_min: '33.4', hp_mean_outside_dia_max: '33.7', hp_wall_thickness_mm_pn_15_class_e_min: '2.2', hp_wall_thickness_mm_pn_15_class_e_max: '2.8', hp_wall_thickness_mm_pn_12_class_d_min: null, hp_wall_thickness_mm_pn_12_class_d_max: null, hp_wall_thickness_mm_pn_9_class_c_min: null, hp_wall_thickness_mm_pn_9_class_c_max: null },
      { hp_size: '1 1/4"', hp_mean_outside_dia_min: '42.1', hp_mean_outside_dia_max: '42.4', hp_wall_thickness_mm_pn_15_class_e_min: '2.7', hp_wall_thickness_mm_pn_15_class_e_max: '3.3', hp_wall_thickness_mm_pn_12_class_d_min: '2.2', hp_wall_thickness_mm_pn_12_class_d_max: '2.7', hp_wall_thickness_mm_pn_9_class_c_min: null, hp_wall_thickness_mm_pn_9_class_c_max: null },
      { hp_size: '1 1/2"', hp_mean_outside_dia_min: '48.1', hp_mean_outside_dia_max: '48.4', hp_wall_thickness_mm_pn_15_class_e_min: '3.1', hp_wall_thickness_mm_pn_15_class_e_max: '3.7', hp_wall_thickness_mm_pn_12_class_d_min: '2.5', hp_wall_thickness_mm_pn_12_class_d_max: '3.0', hp_wall_thickness_mm_pn_9_class_c_min: null, hp_wall_thickness_mm_pn_9_class_c_max: null },
      { hp_size: '2"', hp_mean_outside_dia_min: '60.2', hp_mean_outside_dia_max: '60.5', hp_wall_thickness_mm_pn_15_class_e_min: '3.9', hp_wall_thickness_mm_pn_15_class_e_max: '4.5', hp_wall_thickness_mm_pn_12_class_d_min: '3.1', hp_wall_thickness_mm_pn_12_class_d_max: '3.7', hp_wall_thickness_mm_pn_9_class_c_min: '2.5', hp_wall_thickness_mm_pn_9_class_c_max: '3.0' },
      { hp_size: '3"', hp_mean_outside_dia_min: '88.7', hp_mean_outside_dia_max: '89.1', hp_wall_thickness_mm_pn_15_class_e_min: '5.7', hp_wall_thickness_mm_pn_15_class_e_max: '6.6', hp_wall_thickness_mm_pn_12_class_d_min: '4.6', hp_wall_thickness_mm_pn_12_class_d_max: '5.3', hp_wall_thickness_mm_pn_9_class_c_min: '3.5', hp_wall_thickness_mm_pn_9_class_c_max: '4.1' },
      { hp_size: '4"', hp_mean_outside_dia_min: '114.1', hp_mean_outside_dia_max: '114.5', hp_wall_thickness_mm_pn_15_class_e_min: '7.3', hp_wall_thickness_mm_pn_15_class_e_max: '8.4', hp_wall_thickness_mm_pn_12_class_d_min: '6.0', hp_wall_thickness_mm_pn_12_class_d_max: '6.9', hp_wall_thickness_mm_pn_9_class_c_min: '4.5', hp_wall_thickness_mm_pn_9_class_c_max: '5.2' },
      { hp_size: '6"', hp_mean_outside_dia_min: '168.0', hp_mean_outside_dia_max: '168.5', hp_wall_thickness_mm_pn_15_class_e_min: '10.8', hp_wall_thickness_mm_pn_15_class_e_max: '12.5', hp_wall_thickness_mm_pn_12_class_d_min: '8.8', hp_wall_thickness_mm_pn_12_class_d_max: '10.2', hp_wall_thickness_mm_pn_9_class_c_min: '6.6', hp_wall_thickness_mm_pn_9_class_c_max: '7.6' },
      { hp_size: '8"', hp_mean_outside_dia_min: '218.8', hp_mean_outside_dia_max: '219.4', hp_wall_thickness_mm_pn_15_class_e_min: '12.6', hp_wall_thickness_mm_pn_15_class_e_max: '14.5', hp_wall_thickness_mm_pn_12_class_d_min: '10.3', hp_wall_thickness_mm_pn_12_class_d_max: '11.9', hp_wall_thickness_mm_pn_9_class_c_min: '7.8', hp_wall_thickness_mm_pn_9_class_c_max: '9.0' },
      { hp_size: '10"', hp_mean_outside_dia_min: '272.6', hp_mean_outside_dia_max: '273.4', hp_wall_thickness_mm_pn_15_class_e_min: '15.7', hp_wall_thickness_mm_pn_15_class_e_max: '18.1', hp_wall_thickness_mm_pn_12_class_d_min: '12.8', hp_wall_thickness_mm_pn_12_class_d_max: '14.8', hp_wall_thickness_mm_pn_9_class_c_min: '9.7', hp_wall_thickness_mm_pn_9_class_c_max: '11.2' },
      { hp_size: '12"', hp_mean_outside_dia_min: '323.4', hp_mean_outside_dia_max: '324.3', hp_wall_thickness_mm_pn_15_class_e_min: '18.7', hp_wall_thickness_mm_pn_15_class_e_max: '21.6', hp_wall_thickness_mm_pn_12_class_d_min: '15.2', hp_wall_thickness_mm_pn_12_class_d_max: '17.5', hp_wall_thickness_mm_pn_9_class_c_min: '11.5', hp_wall_thickness_mm_pn_9_class_c_max: '13.3' }
    ]
  }],
  fittings: [],
  downloads: [{ label: 'PVC High Pressure Pipes Catalogue (PDF)', labelAr: 'كتالوج أنابيب PVC عالية الضغط (PDF)', labelFr: 'Catalogue Tuyaux PVC Haute Pression (PDF)', href: '/pdfs/UPVC%20PRESSURE%20PIPES.pdf' }],
  dosDonts: HP_DOS_DONTS, dosDontsAr: HP_DOS_DONTSAr,
    dosDontsFr: HP_DOS_DONTSFr
};


// ═══════════════════════════════════════════════════════════════════════════════
// 5) BS 3506:1969 — Industrial Uses
// ═══════════════════════════════════════════════════════════════════════════════

export const pvcHpPipesBs3506: ProductDetailConfig = {
  slug: 'pvc-hp-pipes-bs-3506',
  categorySlug: 'pvc-high-pressure-pipes',
  title: 'PVC High Pressure Pipes BS 3506:1969 — Industrial Uses',
  titleAr: 'أنابيب الضغط العالي PVC وفق BS 3506:1969 — الاستخدامات الصناعية',
    titleFr: `PVC Tuyaux haute pression BS 3506:1969 — Utilisations industriellesdu`,
    shortDescription: 'PVC-U pressure pipes to BS 3506:1969 for industrial applications — ½″ to 12″.',
  shortDescriptionAr: 'أنابيب ضغط PVC-U وفق BS 3506:1969 للتطبيقات الصناعية — ½″ إلى 12″.',
    shortDescriptionFr: `Tuyaux sous pression PVC-U vers BS 3506:1969 pour les applications industrielles du – ½″ vers 12″.`,
    overview: seoOverview('BS 3506:1969', 'Engineered for industrial fluid transport, chemical processing plants, and non-potable water systems, these pipes withstand aggressive media commonly encountered in UAE industrial zones such as JAFZA, KIZAD, and Ras Al Khaimah. Available from ½″ to 12″ with classes up to PN 15.'),
  overviewAr: seoOverviewAr('BS 3506:1969', 'مصممة لنقل السوائل الصناعية ومحطات المعالجة الكيميائية وأنظمة المياه غير الصالحة للشرب، تتحمل هذه الأنابيب الوسائط العدوانية الشائعة في المناطق الصناعية الإماراتية مثل جافزا وكيزاد ورأس الخيمة. متوفرة من ½″ إلى 12″ بفئات حتى PN 15.'),
    overviewFr: seoOverviewFr('BS 3506:1969', 'Conçus pour le transport de fluides industriels, les usines de traitement chimique et les systèmes d\'eau non potable, ces tuyaux résistent aux fluides agressifs couramment rencontrés dans les zones industrielles UAE telles que JAFZA, KIZAD et Ras Al Khaimah. Disponible de ½″ à 12″ avec des classes jusqu\'à PN 15.'),
  features: HP_FEATURES, featuresAr: HP_FEATURESAr,
    featuresFr: HP_FEATURESFr,
    applications: HP_APPLICATIONS, applicationsAr: HP_APPLICATIONSAr,
    applicationsFr: HP_APPLICATIONSFr,
    pipesTables: [{
    id: 'pvcHpPipesBs3506-pipes',
    title: 'Inch size Pressure Pipes', titleFr: 'Pouces taille TUYAUX SOUS PRESSION',
    columns: [
      { key: 'hp_nominal_size', label: 'Nominal Size', labelFr: 'Taille Nominale' },
      { key: 'hp_mean_outside_dia_min', label: 'Min', labelFr: 'Min', superGroupLabel: 'Mean Outside Dia.', superGroupLabelFr: 'Diam. Ext. Moyen', superColSpan: 2 },
      { key: 'hp_mean_outside_dia_max', label: 'Max', labelFr: 'Max', superGroupLabel: 'Mean Outside Dia.', superGroupLabelFr: 'Diam. Ext. Moyen' },
      { key: 'hp_nominal_wall_thickness_pn_15_class_e_min', label: 'Min', labelFr: 'Min', groupLabel: 'PN-15(CLASS-E)', groupLabelFr: 'PN-15(CLASSE-E)', colSpan: 2, superGroupLabel: 'Nominal Wall Thickness', superGroupLabelFr: 'Epaisseur Nominale de Paroi', superColSpan: 10 },
      { key: 'hp_nominal_wall_thickness_pn_15_class_e_max', label: 'Max', labelFr: 'Max', groupLabel: 'PN-15(CLASS-E)', groupLabelFr: 'PN-15(CLASSE-E)', superGroupLabel: 'Nominal Wall Thickness', superGroupLabelFr: 'Epaisseur Nominale de Paroi' },
      { key: 'hp_nominal_wall_thickness_pn_12_class_d_min', label: 'Min', labelFr: 'Min', groupLabel: 'PN-12(CLASS-D)', groupLabelFr: 'PN-12(CLASSE-D)', colSpan: 2, superGroupLabel: 'Nominal Wall Thickness', superGroupLabelFr: 'Epaisseur Nominale de Paroi' },
      { key: 'hp_nominal_wall_thickness_pn_12_class_d_max', label: 'Max', labelFr: 'Max', groupLabel: 'PN-12(CLASS-D)', groupLabelFr: 'PN-12(CLASSE-D)', superGroupLabel: 'Nominal Wall Thickness', superGroupLabelFr: 'Epaisseur Nominale de Paroi' },
      { key: 'hp_nominal_wall_thickness_pn_9_class_c_min', label: 'Min', labelFr: 'Min', groupLabel: 'PN-9(CLASS-C)', groupLabelFr: 'PN-9(CLASSE-C)', colSpan: 2, superGroupLabel: 'Nominal Wall Thickness', superGroupLabelFr: 'Epaisseur Nominale de Paroi' },
      { key: 'hp_nominal_wall_thickness_pn_9_class_c_max', label: 'Max', labelFr: 'Max', groupLabel: 'PN-9(CLASS-C)', groupLabelFr: 'PN-9(CLASSE-C)', superGroupLabel: 'Nominal Wall Thickness', superGroupLabelFr: 'Epaisseur Nominale de Paroi' },
      { key: 'hp_nominal_wall_thickness_pn_6_class_b_min', label: 'Min', labelFr: 'Min', groupLabel: 'PN-6(CLASS-B)', groupLabelFr: 'PN-6(CLASSE-B)', colSpan: 2, superGroupLabel: 'Nominal Wall Thickness', superGroupLabelFr: 'Epaisseur Nominale de Paroi' },
      { key: 'hp_nominal_wall_thickness_pn_6_class_b_max', label: 'Max', labelFr: 'Max', groupLabel: 'PN-6(CLASS-B)', groupLabelFr: 'PN-6(CLASSE-B)', superGroupLabel: 'Nominal Wall Thickness', superGroupLabelFr: 'Epaisseur Nominale de Paroi' },
      { key: 'hp_nominal_wall_thickness_non_pressure_class_o_min', label: 'Min', labelFr: 'Min', groupLabel: 'Non Pressure (CLASS-O)', groupLabelFr: 'Sans Pression (CLASSE-O)', colSpan: 2, superGroupLabel: 'Nominal Wall Thickness', superGroupLabelFr: 'Epaisseur Nominale de Paroi' },
      { key: 'hp_nominal_wall_thickness_non_pressure_class_o_max', label: 'Max', labelFr: 'Max', groupLabel: 'Non Pressure (CLASS-O)', groupLabelFr: 'Sans Pression (CLASSE-O)', superGroupLabel: 'Nominal Wall Thickness', superGroupLabelFr: 'Epaisseur Nominale de Paroi' }
    ],
    rows: [
      { hp_nominal_size: '1/2"', hp_mean_outside_dia_min: '21.2', hp_mean_outside_dia_max: '21.5', hp_nominal_wall_thickness_pn_15_class_e_min: '1.7', hp_nominal_wall_thickness_pn_15_class_e_max: '2.1', hp_nominal_wall_thickness_pn_12_class_d_min: null, hp_nominal_wall_thickness_pn_12_class_d_max: null, hp_nominal_wall_thickness_pn_9_class_c_min: null, hp_nominal_wall_thickness_pn_9_class_c_max: null, hp_nominal_wall_thickness_pn_6_class_b_min: null, hp_nominal_wall_thickness_pn_6_class_b_max: null, hp_nominal_wall_thickness_non_pressure_class_o_min: null, hp_nominal_wall_thickness_non_pressure_class_o_max: null },
      { hp_nominal_size: '3/4"', hp_mean_outside_dia_min: '26.6', hp_mean_outside_dia_max: '26.9', hp_nominal_wall_thickness_pn_15_class_e_min: '1.9', hp_nominal_wall_thickness_pn_15_class_e_max: '2.5', hp_nominal_wall_thickness_pn_12_class_d_min: null, hp_nominal_wall_thickness_pn_12_class_d_max: null, hp_nominal_wall_thickness_pn_9_class_c_min: null, hp_nominal_wall_thickness_pn_9_class_c_max: null, hp_nominal_wall_thickness_pn_6_class_b_min: null, hp_nominal_wall_thickness_pn_6_class_b_max: null, hp_nominal_wall_thickness_non_pressure_class_o_min: null, hp_nominal_wall_thickness_non_pressure_class_o_max: null },
      { hp_nominal_size: '1"', hp_mean_outside_dia_min: '33.4', hp_mean_outside_dia_max: '33.7', hp_nominal_wall_thickness_pn_15_class_e_min: '2.2', hp_nominal_wall_thickness_pn_15_class_e_max: '2.8', hp_nominal_wall_thickness_pn_12_class_d_min: null, hp_nominal_wall_thickness_pn_12_class_d_max: null, hp_nominal_wall_thickness_pn_9_class_c_min: null, hp_nominal_wall_thickness_pn_9_class_c_max: null, hp_nominal_wall_thickness_pn_6_class_b_min: null, hp_nominal_wall_thickness_pn_6_class_b_max: null, hp_nominal_wall_thickness_non_pressure_class_o_min: null, hp_nominal_wall_thickness_non_pressure_class_o_max: null },
      { hp_nominal_size: '1 1/4"', hp_mean_outside_dia_min: '42.1', hp_mean_outside_dia_max: '42.4', hp_nominal_wall_thickness_pn_15_class_e_min: '2.7', hp_nominal_wall_thickness_pn_15_class_e_max: '3.3', hp_nominal_wall_thickness_pn_12_class_d_min: '2.2', hp_nominal_wall_thickness_pn_12_class_d_max: '2.7', hp_nominal_wall_thickness_pn_9_class_c_min: null, hp_nominal_wall_thickness_pn_9_class_c_max: null, hp_nominal_wall_thickness_pn_6_class_b_min: null, hp_nominal_wall_thickness_pn_6_class_b_max: null, hp_nominal_wall_thickness_non_pressure_class_o_min: '1.8', hp_nominal_wall_thickness_non_pressure_class_o_max: '2.2' },
      { hp_nominal_size: '1 1/2"', hp_mean_outside_dia_min: '48.1', hp_mean_outside_dia_max: '48.4', hp_nominal_wall_thickness_pn_15_class_e_min: '3.1', hp_nominal_wall_thickness_pn_15_class_e_max: '3.7', hp_nominal_wall_thickness_pn_12_class_d_min: '2.5', hp_nominal_wall_thickness_pn_12_class_d_max: '3.0', hp_nominal_wall_thickness_pn_9_class_c_min: null, hp_nominal_wall_thickness_pn_9_class_c_max: null, hp_nominal_wall_thickness_pn_6_class_b_min: null, hp_nominal_wall_thickness_pn_6_class_b_max: null, hp_nominal_wall_thickness_non_pressure_class_o_min: '1.8', hp_nominal_wall_thickness_non_pressure_class_o_max: '2.2' },
      { hp_nominal_size: '2"', hp_mean_outside_dia_min: '60.2', hp_mean_outside_dia_max: '60.5', hp_nominal_wall_thickness_pn_15_class_e_min: '3.9', hp_nominal_wall_thickness_pn_15_class_e_max: '4.5', hp_nominal_wall_thickness_pn_12_class_d_min: '3.1', hp_nominal_wall_thickness_pn_12_class_d_max: '3.7', hp_nominal_wall_thickness_pn_9_class_c_min: '2.5', hp_nominal_wall_thickness_pn_9_class_c_max: '3.0', hp_nominal_wall_thickness_pn_6_class_b_min: null, hp_nominal_wall_thickness_pn_6_class_b_max: null, hp_nominal_wall_thickness_non_pressure_class_o_min: '1.8', hp_nominal_wall_thickness_non_pressure_class_o_max: '2.2' },
      { hp_nominal_size: '3"', hp_mean_outside_dia_min: '88.7', hp_mean_outside_dia_max: '89.1', hp_nominal_wall_thickness_pn_15_class_e_min: '5.7', hp_nominal_wall_thickness_pn_15_class_e_max: '6.6', hp_nominal_wall_thickness_pn_12_class_d_min: '4.6', hp_nominal_wall_thickness_pn_12_class_d_max: '5.3', hp_nominal_wall_thickness_pn_9_class_c_min: '3.5', hp_nominal_wall_thickness_pn_9_class_c_max: '4.1', hp_nominal_wall_thickness_pn_6_class_b_min: '2.9', hp_nominal_wall_thickness_pn_6_class_b_max: '3.4', hp_nominal_wall_thickness_non_pressure_class_o_min: '1.8', hp_nominal_wall_thickness_non_pressure_class_o_max: '2.2' },
      { hp_nominal_size: '4"', hp_mean_outside_dia_min: '114.1', hp_mean_outside_dia_max: '114.5', hp_nominal_wall_thickness_pn_15_class_e_min: '7.3', hp_nominal_wall_thickness_pn_15_class_e_max: '8.4', hp_nominal_wall_thickness_pn_12_class_d_min: '6.0', hp_nominal_wall_thickness_pn_12_class_d_max: '6.9', hp_nominal_wall_thickness_pn_9_class_c_min: '4.5', hp_nominal_wall_thickness_pn_9_class_c_max: '5.2', hp_nominal_wall_thickness_pn_6_class_b_min: '3.4', hp_nominal_wall_thickness_pn_6_class_b_max: '4.0', hp_nominal_wall_thickness_non_pressure_class_o_min: '2.3', hp_nominal_wall_thickness_non_pressure_class_o_max: '3.1' },
      { hp_nominal_size: '6"', hp_mean_outside_dia_min: '168.0', hp_mean_outside_dia_max: '168.5', hp_nominal_wall_thickness_pn_15_class_e_min: '10.8', hp_nominal_wall_thickness_pn_15_class_e_max: '12.5', hp_nominal_wall_thickness_pn_12_class_d_min: '8.8', hp_nominal_wall_thickness_pn_12_class_d_max: '10.2', hp_nominal_wall_thickness_pn_9_class_c_min: '6.6', hp_nominal_wall_thickness_pn_9_class_c_max: '7.6', hp_nominal_wall_thickness_pn_6_class_b_min: '4.5', hp_nominal_wall_thickness_pn_6_class_b_max: '5.2', hp_nominal_wall_thickness_non_pressure_class_o_min: '3.1', hp_nominal_wall_thickness_non_pressure_class_o_max: '3.7' },
      { hp_nominal_size: '8"', hp_mean_outside_dia_min: '218.8', hp_mean_outside_dia_max: '219.4', hp_nominal_wall_thickness_pn_15_class_e_min: '12.6', hp_nominal_wall_thickness_pn_15_class_e_max: '14.5', hp_nominal_wall_thickness_pn_12_class_d_min: '10.3', hp_nominal_wall_thickness_pn_12_class_d_max: '11.9', hp_nominal_wall_thickness_pn_9_class_c_min: '7.8', hp_nominal_wall_thickness_pn_9_class_c_max: '9.0', hp_nominal_wall_thickness_pn_6_class_b_min: '5.3', hp_nominal_wall_thickness_pn_6_class_b_max: '6.1', hp_nominal_wall_thickness_non_pressure_class_o_min: '3.1', hp_nominal_wall_thickness_non_pressure_class_o_max: '3.7' },
      { hp_nominal_size: '10"', hp_mean_outside_dia_min: '272.6', hp_mean_outside_dia_max: '273.4', hp_nominal_wall_thickness_pn_15_class_e_min: '15.7', hp_nominal_wall_thickness_pn_15_class_e_max: '18.1', hp_nominal_wall_thickness_pn_12_class_d_min: '12.8', hp_nominal_wall_thickness_pn_12_class_d_max: '14.8', hp_nominal_wall_thickness_pn_9_class_c_min: '9.7', hp_nominal_wall_thickness_pn_9_class_c_max: '11.2', hp_nominal_wall_thickness_pn_6_class_b_min: '6.6', hp_nominal_wall_thickness_pn_6_class_b_max: '7.6', hp_nominal_wall_thickness_non_pressure_class_o_min: '3.1', hp_nominal_wall_thickness_non_pressure_class_o_max: '3.7' },
      { hp_nominal_size: '12"', hp_mean_outside_dia_min: '323.4', hp_mean_outside_dia_max: '324.3', hp_nominal_wall_thickness_pn_15_class_e_min: '18.7', hp_nominal_wall_thickness_pn_15_class_e_max: '21.6', hp_nominal_wall_thickness_pn_12_class_d_min: '15.2', hp_nominal_wall_thickness_pn_12_class_d_max: '17.5', hp_nominal_wall_thickness_pn_9_class_c_min: '11.5', hp_nominal_wall_thickness_pn_9_class_c_max: '13.3', hp_nominal_wall_thickness_pn_6_class_b_min: '7.8', hp_nominal_wall_thickness_pn_6_class_b_max: '9.0', hp_nominal_wall_thickness_non_pressure_class_o_min: '3.1', hp_nominal_wall_thickness_non_pressure_class_o_max: '3.7' }
    ]
  }],
  fittings: [],
  downloads: [{ label: 'PVC High Pressure Pipes Catalogue (PDF)', labelAr: 'كتالوج أنابيب PVC عالية الضغط (PDF)', labelFr: 'Catalogue Tuyaux PVC Haute Pression (PDF)', href: '/pdfs/UPVC%20PRESSURE%20PIPES.pdf' }],
  dosDonts: HP_DOS_DONTS, dosDontsAr: HP_DOS_DONTSAr,
    dosDontsFr: HP_DOS_DONTSFr
};


// ═══════════════════════════════════════════════════════════════════════════════
// 6) ASTM D 1785 SCH 40 / SCH 80
// ═══════════════════════════════════════════════════════════════════════════════

export const pvcHpPipesAstmD1785: ProductDetailConfig = {
  slug: 'pvc-hp-pipes-astm-d1785',
  categorySlug: 'pvc-high-pressure-pipes',
  title: 'PVC High Pressure Pipes ASTM D 1785 SCH 40 / SCH 80',
  titleAr: 'أنابيب الضغط العالي PVC وفق ASTM D 1785 جدول 40 / جدول 80',
    titleFr: `PVC Tuyaux haute pression ASTM D 1785 SCH 40 / SCH 80`,
    shortDescription: 'PVC-U pressure pipes to ASTM D 1785 — Schedule 40 & Schedule 80.',
  shortDescriptionAr: 'أنابيب ضغط PVC-U وفق ASTM D 1785 — جدول 40 وجدول 80.',
    shortDescriptionFr: `Conduites sous pression PVC-U vers ASTM D 1785 — Schedule 40 et Schedule 80.`,
    overview: seoOverview('ASTM D 1785', 'The American standard for rigid PVC pressure pipes in Schedule 40 (standard wall) and Schedule 80 (extra heavy wall) ratings. Widely used across UAE industrial zones, oil & gas auxiliary systems, and American-specification projects throughout the GCC.'),
  overviewAr: seoOverviewAr('ASTM D 1785', 'المعيار الأمريكي لأنابيب الضغط PVC الصلبة بتصنيف جدول 40 (جدار قياسي) وجدول 80 (جدار سميك إضافي). مستخدمة على نطاق واسع في المناطق الصناعية الإماراتية والأنظمة المساعدة للنفط والغاز والمشاريع ذات المواصفات الأمريكية في الخليج.'),
    overviewFr: seoOverviewFr('ASTM D 1785', 'La norme américaine pour les conduites sous pression rigides PVC dans les classifications Schedule 40 (paroi standard) et Schedule 80 (paroi extra épaisse). Largement utilisé dans les zones industrielles UAE, les systèmes auxiliaires pétroliers et gaziers et les projets de spécifications américaines dans l\'ensemble du GCC.'),
  features: HP_FEATURES, featuresAr: HP_FEATURESAr,
    featuresFr: HP_FEATURESFr,
    applications: HP_APPLICATIONS, applicationsAr: HP_APPLICATIONSAr,
    applicationsFr: HP_APPLICATIONSFr,
    pipesTables: [{
    id: 'pvcHpPipesAstmD1785-pipes',
    title: 'Inch size Pressure Pipes', titleFr: 'Pouces taille TUYAUX SOUS PRESSION',
    columns: [
      { key: 'hp_nominal_size_inch', label: 'Nominal Size Inch', labelFr: 'Taille Nominale Inch' },
      { key: 'hp_min_outside_dia_mm', label: 'Min', labelFr: 'Min', superGroupLabel: 'Outside Dia. (mm)', superGroupLabelFr: 'Diam. Ext. (mm)', superColSpan: 2 },
      { key: 'hp_max_outside_dia_mm', label: 'Max', labelFr: 'Max', superGroupLabel: 'Outside Dia. (mm)', superGroupLabelFr: 'Diam. Ext. (mm)' },
      { key: 'hp_wall_thickness_mm_sch_40_min', label: 'Min', labelFr: 'Min', groupLabel: 'Wall Thickness (mm)', groupLabelFr: 'Epaisseur de Paroi (mm)', colSpan: 2, superGroupLabel: 'SCH 40', superGroupLabelFr: 'SCH 40', superColSpan: 3 },
      { key: 'hp_wall_thickness_mm_sch_40_max', label: 'Max', labelFr: 'Max', groupLabel: 'Wall Thickness (mm)', groupLabelFr: 'Epaisseur de Paroi (mm)', superGroupLabel: 'SCH 40', superGroupLabelFr: 'SCH 40' },
      { key: 'hp_pressure_rating_bar_sch_40', label: 'Pressure Rating (BAR)', labelFr: 'Pression Nominale (BAR)', superGroupLabel: 'SCH 40', superGroupLabelFr: 'SCH 40' },
      { key: 'hp_wall_thickness_mm_sch_80_min', label: 'Min', labelFr: 'Min', groupLabel: 'Wall Thickness (mm)', groupLabelFr: 'Epaisseur de Paroi (mm)', colSpan: 2, superGroupLabel: 'SCH 80', superGroupLabelFr: 'SCH 80', superColSpan: 3 },
      { key: 'hp_wall_thickness_mm_sch_80_max', label: 'Max', labelFr: 'Max', groupLabel: 'Wall Thickness (mm)', groupLabelFr: 'Epaisseur de Paroi (mm)', superGroupLabel: 'SCH 80', superGroupLabelFr: 'SCH 80' },
      { key: 'hp_pressure_rating_bar_sch_80', label: 'Pressure Rating (BAR)', labelFr: 'Pression Nominale (BAR)', superGroupLabel: 'SCH 80', superGroupLabelFr: 'SCH 80' }
    ],
    rows: [
      { hp_nominal_size_inch: '1/2"', hp_min_outside_dia_mm: '21.24', hp_max_outside_dia_mm: '21.44', hp_wall_thickness_mm_sch_40_min: '2.77', hp_wall_thickness_mm_sch_40_max: '3.28', hp_pressure_rating_bar_sch_40: '41.40', hp_wall_thickness_mm_sch_80_min: '3.73', hp_wall_thickness_mm_sch_80_max: '4.24', hp_pressure_rating_bar_sch_80: '58.60' },
      { hp_nominal_size_inch: '3/4"', hp_min_outside_dia_mm: '26.57', hp_max_outside_dia_mm: '26.77', hp_wall_thickness_mm_sch_40_min: '2.87', hp_wall_thickness_mm_sch_40_max: '3.38', hp_pressure_rating_bar_sch_40: '33.10', hp_wall_thickness_mm_sch_80_min: '3.91', hp_wall_thickness_mm_sch_80_max: '4.42', hp_pressure_rating_bar_sch_80: '47.60' },
      { hp_nominal_size_inch: '1"', hp_min_outside_dia_mm: '33.27', hp_max_outside_dia_mm: '33.53', hp_wall_thickness_mm_sch_40_min: '3.38', hp_wall_thickness_mm_sch_40_max: '3.89', hp_pressure_rating_bar_sch_40: '31.00', hp_wall_thickness_mm_sch_80_min: '4.55', hp_wall_thickness_mm_sch_80_max: '5.08', hp_pressure_rating_bar_sch_80: '43.40' },
      { hp_nominal_size_inch: '1 1/4"', hp_min_outside_dia_mm: '42.03', hp_max_outside_dia_mm: '42.29', hp_wall_thickness_mm_sch_40_min: '3.56', hp_wall_thickness_mm_sch_40_max: '4.07', hp_pressure_rating_bar_sch_40: '25.50', hp_wall_thickness_mm_sch_80_min: '4.85', hp_wall_thickness_mm_sch_80_max: '5.43', hp_pressure_rating_bar_sch_80: '35.90' },
      { hp_nominal_size_inch: '1 1/2"', hp_min_outside_dia_mm: '48.11', hp_max_outside_dia_mm: '48.41', hp_wall_thickness_mm_sch_40_min: '3.68', hp_wall_thickness_mm_sch_40_max: '4.19', hp_pressure_rating_bar_sch_40: '22.80', hp_wall_thickness_mm_sch_80_min: '5.08', hp_wall_thickness_mm_sch_80_max: '5.69', hp_pressure_rating_bar_sch_80: '32.40' },
      { hp_nominal_size_inch: '2"', hp_min_outside_dia_mm: '60.17', hp_max_outside_dia_mm: '60.47', hp_wall_thickness_mm_sch_40_min: '3.91', hp_wall_thickness_mm_sch_40_max: '4.42', hp_pressure_rating_bar_sch_40: '19.30', hp_wall_thickness_mm_sch_80_min: '5.54', hp_wall_thickness_mm_sch_80_max: '6.20', hp_pressure_rating_bar_sch_80: '29.0' },
      { hp_nominal_size_inch: '3"', hp_min_outside_dia_mm: '88.70', hp_max_outside_dia_mm: '89.10', hp_wall_thickness_mm_sch_40_min: '5.49', hp_wall_thickness_mm_sch_40_max: '6.15', hp_pressure_rating_bar_sch_40: '17.90', hp_wall_thickness_mm_sch_80_min: '7.62', hp_wall_thickness_mm_sch_80_max: '8.53', hp_pressure_rating_bar_sch_80: '25.50' },
      { hp_nominal_size_inch: '4"', hp_min_outside_dia_mm: '114.07', hp_max_outside_dia_mm: '114.53', hp_wall_thickness_mm_sch_40_min: '6.02', hp_wall_thickness_mm_sch_40_max: '6.73', hp_pressure_rating_bar_sch_40: '15.20', hp_wall_thickness_mm_sch_80_min: '8.56', hp_wall_thickness_mm_sch_80_max: '9.58', hp_pressure_rating_bar_sch_80: '22.10' },
      { hp_nominal_size_inch: '6"', hp_min_outside_dia_mm: '168.00', hp_max_outside_dia_mm: '168.56', hp_wall_thickness_mm_sch_40_min: '7.11', hp_wall_thickness_mm_sch_40_max: '7.97', hp_pressure_rating_bar_sch_40: '12.40', hp_wall_thickness_mm_sch_80_min: '10.97', hp_wall_thickness_mm_sch_80_max: '12.29', hp_pressure_rating_bar_sch_80: '19.30' },
      { hp_nominal_size_inch: '8"', hp_min_outside_dia_mm: '218.70', hp_max_outside_dia_mm: '219.46', hp_wall_thickness_mm_sch_40_min: '8.18', hp_wall_thickness_mm_sch_40_max: '9.17', hp_pressure_rating_bar_sch_40: '11.00', hp_wall_thickness_mm_sch_80_min: '12.70', hp_wall_thickness_mm_sch_80_max: '14.22', hp_pressure_rating_bar_sch_80: '17.20' },
      { hp_nominal_size_inch: '10"', hp_min_outside_dia_mm: '272.67', hp_max_outside_dia_mm: '273.43', hp_wall_thickness_mm_sch_40_min: '9.27', hp_wall_thickness_mm_sch_40_max: '10.39', hp_pressure_rating_bar_sch_40: '9.70', hp_wall_thickness_mm_sch_80_min: '15.06', hp_wall_thickness_mm_sch_80_max: '16.87', hp_pressure_rating_bar_sch_80: '15.90' },
      { hp_nominal_size_inch: '12"', hp_min_outside_dia_mm: '323.47', hp_max_outside_dia_mm: '324.23', hp_wall_thickness_mm_sch_40_min: '10.31', hp_wall_thickness_mm_sch_40_max: '11.55', hp_pressure_rating_bar_sch_40: '9.00', hp_wall_thickness_mm_sch_80_min: '17.45', hp_wall_thickness_mm_sch_80_max: '19.53', hp_pressure_rating_bar_sch_80: '15.90' }
    ]
  }],
  fittings: [],
  downloads: [{ label: 'PVC High Pressure Pipes Catalogue (PDF)', labelAr: 'كتالوج أنابيب PVC عالية الضغط (PDF)', labelFr: 'Catalogue Tuyaux PVC Haute Pression (PDF)', href: '/pdfs/UPVC%20PRESSURE%20PIPES.pdf' }],
  dosDonts: HP_DOS_DONTS, dosDontsAr: HP_DOS_DONTSAr,
    dosDontsFr: HP_DOS_DONTSFr
};


// ═══════════════════════════════════════════════════════════════════════════════
// 7) ASTM D 2241
// ═══════════════════════════════════════════════════════════════════════════════

export const pvcHpPipesAstmD2241: ProductDetailConfig = {
  slug: 'pvc-hp-pipes-astm-d2241',
  categorySlug: 'pvc-high-pressure-pipes',
  title: 'PVC High Pressure Pipes ASTM D 2241',
  titleAr: 'أنابيب الضغط العالي PVC وفق ASTM D 2241',
    titleFr: `PVC Tuyaux haute pression ASTM D 2241`,
    shortDescription: 'PVC-U pressure pipes to ASTM D 2241 — SDR-rated for multiple pressure classes.',
  shortDescriptionAr: 'أنابيب ضغط PVC-U وفق ASTM D 2241 — مصنفة SDR لفئات ضغط متعددة.',
    shortDescriptionFr: `Tuyaux sous pression PVC-U vers ASTM D 2241 — classés SDR pour plusieurs classes de pression.`,
    overview: seoOverview('ASTM D 2241', 'SDR (Standard Dimension Ratio) rated PVC-U pipes offering a wide spectrum of pressure classes from SDR 64 through SDR 13.5. This flexible rating system allows engineers to optimise wall thickness precisely to project pressure requirements — a preferred specification for cost-effective high-pressure installations in the UAE.'),
  overviewAr: seoOverviewAr('ASTM D 2241', 'أنابيب PVC-U مصنفة SDR (نسبة البعد القياسي) تقدم طيفاً واسعاً من فئات الضغط من SDR 64 إلى SDR 13.5. يتيح نظام التصنيف المرن هذا للمهندسين تحسين سماكة الجدار بدقة وفقاً لمتطلبات ضغط المشروع — مواصفة مفضلة للتركيبات عالية الضغط الفعالة من حيث التكلفة في الإمارات.'),
    overviewFr: seoOverviewFr('ASTM D 2241', 'Tuyaux classés PVC-U SDR (Standard Dimension Ratio) offrant un large éventail de classes de pression de SDR 64 à SDR 13.5. Ce système de notation flexible permet aux ingénieurs d\'optimiser l\'épaisseur de paroi avec précision pour projeter les exigences de pression - une spécification privilégiée pour les installations haute pression rentables dans le UAE.'),
  features: HP_FEATURES, featuresAr: HP_FEATURESAr,
    featuresFr: HP_FEATURESFr,
    applications: HP_APPLICATIONS, applicationsAr: HP_APPLICATIONSAr,
    applicationsFr: HP_APPLICATIONSFr,
    pipesTables: [{
    id: 'pvcHpPipesAstmD2241-pipes',
    title: 'Inch size Pressure Pipes', titleFr: 'Pouces taille TUYAUX SOUS PRESSION',
    columns: [
      { key: 'hp_nominal_outside_dia', label: 'Nominal Size Inch', labelFr: 'Taille Nominale Inch' },
      { key: 'hp_outside_dia_mm_min', label: 'Min', labelFr: 'Min', superGroupLabel: 'Mean Outside Dia.', superGroupLabelFr: 'Diam. Ext. Moyen', superColSpan: 2 },
      { key: 'hp_outside_dia_mm_max', label: 'Max', labelFr: 'Max', superGroupLabel: 'Mean Outside Dia.', superGroupLabelFr: 'Diam. Ext. Moyen' },
      { key: 'hp_mean_wall_thickness_mm_pn_4_3_sdr_64_min', label: 'Min', labelFr: 'Min', groupLabel: 'PN-4.3 SDR 64', groupLabelFr: 'PN-4.3 SDR 64', colSpan: 2, superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi', superColSpan: 14 },
      { key: 'hp_mean_wall_thickness_mm_pn_4_3_sdr_64_max', label: 'Max', labelFr: 'Max', groupLabel: 'PN-4.3 SDR 64', groupLabelFr: 'PN-4.3 SDR 64', superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
      { key: 'hp_mean_wall_thickness_mm_pn_6_9_sdr_41_min', label: 'Min', labelFr: 'Min', groupLabel: 'PN-6.9 SDR 41', groupLabelFr: 'PN-6.9 SDR 41', colSpan: 2, superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
      { key: 'hp_mean_wall_thickness_mm_pn_6_9_sdr_41_max', label: 'Max', labelFr: 'Max', groupLabel: 'PN-6.9 SDR 41', groupLabelFr: 'PN-6.9 SDR 41', superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
      { key: 'hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_min', label: 'Min', labelFr: 'Min', groupLabel: 'PN-8.6 SDR 32.5', groupLabelFr: 'PN-8.6 SDR 32.5', colSpan: 2, superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
      { key: 'hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_max', label: 'Max', labelFr: 'Max', groupLabel: 'PN-8.6 SDR 32.5', groupLabelFr: 'PN-8.6 SDR 32.5', superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
      { key: 'hp_mean_wall_thickness_mm_pn_11_sdr_26_min', label: 'Min', labelFr: 'Min', groupLabel: 'PN-11 SDR 26', groupLabelFr: 'PN-11 SDR 26', colSpan: 2, superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
      { key: 'hp_mean_wall_thickness_mm_pn_11_sdr_26_max', label: 'Max', labelFr: 'Max', groupLabel: 'PN-11 SDR 26', groupLabelFr: 'PN-11 SDR 26', superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
      { key: 'hp_mean_wall_thickness_mm_pn_13_8_sdr_21_min', label: 'Min', labelFr: 'Min', groupLabel: 'PN-13.8 SDR 21', groupLabelFr: 'PN-13.8 SDR 21', colSpan: 2, superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
      { key: 'hp_mean_wall_thickness_mm_pn_13_8_sdr_21_max', label: 'Max', labelFr: 'Max', groupLabel: 'PN-13.8 SDR 21', groupLabelFr: 'PN-13.8 SDR 21', superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
      { key: 'hp_mean_wall_thickness_mm_pn_17_2_sdr_17_min', label: 'Min', labelFr: 'Min', groupLabel: 'PN-17.2 SDR 17', groupLabelFr: 'PN-17.2 SDR 17', colSpan: 2, superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
      { key: 'hp_mean_wall_thickness_mm_pn_17_2_sdr_17_max', label: 'Max', labelFr: 'Max', groupLabel: 'PN-17.2 SDR 17', groupLabelFr: 'PN-17.2 SDR 17', superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
      { key: 'hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_min', label: 'Min', labelFr: 'Min', groupLabel: 'PN 21.7 SDR 13.5', groupLabelFr: 'PN 21.7 SDR 13.5', colSpan: 2, superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' },
      { key: 'hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_max', label: 'Max', labelFr: 'Max', groupLabel: 'PN 21.7 SDR 13.5', groupLabelFr: 'PN 21.7 SDR 13.5', superGroupLabel: 'Mean Wall Thickness', superGroupLabelFr: 'Epaisseur Moy. de Paroi' }
    ],
    rows: [
      { hp_nominal_outside_dia: '1/2"', hp_outside_dia_mm_min: '21.24', hp_outside_dia_mm_max: '21.44', hp_mean_wall_thickness_mm_pn_4_3_sdr_64_min: null, hp_mean_wall_thickness_mm_pn_4_3_sdr_64_max: null, hp_mean_wall_thickness_mm_pn_6_9_sdr_41_min: null, hp_mean_wall_thickness_mm_pn_6_9_sdr_41_max: null, hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_min: null, hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_max: null, hp_mean_wall_thickness_mm_pn_11_sdr_26_min: null, hp_mean_wall_thickness_mm_pn_11_sdr_26_max: null, hp_mean_wall_thickness_mm_pn_13_8_sdr_21_min: null, hp_mean_wall_thickness_mm_pn_13_8_sdr_21_max: null, hp_mean_wall_thickness_mm_pn_17_2_sdr_17_min: null, hp_mean_wall_thickness_mm_pn_17_2_sdr_17_max: null, hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_min: '1.57', hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_max: '2.08' },
      { hp_nominal_outside_dia: '3/4"', hp_outside_dia_mm_min: '26.57', hp_outside_dia_mm_max: '26.77', hp_mean_wall_thickness_mm_pn_4_3_sdr_64_min: null, hp_mean_wall_thickness_mm_pn_4_3_sdr_64_max: null, hp_mean_wall_thickness_mm_pn_6_9_sdr_41_min: null, hp_mean_wall_thickness_mm_pn_6_9_sdr_41_max: null, hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_min: null, hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_max: null, hp_mean_wall_thickness_mm_pn_11_sdr_26_min: null, hp_mean_wall_thickness_mm_pn_11_sdr_26_max: null, hp_mean_wall_thickness_mm_pn_13_8_sdr_21_min: '1.52', hp_mean_wall_thickness_mm_pn_13_8_sdr_21_max: '2.03', hp_mean_wall_thickness_mm_pn_17_2_sdr_17_min: '1.57', hp_mean_wall_thickness_mm_pn_17_2_sdr_17_max: '2.08', hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_min: '1.98', hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_max: '2.48' },
      { hp_nominal_outside_dia: '1"', hp_outside_dia_mm_min: '33.27', hp_outside_dia_mm_max: '33.53', hp_mean_wall_thickness_mm_pn_4_3_sdr_64_min: null, hp_mean_wall_thickness_mm_pn_4_3_sdr_64_max: null, hp_mean_wall_thickness_mm_pn_6_9_sdr_41_min: null, hp_mean_wall_thickness_mm_pn_6_9_sdr_41_max: null, hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_min: null, hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_max: null, hp_mean_wall_thickness_mm_pn_11_sdr_26_min: '1.52', hp_mean_wall_thickness_mm_pn_11_sdr_26_max: '2.03', hp_mean_wall_thickness_mm_pn_13_8_sdr_21_min: '1.60', hp_mean_wall_thickness_mm_pn_13_8_sdr_21_max: '2.10', hp_mean_wall_thickness_mm_pn_17_2_sdr_17_min: '1.95', hp_mean_wall_thickness_mm_pn_17_2_sdr_17_max: '2.46', hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_min: '2.46', hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_max: '2.97' },
      { hp_nominal_outside_dia: '1 1/4"', hp_outside_dia_mm_min: '42.03', hp_outside_dia_mm_max: '42.29', hp_mean_wall_thickness_mm_pn_4_3_sdr_64_min: null, hp_mean_wall_thickness_mm_pn_4_3_sdr_64_max: null, hp_mean_wall_thickness_mm_pn_6_9_sdr_41_min: null, hp_mean_wall_thickness_mm_pn_6_9_sdr_41_max: null, hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_min: '1.52', hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_max: '2.03', hp_mean_wall_thickness_mm_pn_11_sdr_26_min: '1.62', hp_mean_wall_thickness_mm_pn_11_sdr_26_max: '2.13', hp_mean_wall_thickness_mm_pn_13_8_sdr_21_min: '2.01', hp_mean_wall_thickness_mm_pn_13_8_sdr_21_max: '2.51', hp_mean_wall_thickness_mm_pn_17_2_sdr_17_min: '2.48', hp_mean_wall_thickness_mm_pn_17_2_sdr_17_max: '2.99', hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_min: '3.12', hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_max: '3.67' },
      { hp_nominal_outside_dia: '1 1/2"', hp_outside_dia_mm_min: '48.11', hp_outside_dia_mm_max: '48.41', hp_mean_wall_thickness_mm_pn_4_3_sdr_64_min: null, hp_mean_wall_thickness_mm_pn_4_3_sdr_64_max: null, hp_mean_wall_thickness_mm_pn_6_9_sdr_41_min: null, hp_mean_wall_thickness_mm_pn_6_9_sdr_41_max: null, hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_min: '1.52', hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_max: '2.03', hp_mean_wall_thickness_mm_pn_11_sdr_26_min: '1.85', hp_mean_wall_thickness_mm_pn_11_sdr_26_max: '2.36', hp_mean_wall_thickness_mm_pn_13_8_sdr_21_min: '2.28', hp_mean_wall_thickness_mm_pn_13_8_sdr_21_max: '2.79', hp_mean_wall_thickness_mm_pn_17_2_sdr_17_min: '2.84', hp_mean_wall_thickness_mm_pn_17_2_sdr_17_max: '3.53', hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_min: '3.58', hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_max: '4.08' },
      { hp_nominal_outside_dia: '2"', hp_outside_dia_mm_min: '60.17', hp_outside_dia_mm_max: '60.47', hp_mean_wall_thickness_mm_pn_4_3_sdr_64_min: null, hp_mean_wall_thickness_mm_pn_4_3_sdr_64_max: null, hp_mean_wall_thickness_mm_pn_6_9_sdr_41_min: null, hp_mean_wall_thickness_mm_pn_6_9_sdr_41_max: null, hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_min: '1.85', hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_max: '2.36', hp_mean_wall_thickness_mm_pn_11_sdr_26_min: '2.31', hp_mean_wall_thickness_mm_pn_11_sdr_26_max: '2.81', hp_mean_wall_thickness_mm_pn_13_8_sdr_21_min: '2.87', hp_mean_wall_thickness_mm_pn_13_8_sdr_21_max: '3.38', hp_mean_wall_thickness_mm_pn_17_2_sdr_17_min: '3.55', hp_mean_wall_thickness_mm_pn_17_2_sdr_17_max: '4.06', hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_min: '4.47', hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_max: '4.97' },
      { hp_nominal_outside_dia: '3"', hp_outside_dia_mm_min: '88.70', hp_outside_dia_mm_max: '89.10', hp_mean_wall_thickness_mm_pn_4_3_sdr_64_min: null, hp_mean_wall_thickness_mm_pn_4_3_sdr_64_max: null, hp_mean_wall_thickness_mm_pn_6_9_sdr_41_min: '2.16', hp_mean_wall_thickness_mm_pn_6_9_sdr_41_max: '2.67', hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_min: '2.74', hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_max: '3.25', hp_mean_wall_thickness_mm_pn_11_sdr_26_min: '3.42', hp_mean_wall_thickness_mm_pn_11_sdr_26_max: '3.93', hp_mean_wall_thickness_mm_pn_13_8_sdr_21_min: '4.24', hp_mean_wall_thickness_mm_pn_13_8_sdr_21_max: '4.75', hp_mean_wall_thickness_mm_pn_17_2_sdr_17_min: '5.23', hp_mean_wall_thickness_mm_pn_17_2_sdr_17_max: '5.86', hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_min: '6.57', hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_max: '7.36' },
      { hp_nominal_outside_dia: '4"', hp_outside_dia_mm_min: '114.07', hp_outside_dia_mm_max: '114.53', hp_mean_wall_thickness_mm_pn_4_3_sdr_64_min: '1.78', hp_mean_wall_thickness_mm_pn_4_3_sdr_64_max: '2.29', hp_mean_wall_thickness_mm_pn_6_9_sdr_41_min: '2.80', hp_mean_wall_thickness_mm_pn_6_9_sdr_41_max: '3.30', hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_min: '3.50', hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_max: '4.01', hp_mean_wall_thickness_mm_pn_11_sdr_26_min: '4.39', hp_mean_wall_thickness_mm_pn_11_sdr_26_max: '4.90', hp_mean_wall_thickness_mm_pn_13_8_sdr_21_min: '5.43', hp_mean_wall_thickness_mm_pn_13_8_sdr_21_max: '6.09', hp_mean_wall_thickness_mm_pn_17_2_sdr_17_min: '6.73', hp_mean_wall_thickness_mm_pn_17_2_sdr_17_max: '7.54', hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_min: '8.45', hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_max: '9.47' },
      { hp_nominal_outside_dia: '6"', hp_outside_dia_mm_min: '168.00', hp_outside_dia_mm_max: '168.56', hp_mean_wall_thickness_mm_pn_4_3_sdr_64_min: '2.64', hp_mean_wall_thickness_mm_pn_4_3_sdr_64_max: '3.15', hp_mean_wall_thickness_mm_pn_6_9_sdr_41_min: '4.12', hp_mean_wall_thickness_mm_pn_6_9_sdr_41_max: '4.62', hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_min: '5.18', hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_max: '5.79', hp_mean_wall_thickness_mm_pn_11_sdr_26_min: '6.47', hp_mean_wall_thickness_mm_pn_11_sdr_26_max: '7.26', hp_mean_wall_thickness_mm_pn_13_8_sdr_21_min: '8.02', hp_mean_wall_thickness_mm_pn_13_8_sdr_21_max: '8.99', hp_mean_wall_thickness_mm_pn_17_2_sdr_17_min: '9.90', hp_mean_wall_thickness_mm_pn_17_2_sdr_17_max: '11.10', hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_min: '10.46', hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_max: '11.70' },
      { hp_nominal_outside_dia: '8"', hp_outside_dia_mm_min: '218.70', hp_outside_dia_mm_max: '219.46', hp_mean_wall_thickness_mm_pn_4_3_sdr_64_min: '3.43', hp_mean_wall_thickness_mm_pn_4_3_sdr_64_max: '3.93', hp_mean_wall_thickness_mm_pn_6_9_sdr_41_min: '5.33', hp_mean_wall_thickness_mm_pn_6_9_sdr_41_max: '5.96', hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_min: '6.73', hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_max: '7.54', hp_mean_wall_thickness_mm_pn_11_sdr_26_min: '8.43', hp_mean_wall_thickness_mm_pn_11_sdr_26_max: '9.44', hp_mean_wall_thickness_mm_pn_13_8_sdr_21_min: '10.41', hp_mean_wall_thickness_mm_pn_13_8_sdr_21_max: '11.65', hp_mean_wall_thickness_mm_pn_17_2_sdr_17_min: '12.90', hp_mean_wall_thickness_mm_pn_17_2_sdr_17_max: '14.45', hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_min: '12.47', hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_max: '13.97' },
      { hp_nominal_outside_dia: '10"', hp_outside_dia_mm_min: '272.67', hp_outside_dia_mm_max: '273.43', hp_mean_wall_thickness_mm_pn_4_3_sdr_64_min: '4.26', hp_mean_wall_thickness_mm_pn_4_3_sdr_64_max: '4.77', hp_mean_wall_thickness_mm_pn_6_9_sdr_41_min: '6.65', hp_mean_wall_thickness_mm_pn_6_9_sdr_41_max: '7.44', hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_min: '8.40', hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_max: '9.42', hp_mean_wall_thickness_mm_pn_11_sdr_26_min: '10.49', hp_mean_wall_thickness_mm_pn_11_sdr_26_max: '11.76', hp_mean_wall_thickness_mm_pn_13_8_sdr_21_min: '12.97', hp_mean_wall_thickness_mm_pn_13_8_sdr_21_max: '14.53', hp_mean_wall_thickness_mm_pn_17_2_sdr_17_min: '16.05', hp_mean_wall_thickness_mm_pn_17_2_sdr_17_max: '17.98', hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_min: null, hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_max: null },
      { hp_nominal_outside_dia: '12"', hp_outside_dia_mm_min: '323.47', hp_outside_dia_mm_max: '324.23', hp_mean_wall_thickness_mm_pn_4_3_sdr_64_min: '5.05', hp_mean_wall_thickness_mm_pn_4_3_sdr_64_max: '5.64', hp_mean_wall_thickness_mm_pn_6_9_sdr_41_min: '7.90', hp_mean_wall_thickness_mm_pn_6_9_sdr_41_max: '8.85', hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_min: '9.95', hp_mean_wall_thickness_mm_pn_8_6_sdr_32_5_max: '11.15', hp_mean_wall_thickness_mm_pn_11_sdr_26_min: '12.44', hp_mean_wall_thickness_mm_pn_11_sdr_26_max: '13.94', hp_mean_wall_thickness_mm_pn_13_8_sdr_21_min: '15.39', hp_mean_wall_thickness_mm_pn_13_8_sdr_21_max: '17.24', hp_mean_wall_thickness_mm_pn_17_2_sdr_17_min: '19.05', hp_mean_wall_thickness_mm_pn_17_2_sdr_17_max: '21.33', hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_min: null, hp_mean_wall_thickness_mm_pn_21_7_sdr_13_5_max: null }
    ]
  }],
  fittings: [],
  downloads: [{ label: 'PVC High Pressure Pipes Catalogue (PDF)', labelAr: 'كتالوج أنابيب PVC عالية الضغط (PDF)', labelFr: 'Catalogue Tuyaux PVC Haute Pression (PDF)', href: '/pdfs/UPVC%20PRESSURE%20PIPES.pdf' }],
  dosDonts: HP_DOS_DONTS, dosDontsAr: HP_DOS_DONTSAr,
    dosDontsFr: HP_DOS_DONTSFr
};
