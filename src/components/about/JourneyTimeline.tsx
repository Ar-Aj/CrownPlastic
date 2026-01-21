'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useReducedMotion, AnimatePresence } from 'framer-motion';
import { journeyEvents, type JourneyEvent } from './about.types';
import { cn } from '@/lib/utils';

// ═══════════════════════════════════════════════════════════════════════════════
// JOURNEY TIMELINE - Scroll-linked Interactive Timeline
// Features: Vertical progress line, click/scroll navigation, milestone cards
// Palette: Blue / White / Black only
// ═══════════════════════════════════════════════════════════════════════════════

export default function JourneyTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();

  // Scroll-linked active year (optional enhancement)
  useEffect(() => {
    if (prefersReducedMotion || !timelineRef.current) return;

    const handleScroll = () => {
      const items = timelineRef.current?.querySelectorAll('[data-year]');
      if (!items) return;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const triggerPoint = viewportHeight * 0.4;

        if (rect.top < triggerPoint && rect.bottom > 0) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReducedMotion]);

  const activeEvent = journeyEvents[activeIndex];
  const progressPercentage = ((activeIndex + 1) / journeyEvents.length) * 100;

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            30 Years of Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From a single vision in 1995 to GCC&apos;s trusted plastic piping manufacturer
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Year Navigator */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <YearNavigator
                events={journeyEvents}
                activeIndex={activeIndex}
                onSelect={setActiveIndex}
                progressPercentage={progressPercentage}
                prefersReducedMotion={prefersReducedMotion}
                isInView={isInView}
              />
            </div>
          </div>

          {/* Right: Milestone Cards */}
          <div ref={timelineRef} className="lg:col-span-9 space-y-6">
            {journeyEvents.map((event, index) => (
              <MilestoneCard
                key={event.year}
                event={event}
                index={index}
                isActive={index === activeIndex}
                isInView={isInView}
                prefersReducedMotion={prefersReducedMotion}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Mobile: Current Milestone Summary (Fixed Bottom) */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40 shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEvent.year}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? {} : { opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">{activeEvent.year}</span>
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-gray-900 truncate">{activeEvent.title}</h4>
                <p className="text-sm text-gray-500 truncate">{activeEvent.description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// YEAR NAVIGATOR COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface YearNavigatorProps {
  events: JourneyEvent[];
  activeIndex: number;
  onSelect: (index: number) => void;
  progressPercentage: number;
  prefersReducedMotion: boolean | null;
  isInView: boolean;
}

function YearNavigator({
  events,
  activeIndex,
  onSelect,
  progressPercentage,
  prefersReducedMotion,
  isInView,
}: YearNavigatorProps) {
  return (
    <div className="relative">
      {/* Progress Line Background */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 rounded-full" />
      
      {/* Active Progress Line */}
      <motion.div
        className="absolute left-4 top-0 w-0.5 bg-primary rounded-full origin-top"
        initial={{ height: 0 }}
        animate={isInView ? { height: `${progressPercentage}%` } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />

      {/* Year Buttons */}
      <div className="relative space-y-4">
        {events.map((event, index) => (
          <motion.button
            key={event.year}
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            onClick={() => onSelect(index)}
            className={cn(
              'flex items-center gap-4 w-full text-left group',
              'py-2 transition-colors duration-200'
            )}
          >
            {/* Year Dot */}
            <div
              className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300',
                'border-2',
                index === activeIndex
                  ? 'bg-primary border-primary scale-110'
                  : index < activeIndex
                  ? 'bg-primary/20 border-primary/40'
                  : 'bg-white border-gray-300 group-hover:border-primary/50'
              )}
            >
              {index === activeIndex && (
                <motion.div
                  layoutId="activeYearDot"
                  className="w-2 h-2 bg-white rounded-full"
                />
              )}
            </div>

            {/* Year Label */}
            <span
              className={cn(
                'text-sm font-semibold transition-colors duration-200',
                index === activeIndex
                  ? 'text-primary'
                  : 'text-gray-400 group-hover:text-gray-700'
              )}
            >
              {event.year}
            </span>

            {/* Highlight Badge */}
            {event.highlight && (
              <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                Key
              </span>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MILESTONE CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface MilestoneCardProps {
  event: JourneyEvent;
  index: number;
  isActive: boolean;
  isInView: boolean;
  prefersReducedMotion: boolean | null;
  onClick: () => void;
}

function MilestoneCard({
  event,
  index,
  isActive,
  isInView,
  prefersReducedMotion,
  onClick,
}: MilestoneCardProps) {
  return (
    <motion.div
      data-year={event.year}
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
      onClick={onClick}
      className={cn(
        'group relative p-6 md:p-8 rounded-2xl cursor-pointer transition-all duration-300',
        'border-2',
        isActive
          ? 'bg-white border-primary shadow-lg'
          : 'bg-white/50 border-gray-100 hover:border-primary/30 hover:bg-white hover:shadow-md',
        event.highlight && isActive && 'ring-2 ring-primary/20 ring-offset-2'
      )}
    >
      {/* Year Badge */}
      <div className="flex items-start justify-between mb-4">
        <div
          className={cn(
            'px-4 py-2 rounded-xl font-bold text-lg transition-colors duration-300',
            isActive
              ? 'bg-primary text-white'
              : 'bg-gray-100 text-gray-700 group-hover:bg-primary/10 group-hover:text-primary'
          )}
        >
          {event.year}
        </div>
        {event.highlight && (
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
            Milestone
          </span>
        )}
      </div>

      {/* Content */}
      <h3
        className={cn(
          'text-xl md:text-2xl font-bold mb-3 transition-colors duration-200',
          isActive ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
        )}
      >
        {event.title}
      </h3>
      <p className="text-gray-600 leading-relaxed mb-4">
        {event.description}
      </p>

      {/* Stats Row (if available) */}
      {event.stats && event.stats.length > 0 && (
        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
          {event.stats.map((stat, i) => (
            <div
              key={i}
              className={cn(
                'px-4 py-2 rounded-lg transition-colors duration-300',
                isActive ? 'bg-primary/10' : 'bg-gray-50'
              )}
            >
              <span className="text-xs text-gray-500 block">{stat.label}</span>
              <span
                className={cn(
                  'font-bold',
                  isActive ? 'text-primary' : 'text-gray-900'
                )}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Active Indicator */}
      {isActive && (
        <motion.div
          layoutId="activeCard"
          className="absolute -left-1 top-8 bottom-8 w-1 bg-primary rounded-full"
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
}
