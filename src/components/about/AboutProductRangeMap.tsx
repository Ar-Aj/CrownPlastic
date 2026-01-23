'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { PRODUCT_MAP, type ProductCategory, type ProductItem } from '@/data/productMap';
import {
  PRODUCT_IMAGE_MAP,
  CATEGORY_FALLBACK_COLORS,
  getCategoryInitials,
} from '@/data/productImageMap';
import { ChevronDown, ChevronRight } from 'lucide-react';

// ═══════════════════════════════════════════════════════════════════════════════
// PRODUCT RANGE MAP - 3D-style interactive product taxonomy visualization
// ═══════════════════════════════════════════════════════════════════════════════
//
// CUSTOMIZATION:
// • To add/edit categories or items: update src/data/productMap.ts
// • To adjust section height: modify MIN_HEIGHT / MAX_HEIGHT below
// • Visual colors defined in COLORS constant for easy theming
//
// IMAGE MANAGEMENT:
// • Drop production images in: /public/images/productmapping/
// • Update mapping in: src/data/productImageMap.ts
// • If image is missing, falls back to gradient circle with initials
// • To add new category: add entry to PRODUCT_IMAGE_MAP with matching ID
//
// ═══════════════════════════════════════════════════════════════════════════════

// Height constraints (vh units)
const MIN_HEIGHT = '80vh';
const MAX_HEIGHT = '150vh';

// Color palette
const COLORS = {
  // Primary blue shades
  primaryDark: '#003B73',
  primary: '#0072BC',
  primaryLight: '#00a4e4',
  // Neutral
  dark: '#1a1d23',
  mid: '#2a2e36',
  light: '#f8fafc',
  // Accent
  accent: '#38bdf8',
};

// ─────────────────────────────────────────────────────────────────────────────
// HOOKS
// ─────────────────────────────────────────────────────────────────────────────

function useReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

/** Category image with fallback to gradient + initials */
function CategoryImage({
  categoryId,
  categoryName,
  size = 'md',
  className = '',
}: {
  categoryId: string;
  categoryName: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const [imageError, setImageError] = useState(false);
  const imageSrc = PRODUCT_IMAGE_MAP[categoryId];
  const fallbackColors = CATEGORY_FALLBACK_COLORS[categoryId] || { from: '#0072BC', to: '#005a94' };
  const initials = getCategoryInitials(categoryName);

  // Size mappings
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };
  const imageSizes = {
    sm: 32,
    md: 48,
    lg: 64,
  };
  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  const containerClass = `${sizeClasses[size]} rounded-full overflow-hidden flex-shrink-0 ${className}`;

  // Show image if available and not errored
  if (imageSrc && !imageError) {
    return (
      <div
        className={containerClass}
        style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
      >
        <Image
          src={imageSrc}
          alt={categoryName}
          width={imageSizes[size]}
          height={imageSizes[size]}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      </div>
    );
  }

  // Fallback: gradient circle with initials
  return (
    <div
      className={`${containerClass} flex items-center justify-center`}
      style={{
        background: `linear-gradient(135deg, ${fallbackColors.from} 0%, ${fallbackColors.to} 100%)`,
        boxShadow: '0 2px 8px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)',
      }}
    >
      <span className={`font-bold text-white ${textSizes[size]}`}>
        {initials}
      </span>
    </div>
  );
}

