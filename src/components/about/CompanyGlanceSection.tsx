'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { glanceItems, type GlanceItem } from './about.types';
import Icon from '@/components/ui/Icon';
import { cn } from '@/lib/utils';

// ═══════════════════════════════════════════════════════════════════════════════
// COMPANY GLANCE SECTION - Data-Driven Grid
// Features: Responsive masonry-like grid, staggered animations
// Palette: Blue / White / Black only
// ═══════════════════════════════════════════════════════════════════════════════

export default function CompanyGlanceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            At a Glance
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Company Overview
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three decades of excellence in plastic piping solutions for GCC infrastructure
          </p>
        </motion.div>

        {/* Grid of Tiles */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {glanceItems.map((item, index) => (
            <GlanceTile
              key={item.id}
              item={item}
              index={index}
              isInView={isInView}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// GLANCE TILE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface GlanceTileProps {
  item: GlanceItem;
  index: number;
  isInView: boolean;
  prefersReducedMotion: boolean | null;
}

function GlanceTile({ item, index, isInView, prefersReducedMotion }: GlanceTileProps) {
  // Calculate stagger delay based on position
  const row = Math.floor(index / 4);
  const col = index % 4;
  const delay = 0.3 + (row * 0.1) + (col * 0.05);

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      whileHover={prefersReducedMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
      className={cn(
        'group relative p-6 rounded-2xl transition-all duration-300',
        'border border-gray-100 hover:border-primary/30',
        'bg-white hover:shadow-lg',
        item.highlight && 'bg-primary text-white border-primary'
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          'w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300',
          item.highlight
            ? 'bg-white/20'
            : 'bg-primary/10 group-hover:bg-primary/20'
        )}
      >
        <Icon
          name={item.icon}
          size={24}
          className={cn(
            'transition-colors duration-300',
            item.highlight ? 'text-white' : 'text-primary'
          )}
        />
      </div>

      {/* Label */}
      <span
        className={cn(
          'text-xs uppercase tracking-wider font-medium mb-2 block',
          item.highlight ? 'text-white/80' : 'text-gray-500'
        )}
      >
        {item.label}
      </span>

      {/* Value */}
      <span
        className={cn(
          'text-lg md:text-xl font-bold leading-tight block',
          item.highlight ? 'text-white' : 'text-gray-900'
        )}
      >
        {item.value}
      </span>

      {/* Subtle corner accent for highlighted items */}
      {item.highlight && (
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rotate-45 translate-x-8 -translate-y-8" />
        </div>
      )}
    </motion.div>
  );
}
