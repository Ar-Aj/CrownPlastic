/**
 * Product Detail - Reusable UI Components
 * 
 * Shared layout and card components for product detail pages.
 * Uses the pdTheme design tokens for consistent styling.
 */

'use client';

import { type ReactNode } from 'react';
import { pdSpacing, pdTypography, getFeatureIcon } from './theme';
import { PDIcon, type ProductIconName } from './icons';

// ═══════════════════════════════════════════════════════════════════════════════
// PD SECTION - Wrapper for each content section
// ═══════════════════════════════════════════════════════════════════════════════

interface PDSectionProps {
  id?: string;
  children: ReactNode;
  background?: 'white' | 'surface' | 'surfaceAlt';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function PDSection({ 
  id, 
  children, 
  background = 'white',
  size = 'md',
  className = '',
}: PDSectionProps) {
  const bgClass = background === 'surface' 
    ? 'bg-[#F7F9FC]' 
    : background === 'surfaceAlt'
    ? 'bg-[#EEF3FF]'
    : 'bg-white';
  
  return (
    <section 
      id={id}
      className={`${pdSpacing.sectionY[size]} ${bgClass} scroll-mt-20 ${className}`}
    >
      <div className={pdSpacing.container}>
        {children}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PD SECTION HEADER - Title + optional subtitle
// ═══════════════════════════════════════════════════════════════════════════════

interface PDSectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function PDSectionHeader({ 
  title, 
  subtitle,
  align = 'left',
  className = '',
}: PDSectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  
  return (
    <div className={`mb-8 md:mb-10 ${alignClass} ${className}`}>
      <h2 className={`${pdTypography.h2} text-[#111827]`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`${pdTypography.bodyLg} text-[#6B7280] mt-2 max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PD STAT BADGE - Pill for small labels (standards, pressure class, etc.)
// ═══════════════════════════════════════════════════════════════════════════════

interface PDStatBadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'muted';
  className?: string;
}

export function PDStatBadge({ 
  children, 
  variant = 'primary',
  className = '',
}: PDStatBadgeProps) {
  const variantClass = variant === 'primary'
    ? 'bg-[#E5EEFF] text-[#0052CC] border-[#0052CC]/10'
    : variant === 'outline'
    ? 'bg-white text-[#374151] border-gray-200'
    : 'bg-gray-100 text-[#6B7280] border-gray-200';
  
  return (
    <span className={`
      inline-flex items-center px-3 py-1.5 
      text-xs md:text-sm font-semibold 
      rounded-full border
      ${variantClass}
      ${className}
    `}>
      {children}
    </span>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PD CARD GRID - Responsive grid container
// ═══════════════════════════════════════════════════════════════════════════════

interface PDCardGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function PDCardGrid({ 
  children, 
  columns = 3,
  gap = 'md',
  className = '',
}: PDCardGridProps) {
  const colClass = columns === 2
    ? 'grid-cols-1 sm:grid-cols-2'
    : columns === 3
    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
  
  const gapClass = gap === 'sm' 
    ? 'gap-3 md:gap-4' 
    : gap === 'lg'
    ? 'gap-5 md:gap-6'
    : 'gap-4 md:gap-5';
  
  return (
    <div className={`grid ${colClass} ${gapClass} ${className}`}>
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PD ICON FEATURE CARD - Icon + title + description
// ═══════════════════════════════════════════════════════════════════════════════

interface PDIconFeatureCardProps {
  icon?: ProductIconName;
  title: string;
  description?: string;
  className?: string;
}

export function PDIconFeatureCard({ 
  icon,
  title,
  description,
  className = '',
}: PDIconFeatureCardProps) {
  // Auto-detect icon from title if not provided
  const iconName = icon || (getFeatureIcon(title) as ProductIconName);
  
  return (
    <div className={`
      flex items-start gap-3 p-4 md:p-5
      bg-white rounded-xl 
      border border-gray-100
      shadow-[0_2px_8px_rgba(15,23,42,0.04)]
      hover:shadow-[0_4px_16px_rgba(15,23,42,0.08)]
      hover:border-[#0052CC]/20
      transition-all duration-200
      ${className}
    `}>
      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-[#E5EEFF] text-[#0052CC]">
        <PDIcon name={iconName} size={20} />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-[15px] font-semibold text-[#111827] leading-snug">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-[#6B7280] mt-1 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PD APPLICATION CARD - For application items (text-driven)
// ═══════════════════════════════════════════════════════════════════════════════

interface PDApplicationCardProps {
  title: string;
  icon?: ProductIconName;
  className?: string;
}

export function PDApplicationCard({ 
  title,
  icon,
  className = '',
}: PDApplicationCardProps) {
  // Auto-detect icon or use building as default for applications
  const iconName = icon || (getFeatureIcon(title) as ProductIconName) || 'building';
  
  return (
    <div className={`
      flex items-center gap-3 p-4 md:p-5
      bg-gradient-to-br from-[#F7F9FC] to-[#EEF3FF]
      rounded-xl border border-[#0052CC]/10
      hover:border-[#0052CC]/25
      hover:shadow-[0_4px_16px_rgba(0,82,204,0.08)]
      transition-all duration-200
      ${className}
    `}>
      <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg bg-[#0052CC]/10 text-[#0052CC]">
        <PDIcon name={iconName} size={18} />
      </div>
      <span className="text-[15px] font-medium text-[#111827]">
        {title}
      </span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PD TABLE SHELL - Wrapper for spec tables
// ═══════════════════════════════════════════════════════════════════════════════

interface PDTableShellProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function PDTableShell({ 
  title, 
  children,
  className = '',
}: PDTableShellProps) {
  return (
    <div className={`mb-8 ${className}`}>
      {title && (
        <h3 className={`${pdTypography.h4} text-[#111827] mb-4`}>
          {title}
        </h3>
      )}
      <div className="overflow-hidden rounded-xl border border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
        {children}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PD TABLE - Styled table component
// ═══════════════════════════════════════════════════════════════════════════════

interface PDTableColumn {
  key: string;
  label: string;
  align?: 'left' | 'center' | 'right';
  width?: string;
}

interface PDTableProps {
  columns: PDTableColumn[];
  rows: Record<string, string | number | null | undefined>[];
  stickyHeader?: boolean;
  className?: string;
}

export function PDTable({ 
  columns, 
  rows,
  stickyHeader = false,
  className = '',
}: PDTableProps) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className={`bg-[#E5EEFF] ${stickyHeader ? 'sticky top-0 z-10' : ''}`}>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                style={col.width ? { width: col.width } : undefined}
                className={`
                  px-4 py-3 
                  text-xs font-semibold uppercase tracking-wide
                  text-[#0052CC]
                  whitespace-nowrap
                  ${col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : 'text-left'}
                `}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {rows.map((row, rowIndex) => (
            <tr 
              key={rowIndex}
              className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFB]'} hover:bg-[#F3F4F6] transition-colors`}
            >
              {columns.map((col) => {
                const value = row[col.key];
                const isNumeric = typeof value === 'number' || (typeof value === 'string' && /^\d/.test(value));
                return (
                  <td
                    key={col.key}
                    className={`
                      px-4 py-3 text-sm text-[#374151]
                      whitespace-nowrap
                      ${isNumeric ? 'tabular-nums' : ''}
                      ${col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : 'text-left'}
                    `}
                  >
                    {value ?? '-'}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      
      {rows.length === 0 && (
        <div className="px-4 py-8 text-center text-[#6B7280] bg-[#F9FAFB]">
          No data available.
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PD HERO BADGE ROW - Container for hero badges
// ═══════════════════════════════════════════════════════════════════════════════

interface PDHeroBadgeRowProps {
  children: ReactNode;
  className?: string;
}

export function PDHeroBadgeRow({ children, className = '' }: PDHeroBadgeRowProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PD EYEBROW - Small category/segment label
// ═══════════════════════════════════════════════════════════════════════════════

interface PDEyebrowProps {
  children: ReactNode;
  className?: string;
}

export function PDEyebrow({ children, className = '' }: PDEyebrowProps) {
  return (
    <span className={`
      inline-block text-xs md:text-sm font-semibold 
      uppercase tracking-wider text-[#0052CC]
      mb-2
      ${className}
    `}>
      {children}
    </span>
  );
}
