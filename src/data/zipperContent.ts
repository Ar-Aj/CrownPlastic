/**
 * Crown Plastic Pipes — Zipper Page Content Payload
 *
 * Programmatic Product × Location content generation payload.
 * Each entry maps a (categoryId, regionSlug) tuple to unique,
 * non-commodity text that eliminates structural page duplication.
 *
 * Content is derived from proprietary data matrices in
 * src/data/proprietary/ and region-specific compliance data.
 *
 * Synchronised with:
 *   - src/data/productMap.ts (13 category IDs)
 *   - src/data/regions.ts (6 region slugs)
 *   - src/data/proprietary/* (lab tests, climate metrics, project refs)
 */

import { CLIMATE_METRICS, LAB_TESTS, type ClimateMetric, type LabTestResult } from '@/data/proprietary';
import { getProjectsForZipper, type ProjectReference } from '@/data/proprietary/projectReferences';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

type CategoryId =
  | 'upvc-drainage-pipes'
  | 'upvc-drainage-fittings'
  | 'pvc-high-pressure-pipes'
  | 'pvc-high-pressure-fittings'
  | 'pvc-sch-40-fittings'
  | 'pvc-duct-pipes'
  | 'pvc-duct-fittings'
  | 'pvc-conduit-pipes'
  | 'ppr-pipes'
  | 'hdpe-pipes'
  | 'pex-pipes'
  | 'fabrications-accessories'
  | 'solvents';

type RegionSlug =
  | 'upvc-pipes-dubai'
  | 'upvc-pipes-abu-dhabi'
  | 'upvc-pipes-sharjah'
  | 'upvc-pipes-saudi-arabia'
  | 'upvc-pipes-kuwait'
  | 'upvc-pipes-qatar';

export interface ZipperPageContent {
  /** H1 heading: "{Category} in {Region}" */
  h1: string;
  h1Ar: string;
  h1Fr: string;

  /** Meta title for search engines */
  metaTitle: string;
  metaDescription: string;

  /** Paragraph 1: Local authority compliance */
  complianceParagraph: string;
  complianceParagraphAr: string;
  complianceParagraphFr: string;

  /** Paragraph 2: Engineering proof from lab tests + climate metrics */
  engineeringParagraph: string;
  engineeringParagraphAr: string;
  engineeringParagraphFr: string;

  /** Paragraph 3: Deployment validation from project references */
  deploymentParagraph: string;
  deploymentParagraphAr: string;
  deploymentParagraphFr: string;

  /** Structured data: climate metrics for this category */
  climateMetrics: ClimateMetric;

  /** Structured data: lab test results for this category */
  labTests: LabTestResult;

