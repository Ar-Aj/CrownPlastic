'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronUp, Table2 } from 'lucide-react';
import { type Fitting, FITTING_FAMILY_LABELS } from '@/types/productDetail';

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
    }
  }, [isOpen]);

  if (!fitting) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal container - centers the modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
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
                aria-label="Close modal"
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
                        {fitting.name}
                      </h2>

                      {/* Family label */}
                      <span className="text-xs font-medium text-[#6B7280] uppercase tracking-wide">
                        {FITTING_FAMILY_LABELS[fitting.family]}
                      </span>

                      {/* Tags */}
                      {fitting.tags && fitting.tags.length > 0 && (
                        <div className="flex gap-1 mt-2">
                          {fitting.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`text-xs font-bold px-2 py-0.5 rounded ${
                                tag === 'NEW' 
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
                  <h3 className="text-sm font-semibold text-[#374151] uppercase tracking-wide mb-3">
                    Available Sizes
                  </h3>
                  
                  {fitting.sizes.length > 0 ? (
                    <div className="overflow-hidden rounded-xl border border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-[#E5EEFF]">
                          <tr>
                            <th
                              scope="col"
                              className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#0052CC]"
                            >
                              Size (mm)
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                          {fitting.sizes.map((size, index) => (
                            <tr 
                              key={index}
                              className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFB]'} hover:bg-[#F3F4F6] transition-colors`}
                            >
                              <td className="px-4 py-2.5 text-sm text-[#374151]">
                                {size.sizeMm}
                                {size.sizeInch && (
                                  <span className="text-[#6B7280] ml-1">
                                    ({size.sizeInch})
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
                      Size data will be populated from product specifications.
                    </div>
                  )}
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
                        Technical Specifications
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
                                <tr>
                                  {fitting.table.columns.map((col) => (
                                    <th
                                      key={col.key}
                                      scope="col"
                                      className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#0052CC] whitespace-nowrap"
                                    >
                                      {col.label}
                                    </th>
                                  ))}
                                </tr>
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
                                        {row[col.key] ?? ''}
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
    </AnimatePresence>
  );
}
