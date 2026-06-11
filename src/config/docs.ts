// PDF Documentation configuration for Crown Plastic Pipes
//
// SECURITY NOTE: PDFs are served via <iframe> in view-only modal.
// While we do not expose explicit "Download" buttons in the UI,
// browsers inherently allow users to save/download PDF content via:
// - Right-click context menu in iframe
// - Browser PDF viewer controls
// - DevTools network inspection
// True "no download at all" is technically impossible for HTTP-served PDFs.
// This configuration provides view-only UX without encouraging downloads.

export interface PdfDocument {
  src: string;
  title: string;
  titleAr?: string;
  titleFr?: string;
  description: string;
  descriptionAr?: string;
  descriptionFr?: string;
}

// ============================================================================
// PDF FILE PATHS - All files stored in /public/pdfs/
// NOTE: Filenames use SPACES (URL-encoded as %20) to match actual uploaded files
// ============================================================================
const PDF_PATHS = {
  // UPVC Pressure
  UPVC_PRESSURE_PIPES: '/pdfs/UPVC%20PRESSURE%20PIPES.pdf',
  UPVC_PRESSURE_FITTINGS_BS_EN: '/pdfs/UPVC%20PRESSURE%20FITTINGS%20BS%20EN%2014523%20-%20BS%204346%20PN%2015.pdf',
  UPVC_PRESSURE_FITTINGS_DIN: '/pdfs/UPVC%20PRESSURE%20FITTINGS%20DIN%208063.pdf',
  UPVC_PRESSURE_FITTINGS_ASTM: '/pdfs/UPVC%20PRESSURE%20FITTINGS%20ASTM%20D%202466%20SCH-40.pdf',

  // UPVC Drainage
  UPVC_DRAINAGE_PIPES: '/pdfs/UPVC%20DRAINAGE%20PIPES.pdf',
  UPVC_DRAINAGE_FITTINGS_1329: '/pdfs/UPVC%20DRAINAGE%20FITTING%20BS%20EN%201329-1%2C2014%20-%20SUPERSEDED%20BS%205255%20AND%20BS4514.pdf',
  UPVC_DRAINAGE_FITTINGS_1401: '/pdfs/UPVC%20DRAINAGE%20FITTINGS%20BS%20EN%201401%20-%20SUPERSEDED%20BS%204660%20AND%20BS%205481.pdf',

  // UPVC Duct & Conduit
  UPVC_DUCT_PIPES: '/pdfs/UPVC%20DUCT%20PIPES%20AND%20ACCESSORIES.pdf',
  UPVC_FABRICATION: '/pdfs/UPVC%20FABRICATION%20AND%20ACCESSORIES.pdf',
  UPVC_CONDUIT: '/pdfs/UPVC%20CONDUIT%20PIPE.pdf',

  // Common UPVC
  UPVC_STANDARDS: '/pdfs/UPVC%20PIPES%20AND%20FITTINGS%20STANDARDS.pdf',
  UPVC_TECH_SPECS: '/pdfs/UPVC%20TECHNICAL%20SPECIFICATIONS%20AND%20MATERIAL%20PROPERTIES.pdf',

  // PPR & Polyethylene
  PPR_PIPES: '/pdfs/PPR%20PIPES.pdf',
  PE_SYSTEM: '/pdfs/POLYETHYLENE%20PIPE%20SYSTEM.pdf',
} as const;

