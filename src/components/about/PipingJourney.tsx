'use client';

import { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from 'framer-motion';
import { journeyEvents, type JourneyEvent } from './about.types';
import Icon, { type IconName } from '@/components/ui/Icon';
import { cn } from '@/lib/utils';
import { PvcPipeProgress } from './PvcPipeProgress';

// ═══════════════════════════════════════════════════════════════════════════════
// PIPING JOURNEY - Scroll-Pinned Story Strip
// 
// DOM STRUCTURE:
// ┌───────────────────────────────────────────────────────────────────────────┐
// │ SCROLL CONTAINER (position: relative) ← useScroll target                 │
// │ height = stickyViewportHeight + totalScrollDistance                      │
// │                                                                          │
// │ ┌────────────────────────────────────────────────────────────────────┐   │
// │ │ STICKY VIEWPORT (position: sticky, top: HEADER_OFFSET)            │   │
// │ │ height = 100vh - HEADER_OFFSET                                    │   │
// │ │                                                                   │   │
// │ │ ┌────────────────────────────────────────────────────────────┐    │   │
// │ │ │ CONTENT: Title → Pipe → Story Card → Scroll Hint           │    │   │
// │ │ └────────────────────────────────────────────────────────────┘    │   │
// │ └────────────────────────────────────────────────────────────────────┘   │
// │                                                                          │
// │ ← Empty scroll space (user scrolls through this to change stories)      │
// └───────────────────────────────────────────────────────────────────────────┘
//
// SCROLL MATH:
// - totalScrollDistance = (storyCount - 1) × SCROLL_PER_STORY
// - containerHeight = stickyHeight + totalScrollDistance
// - scrollYProgress goes 0→1 as user scrolls through totalScrollDistance
// - activeStory = floor(progress × storyCount)
//
// TUNING CONSTANTS:
// - HEADER_OFFSET: Height of navbar (px). Measure: document.querySelector('header')?.offsetHeight
// - SCROLL_PER_STORY: How much scroll (vh) to transition between stories. Lower = faster.
// ═══════════════════════════════════════════════════════════════════════════════

// CONFIGURATION
const HEADER_OFFSET = 0;       // px - No offset since navbar is transparent (content sits behind navbar)
const SCROLL_PER_STORY = 70;   // vh - Scroll distance to advance one story (60-80 typical)

// ─────────────────────────────────────────────────────────────────────────────
// STORY DATA
// ─────────────────────────────────────────────────────────────────────────────

interface JourneyStory {
  id: string;
  title: string;
  icon: IconName;
  yearRange: string;
  eventIndices: number[];
  tagline: string;
}

const journeyStories: JourneyStory[] = [
  {
    id: 'foundation',
    title: 'Foundation & Setup',
    icon: 'building',
    yearRange: '1995–2004',
    eventIndices: [0, 1, 2],
    tagline: 'Established in Sharjah with a vision to serve GCC infrastructure',
  },
  {
    id: 'expansion',
    title: 'Expansion & Innovation',
    icon: 'factory',
    yearRange: '2005–2012',
    eventIndices: [3, 4, 5, 6],
    tagline: 'ISO certified, new product lines, and regional distribution network',
  },
  {
    id: 'excellence',
    title: 'Excellence & Technology',
    icon: 'cog',
    yearRange: '2015–2020',
    eventIndices: [7, 8, 9],
    tagline: 'European extrusion technology and automated quality systems',
  },
  {
    id: 'leadership',
    title: 'GCC Leadership',
    icon: 'globe',
    yearRange: '2022–2025',
    eventIndices: [10, 11],
    tagline: 'Regional certifications and 5,000+ products serving 10,000+ customers',
  },
];

function getStoryEvents(story: JourneyStory): JourneyEvent[] {
  return story.eventIndices.map((i) => journeyEvents[i]).filter(Boolean);
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default function PipingJourney() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  // SSR-safe: guards window access
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="bg-white">
      {/* Desktop: Pinned story strip with header inside sticky area */}
      {!isMobile && !prefersReducedMotion && <DesktopPinnedStrip />}

      {/* Mobile: Story carousel (no pinning) */}
      {isMobile && (
        <>
          {/* Section Header - Mobile only (outside scroll lock) */}
          <div className="py-8 md:py-10">
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 2xl:px-[10vw] text-center">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                30 Years of Excellence
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                From a single vision in 1995 to GCC&apos;s trusted plastic piping manufacturer
              </p>
            </div>
          </div>
          <MobileStoryCarousel prefersReducedMotion={prefersReducedMotion} />
        </>
      )}

      {/* Desktop with reduced motion: Accordion fallback */}
      {!isMobile && prefersReducedMotion && (
        <>
          {/* Section Header - Reduced motion fallback */}
          <div className="py-8 md:py-10">
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 2xl:px-[10vw] text-center">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                30 Years of Excellence
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                From a single vision in 1995 to GCC&apos;s trusted plastic piping manufacturer
              </p>
            </div>
          </div>
          <ReducedMotionFallback />
        </>
      )}
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// DESKTOP PINNED STRIP
// ═══════════════════════════════════════════════════════════════════════════════

function DesktopPinnedStrip() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ─────────────────────────────────────────────────────────────────────────
  // SCROLL TRACKING
  // Target: the outer SCROLL CONTAINER (tall element)
  // Offset: 'start start' = progress starts when container top reaches viewport top
  //         'end end' = progress ends when container bottom reaches viewport bottom
  // ─────────────────────────────────────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ['start start', 'end end'],
  });

  // Map scroll progress to pipe fill (0 to 1 for PvcPipeProgress)
  const pipeFillProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Update active story index based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (progress) => {
      // Map [0,1] progress to story index [0, storyCount-1]
      const index = Math.min(
        Math.floor(progress * journeyStories.length),
        journeyStories.length - 1
      );
      setActiveIndex(index);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  const activeStory = journeyStories[activeIndex];
  const activeEvents = useMemo(() => getStoryEvents(activeStory), [activeStory]);

  // ─────────────────────────────────────────────────────────────────────────
  // HEIGHT CALCULATION
  // 
  // stickyHeight = 100vh - HEADER_OFFSET (the visible pinned area)
  // scrollDistance = (storyCount - 1) × SCROLL_PER_STORY (extra scroll for transitions)
  // containerHeight = stickyHeight + scrollDistance
  //
  // For 4 stories with SCROLL_PER_STORY=60vh:
  //   stickyHeight = ~88vh (on 1000px viewport with 120px header)
  //   scrollDistance = 3 × 60vh = 180vh
  //   containerHeight = ~268vh
  //
  // This ensures:
  // - The sticky viewport fills exactly one screen
  // - The scroll distance provides room for story transitions
  // - No extra blank space above or below
  // ─────────────────────────────────────────────────────────────────────────
  const scrollDistance = (journeyStories.length - 1) * SCROLL_PER_STORY;
  const stickyHeightVh = 100 - (HEADER_OFFSET / 10); // Approximate vh conversion
  const containerHeight = stickyHeightVh + scrollDistance;

  return (
    // ─────────────────────────────────────────────────────────────────────────
    // SCROLL CONTAINER: The tall element that creates scroll distance
    // This is the useScroll target
    // ─────────────────────────────────────────────────────────────────────────
    <div
      ref={scrollContainerRef}
      className="relative"
      style={{ height: `${containerHeight}vh` }}
    >
      {/* ───────────────────────────────────────────────────────────────────────
          STICKY VIEWPORT: Pins below header while user scrolls
          - position: sticky keeps it fixed at top: HEADER_OFFSET
          - height: calc(100vh - HEADER_OFFSET) fills exactly one viewport
          - Now includes section header that stays visible during scroll lock
          ─────────────────────────────────────────────────────────────────────── */}
      <div
        className="sticky overflow-hidden bg-white"
        style={{
          top: `${HEADER_OFFSET}px`,
          height: `calc(100vh - ${HEADER_OFFSET}px)`,
        }}
      >
        {/* Background gradient */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-40 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

        {/* ─────────────────────────────────────────────────────────────────────
            CONTENT: Section header + story content within sticky viewport
            ───────────────────────────────────────────────────────────────────── */}
        <div className="h-full flex flex-col mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 2xl:px-[10vw] relative z-10">
          {/* Section Header - Stays visible during scroll lock */}
          <div className="pt-8 pb-4 text-center flex-shrink-0">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
              Our Journey
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              30 Years of Excellence
            </h2>
            <p className="text-sm lg:text-base text-gray-600 max-w-2xl mx-auto">
              From a single vision in 1995 to GCC&apos;s trusted plastic piping manufacturer
            </p>
          </div>

          {/* Story Content - Vertically centered in remaining space */}
          <div className="flex-1 flex flex-col justify-center pb-8">
            {/* Story Title */}
            <div className="text-center mb-3">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={activeIndex}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg lg:text-xl font-bold text-gray-900"
                >
                  {activeStory.title}
                </motion.h3>
              </AnimatePresence>
              <p className="text-primary font-medium text-sm">{activeStory.yearRange}</p>
            </div>

            {/* Horizontal 3D PVC Pipe with Story Nodes */}
            <div className="relative py-6 mb-3 lg:mb-4">
              {/* ─────────────────────────────────────────────────────────────────
                  3D PVC PIPE PROGRESS BAR
                  - Dark grey cylindrical pipe with Crown blue fill
                  - Progress (0-1) mapped from scrollYProgress
                  - Sits below the story nodes
                  ───────────────────────────────────────────────────────────────── */}
              <div className="absolute inset-x-4 lg:inset-x-12 top-1/2 -translate-y-1/2">
                <PvcPipeProgress progress={pipeFillProgress} />
              </div>

              {/* Story Nodes - positioned above the pipe */}
              <div className="relative flex justify-between items-center px-2 lg:px-8 z-20">
                {journeyStories.map((story, index) => (
                  <StoryNode
                    key={story.id}
                    story={story}
                    isPast={index <= activeIndex}
                    isActive={index === activeIndex}
                  />
                ))}
              </div>
            </div>

            {/* Active Story Card */}
            <div className="flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full max-w-2xl"
                >
                  <div className="p-3 lg:p-4 rounded-2xl bg-white border-2 border-primary shadow-lg">
                    {/* Header */}
                    <div className="flex items-center gap-2.5 lg:gap-3 mb-2">
                      <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name={activeStory.icon} size={18} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm lg:text-base font-bold text-gray-900">{activeStory.title}</h4>
                        <p className="text-primary text-xs lg:text-sm font-medium">{activeStory.yearRange}</p>
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-gray-600 text-xs lg:text-sm mb-2">{activeStory.tagline}</p>

                    {/* Milestones as inline chips */}
                    <div className="flex flex-wrap gap-1.5 lg:gap-2">
                      {activeEvents.map((event) => (
                        <div
                          key={event.year}
                          className="inline-flex items-center gap-1.5 lg:gap-2 px-2 lg:px-2.5 py-1 rounded-lg bg-gray-50"
                        >
                          <span className="px-1.5 lg:px-2 py-0.5 bg-primary text-white text-[10px] lg:text-xs font-bold rounded">
                            {event.year}
                          </span>
                          <span className="text-xs lg:text-sm text-gray-700">{event.title}</span>
                          {event.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Scroll Hint */}
            <motion.div
              className="text-center mt-2 lg:mt-3 text-xs text-gray-400"
              animate={{ opacity: activeIndex === journeyStories.length - 1 ? 0 : 1 }}
            >
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↓ Scroll to explore
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MOBILE CAROUSEL - No sticky, just swipeable cards
// No tall containers or vh-based heights to avoid blank space
// ═══════════════════════════════════════════════════════════════════════════════

interface MobileStoryCarouselProps {
  prefersReducedMotion: boolean | null;
}

function MobileStoryCarousel({ prefersReducedMotion }: MobileStoryCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fillPercentage, setFillPercentage] = useState(0);

  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth - container.clientWidth;
    const progress = scrollWidth > 0 ? scrollLeft / scrollWidth : 0;

    setFillPercentage(progress * 100);

    const cardWidth = container.clientWidth * 0.85;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(0, index), journeyStories.length - 1));
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cardWidth = container.clientWidth * 0.85 + 16;
    container.scrollTo({
      left: index * cardWidth,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <div className="pb-10">
      {/* 3D PVC Pipe Rail */}
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 2xl:px-[10vw] mb-4">
        <div className="relative py-6">
          {/* 3D PVC Pipe for mobile - uses static progress calculation */}
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2">
            <PvcPipeProgress progress={fillPercentage / 100} />
          </div>

          <div className="relative flex justify-between items-center z-20">
            {journeyStories.map((story, index) => (
              <button
                key={story.id}
                onClick={() => scrollToIndex(index)}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
                aria-label={`Go to ${story.title}`}
              >
                <MobileStoryNode
                  story={story}
                  isPast={index <= activeIndex}
                  isActive={index === activeIndex}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Story Carousel */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div className="flex gap-4 px-4" style={{ width: 'max-content' }}>
          {journeyStories.map((story, index) => {
            const events = getStoryEvents(story);
            return (
              <div
                key={story.id}
                className="snap-center flex-shrink-0"
                style={{ width: '85vw', maxWidth: '380px' }}
              >
                <MobileStoryCard
                  story={story}
                  events={events}
                  isActive={index === activeIndex}
                />
              </div>
            );
          })}
          <div className="flex-shrink-0 w-4" />
        </div>
      </div>

      <div className="text-center mt-3 text-sm text-gray-400">
        ← Swipe to explore →
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════════

interface StoryNodeProps {
  story: JourneyStory;
  isPast: boolean;
  isActive: boolean;
}

function StoryNode({ story, isPast, isActive }: StoryNodeProps) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          'relative rounded-full flex items-center justify-center transition-all duration-300',
          'w-10 h-10',
          isActive
            ? 'bg-primary scale-110 shadow-lg shadow-primary/30 ring-4 ring-primary/20'
            : isPast
            ? 'bg-primary shadow-sm'
            : 'bg-gray-200'
        )}
      >
        <Icon
          name={story.icon}
          size={16}
          className={cn(
            'transition-colors duration-200',
            isPast || isActive ? 'text-white' : 'text-gray-500'
          )}
        />

        {isActive && (
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
        )}
      </div>

      <span
        className={cn(
          'mt-1 text-xs font-medium transition-colors',
          isActive ? 'text-primary' : isPast ? 'text-gray-600' : 'text-gray-400'
        )}
      >
        {story.yearRange.split('–')[0]}
      </span>
    </div>
  );
}

interface MobileStoryNodeProps {
  story: JourneyStory;
  isPast: boolean;
  isActive: boolean;
}

function MobileStoryNode({ story, isPast, isActive }: MobileStoryNodeProps) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          'rounded-full flex items-center justify-center transition-all duration-300',
          'w-8 h-8',
          isActive
            ? 'bg-primary scale-110 shadow-md shadow-primary/30 ring-2 ring-primary/20'
            : isPast
            ? 'bg-primary'
            : 'bg-gray-200'
        )}
      >
        <Icon
          name={story.icon}
          size={14}
          className={isPast || isActive ? 'text-white' : 'text-gray-500'}
        />
      </div>
      <span
        className={cn(
          'mt-1 text-[10px] font-medium',
          isActive ? 'text-primary' : 'text-gray-400'
        )}
      >
        {story.yearRange.split('–')[0]}
      </span>
    </div>
  );
}

interface MobileStoryCardProps {
  story: JourneyStory;
  events: JourneyEvent[];
  isActive: boolean;
}

function MobileStoryCard({ story, events, isActive }: MobileStoryCardProps) {
  return (
    <div
      className={cn(
        'p-4 rounded-2xl transition-all duration-300',
        'border-2',
        isActive ? 'bg-white border-primary shadow-lg' : 'bg-gray-50 border-gray-100'
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-2">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon name={story.icon} size={16} className="text-primary" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-900">{story.title}</h3>
          <p className="text-xs text-primary font-medium">{story.yearRange}</p>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-gray-600 text-xs mb-2.5">{story.tagline}</p>

      {/* Milestones */}
      <div className="space-y-1.5">
        {events.map((event) => (
          <div
            key={event.year}
            className="flex items-center gap-2 p-1.5 rounded-lg bg-white border border-gray-100"
          >
            <span className="px-1.5 py-0.5 bg-primary text-white text-[10px] font-bold rounded flex-shrink-0">
              {event.year}
            </span>
            <p className="text-xs text-gray-700 line-clamp-1">{event.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// REDUCED MOTION FALLBACK
// ═══════════════════════════════════════════════════════════════════════════════

function ReducedMotionFallback() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 2xl:px-[10vw] pb-10">
      {/* 3D PVC Pipe - fully filled for reduced motion */}
      <div className="relative py-6 mb-4">
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2">
          <PvcPipeProgress progress={1} />
        </div>
        <div className="relative flex justify-between items-center px-4 z-20">
          {journeyStories.map((story) => (
            <div key={story.id} className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow">
                <Icon name={story.icon} size={14} className="text-white" />
              </div>
              <span className="mt-1 text-[10px] text-gray-500 font-medium">
                {story.yearRange.split('–')[0]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Accordion */}
      <div className="space-y-2 max-w-2xl mx-auto">
        {journeyStories.map((story, index) => {
          const events = getStoryEvents(story);
          const isExpanded = expandedIndex === index;

          return (
            <div key={story.id} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className="w-full p-3 flex items-center gap-3 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name={story.icon} size={18} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-gray-900">{story.title}</h3>
                  <p className="text-xs text-gray-500">{story.yearRange}</p>
                </div>
                <Icon
                  name={isExpanded ? 'minus' : 'plus'}
                  size={16}
                  className="text-gray-400 flex-shrink-0"
                />
              </button>
              {isExpanded && (
                <div className="px-3 pb-3 border-t border-gray-100">
                  <p className="text-gray-600 text-sm mt-2 mb-2">{story.tagline}</p>
                  <div className="space-y-1.5">
                    {events.map((event) => (
                      <div key={event.year} className="flex gap-2 p-2 rounded-lg bg-gray-50">
                        <span className="px-2 py-0.5 bg-primary text-white text-xs font-bold rounded">
                          {event.year}
                        </span>
                        <span className="text-sm text-gray-700">{event.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
