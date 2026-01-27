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
  description: string;
}

// ============================================================================
// PDF FILE PATHS - All files stored in /public/pdfs/
// NOTE: Filenames use SPACES (URL-encoded as %20) to match actual uploaded files
// ============================================================================
const PDF_PATHS = {
  // UPVC Pressure
  UPVC_PRESSURE_PIPES: '/pdfs/UPVC%20PRESSURE%20PIPES_compressed.pdf',
  UPVC_PRESSURE_FITTINGS_BS_EN: '/pdfs/UPVC%20PRESSURE%20FITTINGS%20BS%20EN%2014523%20-%20BS%204346%20PN%2015_compressed.pdf',
  UPVC_PRESSURE_FITTINGS_DIN: '/pdfs/UPVC%20PRESSURE%20FITTINGS%20DIN%208063_compressed.pdf',
  UPVC_PRESSURE_FITTINGS_ASTM: '/pdfs/UPVC%20PRESSURE%20FITTINGS%20ASTM%20D%202466%20SCH-40_compressed.pdf',
  
  // UPVC Drainage
  UPVC_DRAINAGE_PIPES: '/pdfs/UPVC%20DRAINAGE%20PIPES_compressed.pdf',
  UPVC_DRAINAGE_FITTINGS_1329: '/pdfs/UPVC%20DRAINAGE%20FITTING%20BS%20EN%201329-1%2C2014%20-%20SUPERSEDED%20BS%205255%20AND%20BS4514_compressed.pdf',
  UPVC_DRAINAGE_FITTINGS_1401: '/pdfs/UPVC%20DRAINAGE%20FITTINGS%20BS%20EN%201401%20-%20SUPERSEDED%20BS%204660%20AND%20BS%205481_compressed.pdf',
  
  // UPVC Duct & Conduit
  UPVC_DUCT_PIPES: '/pdfs/UPVC%20DUCT%20PIPES%20AND%20ACCESSORIES_compressed.pdf',
  UPVC_FABRICATION: '/pdfs/UPVC%20FABRICATION%20AND%20ACCESSORIES_compressed.pdf',
  UPVC_CONDUIT: '/pdfs/UPVC%20CONDUIT%20PIPE_compressed.pdf',
  
  // Common UPVC
  UPVC_STANDARDS: '/pdfs/UPVC%20PIPES%20AND%20FITTINGS%20STANDARDS_compressed.pdf',
  UPVC_TECH_SPECS: '/pdfs/UPVC%20TECHNICAL%20SPECIFICATIONS%20AND%20MATERIAL%20PROPERTIES_compressed.pdf',
  
  // PPR & Polyethylene
  PPR_PIPES: '/pdfs/PPR%20PIPES_compressed.pdf',
  PE_SYSTEM: '/pdfs/POLYETHYLENE%20PIPE%20SYSTEM_compressed.pdf',
} as const;

// ============================================================================
// REUSABLE PDF DOCUMENT DEFINITIONS
// ============================================================================
const DOCS = {
  // UPVC Pressure Pipes
  upvcPressurePipes: {
    src: PDF_PATHS.UPVC_PRESSURE_PIPES,
    title: 'UPVC Pressure Pipes',
    description: 'Metric & Inch series pipes | PN6-16 pressure ratings',
  },
  upvcPressureFittingsBsEn: {
    src: PDF_PATHS.UPVC_PRESSURE_FITTINGS_BS_EN,
    title: 'Pressure Fittings - BS EN Standard',
    description: 'BS EN 14523 & BS 4346 PN15 fittings specifications',
  },
  upvcPressureFittingsDin: {
    src: PDF_PATHS.UPVC_PRESSURE_FITTINGS_DIN,
    title: 'Pressure Fittings - DIN Standard',
    description: 'DIN 8063 fittings for metric pressure systems',
  },
  upvcPressureFittingsAstm: {
    src: PDF_PATHS.UPVC_PRESSURE_FITTINGS_ASTM,
    title: 'Pressure Fittings - ASTM Standard',
    description: 'ASTM D2466 Schedule 40 fittings for inch series',
  },
  
  // UPVC Drainage
  upvcDrainagePipes: {
    src: PDF_PATHS.UPVC_DRAINAGE_PIPES,
    title: 'UPVC Drainage Pipes',
    description: 'Above & underground drainage pipe systems',
  },
  upvcDrainageFittings1329: {
    src: PDF_PATHS.UPVC_DRAINAGE_FITTINGS_1329,
    title: 'Drainage Fittings - BS EN 1329',
    description: 'Above ground fittings (supersedes BS 5255 & BS 4514)',
  },
  upvcDrainageFittings1401: {
    src: PDF_PATHS.UPVC_DRAINAGE_FITTINGS_1401,
    title: 'Drainage Fittings - BS EN 1401',
    description: 'Underground fittings (supersedes BS 4660 & BS 5481)',
  },
  
  // UPVC Duct & Fabrication
  upvcDuctPipes: {
    src: PDF_PATHS.UPVC_DUCT_PIPES,
    title: 'UPVC Duct Pipes & Accessories',
    description: 'Telecom & electrical cable protection systems',
  },
  upvcFabrication: {
    src: PDF_PATHS.UPVC_FABRICATION,
    title: 'Fabrication & Accessories',
    description: 'Custom fabrication options & system accessories',
  },
  
  // PVC Conduit
  pvcConduit: {
    src: PDF_PATHS.UPVC_CONDUIT,
    title: 'PVC Conduit Pipes',
    description: 'Schedule 40/80 | 320N/750N/1250N crush resistance',
  },
  
  // Common UPVC References
  upvcStandards: {
    src: PDF_PATHS.UPVC_STANDARDS,
    title: 'Standards Overview',
    description: 'Complete standards reference for UPVC systems',
  },
  upvcTechSpecs: {
    src: PDF_PATHS.UPVC_TECH_SPECS,
    title: 'Technical Specifications',
    description: 'Material properties, chemical resistance & testing data',
  },
  
  // PPR
  pprPipes: {
    src: PDF_PATHS.PPR_PIPES,
    title: 'PPR Pipes',
    description: 'Hot & cold water systems | PN10/16/20 | DIN 8077/78',
  },
  
  // Polyethylene
  peSystem: {
    src: PDF_PATHS.PE_SYSTEM,
    title: 'Polyethylene Pipe Systems',
    description: 'HDPE PE63/80/100 | Irrigation & water distribution',
  },
} as const;

