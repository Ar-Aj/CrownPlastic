 /**
 * Product Detail Pages - Design System Tokens
 * 
 * Minimalist, premium look using the Crown brand palette.
 * Used exclusively by ProductDetailLayout and related components.
 */

// ═══════════════════════════════════════════════════════════════════════════════
// COLOR TOKENS
// ═══════════════════════════════════════════════════════════════════════════════

export const pdColors = {
  // Backgrounds
  background: '#FFFFFF',
  surface: '#F7F9FC',
  surfaceAlt: '#EEF3FF',
  
  // Brand
  primary: '#0052CC',
  primaryDark: '#003366',
  primarySoft: '#E5EEFF',
  primaryMuted: '#0052CC1A', // 10% opacity
  
  // Text
  textMain: '#111827',
  textSecondary: '#374151',
  textMuted: '#6B7280',
  textLight: '#9CA3AF',
  
  // Borders
  borderSubtle: '#E5E7EB',
  borderMedium: '#D1D5DB',
  borderPrimary: '#0052CC33', // 20% opacity
  
  // Table
  tableHeaderBg: '#0B1B3B',
  tableHeaderText: '#FFFFFF',
  tableRowAlt: '#F9FAFB',
  tableRowHover: '#F3F4F6',
  
  // Status
  success: '#059669',
  successLight: '#D1FAE5',
  error: '#DC2626',
  errorLight: '#FEE2E2',
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// SPACING TOKENS
// ═══════════════════════════════════════════════════════════════════════════════

export const pdSpacing = {
  // Section vertical padding
  sectionY: {
    sm: 'py-10 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-20',
  },
  
  // Section gaps (between sections)
  sectionGap: {
    desktop: 64,
    mobile: 40,
  },
  
  // Container
  container: 'container mx-auto px-4',
  containerMax: 'container mx-auto px-4 max-w-6xl',
  containerNarrow: 'container mx-auto px-4 max-w-4xl',
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// BORDER RADIUS TOKENS
// ═══════════════════════════════════════════════════════════════════════════════

export const pdRadius = {
  sm: 6,
  md: 10,
  lg: 16,
  xl: 20,
  pill: 999,
} as const;

// Tailwind class mappings
export const pdRadiusClass = {
  sm: 'rounded-md',
  md: 'rounded-[10px]',
  lg: 'rounded-2xl',
  xl: 'rounded-[20px]',
  pill: 'rounded-full',
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// SHADOW TOKENS
// ═══════════════════════════════════════════════════════════════════════════════

export const pdShadow = {
  card: '0 4px 20px rgba(15, 23, 42, 0.06)',
  cardHover: '0 10px 30px rgba(15, 23, 42, 0.08)',
  table: '0 1px 3px rgba(0, 0, 0, 0.05)',
  modal: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  subtle: '0 1px 2px rgba(0, 0, 0, 0.04)',
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// TYPOGRAPHY TOKENS
// ═══════════════════════════════════════════════════════════════════════════════

export const pdTypography = {
  // Headings
  h1: 'text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight tracking-tight',
  h2: 'text-2xl md:text-[1.75rem] font-bold leading-tight tracking-tight',
  h3: 'text-xl md:text-2xl font-semibold leading-snug',
  h4: 'text-lg md:text-xl font-semibold leading-snug',
  
  // Body
  bodyLg: 'text-base md:text-lg leading-relaxed',
  body: 'text-[15px] leading-relaxed',
  bodySm: 'text-sm leading-relaxed',
  
  // Labels
  eyebrow: 'text-xs md:text-sm font-semibold uppercase tracking-wider',
  label: 'text-sm font-medium',
  caption: 'text-xs text-gray-500',
  
  // Table
  tableHeader: 'text-xs md:text-sm font-semibold uppercase tracking-wide',
  tableCell: 'text-sm',
  tableCellNum: 'text-sm tabular-nums',
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// GRID LAYOUTS
// ═══════════════════════════════════════════════════════════════════════════════

export const pdGrid = {
  // Feature/Application card grids
  features: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5',
  applications: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5',
  
  // Fittings gallery
  fittings: 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4',
  
  // Stats badges
  stats: 'flex flex-wrap gap-2 md:gap-3',
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// COMPONENT STYLE PRESETS
// ═══════════════════════════════════════════════════════════════════════════════

export const pdStyles = {
  // Stat badge (e.g., "PN 10", "DIN 8077")
  statBadge: `
    inline-flex items-center px-3 py-1.5 
    bg-[#E5EEFF] text-[#0052CC] 
    text-xs md:text-sm font-semibold 
    rounded-full border border-[#0052CC]/10
  `.trim().replace(/\s+/g, ' '),
  
  // Section with surface background
  sectionSurface: 'bg-[#F7F9FC]',
  sectionSurfaceAlt: 'bg-[#EEF3FF]',
  
  // Card base
  card: `
    bg-white rounded-xl border border-gray-100 
    shadow-[0_4px_20px_rgba(15,23,42,0.06)]
    hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)]
    transition-shadow duration-200
  `.trim().replace(/\s+/g, ' '),
  
  // Icon wrapper (for feature icons)
  iconWrapper: `
    w-10 h-10 md:w-11 md:h-11 
    flex items-center justify-center 
    rounded-lg bg-[#E5EEFF] text-[#0052CC]
  `.trim().replace(/\s+/g, ' '),
  
  // Table container
  tableWrapper: `
    overflow-hidden rounded-xl border border-gray-200 
    shadow-[0_1px_3px_rgba(0,0,0,0.05)]
  `.trim().replace(/\s+/g, ' '),
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMATION / TRANSITION TOKENS
// ═══════════════════════════════════════════════════════════════════════════════

export const pdTransition = {
  fast: 'transition-all duration-150 ease-out',
  base: 'transition-all duration-200 ease-out',
  slow: 'transition-all duration-300 ease-out',
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// ICON MAPPING (feature text → icon name)
// Used to auto-detect which icon to show for features/applications
// ═══════════════════════════════════════════════════════════════════════════════

export const featureIconMap: Record<string, string> = {
  // Temperature-related
  'temperature': 'thermometer',
  'thermal': 'thermometer',
  'heat': 'thermometer',
  'cold': 'thermometer',
  
  // Safety / Lead-free
  'lead-free': 'shield-check',
  'lead free': 'shield-check',
  'safe drinking': 'shield-check',
  'potable': 'shield-check',
  'food grade': 'shield-check',
  'non-toxic': 'shield-check',
  
  // Fire safety
  'self-extinguishing': 'fire-off',
  'self extinguishing': 'fire-off',
  'combustion': 'fire-off',
  'fire': 'fire-off',
  'flame': 'fire-off',
  
  // Water
  'water': 'droplet',
  'fluid': 'droplet',
  'liquid': 'droplet',
  'hydraulic': 'droplet',
  
  // Installation
  'installation': 'wrench',
  'install': 'wrench',
  'labour': 'wrench',
  'labor': 'wrench',
  'easy': 'wrench',
  
  // Durability
  'durable': 'shield',
  'durability': 'shield',
  'resistant': 'shield',
  'corrosion': 'shield',
  'chemical': 'shield',
  'uv': 'shield',
  
  // Connection
  'connection': 'pipe',
  'joint': 'pipe',
  'fitting': 'pipe',
  'socket': 'pipe',
  
  // Building / Industrial
  'building': 'building',
  'industrial': 'building',
  'factory': 'building',
  'commercial': 'building',
  
  // Eco
  'eco': 'leaf',
  'environment': 'leaf',
  'sustainable': 'leaf',
  'recyclable': 'leaf',
  'green': 'leaf',
  
  // Pressure
  'pressure': 'gauge',
  'pn': 'gauge',
  'bar': 'gauge',
  
  // Standards
  'standard': 'certificate',
  'certified': 'certificate',
  'compliance': 'certificate',
  'iso': 'certificate',
  'din': 'certificate',
  'bs en': 'certificate',
  'astm': 'certificate',
};

/**
 * Get icon name for a feature string.
 * Matches keywords in the feature text (case-insensitive).
 */
export function getFeatureIcon(feature: string): string {
  const lowerFeature = feature.toLowerCase();
  
  for (const [keyword, iconName] of Object.entries(featureIconMap)) {
    if (lowerFeature.includes(keyword)) {
      return iconName;
    }
  }
  
  // Fallback
  return 'check-circle';
}
