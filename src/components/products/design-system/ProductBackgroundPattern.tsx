'use client';

// ═══════════════════════════════════════════════════════════════════════════════
// PRODUCT BACKGROUND PATTERN - Page-Level Background with Technical Grid
// ═══════════════════════════════════════════════════════════════════════════════
//
// A full-page background layer that combines:
// - Light radial gradient (subtle glow effect)
// - Technical grid or dot pattern (engineering aesthetic)
// - Optional vignette for depth
//
// Designed to be placed at the root of product pages to create visual
// consistency with Home and About pages while remaining lighter/softer.
//
// ═══════════════════════════════════════════════════════════════════════════════

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { productPatterns, productGradients, productColors, productShadows } from './theme';

// ═══════════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export type PatternStyle = 'dot' | 'fine' | 'cross' | 'blueprint' | 'none';
export type GlowIntensity = 'none' | 'subtle' | 'normal' | 'strong';

export interface ProductBackgroundPatternProps {
  children: ReactNode;
  /** Pattern style to use */
  pattern?: PatternStyle;
  /** Radial glow intensity */
  glow?: GlowIntensity;
  /** Pattern opacity (0-1) */
  patternOpacity?: number;
  /** Show vignette effect at edges */
  vignette?: boolean;
  /** Base background color */
  baseColor?: 'white' | 'slate' | 'blue';
  /** Additional className */
  className?: string;
}

// ═══════════════════════════════════════════════════════════════════════════════
// PATTERN SVG DATA
// ═══════════════════════════════════════════════════════════════════════════════