// ============================================================================
// CATEGORY-LEVEL DOCUMENTS
// Maps category slug to array of technical documents for category pages
// ============================================================================
export const categoryDocs: Record<string, PdfDocument[]> = {
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
};

// ============================================================================
// PRODUCT-LEVEL DOCUMENTS
// Maps "categorySlug/productSlug" to array of technical documents for product detail pages
// ============================================================================
export const productDocs: Record<string, PdfDocument[]> = {
  // -------------------------------------------------------------------------
  // PVC PRESSURE PRODUCTS (new standardized slugs)
  // -------------------------------------------------------------------------
  'upvc-pressure/pvc-pressure-din-8063': [
    DOCS.upvcPressurePipes,
    DOCS.upvcPressureFittingsDin,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'upvc-pressure/pvc-pressure-bs-en-1452': [
    DOCS.upvcPressurePipes,
    DOCS.upvcPressureFittingsBsEn,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'upvc-pressure/pvc-pressure-astm-d2466': [
    DOCS.upvcPressurePipes,
    DOCS.upvcPressureFittingsAstm,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  
  // -------------------------------------------------------------------------
  // UPVC DRAINAGE PRODUCTS (new standardized slugs)
  // -------------------------------------------------------------------------
  'upvc-drainage/upvc-drainage-bs-en-1329': [
    DOCS.upvcDrainagePipes,
    DOCS.upvcDrainageFittings1329,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'upvc-drainage/upvc-drainage-bs-en-1401': [
    DOCS.upvcDrainagePipes,
    DOCS.upvcDrainageFittings1401,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  
  // -------------------------------------------------------------------------
  // UPVC DUCT PRODUCTS (single family)
  // -------------------------------------------------------------------------
  'upvc-duct/upvc-duct-black': [
    DOCS.upvcDuctPipes,
    DOCS.upvcFabrication,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  
  // -------------------------------------------------------------------------
  // PVC CONDUIT PRODUCTS (new standardized slugs)
  // -------------------------------------------------------------------------
  'pvc-conduit/upvc-conduit-sch-40': [
    DOCS.pvcConduit,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  'pvc-conduit/upvc-conduit-sch-80': [
    DOCS.pvcConduit,
    DOCS.upvcStandards,
    DOCS.upvcTechSpecs,
  ],
  
  // -------------------------------------------------------------------------
  // PPR PRODUCTS (existing slugs maintained)
  // -------------------------------------------------------------------------
  'ppr/ppr-sdr11-pn10': [
    DOCS.pprPipes,
  ],
  'ppr/ppr-sdr7-4-pn16': [
    DOCS.pprPipes,
  ],
  'ppr/ppr-sdr6-pn20': [
    DOCS.pprPipes,
  ],
  
  // -------------------------------------------------------------------------
  // POLYETHYLENE (HDPE) - No subProducts exposed, category-level only
  // -------------------------------------------------------------------------
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
    title: 'UPVC Duct Pipes',
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
