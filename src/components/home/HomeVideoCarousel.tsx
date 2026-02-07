'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PipeArrowButton } from './PipeArrowButton';

// ═══════════════════════════════════════════════════════════════════════════════
// HOME VIDEO CAROUSEL - Card-Based Slide Layout
// ═══════════════════════════════════════════════════════════════════════════════
//
// Each slide is a two-column card:
//   - Left: 3:4 video player (bounded width, not full-bleed)
//   - Right: Marketing text box (title, description, CTA)
//
// Desktop (lg+): Side-by-side card layout within 70-80vh section
// Mobile (<lg): Stacked layout (video on top, text below)
//
// Carousel controls (arrows, dots) remain at section level.
//
// ═══════════════════════════════════════════════════════════════════════════════

// Video slide data with marketing content
interface VideoSlide {
  src: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  poster?: string;
}

// Slides data - 5 product showcase videos
const SLIDES: VideoSlide[] = [
  {
    src: '/videos/home1st/hdpe_1sthome.mp4',
    title: 'HDPE Systems',
    description: 'Engineered for extreme durability, our High-Density Polyethylene (HDPE) systems deliver superior resistance to corrosion and abrasion. Ideal for high-pressure industrial, agricultural, and municipal infrastructure projects where long-term reliability is non-negotiable.',
    ctaLabel: 'Explore HDPE Products',
    ctaHref: '/products/hdpe-pipe-systems',
  },
  {
    src: '/videos/home1st/upvc_1sthome.mp4',
    title: 'uPVC Pressure',
    description: 'Our unplasticized Polyvinyl Chloride (uPVC) pressure pipes offer the perfect balance of rigidity and chemical resistance. Designed for potable water distribution and industrial process lines, they ensure leak-free performance and minimal maintenance over decades of use.',
    ctaLabel: 'View uPVC Range',
    ctaHref: '/products/upvc-pressure-pipes',
  },
  {
    src: '/videos/home1st/ppr_1sthome.mp4',
    title: 'PPR Solutions',
    description: 'Advanced Polypropylene Random Copolymer (PPR) technology designed specifically for hot and cold water plumbing. With exceptional thermal stability and hygienic properties, these systems define the modern standard for residential and commercial building services.',
    ctaLabel: 'Discover PPR Systems',
    ctaHref: '/products/ppr-pipes',
  },
  {
    src: '/videos/home1st/drainage_1sthome.mp4',
    title: 'Silent Drainage',
    description: 'A sophisticated acoustic drainage solution that combines high-density materials with specialized fittings to minimize noise. Perfect for luxury hotels, hospitals, and high-rise residential towers where silence and sanitation are paramount.',
    ctaLabel: 'See Drainage Systems',
    ctaHref: '/products/silent-drainage',
  },
  {
    src: '/videos/home1st/fittings_1sthome.mp4',
    title: 'Custom Fittings',
    description: 'Precision-engineered fittings fabricated to meet exact project specifications. From complex manifolds to specialized adaptors, our custom fabrication capabilities ensure seamless integration for even the most challenging piping layouts.',
    ctaLabel: 'View Fabrication',
    ctaHref: '/products/custom-fittings',
  },
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
      className="relative w-full bg-slate-900 overflow-hidden pt-[130px] pb-10 lg:pb-12"
      aria-label="Featured video carousel"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />
      
      {/* Main container - compact height on desktop, symmetric padding for centering */}
      <div className="relative z-10 mx-auto w-full max-w-7xl 2xl:max-w-[90%] 2xl:w-full min-[1800px]:max-w-[1600px] px-6 sm:px-8 lg:px-10 xl:px-12 py-10 md:py-12 lg:py-8 lg:h-[60vh] lg:max-h-[70vh] lg:min-h-[480px] lg:mt-6 flex items-center justify-center">
        
        {/* Carousel wrapper with navigation */}
        <div className="relative w-full">
          
          {/* Slide content area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-full"
            >
              {/* Inner wrapper to constrain and center the grid between arrows */}
              <div className="mx-auto lg:max-w-5xl xl:max-w-6xl 2xl:max-w-none 2xl:px-16">
              {/* ========== SLIDE CARD: Two-column on desktop, stacked on mobile ========== */}
              <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,3fr)_minmax(0,4fr)] 2xl:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-6 lg:gap-10 xl:gap-14 2xl:gap-24 items-center">
                
                {/* LEFT: Video Player */}
                <div className="w-full flex justify-center lg:justify-end lg:self-center">
                  <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-[320px] xl:max-w-[360px] 2xl:max-w-[480px] min-[1800px]:max-w-[550px]">
                    {/* Video container with 3:4 aspect */}
                    <div className="relative w-full aspect-[3/4] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl shadow-black/50 bg-slate-950">
                      <video
                        ref={(el) => { videoRefs.current[activeIndex] = el; }}
                        src={currentSlide.src}
                        poster={currentSlide.poster}
                        className="w-full h-full object-contain sm:object-cover"
                        muted
                        playsInline
                        loop={totalSlides === 1}
                        autoPlay={!prefersReducedMotion}
                        onEnded={handleVideoEnded}
                        aria-label={currentSlide.title}
                      />
                      
                      {/* Subtle vignette overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-slate-900/10 pointer-events-none" />
                      
                      {/* Reduced motion message */}
                      {prefersReducedMotion && (
                        <div className="absolute bottom-3 left-3 right-3 text-center">
                          <p className="text-xs text-slate-300 bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-lg inline-block">
                            Video paused. Use arrows to browse.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* RIGHT: Text Box */}
                <div className="w-full flex justify-center lg:justify-start lg:self-center">
                  <div className="w-full max-w-md lg:max-w-none text-center lg:text-left">
                    {/* Card surface - compact padding */}
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-5 sm:p-6 lg:p-8 border border-slate-700/50 shadow-xl">
                      {/* Slide counter badge */}
                      <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-full border border-orange-500/30 mb-4">
                        {activeIndex + 1} / {totalSlides}
                      </span>
                      
                      {/* Title */}
                      <h2 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-5xl font-bold text-white mb-3 leading-tight">
                        {currentSlide.title}
                      </h2>
                      
                      {/* Description */}
                      <p className="text-slate-300 text-sm sm:text-base 2xl:text-lg leading-relaxed 2xl:leading-relaxed mb-5">
                        {currentSlide.description}
                      </p>
                      
                      {/* CTA Button */}
                      <Link
                        href={currentSlide.ctaHref}
                        className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
                      >
                        {currentSlide.ctaLabel}
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows - positioned at section level */}
          {totalSlides > 1 && (
            <>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 lg:-translate-x-12 xl:-translate-x-16 2xl:-translate-x-24 z-20">
                <PipeArrowButton
                  direction="left"
                  onClick={goPrev}
                  aria-label="Previous slide"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 lg:translate-x-12 xl:translate-x-16 2xl:translate-x-24 z-20">
                <PipeArrowButton
                  direction="right"
                  onClick={goNext}
                  aria-label="Next slide"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </>
          )}

          {/* Slide indicator dots */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-2.5 mt-8 lg:mt-10 pb-2">
              {SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`
                    w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
                    ${index === activeIndex 
                      ? 'bg-orange-500 scale-125' 
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
      </div>
    </section>
  );
}

export default HomeVideoCarousel;
