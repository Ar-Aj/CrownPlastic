/**
 * Product Detail Types
 * 
 * Shared type definitions for the reusable product detail experience.
 * These types define the data shape for pipe tables, fittings galleries,
 * and full product detail page configurations.
 * Trilingual support: English (default), Arabic (*Ar), French (*Fr).
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
  labelAr?: string;   // Arabic equivalent of label
  labelFr?: string;   // French equivalent of label
  align?: 'left' | 'center' | 'right';
  groupLabel?: string; // optional parent grouped header label (raw string or i18n key)
  groupLabelFr?: string; // French equivalent of groupLabel
  colSpan?: number;    // how many columns this group spans; only on the FIRST column of the group
  superGroupLabel?: string; // optional grandparent grouped header label
  superGroupLabelFr?: string; // French equivalent of superGroupLabel
  superColSpan?: number; // how many columns this grandparent group spans; only on the FIRST column of the group
  megaGroupLabel?: string; // optional great-grandparent grouped header label for 4-tier nesting
  megaGroupLabelFr?: string; // French equivalent of megaGroupLabel
  megaColSpan?: number; // how many columns this great-grandparent group spans; only on the FIRST column of the group
};

/**
 * A complete pipe specification table
 */
export type PipeTable = {
  id: string;                     // e.g., "din-8063-pipes"
  title: string;                  // e.g., "PVC Pressure Pipes DIN 8063"
  titleAr?: string;               // Arabic equivalent of title
  titleFr?: string;               // French equivalent of title
  sectionLabel?: string;          // optional full-width divider label above the data rows
  sectionLabelAr?: string;
  sectionLabelFr?: string;
  columns: PipeTableColumn[];
  rows: Record<string, string | null>[]; // each key matches a column.key
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
  | 'pushfit'
  | 'other';

/**
 * Human-readable labels for fitting families
 */
export const FITTING_FAMILY_LABELS: Record<FittingFamily, string> = {
  'moulded': 'Moulded Fittings',
  'fabricated': 'Fabricated Fittings',
  'brass-insert': 'Brass Inserts',
  'solvent-cement': 'Solvent Cement',
  'pushfit': 'Pushfit Fittings',
  'other': 'Other Fittings',
};

export const FITTING_FAMILY_LABELS_AR: Record<FittingFamily, string> = {
  'moulded': 'وصلات مصبوبة',
  'fabricated': 'وصلات مصنعة',
  'brass-insert': 'حشوات نحاسية',
  'solvent-cement': 'مادة لحام',
  'pushfit': 'وصلات ضغط',
  'other': 'وصلات أخرى',
};

export const FITTING_FAMILY_LABELS_FR: Record<FittingFamily, string> = {
  'moulded': 'RACCORDS MOULÉS',
  'fabricated': 'RACCORDS FAÇONNÉS',
  'brass-insert': 'INSERTS EN LAITON',
  'solvent-cement': 'COLLE SOLVANT',
  'pushfit': 'RACCORDS À EMBOÎTEMENT',
  'other': 'AUTRES RACCORDS',
};

/**
 * Column definition for fitting specification tables
 */
export type FittingSpecColumn = {
  key: string;        // normalised key used in rows, e.g., "nominal_size_mm"
  label: string;      // original header text from PDF/JSON, e.g., "NOMINAL SIZE (mm)"
  labelAr?: string;   // Arabic equivalent of label
  labelFr?: string;   // French equivalent of label
  groupLabel?: string; // optional i18n key or raw string for the parent grouped header row, e.g., "products.tables.dimensions_mm"
  groupLabelFr?: string; // French equivalent of groupLabel
  colSpan?: number;    // how many columns this group spans; only needed on the FIRST column of the group
};


/**
 * Full specification table for a fitting
 */
export type FittingSpecTable = {
  id: string;    // slug, e.g., "elbow-90"
  title: string; // e.g., "ELBOW 90°"
  titleAr?: string;
  titleFr?: string;
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
  nameAr?: string;
  nameFr?: string;
  family: FittingFamily;
  image: string;              // path for Next/Image
  colorVariants?: Record<string, string>; // e.g., { grey: '/path.png', olive: '/path2.png' }
  sizes: SizeRow[];           // quick size list for modal header (NO part column)
  sizesMM?: SizeRow[];        // optional metric-only sizes for inch/mm toggle
  sizeHeaderOverride?: string; // optional override for the sizes table header translation key
  tags?: string[];            // e.g., ["NEW"]
  table?: FittingSpecTable;   // full specification table with all columns
  isDisplayOnly?: boolean;    // when true, disables click interaction and data tables
};

// ═══════════════════════════════════════════════════════════════════════════════
// DO'S & DON'TS
// ═══════════════════════════════════════════════════════════════════════════════

export type DosDonts = {
  dos: string[];
  donts: string[];
  dosFr?: string[];
  dontsFr?: string[];
};

// ═══════════════════════════════════════════════════════════════════════════════
// HAND-AUTHORED FAQs (AEO — Answer Engine Optimisation)
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * A single hand-authored FAQ entry with trilingual support.
 * Used on both product detail pages and category hub pages
 * to surface search-intent Q&As for Google Featured Snippets.
 */
export type ProductFAQ = {
  q: string;    // English question
  qAr: string;  // Arabic question
  qFr?: string; // French question
  a: string;    // English answer
  aAr: string;  // Arabic answer
  aFr?: string; // French answer
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
  titleFr?: string;
  description: string;  // 1-2 line summary
  descriptionAr?: string;
  descriptionFr?: string;
  features: string[];   // 2-3 key features/bullets
  featuresAr?: string[];
  featuresFr?: string[];
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
  titleFr?: string;           // French title
  shortDescription: string;
  shortDescriptionAr?: string;
  shortDescriptionFr?: string;
  overview: string;
  overviewAr?: string;
  overviewFr?: string;
  features: string[];
  featuresAr?: string[];
  featuresFr?: string[];
  image?: string;             // Optional product hero image override
  renderImage?: string;       // 3D/Product render
  diagramImage?: string;      // Technical/Schematic diagram
  applications: string[];
  applicationsAr?: string[];
  applicationsFr?: string[];
  pipesTables: PipeTable[];
  fittings: Fitting[];
  fittingsTabLabelKey?: string;          // optional translation key for the sticky nav label (e.g., 'products.solvent.nav_label')
  colorLabel?: string;                   // e.g. 'orange' | 'dark-grey' | 'white' | 'black' — drives the color tab in FittingsGallery for single-color product lines
  variants?: ProductVariant[];           // optional product variants/configurations
  variantsSectionTitle?: string;         // e.g., "Grease Trap Configurations"
  variantsSectionTitleAr?: string;
  variantsSectionTitleFr?: string;
  downloads?: { label: string; labelAr?: string; labelFr?: string; href: string }[];
  videoUrl?: string;
  technicalProperties?: { property: string; value: string }[];
  technicalPropertiesAr?: { property: string; value: string }[];
  technicalPropertiesFr?: { property: string; value: string }[];
  systemAdvantages?: string[];
  systemAdvantagesAr?: string[];
  systemAdvantagesFr?: string[];
  dosDonts?: DosDonts;
  dosDontsAr?: DosDonts;
  dosDontsFr?: DosDonts;
  accessoriesGallery?: { name: string; nameAr?: string; nameFr?: string; imageSrc: string }[];
  faqs?: ProductFAQ[];       // Hand-authored AEO FAQs (overrides auto-generated when present)
};

// ═══════════════════════════════════════════════════════════════════════════════
// NAV SECTIONS (for scroll navigation)
// ═══════════════════════════════════════════════════════════════════════════════

export type NavSection = {
  id: string;
  label: string;
  labelAr?: string;
  labelFr?: string;
};

/**
 * All possible sections in product detail page
 */
export const PRODUCT_DETAIL_SECTIONS: NavSection[] = [
  { id: 'overview', label: 'Overview', labelAr: 'نظرة عامة', labelFr: 'Aperçu' },
  { id: 'features', label: 'Features', labelAr: 'المميزات', labelFr: 'Caractéristiques' },
  { id: 'technical-properties', label: 'Technical Properties', labelAr: 'الخصائص الفنية', labelFr: 'Propriétés Techniques' },
  { id: 'system-advantages', label: 'System Advantages', labelAr: 'مزايا النظام', labelFr: 'Avantages du Système' },
  { id: 'applications', label: 'Applications', labelAr: 'التطبيقات', labelFr: 'Applications' },
  { id: 'variants', label: 'Configurations', labelAr: 'التكوينات', labelFr: 'Configurations' },
  { id: 'pipes', label: 'Pipes', labelAr: 'الأنابيب', labelFr: 'Tuyaux' },
  { id: 'fittings', label: 'Fittings', labelAr: 'التوصيلات', labelFr: 'Raccords' },
  { id: 'video', label: 'Video', labelAr: 'فيديو', labelFr: 'Vidéo' },
  { id: 'dos-donts', label: "Do's & Don'ts", labelAr: 'افعل ولا تفعل', labelFr: 'À Faire / À Éviter' },
  { id: 'frequently-asked-questions', label: 'Technical FAQs', labelAr: 'الأسئلة الشائعة التقنية', labelFr: 'FAQ Techniques' },
];
