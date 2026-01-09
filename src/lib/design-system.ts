// ═══════════════════════════════════════════════════════════════════════════════
// CROWN PLASTIC PIPES - PREMIUM DESIGN SYSTEM
// Dubai Commercial Grade UI/UX - Performance-First Motion Design
// ═══════════════════════════════════════════════════════════════════════════════

import { Variants } from 'framer-motion';

// ═══════════════════════════════════════════════════════════════════════════════
// COLOR TOKENS
// ═══════════════════════════════════════════════════════════════════════════════

export const colors = {
  // Primary Brand Colors
  primary: {
    50: '#e6f4fa',
    100: '#cce9f5',
    200: '#99d3eb',
    300: '#66bde1',
    400: '#33a7d7',
    500: '#0072BC', // Main primary
    600: '#005a96',
    700: '#004370',
    800: '#002d4b',
    900: '#001625',
  },
  
  // Accent (Gold/Amber)
  accent: {
    50: '#fef8e7',
    100: '#fdf1cf',
    200: '#fbe39f',
    300: '#f9d56f',
    400: '#f7c73f',
    500: '#D4A853', // Main accent
    600: '#c99542',
    700: '#9f7634',
    800: '#755726',
    900: '#4b3818',
  },
  
  // Semantic Colors
  success: { main: '#10b981', light: '#d1fae5', dark: '#047857' },
  error: { main: '#ef4444', light: '#fee2e2', dark: '#b91c1c' },
  warning: { main: '#f59e0b', light: '#fef3c7', dark: '#b45309' },
  
  // Glass Morphism Palette
  glass: {
    white: 'rgba(255, 255, 255, 0.1)',
    whiteHover: 'rgba(255, 255, 255, 0.15)',
    dark: 'rgba(15, 23, 42, 0.8)',
    border: 'rgba(255, 255, 255, 0.2)',
    borderLight: 'rgba(255, 255, 255, 0.1)',
  },
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// SPACING & SIZING TOKENS
// ═══════════════════════════════════════════════════════════════════════════════

export const spacing = {
  section: {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-20 md:py-32',
    hero: 'py-24 md:py-36',
  },
  container: 'container mx-auto px-4 max-w-7xl',
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// SHADOW TOKENS
// ═══════════════════════════════════════════════════════════════════════════════

export const shadows = {
  glass: '0 8px 32px rgba(0, 0, 0, 0.1)',
  glassLg: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  glow: {
    primary: '0 0 40px rgba(0, 114, 188, 0.3)',
    accent: '0 0 40px rgba(212, 168, 83, 0.3)',
    emerald: '0 10px 30px -10px rgba(16, 185, 129, 0.3)',
  },
  card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  cardHover: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// BORDER RADIUS TOKENS
// ═══════════════════════════════════════════════════════════════════════════════

export const radii = {
  sm: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
  '2xl': '2rem',
  full: '9999px',
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// MOTION PRESETS - GPU ACCELERATED, 60fps
// All animations use transform/opacity only (hardware accelerated)
// ═══════════════════════════════════════════════════════════════════════════════

// Easing Curves
export const easing = {
  smooth: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  spring: { type: 'spring', stiffness: 400, damping: 30 },
  springBouncy: { type: 'spring', stiffness: 500, damping: 25 },
  springSmooth: { type: 'spring', stiffness: 300, damping: 40 },
} as const;

// Stagger Container Variants
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

// Fade Variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
};

// Scale Variants
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
};

// Slide Variants
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  },
};

// Radial Stagger (center explosion effect)
export const radialStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

export const radialItem: Variants = {
  hidden: { opacity: 0, scale: 0.5, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      type: 'spring',
      stiffness: 350,
      damping: 25
    }
  },
};