// ============================================================================
// REUSABLE PDF DOCUMENT DEFINITIONS
// ============================================================================
const DOCS = {
  // UPVC Pressure Pipes
  upvcPressurePipes: {
    src: PDF_PATHS.UPVC_PRESSURE_PIPES,
    title: 'UPVC Pressure Pipes',
    titleAr: 'أنابيب الضغط UPVC',
    description: 'Metric & Inch series pipes | PN6-16 pressure ratings',
    descriptionAr: 'أنابيب بالسلسلة المترية والبوصة | تصنيفات ضغط PN6-16',
    titleFr: 'Tuyaux UPVC sous Pression',
    descriptionFr: 'Tuyaux séries métrique et pouce | Classes de pression PN6-16',
  },
  upvcPressureFittingsBsEn: {
    src: PDF_PATHS.UPVC_PRESSURE_FITTINGS_BS_EN,
    title: 'Pressure Fittings - BS EN Standard',
    titleAr: 'توصيلات الضغط - معيار BS EN',
    description: 'BS EN 14523 & BS 4346 PN15 fittings specifications',
    descriptionAr: 'مواصفات توصيلات BS EN 14523 و BS 4346 PN15',
    titleFr: 'Raccords Pression - Norme BS EN',
    descriptionFr: 'Spécifications raccords BS EN 14523 et BS 4346 PN15',
  },
  upvcPressureFittingsDin: {
    src: PDF_PATHS.UPVC_PRESSURE_FITTINGS_DIN,
    title: 'Pressure Fittings - DIN Standard',
    titleAr: 'توصيلات الضغط - معيار DIN',
    description: 'DIN 8063 fittings for metric pressure systems',
    descriptionAr: 'توصيلات DIN 8063 لأنظمة الضغط المترية',
    titleFr: 'Raccords Pression - Norme DIN',
    descriptionFr: 'Raccords DIN 8063 pour systèmes pression métriques',
  },
  upvcPressureFittingsAstm: {
    src: PDF_PATHS.UPVC_PRESSURE_FITTINGS_ASTM,
    title: 'Pressure Fittings - ASTM Standard',
    titleAr: 'توصيلات الضغط - معيار ASTM',
    description: 'ASTM D2466 Schedule 40 fittings for inch series',
    descriptionAr: 'توصيلات ASTM D2466 جدول 40 لسلسلة البوصة',
    titleFr: 'Raccords Pression - Norme ASTM',
    descriptionFr: 'Raccords ASTM D2466 Schedule 40 pour séries en pouces',
  },

  // UPVC Drainage
  upvcDrainagePipes: {
    src: PDF_PATHS.UPVC_DRAINAGE_PIPES,
    title: 'UPVC Drainage Pipes',
    titleAr: 'أنابيب الصرف UPVC',
    description: 'Above & underground drainage pipe systems',
    descriptionAr: 'أنظمة أنابيب الصرف الأرضية وتحت الأرض',
    titleFr: 'Tuyaux de Drainage UPVC',
    descriptionFr: 'Systèmes de tuyaux de drainage aérien et souterrain',
  },
  upvcDrainageFittings1329: {
    src: PDF_PATHS.UPVC_DRAINAGE_FITTINGS_1329,
    title: 'Drainage Fittings - BS EN 1329',
    titleAr: 'توصيلات الصرف - BS EN 1329',
    description: 'Above ground fittings (supersedes BS 5255 & BS 4514)',
    descriptionAr: 'توصيلات أرضية (تحل محل BS 5255 و BS 4514)',
    titleFr: 'Raccords de Drainage - BS EN 1329',
    descriptionFr: 'Raccords aériens (remplace BS 5255 et BS 4514)',
  },
  upvcDrainageFittings1401: {
    src: PDF_PATHS.UPVC_DRAINAGE_FITTINGS_1401,
    title: 'Drainage Fittings - BS EN 1401',
    titleAr: 'توصيلات الصرف - BS EN 1401',
    description: 'Underground fittings (supersedes BS 4660 & BS 5481)',
    descriptionAr: 'توصيلات تحت الأرض (تحل محل BS 4660 و BS 5481)',
    titleFr: 'Raccords de Drainage - BS EN 1401',
    descriptionFr: 'Raccords souterrains (remplace BS 4660 et BS 5481)',
  },

  // UPVC Duct & Fabrication
  upvcDuctPipes: {
    src: PDF_PATHS.UPVC_DUCT_PIPES,
    title: 'PVC Duct Pipes & Accessories',
    titleAr: 'أنابيب وملحقات قنوات UPVC',
    description: 'Telecom & electrical cable protection systems',
    descriptionAr: 'أنظمة حماية كابلات الاتصالات والكهرباء',
    titleFr: 'Tuyaux et Accessoires de Gaine PVC',
    descriptionFr: 'Systèmes de protection de câbles télécom et électriques',
  },
  upvcFabrication: {
    src: PDF_PATHS.UPVC_FABRICATION,
    title: 'Fabrication & Accessories',
    titleAr: 'التصنيع والملحقات',
    description: 'Custom fabrication options & system accessories',
    descriptionAr: 'خيارات التصنيع المخصصة وملحقات النظام',
    titleFr: 'Fabrications et Accessoires',
    descriptionFr: 'Options de fabrication sur mesure et accessoires de système',
  },

  // PVC Conduit
  pvcConduit: {
    src: PDF_PATHS.UPVC_CONDUIT,
    title: 'PVC Conduit Pipes',
    titleAr: 'أنابيب قنوات PVC',
    description: 'Schedule 40/80 | 320N/750N/1250N crush resistance',
    descriptionAr: 'جدول 40/80 | مقاومة سحق 320N/750N/1250N',
    titleFr: 'Tuyaux Conduit PVC',
    descriptionFr: 'Schedule 40/80 | Résistance à l\'écrasement 320N/750N/1250N',
  },

  // Common UPVC References
  upvcStandards: {
    src: PDF_PATHS.UPVC_STANDARDS,
    title: 'Standards Overview',
    titleAr: 'نظرة عامة على المعايير',
    description: 'Complete standards reference for UPVC systems',
    descriptionAr: 'مرجع المعايير الكامل لأنظمة UPVC',
    titleFr: 'Aperçu des Normes',
    descriptionFr: 'Référence complète des normes pour les systèmes UPVC',
  },
  upvcTechSpecs: {
    src: PDF_PATHS.UPVC_TECH_SPECS,
    title: 'Technical Specifications',
    titleAr: 'المواصفات الفنية',
    description: 'Material properties, chemical resistance & testing data',
    descriptionAr: 'خصائص المواد ومقاومة المواد الكيميائية وبيانات الاختبار',
    titleFr: 'Spécifications Techniques',
    descriptionFr: 'Propriétés des matériaux, résistance chimique et données d\'essai',
  },

  // PPR
  pprPipes: {
    src: PDF_PATHS.PPR_PIPES,
    title: 'PPR Pipes',
    titleAr: 'أنابيب PPR',
    description: 'Hot & cold water systems | PN10/16/20 | DIN 8077/78',
    descriptionAr: 'أنظمة المياه الساخنة والباردة | PN10/16/20 | DIN 8077/78',
    titleFr: 'Tuyaux PPR',
    descriptionFr: 'Systèmes eau chaude et froide | PN10/16/20 | DIN 8077/78',
  },

  // Polyethylene
  peSystem: {
    src: PDF_PATHS.PE_SYSTEM,
    title: 'Polyethylene Pipe Systems',
    titleAr: 'أنظمة أنابيب البولي إيثيلين',
    description: 'HDPE PE63/80/100 | Irrigation & water distribution',
    descriptionAr: 'HDPE PE63/80/100 | الري وتوزيع المياه',
    titleFr: 'Systèmes de Tuyaux en Polyéthylène',
    descriptionFr: 'HDPE PE63/80/100 | Irrigation et distribution d\'eau',
  },
} as const;

