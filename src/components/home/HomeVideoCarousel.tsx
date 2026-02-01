'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { PipeArrowButton } from './PipeArrowButton';

// ═══════════════════════════════════════════════════════════════════════════════
// HOME VIDEO CAROUSEL - Hero Video Section
// ═══════════════════════════════════════════════════════════════════════════════
//
// A full-width video carousel section that plays short 3:4 videos at the very
// top of the Home page. Features:
//
// - 3:4 aspect ratio videos centered at ~80-90vw width
// - Auto-advances after video ends with 2-second pause
// - Muted, autoplay, looping per slide
// - Orange UPVC pipe-styled navigation arrows
// - Respects prefers-reduced-motion (shows static poster, no auto-advance)
//
// ═══════════════════════════════════════════════════════════════════════════════

// Video slide data
interface VideoSlide {
  src: string;
  title: string;
  poster?: string;
  metadata?: string;
}

// Initial slides data - can be expanded with more videos
const SLIDES: VideoSlide[] = [
  {
    src: '/videos/home1st/hdpe_1sthome.mp4',
    title: 'HDPE Pipe Solutions',
    metadata: 'Premium HDPE piping for industrial applications',
  },
  // Future videos can be added here:
  // { src: '/videos/home1st/upvc_production.mp4', title: 'UPVC Manufacturing', ... },
  // { src: '/videos/home1st/factory_tour.mp4', title: 'Factory Tour', ... },
];

// Pause duration between slides (ms)
const INTER_SLIDE_PAUSE = 2000;

// ═══════════════════════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export function HomeVideoCarousel() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Get current slide
  const currentSlide = SLIDES[activeIndex];
  const totalSlides = SLIDES.length;

  // ─────────────────────────────────────────────────────────────────────────────
  // VIDEO CONTROLS
  // ─────────────────────────────────────────────────────────────────────────────

  // Play video at specific index
  const playVideo = useCallback((index: number) => {
    const video = videoRefs.current[index];
    if (video && !prefersReducedMotion) {
      video.currentTime = 0;
      video.play().catch(() => {
        // Autoplay may be blocked - that's ok
      });
    }
  }, [prefersReducedMotion]);

  // Pause video at specific index
  const pauseVideo = useCallback((index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
    }
  }, []);

  // Handle video end - wait 2 seconds then advance
  const handleVideoEnded = useCallback(() => {
    if (prefersReducedMotion || totalSlides <= 1) return;

    setIsTransitioning(true);
    
    transitionTimeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
      setIsTransitioning(false);
    }, INTER_SLIDE_PAUSE);
  }, [prefersReducedMotion, totalSlides]);

  // Navigate to specific slide
  const goToSlide = useCallback((index: number) => {
    if (index === activeIndex || isTransitioning) return;
    
    // Clear any pending transition
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }
    
    // Pause current video
    pauseVideo(activeIndex);
    
    // Change slide
    setActiveIndex(index);
  }, [activeIndex, isTransitioning, pauseVideo]);

  // Navigate to previous slide
  const goPrev = useCallback(() => {
    const newIndex = activeIndex === 0 ? totalSlides - 1 : activeIndex - 1;
    goToSlide(newIndex);
  }, [activeIndex, totalSlides, goToSlide]);

  // Navigate to next slide
  const goNext = useCallback(() => {
    const newIndex = (activeIndex + 1) % totalSlides;
    goToSlide(newIndex);
  }, [activeIndex, totalSlides, goToSlide]);

  // ─────────────────────────────────────────────────────────────────────────────
  // EFFECTS
  // ─────────────────────────────────────────────────────────────────────────────

  // Play video when slide changes
  useEffect(() => {
    playVideo(activeIndex);
    
    return () => {
      // Cleanup: pause video when unmounting or changing
      pauseVideo(activeIndex);
    };
  }, [activeIndex, playVideo, pauseVideo]);

  // Cleanup transition timeout on unmount
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  // ─────────────────────────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <section 
      className="relative w-full bg-slate-900 overflow-hidden py-8 md:py-12 lg:py-16"
      aria-label="Featured video carousel"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800" />
      
      {/* Main carousel container */}
      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-10">
        {/* Video container - 80-90vw on large screens */}
        <div className="relative mx-auto w-full max-w-6xl lg:w-[85vw] lg:max-w-7xl">
          {/* Aspect ratio container - 3:4 on desktop, 4:5 on mobile for less height */}
          <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
            {/* Video slides */}
            <AnimatePresence mode="wait">
              {SLIDES.map((slide, index) => (
                index === activeIndex && (
                  <motion.div
                    key={slide.src}
                    className="absolute inset-0"
                    initial={prefersReducedMotion ? {} : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={prefersReducedMotion ? {} : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <video
                      ref={(el) => { videoRefs.current[index] = el; }}
                      src={slide.src}
                      poster={slide.poster}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      loop={totalSlides === 1} // Only loop if single video
                      autoPlay={!prefersReducedMotion}
                      onEnded={handleVideoEnded}
                      aria-label={slide.title}
                    />
                    
                    {/* Subtle vignette overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-slate-900/20 pointer-events-none" />
                  </motion.div>
                )
              ))}
            </AnimatePresence>

            {/* Reduced motion: Show static poster message */}
            {prefersReducedMotion && (
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-sm text-slate-300 bg-slate-900/70 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                  Video paused for accessibility. Use arrows to browse.
                </p>
              </div>
            )}
          </div>

          {/* Navigation arrows - only show if multiple slides */}
          {totalSlides > 1 && (
            <>
              {/* Left arrow */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 md:-translate-x-4 lg:-translate-x-8 z-20">
                <PipeArrowButton
                  direction="left"
                  onClick={goPrev}
                  aria-label="Previous video"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Right arrow */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 md:translate-x-4 lg:translate-x-8 z-20">
                <PipeArrowButton
                  direction="right"
                  onClick={goNext}
                  aria-label="Next video"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </>
          )}

          {/* Slide indicators - only show if multiple slides */}
          {totalSlides > 1 && (
            <div className="absolute -bottom-8 md:-bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`
                    w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
                    ${index === activeIndex 
                      ? 'bg-orange-500 scale-110' 
                      : 'bg-slate-600 hover:bg-slate-500'
                    }
                  `}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === activeIndex ? 'true' : 'false'}
                />
              ))}
            </div>
          )}
        </div>

        {/* Optional title below video */}
        <motion.div 
          className="text-center mt-12 md:mt-14"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
            {currentSlide.title}
          </h2>
          {currentSlide.metadata && (
            <p className="text-sm md:text-base text-slate-400">
              {currentSlide.metadata}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default HomeVideoCarousel;
