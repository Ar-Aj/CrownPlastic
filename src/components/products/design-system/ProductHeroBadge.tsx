'use client';

// ═══════════════════════════════════════════════════════════════════════════════
// PRODUCT HERO BADGE - Floating Glass Tags for Product Pages
// ═══════════════════════════════════════════════════════════════════════════════
//
// Inspired by Home page's floating glass stat badges.
// Used for displaying key standards, certifications, or quick stats
// in the hero area of product pages.
//
// ═══════════════════════════════════════════════════════════════════════════════

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { productShadows } from './theme';
import { LucideIcon } from 'lucide-react';

// ═══════════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export type BadgeVariant = 'glass' | 'solid' | 'outline' | 'accent';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface ProductHeroBadgeProps {
  children: ReactNode;
  /** Visual variant */
  variant?: BadgeVariant;
  /** Size preset */
  size?: BadgeSize;
  /** Icon to display */
  icon?: LucideIcon;
  /** Custom icon element */
  iconElement?: ReactNode;
  /** Make badge clickable */
  onClick?: () => void;
  /** Additional className */
  className?: string;
}

// ═══════════════════════════════════════════════════════════════════════════════
// SIZE PRESETS
// ═══════════════════════════════════════════════════════════════════════════════

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-2.5 py-1 text-xs gap-1.5',
  md: 'px-3 py-1.5 text-sm gap-2',
  lg: 'px-4 py-2 text-sm gap-2.5',
};

const iconSizes: Record<BadgeSize, number> = {
  sm: 12,
  md: 14,
  lg: 16,
};

// ═══════════════════════════════════════════════════════════════════════════════
// VARIANT STYLES
// ═══════════════════════════════════════════════════════════════════════════════

const variantClasses: Record<BadgeVariant, string> = {
  glass: 'bg-white/90 backdrop-blur-md border border-slate-200/50 text-slate-700',
  solid: 'bg-primary/10 border border-primary/20 text-primary',
  outline: 'bg-transparent border-2 border-slate-200 text-slate-600',
  accent: 'bg-gradient-to-r from-primary to-primary-dark text-white border-0',
};

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default function ProductHeroBadge({
  children,
  variant = 'glass',
  size = 'md',
  icon: Icon,
  iconElement,
  onClick,
  className,
}: ProductHeroBadgeProps) {
  const Component = onClick ? 'button' : 'span';
  
  return (
    <Component
      onClick={onClick}
      className={cn(
        // Base styles
        'inline-flex items-center font-medium rounded-full',
        // Transitions with motion-reduce support
        'transition-all duration-200 motion-reduce:transition-none',
        
        // Size and variant
        sizeClasses[size],
        variantClasses[variant],
        
        // Shadow for glass and accent
        (variant === 'glass' || variant === 'accent') && 'shadow-sm',
        
        // Hover states (safe transforms for motion-reduce)
        onClick && [
          'cursor-pointer',
          variant === 'glass' && 'hover:bg-white hover:shadow-md',
          variant === 'solid' && 'hover:bg-primary/15',
          variant === 'outline' && 'hover:border-primary/30 hover:text-primary',
        ],
        
        className
      )}
      style={{
        boxShadow: variant === 'glass' ? productShadows.card.sm : undefined,
      }}
    >
      {/* Icon */}
      {(Icon || iconElement) && (
        <span className="flex-shrink-0">
          {iconElement || (Icon && <Icon size={iconSizes[size]} />)}
        </span>
      )}
      
      {/* Content */}
      {children}
    </Component>
  );
}

export { ProductHeroBadge };

// ═══════════════════════════════════════════════════════════════════════════════
// BADGE ROW - Container for multiple badges
// ═══════════════════════════════════════════════════════════════════════════════

export interface BadgeRowProps {
  children: ReactNode;
  /** Gap between badges */
  gap?: 'sm' | 'md' | 'lg';
  /** Wrap badges on small screens */
  wrap?: boolean;
  /** Additional className */
  className?: string;
}

export function ProductBadgeRow({
  children,
  gap = 'sm',
  wrap = true,
  className,
}: BadgeRowProps) {
  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-3',
    lg: 'gap-4',
  };
  
  return (
    <div className={cn(
      'flex items-center',
      gapClasses[gap],
      wrap && 'flex-wrap',
      className
    )}>
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// STAT BADGE - For displaying numeric values with labels
// ═══════════════════════════════════════════════════════════════════════════════

export interface StatBadgeProps {
  value: string | number;
  label: string;
  icon?: LucideIcon;
  variant?: 'glass' | 'solid';
  className?: string;
}

export function ProductStatBadge({
  value,
  label,
  icon: Icon,
  variant = 'glass',
  className,
}: StatBadgeProps) {
  return (
    <div 
      className={cn(
        'inline-flex items-center gap-3 px-4 py-2.5 rounded-xl',
        variant === 'glass' 
          ? 'bg-white/90 backdrop-blur-md border border-slate-200/50 shadow-sm'
          : 'bg-primary/10 border border-primary/20',
        className
      )}
    >
      {Icon && (
        <div className={cn(
          'w-8 h-8 rounded-lg flex items-center justify-center',
          variant === 'glass' ? 'bg-primary/10' : 'bg-primary/20'
        )}>
          <Icon size={16} className="text-primary" />
        </div>
      )}
      <div>
        <div className={cn(
          'font-bold text-lg leading-none',
          variant === 'glass' ? 'text-slate-900' : 'text-primary'
        )}>
          {value}
        </div>
        <div className="text-xs text-slate-500 mt-0.5">{label}</div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FLOATING BADGE GROUP - Absolute positioned badge cluster
// ═══════════════════════════════════════════════════════════════════════════════

export interface FloatingBadgeGroupProps {
  children: ReactNode;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}

export function FloatingBadgeGroup({
  children,
  position = 'top-right',
  className,
}: FloatingBadgeGroupProps) {
  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  };
  
  return (
    <div className={cn(
      'absolute z-20 flex flex-col gap-2',
      positionClasses[position],
      className
    )}>
      {children}
    </div>
  );
}
