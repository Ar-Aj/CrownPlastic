'use client';

import { LucideIcon } from 'lucide-react';
import { useEffect, useRef, useCallback } from 'react';

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMATED STATS STRIP COMPONENT
// 
// Horizontal auto-scrolling stats ticker with truly seamless infinite loop
// - Uses requestAnimationFrame for smooth, glitch-free animation
// - Pauses on hover
// - loopDurationMs directly controls scroll speed
// ═══════════════════════════════════════════════════════════════════════════════

export interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
}

interface AnimatedStatsStripProps {
  stats: StatItem[];
  /** Duration in ms for one complete loop (default: 15000ms = 15s) */
  loopDurationMs?: number;
}

export default function AnimatedStatsStrip({
  stats,
  loopDurationMs = 18000,
}: AnimatedStatsStripProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  const scrollPositionRef = useRef(0);

  const animate = useCallback(() => {
    if (!scrollerRef.current || isPausedRef.current) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    const scroller = scrollerRef.current;
    const totalWidth = scroller.scrollWidth / 2; // Half because we have 2 copies
    
    // Calculate speed: pixels per frame (assuming 60fps)
    // totalWidth pixels in loopDurationMs milliseconds
    const pixelsPerMs = totalWidth / loopDurationMs;
    const pixelsPerFrame = pixelsPerMs * (1000 / 60); // ~16.67ms per frame

    scrollPositionRef.current += pixelsPerFrame;

    // Reset position seamlessly when we've scrolled one full set
    if (scrollPositionRef.current >= totalWidth) {
      scrollPositionRef.current = 0;
    }

    scroller.style.transform = `translateX(-${scrollPositionRef.current}px)`;
    animationRef.current = requestAnimationFrame(animate);
  }, [loopDurationMs]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  return (
    <section className="relative py-6 md:py-8 overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      {/* Gradient edge fades */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div
        ref={scrollerRef}
        className="flex gap-6 md:gap-8 will-change-transform"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* First set of stats */}
        {stats.map((stat, index) => (
          <StatCard key={`stat-1-${index}`} stat={stat} />
        ))}

        {/* Second set of stats (for seamless loop) */}
        {stats.map((stat, index) => (
          <StatCard key={`stat-2-${index}`} stat={stat} />
        ))}
      </div>
    </section>
  );
}

// Stat card component
function StatCard({ stat }: { stat: StatItem }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 md:gap-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-5 py-3 md:px-6 md:py-3.5 min-w-[200px] md:min-w-[240px]">
      {/* Icon circle */}
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
        <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
      </div>

      {/* Value + Label */}
      <div className="flex flex-col">
        <span className="text-xl md:text-2xl font-bold text-white leading-none">
          {stat.value}
        </span>
        <span className="text-xs md:text-sm text-blue-200/80 whitespace-nowrap leading-tight mt-1">
          {stat.label}
        </span>
      </div>
    </div>
  );
}
