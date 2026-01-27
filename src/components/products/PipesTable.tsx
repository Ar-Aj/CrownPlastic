'use client';

import { type PipeTable } from '@/types/productDetail';
import { PDSection, PDSectionHeader, PDTableShell, pdTypography } from '@/components/productDetail';

interface PipesTableProps {
  table: PipeTable;
}

/**
 * Renders a single pipe specification table with responsive scrolling on mobile.
 * Uses the product detail design system for consistent styling.
 */
export default function PipesTable({ table }: PipesTableProps) {
  return (
    <PDTableShell title={table.title} className="mb-8 last:mb-0">
      {/* Scrollable container for mobile */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          {/* Header - Light blue background */}
          <thead className="bg-[#E5EEFF]">
            <tr>
              {table.columns.map((col) => {
                const isNumeric = col.align === 'right' || ['od', 'id', 'wall', 'length', 'weight', 'kg', 'mm', 'diameter'].some(
                  term => col.key.toLowerCase().includes(term) || col.label.toLowerCase().includes(term)
                );
                return (
                  <th
                    key={col.key}
                    scope="col"
                    className={`
                      px-4 py-3.5 
                      text-xs font-semibold uppercase tracking-wide
                      text-[#0052CC]
                      whitespace-nowrap
                      ${col.align === 'center' ? 'text-center' : col.align === 'right' || isNumeric ? 'text-right' : 'text-left'}
                    `}
                  >
                    {col.label}
                  </th>
                );
              })}
            </tr>
          </thead>
          
          {/* Body */}
          <tbody className="bg-white divide-y divide-gray-100">
            {table.rows.map((row, rowIndex) => (
              <tr 
                key={rowIndex}
                className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFB]'} hover:bg-[#F3F4F6] transition-colors`}
              >
                {table.columns.map((col) => {
                  const value = row[col.key];
                  const isNumeric = typeof value === 'string' && /^[\d.,\-/\s]+$/.test(value.trim());
                  return (
                    <td
                      key={col.key}
                      className={`
                        px-4 py-3 text-sm text-[#374151]
                        whitespace-nowrap
                        ${isNumeric ? 'tabular-nums' : ''}
                        ${col.align === 'center' ? 'text-center' : col.align === 'right' || isNumeric ? 'text-right' : 'text-left'}
                      `}
                    >
                      {value || '-'}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Empty state */}
        {table.rows.length === 0 && (
          <div className="px-4 py-8 text-center text-[#6B7280] bg-[#F9FAFB]">
            No data available. Table data will be populated from product specifications.
          </div>
        )}
      </div>
    </PDTableShell>
  );
}

/**
 * Renders multiple pipe tables in a section.
 * Uses PDSection for consistent spacing and background.
 */
export function PipesSection({ tables }: { tables: PipeTable[] }) {
  if (!tables || tables.length === 0) return null;
  
  return (
    <PDSection id="pipes" background="white" size="md">
      <PDSectionHeader 
        title="Pipe Specifications" 
        subtitle="Technical dimensions and parameters for all pipe sizes"
      />
      {tables.map((table) => (
        <PipesTable key={table.id} table={table} />
      ))}
    </PDSection>
  );
}
