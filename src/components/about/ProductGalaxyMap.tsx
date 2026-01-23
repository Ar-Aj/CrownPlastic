'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { PRODUCT_MAP, type ProductCategory, type ProductItem } from '@/data/productMap';
import { ChevronDown } from 'lucide-react';

// ═══════════════════════════════════════════════════════════════════════════════
// PRODUCT GALAXY MAP - Space-themed orbit visualization of product taxonomy
// ═══════════════════════════════════════════════════════════════════════════════
//
// CUSTOMIZATION:
// • To add/edit categories or items: update src/data/productMap.ts
// • To add category images: place in public/images/products/galaxy/{category-id}.png
// • Moon positions are computed from item index (evenly distributed around orbit)
// • Adding new categories/items to PRODUCT_MAP will auto-render without layout changes
//
// IMAGE MAPPING:
// Category ID → /images/products/galaxy/{id}.png
// Falls back to category icon if image is missing
//
// ═══════════════════════════════════════════════════════════════════════════════

// Height constraints
const MIN_HEIGHT = '80vh';
const MAX_HEIGHT = '150vh';

// Category ID to image path mapping
const categoryImageMap: Record<string, string> = {
  'upvc-pressure': '/images/products/galaxy/upvc-pressure.png',
  'upvc-drainage': '/images/products/galaxy/upvc-drainage.png',
  'upvc-duct': '/images/products/galaxy/upvc-duct.png',
  'pvc-conduit': '/images/products/galaxy/pvc-conduit.png',
  'ppr': '/images/products/galaxy/ppr.png',
  'polyethylene': '/images/products/galaxy/hdpe.png',
};

// Fallback product images (existing)
const fallbackImageMap: Record<string, string> = {
  'upvc-pressure': '/images/products/upvc-pressure.jpg',
  'upvc-drainage': '/images/products/upvc-drainage.jpg',
  'upvc-duct': '/images/products/upvc-duct.jpg',
  'pvc-conduit': '/images/products/pvc-conduit.jpg',
  'ppr': '/images/products/ppr-pipes.jpg',
  'polyethylene': '/images/products/pe-systems.jpg',
};

// Color palette
const COLORS = {
  // Deep space blues
  spaceDark: '#0a0e1a',
  spaceMid: '#121a2e',
  spaceLight: '#1a2540',
  // Accent glow
  glowBlue: '#38bdf8',
  glowCyan: '#22d3ee',
  // Primary
  primary: '#0072BC',
  primaryLight: '#00a4e4',
};

// ─────────────────────────────────────────────────────────────────────────────
// HOOKS
// ─────────────────────────────────────────────────────────────────────────────

function useReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// ─────────────────────────────────────────────────────────────────────────────
// UTILITY: Compute moon positions around orbit
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Compute (x, y) position for a moon on an elliptical orbit
 * @param index - moon index (0-based)
 * @param total - total number of moons
 * @param radiusX - horizontal radius of orbit (px or %)
 * @param radiusY - vertical radius of orbit (px or %)
 * @param offsetAngle - starting angle offset in degrees
 */
