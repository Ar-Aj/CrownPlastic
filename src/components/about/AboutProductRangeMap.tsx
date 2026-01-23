'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { PRODUCT_MAP, type ProductCategory, type ProductItem } from '@/data/productMap';
import { PRODUCT_WHEEL_IMAGE_MAP, getCategoryAcronym } from '@/data/productWheelMap';

// ═══════════════════════════════════════════════════════════════════════════════
// PRODUCT RANGE WHEEL SELECTOR - Perfectly Centered Circular Layout
// ═══════════════════════════════════════════════════════════════════════════════
//
// WHEEL CENTERING:
// • All positions (hub + nodes) are calculated from the center of the square wrapper
// • Center point: exactly 50% width and 50% height of the aspect-square container
// • Hub uses: absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
// • Nodes positioned using: x = centerX + radius*cos(angle), y = centerY + radius*sin(angle)
//
// RESPONSIVE SIZING:
// • Mobile: 320px container, scaled down but same circular geometry
// • Tablet: 400px-520px container
// • Desktop: 520px-640px container, uses more horizontal space
// • All breakpoints render the SAME circular wheel, just scaled
//
// ═══════════════════════════════════════════════════════════════════════════════

const COLORS = {
  primaryDark: '#003B73',
  primary: '#0072BC',
  primaryLight: '#00a4e4',
  dark: '#1a1d23',
  accent: '#38bdf8',
  glowSubtle: 'rgba(56, 189, 248, 0.08)',
};

const START_ANGLE = -90; // Top position (12 o'clock)

// ─────────────────────────────────────────────────────────────────────────────
// HOOKS
// ─────────────────────────────────────────────────────────────────────────────

function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  
  return prefersReducedMotion;
}

// ─────────────────────────────────────────────────────────────────────────────
// UTILITY: Calculate node position from center using trigonometry
// ─────────────────────────────────────────────────────────────────────────────

function getNodePosition(
  index: number,
  total: number,
  radius: number,
  startAngle: number = START_ANGLE
): { x: number; y: number } {
  const angle = startAngle + index * (360 / total);
  const radians = (angle * Math.PI) / 180;
  return {
    x: Math.cos(radians) * radius,
    y: Math.sin(radians) * radius,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

/** 
 * Central hub - positioned at exact center
 * CENTERING: Uses left/top 50% with margin offset (not transform) to avoid
 * conflict with Framer Motion scale animations which override CSS transforms.
 */
function CentralHub({
  hubSize,
  activeCategoryId,
  reducedMotion,
}: {
  hubSize: number;
  activeCategoryId: string;
  reducedMotion: boolean;
}) {
  const [imageError, setImageError] = useState(false);
  const imageSrc = PRODUCT_WHEEL_IMAGE_MAP[activeCategoryId];
  const hasImage = imageSrc && !imageError;

  useEffect(() => {
    setImageError(false);
  }, [activeCategoryId]);

  // Hub is centered using negative margin = half of hub size
  // This avoids transform conflicts with Framer Motion scale animation
  return (
    <motion.div
      className="absolute z-20"
      style={{
        left: '50%',
        top: '50%',
        marginLeft: -hubSize / 2,
        marginTop: -hubSize / 2,
        width: hubSize,
        height: hubSize,
      }}
      initial={reducedMotion ? {} : { scale: 0.92, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="w-full h-full rounded-full flex items-center justify-center overflow-hidden"
        style={{
          background: hasImage
            ? COLORS.primaryDark
            : `radial-gradient(circle at 35% 35%, ${COLORS.primaryLight}, ${COLORS.primary}, ${COLORS.primaryDark})`,
          boxShadow: `
            0 0 0 3px ${COLORS.accent}35,
            0 0 30px rgba(56, 189, 248, 0.2),
            inset 0 2px 6px rgba(255,255,255,0.15)
          `,
        }}
      >
        {hasImage && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategoryId}
              initial={reducedMotion ? {} : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reducedMotion ? {} : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full"
            >
              <Image
                src={imageSrc}
                alt="Active category"
                fill
                className="object-cover"
                onError={() => setImageError(true)}
                sizes={`${hubSize}px`}
              />
            </motion.div>
          </AnimatePresence>
        )}

        {!hasImage && (
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-white font-bold text-xs sm:text-sm leading-tight">Crown</span>
            <span className="text-white/70 text-[9px] sm:text-[10px] leading-tight mt-0.5">Product Range</span>
          </div>
        )}

        {hasImage && (
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, transparent 55%, rgba(0,59,115,0.5) 100%)',
            }}
          />
        )}
      </div>
    </motion.div>
  );
}

