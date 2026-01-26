'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// ═══════════════════════════════════════════════════════════════════════════════
// ABOUT HERO CINEMATIC - Side-Swapping Scroll Hero
// ═══════════════════════════════════════════════════════════════════════════════
//
// LAYOUT SUMMARY:
// ---------------
// Desktop (lg+):
//   - SCROLL CONTAINER (outer): Height = SCROLL_HEIGHT_MULTIPLIER × 100vh.
//     This is the useScroll target. The extra height creates scroll distance.
//
//   - STICKY CONTAINER (inner): Pinned at top: 0, height: 100vh.
//     Contains the hero background and content. The background extends to the
//     full viewport so there's no white gap when the navbar hides.
//
//   - SIDE SWAP ANIMATION:
//     • Progress 0.0 – 0.2: Vision state, image LEFT (5%), text RIGHT (55%)
//     • Progress 0.2 – 0.8: Gradual cinematic swap (easeInOut feel)
//     • Progress 0.8 – 1.0: Mission state, image RIGHT (55%), text LEFT (5%)
//     The swap uses ±50% translateX clamped to create smooth gliding motion.
//
//   - CONTENT CROSSFADE:
//     Vision fades out 0.35–0.5, Mission fades in 0.5–0.65.
//
// Tablet (md to lg):
//   - Uses mobile layout (stacked, no sticky).
//
// Mobile (< md):
//   - Stacked layout: Image → H1/tagline → Vision/Mission pill tabs.
//   - No sticky behavior, no side-swap animation.
//
// TUNING GUIDE:
// -------------
// - SCROLL_HEIGHT_MULTIPLIER: Increase for slower animation (more scroll needed).
//   e.g., 1.8 = 180vh total → 80vh of scroll distance.
// - Transform input ranges [0.15, 0.85] control animation spread.
//   Narrower range = faster swap. Wider range = slower, more cinematic.
// - SWAP_THRESHOLD: When Vision→Mission label/state switches (0.5 = midpoint).
//
// ═══════════════════════════════════════════════════════════════════════════════

// Vision & Mission content configuration
const aboutStatements = {
  vision: {
    id: 'vision',
    label: 'Our Vision',
    title: 'Our Vision',
    text: 'To be the most trusted and innovative plastic piping solutions provider across the Gulf region, setting industry benchmarks for quality, sustainability, and customer excellence.',
  },
  mission: {
    id: 'mission',
    label: 'Our Mission',
    title: 'Our Mission',
    text: 'Delivering premium European-engineered piping systems tailored for Gulf conditions, backed by three decades of manufacturing expertise and unwavering commitment to ISO-certified quality.',
  },
} as const;

type StatementKey = keyof typeof aboutStatements;

// ═══════════════════════════════════════════════════════════════════════════════
// CONFIGURATION CONSTANTS (adjust these to tune the animation)
// ═══════════════════════════════════════════════════════════════════════════════

// Total scroll container height as multiplier of viewport height.
// Higher = more scroll distance = slower, more cinematic animation.
// 1.8 = 180vh total (100vh visible + 80vh scroll room)
const SCROLL_HEIGHT_MULTIPLIER = 1.8;

// Progress threshold (0-1) at which Vision switches to Mission state.
const SWAP_THRESHOLD = 0.5;

// Hero image path
const HERO_IMAGE_PATH = '/images/about/CrownOutside.jpg';

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default function AboutHeroCinematic() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(true); // Default to mobile for SSR

  // Detect breakpoint: mobile/tablet (< 1024px) vs desktop (>= 1024px)
  // SSR-safe: guards window access
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Render mobile or desktop version
  if (isMobile) {
    return <MobileHero prefersReducedMotion={prefersReducedMotion} />;
  }

  return <DesktopHero prefersReducedMotion={prefersReducedMotion} />;
}

// ═══════════════════════════════════════════════════════════════════════════════
// DESKTOP HERO - Pinned Scroll with Side Swap
// ═══════════════════════════════════════════════════════════════════════════════

interface DesktopHeroProps {
  prefersReducedMotion: boolean | null;
}

