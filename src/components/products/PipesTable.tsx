'use client';

import { type PipeTable, type PipeTableColumn } from '@/types/productDetail';
import { PDTableShell } from '@/components/productDetail';
import { ProductSection, ProductSectionHeader } from '@/components/products/design-system';
import { useT, type TranslationPath } from '@/i18n';
import { useLanguage } from '@/context/LanguageContext';
import { formatFraction } from '@/utils/formatters';

interface PipesTableProps {
  table: PipeTable;
}

/** Resolves the correct label/groupLabel/superGroupLabel/megaGroupLabel for the active locale.
 *  Falls back to the English field when a Fr variant is absent. */
function useLocalizeCol() {
  const { language } = useLanguage();
  const isFr = language === 'fr';
  return {
    label:          (col: PipeTableColumn) => (isFr && col.labelFr)          ? col.labelFr          : col.label,
    groupLabel:     (col: PipeTableColumn) => (isFr && col.groupLabelFr)     ? col.groupLabelFr     : (col.groupLabel     ?? ''),
    superGroupLabel:(col: PipeTableColumn) => (isFr && col.superGroupLabelFr)? col.superGroupLabelFr: (col.superGroupLabel?? ''),
    megaGroupLabel: (col: PipeTableColumn) => (isFr && col.megaGroupLabelFr) ? col.megaGroupLabelFr : (col.megaGroupLabel ?? ''),
  };
}

/**
 * Renders a single pipe specification table with responsive scrolling on mobile.
 * Supports optional grouped column headers (groupLabel/colSpan) and
 * an optional section label divider row (sectionLabel).
 * Header strings are locale-aware: uses *Fr fields when language === 'fr'.
 */
