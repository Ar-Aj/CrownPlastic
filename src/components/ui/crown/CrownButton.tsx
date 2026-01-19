'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// ═══════════════════════════════════════════════════════════════════════════════
// CROWN BUTTON - Blue/White/Black Palette Only
// Two variants: primary (blue) and secondary (white with blue border)
// No animations, mouse effects, or gradients
// ═══════════════════════════════════════════════════════════════════════════════

interface CrownButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

const CrownButton = forwardRef<HTMLButtonElement, CrownButtonProps>(
  ({ variant = 'primary', size = 'md', href, children, className, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 rounded-lg';
    
    const variants = {
      primary: 'bg-primary hover:bg-primary-dark text-white',
      secondary: 'bg-white hover:bg-gray-50 text-primary border-2 border-primary',
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const buttonClass = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      return (
        <Link href={href} className={buttonClass}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={buttonClass} {...props}>
        {children}
      </button>
    );
  }
);

CrownButton.displayName = 'CrownButton';

export default CrownButton;