function DesktopHero({ prefersReducedMotion }: DesktopHeroProps) {
  // ─────────────────────────────────────────────────────────────────────────────
  // SCROLL TRACKING
  // scrollContainerRef = OUTER container with extra height (scroll target)
  // scrollYProgress: 0 = top of section at viewport top, 1 = bottom reached
  // ─────────────────────────────────────────────────────────────────────────────
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ['start start', 'end end'],
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // ACTIVE STATEMENT STATE
  // Derived from scroll progress. Updates when crossing SWAP_THRESHOLD.
  // ─────────────────────────────────────────────────────────────────────────────
  const [activeStatement, setActiveStatement] = useState<StatementKey>('vision');

  useEffect(() => {
    if (prefersReducedMotion) return;

    const unsubscribe = scrollYProgress.on('change', (progress) => {
      const newState = progress >= SWAP_THRESHOLD ? 'mission' : 'vision';
      setActiveStatement((prev) => (prev !== newState ? newState : prev));
    });

    return () => unsubscribe();
  }, [scrollYProgress, prefersReducedMotion]);

  // ─────────────────────────────────────────────────────────────────────────────
  // ANIMATION TRANSFORMS - Cinematic Side Swap
  // ─────────────────────────────────────────────────────────────────────────────
  // The swap happens gradually between progress 0.15 and 0.85 (70% of scroll).
  // This creates a slow, cinematic glide rather than a fast snap.
  //
  // Image: Starts at left (5%), glides to right (55%)
  // Text: Starts at right (50%), glides to left (0%)
  //
  // The 5%/55% positions (instead of 0%/50%) add visual padding and prevent
  // elements from touching the edges during the swap.
  // ─────────────────────────────────────────────────────────────────────────────

  // Image position: left side → right side (gradual over 0.15–0.85)
  const imageLeft = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    prefersReducedMotion 
      ? ['5%', '5%', '5%', '5%'] 
      : ['5%', '5%', '50%', '50%']
  );

  // Text position: right side → left side (gradual over 0.15–0.85)
  const textLeft = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    prefersReducedMotion 
      ? ['50%', '50%', '50%', '50%'] 
      : ['50%', '50%', '0%', '0%']
  );

  // Content opacity crossfade (centered around SWAP_THRESHOLD)
  // Vision fades out: 1 → 0 between 0.35 and 0.5
  // Mission fades in: 0 → 1 between 0.5 and 0.65
  const visionOpacity = useTransform(scrollYProgress, [0, 0.35, 0.5], [1, 1, 0]);
  const missionOpacity = useTransform(scrollYProgress, [0.5, 0.65, 1], [0, 1, 1]);

  // Subtle scale pulse on image at midpoint for depth
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    prefersReducedMotion ? [1, 1, 1, 1] : [1, 1.015, 1.015, 1]
  );

  // Progress indicator bar
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════════
          SCROLL CONTAINER (outer) - The useScroll target
          Height = SCROLL_HEIGHT_MULTIPLIER × 100vh (e.g., 180vh)
          The extra height beyond 100vh creates the scroll distance that
          drives the animation. Increase multiplier for slower animation.
      ═══════════════════════════════════════════════════════════════════════ */}
      <div
        ref={scrollContainerRef}
        className="relative"
        style={{ height: `${SCROLL_HEIGHT_MULTIPLIER * 100}vh` }}
      >
        {/* ═════════════════════════════════════════════════════════════════════
            STICKY CONTAINER (inner) - The visible hero viewport
            Pinned at top: 0 so the gradient background extends behind the
            navbar area. When navbar hides, there's no white gap.
            Height = 100vh to fill the viewport.
        ═════════════════════════════════════════════════════════════════════ */}
        <div
          className="sticky top-0 h-screen overflow-hidden"
        >
          {/* Background with diagonal band - extends behind navbar */}
          <HeroBackground />

          {/* Main content area - relative container for absolute children */}
          {/* pt-28 lg:pt-32 adds space below navbar so content isn't hidden */}
          <div className="relative z-10 h-full pt-28 lg:pt-32">
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none h-full">
              {/* Positioning container for columns */}
              <div className="relative h-full">
                
                {/* ─────────────────────────────────────────────────────────────
                    IMAGE COLUMN (Absolutely positioned)
                    Starts on left (~5%), glides to right (~50%) during scroll.
                    Width: 45% of container to leave some breathing room.
                ───────────────────────────────────────────────────────────── */}
                <motion.div
                  className="absolute top-0 bottom-0 w-[45%] flex items-center justify-center p-4 lg:p-6"
                  style={{ left: imageLeft }}
                >
                  <motion.div
                    className="relative w-full max-w-xs lg:max-w-sm xl:max-w-md aspect-[3/4]"
                    style={{ scale: imageScale }}
                  >
                    {/* Radial glow behind image */}
                    <div className="absolute -inset-8 bg-gradient-radial from-sky-400/30 via-blue-500/10 to-transparent rounded-full blur-2xl" />
                    
                    {/* Image card with 3:4 aspect ratio */}
                    <div className="relative h-full rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
                      <Image
                        src={HERO_IMAGE_PATH}
                        alt="Crown Plastic Pipes Factory - Modern manufacturing facility"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      {/* Subtle overlay for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-white/5" />
                    </div>
                  </motion.div>
                </motion.div>

                {/* ─────────────────────────────────────────────────────────────
                    TEXT COLUMN (Absolutely positioned)
                    Starts on right (~50%), glides to left (~0%) during scroll.
                    Width: 50% of container.
                ───────────────────────────────────────────────────────────── */}
                <motion.div
                  className="absolute top-0 bottom-0 w-1/2 flex items-center p-4 lg:p-6"
                  style={{ left: textLeft }}
                >
                  <div className="max-w-lg">
                    {/* Breadcrumb */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mb-4"
                    >
                      <span className="text-sm text-slate-400">
                        Home / <span className="text-sky-300 font-medium">About Us</span>
                      </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 leading-tight"
                    >
                      Crown Plastic Pipes
                      <span className="block text-sky-400">Factory L.L.C.</span>
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-base lg:text-lg text-slate-300 mb-6 font-medium"
                    >
                      European technology, Gulf standards.
                    </motion.p>

                    {/* Vision/Mission Content with Crossfade */}
                    <div className="relative min-h-[160px] mb-6">
                      {/* Vision Content */}
                      <motion.div
                        className="absolute inset-0"
                        style={{ 
                          opacity: prefersReducedMotion 
                            ? (activeStatement === 'vision' ? 1 : 0) 
                            : visionOpacity 
                        }}
                      >
                        <StatementContent statement={aboutStatements.vision} />
                      </motion.div>

                      {/* Mission Content */}
                      <motion.div
                        className="absolute inset-0"
                        style={{ 
                          opacity: prefersReducedMotion 
                            ? (activeStatement === 'mission' ? 1 : 0) 
                            : missionOpacity 
                        }}
                      >
                        <StatementContent statement={aboutStatements.mission} />
                      </motion.div>
                    </div>

                    {/* Active state indicator pills - positioned below content */}
                    <div className="flex gap-2 pt-4">
                      {(['vision', 'mission'] as const).map((key) => (
                        <div
                          key={key}
                          className={cn(
                            'w-2 h-2 rounded-full transition-all duration-300',
                            activeStatement === key
                              ? 'bg-sky-400 w-6'
                              : 'bg-slate-600'
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Scroll progress indicator (right side) */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2">
            <div className="relative w-1 h-20 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full bg-sky-400 rounded-full"
                style={{ height: progressHeight }}
              />
            </div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Scroll</span>
          </div>
        </div>
      </div>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MOBILE HERO - Stacked Layout with Tabs (< 1024px)
// ═══════════════════════════════════════════════════════════════════════════════

interface MobileHeroProps {
  prefersReducedMotion: boolean | null;
}

function MobileHero({ prefersReducedMotion }: MobileHeroProps) {
  const [activeTab, setActiveTab] = useState<StatementKey>('vision');

  return (
    <section className="relative bg-slate-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />

      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none py-10 md:py-12">
        {/* Breadcrumb */}
        <div className="mb-4 md:mb-6">
          <span className="text-sm text-slate-400">
            Home / <span className="text-sky-300 font-medium">About Us</span>
          </span>
        </div>

        {/* Hero Image - 4:3 on mobile for better fit */}
        <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-xl md:rounded-2xl overflow-hidden border-2 border-primary/30 shadow-xl mb-6 md:mb-8">
          <Image
            src={HERO_IMAGE_PATH}
            alt="Crown Plastic Pipes Factory"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
          Crown Plastic Pipes
          <span className="block text-sky-400">Factory L.L.C.</span>
        </h1>

        {/* Tagline */}
        <p className="text-base md:text-lg text-slate-300 mb-6 font-medium">
          European technology, Gulf standards.
        </p>

        {/* Tab Pills */}
        <div className="flex gap-2 mb-4">
          {(['vision', 'mission'] as const).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200',
                activeTab === key
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              )}
            >
              {aboutStatements[key].label}
            </button>
          ))}
        </div>

        {/* Tab Content with Fade */}
        <div className="relative min-h-[120px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? {} : { opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <StatementContent statement={aboutStatements[activeTab]} variant="mobile" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════════

// Statement Content Block (Vision or Mission)
interface StatementContentProps {
  statement: typeof aboutStatements.vision | typeof aboutStatements.mission;
  variant?: 'desktop' | 'mobile';
}

function StatementContent({ statement, variant = 'desktop' }: StatementContentProps) {
  return (
    <div>
      <span className={cn(
        'inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2',
        variant === 'desktop'
          ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
          : 'bg-sky-500/20 text-sky-300'
      )}>
        {statement.label}
      </span>
      <h2 className={cn(
        'font-bold mb-2',
        variant === 'desktop' ? 'text-xl lg:text-2xl text-white' : 'text-lg text-white'
      )}>
        {statement.title}
      </h2>
      <p className={cn(
        'leading-relaxed text-sm',
        variant === 'desktop' ? 'text-slate-300 lg:text-base' : 'text-slate-400'
      )}>
        {statement.text}
      </p>
    </div>
  );
}

// Hero Background with Diagonal Band
function HeroBackground() {
  return (
    <div className="absolute inset-0">
      {/* Base gradient - dark navy to blue */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />
      
      {/* Diagonal band - represents pipeline flow */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -inset-[50%] bg-gradient-to-r from-transparent via-sky-900/40 to-transparent rotate-12 translate-y-1/4"
          style={{ width: '200%', height: '200%' }}
        />
      </div>

      {/* Secondary diagonal accent */}
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <div 
          className="absolute -inset-[50%] bg-gradient-to-r from-transparent via-primary/20 to-transparent -rotate-6 -translate-y-1/3"
          style={{ width: '200%', height: '200%' }}
        />
      </div>

      {/* Radial spotlight behind image area (left side initially) */}
      <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-sky-500/20 via-blue-600/5 to-transparent rounded-full blur-3xl" />

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />
    </div>
  );
}
