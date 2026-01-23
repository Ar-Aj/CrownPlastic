'use client';

import { LucideIcon } from 'lucide-react';
import { useEffect, useRef, useCallback } from 'react';
import { 
  Calendar, 
  Package, 
  Shield, 
  Globe, 
  Users, 
  Award,
  Droplet,
  MapPin
} from 'lucide-react';

// ═══════════════════════════════════════════════════════════════════════════════
// ABOUT STATS STRIP COMPONENT
// 
// Horizontal auto-scrolling stats ticker specific to About page
// MIRRORS the Home page stats strip animation logic:
// - Uses requestAnimationFrame for smooth, glitch-free animation
// - Pauses on hover
// - Seamless infinite loop with duplicated stat cards
// - Dark gradient background with edge fades
// - Pill-styled cards with icon + value + label
// 
// DATA: About-specific stats (company milestones, certifications, markets)
// FUTURE UPDATES: Modify the `aboutStatsData` array below
// ═══════════════════════════════════════════════════════════════════════════════

export interface AboutStatItem {
  icon: LucideIcon;
  value: string;
  label: string;
}

interface AboutStatsStripProps {
  /** Duration in ms for one complete loop (default: 20000ms = 20s) */
  loopDurationMs?: number;
}

// ═══════════════════════════════════════════════════════════════════════════════
// ABOUT-SPECIFIC STATS DATA
// Update this array to modify the stats displayed in the About page strip
// ═══════════════════════════════════════════════════════════════════════════════
const aboutStatsData: AboutStatItem[] = [
  { icon: Calendar, value: '1995', label: 'Established in UAE' },
  { icon: Award, value: '30+ Years', label: 'GCC Excellence' },
  { icon: Package, value: '5,000+ SKUs', label: 'UPVC / PPRC / HDPE' },
  { icon: Shield, value: 'ISO Certified', label: '9001 • 14001 • 45001' },
  { icon: Droplet, value: '100% Virgin', label: 'uPVC Raw Material' },
  { icon: Globe, value: 'GCC + Export', label: 'Regional & International' },
  { icon: Users, value: '10,000+', label: 'Projects Completed' },
  { icon: MapPin, value: '6 Countries', label: 'GCC Presence' },
];

export default function AboutStatsStrip({
  loopDurationMs = 20000,
}: AboutStatsStripProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  const scrollPositionRef = useRef(0);

  // Animation logic - MIRRORS Home stats strip implementation
  // Uses requestAnimationFrame for 60fps smooth scrolling
  const animate = useCallback(() => {
    if (!scrollerRef.current || isPausedRef.current) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    const scroller = scrollerRef.current;
    const totalWidth = scroller.scrollWidth / 2; // Half because we have 2 copies
    
    // Calculate speed: pixels per frame (assuming 60fps)
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

  // Start animation on mount, cleanup on unmount
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  // Pause animation on hover - MIRRORS Home behavior
  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  return (
    <section className="relative py-6 md:py-8 overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      {/* Gradient edge fades - MIRRORS Home styling */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

      {/* Scrolling container - MIRRORS Home layout */}
      <div
        ref={scrollerRef}
        className="flex gap-6 md:gap-8 will-change-transform"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* First set of stats */}
        {aboutStatsData.map((stat, index) => (
          <AboutStatCard key={`stat-1-${index}`} stat={stat} />
        ))}

        {/* Second set of stats (for seamless loop) */}
        {aboutStatsData.map((stat, index) => (
          <AboutStatCard key={`stat-2-${index}`} stat={stat} />
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ABOUT STAT CARD COMPONENT
// Pill-style card matching Home stats strip visual design
// ═══════════════════════════════════════════════════════════════════════════════
function AboutStatCard({ stat }: { stat: AboutStatItem }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 md:gap-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-5 py-3 md:px-6 md:py-3.5 min-w-[200px] md:min-w-[240px]">
      {/* Icon circle - MIRRORS Home card styling */}
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
        <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
      </div>

      {/* Value + Label - MIRRORS Home card layout */}
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
