'use client';

// ═══════════════════════════════════════════════════════════════════════════════
// PRODUCT CARD SURFACE - Premium Card Component for Product Pages
// ═══════════════════════════════════════════════════════════════════════════════
//
// Provides:
// - Consistent card styling with soft shadows
// - Glass morphism variant for overlays
// - Accent border options (blue, orange)
// - Hover lift effect with glow
// - Pipe-inspired border option
//
// ═══════════════════════════════════════════════════════════════════════════════

import { ReactNode, forwardRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { productShadows, productGradients } from './theme';

// ═══════════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export type CardVariant = 'default' | 'glass' | 'accent' | 'elevated' | 'outline';
export type AccentColor = 'blue' | 'orange' | 'slate';

export interface ProductCardSurfaceProps {
  children: ReactNode;
  /** Card style variant */
  variant?: CardVariant;
  /** Accent color for border/glow */
  accent?: AccentColor;
  /** Enable hover lift effect */
  hoverable?: boolean;
  /** Show pipe-inspired gradient border */
  pipeBorder?: boolean;
  /** Custom border radius */
  radius?: 'md' | 'lg' | 'xl' | '2xl';
  /** Custom padding */
  padding?: 'sm' | 'md' | 'lg' | 'none';
  /** Additional className */
  className?: string;
  /** onClick handler */
  onClick?: () => void;
  /** Make card a link wrapper */
  as?: 'div' | 'article' | 'button';
}

// ═══════════════════════════════════════════════════════════════════════════════
// VARIANT STYLES
// ═══════════════════════════════════════════════════════════════════════════════

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-white border border-slate-200/80',
  glass: 'bg-white/85 backdrop-blur-xl border border-white/20',
  accent: 'bg-white border-2',
  elevated: 'bg-white border border-slate-200/60',
  outline: 'bg-transparent border-2 border-slate-200',
};

const accentBorderColors: Record<AccentColor, string> = {
  blue: 'border-primary/15 hover:border-primary/30',
  orange: 'border-orange-500/15 hover:border-orange-500/30',
  slate: 'border-slate-300 hover:border-slate-400',
};

const radiusClasses: Record<string, string> = {
  md: 'rounded-lg',
  lg: 'rounded-xl',
  xl: 'rounded-2xl',
  '2xl': 'rounded-3xl',
};

const paddingClasses: Record<string, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-5 md:p-6',
  lg: 'p-6 md:p-8',
};

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

const ProductCardSurface = forwardRef<HTMLDivElement, ProductCardSurfaceProps>(
  function ProductCardSurface(
    {
      children,
      variant = 'default',
      accent = 'blue',
      hoverable = false,
      pipeBorder = false,
      radius = 'xl',
      padding = 'md',
      className,
      onClick,
      as: Component = 'div',
    },
    ref
  ) {
    // Build shadow style
    const getShadowStyle = () => {
      switch (variant) {
        case 'glass':
          return { boxShadow: productShadows.card.lg };
        case 'elevated':
          return { boxShadow: productShadows.card.lg };
        case 'accent':
          return { boxShadow: productShadows.card.md };
        default:
          return { boxShadow: productShadows.card.sm };
      }
    };

    // Build hover shadow style
    const getHoverShadowStyle = () => {
      if (!hoverable) return {};
      return {
        '--hover-shadow': productShadows.hover.glow,
      } as React.CSSProperties;
    };

    // Pipe border gradient
    const pipeBorderStyle = pipeBorder ? {
      borderImage: productGradients.pipeBorder.subtle + ' 1',
    } : {};

    return (
      <Component
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        onClick={onClick}
        className={cn(
          // Base styles
          'relative overflow-hidden',
          // Transitions with motion-reduce support
          'transition-all duration-300 motion-reduce:transition-none',
          radiusClasses[radius],
          paddingClasses[padding],
          variantStyles[variant],
          
          // Accent border for accent variant
          variant === 'accent' && accentBorderColors[accent],
          
          // Hover effects (disabled for motion-reduce)
          hoverable && [
            'cursor-pointer',
            'hover:-translate-y-1 motion-reduce:hover:translate-y-0',
            'hover:shadow-lg',
            accent === 'blue' && 'hover:shadow-primary/10',
            accent === 'orange' && 'hover:shadow-orange-500/10',
          ],
          
          // Interactive states
          onClick && 'cursor-pointer',
          
          className
        )}
        style={{
          ...getShadowStyle(),
          ...getHoverShadowStyle(),
          ...pipeBorderStyle,
        }}
      >
        {children}
      </Component>
    );
  }
);

export default ProductCardSurface;
export { ProductCardSurface };

// ═══════════════════════════════════════════════════════════════════════════════
// CARD HEADER SUBCOMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export interface CardHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  badge?: string;
  className?: string;
}

export function ProductCardHeader({
  title,
  subtitle,
  icon,
  badge,
  className,
}: CardHeaderProps) {
  return (
    <div className={cn('flex items-start gap-4', className)}>
      {icon && (
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold text-slate-900 truncate">{title}</h3>
          {badge && (
            <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full">
              {badge}
            </span>
          )}
        </div>
        {subtitle && (
          <p className="mt-1 text-sm text-slate-500 line-clamp-2">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CARD IMAGE SUBCOMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: '1:1' | '4:3' | '16:9' | '3:2';
  overlay?: boolean;
  className?: string;
}

export function ProductCardImage({
  src,
  alt,
  aspectRatio = '4:3',
  overlay = false,
  className,
}: CardImageProps) {
  const aspectClasses: Record<string, string> = {
    '1:1': 'aspect-square',
    '4:3': 'aspect-[4/3]',
    '16:9': 'aspect-video',
    '3:2': 'aspect-[3/2]',
  };

  return (
    <div className={cn(
      'relative overflow-hidden rounded-xl bg-slate-100',
      aspectClasses[aspectRatio],
      className
    )}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CARD FOOTER SUBCOMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export interface CardFooterProps {
  children: ReactNode;
  divider?: boolean;
  className?: string;
}

export function ProductCardFooter({
  children,
  divider = true,
  className,
}: CardFooterProps) {
  return (
    <div className={cn(
      'mt-auto pt-4',
      divider && 'border-t border-slate-100',
      className
    )}>
      {children}
    </div>
  );
}