export default function PipesTable({ table }: PipesTableProps) {
  const t = useT();
  const loc = useLocalizeCol();
  const hasMegaGroupedHeaders = table.columns.some(c => c.megaGroupLabel);
  const hasSuperGroupedHeaders = table.columns.some(c => c.superGroupLabel);
  const hasGroupedHeaders = table.columns.some(c => c.groupLabel);
  const maxDepth = hasMegaGroupedHeaders ? 4 : hasSuperGroupedHeaders ? 3 : hasGroupedHeaders ? 2 : 1;

  /** Render a header cell value: i18n key → t(), Fr override → loc.*(), else raw string */
  const hdr = {
    label:          (col: PipeTableColumn) => {
      const v = loc.label(col);
      return v.startsWith('products.tables') ? (t(v as TranslationPath) as string) : v;
    },
    groupLabel:     (col: PipeTableColumn) => {
      const v = loc.groupLabel(col);
      return v.startsWith('products.tables') ? (t(v as TranslationPath) as string) : v;
    },
    superGroupLabel:(col: PipeTableColumn) => {
      const v = loc.superGroupLabel(col);
      return v.startsWith('products.tables') ? (t(v as TranslationPath) as string) : v;
    },
    megaGroupLabel: (col: PipeTableColumn) => {
      const v = loc.megaGroupLabel(col);
      return v.startsWith('products.tables') ? (t(v as TranslationPath) as string) : v;
    },
  };

  return (
    <PDTableShell title={table.title} className="mb-8 last:mb-0">
      {/* Scrollable container for mobile */}
      <div className="overflow-x-auto w-full">
        <table className="w-full min-w-full divide-y divide-gray-200">
          {/* Header */}
          <thead className="bg-[#E5EEFF]">
            {maxDepth === 4 ? (
              <>
                {/* ROW 1: megaGroup labels or rowSpan=4 for standalone cols */}
                <tr>
                  {(() => {
                    const cells: React.ReactNode[] = [];
                    let i = 0;
                    while (i < table.columns.length) {
                      const col = table.columns[i];
                      if (col.megaGroupLabel) {
                        const span = col.megaColSpan ?? 1;
                        cells.push(
                          <th key={`mega-${col.key}`} colSpan={span} rowSpan={1} scope="col" className="px-5 py-3 text-center text-base md:text-lg font-bold tracking-wide text-[#0052CC] whitespace-nowrap border-b border-[#C2D6FF] border-r border-[#C2D6FF]">
                            {hdr.megaGroupLabel(col)}
                          </th>
                        );
                        i += span;
                      } else {
                        cells.push(
                          <th key={`std-${col.key}`} colSpan={1} rowSpan={4} scope="col" className="px-5 py-4 text-base md:text-lg font-semibold tracking-wide text-[#0052CC] whitespace-nowrap text-center align-middle border-r border-[#C2D6FF]">
                            {hdr.label(col)}
                          </th>
                        );
                        i++;
                      }
                    }
                    return cells;
                  })()}
                </tr>
                {/* ROW 2: superGroup labels under megaGroups */}
                <tr className="bg-[#EDF2FF]">
                  {(() => {
                    const cells: React.ReactNode[] = [];
                    let i = 0;
                    while (i < table.columns.length) {
                      const col = table.columns[i];
                      if (col.megaGroupLabel) {
                        if (col.superGroupLabel) {
                          const span = col.superColSpan ?? 1;
                          cells.push(
                            <th key={`super-${col.key}`} colSpan={span} rowSpan={1} scope="col" className="px-5 py-3 text-center text-base md:text-lg font-semibold tracking-wide text-[#0052CC] whitespace-nowrap border-b border-[#C2D6FF] border-r border-[#C2D6FF]">
                              {hdr.superGroupLabel(col)}
                            </th>
                          );
                          i += span;
                        } else {
                          // No superGroup, but has megaGroup - might just be a column spanning 3 rows down
                          cells.push(
                            <th key={`sub2-${col.key}`} colSpan={1} rowSpan={3} scope="col" className="px-5 py-3 text-center text-sm md:text-base font-semibold tracking-wide text-[#0052CC] whitespace-nowrap border-r border-[#C2D6FF] align-middle">
                              {hdr.label(col)}
                            </th>
                          );
                          i++;
                        }
                      } else {
                        i++; // handled in row 1
                      }
                    }
                    return cells;
                  })()}
                </tr>
                {/* ROW 3: group labels under superGroups */}
                <tr className="bg-[#F0F5FF]">
                  {(() => {
                    const cells: React.ReactNode[] = [];
                    let i = 0;
                    while (i < table.columns.length) {
                      const col = table.columns[i];
                      if (col.superGroupLabel) {
                        if (col.groupLabel) {
                          const span = col.colSpan ?? 1;
                          cells.push(
                            <th key={`grp-${col.key}`} colSpan={span} rowSpan={1} scope="col" className="px-5 py-3 text-center text-sm md:text-base font-semibold tracking-wide text-[#0052CC] whitespace-nowrap border-b border-[#C2D6FF] border-r border-[#C2D6FF]">
                              {hdr.groupLabel(col)}
                            </th>
                          );
                          i += span;
                        } else {
                          cells.push(
                            <th key={`sub3-${col.key}`} colSpan={1} rowSpan={2} scope="col" className="px-5 py-3 text-center text-sm md:text-base font-semibold tracking-wide text-[#0052CC] whitespace-nowrap border-r border-[#C2D6FF] align-middle">
                              {hdr.label(col)}
                            </th>
                          );
                          i++;
                        }
                      } else if (col.megaGroupLabel && !col.superGroupLabel) {
                        // handled in row 2
                        i++;
                      } else {
                        // handled in row 1
                        i++;
                      }
                    }
                    return cells;
                  })()}
                </tr>
                {/* ROW 4: bottom-level labels */}
                <tr className="bg-[#F4F8FF]">
                  {(() => {
                    const cells: React.ReactNode[] = [];
                    let i = 0;
                    while (i < table.columns.length) {
                      const col = table.columns[i];
                      if (col.groupLabel) {
                        cells.push(
                          <th key={`sub4-${col.key}`} colSpan={1} rowSpan={1} scope="col" className="px-5 py-3 text-center text-xs md:text-sm font-semibold tracking-wide text-[#0052CC] whitespace-nowrap border-r border-[#C2D6FF]">
                            {hdr.label(col)}
                          </th>
                        );
                        i++;
                      } else {
                        i++;
                      }
                    }
                    return cells;
                  })()}
                </tr>
              </>
            ) : maxDepth === 3 ? (
              <>
                {/* ROW 1: superGroup labels or rowSpan=3 for standalone cols */}
                <tr>
                  {(() => {
                    const cells: React.ReactNode[] = [];
                    let i = 0;
                    while (i < table.columns.length) {
                      const col = table.columns[i];
                      if (col.superGroupLabel) {
                        const span = col.superColSpan ?? 1;
                        cells.push(
                          <th key={`super-${col.key}`} colSpan={span} rowSpan={1} scope="col" className="px-5 py-3 text-center text-base md:text-lg font-semibold tracking-wide text-[#0052CC] whitespace-nowrap border-b border-[#C2D6FF] border-r border-[#C2D6FF]">
                            {hdr.superGroupLabel(col)}
                          </th>
                        );
                        i += span;
                      } else if (col.groupLabel) {
                        const span = col.colSpan ?? 1;
                        cells.push(
                          <th key={`grp-${col.key}`} colSpan={span} rowSpan={2} scope="col" className="px-5 py-3 text-center text-base md:text-lg font-semibold tracking-wide text-[#0052CC] whitespace-nowrap border-b border-[#C2D6FF] border-r border-[#C2D6FF]">
                            {hdr.groupLabel(col)}
                          </th>
                        );
                        i += span;
                      } else {
                        cells.push(
                          <th key={`std-${col.key}`} colSpan={1} rowSpan={3} scope="col" className="px-5 py-4 text-base md:text-lg font-semibold tracking-wide text-[#0052CC] whitespace-nowrap text-center align-middle border-r border-[#C2D6FF]">
                            {hdr.label(col)}
                          </th>
                        );
                        i++;
                      }
                    }
                    return cells;
                  })()}
                </tr>
                {/* ROW 2: group labels under superGroups */}
                <tr className="bg-[#F0F5FF]">
                  {(() => {
                    const cells: React.ReactNode[] = [];
                    let i = 0;
                    while (i < table.columns.length) {
                      const col = table.columns[i];
                      if (col.superGroupLabel) {
                        if (col.groupLabel) {
                          const span = col.colSpan ?? 1;
                          cells.push(
                            <th key={`grp2-${col.key}`} colSpan={span} rowSpan={1} scope="col" className="px-5 py-3 text-center text-sm md:text-base font-semibold tracking-wide text-[#0052CC] whitespace-nowrap border-b border-[#C2D6FF] border-r border-[#C2D6FF]">
                              {hdr.groupLabel(col)}
                            </th>
                          );
                          i += span;
                        } else {
                          cells.push(
                            <th key={`sub2-${col.key}`} colSpan={1} rowSpan={2} scope="col" className="px-5 py-3 text-center text-sm md:text-base font-semibold tracking-wide text-[#0052CC] whitespace-nowrap border-r border-[#C2D6FF] align-middle">
                              {hdr.label(col)}
                            </th>
                          );
                          i++;
                        }
                      } else if (col.groupLabel) {
                        i += col.colSpan ?? 1;
                      } else {
                        i++;
                      }
                    }
                    return cells;
                  })()}
                </tr>
                {/* ROW 3: bottom-level labels */}
                <tr className="bg-[#F4F8FF]">
                  {(() => {
                    const cells: React.ReactNode[] = [];
                    let i = 0;
                    while (i < table.columns.length) {
                      const col = table.columns[i];
                      if (col.superGroupLabel) {
                        if (col.groupLabel) {
                          cells.push(
                            <th key={`sub3-${col.key}`} colSpan={1} rowSpan={1} scope="col" className="px-5 py-3 text-center text-xs md:text-sm font-semibold tracking-wide text-[#0052CC] whitespace-nowrap border-r border-[#C2D6FF]">
                              {hdr.label(col)}
                            </th>
                          );
                          i++;
                        } else {
                          i++;
                        }
                      } else if (col.groupLabel) {
                        cells.push(
                          <th key={`sub3-${col.key}`} colSpan={1} rowSpan={1} scope="col" className="px-5 py-3 text-center text-xs md:text-sm font-semibold tracking-wide text-[#0052CC] whitespace-nowrap border-r border-[#C2D6FF]">
                            {hdr.label(col)}
                          </th>
                        );
                        i++;
                      } else {
                        i++;
                      }
                    }
                    return cells;
                  })()}
                </tr>
              </>
            ) : maxDepth === 2 ? (
              <>
                {/* Row 1: standalone cols (rowSpan=2) + group parent headers (colSpan=n) */}
                <tr>
                  {(() => {
                    const cells: React.ReactNode[] = [];
                    let i = 0;
                    while (i < table.columns.length) {
                      const col = table.columns[i];
                      if (!col.groupLabel) {
                        // Standalone column — spans both header rows
                        cells.push(
                          <th
                            key={col.key}
                            rowSpan={2}
                            scope="col"
                            className="px-5 py-4 text-base md:text-lg font-semibold tracking-wide text-[#0052CC] whitespace-nowrap text-center align-middle border-r border-[#C2D6FF]"
                          >
                            {hdr.label(col)}
                          </th>
                        );
                        i++;
                      } else {
                        // First column of a group — render the parent header spanning colSpan cols
                        const span = col.colSpan ?? 1;
                        cells.push(
                          <th
                            key={`grp-${col.groupLabel}-${i}`}
                            colSpan={span}
                            scope="col"
                            className="px-5 py-3 text-center text-base md:text-lg font-semibold tracking-wide text-[#0052CC] whitespace-nowrap border-b border-[#C2D6FF] border-r border-[#C2D6FF]"
                          >
                            {hdr.groupLabel(col)}
                          </th>
                        );
                        i += span;
                      }
                    }
                    return cells;
                  })()}
                </tr>
                {/* Row 2: sub-column labels for grouped cols only */}
                <tr className="bg-[#F0F5FF]">
                  {table.columns.filter(c => c.groupLabel).map(col => (
                    <th
                      key={`sub-${col.key}`}
                      scope="col"
                      className="px-5 py-3 text-center text-sm md:text-base font-semibold tracking-wide text-[#0052CC] whitespace-nowrap border-r border-[#C2D6FF]"
                    >
                      {hdr.label(col)}
                    </th>
                  ))}
                </tr>
              </>
            ) : (
              /* Flat single-row header (original behaviour) */
              <tr>
                {table.columns.map((col) => (
                  <th
                    key={col.key}
                    scope="col"
                    className="px-5 py-4 text-base md:text-lg font-semibold tracking-wide text-[#0052CC] whitespace-nowrap text-center"
                  >
                    {hdr.label(col)}
                  </th>
                ))}
              </tr>
            )}
          </thead>

          {/* Body */}
          <tbody className="bg-white divide-y divide-gray-100">
            {/* Optional section label divider */}
            {table.sectionLabel && (
              <tr className="bg-[#F7F9FC]">
                <td
                  colSpan={table.columns.length}
                  className="px-5 py-3 text-sm md:text-base font-bold text-[#374151] tracking-wide text-center"
                >
                  {table.sectionLabel}
                </td>
              </tr>
            )}

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
                        px-5 py-3 md:py-4 text-base md:text-lg text-[#374151]
                        whitespace-nowrap
                        ${isNumeric ? 'tabular-nums' : ''}
                        text-center
                      `}
                    >
                      {value != null && value !== '' ? (
                        formatFraction(value) +
                        ((col.key === 'NOMINAL SIZE (Inch)' || col.key === 'nominal_size_inch') && !String(value).endsWith('"') ? '"' : '')
                      ) : '-'}
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
            {t('products.pipes.empty_state')}
          </div>
        )}
      </div>
    </PDTableShell>
  );
}

/**
 * Renders multiple pipe tables in a section.
 * Uses ProductSection for consistent width matching other sections (Applications, Overview, etc.)
 */
export function PipesSection({ tables }: { tables: PipeTable[] }) {
  const t = useT();
  if (!tables || tables.length === 0) return null;

  return (
    <ProductSection id="pipes" background="soft" size="md">
      <ProductSectionHeader
        title={t('products.pipes.section_title')}
        subtitle={t('products.pipes.section_subtitle')}
      />
      {tables.map((table) => (
        <PipesTable key={table.id} table={table} />
      ))}
    </ProductSection>
  );
}