/** Category node for desktop horizontal rail */
function CategoryNode({
  category,
  isActive,
  onClick,
  onHover,
  reducedMotion,
}: {
  category: ProductCategory;
  isActive: boolean;
  onClick: () => void;
  onHover: () => void;
  reducedMotion: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={onHover}
      className={`
        relative flex flex-col items-center gap-2 px-5 py-4 rounded-xl
        cursor-pointer select-none transition-colors duration-200
        ${isActive
          ? 'bg-gradient-to-b from-[#0072BC] to-[#005a94] text-white shadow-lg shadow-primary/30'
          : 'bg-gradient-to-b from-white to-slate-50 text-slate-700 shadow-md hover:shadow-lg'
        }
      `}
      whileHover={reducedMotion ? {} : { y: -4, scale: 1.02 }}
      whileTap={reducedMotion ? {} : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      aria-pressed={isActive}
      aria-label={`View ${category.name} products`}
    >
      {/* Category Image */}
      <CategoryImage
        categoryId={category.id}
        categoryName={category.name}
        size="md"
      />
      
      {/* Name */}
      <span className={`text-xs font-semibold text-center leading-tight max-w-[90px] ${isActive ? 'text-white' : 'text-slate-700'}`}>
        {category.name.replace(' & ', '\n& ').split('\n').map((line, i) => (
          <span key={i} className="block">{line}</span>
        ))}
      </span>

      {/* Active indicator dot */}
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute -bottom-3 w-2 h-2 rounded-full bg-white shadow-sm"
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}
    </motion.button>
  );
}

