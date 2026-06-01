'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X } from 'lucide-react';
import { type Fitting, type FittingFamily, FITTING_FAMILY_LABELS } from '@/types/productDetail';
import FittingModal from './FittingModal';
import { ProductSection, ProductSectionHeader, RadialGlowOverlay } from '@/components/products/design-system';
import { useT } from '@/i18n';

// ─── Color Dot Mapping ───────────────────────────────────────────────────────
// Maps a colorLabel key → Tailwind background class for the dot indicator.
// Use only safe-listed Tailwind classes (no dynamic string interpolation).
const COLOR_DOT_MAP: Record<string, string> = {
  grey:        'bg-slate-400',
  'light-grey':'bg-gray-300',
  olive:       'bg-[#708238]',
  orange:      'bg-orange-500',
  'dark-grey': 'bg-gray-700',
  white:       'bg-gray-100 border border-gray-400',
  black:       'bg-black',
};

interface FittingsGalleryProps {
  fittings: Fitting[];
  colorLabel?: string; // e.g. 'orange', 'dark-grey', 'white', 'black'
}

/**
 * Fittings gallery with filter tabs and clickable cards.
 * Shows family filter tabs derived from available fittings.
 * Uses the product detail design system for consistent styling.
 */
export default function FittingsGallery({ fittings, colorLabel }: FittingsGalleryProps) {
  const [activeFamily, setActiveFamily] = useState<FittingFamily | 'all'>('all');
  const [selectedFitting, setSelectedFitting] = useState<Fitting | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const t = useT();

  // Detect color variants
  const availableColors = useMemo(() => {
    const colors = new Set<string>();
    fittings.forEach((f) => {
      if (f.colorVariants) {
        Object.keys(f.colorVariants).forEach((c) => colors.add(c));
      }
    });
    return Array.from(colors);
  }, [fittings]);

  const hasMultipleColorVariants = availableColors.length > 1;
  // Single-color mode: colorLabel is set but fittings have no colorVariants (orange, dark-grey, white, black)
  const hasSingleColorLabel = !!colorLabel && !hasMultipleColorVariants;

  // Default to first available color if multi-variant, otherwise use colorLabel, otherwise 'all'
  const [activeColor, setActiveColor] = useState<string>(
    hasMultipleColorVariants ? availableColors[0] : (colorLabel ?? 'all')
  );

  // Derive available families from fittings data (only used if NO color tabs)
  const availableFamilies = useMemo(() => {
    const families = new Set<FittingFamily>();
    fittings.forEach((f) => families.add(f.family));
    return Array.from(families);
  }, [fittings]);

  // Filter fittings based on active tab or color mode
  const displayedFittings = useMemo(() => {
    // Color variant mode (multiple colorVariants) or single colorLabel — show all fittings
    if (hasMultipleColorVariants || hasSingleColorLabel) return fittings;
    if (activeFamily === 'all') return fittings;
    return fittings.filter((f) => f.family === activeFamily);
  }, [fittings, activeFamily, hasMultipleColorVariants, hasSingleColorLabel]);

  // Open modal for fitting
  const handleCardClick = (fitting: Fitting) => {
    setSelectedFitting(fitting);
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFitting(null);
  };

  if (!fittings || fittings.length === 0) return null;

  const isDisplayOnlySection = fittings.some(f => f.isDisplayOnly);

  return (
    <ProductSection id="fittings" background="soft-blue" size="md" showPattern patternType="cross" showGlow>
      <div className="pointer-events-none absolute inset-0">
        <RadialGlowOverlay intensity="subtle" position="center" />
        <div className="absolute bottom-10 left-8 w-1.5 h-1.5 rounded-full bg-primary/50 shadow-[0_0_0_4px_rgba(0,114,188,0.2)]" />
      </div>
      <ProductSectionHeader
        title={isDisplayOnlySection ? t('products.solvent.available_sizes') : t('products.fittings.section_title')}
        subtitle={isDisplayOnlySection ? t('products.solvent.available_sizes_subtitle') : t('products.fittings.section_subtitle')}
      />

      {/* Tabs - horizontally scrollable on mobile */}
      {!isDisplayOnlySection && (
        <div className="mb-8 -mx-4 px-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max pb-2">
            {hasMultipleColorVariants ? (
              <>
                {/* Multi-Color Tabs (e.g. Grey / Olive, or Orange / Light Grey / Olive) */}
                {availableColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setActiveColor(color)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                      activeColor === color
                        ? 'bg-primary text-white shadow-md shadow-primary/20 scale-105'
                        : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow'
                    }`}
                  >
                    <span className={`w-3 h-3 rounded-full shadow-inner flex-shrink-0 ${COLOR_DOT_MAP[color] ?? 'bg-slate-300'}`} />
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {t(`common.colors.${color}` as any) || color.charAt(0).toUpperCase() + color.slice(1)}
                  </button>
                ))}
              </>
            ) : hasSingleColorLabel ? (
              <>
                {/* Single Color Tab — e.g. Orange, Dark Grey, White, Black */}
                <button
                  className="px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-2 bg-primary text-white shadow-md shadow-primary/20 scale-105 cursor-default"
                  aria-pressed="true"
                >
                  <span className={`w-3 h-3 rounded-full shadow-inner flex-shrink-0 ${COLOR_DOT_MAP[colorLabel!] ?? 'bg-slate-300'}`} />
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {t(`common.colors.${colorLabel}` as any) || colorLabel!.charAt(0).toUpperCase() + colorLabel!.slice(1)}
                </button>
              </>
            ) : (
              <>
                {/* Normal Family Tabs */}
                {/* Only show family tabs if there's more than one family to filter */}
                {availableFamilies.length > 1 && (
                  <button
                    onClick={() => setActiveFamily('all')}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      activeFamily === 'all'
                        ? 'bg-primary text-white shadow-sm'
                        : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-white border border-slate-200 shadow-sm'
                    }`}
                  >
                    All ({fittings.length})
                  </button>
                )}

                {availableFamilies.length > 1 && availableFamilies.map((family) => {
                  const count = fittings.filter((f) => f.family === family).length;
                  return (
                    <button
                      key={family}
                      onClick={() => setActiveFamily(family)}
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                        activeFamily === family
                          ? 'bg-primary text-white shadow-sm'
                          : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-white border border-slate-200 shadow-sm'
                      }`}
                    >
                      {FITTING_FAMILY_LABELS[family]} ({count})
                    </button>
                  );
                })}
              </>
            )}
          </div>
        </div>
      )}

      {/* Cards grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
        {displayedFittings.map((fitting) => (
          <FittingCard
            key={fitting.id}
            fitting={fitting}
            activeColor={hasMultipleColorVariants ? activeColor : undefined}
            onClick={() => handleCardClick(fitting)}
            onViewImage={(img) => setLightboxImage(img)}
          />
        ))}
      </div>

      {/* Empty state */}
      {displayedFittings.length === 0 && (
        <div className="py-12 text-center text-slate-400">
          {t('products.fittings.empty_state')}
        </div>
      )}

      {/* Detail Modal */}
      <FittingModal
        fitting={selectedFitting}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Image Lightbox */}
      <ImageLightbox
        src={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </ProductSection>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FITTING CARD COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

interface FittingCardProps {
  fitting: Fitting;
  activeColor?: string;
  onClick: () => void;
  onViewImage: (src: string) => void;
}

function FittingCard({ fitting, activeColor, onClick, onViewImage }: FittingCardProps) {
  const hasNewTag = fitting.tags?.includes('NEW');
  const t = useT();
  // Resolve image dynamically based on color selection
  const displayImage = activeColor && fitting.colorVariants && fitting.colorVariants[activeColor]
    ? fitting.colorVariants[activeColor]
    : fitting.image;

  return (
    <div
      role={fitting.isDisplayOnly ? undefined : "button"}
      tabIndex={fitting.isDisplayOnly ? undefined : 0}
      onClick={fitting.isDisplayOnly ? undefined : onClick}
      onKeyDown={fitting.isDisplayOnly ? undefined : (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
      className={`group relative bg-white rounded-xl overflow-hidden
        shadow-[0_2px_8px_rgba(15,23,42,0.04)]
        border border-gray-100 transition-all duration-200 text-left w-full
        ${fitting.isDisplayOnly 
          ? 'cursor-default' 
          : 'hover:shadow-[0_8px_24px_rgba(15,23,42,0.10)] hover:border-[#0052CC]/30 cursor-pointer'
        }`}
    >
      {/* Image container — edge-to-edge, flush to top */}
      <div className="relative aspect-square overflow-hidden rounded-t-xl bg-[#F7F9FC] group-hover:bg-[#E5EEFF] transition-colors">
        <Image
          src={displayImage}
          alt={fitting.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Gradient overlay for badges readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent pointer-events-none" />

        {/* Code badge (top-left) */}
        {fitting.code && (
          <span className="absolute top-2 left-2 z-10 px-2 py-0.5 text-xs font-bold bg-[#0052CC] text-white rounded shadow">
            {fitting.code}
          </span>
        )}

        {/* NEW tag (top-right) */}
        {hasNewTag && (
          <span className="absolute top-2 right-2 z-10 px-2 py-0.5 text-xs font-bold bg-[#059669] text-white rounded shadow">
            NEW
          </span>
        )}

        {/* View Image button — valid: button inside div, not button-in-button */}
        {!fitting.isDisplayOnly && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onViewImage(displayImage);
            }}
            aria-label={t('products.fitting_modal.view_image')}
            className="
              absolute top-2 right-2 z-20
              flex items-center gap-1
              px-2 py-1 rounded-md
              bg-white/90 backdrop-blur-sm
              text-[10px] font-semibold text-[#0052CC]
              shadow-sm border border-[#0052CC]/20
              hover:bg-[#E5EEFF]
            "
          >
            <ZoomIn className="w-3 h-3 text-[#0052CC] flex-shrink-0" />
            {t('products.fitting_modal.view_image')}
          </button>
        )}
      </div>

      {/* Thin accent line */}
      <div className="h-0.5 bg-gradient-to-r from-slate-200 via-primary/30 to-slate-200" />

      {/* Info */}
      <div className="p-3">
        {/* Family label */}
        <span className="text-[10px] font-medium text-[#9CA3AF] uppercase tracking-wide block mb-1">
          {FITTING_FAMILY_LABELS[fitting.family]}
        </span>

        {/* Name */}
        <h3 className="text-xs sm:text-sm font-semibold text-[#111827] leading-tight line-clamp-2 group-hover:text-[#0052CC] transition-colors">
          {fitting.name}
        </h3>

        {/* Size count indicator */}
        {fitting.sizes.length > 0 && (
          <span className="text-[10px] text-[#6B7280] mt-1.5 block">
            {fitting.sizes.length} size{fitting.sizes.length !== 1 ? 's' : ''} available
          </span>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// IMAGE LIGHTBOX COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

function ImageLightbox({ src, onClose }: { src: string | null; onClose: () => void }) {
  const t = useT();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); },
    [onClose]
  );

  useEffect(() => {
    if (src) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [src, handleKeyDown]);

  return (
    <AnimatePresence>
      {src && (
        <>
          {/* Backdrop */}
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Image panel */}
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              key="lightbox-panel"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              className="relative max-w-3xl w-full max-h-[85vh] pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={t('products.fitting_modal.view_image')}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute -top-4 -right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-colors shadow-lg"
                aria-label={t('products.fitting_modal.close_modal')}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Full-res image */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-contain bg-[#111]"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FITTINGS SECTION WRAPPER (for ProductDetailLayout)
// ═══════════════════════════════════════════════════════════════════════════════

export function FittingsSection({ fittings, colorLabel }: { fittings: Fitting[]; colorLabel?: string }) {
  if (!fittings || fittings.length === 0) return null;
  return <FittingsGallery fittings={fittings} colorLabel={colorLabel} />;
}
