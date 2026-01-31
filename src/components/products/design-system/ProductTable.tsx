'use client';

// ═══════════════════════════════════════════════════════════════════════════════
// PRODUCT TABLE - Crown Dashboard-Style Table Component
// ═══════════════════════════════════════════════════════════════════════════════
//
// Features:
// - Gradient header row with blue accent underline
// - Alternating row backgrounds (light blue instead of gray)
// - Hover state with subtle blue tint
// - Key column emphasis styling
// - Responsive mobile handling
// - Card wrapper with shadow
//
// ═══════════════════════════════════════════════════════════════════════════════

import { ReactNode, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { productShadows, productTypography, productClasses } from './theme';

// ═══════════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export interface TableColumn<T = any> {
  /** Column key (maps to data property) */
  key: string;
  /** Column header label */
  header: string;
  /** Column width (tailwind class or fixed width) */
  width?: string;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Is this a key/primary column (gets emphasis styling) */
  isKey?: boolean;
  /** Custom cell renderer */
  render?: (value: any, row: T, index: number) => ReactNode;
  /** Hide on mobile */
  hideOnMobile?: boolean;
}

export interface ProductTableProps<T = any> {
  /** Table data rows */
  data: T[];
  /** Column definitions */
  columns: TableColumn<T>[];
  /** Table caption/title for accessibility */
  caption?: string;
  /** Show alternating row colors */
  striped?: boolean;
  /** Show hover effect on rows */
  hoverable?: boolean;
  /** Compact row padding */
  compact?: boolean;
  /** Show card wrapper */
  showWrapper?: boolean;
  /** Additional className */
  className?: string;
  /** Row key extractor */
  getRowKey?: (row: T, index: number) => string | number;
  /** Empty state message */
  emptyMessage?: string;
}

// ═══════════════════════════════════════════════════════════════════════════════
// ALIGNMENT CLASSES
// ═══════════════════════════════════════════════════════════════════════════════