function getMoonPosition(
  index: number,
  total: number,
  radiusX: number,
  radiusY: number,
  offsetAngle: number = -90
): { x: number; y: number; angle: number } {
  const angle = offsetAngle + (360 / total) * index;
  const radians = (angle * Math.PI) / 180;
  return {
    x: Math.cos(radians) * radiusX,
    y: Math.sin(radians) * radiusY,
    angle,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

/** Moon (sub-item) on the orbit */
function Moon({
  item,
  position,
  reducedMotion,
  isHovered,
  onHover,
  onLeave,
}: {
  item: ProductItem;
  position: { x: number; y: number };
  reducedMotion: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      className="absolute z-20"
      style={{
        left: `calc(50% + ${position.x}px)`,
        top: `calc(50% + ${position.y}px)`,
        transform: 'translate(-50%, -50%)',
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      animate={
        reducedMotion
          ? {}
          : {
              scale: isHovered ? 1.3 : 1,
              boxShadow: isHovered
                ? `0 0 20px ${COLORS.glowCyan}, 0 0 40px ${COLORS.glowBlue}`
                : `0 0 8px ${COLORS.glowBlue}`,
            }
      }
      transition={{ duration: 0.2 }}
    >
      {/* Moon dot */}
      <div
        className="w-3 h-3 rounded-full cursor-pointer"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${COLORS.glowCyan}, ${COLORS.primary})`,
          boxShadow: `0 0 8px ${COLORS.glowBlue}, inset 0 -1px 2px rgba(0,0,0,0.3)`,
        }}
      />

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 5 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-30 pointer-events-none"
          >
            <div
              className="px-3 py-2 rounded-lg text-center whitespace-nowrap"
              style={{
                background: 'rgba(10, 14, 26, 0.95)',
                border: `1px solid ${COLORS.glowBlue}`,
                boxShadow: `0 4px 20px rgba(0,0,0,0.5), 0 0 10px ${COLORS.glowBlue}30`,
              }}
            >
              <p className="text-xs font-semibold text-white mb-0.5">{item.name}</p>
              {item.shortInfo && (
                <p className="text-[10px] text-slate-400">{item.shortInfo}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/** Orbit system card (desktop) */
function OrbitSystem({
  category,
  reducedMotion,
}: {
  category: ProductCategory;
  reducedMotion: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMoonId, setHoveredMoonId] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  const imageSrc = categoryImageMap[category.id];
  const fallbackSrc = fallbackImageMap[category.id];

  // Orbit dimensions (relative to card)
  const orbitRadiusX = 85;
  const orbitRadiusY = 75;

  return (
    <motion.div
      className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: `radial-gradient(ellipse at center, ${COLORS.spaceLight} 0%, ${COLORS.spaceMid} 50%, ${COLORS.spaceDark} 100%)`,
        boxShadow: isHovered
          ? `0 0 40px ${COLORS.glowBlue}40, inset 0 0 60px ${COLORS.spaceDark}`
          : `inset 0 0 60px ${COLORS.spaceDark}`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredMoonId(null);
      }}
      whileHover={reducedMotion ? {} : { scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Subtle star-like dots */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full bg-white/60"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
          />
        ))}
      </div>

      {/* Orbit ring */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: orbitRadiusX * 2 + 20,
          height: orbitRadiusY * 2 + 20,
          border: `1px solid ${COLORS.glowBlue}30`,
          boxShadow: `0 0 15px ${COLORS.glowBlue}20, inset 0 0 15px ${COLORS.glowBlue}10`,
        }}
      />

      {/* Planet (center) */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        animate={
          reducedMotion
            ? {}
            : {
                scale: isHovered ? 1.1 : 1,
              }
        }
        transition={{ duration: 0.3 }}
      >
        <div
          className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${COLORS.spaceLight}, ${COLORS.spaceDark})`,
            boxShadow: `0 0 20px ${COLORS.glowBlue}40, inset -4px -4px 10px rgba(0,0,0,0.5), inset 2px 2px 8px rgba(255,255,255,0.1)`,
            border: `2px solid ${COLORS.glowBlue}50`,
          }}
        >
          {!imageError && imageSrc ? (
            <Image
              src={imageSrc}
              alt={category.name}
              width={64}
              height={64}
              className="object-cover rounded-full"
              onError={() => setImageError(true)}
            />
          ) : !imageError && fallbackSrc ? (
            <Image
              src={fallbackSrc}
              alt={category.name}
              width={64}
              height={64}
              className="object-cover rounded-full"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="text-3xl">{category.icon}</span>
          )}
        </div>
      </motion.div>

      {/* Moons (sub-items) */}
      {category.items.map((item, index) => {
        const pos = getMoonPosition(index, category.items.length, orbitRadiusX, orbitRadiusY);
        return (
          <Moon
            key={item.id}
            item={item}
            position={pos}
            reducedMotion={reducedMotion}
            isHovered={hoveredMoonId === item.id}
            onHover={() => setHoveredMoonId(item.id)}
            onLeave={() => setHoveredMoonId(null)}
          />
        );
      })}

      {/* Category name label */}
      <div className="absolute bottom-3 left-0 right-0 text-center z-20">
        <p
          className="text-xs font-bold text-white/90 px-2"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
        >
          {category.name}
        </p>
        <p className="text-[10px] text-slate-400 mt-0.5">
          {category.items.length} products
        </p>
      </div>
    </motion.div>
  );
}

/** Mobile orbit card with accordion */
function MobileOrbitCard({
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
  const [imageError, setImageError] = useState(false);
  const imageSrc = categoryImageMap[category.id];
  const fallbackSrc = fallbackImageMap[category.id];

  // Show first 3 moons in preview
  const previewMoons = category.items.slice(0, 3);
  const orbitRadiusX = 50;
  const orbitRadiusY = 40;

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${COLORS.spaceMid} 0%, ${COLORS.spaceDark} 100%)`,
        boxShadow: `0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)`,
      }}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-4"
        aria-expanded={isExpanded}
      >
        {/* Planet preview */}
        <div className="relative w-16 h-16 flex-shrink-0">
          {/* Mini orbit ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: `1px solid ${COLORS.glowBlue}30`,
            }}
          />
          {/* Planet */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden flex items-center justify-center"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${COLORS.spaceLight}, ${COLORS.spaceDark})`,
              boxShadow: `0 0 10px ${COLORS.glowBlue}40`,
              border: `1px solid ${COLORS.glowBlue}40`,
            }}
          >
            {!imageError && (imageSrc || fallbackSrc) ? (
              <Image
                src={imageSrc || fallbackSrc}
                alt={category.name}
                width={32}
                height={32}
                className="object-cover rounded-full"
                onError={() => setImageError(true)}
              />
            ) : (
              <span className="text-lg">{category.icon}</span>
            )}
          </div>
          {/* Preview moons */}
          {previewMoons.map((_, index) => {
            const pos = getMoonPosition(index, previewMoons.length, orbitRadiusX, orbitRadiusY, -60);
            return (
              <div
                key={index}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  left: `calc(50% + ${pos.x * 0.5}px)`,
                  top: `calc(50% + ${pos.y * 0.5}px)`,
                  transform: 'translate(-50%, -50%)',
                  background: `radial-gradient(circle at 30% 30%, ${COLORS.glowCyan}, ${COLORS.primary})`,
                  boxShadow: `0 0 4px ${COLORS.glowBlue}`,
                }}
              />
            );
          })}
        </div>

        {/* Info */}
        <div className="flex-1 text-left">
          <p className="text-sm font-semibold text-white">{category.name}</p>
          <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
            {category.description}
          </p>
        </div>

        {/* Expand icon */}
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.2 }}
          className="text-slate-400"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>

      {/* Expanded content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={reducedMotion ? {} : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reducedMotion ? {} : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div
              className="px-4 pb-4 pt-2"
              style={{ borderTop: `1px solid ${COLORS.glowBlue}20` }}
            >
              {/* Radial layout of all moons */}
              <div className="relative w-full h-40 mb-3">
                {/* Orbit ring */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    width: 140,
                    height: 100,
                    border: `1px solid ${COLORS.glowBlue}20`,
                  }}
                />
                {/* Center planet */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${COLORS.spaceLight}, ${COLORS.spaceDark})`,
                    boxShadow: `0 0 15px ${COLORS.glowBlue}40`,
                    border: `1px solid ${COLORS.glowBlue}40`,
                  }}
                >
                  <span className="text-xl">{category.icon}</span>
                </div>
                {/* All moons */}
                {category.items.map((item, index) => {
                  const pos = getMoonPosition(index, category.items.length, 65, 45);
                  return (
                    <div
                      key={item.id}
                      className="absolute flex flex-col items-center"
                      style={{
                        left: `calc(50% + ${pos.x}px)`,
                        top: `calc(50% + ${pos.y}px)`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <div
                        className="w-2.5 h-2.5 rounded-full mb-1"
                        style={{
                          background: `radial-gradient(circle at 30% 30%, ${COLORS.glowCyan}, ${COLORS.primary})`,
                          boxShadow: `0 0 6px ${COLORS.glowBlue}`,
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Item list */}
              <div className="grid grid-cols-1 gap-2">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-2 p-2 rounded-lg"
                    style={{
                      background: `${COLORS.spaceDark}80`,
                      border: `1px solid ${COLORS.glowBlue}15`,
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                      style={{
                        background: COLORS.glowCyan,
                        boxShadow: `0 0 4px ${COLORS.glowBlue}`,
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-white truncate">{item.name}</p>
                      {item.shortInfo && (
                        <p className="text-[10px] text-slate-400 truncate">{item.shortInfo}</p>
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

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function ProductGalaxyMap() {
  const [expandedCategoryId, setExpandedCategoryId] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  const handleMobileToggle = useCallback((id: string) => {
    setExpandedCategoryId((prev) => (prev === id ? null : id));
  }, []);

  // Stats
  const totalCategories = PRODUCT_MAP.length;
  const totalItems = useMemo(
    () => PRODUCT_MAP.reduce((sum, c) => sum + c.items.length, 0),
    []
  );

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: MIN_HEIGHT,
        maxHeight: MAX_HEIGHT,
        background: `radial-gradient(ellipse at center top, ${COLORS.spaceMid} 0%, ${COLORS.spaceDark} 60%, #050810 100%)`,
      }}
      aria-labelledby="galaxy-heading"
    >
      {/* Starfield background (CSS-only) */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20% 30%, white, transparent),
            radial-gradient(1px 1px at 40% 70%, white, transparent),
            radial-gradient(1px 1px at 60% 40%, white, transparent),
            radial-gradient(1px 1px at 80% 80%, white, transparent),
            radial-gradient(1.5px 1.5px at 10% 60%, rgba(255,255,255,0.8), transparent),
            radial-gradient(1.5px 1.5px at 90% 20%, rgba(255,255,255,0.8), transparent)
          `,
          backgroundSize: '250px 250px',
        }}
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(5,8,16,0.4) 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* ───────────────────────────────────────────────────────────────────
            HEADER
        ─────────────────────────────────────────────────────────────────── */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.h2
            id="galaxy-heading"
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ textShadow: `0 0 30px ${COLORS.glowBlue}40` }}
          >
            Crown Product Galaxy
          </motion.h2>
          <motion.p
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto"
          >
            {totalCategories} systems, {totalItems} specialized solutions for water, drainage, power and infrastructure.
          </motion.p>

          {/* Glowing stat pills */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex justify-center gap-4 mt-6"
          >
            <div
              className="px-4 py-2 rounded-full text-sm"
              style={{
                background: `${COLORS.spaceDark}80`,
                border: `1px solid ${COLORS.glowBlue}40`,
                boxShadow: `0 0 15px ${COLORS.glowBlue}20`,
              }}
            >
              <span className="font-bold text-white">{totalCategories}</span>
              <span className="text-slate-400 ml-1">Systems</span>
            </div>
            <div
              className="px-4 py-2 rounded-full text-sm"
              style={{
                background: `${COLORS.spaceDark}80`,
                border: `1px solid ${COLORS.glowCyan}40`,
                boxShadow: `0 0 15px ${COLORS.glowCyan}20`,
              }}
            >
              <span className="font-bold text-white">{totalItems}</span>
              <span className="text-slate-400 ml-1">Products</span>
            </div>
          </motion.div>
        </div>

        {/* ───────────────────────────────────────────────────────────────────
            DESKTOP LAYOUT - 2x3 Orbit Grid (lg+)
        ─────────────────────────────────────────────────────────────────── */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-6 xl:gap-8">
            {PRODUCT_MAP.map((category, index) => (
              <motion.div
                key={category.id}
                initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <OrbitSystem category={category} reducedMotion={reducedMotion} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────────────
            MOBILE/TABLET LAYOUT - Vertical Accordion (< lg)
        ─────────────────────────────────────────────────────────────────── */}
        <div className="lg:hidden">
          <div className="flex flex-col gap-3">
            {PRODUCT_MAP.map((category) => (
              <MobileOrbitCard
                key={category.id}
                category={category}
                isExpanded={expandedCategoryId === category.id}
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