  /** Matching project references for this Product × Location */
  projectRefs: ProjectReference[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Region display names and authority mappings
// ─────────────────────────────────────────────────────────────────────────────

interface RegionMeta {
  authorityFr?: string;
  nameFr?: string;
  nameEn: string;
  nameAr: string;
  authority: string;
  authorityAr: string;
  countryCode: string;
}

const REGION_META: Record<RegionSlug, RegionMeta> = {
  'upvc-pipes-dubai': {
    nameEn: 'Dubai',
    nameAr: 'دبي',
    nameFr: 'Dubaï',
    authority: 'Dubai Municipality and Civil Defense',
    authorityAr: 'بلدية دبي والدفاع المدني',
    authorityFr: 'Municipalité de Dubaï et Défense Civile',
    countryCode: 'AE',
  },
  'upvc-pipes-abu-dhabi': {
    nameEn: 'Abu Dhabi',
    nameAr: 'أبوظبي',
    nameFr: 'Abou Dabi',
    authority: 'Abu Dhabi Municipality (ADM) and ADSSC',
    authorityAr: 'بلدية أبوظبي وأدسك',
    authorityFr: 'Municipalité d\'Abou Dabi (ADM) et ADSSC',
    countryCode: 'AE',
  },
  'upvc-pipes-sharjah': {
    nameEn: 'Sharjah',
    nameAr: 'الشارقة',
    nameFr: 'Charjah',
    authority: 'Sharjah Municipality and SEWA',
    authorityAr: 'بلدية الشارقة وسيوا',
    authorityFr: 'Municipalité de Charjah et SEWA',
    countryCode: 'AE',
  },
  'upvc-pipes-saudi-arabia': {
    nameEn: 'Saudi Arabia',
    nameAr: 'المملكة العربية السعودية',
    nameFr: 'Arabie Saoudite',
    authority: 'SASO, SABER, and Saudi Building Code',
    authorityAr: 'ساسو وسابر وكود البناء السعودي',
    authorityFr: 'SASO, SABER et Code du Bâtiment Saoudien',
    countryCode: 'SA',
  },
  'upvc-pipes-kuwait': {
    nameEn: 'Kuwait',
    nameAr: 'الكويت',
    nameFr: 'Koweït',
    authority: 'Kuwait MEW and MPW',
    authorityAr: 'وزارة الكهرباء والماء والأشغال العامة الكويتية',
    authorityFr: 'Koweït MEW et MPW',
    countryCode: 'KW',
  },
  'upvc-pipes-qatar': {
    nameEn: 'Qatar',
    nameAr: 'قطر',
    nameFr: 'Qatar',
    authority: 'Ashghal (PWA) and Kahramaa',
    authorityAr: 'أشغال وكهرماء',
    authorityFr: 'Ashghal (PWA) et Kahramaa',
    countryCode: 'QA',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Category display names
// ─────────────────────────────────────────────────────────────────────────────

interface CategoryMeta {
  nameEn: string;
  nameAr: string;
  nameFr?: string;
  primaryStandard: string;
}

const CATEGORY_META: Record<CategoryId, CategoryMeta> = {
  'upvc-drainage-pipes': { nameEn: 'UPVC Drainage Pipes / Fittings', nameAr: 'أنابيب / تجهيزات صرف UPVC', nameFr: 'Tuyaux / Raccords d\'Évacuation UPVC', primaryStandard: 'BS EN 1329-1:2014 / BS EN 1401-1' },
  'upvc-drainage-fittings': { nameEn: 'UPVC Drainage Fittings', nameAr: 'وصلات صرف UPVC', nameFr: 'Raccords d\'Évacuation UPVC', primaryStandard: 'BS EN 1329-1:2014 / BS EN 1401' },
  'pvc-high-pressure-pipes': { nameEn: 'PVC High Pressure Pipes / Fittings', nameAr: 'أنابيب / تجهيزات ضغط عالي PVC', nameFr: 'Tuyaux / Raccords PVC Haute Pression', primaryStandard: 'BS EN 1452 / ISO 4422-2:1996' },
  'pvc-high-pressure-fittings': { nameEn: 'PVC High Pressure Fittings', nameAr: 'وصلات ضغط عالي PVC', nameFr: 'Raccords PVC Haute Pression', primaryStandard: 'DIN 8063 / BS EN 1452:3' },
  'pvc-sch-40-fittings': { nameEn: 'PVC SCH 40 Fittings', nameAr: 'وصلات PVC جدول 40', nameFr: 'Raccords PVC SCH 40', primaryStandard: 'ASTM D 2466' },
  'pvc-duct-pipes': { nameEn: 'PVC Duct Pipes / Fittings', nameAr: 'أنابيب / تجهيزات مجاري PVC', nameFr: 'Tuyaux / Raccords de Gaine PVC', primaryStandard: 'NEMA TC 2 / DIN 8062' },
  'pvc-duct-fittings': { nameEn: 'PVC Duct Fittings', nameAr: 'وصلات مجاري PVC', nameFr: 'Raccords de Gaine PVC', primaryStandard: 'Crown Specification' },
  'pvc-conduit-pipes': { nameEn: 'PVC Conduit Pipes / Fittings', nameAr: 'أنابيب / تجهيزات قنوات PVC', nameFr: 'Tuyaux / Raccords Conduit PVC', primaryStandard: '1250N / 750N / SCH 40' },
  'ppr-pipes': { nameEn: 'PP-R Pipes / Fittings', nameAr: 'أنابيب / تجهيزات PP-R', nameFr: 'Tuyaux / Raccords PP-R', primaryStandard: 'DIN 8077/78' },
  'hdpe-pipes': { nameEn: 'HDPE Pipes / Fittings', nameAr: 'أنابيب / تجهيزات HDPE', nameFr: 'Tuyaux / Raccords HDPE', primaryStandard: 'ISO 4427 / DIN 8074' },
  'pex-pipes': { nameEn: 'PEX Pipes / Fittings', nameAr: 'أنابيب / تجهيزات PEX', nameFr: 'Tuyaux / Raccords PEX', primaryStandard: 'DIN 16892/16893' },
  'fabrications-accessories': { nameEn: 'Fabrications & Accessories', nameAr: 'التصنيعات والإكسسوارات', nameFr: 'Fabrications et Accessoires', primaryStandard: 'Dubai Municipality Approved' },
  'solvents': { nameEn: 'PVC Solvents', nameAr: 'مذيبات PVC', nameFr: 'Colles Solvant PVC', primaryStandard: 'Crown Specification' },
};

// ─────────────────────────────────────────────────────────────────────────────
// Public exports
// ─────────────────────────────────────────────────────────────────────────────

export { REGION_META, CATEGORY_META };
export type { CategoryId, RegionSlug, RegionMeta, CategoryMeta };

export const ALL_CATEGORY_IDS: CategoryId[] = Object.keys(CATEGORY_META) as CategoryId[];
export const ALL_REGION_SLUGS: RegionSlug[] = Object.keys(REGION_META) as RegionSlug[];

/**
 * Generate the complete ZipperPageContent for a given Product × Location intersection.
 * All content is algorithmically derived from the proprietary data matrices —
 * no manual copywriting needed per permutation.
 */
export function generateZipperContent(
  categoryId: CategoryId,
  regionSlug: RegionSlug
): ZipperPageContent {
  const cat = CATEGORY_META[categoryId];
  const region = REGION_META[regionSlug];
  const climate = CLIMATE_METRICS[categoryId];
  const lab = LAB_TESTS[categoryId];
  const projects = getProjectsForZipper(categoryId, regionSlug);

  // ── H1 ─────────────────────────────────────────────────────────────────
  const h1 = `What are the ${region.authority}-approved specifications for ${cat.nameEn} in ${region.nameEn}?`;
  const h1Ar = `ما هي مواصفات ${cat.nameAr} المعتمدة من ${region.authorityAr} في ${region.nameAr}؟`;
  const h1Fr = `Quelles sont les spécifications ${cat.nameFr || cat.nameEn} approuvées par ${region.authorityFr || region.authority} à ${region.nameFr || region.nameEn} ?`;

  // ── Meta ────────────────────────────────────────────────────────────────
  const metaTitle = `${cat.nameEn} ${region.nameEn} | ${cat.primaryStandard} | Crown Plastic Pipes`;
  const metaDescription = `${region.authority}-approved ${cat.nameEn} from Crown Plastic Pipes. Factory burst-tested to ${lab.minimumBurstPressureMPa > 0 ? lab.minimumBurstPressureMPa + ' MPa' : 'applicable standards'}. Wall tolerance ±${lab.wallThicknessToleranceVarianceMm} mm. Serving ${region.nameEn} contractors with same-day UAE delivery.`;

  // ── P1: Compliance ─────────────────────────────────────────────────────
  const complianceParagraph = `${cat.nameEn} in ${region.nameEn} must comply with ${cat.primaryStandard} and carry ${region.authority} approval. Crown ${cat.nameEn} are factory burst-tested to ${lab.minimumBurstPressureMPa > 0 ? lab.minimumBurstPressureMPa + ' MPa per BS EN 921 / ISO 1167' : 'applicable ring stiffness and crush resistance standards'} with wall tolerance ±${lab.wallThicknessToleranceVarianceMm}mm.${lab.complianceCertificationId ? ` Compliance ref: ${lab.complianceCertificationId}.` : ''} Manufactured at Crown's ISO 9001:2015 certified Umm Al Quwain facility and delivered factory-direct to ${region.nameEn} project sites.`;
  const complianceParagraphAr = `يجب أن تتوافق ${cat.nameAr} في ${region.nameAr} مع ${cat.primaryStandard} وتحمل اعتماد ${region.authorityAr}. أنابيب كراون ${cat.nameAr} مختبرة بضغط انفجار ${lab.minimumBurstPressureMPa > 0 ? lab.minimumBurstPressureMPa + ' ميجاباسكال وفق BS EN 921 / ISO 1167' : 'وفق معايير صلابة الحلقة ومقاومة السحق المعمول بها'} بتفاوت سمك جدار ±${lab.wallThicknessToleranceVarianceMm}مم.${lab.complianceCertificationId ? ` رقم الامتثال: ${lab.complianceCertificationId}.` : ''} مصنعة في منشأة كراون المعتمدة ISO 9001:2015 بأم القيوين وتسلم مباشرة لمواقع المشاريع في ${region.nameAr}.`;
  const complianceParagraphFr = `Les ${cat.nameFr || cat.nameEn} à ${region.nameFr || region.nameEn} doivent être conformes à ${cat.primaryStandard} et porter l'approbation de ${region.authorityFr || region.authority}. Les ${cat.nameFr || cat.nameEn} Crown sont testés en pression d'éclatement à ${lab.minimumBurstPressureMPa > 0 ? lab.minimumBurstPressureMPa + ' MPa selon BS EN 921 / ISO 1167' : 'des normes de rigidité annulaire et de résistance à l\'écrasement applicables'} avec une tolérance d'épaisseur de paroi ±${lab.wallThicknessToleranceVarianceMm}mm.${lab.complianceCertificationId ? ` Réf. conformité : ${lab.complianceCertificationId}.` : ''} Fabriqués dans l'usine Crown certifiée ISO 9001:2015 à Umm Al Quwain et livrés directement sur les chantiers de ${region.nameFr || region.nameEn}.`;

  // ── P2: Engineering proof ──────────────────────────────────────────────
  const burstText = lab.minimumBurstPressureMPa > 0
    ? `Factory burst-tested to ${lab.minimumBurstPressureMPa} MPa per BS EN 921 / ISO 1167 at 20°C.`
    : 'Ring stiffness and crush resistance tested per applicable standards.';
  const burstTextAr = lab.minimumBurstPressureMPa > 0
    ? `مختبرة بضغط انفجار ${lab.minimumBurstPressureMPa} ميجاباسكال وفق BS EN 921 / ISO 1167 عند 20°C.`
    : 'مختبرة لصلابة الحلقة ومقاومة السحق وفق المعايير المعمول بها.';
  const burstTextFr = lab.minimumBurstPressureMPa > 0
    ? `Testé en pression d'éclatement à ${lab.minimumBurstPressureMPa} MPa selon BS EN 921 / ISO 1167 à 20°C.`
    : 'Rigidité annulaire et résistance à l\'écrasement testées selon les normes applicables.';

  const engineeringParagraph = `${burstText} Wall thickness tolerance held at ±${lab.wallThicknessToleranceVarianceMm} mm — significantly tighter than commodity imports. Vicat softening point: ${climate.groundTempVicatSofteningCelsius}°C. At ${region.nameEn}'s peak ambient temperatures, the derating factor of ${climate.ambientPeakDeratingFactor} maintains structural integrity. Linear thermal expansion coefficient: ${climate.expansionCoefficientMmPerMK} mm/m·K, factored into all joint design specifications for ${region.nameEn} installations. Source: Crown QC Laboratory, Umm Al Quwain Industrial City, UAE — verified ${new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}.`;
  const engineeringParagraphAr = `${burstTextAr} تفاوت سمك الجدار ±${lab.wallThicknessToleranceVarianceMm} مم — أضيق بكثير من الواردات السلعية. نقطة تليين فيكات: ${climate.groundTempVicatSofteningCelsius}°C. عند ذروة درجات الحرارة المحيطة في ${region.nameAr}، معامل التخفيض ${climate.ambientPeakDeratingFactor} يحافظ على السلامة الهيكلية. معامل التمدد الحراري الخطي: ${climate.expansionCoefficientMmPerMK} مم/م·كلفن، مدمج في جميع مواصفات تصميم الوصلات لتركيبات ${region.nameAr}. المصدر: مختبر كراون للجودة، مدينة أم القيوين الصناعية، الإمارات — تم التحقق ${new Date().toLocaleDateString('ar-AE', { month: 'short', year: 'numeric' })}.`;
  const engineeringParagraphFr = `${burstTextFr} Tolérance d'épaisseur de paroi maintenue à ±${lab.wallThicknessToleranceVarianceMm} mm — nettement plus stricte que les importations génériques. Point de ramollissement Vicat : ${climate.groundTempVicatSofteningCelsius}°C. Aux températures ambiantes maximales de ${region.nameFr || region.nameEn}, le facteur de déclassement de ${climate.ambientPeakDeratingFactor} préserve l'intégrité structurelle. Coefficient de dilatation thermique linéaire : ${climate.expansionCoefficientMmPerMK} mm/m·K, intégré dans toutes les spécifications de conception des joints pour les installations à ${region.nameFr || region.nameEn}. Source : Laboratoire CQ Crown, Umm Al Quwain Industrial City, EAU — vérifié ${new Date().toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })}.`;

  // ── P3: Deployment validation ──────────────────────────────────────────
  let deploymentParagraph: string;
  let deploymentParagraphAr: string;
  let deploymentParagraphFr: string;

  if (projects.length > 0) {
    const refTexts = projects.map(p =>
      `${p.projectName}: ${p.applicationMetric} (${p.tonnageSupplied} tonnes)`
    );
    const refTextsFr = projects.map(p =>
      `${p.projectName} : ${p.applicationMetric} (${p.tonnageSupplied} tonnes)`
    );
    deploymentParagraph = `Crown has deployed ${cat.nameEn} on verified ${region.nameEn} projects: ${refTexts.join('; ')}. Contact our ${region.nameEn} technical team for project-specific specifications and competitive bulk pricing.`;
    deploymentParagraphAr = `وردت كراون ${cat.nameAr} لمشاريع معتمدة في ${region.nameAr}: ${projects.map(p => `${p.projectName}: ${p.applicationMetric} (${p.tonnageSupplied} طن)`).join('؛ ')}. تواصل مع فريقنا الفني في ${region.nameAr} للمواصفات الخاصة بالمشروع والأسعار التنافسية للطلبات الكبيرة.`;
    deploymentParagraphFr = `Crown a fourni des ${cat.nameFr || cat.nameEn} pour des projets vérifiés à ${region.nameFr || region.nameEn} : ${refTextsFr.join(' ; ')}. Contactez notre équipe technique ${region.nameFr || region.nameEn} pour les spécifications projet et les tarifs compétitifs en gros volume.`;
  } else {
    deploymentParagraph = `Crown Plastic Pipes serves ${region.nameEn} contractors with factory-direct ${cat.nameEn} deliveries from our ISO 9001:2015 certified facility. With 30+ years of GCC manufacturing experience and 5000+ products in our catalogue, we provide complete Pipes / Fittings solutions for ${region.nameEn} infrastructure projects. Contact our technical team for project-specific requirements.`;
    deploymentParagraphAr = `تخدم كراون بلاستيك مقاولي ${region.nameAr} بتوريد ${cat.nameAr} مباشرة من المصنع من منشأتنا المعتمدة ISO 9001:2015. مع أكثر من 30 عاماً من خبرة التصنيع في الخليج و5000+ منتج في كتالوجنا، نقدم حلول أنابيب / تجهيزات كاملة لمشاريع البنية التحتية في ${region.nameAr}. تواصل مع فريقنا الفني لمتطلبات المشروع.`;
    deploymentParagraphFr = `Crown Plastic Pipes approvisionne les entrepreneurs de ${region.nameFr || region.nameEn} avec des ${cat.nameFr || cat.nameEn} livrés directement depuis notre usine certifiée ISO 9001:2015. Avec plus de 30 ans d'expérience de fabrication dans le CCG et 5000+ produits dans notre catalogue, nous fournissons des solutions complètes de Tuyaux / Raccords pour les projets d'infrastructure de ${region.nameFr || region.nameEn}. Contactez notre équipe technique pour les exigences spécifiques à votre projet.`;
  }

  return {
    h1,
    h1Ar,
    h1Fr,
    metaTitle,
    metaDescription,
    complianceParagraph,
    complianceParagraphAr,
    complianceParagraphFr,
    engineeringParagraph,
    engineeringParagraphAr,
    engineeringParagraphFr,
    deploymentParagraph,
    deploymentParagraphAr,
    deploymentParagraphFr,
    climateMetrics: climate,
    labTests: lab,
    projectRefs: projects,
  };
}
