'use client';

import { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from 'framer-motion';
import Icon, { type IconName } from '@/components/ui/Icon';
import { cn } from '@/lib/utils';
import { PvcPipeProgress } from './PvcPipeProgress';
import { useT } from '@/i18n';

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

// Structural data for stories — translatable text is injected at render time
const STORY_STRUCTURE = [
  { id: 'foundation', icon: 'building' as IconName, yearRange: '1995–2004', eventIndices: [0, 1, 2] },
  { id: 'expansion', icon: 'factory' as IconName, yearRange: '2005–2012', eventIndices: [3, 4, 5, 6] },
  { id: 'excellence', icon: 'cog' as IconName, yearRange: '2015–2020', eventIndices: [7, 8, 9] },
  { id: 'leadership', icon: 'globe' as IconName, yearRange: '2022–2025', eventIndices: [10, 11] },
];

// Year keys for event translation lookup
const EVENT_YEARS = ['1995', '1998', '2004', '2005', '2008', '2010', '2012', '2015', '2018', '2020', '2022', '2025'];

function getStoryEvents(story: JourneyStory, translatedEvents: Array<{ year: string; title: string; highlight?: boolean }>): Array<{ year: string; title: string; highlight?: boolean }> {
  return story.eventIndices.map((i) => translatedEvents[i]).filter(Boolean);
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default function PipingJourney() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const t = useT();

  // Build translated stories
  const journeyStories: JourneyStory[] = useMemo(() =>
    STORY_STRUCTURE.map((s) => ({
      ...s,
      title: t(`about.journey.stories.${s.id}.title` as any),
      tagline: t(`about.journey.stories.${s.id}.tagline` as any),
    })),
    [t]);

  // Build translated events (year, title, highlight)
  const translatedEvents = useMemo(() =>
    EVENT_YEARS.map((year) => ({
      year,
      title: t(`about.journey.events.${year}.title` as any),
      highlight: ['1995', '2015', '2025'].includes(year),
    })),
    [t]);

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
      {!isMobile && !prefersReducedMotion && <DesktopPinnedStrip t={t} journeyStories={journeyStories} translatedEvents={translatedEvents} />}

      {/* Mobile: Story carousel (no pinning) */}
      {isMobile && (
        <>
          {/* Section Header - Mobile only (outside scroll lock) */}
          <div className="py-8 md:py-10">
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none text-center">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                {t('about.journey.badge')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {t('about.journey.title')}
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                {t('about.journey.subtitle')}
              </p>
            </div>
          </div>
          <MobileStoryCarousel prefersReducedMotion={prefersReducedMotion} t={t} journeyStories={journeyStories} translatedEvents={translatedEvents} />
        </>
      )}

      {/* Desktop with reduced motion: Accordion fallback */}
      {!isMobile && prefersReducedMotion && (
        <>
          {/* Section Header - Reduced motion fallback */}
          <div className="py-8 md:py-10">
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none text-center">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                {t('about.journey.badge')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {t('about.journey.title')}
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                {t('about.journey.subtitle')}
              </p>
            </div>
          </div>
          <ReducedMotionFallback journeyStories={journeyStories} translatedEvents={translatedEvents} />
        </>
      )}
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// DESKTOP PINNED STRIP
// ═══════════════════════════════════════════════════════════════════════════════

function DesktopPinnedStrip({ t, journeyStories, translatedEvents }: { t: ReturnType<typeof useT>; journeyStories: JourneyStory[]; translatedEvents: Array<{ year: string; title: string; highlight?: boolean }> }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollPerStory, setScrollPerStory] = useState(SCROLL_PER_STORY);

  // Viewport-aware scroll distance: reduce on large screens (1080p+)
  // Prevents excessive empty scroll space on tall viewports
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateScrollDistance = () => {
      setScrollPerStory(window.innerHeight > 900 ? 35 : 70);
    };
    updateScrollDistance();
    window.addEventListener('resize', updateScrollDistance);
    return () => window.removeEventListener('resize', updateScrollDistance);
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ['start start', 'end end'],
  });

  const pipeFillProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (progress) => {
      const index = Math.min(
        Math.floor(progress * journeyStories.length),
        journeyStories.length - 1
      );
      setActiveIndex(index);
    });
    return unsubscribe;
  }, [scrollYProgress, journeyStories.length]);

  const activeStory = journeyStories[activeIndex];
  const activeEvents = useMemo(() => getStoryEvents(activeStory, translatedEvents), [activeStory, translatedEvents]);

  const scrollDistance = (journeyStories.length - 1) * scrollPerStory;
  const stickyHeightVh = 100 - (HEADER_OFFSET / 10);
  const containerHeight = stickyHeightVh + scrollDistance;

  return (
    <div
      ref={scrollContainerRef}
      className="relative pb-20 2xl:pb-0"
      style={{ height: `${containerHeight}vh` }}
    >
      <div
        className="sticky overflow-hidden bg-white"
        style={{
          top: '100px',
          height: 'min(calc(100vh - 100px), 850px)',
        }}
      >
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-40 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

        <div className="h-full flex flex-col mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
          {/* Section Header - Stays visible during scroll lock */}
          <div className="pt-8 pb-4 text-center flex-shrink-0">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
              {t('about.journey.badge')}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              {t('about.journey.title')}
            </h2>
            <p className="text-sm lg:text-base text-gray-600 max-w-2xl mx-auto">
              {t('about.journey.subtitle')}
            </p>
          </div>

          {/* Story Content - Vertically centered in remaining space */}
          <div className="flex-1 flex flex-col justify-center 2xl:justify-start 2xl:pt-10 pb-8">
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
            <div className="relative py-6 mb-3 lg:mb-4 2xl:py-8 2xl:mb-6">
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
            <div className="flex justify-center 2xl:mt-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full max-w-2xl 2xl:max-w-3xl 2xl:w-full"
                >
                  <div className="p-3 lg:p-4 2xl:p-12 rounded-2xl bg-white border-2 border-primary shadow-lg">
                    {/* Header */}
                    <div className="flex items-center gap-2.5 lg:gap-3 mb-2">
                      <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name={activeStory.icon} size={18} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm lg:text-base 2xl:text-3xl font-bold text-gray-900">{activeStory.title}</h4>
                        <p className="text-primary text-xs lg:text-sm 2xl:text-xl font-medium">{activeStory.yearRange}</p>
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-gray-600 text-xs lg:text-sm 2xl:text-xl 2xl:leading-relaxed mb-2">{activeStory.tagline}</p>

                    {/* Milestones as inline chips */}
                    <div className="flex flex-wrap gap-1.5 lg:gap-2">
                      {activeEvents.map((event) => (
                        <div
                          key={event.year}
                          className="inline-flex items-center gap-1.5 lg:gap-2 px-2 lg:px-2.5 2xl:px-4 py-1 2xl:py-2 rounded-lg bg-gray-50"
                        >
                          <span className="px-1.5 lg:px-2 2xl:px-3 py-0.5 2xl:py-1 bg-primary text-white text-[10px] lg:text-xs 2xl:text-lg font-bold rounded">
                            {event.year}
                          </span>
                          <span className="text-xs lg:text-sm 2xl:text-lg text-gray-700">{event.title}</span>
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
                {t('about.journey.scroll_hint')}
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

function MobileStoryCarousel({ prefersReducedMotion, t, journeyStories, translatedEvents }: { prefersReducedMotion: boolean | null; t: ReturnType<typeof useT>; journeyStories: JourneyStory[]; translatedEvents: Array<{ year: string; title: string; highlight?: boolean }> }) {
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
  }, [journeyStories.length]);

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
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none mb-4">
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
            const events = getStoryEvents(story, translatedEvents);
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
        {t('about.journey.swipe_hint')}
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
  events: Array<{ year: string; title: string; highlight?: boolean }>;
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

function ReducedMotionFallback({ journeyStories, translatedEvents }: { journeyStories: JourneyStory[]; translatedEvents: Array<{ year: string; title: string; highlight?: boolean }> }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none pb-10">
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
          const events = getStoryEvents(story, translatedEvents);
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