// Hover Presets (for whileHover)
export const hoverScale = { scale: 1.02 };
export const hoverScaleMd = { scale: 1.05 };
export const hoverScaleLg = { scale: 1.08 };
export const hoverLift = { y: -5, transition: { duration: 0.2 } };
export const hoverGlow = { 
  boxShadow: '0 20px 40px -10px rgba(0, 114, 188, 0.3)',
  transition: { duration: 0.3 }
};

// Tap Presets (for whileTap)
export const tapScale = { scale: 0.98 };
export const tapScaleSm = { scale: 0.95 };

// Page Transition Variants
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3 }
  },
};

// Counter/Number Animation Config
export const counterAnimation = {
  duration: 2,
  easeOut: (t: number) => 1 - Math.pow(1 - t, 3), // Cubic ease out
};

// ═══════════════════════════════════════════════════════════════════════════════
// GLASS MORPHISM UTILITIES
// ═══════════════════════════════════════════════════════════════════════════════

export const glassStyles = {
  // Light glass card (for dark backgrounds)
  light: 'bg-white/10 backdrop-blur-xl border border-white/20',
  lightHover: 'hover:bg-white/15 hover:border-white/30',
  
  // Dark glass card (for light backgrounds)
  dark: 'bg-slate-900/80 backdrop-blur-xl border border-slate-700/50',
  darkHover: 'hover:bg-slate-900/90',
  
  // Premium glass with gradient border
  premium: 'bg-white/5 backdrop-blur-xl border border-white/10 relative overflow-hidden',
  
  // Stat card glass
  stat: 'bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20',
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// GRADIENT PRESETS
// ═══════════════════════════════════════════════════════════════════════════════

export const gradients = {
  // Hero backgrounds
  heroDark: 'bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900',
  heroLight: 'bg-gradient-to-br from-white via-blue-50 to-white',
  
  // CTA backgrounds
  ctaPrimary: 'bg-gradient-to-r from-primary to-primary-dark',
  ctaSuccess: 'bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800',
  
  // Text gradients
  textPrimary: 'bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent',
  textAccent: 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent',
  textBlue: 'bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent',
  
  // Orb gradients (for animated backgrounds)
  orbBlue: 'bg-gradient-to-r from-blue-600/30 to-cyan-500/20',
  orbAmber: 'bg-gradient-to-l from-amber-500/20 to-orange-500/10',
  orbPurple: 'bg-gradient-to-tr from-indigo-600/20 to-purple-500/10',
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// TYPOGRAPHY SCALE
// ═══════════════════════════════════════════════════════════════════════════════

export const typography = {
  display: 'text-5xl md:text-6xl lg:text-7xl font-bold leading-tight',
  h1: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight',
  h2: 'text-3xl md:text-4xl font-bold',
  h3: 'text-2xl md:text-3xl font-bold',
  h4: 'text-xl md:text-2xl font-semibold',
  body: 'text-base text-gray-600 leading-relaxed',
  bodyLg: 'text-lg md:text-xl text-gray-600 leading-relaxed',
  small: 'text-sm text-gray-500',
  label: 'text-sm font-semibold uppercase tracking-wider',
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// BUTTON VARIANTS
// ═══════════════════════════════════════════════════════════════════════════════

export const buttonStyles = {
  base: 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-xl',
  
  sizes: {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  },
  
  variants: {
    primary: 'bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white hover:text-blue-900',
    accent: 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg shadow-amber-500/30',
    success: 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/30',
    outline: 'bg-white text-primary border-2 border-primary/20 hover:border-primary hover:bg-primary/5',
    ghost: 'text-gray-600 hover:text-primary hover:bg-primary/5',
  },
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// NOISE TEXTURE (Base64 SVG)
// ═══════════════════════════════════════════════════════════════════════════════

export const noiseTexture = "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')";

// ═══════════════════════════════════════════════════════════════════════════════
// RESPONSIVE BREAKPOINTS
// ═══════════════════════════════════════════════════════════════════════════════

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// REDUCED MOTION UTILITIES
// ═══════════════════════════════════════════════════════════════════════════════

export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

// Hook to check for reduced motion preference
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
