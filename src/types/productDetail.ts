/**
 * Product Detail Types
 * 
 * Shared type definitions for the reusable product detail experience.
 * These types define the data shape for pipe tables, fittings galleries,
 * and full product detail page configurations.
 */

// ═══════════════════════════════════════════════════════════════════════════════
// SIZE & TABLE TYPES
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * A single size row for fittings tables
 */
export type SizeRow = {
  sizeMm: string;     // e.g., "15 mm"
  sizeInch?: string;  // e.g., "1/2\""
  notes?: string;     // optional notes
};

/**
 * Column definition for pipe tables
 */
export type PipeTableColumn = {
  key: string;        // e.g., "size", "class", "standard"
  label: string;      // e.g., "Size (mm)", "Class", "Standard"
  align?: 'left' | 'center' | 'right';
};

/**
 * A complete pipe specification table
 */
export type PipeTable = {
  id: string;                     // e.g., "din-8063-pipes"
  title: string;                  // e.g., "PVC Pressure Pipes DIN 8063"
  columns: PipeTableColumn[];
  rows: Record<string, string>[]; // each key matches a column.key
};

// ═══════════════════════════════════════════════════════════════════════════════
// FITTINGS TYPES
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Fitting family categories for filtering
 */
export type FittingFamily =
  | 'moulded'
  | 'fabricated'
  | 'brass-insert'
  | 'solvent-cement'
  | 'other';

/**
 * Human-readable labels for fitting families
 */
export const FITTING_FAMILY_LABELS: Record<FittingFamily, string> = {
  'moulded': 'Moulded Fittings',
  'fabricated': 'Fabricated Fittings',
  'brass-insert': 'Brass Inserts',
  'solvent-cement': 'Solvent Cement',
  'other': 'Other Fittings',
};

/**
 * Column definition for fitting specification tables
 */
export type FittingSpecColumn = {
  key: string;   // normalised key used in rows, e.g., "nominal_size_mm"
  label: string; // original header text from PDF/JSON, e.g., "NOMINAL SIZE (mm)"
};

/**
 * Full specification table for a fitting
 */
export type FittingSpecTable = {
  id: string;    // slug, e.g., "elbow-90"
  title: string; // e.g., "ELBOW 90°"
  columns: FittingSpecColumn[];
  rows: Record<string, string | null>[];
};

/**
 * A single fitting product
 */
export type Fitting = {
  id: string;                 // e.g., "8481-ball-valve"
  code?: string;              // e.g., "8481"
  name: string;               // e.g., "Ball Valve With Rubberized Gripper Handle"
  family: FittingFamily;
  image: string;              // path for Next/Image
  sizes: SizeRow[];           // quick size list for modal header (NO part column)
  tags?: string[];            // e.g., ["NEW"]
  table?: FittingSpecTable;   // full specification table with all columns
};

// ═══════════════════════════════════════════════════════════════════════════════
// DO'S & DON'TS
// ═══════════════════════════════════════════════════════════════════════════════

export type DosDonts = {
  dos: string[];
  donts: string[];
};

// ═══════════════════════════════════════════════════════════════════════════════
// PRODUCT VARIANTS (for fabricated products with type configurations)
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * A product variant/configuration (e.g., Type A, Type B for grease traps)
 */
export type ProductVariant = {
  id: string;           // e.g., "typeA"
  title: string;        // e.g., "Type A – Single Bucket Grease Trap"
  titleAr?: string;
  description: string;  // 1-2 line summary
  descriptionAr?: string;
  features: string[];   // 2-3 key features/bullets
  featuresAr?: string[];
  image?: string;       // optional image path
};

// ═══════════════════════════════════════════════════════════════════════════════
// FULL PRODUCT DETAIL CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Complete configuration for a product detail page
 */
export type ProductDetailConfig = {
  slug: string;               // e.g., "pvc-pressure-din-8063"
  categorySlug: string;       // existing category slug (e.g., "upvc-pressure")
  title: string;              // full H1 title
  titleAr?: string;           // Arabic title
  shortDescription: string;
  shortDescriptionAr?: string;
  overview: string;
  overviewAr?: string;
  features: string[];
  featuresAr?: string[];
  applications: string[];
  applicationsAr?: string[];
  pipesTables: PipeTable[];
  fittings: Fitting[];
  variants?: ProductVariant[];           // optional product variants/configurations
  variantsSectionTitle?: string;         // e.g., "Grease Trap Configurations"
  variantsSectionTitleAr?: string;
  downloads?: { label: string; href: string }[];
  videoUrl?: string;
  dosDonts?: DosDonts;
  dosDontsAr?: DosDonts;
};

// ═══════════════════════════════════════════════════════════════════════════════
// NAV SECTIONS (for scroll navigation)
// ═══════════════════════════════════════════════════════════════════════════════

export type NavSection = {
  id: string;
  label: string;
  labelAr?: string;
};

/**
 * All possible sections in product detail page
 */
export const PRODUCT_DETAIL_SECTIONS: NavSection[] = [
  { id: 'overview', label: 'Overview', labelAr: 'نظرة عامة' },
  { id: 'features', label: 'Features', labelAr: 'المميزات' },
  { id: 'applications', label: 'Applications', labelAr: 'التطبيقات' },
  { id: 'variants', label: 'Configurations', labelAr: 'التكوينات' },
  { id: 'pipes', label: 'Pipes', labelAr: 'الأنابيب' },
  { id: 'fittings', label: 'Fittings', labelAr: 'التوصيلات' },
  { id: 'video', label: 'Video', labelAr: 'فيديو' },
  { id: 'dos-donts', label: "Do's & Don'ts", labelAr: 'افعل ولا تفعل' },
];
