'use client';

// ═══════════════════════════════════════════════════════════════════════════════
// CATEGORY CARD CAROUSEL
// Renders a Framer Motion fade carousel cycling through sub-category cover images
// on the main /products hub page. Falls back to just showing the category image
// if only one image is available (no arrows rendered).
// ═══════════════════════════════════════════════════════════════════════════════

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

// ─────────────────────────────────────────────────────────────────────────────
// 3-D PIPE ARROW — custom SVG that looks like an extruded UPVC pipe chevron
// ─────────────────────────────────────────────────────────────────────────────

interface PipeArrowProps {
  direction: 'left' | 'right';
  onClick: (e: React.MouseEvent) => void;
}

function PipeArrow({ direction, onClick }: PipeArrowProps) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick(e);
      }}
      aria-label={direction === 'left' ? 'Previous image' : 'Next image'}
      className="absolute top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full transition-all shadow-lg"
      style={{ [direction === 'left' ? 'left' : 'right']: '0.5rem' }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="drop-shadow-md">
        <defs>
          {/* Unique gradient id per direction to avoid SVG id collisions across cards */}
          <linearGradient
            id={`pipe3d-${direction}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%"   stopColor="#b34700" />   {/* Dark shadow edge */}
            <stop offset="35%"  stopColor="#ff8533" />   {/* Bright highlight */}
            <stop offset="65%"  stopColor="#e65c00" />   {/* Mid orange */}
            <stop offset="100%" stopColor="#803300" />   {/* Dark shadow edge */}
          </linearGradient>
        </defs>
        <path
          d={direction === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'}
          stroke={`url(#pipe3d-${direction})`}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CAROUSEL
// ─────────────────────────────────────────────────────────────────────────────

interface CategoryCardCarouselProps {
  /** Ordered list of image URLs derived from sub-category cover images */
  images: string[];
  /** Alt text (category name) */
  alt: string;
  /** Fallback icon shown when images array is empty */
  icon?: string;
}

export function CategoryCardCarousel({ images, alt, icon }: CategoryCardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleNext = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const showArrows = images.length > 1;

  if (images.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-50 text-6xl">
        {icon}
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {/* Slides */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`${alt} — ${currentIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay for depth on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Pipe-styled navigation arrows */}
      {showArrows && (
        <>
          <PipeArrow direction="left"  onClick={handlePrev} />
          <PipeArrow direction="right" onClick={handleNext} />
        </>
      )}

      {/* Dot indicators */}
      {showArrows && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to image ${i + 1}`}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentIndex(i); }}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
