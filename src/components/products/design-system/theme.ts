// ═══════════════════════════════════════════════════════════════════════════════
// CROWN PLASTIC PIPES - PRODUCT DESIGN SYSTEM
// Unified visual language for all product-related pages
// ═══════════════════════════════════════════════════════════════════════════════
//
// DESIGN DNA SUMMARY:
// - Home: White-dominant, blue/black accents, floating glass badges, dot patterns
// - About: Cinematic video hero, 3D PipeFrame borders, dark blue gradients, wire bundles
// - Product pages: Should bridge both - premium but lighter, technical but clean
//
// This system creates visual consistency across:
// - Category listing pages (/products/[category])
// - Product detail pages (/products/[category]/[product])
// - Related product cards and grids
//
// ═══════════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════════
// COLOR TOKENS - Crown Brand Palette
// ═══════════════════════════════════════════════════════════════════════════════

export const productColors = {
  // Primary brand blue (matches existing --color-primary)
  primary: {
    50: '#EBF5FF',
    100: '#E1EFFE',
    200: '#C3DDFD',
    300: '#A4CAFE',
    400: '#76A9FA',
    500: '#0072BC', // Main brand blue
    600: '#0052CC', // Action blue
    700: '#003D99',
    800: '#002B70',
    900: '#001A47',
  },
  
  // Neutral slate palette
  slate: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
  
  // Surface colors for backgrounds
  surface: {
    white: '#FFFFFF',
    light: '#F8FAFC',      // slate-50
    soft: '#F1F5F9',       // slate-100
    softBlue: '#EFF6FF',   // blue-50
    muted: '#E2E8F0',      // slate-200
  },
  
  // Border colors
  border: {
    light: 'rgba(226, 232, 240, 0.8)',    // slate-200/80
    default: '#E2E8F0',                    // slate-200
    subtle: 'rgba(203, 213, 225, 0.5)',   // slate-300/50
    blue: 'rgba(0, 114, 188, 0.15)',      // primary/15
    blueHover: 'rgba(0, 114, 188, 0.25)', // primary/25
  },
  
  // Glass morphism palette
  glass: {
    white: 'rgba(255, 255, 255, 0.85)',
    whiteHover: 'rgba(255, 255, 255, 0.95)',
    blue: 'rgba(0, 114, 188, 0.08)',
    blueHover: 'rgba(0, 114, 188, 0.12)',
    dark: 'rgba(15, 23, 42, 0.85)',
    border: 'rgba(255, 255, 255, 0.2)',
  },
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// SHADOW TOKENS - Depth & Elevation System
// ═══════════════════════════════════════════════════════════════════════════════

export const productShadows = {
  // Card shadows (layered for depth)
  card: {
    sm: '0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.02)',
    md: '0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -1px rgba(15, 23, 42, 0.03)',
    lg: '0 10px 25px -3px rgba(15, 23, 42, 0.08), 0 4px 10px -2px rgba(15, 23, 42, 0.04)',
    xl: '0 20px 40px -8px rgba(15, 23, 42, 0.12), 0 8px 16px -4px rgba(15, 23, 42, 0.06)',
  },
  
  // Hover states
  hover: {
    lift: '0 12px 28px -6px rgba(15, 23, 42, 0.12), 0 6px 12px -3px rgba(15, 23, 42, 0.06)',
    glow: '0 0 0 3px rgba(0, 114, 188, 0.1), 0 10px 25px -3px rgba(0, 114, 188, 0.15)',
  },
  
  // Blue accent glow
  glow: {
    primary: '0 0 30px rgba(0, 114, 188, 0.15)',
    primaryStrong: '0 0 50px rgba(0, 114, 188, 0.2)',
    subtle: '0 0 20px rgba(0, 114, 188, 0.08)',
  },
  
  // Inner shadows for depth
  inner: {
    subtle: 'inset 0 1px 2px rgba(15, 23, 42, 0.04)',
    medium: 'inset 0 2px 4px rgba(15, 23, 42, 0.06)',
  },
  
  // Table and container shadows
  table: '0 1px 3px rgba(15, 23, 42, 0.03), 0 1px 2px rgba(15, 23, 42, 0.02)',
  tableHover: '0 4px 12px rgba(15, 23, 42, 0.06)',
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// BORDER RADIUS TOKENS
// ═══════════════════════════════════════════════════════════════════════════════

export const productRadii = {
  sm: '0.375rem',   // 6px
  md: '0.5rem',     // 8px
  lg: '0.75rem',    // 12px
  xl: '1rem',       // 16px
  '2xl': '1.5rem',  // 24px
  '3xl': '2rem',    // 32px
  full: '9999px',
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// SPACING TOKENS - Consistent Section Spacing
// ═══════════════════════════════════════════════════════════════════════════════

export const productSpacing = {
  // Section padding
  section: {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-20 md:py-32',
  },
  
  // Container max-widths
  container: {
    prose: 'max-w-3xl',
    content: 'max-w-5xl',
    wide: 'max-w-6xl',
    full: 'max-w-7xl',
  },
  
  // Standard container with responsive padding
  wrapper: 'mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none',
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// BACKGROUND PATTERN TOKENS
// ═══════════════════════════════════════════════════════════════════════════════

export const productPatterns = {
  // Technical grid (subtle dot pattern)
  dotGrid: {
    svg: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23CBD5E1' fill-opacity='0.4'/%3E%3C/svg%3E")`,
    size: '20px 20px',
  },
  
  // Finer grid for hero sections
  fineGrid: {
    svg: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='0.5' fill='%230072BC' fill-opacity='0.08'/%3E%3C/svg%3E")`,
    size: '16px 16px',
  },
  
  // Cross-hatch technical pattern
  crossHatch: {
    svg: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20h40M20 0v40' stroke='%23CBD5E1' stroke-width='0.5' fill='none' stroke-opacity='0.3'/%3E%3C/svg%3E")`,
    size: '40px 40px',
  },
  
  // Blueprint-style grid (for dark backgrounds)
  blueprint: {
    svg: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 30h60M30 0v60' stroke='%2338BDF8' stroke-width='0.5' fill='none' stroke-opacity='0.1'/%3E%3Cpath d='M0 15h60M0 45h60M15 0v60M45 0v60' stroke='%2338BDF8' stroke-width='0.25' fill='none' stroke-opacity='0.05'/%3E%3C/svg%3E")`,
    size: '60px 60px',
  },
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// GRADIENT TOKENS
// ═══════════════════════════════════════════════════════════════════════════════

export const productGradients = {
  // Radial glow for hero accents
  radialGlow: {
    primary: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0, 114, 188, 0.12) 0%, transparent 70%)',
    primaryStrong: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(0, 114, 188, 0.18) 0%, transparent 70%)',
    subtle: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0, 114, 188, 0.06) 0%, transparent 70%)',
  },
  
  // Hero band gradients
  heroBand: {
    softBlue: 'linear-gradient(135deg, #EFF6FF 0%, #F8FAFC 50%, #EFF6FF 100%)',
    light: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
    dark: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
  },
  
  // Section backgrounds
  section: {
    light: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
    softBlue: 'linear-gradient(180deg, #EFF6FF 0%, #F8FAFC 50%, #FFFFFF 100%)',
    darkSlate: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
  },
  
  // Card overlays
  cardOverlay: {
    soft: 'linear-gradient(180deg, transparent 0%, rgba(248, 250, 252, 0.5) 100%)',
    blue: 'linear-gradient(135deg, rgba(0, 114, 188, 0.02) 0%, transparent 100%)',
  },
  
  // Pipe-inspired border gradient
  pipeBorder: {
    horizontal: `linear-gradient(to right, 
      #94A3B8 0%, 
      #E2E8F0 15%, 
      #FFFFFF 30%, 
      #E2E8F0 50%, 
      #94A3B8 70%, 
      #64748B 100%
    )`,
    subtle: `linear-gradient(to right, 
      rgba(148, 163, 184, 0.3) 0%, 
      rgba(226, 232, 240, 0.5) 30%, 
      rgba(148, 163, 184, 0.3) 100%
    )`,
  },
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMATION TOKENS - Subtle hover transforms
// ═══════════════════════════════════════════════════════════════════════════════

export const productMotion = {
  // Hover lift effect
  hoverLift: {
    transform: 'translateY(-4px)',
    transition: 'transform 0.25s ease-out, box-shadow 0.25s ease-out',
  },
  
  // Subtle scale on hover
  hoverScale: {
    transform: 'scale(1.02)',
    transition: 'transform 0.2s ease-out',
  },
  
  // Glow pulse (for focus states)
  glowPulse: {
    animation: 'productGlowPulse 2s ease-in-out infinite',
  },
  
  // Transition timings
  timing: {
    fast: '150ms ease-out',
    normal: '200ms ease-out',
    slow: '300ms ease-out',
  },
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// TYPOGRAPHY TOKENS
// ═══════════════════════════════════════════════════════════════════════════════

export const productTypography = {
  // Display headings
  display: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight',
  h1: 'text-3xl md:text-4xl font-bold leading-tight',
  h2: 'text-2xl md:text-3xl font-bold',
  h3: 'text-xl md:text-2xl font-semibold',
  h4: 'text-lg font-semibold',
  
  // Body text
  body: 'text-base text-slate-600 leading-relaxed',
  bodyLg: 'text-lg text-slate-600 leading-relaxed',
  bodySm: 'text-sm text-slate-500 leading-relaxed',
  
  // Labels and badges
  label: 'text-xs font-semibold uppercase tracking-wider',
  badge: 'text-xs font-medium',
  
  // Table text
  tableHead: 'text-sm font-semibold text-slate-700',
  tableCell: 'text-sm text-slate-600',
  tableCellStrong: 'text-sm font-medium text-slate-800',
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// CSS UTILITY CLASSES - Ready-to-use Tailwind patterns
// ═══════════════════════════════════════════════════════════════════════════════

export const productClasses = {
  // Section backgrounds
  sectionBg: {
    light: 'bg-white',
    soft: 'bg-slate-50',
    softBlue: 'bg-gradient-to-b from-blue-50/50 via-slate-50 to-white',
    darkSlate: 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900',
  },
  
  // Card surfaces
  card: {
    base: 'bg-white rounded-2xl border border-slate-200/80 shadow-sm',
    hover: 'hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300',
    glass: 'bg-white/85 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg',
    accent: 'bg-white rounded-2xl border-2 border-primary/10 shadow-md hover:border-primary/25 transition-colors',
  },
  
  // Badge styles
  badge: {
    primary: 'px-3 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full',
    glass: 'px-3 py-1.5 bg-white/90 backdrop-blur-md text-slate-700 text-xs font-medium rounded-full border border-slate-200/50 shadow-sm',
    outline: 'px-3 py-1.5 border border-primary/20 text-primary text-xs font-medium rounded-full',
  },
  
  // Table styles
  table: {
    wrapper: 'bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden',
    header: 'bg-gradient-to-r from-slate-50 via-blue-50/30 to-slate-50 border-b-2 border-primary/10',
    row: 'border-b border-slate-100 last:border-0 hover:bg-blue-50/30 transition-colors',
    rowAlt: 'even:bg-slate-50/50',
    cell: 'px-6 py-4 text-sm',
    cellHead: 'px-6 py-4 text-sm font-semibold text-slate-700 text-left',
  },
  
  // Divider patterns
  divider: {
    line: 'h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent',
    node: 'flex items-center gap-4 before:flex-1 before:h-px before:bg-gradient-to-r before:from-transparent before:to-slate-200 after:flex-1 after:h-px after:bg-gradient-to-l after:from-transparent after:to-slate-200',
  },
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// PRODUCT UI NOTES
// ═══════════════════════════════════════════════════════════════════════════════
/*

PRODUCT DESIGN SYSTEM - Implementation Notes

1. BACKGROUND VOCABULARY:
   - Light (white): Main content sections, hero areas
   - Soft (slate-50): Feature grids, specs tables
   - Soft-Blue (blue-50 gradient): Hero bands, category headers
   - Dark-Slate: CTAs, premium sections

2. PATTERN LANGUAGE:
   - Dot grid: Subtle technical feel, 40% opacity on soft backgrounds
   - Fine grid: Hero sections, uses brand blue at 8% opacity
   - Cross-hatch: Tables and spec sections for engineering feel
   - Blueprint: Dark sections, evokes About page's technical aesthetic

3. CARD & DEPTH SYSTEM:
   - Base cards: 1px border + subtle shadow
   - Hover cards: Lift transform + enhanced shadow + blue border hint
   - Glass cards: 85% white + backdrop blur (for overlays)
   - Accent cards: 2px primary border at 10% for feature highlights

4. TABLE STYLING:
   - Gradient header row (slate → blue → slate)
   - Blue underline accent (2px, 10% opacity)
   - Alternating rows with very light blue instead of gray
   - Hover state with blue-50/30 background

5. VISUAL MOTIFS:
   - Radial glow behind key elements (12% opacity)
   - Pipe-inspired gradient borders (horizontal shading)
   - Node dividers (circle + line pattern)
   - Glass badges (matching Home's floating tags)

*/
