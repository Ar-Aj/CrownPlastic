'use client';

import { useState, useRef } from 'react';
import { motion, useInView, useReducedMotion, AnimatePresence } from 'framer-motion';
import { gccMarkets, type GccMarket } from './about.types';
import Icon from '@/components/ui/Icon';
import { cn } from '@/lib/utils';

// ═══════════════════════════════════════════════════════════════════════════════
// GCC NETWORK SECTION - Interactive Regional Map
// Features: CSS grid map, hover/tap to highlight, mobile-friendly
// Palette: Blue / White / Black only
// ═══════════════════════════════════════════════════════════════════════════════

export default function GccNetworkSection() {
  const [activeMarket, setActiveMarket] = useState<string>('uae');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();

  const currentMarket = gccMarkets.find((m) => m.id === activeMarket) || gccMarkets[0];

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 bg-white"
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Distribution Network
            </span>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Serving GCC &<br />
              <span className="text-primary">Sub-continent</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              From our manufacturing hub in Sharjah, UAE, we supply high-quality plastic piping
              solutions across the Gulf Cooperation Council countries and beyond. Our established
              distribution network ensures reliable delivery and local support.
            </p>

            {/* Key Sectors */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: 'water' as const, label: 'Irrigation' },
                { icon: 'building' as const, label: 'Construction' },
                { icon: 'plumbing' as const, label: 'Plumbing' },
                { icon: 'eco' as const, label: 'Landscaping' },
              ].map((sector) => (
                <div
                  key={sector.label}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name={sector.icon} size={20} className="text-primary" />
                  </div>
                  <span className="font-medium text-gray-700">{sector.label}</span>
                </div>
              ))}
            </div>

            {/* Active Market Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMarket.id}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? {} : { opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl bg-primary text-white"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-white/20 rounded-lg text-sm font-semibold">
                    {currentMarket.code}
                  </span>
                  <h3 className="text-xl font-bold">{currentMarket.name}</h3>
                </div>
                <p className="text-white/90">{currentMarket.note}</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right: Interactive Map */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <GccMap
              markets={gccMarkets}
              activeMarket={activeMarket}
              onSelectMarket={setActiveMarket}
              prefersReducedMotion={prefersReducedMotion}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// GCC MAP COMPONENT (CSS Grid-based)
// ─────────────────────────────────────────────────────────────────────────────

interface GccMapProps {
  markets: GccMarket[];
  activeMarket: string;
  onSelectMarket: (id: string) => void;
  prefersReducedMotion: boolean | null;
}

function GccMap({ markets, activeMarket, onSelectMarket, prefersReducedMotion }: GccMapProps) {
  // Grid positions for each country (row, col) - simplified representation
  const positions: Record<string, { row: number; col: number; span?: number }> = {
    kuwait: { row: 1, col: 1 },
    bahrain: { row: 2, col: 1 },
    qatar: { row: 2, col: 2 },
    uae: { row: 3, col: 2 },
    ksa: { row: 2, col: 3, span: 2 },
    oman: { row: 3, col: 3 },
    other: { row: 4, col: 1, span: 3 },
  };

  return (
    <div className="relative bg-gray-50 rounded-3xl p-6 md:p-8">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:60px_60px] opacity-50" />
      </div>

      {/* Map Title */}
      <div className="relative text-center mb-6">
        <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">
          GCC Region Coverage
        </span>
      </div>

      {/* Grid Map */}
      <div className="relative grid grid-cols-3 gap-3 md:gap-4">
        {markets.map((market, index) => {
          const pos = positions[market.id];
          return (
            <motion.button
              key={market.id}
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectMarket(market.id)}
              style={{
                gridRow: pos.row,
                gridColumn: pos.span ? `${pos.col} / span ${pos.span}` : pos.col,
              }}
              className={cn(
                'relative p-4 md:p-6 rounded-2xl transition-all duration-300',
                'border-2 text-left',
                market.id === activeMarket
                  ? 'bg-primary border-primary text-white shadow-lg scale-[1.02]'
                  : 'bg-white border-gray-200 hover:border-primary/50 hover:shadow-md',
                market.id === 'uae' && market.id !== activeMarket && 'border-primary/30'
              )}
            >
              {/* Country Code */}
              <span
                className={cn(
                  'text-xs font-bold uppercase tracking-wider',
                  market.id === activeMarket ? 'text-white/80' : 'text-gray-400'
                )}
              >
                {market.code}
              </span>

              {/* Country Name */}
              <h4
                className={cn(
                  'font-bold text-sm md:text-base mt-1',
                  market.id === activeMarket ? 'text-white' : 'text-gray-900'
                )}
              >
                {market.name}
              </h4>

              {/* Active indicator */}
              {market.id === 'uae' && market.id === activeMarket && (
                <span className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full animate-pulse" />
              )}

              {/* HQ Badge for UAE */}
              {market.id === 'uae' && (
                <span
                  className={cn(
                    'absolute -top-2 -right-2 px-2 py-0.5 text-xs font-bold rounded-full',
                    market.id === activeMarket
                      ? 'bg-white text-primary'
                      : 'bg-primary text-white'
                  )}
                >
                  HQ
                </span>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="relative mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary rounded-full" />
          <span className="text-gray-600">Manufacturing HQ</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-300 rounded-full" />
          <span className="text-gray-600">Distribution</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 border-2 border-gray-400 rounded-full" />
          <span className="text-gray-600">Export Market</span>
        </div>
      </div>
    </div>
  );
}
