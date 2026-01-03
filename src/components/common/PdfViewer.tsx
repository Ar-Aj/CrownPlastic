'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/Icon';

interface PdfViewerProps {
  /** Path to PDF in /public/pdfs/... e.g. '/pdfs/UPVC%20PRESSURE%20PIPES_compressed.pdf' */
  src: string;
  /** Display title for the document */
  title: string;
  /** Optional description/subtitle */
  description?: string;
}

/**
 * PdfViewer - Simple full-screen PDF overlay viewer
 * 
 * Opens PDF in a full-screen overlay on top of all page content (mobile and desktop).
 * Uses browser's native PDF viewer with toolbar for zoom/navigation.
 * No download button exposed in UI - view-only experience.
 * 
 * SECURITY NOTE: PDFs are served for in-browser viewing only, with no explicit download UI.
 * However, browsers inherently allow users to save PDFs via right-click, PDF viewer controls,
 * or DevTools. True "no download at all" is technically impossible for HTTP-served PDFs.
 * This component provides view-only UX without encouraging downloads.
 */
export default function PdfViewer({ src, title, description }: PdfViewerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // PDF viewer URL with toolbar and navigation enabled, fit to horizontal width
  const pdfUrl = `${src}#toolbar=1&navpanes=1&view=FitH`;

  const handleOpen = () => {
    setIsLoading(true);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsLoading(true); // Reset for next open
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Escape key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      {/* Trigger Card/Button */}
      <button
        onClick={handleOpen}
        className="group w-full text-left p-4 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-200"
      >
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
            <Icon name="document" size={20} className="text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors mb-1">
              {title}
            </h4>
            {description && (
              <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
            )}
            <p className="text-xs text-primary mt-2 flex items-center gap-1">
              View Technical Document
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </p>
          </div>
        </div>
      </button>

      {/* Full-Screen Overlay - Always covers entire viewport and sits above all content */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex flex-col bg-black/80"
          onClick={handleClose}
        >
          {/* Compact Header Bar */}
          <div
            className="flex items-center justify-between px-4 py-2 bg-white flex-shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 min-w-0 pr-4">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-1">
                {title}
              </h3>
              {description && (
                <p className="text-xs text-gray-500 line-clamp-1">{description}</p>
              )}
            </div>
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center flex-shrink-0 transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* PDF Container - ONLY scrollable element, fills remaining screen */}
          <div
            className="flex-1 bg-gray-100 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Loading Spinner */}
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 z-10">
                <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4" />
                <p className="text-gray-600 text-sm font-medium">Loading document...</p>
              </div>
            )}

            {/* PDF iframe - fills entire container */}
            <iframe
              src={pdfUrl}
              className="w-full h-full border-0"
              title={title}
              onLoad={() => setIsLoading(false)}
              allow="fullscreen"
            />
          </div>
        </div>
      )}
    </>
  );
}