const getPatternStyle = (pattern: PatternStyle) => {
  switch (pattern) {
    case 'dot':
      return productPatterns.dotGrid;
    case 'fine':
      return productPatterns.fineGrid;
    case 'cross':
      return productPatterns.crossHatch;
    case 'blueprint':
      return productPatterns.blueprint;
    default:
      return null;
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// GLOW GRADIENTS
// ═══════════════════════════════════════════════════════════════════════════════

const getGlowStyle = (intensity: GlowIntensity) => {
  switch (intensity) {
    case 'subtle':
      return productGradients.radialGlow.subtle;
    case 'normal':
      return productGradients.radialGlow.primary;
    case 'strong':
      return productGradients.radialGlow.primaryStrong;
    default:
      return 'none';
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// BASE COLORS
// ═══════════════════════════════════════════════════════════════════════════════

const baseColorStyles: Record<string, string> = {
  white: 'bg-white',
  slate: 'bg-slate-50',
  blue: 'bg-gradient-to-b from-blue-50/30 via-white to-white',
};

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default function ProductBackgroundPattern({
  children,
  pattern = 'dot',
  glow = 'subtle',
  patternOpacity = 0.5,
  vignette = false,
  baseColor = 'white',
  className,
}: ProductBackgroundPatternProps) {
  const patternData = getPatternStyle(pattern);
  const glowGradient = getGlowStyle(glow);
  
  return (
    <div className={cn('relative min-h-screen', baseColorStyles[baseColor], className)}>
      {/* Pattern layer */}
      {patternData && (
        <div 
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: patternData.svg,
            backgroundSize: patternData.size,
            opacity: patternOpacity,
          }}
          aria-hidden="true"
        />
      )}
      
      {/* Radial glow layer */}
      {glow !== 'none' && (
        <div 
          className="fixed inset-0 pointer-events-none z-0"
          style={{ background: glowGradient }}
          aria-hidden="true"
        />
      )}
      
      {/* Vignette layer */}
      {vignette && (
        <div 
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: `
              radial-gradient(
                ellipse 100% 100% at 50% 50%,
                transparent 60%,
                rgba(248, 250, 252, 0.8) 100%
              )
            `,
          }}
          aria-hidden="true"
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export { ProductBackgroundPattern };

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION-LEVEL PATTERN OVERLAY
// ═══════════════════════════════════════════════════════════════════════════════

export interface PatternOverlayProps {
  pattern?: PatternStyle;
  opacity?: number;
  className?: string;
}

export function PatternOverlay({
  pattern = 'dot',
  opacity = 0.4,
  className,
}: PatternOverlayProps) {
  const patternData = getPatternStyle(pattern);
  if (!patternData) return null;
  
  return (
    <div 
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{
        backgroundImage: patternData.svg,
        backgroundSize: patternData.size,
        opacity,
      }}
      aria-hidden="true"
    />
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// RADIAL GLOW OVERLAY
// ═══════════════════════════════════════════════════════════════════════════════

export interface RadialGlowOverlayProps {
  intensity?: GlowIntensity;
  position?: 'center' | 'top' | 'bottom';
  className?: string;
}

export function RadialGlowOverlay({
  intensity = 'normal',
  position = 'center',
  className,
}: RadialGlowOverlayProps) {
  const positionMap = {
    center: '50% 50%',
    top: '50% 0%',
    bottom: '50% 100%',
  };
  
  const intensityMap = {
    none: 'transparent',
    subtle: 'rgba(0, 114, 188, 0.06)',
    normal: 'rgba(0, 114, 188, 0.12)',
    strong: 'rgba(0, 114, 188, 0.18)',
  };
  
  return (
    <div 
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{
        background: `radial-gradient(ellipse 60% 50% at ${positionMap[position]}, ${intensityMap[intensity]} 0%, transparent 70%)`,
      }}
      aria-hidden="true"
    />
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION DIVIDER WITH NODE
// ═══════════════════════════════════════════════════════════════════════════════

export interface SectionDividerProps {
  /** Show center node */
  showNode?: boolean;
  /** Line color variant */
  variant?: 'light' | 'medium' | 'blue';
  /** Additional className */
  className?: string;
}

export function SectionDivider({
  showNode = true,
  variant = 'light',
  className,
}: SectionDividerProps) {
  const colorMap = {
    light: 'rgba(203, 213, 225, 0.5)',  // slate-300/50
    medium: 'rgba(148, 163, 184, 0.6)', // slate-400/60
    blue: 'rgba(0, 114, 188, 0.2)',     // primary/20
  };
  
  const nodeColorMap = {
    light: 'rgba(148, 163, 184, 0.4)',
    medium: 'rgba(100, 116, 139, 0.5)',
    blue: 'rgba(0, 114, 188, 0.3)',
  };
  
  return (
    <div className={cn('flex items-center w-full', className)} aria-hidden="true">
      {/* Left line */}
      <div 
        className="flex-1 h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${colorMap[variant]})`,
        }}
      />
      
      {/* Center node */}
      {showNode && (
        <div 
          className="w-2 h-2 rounded-full mx-4"
          style={{ backgroundColor: nodeColorMap[variant] }}
        />
      )}
      
      {/* Right line */}
      <div 
        className="flex-1 h-px"
        style={{
          background: `linear-gradient(to left, transparent, ${colorMap[variant]})`,
        }}
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PIPE-INSPIRED BORDER WRAPPER
// ═══════════════════════════════════════════════════════════════════════════════

export interface PipeBorderWrapperProps {
  children: ReactNode;
  /** Border thickness */
  thickness?: 2 | 3 | 4;
  /** Border radius */
  radius?: 'lg' | 'xl' | '2xl';
  /** Glow effect */
  glow?: boolean;
  className?: string;
}

export function PipeBorderWrapper({
  children,
  thickness = 2,
  radius = 'xl',
  glow = false,
  className,
}: PipeBorderWrapperProps) {
  const radiusMap = {
    lg: 'rounded-xl',
    xl: 'rounded-2xl',
    '2xl': 'rounded-3xl',
  };
  
  return (
    <div 
      className={cn('relative', className)}
      style={{
        padding: thickness,
        background: productGradients.pipeBorder.subtle,
        borderRadius: radius === 'lg' ? '0.75rem' : radius === 'xl' ? '1rem' : '1.5rem',
        boxShadow: glow ? productShadows.glow.subtle : undefined,
      }}
    >
      <div className={cn('relative bg-white h-full', radiusMap[radius])}>
        {children}
      </div>
    </div>
  );
}
