'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronUp, Table2 } from 'lucide-react';
import { type Fitting, FITTING_FAMILY_LABELS, FITTING_FAMILY_LABELS_AR, FITTING_FAMILY_LABELS_FR } from '@/types/productDetail';
import { useT, type TranslationPath } from '@/i18n';
import { formatFraction } from '@/utils/formatters';
import { useLanguage } from '@/context/LanguageContext';
import { localizedValue } from '@/lib/i18n-utils';

interface FittingModalProps {
  fitting: Fitting | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Modal popup for fitting details.
 * Shows fitting image, code, name, family label, and sizes table.
 * Uses the product detail design system colors for consistency.
 */
export default function FittingModal({ fitting, isOpen, onClose }: FittingModalProps) {
  const [showSpecTable, setShowSpecTable] = useState(false);
  const [unit, setUnit] = useState<'inch' | 'mm'>('inch');
  const [mounted, setMounted] = useState(false);
  const t = useT();
  const { language } = useLanguage();
  const isFr = language === 'fr';

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  // Reset spec table state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setShowSpecTable(false);
      setUnit('inch');
    }
  }, [isOpen]);

  if (!fitting) return null;

  const determineSizeState = () => {
    if (!fitting.sizes || fitting.sizes.length === 0) return 'metric';
    if (fitting.sizes.some(s => String(s.sizeMm).toLowerCase().includes('x') || (s.sizeInch && String(s.sizeInch).toLowerCase().includes('x')))) return 'mixed';
    if (fitting.sizes.some(s => String(s.sizeMm).includes('/') || String(s.sizeMm).includes('"') || (s.sizeInch && (String(s.sizeInch).includes('/') || String(s.sizeInch).includes('"'))))) return 'imperial';
    if (fitting.table?.columns.some(col => col.key.toLowerCase().includes('inch') || col.label.toLowerCase().includes('inch'))) return 'imperial';
    return 'metric';
  };

  const sizeState = determineSizeState();
  const nominalSizeHeaderKey = fitting.sizeHeaderOverride || (
    sizeState === 'mixed' ? 'products.modal.nominal_size_mm_x_inch' :
    sizeState === 'imperial' ? 'products.modal.nominal_size_inch' :
    'products.modal.nominal_size_mm'
  );

  if (!mounted) return null;

  const translateLabel = (label: string, labelFr?: string) => {
    if (!label) return '';
    if (label.startsWith('products.')) return t(label as TranslationPath) as string;
    
    const l = label.toLowerCase().trim();
    if (l === 'dimensions (mm)') return t('products.modal.dimensions_mm');
    if (l === 'size / dimensions') return t('products.modal.size_dimensions');
    if (l === 'action') return t('products.modal.action');
    
    if (isFr && labelFr) return labelFr;
    return label;
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999]"
            aria-hidden="true"
          />

          {/* Modal container - centers the modal */}
          <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Modal card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] w-full max-w-2xl max-h-[85vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="fitting-modal-title"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#F7F9FC] hover:bg-[#E5EEFF] transition-colors"
                aria-label={t('products.fitting_modal.close_modal')}
              >
                <X className="w-5 h-5 text-[#6B7280]" />
              </button>

              {/* Scrollable content */}
              <div className="overflow-y-auto max-h-[85vh]">
                {/* Header section with image and info */}
                <div className="p-6 pb-4">
                  <div className="flex gap-4">
                    {/* Fitting image */}
                    <div className="flex-shrink-0 w-28 h-28 md:w-32 md:h-32 rounded-xl overflow-hidden bg-[#F7F9FC]">
                      <Image
                        src={fitting.image}
                        alt={fitting.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0 pt-1">
                      {/* Code badge */}
                      {fitting.code && (
                        <span className="inline-block px-3 py-1 text-lg font-bold text-[#0052CC] bg-[#E5EEFF] rounded-lg mb-2">
                          {fitting.code}
                        </span>
                      )}

                      {/* Name */}
                      <h2
                        id="fitting-modal-title"
                        className="text-lg md:text-xl font-bold text-[#111827] leading-tight mb-2"
                      >
                        {localizedValue(language, fitting.name, fitting.nameAr, fitting.nameFr)}
                      </h2>

                      {/* Family label */}
                      <span className="text-xs font-medium text-[#6B7280] uppercase tracking-wide">
                        {localizedValue(language, FITTING_FAMILY_LABELS[fitting.family], FITTING_FAMILY_LABELS_AR[fitting.family], FITTING_FAMILY_LABELS_FR[fitting.family])}
                      </span>

                      {/* Tags */}
                      {fitting.tags && fitting.tags.length > 0 && (
                        <div className="flex gap-1 mt-2">
                          {fitting.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`text-xs font-bold px-2 py-0.5 rounded ${tag === 'NEW'
                                  ? 'bg-[#059669] text-white'
                                  : 'bg-[#F7F9FC] text-[#374151]'
                                }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Sizes table */}
                <div className="px-6 pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-[#374151] uppercase tracking-wide">
                      {t('products.modal.available_sizes')}
                    </h3>

                    {/* Inch / MM toggle pills — only show when sizesMM data exists */}
                    {fitting.sizesMM && fitting.sizesMM.length > 0 && (
                      <div className="flex rounded-lg border border-gray-200 overflow-hidden">
                        <button
                          onClick={() => setUnit('inch')}
                          className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
                            unit === 'inch'
                              ? 'bg-[#0052CC] text-white'
                              : 'bg-[#F7F9FC] text-[#6B7280] hover:bg-[#E5EEFF]'
                          }`}
                        >
                          Inch
                        </button>
                        <button
                          onClick={() => setUnit('mm')}
                          className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors border-l border-gray-200 ${
                            unit === 'mm'
                              ? 'bg-[#0052CC] text-white'
                              : 'bg-[#F7F9FC] text-[#6B7280] hover:bg-[#E5EEFF]'
                          }`}
                        >
                          MM
                        </button>
                      </div>
                    )}
                  </div>

                  {(() => {
                    const activeSizes = unit === 'mm' && fitting.sizesMM && fitting.sizesMM.length > 0
                      ? fitting.sizesMM
                      : fitting.sizes;
                    const activeHeaderKey = unit === 'mm' && fitting.sizesMM && fitting.sizesMM.length > 0
                      ? 'products.modal.nominal_size_mm'
                      : nominalSizeHeaderKey;

                    return activeSizes.length > 0 ? (
                      <div className="overflow-hidden rounded-xl border border-gray-200">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-[#E5EEFF]">
                            <tr>
                              <th
                                scope="col"
                                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#0052CC]"
                              >
                                {t(activeHeaderKey as TranslationPath)}
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-100">
                            {activeSizes.map((size, index) => (
                              <tr
                                key={index}
                                className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFB]'} hover:bg-[#F3F4F6] transition-colors`}
                              >
                                <td className="px-4 py-2.5 text-sm text-[#374151]">
                                  {formatFraction(size.sizeMm)}
                                  {size.sizeInch && size.sizeInch !== size.sizeMm && (
                                    <span className="text-[#6B7280] ml-1">
                                      ({formatFraction(size.sizeInch)})
                                    </span>
                                  )}
                                  {size.notes && (
                                    <span className="text-[#9CA3AF] ml-2 text-xs">
                                      {size.notes}
                                    </span>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="py-4 text-center text-[#6B7280] bg-[#F9FAFB] rounded-xl border border-gray-200">
                        {t('products.fitting_modal.empty_sizes')}
                      </div>
                    );
                  })()}
                </div>

                {/* Technical Specifications - Toggle Section */}
                {fitting.table && (
                  <div className="px-6 pb-6">
                    <button
                      onClick={() => setShowSpecTable(!showSpecTable)}
                      className="flex items-center gap-2 w-full px-4 py-3 bg-[#F7F9FC] hover:bg-[#E5EEFF] rounded-xl text-left transition-colors border border-gray-200"
                    >
                      <Table2 className="w-4 h-4 text-[#0052CC]" />
                      <span className="flex-1 text-sm font-semibold text-[#374151] uppercase tracking-wide">
                        {t('products.modal.tech_specifications')}
                      </span>
                      {showSpecTable ? (
                        <ChevronUp className="w-4 h-4 text-[#6B7280]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#6B7280]" />
                      )}
                    </button>

                    <AnimatePresence>
                      {showSpecTable && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
                            <table className="min-w-full divide-y divide-gray-200">
                              <thead className="bg-[#E5EEFF]">
                                {fitting.table.columns.some(c => c.groupLabel) ? (
                                  <>
                                    {/* Row 1: standalone cols (rowSpan=2) + group parent headers (colSpan=n) */}
                                    <tr>
                                      {(() => {
                                        const cells: React.ReactNode[] = [];
                                        let i = 0;
                                        while (i < fitting.table!.columns.length) {
                                          const col = fitting.table!.columns[i];
                                          if (!col.groupLabel) {
                                            // Standalone column — spans both header rows
                                            let finalLabelKey = col.label;
                                            const isNominalCol = col.key.toLowerCase().includes('nominal_size') || col.label.toLowerCase().includes('nominal size');
                                            if (isNominalCol) finalLabelKey = nominalSizeHeaderKey;
                                            cells.push(
                                              <th
                                                key={col.key}
                                                rowSpan={2}
                                                scope="col"
                                                className="px-3 py-3 text-left text-xs font-semibold tracking-wide text-[#0052CC] whitespace-nowrap align-middle border-r border-[#C2D6FF]"
                                              >
                                                {translateLabel(finalLabelKey, col.labelFr)}
                                              </th>
                                            );
                                            i++;
                                          } else {
                                            // First column of a group — render the parent header spanning colSpan cols
                                            const span = col.colSpan ?? 1;
                                            const groupKey = isFr && col.groupLabelFr ? col.groupLabelFr : (col.groupLabel || '');
                                            cells.push(
                                              <th
                                                key={`grp-${groupKey}-${i}`}
                                                colSpan={span}
                                                scope="col"
                                                className="px-3 py-2 text-center text-xs font-semibold tracking-wide text-[#0052CC] whitespace-nowrap border-b border-[#C2D6FF] border-r border-[#C2D6FF]"
                                              >
                                                {translateLabel(col.groupLabel || '', col.groupLabelFr)}
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
                                      {fitting.table!.columns.filter(c => c.groupLabel).map(col => (
                                        <th
                                          key={`sub-${col.key}`}
                                          scope="col"
                                          className="px-3 py-2 text-left text-xs font-semibold tracking-wide text-[#0052CC] whitespace-nowrap border-r border-white/50"
                                        >
                                          {translateLabel(col.label, col.labelFr)}
                                        </th>
                                      ))}
                                    </tr>
                                  </>
                                ) : (
                                  /* Flat single-row header (existing behaviour) */
                                  <tr>
                                    {fitting.table.columns.map((col) => (
                                      <th
                                        key={col.key}
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-semibold tracking-wide text-[#0052CC] whitespace-nowrap"
                                      >
                                        {(() => {
                                          let finalLabelKey = col.label;
                                          const isNominalCol = col.key.toLowerCase().includes('nominal_size') || col.label.toLowerCase().includes('nominal size');
                                          if (isNominalCol) finalLabelKey = nominalSizeHeaderKey;
                                          return translateLabel(finalLabelKey, col.labelFr);
                                        })()}
                                      </th>
                                    ))}
                                  </tr>
                                )}
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-100">
                                {fitting.table.rows.map((row, rowIndex) => (
                                  <tr
                                    key={rowIndex}
                                    className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFB]'} hover:bg-[#F3F4F6] transition-colors`}
                                  >
                                    {fitting.table!.columns.map((col) => (
                                      <td
                                        key={col.key}
                                        className="px-3 py-2 text-sm text-[#374151] whitespace-nowrap"
                                      >
                                        {row[col.key] != null && row[col.key] !== "" ? (
                                          formatFraction(String(row[col.key])) +
                                          (((col.key.toLowerCase().includes('nominal_size') || col.key.toLowerCase().includes('inch') || col.label.toLowerCase().includes('nominal size')) && sizeState !== 'metric' && !fitting.sizeHeaderOverride) && !String(row[col.key]).endsWith('"') ? '"' : '')
                                        ) : '-'}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
