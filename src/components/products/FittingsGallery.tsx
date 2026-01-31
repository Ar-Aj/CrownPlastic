'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { type Fitting, type FittingFamily, FITTING_FAMILY_LABELS } from '@/types/productDetail';
import FittingModal from './FittingModal';
import { ProductSection, ProductSectionHeader, ProductCardSurface, ProductHeroBadge, RadialGlowOverlay } from '@/components/products/design-system';

interface FittingsGalleryProps {
  fittings: Fitting[];
}

/**
 * Fittings gallery with filter tabs and clickable cards.
 * Shows family filter tabs derived from available fittings.
 * Uses the product detail design system for consistent styling.
 */
export default function FittingsGallery({ fittings }: FittingsGalleryProps) {
  const [activeFamily, setActiveFamily] = useState<FittingFamily | 'all'>('all');
  const [selectedFitting, setSelectedFitting] = useState<Fitting | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Derive available families from fittings data
  const availableFamilies = useMemo(() => {
    const families = new Set<FittingFamily>();
    fittings.forEach((f) => families.add(f.family));
    return Array.from(families);
  }, [fittings]);

  // Filter fittings based on active tab
  const filteredFittings = useMemo(() => {
    if (activeFamily === 'all') return fittings;
    return fittings.filter((f) => f.family === activeFamily);
  }, [fittings, activeFamily]);

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

  return (
    <ProductSection id="fittings" background="soft-blue" size="md" showPattern patternType="cross" showGlow>
      <div className="pointer-events-none absolute inset-0">
        <RadialGlowOverlay intensity="subtle" position="center" />
        <div className="absolute bottom-10 left-8 w-1.5 h-1.5 rounded-full bg-primary/50 shadow-[0_0_0_4px_rgba(0,114,188,0.2)]" />
      </div>
      <ProductSectionHeader 
        title="Fittings & Accessories"
        subtitle="Complete range of fittings for this product line"
      />
  
      {/* Filter tabs - horizontally scrollable on mobile */}
      <div className="mb-8 -mx-4 px-4 overflow-x-auto">
        <div className="flex gap-2 min-w-max pb-2">
          {/* All tab */}
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

          {/* Family tabs */}
          {availableFamilies.map((family) => {
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
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
        {filteredFittings.map((fitting) => (
          <FittingCard
            key={fitting.id}
            fitting={fitting}
            onClick={() => handleCardClick(fitting)}
          />
        ))}
      </div>

      {/* Empty state */}
      {filteredFittings.length === 0 && (
        <div className="py-12 text-center text-slate-400">
          No fittings found in this category.
        </div>
      )}

      {/* Modal */}
      <FittingModal
        fitting={selectedFitting}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </ProductSection>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FITTING CARD COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

interface FittingCardProps {
  fitting: Fitting;
  onClick: () => void;
}

function FittingCard({ fitting, onClick }: FittingCardProps) {
  const hasNewTag = fitting.tags?.includes('NEW');

  return (
    <button
      onClick={onClick}
      className="group relative bg-white rounded-xl overflow-hidden 
        shadow-[0_2px_8px_rgba(15,23,42,0.04)]
        hover:shadow-[0_8px_24px_rgba(15,23,42,0.10)]
        border border-gray-100 hover:border-[#0052CC]/30
        transition-all duration-200 text-left w-full"
    >
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-slate-200 via-primary/30 to-slate-200" />
      {/* Code badge (top-left) */}
      {fitting.code && (
        <span className="absolute top-2 left-2 z-10 px-2 py-0.5 text-xs font-bold bg-[#0052CC] text-white rounded">
          {fitting.code}
        </span>
      )}

      {/* NEW tag (top-right) */}
      {hasNewTag && (
        <span className="absolute top-2 right-2 z-10 px-2 py-0.5 text-xs font-bold bg-[#059669] text-white rounded">
          NEW
        </span>
      )}

      {/* Image container */}
      <div className="aspect-square p-4 bg-[#F7F9FC] group-hover:bg-[#E5EEFF] transition-colors">
        <div className="relative w-full h-full">
          <Image
            src={fitting.image}
            alt={fitting.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
            className="object-contain"
          />
        </div>
      </div>

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
    </button>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FITTINGS SECTION WRAPPER (for ProductDetailLayout)
// ═══════════════════════════════════════════════════════════════════════════════

export function FittingsSection({ fittings }: { fittings: Fitting[] }) {
  if (!fittings || fittings.length === 0) return null;
  return <FittingsGallery fittings={fittings} />;
}