const alignClasses: Record<string, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default function ProductTable<T extends Record<string, any>>({
  data,
  columns,
  caption,
  striped = true,
  hoverable = true,
  compact = false,
  showWrapper = true,
  className,
  getRowKey,
  emptyMessage = 'No data available',
}: ProductTableProps<T>) {
  // Filter visible columns for mobile
  const visibleColumns = useMemo(() => columns, [columns]);
  
  // Cell padding based on compact prop
  const cellPadding = compact ? 'px-4 py-2.5' : 'px-6 py-4';
  const headerPadding = compact ? 'px-4 py-3' : 'px-6 py-4';
  
  // Table content
  const tableContent = (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        {/* Caption for accessibility */}
        {caption && (
          <caption className="sr-only">{caption}</caption>
        )}
        
        {/* Header */}
        <thead>
          <tr className="bg-gradient-to-r from-slate-50 via-blue-50/40 to-slate-50 border-b-2 border-primary/20">
            {visibleColumns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  headerPadding,
                  productTypography.tableHead,
                  alignClasses[col.align || 'left'],
                  col.width,
                  col.hideOnMobile && 'hidden md:table-cell'
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        
        {/* Body */}
        <tbody className="divide-y divide-slate-100">
          {data.length === 0 ? (
            <tr>
              <td 
                colSpan={visibleColumns.length}
                className={cn(cellPadding, 'text-center text-slate-500 italic')}
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => {
              const rowKey = getRowKey ? getRowKey(row, rowIndex) : rowIndex;
              
              return (
                <tr
                  key={rowKey}
                  className={cn(
                    // Transitions with motion-reduce support
                    'transition-colors duration-150 motion-reduce:transition-none',
                    // Alternating rows
                    striped && rowIndex % 2 === 1 && 'bg-blue-50/30',
                    // Hover effect
                    hoverable && 'hover:bg-blue-50/50'
                  )}
                >
                  {visibleColumns.map((col) => {
                    const value = row[col.key];
                    const content = col.render 
                      ? col.render(value, row, rowIndex) 
                      : value;
                    
                    return (
                      <td
                        key={col.key}
                        className={cn(
                          cellPadding,
                          alignClasses[col.align || 'left'],
                          col.width,
                          col.hideOnMobile && 'hidden md:table-cell',
                          // Key column styling
                          col.isKey 
                            ? 'font-semibold text-slate-800 bg-primary/5'
                            : productTypography.tableCell
                        )}
                      >
                        {content}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
  
  // With or without wrapper
  if (showWrapper) {
    return (
      <div 
        className={cn(
          'bg-white rounded-2xl border border-slate-200/80 overflow-hidden',
          className
        )}
        style={{ boxShadow: productShadows.table }}
      >
        {tableContent}
      </div>
    );
  }
  
  return <div className={className}>{tableContent}</div>;
}

export { ProductTable };

// ═══════════════════════════════════════════════════════════════════════════════
// SIMPLE SPECS TABLE - For key-value specifications
// ═══════════════════════════════════════════════════════════════════════════════

export interface SpecItem {
  label: string;
  value: string | ReactNode;
  highlight?: boolean;
}

export interface ProductSpecsTableProps {
  specs: SpecItem[];
  /** Two-column layout on desktop */
  twoColumn?: boolean;
  /** Show card wrapper */
  showWrapper?: boolean;
  className?: string;
}

export function ProductSpecsTable({
  specs,
  twoColumn = false,
  showWrapper = true,
  className,
}: ProductSpecsTableProps) {
  // Split specs for two-column layout
  const midpoint = Math.ceil(specs.length / 2);
  const leftSpecs = twoColumn ? specs.slice(0, midpoint) : specs;
  const rightSpecs = twoColumn ? specs.slice(midpoint) : [];
  
  const renderSpecList = (items: SpecItem[]) => (
    <dl className="divide-y divide-slate-100">
      {items.map((spec, index) => (
        <div 
          key={index}
          className={cn(
            'flex justify-between items-start gap-4 px-5 py-3.5',
            spec.highlight && 'bg-primary/5'
          )}
        >
          <dt className="text-sm text-slate-500 flex-shrink-0">{spec.label}</dt>
          <dd className={cn(
            'text-sm text-right',
            spec.highlight ? 'font-semibold text-primary' : 'text-slate-800'
          )}>
            {spec.value}
          </dd>
        </div>
      ))}
    </dl>
  );
  
  const content = twoColumn ? (
    <div className="grid md:grid-cols-2 md:divide-x md:divide-slate-100">
      <div>{renderSpecList(leftSpecs)}</div>
      <div>{renderSpecList(rightSpecs)}</div>
    </div>
  ) : (
    renderSpecList(leftSpecs)
  );
  
  if (showWrapper) {
    return (
      <div 
        className={cn(
          'bg-white rounded-2xl border border-slate-200/80 overflow-hidden',
          className
        )}
        style={{ boxShadow: productShadows.table }}
      >
        {content}
      </div>
    );
  }
  
  return <div className={className}>{content}</div>;
}

// ═══════════════════════════════════════════════════════════════════════════════
// TABLE HEADER BADGE - For showing standards/certifications in table headers
// ═══════════════════════════════════════════════════════════════════════════════

export interface TableHeaderBadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'success';
  className?: string;
}

export function TableHeaderBadge({
  children,
  variant = 'default',
  className,
}: TableHeaderBadgeProps) {
  const variantClasses = {
    default: 'bg-slate-100 text-slate-600',
    primary: 'bg-primary/10 text-primary',
    success: 'bg-emerald-100 text-emerald-700',
  };
  
  return (
    <span className={cn(
      'inline-flex px-2 py-0.5 text-xs font-semibold rounded',
      variantClasses[variant],
      className
    )}>
      {children}
    </span>
  );
}