/** 
 * Subtle centered glow
 * CENTERING: Uses negative margin to center without transform
 */
function CenteredGlow({ size, reducedMotion }: { size: number; reducedMotion: boolean }) {
  const glowSize = size * 1.4;
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none z-0"
      style={{
        left: '50%',
        top: '50%',
        width: glowSize,
        height: glowSize,
        marginLeft: -glowSize / 2,
        marginTop: -glowSize / 2,
        background: `radial-gradient(circle at center, ${COLORS.glowSubtle} 0%, transparent 70%)`,
      }}
      initial={reducedMotion ? {} : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    />
  );
}

/** 
 * Orbit ring - the circle that nodes sit on
 * CENTERING: Uses negative margin to center without transform conflicts
 */
function OrbitRing({
  orbitRadius,
  reducedMotion,
}: {
  orbitRadius: number;
  reducedMotion: boolean;
}) {
  const diameter = orbitRadius * 2;

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none z-0"
      style={{
        left: '50%',
        top: '50%',
        width: diameter,
        height: diameter,
        marginLeft: -orbitRadius,
        marginTop: -orbitRadius,
        border: `1px solid ${COLORS.accent}20`,
      }}
      initial={reducedMotion ? {} : { scale: 0.96, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
    />
  );
}

/** 
 * Category node on orbit
 * CENTERING: Node position is calculated from container center (50%, 50%)
 * using trigonometry: x = cos(angle) * radius, y = sin(angle) * radius
 * Margin offset used instead of transform to avoid Framer Motion conflicts
 */
function WheelNode({
  category,
  position,
  index,
  nodeSize,
  isActive,
  isHovered,
  onClick,
  onMouseEnter,
  onMouseLeave,
  reducedMotion,
}: {
  category: ProductCategory;
  position: { x: number; y: number };
  index: number;
  nodeSize: number;
  isActive: boolean;
  isHovered: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  reducedMotion: boolean;
}) {
  const [imageError, setImageError] = useState(false);
  const imageSrc = PRODUCT_WHEEL_IMAGE_MAP[category.id];
  const acronym = getCategoryAcronym(category.id);
  const hasImage = imageSrc && !imageError;

  const nodeScale = isActive ? 1.1 : isHovered ? 1.05 : 1;

  // Position node at center + offset, using margin to center the node itself
  return (
    <motion.button
      className="absolute z-10"
      style={{
        left: `calc(50% + ${position.x}px)`,
        top: `calc(50% + ${position.y}px)`,
        width: nodeSize,
        height: nodeSize,
        marginLeft: -nodeSize / 2,
        marginTop: -nodeSize / 2,
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={reducedMotion ? {} : { scale: 0, opacity: 0 }}
      animate={{ scale: reducedMotion ? 1 : nodeScale, opacity: 1 }}
      transition={{ duration: 0.2, delay: reducedMotion ? 0 : index * 0.05 }}
      aria-pressed={isActive}
      aria-label={`Select ${category.name}`}
    >
      <div
        className="w-full h-full rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 overflow-hidden"
        style={{
          background: isActive
            ? `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`
            : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          boxShadow: isActive
            ? `0 0 16px ${COLORS.accent}80, 0 3px 12px rgba(0,0,0,0.15)`
            : '0 2px 10px rgba(0,0,0,0.08)',
          border: isActive ? `2px solid ${COLORS.accent}` : '1.5px solid rgba(0,0,0,0.05)',
        }}
      >
        {hasImage ? (
          <div className="relative w-full h-full">
            <Image
              src={imageSrc}
              alt={category.name}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
              sizes={`${nodeSize}px`}
            />
          </div>
        ) : (
          <span
            className={`font-bold text-xs sm:text-sm ${isActive ? 'text-white' : 'text-slate-700'}`}
          >
            {acronym}
          </span>
        )}
      </div>

      <div
        className={`absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] sm:text-xs font-medium transition-colors ${
          isActive ? 'text-primary' : 'text-slate-500'
        }`}
      >
        {category.items.length} items
      </div>

      <AnimatePresence>
        {isHovered && !isActive && (
          <motion.div
            initial={{ opacity: 0, y: 2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 2 }}
            transition={{ duration: 0.1 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
          >
            <div className="px-2.5 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-medium whitespace-nowrap shadow-xl">
              {category.name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

/** Detail panel - mobile version (no scroll constraints) */
function DetailPanelMobile({
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
      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 text-center mb-2">
        {category.name}
      </h3>
      
      <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto text-center">
        {category.description}
      </p>
      
      <div className="mt-4 grid gap-3 sm:grid-cols-2 max-w-xl mx-auto">
        {category.items.map((item) => (
          <ItemChip key={item.id} item={item} reducedMotion={reducedMotion} />
        ))}
      </div>
    </motion.div>
  );
}

/** Detail panel - desktop version (with internal scroll for item grid) */
function DetailPanelDesktop({
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
      className="w-full h-full flex flex-col"
    >
      {/* Fixed header section */}
      <div className="flex-shrink-0">
        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 text-center lg:text-left mb-2">
          {category.name}
        </h3>
        
        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl text-center lg:text-left">
          {category.description}
        </p>
      </div>
      
      {/* Scrollable item grid */}
      <div className="mt-4 flex-1 min-h-0 overflow-y-auto pr-2 custom-scrollbar">
        <div className="grid gap-3 grid-cols-2 xl:grid-cols-3">
          {category.items.map((item) => (
            <ItemChip key={item.id} item={item} reducedMotion={reducedMotion} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/** Item chip */
function ItemChip({ item, reducedMotion }: { item: ProductItem; reducedMotion: boolean }) {
  return (
    <motion.div
      whileHover={reducedMotion ? {} : { scale: 1.02 }}
      className="rounded-xl border border-slate-200 bg-slate-50 hover:bg-white shadow-sm px-3 py-3 sm:px-4 sm:py-3 transition-all duration-200"
    >
      <h4 className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug mb-1">
        {item.name}
      </h4>
      {item.shortInfo && (
        <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
          {item.shortInfo}
        </p>
      )}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function AboutProductRangeMap() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(PRODUCT_MAP[0]?.id ?? '');
  const [hoveredCategoryId, setHoveredCategoryId] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  const activeCategory = PRODUCT_MAP.find((c) => c.id === activeCategoryId) ?? PRODUCT_MAP[0];

  const totalCategories = PRODUCT_MAP.length;
  const totalItems = useMemo(
    () => PRODUCT_MAP.reduce((sum, c) => sum + c.items.length, 0),
    []
  );

  const handleCategoryClick = useCallback((id: string) => {
    setActiveCategoryId(id);
  }, []);

  // Responsive sizing based on breakpoint - all use same circular geometry
  const wheelConfig = {
    mobile: { containerSize: 320, hubSize: 90, hubImageSize: 60, orbitRadius: 105, nodeSize: 50, nodeImageSize: 25 },
    sm: { containerSize: 400, hubSize: 110, hubImageSize: 75, orbitRadius: 130, nodeSize: 60, nodeImageSize: 30 },
    lg: { containerSize: 520, hubSize: 130, hubImageSize: 90, orbitRadius: 165, nodeSize: 70, nodeImageSize: 36 },
    xl: { containerSize: 600, hubSize: 150, hubImageSize: 105, orbitRadius: 190, nodeSize: 80, nodeImageSize: 42 },
    '2xl': { containerSize: 640, hubSize: 170, hubImageSize: 120, orbitRadius: 205, nodeSize: 90, nodeImageSize: 48 },
  };

  return (
    <section
      id="crown-product-range"
      className="relative w-full bg-gradient-to-b from-slate-50 via-white to-slate-100 py-10 sm:py-12 md:pb-16 lg:pb-20"
      aria-labelledby="product-range-heading"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${COLORS.dark} 1px, transparent 0)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Main container */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER - full width on all breakpoints */}
        <div className="text-center mb-6 lg:mb-10">
          <motion.h2
            id="product-range-heading"
            initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2"
          >
            Crown Product Range
          </motion.h2>
          
          <motion.p
            initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto"
          >
            Complete piping systems for buildings, infrastructure, and agriculture.
          </motion.p>

          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 mt-3 px-3 py-1.5 rounded-full bg-slate-800 text-white text-xs"
          >
            <span className="font-semibold">{totalCategories}</span>
            <span className="text-slate-300">Categories</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="font-semibold">{totalItems}</span>
            <span className="text-slate-300">Product Families</span>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            RESPONSIVE LAYOUT:
            • Mobile/Tablet (< lg): Vertical stack, compact wheel
            • Desktop (lg+): Horizontal grid, wheel left | card right
        ═══════════════════════════════════════════════════════════════ */}
        
        {/* Mobile/Tablet Layout (< lg): Vertical stack */}
        <div className="lg:hidden flex flex-col items-center">
          {/* Compact wheel for mobile/tablet */}
          <div className="w-full mb-4 sm:mb-6">
            <div className="relative mx-auto aspect-square max-w-[260px] sm:max-w-[320px] md:max-w-[360px]">
              <CenteredGlow size={360} reducedMotion={reducedMotion} />
              <OrbitRing orbitRadius={wheelConfig.mobile.orbitRadius} reducedMotion={reducedMotion} />
              <CentralHub
                hubSize={wheelConfig.mobile.hubSize}
                activeCategoryId={activeCategoryId}
                reducedMotion={reducedMotion}
              />
              {PRODUCT_MAP.map((category, index) => {
                const position = getNodePosition(index, PRODUCT_MAP.length, wheelConfig.mobile.orbitRadius);
                return (
                  <WheelNode
                    key={category.id}
                    category={category}
                    position={position}
                    index={index}
                    nodeSize={wheelConfig.mobile.nodeSize}
                    isActive={activeCategoryId === category.id}
                    isHovered={hoveredCategoryId === category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    onMouseEnter={() => setHoveredCategoryId(category.id)}
                    onMouseLeave={() => setHoveredCategoryId(null)}
                    reducedMotion={reducedMotion}
                  />
                );
              })}
            </div>
          </div>

          {/* Detail card for mobile/tablet */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="w-full rounded-2xl bg-white shadow-lg border border-slate-100 px-4 py-5 sm:px-6 sm:py-6 max-w-[95%] sm:max-w-[400px] md:max-w-[480px] mx-auto"
          >
            <AnimatePresence mode="wait">
              {activeCategory && (
                <DetailPanelMobile
                  key={activeCategory.id}
                  category={activeCategory}
                  reducedMotion={reducedMotion}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Desktop Layout (lg+): Horizontal grid with controlled height */}
        <div className="hidden lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] gap-10 items-center lg:h-[65vh] lg:min-h-[480px] lg:max-h-[600px]">
          {/* Left column: Wheel */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative aspect-square max-w-[360px] xl:max-w-[420px]">
              <CenteredGlow size={420} reducedMotion={reducedMotion} />
              <OrbitRing orbitRadius={wheelConfig.lg.orbitRadius} reducedMotion={reducedMotion} />
              <CentralHub
                hubSize={wheelConfig.lg.hubSize}
                activeCategoryId={activeCategoryId}
                reducedMotion={reducedMotion}
              />
              {PRODUCT_MAP.map((category, index) => {
                const position = getNodePosition(index, PRODUCT_MAP.length, wheelConfig.lg.orbitRadius);
                return (
                  <WheelNode
                    key={category.id}
                    category={category}
                    position={position}
                    index={index}
                    nodeSize={wheelConfig.lg.nodeSize}
                    isActive={activeCategoryId === category.id}
                    isHovered={hoveredCategoryId === category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    onMouseEnter={() => setHoveredCategoryId(category.id)}
                    onMouseLeave={() => setHoveredCategoryId(null)}
                    reducedMotion={reducedMotion}
                  />
                );
              })}
            </div>
          </div>

          {/* Right column: Detail card with internal scroll */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="w-full h-full max-h-full rounded-2xl bg-white shadow-lg border border-slate-100 px-6 py-6 overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {activeCategory && (
                <DetailPanelDesktop
                  key={activeCategory.id}
                  category={activeCategory}
                  reducedMotion={reducedMotion}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
