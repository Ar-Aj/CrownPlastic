'use client';

// ═══════════════════════════════════════════════════════════════════════════════
// PRODUCT SECTION - Consistent Section Wrapper for Product Pages
// ═══════════════════════════════════════════════════════════════════════════════
//
// Provides:
// - Consistent vertical spacing (responsive)
// - Background variants (light, soft-blue, dark-slate)
// - Optional top divider with node motif
// - Optional radial glow accent
// - Optional pattern overlay
//
// ═══════════════════════════════════════════════════════════════════════════════

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { productSpacing, productGradients, productPatterns, productColors } from './theme';

// ═══════════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export type SectionBackground = 'white' | 'soft' | 'soft-blue' | 'dark-slate';
export type SectionSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ProductSectionProps {
  children: ReactNode;
  /** Background variant */
  background?: SectionBackground;
  /** Vertical padding size */
  size?: SectionSize;
  /** Show subtle divider at top */
  showDivider?: boolean;
  /** Show radial glow behind content */
  showGlow?: boolean;
  /** Show technical pattern overlay */
  showPattern?: boolean;
  /** Pattern type when showPattern is true */
  patternType?: 'dot' | 'fine' | 'cross' | 'blueprint';
  /** Custom className for the section */
  className?: string;
  /** ID for anchor navigation */
  id?: string;
  /** Max-width constraint */
  maxWidth?: 'prose' | 'content' | 'wide' | 'full' | 'none';
}

// ═══════════════════════════════════════════════════════════════════════════════
// BACKGROUND STYLES MAP
// ═══════════════════════════════════════════════════════════════════════════════

const backgroundStyles: Record<SectionBackground, string> = {
  'white': 'bg-white',
  'soft': 'bg-slate-50',
  'soft-blue': 'bg-gradient-to-b from-blue-50/50 via-slate-50 to-white',
  'dark-slate': 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white',
};

// Dark backgrounds need light text
const isDarkBackground = (bg: SectionBackground): boolean => bg === 'dark-slate';

// ═══════════════════════════════════════════════════════════════════════════════
// PATTERN OVERLAY COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

interface PatternOverlayProps {
  type: 'dot' | 'fine' | 'cross' | 'blueprint';
  isDark?: boolean;
}

function PatternOverlay({ type, isDark }: PatternOverlayProps) {
  const patternMap = {
    dot: productPatterns.dotGrid,
    fine: productPatterns.fineGrid,
    cross: productPatterns.crossHatch,
    blueprint: productPatterns.blueprint,
  };
  
  const pattern = patternMap[type];
  
  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: pattern.svg,
        backgroundSize: pattern.size,
        opacity: isDark ? 1 : 0.6,
      }}
      aria-hidden="true"
    />
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// RADIAL GLOW COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

interface RadialGlowProps {
  intensity?: 'subtle' | 'normal' | 'strong';
}

function RadialGlow({ intensity = 'normal' }: RadialGlowProps) {
  const glowMap = {
    subtle: productGradients.radialGlow.subtle,
    normal: productGradients.radialGlow.primary,
    strong: productGradients.radialGlow.primaryStrong,
  };
  
  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{ background: glowMap[intensity] }}
      aria-hidden="true"
    />
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// NODE DIVIDER COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

interface NodeDividerProps {
  isDark?: boolean;
}

function NodeDivider({ isDark }: NodeDividerProps) {
  const lineColor = isDark ? 'rgba(255,255,255,0.1)' : productColors.border.subtle;
  const nodeColor = isDark ? 'rgba(255,255,255,0.2)' : productColors.primary[500];
  
  return (
    <div className="absolute top-0 left-0 right-0 flex items-center justify-center" aria-hidden="true">
      {/* Left line */}
      <div 
        className="flex-1 h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${lineColor})`,
        }}
      />
      {/* Center node */}
      <div 
        className="w-2 h-2 rounded-full mx-4"
        style={{
          backgroundColor: nodeColor,
          opacity: isDark ? 0.5 : 0.3,
        }}
      />
      {/* Right line */}
      <div 
        className="flex-1 h-px"
        style={{
          background: `linear-gradient(to left, transparent, ${lineColor})`,
        }}
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default function ProductSection({
  children,
  background = 'white',
  size = 'md',
  showDivider = false,
  showGlow = false,
  showPattern = false,
  patternType = 'dot',
  className,
  id,
  maxWidth = 'full',
}: ProductSectionProps) {
  const isDark = isDarkBackground(background);
  
  // Max-width classes
  const maxWidthClasses: Record<string, string> = {
    prose: 'max-w-3xl',
    content: 'max-w-5xl',
    wide: 'max-w-6xl',
    full: 'max-w-7xl',
    none: '',
  };
  
  return (
    <section
      id={id}
      className={cn(
        'relative overflow-hidden',
        backgroundStyles[background],
        productSpacing.section[size],
        className
      )}
    >
      {/* Pattern overlay */}
      {showPattern && (
        <PatternOverlay type={patternType} isDark={isDark} />
      )}
      
      {/* Radial glow */}
      {showGlow && (
        <RadialGlow intensity={isDark ? 'strong' : 'normal'} />
      )}
      
      {/* Top divider */}
      {showDivider && (
        <NodeDivider isDark={isDark} />
      )}
      
      {/* Content container */}
      <div className={cn(
        'relative z-10',
        productSpacing.wrapper,
        maxWidthClasses[maxWidth],
        maxWidth !== 'none' && 'mx-auto'
      )}>
        {children}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION HEADER SUBCOMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export interface SectionHeaderProps {
  /** Section title */
  title: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Eyebrow label above title */
  eyebrow?: string;
  /** Text alignment */
  align?: 'left' | 'center';
  /** Use dark theme styling */
  isDark?: boolean;
  /** Additional className */
  className?: string;
}

export function ProductSectionHeader({
  title,
  subtitle,
  eyebrow,
  align = 'left',
  isDark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(
      'mb-8 md:mb-12',
      align === 'center' && 'text-center',
      className
    )}>
      {/* Eyebrow */}
      {eyebrow && (
        <span className={cn(
          'inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full mb-3',
          isDark 
            ? 'bg-white/10 text-sky-300' 
            : 'bg-primary/10 text-primary'
        )}>
          {eyebrow}
        </span>
      )}
      
      {/* Title */}
      <h2 className={cn(
        'text-2xl md:text-3xl font-bold',
        isDark ? 'text-white' : 'text-slate-900'
      )}>
        {title}
      </h2>
      
      {/* Subtitle */}
      {subtitle && (
        <p className={cn(
          'mt-3 text-base md:text-lg max-w-2xl',
          align === 'center' && 'mx-auto',
          isDark ? 'text-slate-300' : 'text-slate-600'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export { ProductSection };