/** Detail panel showing sub-items for the active category */
function DetailPanel({
  category,
  reducedMotion,
}: {
  category: ProductCategory;
  reducedMotion: boolean;
}) {
  return (
    <motion.div
      key={category.id}
      initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reducedMotion ? {} : { opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      {/* Category description */}
      <p className="text-sm text-slate-600 mb-4 max-w-2xl mx-auto text-center">
        {category.description}
      </p>

      {/* Sub-items grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
        {category.items.map((item) => (
          <ItemChip key={item.id} item={item} reducedMotion={reducedMotion} />
        ))}
      </div>
    </motion.div>
  );
}

/** Individual product item chip */
function ItemChip({
  item,
  reducedMotion,
}: {
  item: ProductItem;
  reducedMotion: boolean;
}) {
  return (
    <motion.div
      whileHover={reducedMotion ? {} : { scale: 1.02 }}
      className="
        p-3 rounded-lg
        bg-gradient-to-br from-slate-50 to-slate-100
        border border-slate-200
        shadow-sm hover:shadow-md
        transition-shadow duration-200
      "
    >
      <h4 className="text-xs font-semibold text-slate-800 leading-tight mb-1">
        {item.name}
      </h4>
      {item.shortInfo && (
        <p className="text-[10px] text-slate-500 leading-snug">
          {item.shortInfo}
        </p>
      )}
    </motion.div>
  );
}

/** Mobile accordion category card */
function MobileAccordionCard({
  category,
  isExpanded,
  onToggle,
  reducedMotion,
}: {
  category: ProductCategory;
  isExpanded: boolean;
  onToggle: () => void;
  reducedMotion: boolean;
}) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white">
      {/* Header */}
      <button
        onClick={onToggle}
        className={`
          w-full flex items-center gap-3 px-4 py-3
          transition-colors duration-200
          ${isExpanded
            ? 'bg-gradient-to-r from-[#0072BC] to-[#005a94] text-white'
            : 'bg-gradient-to-r from-slate-50 to-white text-slate-700'
          }
        `}
        aria-expanded={isExpanded}
      >
        <CategoryImage
          categoryId={category.id}
          categoryName={category.name}
          size="sm"
        />
        <span className="flex-1 text-left text-sm font-semibold">
          {category.name}
        </span>
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </button>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={reducedMotion ? {} : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reducedMotion ? {} : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-slate-50 border-t border-slate-100">
              <p className="text-xs text-slate-600 mb-3">
                {category.description}
              </p>
              <div className="flex flex-col gap-2">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-2 p-2 bg-white rounded-lg shadow-sm"
                  >
                    <ChevronRight className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-slate-800 truncate">
                        {item.name}
                      </p>
                      {item.shortInfo && (
                        <p className="text-[10px] text-slate-500 truncate">
                          {item.shortInfo}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Connecting rail behind category nodes (desktop) */
function ConnectingRail() {
  return (
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-3 mx-12 pointer-events-none">
      {/* Outer pipe */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `linear-gradient(to bottom, ${COLORS.mid} 0%, ${COLORS.dark} 50%, ${COLORS.mid} 100%)`,
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)',
        }}
      />
      {/* Inner flow line */}
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 mx-1 rounded-full"
        style={{
          background: `linear-gradient(to right, ${COLORS.primaryDark}, ${COLORS.primary}, ${COLORS.primaryLight}, ${COLORS.primary}, ${COLORS.primaryDark})`,
          boxShadow: `0 0 8px ${COLORS.accent}`,
        }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function AboutProductRangeMap() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(PRODUCT_MAP[0]?.id ?? '');
  const reducedMotion = useReducedMotion();

  const activeCategory = PRODUCT_MAP.find((c) => c.id === activeCategoryId) ?? PRODUCT_MAP[0];

  const handleCategoryClick = useCallback((id: string) => {
    setActiveCategoryId(id);
  }, []);

  const handleCategoryHover = useCallback((id: string) => {
    // On desktop hover, preview the category
    setActiveCategoryId(id);
  }, []);

  // Mobile accordion: toggle or set active
  const handleMobileToggle = useCallback((id: string) => {
    setActiveCategoryId((prev) => (prev === id ? '' : id));
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50"
      style={{ minHeight: MIN_HEIGHT, maxHeight: MAX_HEIGHT }}
      aria-labelledby="product-range-heading"
    >
      {/* Background subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${COLORS.dark} 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* ───────────────────────────────────────────────────────────────────
            HEADER
        ─────────────────────────────────────────────────────────────────── */}
        <div className="text-center mb-10 lg:mb-14">
          <motion.h2
            id="product-range-heading"
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
          >
            Crown Product Range
          </motion.h2>
          <motion.p
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Complete piping systems for buildings, infrastructure, and agriculture
            — engineered for GCC conditions since 1995.
          </motion.p>
          
          {/* Stats pill */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center gap-3 mt-5 px-4 py-2 rounded-full bg-slate-800 text-white text-sm"
          >
            <span className="font-semibold">{PRODUCT_MAP.length}</span>
            <span className="text-slate-300">Categories</span>
            <span className="w-1 h-1 rounded-full bg-slate-500" />
            <span className="font-semibold">
              {PRODUCT_MAP.reduce((sum, c) => sum + c.items.length, 0)}
            </span>
            <span className="text-slate-300">Product Families</span>
          </motion.div>
        </div>

        {/* ───────────────────────────────────────────────────────────────────
            DESKTOP LAYOUT (lg+)
        ─────────────────────────────────────────────────────────────────── */}
        <div className="hidden lg:block">
          {/* Category rail with nodes */}
          <div className="relative mb-10">
            {/* Connecting pipe/rail behind nodes */}
            <ConnectingRail />

            {/* Category nodes */}
            <div className="relative z-10 flex justify-center gap-4 xl:gap-6">
              {PRODUCT_MAP.map((category) => (
                <CategoryNode
                  key={category.id}
                  category={category}
                  isActive={activeCategoryId === category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  onHover={() => handleCategoryHover(category.id)}
                  reducedMotion={reducedMotion}
                />
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="
              relative p-6 lg:p-8 rounded-2xl
              bg-white/80 backdrop-blur-sm
              shadow-xl shadow-slate-200/50
              border border-slate-100
            "
            style={{
              boxShadow: 'inset 0 2px 20px rgba(0,0,0,0.03), 0 10px 40px rgba(0,0,0,0.08)',
            }}
          >
            <AnimatePresence mode="wait">
              {activeCategory && (
                <DetailPanel
                  key={activeCategory.id}
                  category={activeCategory}
                  reducedMotion={reducedMotion}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ───────────────────────────────────────────────────────────────────
            MOBILE LAYOUT (< lg)
        ─────────────────────────────────────────────────────────────────── */}
        <div className="lg:hidden">
          <div className="flex flex-col gap-3">
            {PRODUCT_MAP.map((category) => (
              <MobileAccordionCard
                key={category.id}
                category={category}
                isExpanded={activeCategoryId === category.id}
                onToggle={() => handleMobileToggle(category.id)}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