// ============================================================================
// CATEGORY-LEVEL DOCUMENTS
// Maps category slug to array of technical documents for category pages
// ============================================================================
export const categoryDocs: Record<string, PdfDocument[]> = {
  // ── Legacy slugs (kept for backward compat if referenced elsewhere) ──
  'upvc-pressure': [
    DOCS.upvcPressurePipes,
    DOCS.upvcPressureFittingsBsEn,
    DOCS.upvcPressureFittingsDin,
    DOCS.upvcPressureFittingsAstm,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'upvc-drainage': [
    DOCS.upvcDrainagePipes,
    DOCS.upvcDrainageFittings1329,
    DOCS.upvcDrainageFittings1401,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'upvc-duct': [
    DOCS.upvcDuctPipes,
    DOCS.upvcFabrication,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'pvc-conduit': [
    DOCS.pvcConduit,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'ppr': [
    DOCS.pprPipes,
  ],
  'polyethylene': [
    DOCS.peSystem,
  ],

  // ── New 13-category slugs (aligned to config/products.ts) ──
  'upvc-drainage-pipes': [
    DOCS.upvcDrainagePipes,
    DOCS.upvcDrainageFittings1329,
    DOCS.upvcDrainageFittings1401,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'upvc-drainage-fittings': [
    DOCS.upvcDrainageFittings1329,
    DOCS.upvcDrainageFittings1401,
    DOCS.upvcDrainagePipes,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'pvc-high-pressure-pipes': [
    DOCS.upvcPressurePipes,
    DOCS.upvcPressureFittingsBsEn,
    DOCS.upvcPressureFittingsDin,
    DOCS.upvcPressureFittingsAstm,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'pvc-high-pressure-fittings': [
    DOCS.upvcPressureFittingsBsEn,
    DOCS.upvcPressureFittingsDin,
    DOCS.upvcPressureFittingsAstm,
    DOCS.upvcPressurePipes,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'pvc-sch-40-fittings': [
    DOCS.upvcPressureFittingsAstm,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'pvc-duct-pipes': [
    DOCS.upvcDuctPipes,
    DOCS.upvcFabrication,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'pvc-duct-fittings': [
    DOCS.upvcDuctPipes,
    DOCS.upvcFabrication,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'pvc-conduit-pipes': [
    DOCS.pvcConduit,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'ppr-pipes': [
    DOCS.pprPipes,
  ],
  'hdpe-pipes': [
    DOCS.peSystem,
  ],
  'pex-pipes': [],           // No PEX PDF available in public/pdfs
  'fabrications-accessories': [
    DOCS.upvcFabrication,
    DOCS.upvcStandards,
  ],
  'solvents': [],            // No Solvents PDF available in public/pdfs
};

// ============================================================================
// PRODUCT-LEVEL DOCUMENTS
// Maps "categorySlug/productSlug" to array of technical documents for product detail pages
// Falls back to categoryDocs if no product-specific mapping exists
// ============================================================================
export const productDocs: Record<string, PdfDocument[]> = {
  // ─────────────────────────────────────────────────────────────────────────
  // 1) UPVC DRAINAGE PIPES
  // ─────────────────────────────────────────────────────────────────────────
  'upvc-drainage-pipes/upvc-drainage-pipes-bs5255-bs-en-1329': [
    DOCS.upvcDrainagePipes,
    DOCS.upvcDrainageFittings1329,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'upvc-drainage-pipes/upvc-drainage-pipes-bs-en-1401': [
    DOCS.upvcDrainagePipes,
    DOCS.upvcDrainageFittings1401,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  // upvc-drainage-pipes-non-standard → falls back to categoryDocs

  // ─────────────────────────────────────────────────────────────────────────
  // 2) UPVC DRAINAGE FITTINGS
  // ─────────────────────────────────────────────────────────────────────────
  'upvc-drainage-fittings/upvc-drainage-fittings-bs-en-1329': [
    DOCS.upvcDrainageFittings1329,
    DOCS.upvcDrainagePipes,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'upvc-drainage-fittings/upvc-drainage-fittings-bs-en-1401': [
    DOCS.upvcDrainageFittings1401,
    DOCS.upvcDrainagePipes,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  // upvc-drainage-fittings-pushfit → falls back to categoryDocs

  // ─────────────────────────────────────────────────────────────────────────
  // 3) PVC HIGH PRESSURE PIPES
  // ─────────────────────────────────────────────────────────────────────────
  'pvc-high-pressure-pipes/pvc-hp-pipes-iso-4422': [
    DOCS.upvcPressurePipes,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'pvc-high-pressure-pipes/pvc-hp-pipes-din-8061-62': [
    DOCS.upvcPressurePipes,
    DOCS.upvcPressureFittingsDin,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'pvc-high-pressure-pipes/pvc-hp-pipes-bs-en-iso-1452-2': [
    DOCS.upvcPressurePipes,
    DOCS.upvcPressureFittingsBsEn,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'pvc-high-pressure-pipes/pvc-hp-pipes-bs-3505': [
    DOCS.upvcPressurePipes,
    DOCS.upvcPressureFittingsBsEn,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'pvc-high-pressure-pipes/pvc-hp-pipes-bs-3506': [
    DOCS.upvcPressurePipes,
    DOCS.upvcPressureFittingsBsEn,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'pvc-high-pressure-pipes/pvc-hp-pipes-astm-d1785': [
    DOCS.upvcPressurePipes,
    DOCS.upvcPressureFittingsAstm,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'pvc-high-pressure-pipes/pvc-hp-pipes-astm-d2241': [
    DOCS.upvcPressurePipes,
    DOCS.upvcPressureFittingsAstm,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // 4) PVC HIGH PRESSURE FITTINGS
  // ─────────────────────────────────────────────────────────────────────────
  'pvc-high-pressure-fittings/pvc-hp-fittings-din-8063': [
    DOCS.upvcPressureFittingsDin,
    DOCS.upvcPressurePipes,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'pvc-high-pressure-fittings/pvc-hp-fittings-bs-en-1452-3': [
    DOCS.upvcPressureFittingsBsEn,
    DOCS.upvcPressurePipes,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  // pvc-hp-fittings-valves → falls back to categoryDocs

  // ─────────────────────────────────────────────────────────────────────────
  // 5) PVC SCH 40 FITTINGS
  // ─────────────────────────────────────────────────────────────────────────
  'pvc-sch-40-fittings/pvc-sch-40-fittings-astm-d2466': [
    DOCS.upvcPressureFittingsAstm,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // 6) PVC DUCT PIPES
  // ─────────────────────────────────────────────────────────────────────────
  // All subcategories fall back to categoryDocs (ductPipes + fabrication + standards + techSpecs)

  // ─────────────────────────────────────────────────────────────────────────
  // 7) PVC DUCT FITTINGS
  // ─────────────────────────────────────────────────────────────────────────
  // Single subcategory falls back to categoryDocs

  // ─────────────────────────────────────────────────────────────────────────
  // 8) PVC CONDUIT PIPES
  // ─────────────────────────────────────────────────────────────────────────
  // All subcategories fall back to categoryDocs (conduit + standards + techSpecs)

  // ─────────────────────────────────────────────────────────────────────────
  // 9) PP-R PIPES
  // ─────────────────────────────────────────────────────────────────────────
  // All SDR variants fall back to categoryDocs (pprPipes)

  // ─────────────────────────────────────────────────────────────────────────
  // 10) HDPE PIPES
  // ─────────────────────────────────────────────────────────────────────────
  // All PE grade variants fall back to categoryDocs (peSystem)

  // ─────────────────────────────────────────────────────────────────────────
  // 11) PEX PIPES — No PDFs available
  // 12) FABRICATIONS & ACCESSORIES — Falls back to categoryDocs
  // 13) SOLVENTS — No PDFs available
  // ─────────────────────────────────────────────────────────────────────────
};

// ============================================================================
// TOP-LEVEL FEATURED DOCUMENTS
// For main /products page - shows 1 key PDF per category as highlights
// ============================================================================
export const topLevelDocs: PdfDocument[] = [
  {
    src: PDF_PATHS.UPVC_PRESSURE_PIPES,
    title: 'UPVC Pressure Pipes',
    description: 'Metric & Inch series | PN6-16 | BS EN 1452, DIN 8061/62',
  },
  {
    src: PDF_PATHS.UPVC_DRAINAGE_PIPES,
    title: 'UPVC Drainage Pipes',
    description: 'Above/underground | BS EN 1329/1401',
  },
  {
    src: PDF_PATHS.UPVC_DUCT_PIPES,
    title: 'PVC Duct Pipes',
    description: 'Telecom & electrical | DIN 8062, NEMA TC-2',
  },
  {
    src: PDF_PATHS.UPVC_CONDUIT,
    title: 'PVC Conduit Pipes',
    description: 'Schedule 40/80 | 320N/750N/1250N crush resistance',
  },
  {
    src: PDF_PATHS.PPR_PIPES,
    title: 'PPR Pipes',
    description: 'Hot & cold water | PN10/16/20 | DIN 8077/78',
  },
  {
    src: PDF_PATHS.PE_SYSTEM,
    title: 'HDPE Pipe Systems',
    description: 'Irrigation & water | PE63/80/100 | ISO 4427',
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get documents for a specific category
 * @param categorySlug - e.g. 'upvc-pressure'
 */
export function getDocsByCategory(categorySlug: string): PdfDocument[] {
  return categoryDocs[categorySlug] || [];
}

/**
 * Get documents for a specific product
 * @param categorySlug - e.g. 'upvc-pressure'
 * @param productSlug - e.g. 'pvc-pressure-din-8063'
 * @returns Product-specific docs, or falls back to category docs if no product mapping exists
 */
export function getDocsByProduct(categorySlug: string, productSlug: string): PdfDocument[] {
  const key = `${categorySlug}/${productSlug}`;
  const docs = productDocs[key];

  // If no product-specific docs, fall back to category docs
  if (!docs || docs.length === 0) {
    return categoryDocs[categorySlug] || [];
  }

  return docs;
}
