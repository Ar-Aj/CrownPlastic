'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ClientLogo } from '@/config/clients';

// ═══════════════════════════════════════════════════════════════════════════════
// 3D LOGO CAROUSEL COMPONENT
// Center-focused carousel with 3D perspective transforms
// Touch/swipe navigation with subtle scroll hints
// ═══════════════════════════════════════════════════════════════════════════════

interface LogoCarousel3DProps {
  logos: ClientLogo[];
  title?: string;
  subtitle?: string;
}

export default function LogoCarousel3D({ logos, title, subtitle }: LogoCarousel3DProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalLogos = logos.length;

  // Detect desktop breakpoint (lg: 1024px) - SSR safe
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Hide scroll hint after first interaction or timeout
  useEffect(() => {
    const timer = setTimeout(() => setShowScrollHint(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // Hide hint on first interaction
  const hideScrollHint = () => {
    if (showScrollHint) setShowScrollHint(false);
  };

  // Navigate to next slide
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalLogos);
  };

  // Navigate to previous slide
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalLogos) % totalLogos);
  };

  // Touch/Mouse drag handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragOffset(0);
    hideScrollHint();
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const offset = clientX - startX;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Threshold for slide change (50px)
    if (dragOffset > 50) {
      goToPrev();
    } else if (dragOffset < -50) {
      goToNext();
    }
    setDragOffset(0);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) handleDragEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Calculate position and transforms for each logo
  // Desktop (lg+): Shows 5 cards (center + 2 left + 2 right)
  // Mobile/Tablet: Shows 3 cards (center + 1 left + 1 right)
  const getLogoStyle = (index: number) => {
    const position = (index - currentIndex + totalLogos) % totalLogos;
    const normalizedPos = position > totalLogos / 2 ? position - totalLogos : position;

    // Center card (position 0) - same for all breakpoints
    if (normalizedPos === 0) {
      return {
        transform: `translateX(calc(-50% + ${dragOffset}px)) scale(1) rotateY(0deg)`,
        opacity: 1,
        zIndex: 30,
      };
    }

    // ═══════════════════════════════════════════════════════════════════════════════
    // MOBILE/TABLET (<1024px): 3 cards visible, smooth slide behavior
    // Card widths: w-40 (160px) / sm:w-48 (192px) / md:w-52 (208px)
    // With scale(0.75), effective widths are ~120-156px
    //
    // SMOOTH SLIDE FIX:
    // Position +2 (next hidden card) placed at 160% instead of 250% to create
    // gradual spacing steps: hidden(160%) → visible-right(75%) → center(-50%)
    // This prevents the "rush in" effect when the 4th card becomes visible.
    // ═══════════════════════════════════════════════════════════════════════════════
    if (!isDesktop) {
      // Left card -1: positioned far enough left to never overlap center
      if (normalizedPos === -1) {
        return {
          transform: `translateX(calc(-175% + ${dragOffset}px)) scale(0.75) rotateY(25deg)`,
          opacity: 0.5,
          zIndex: 20,
        };
      }
      // Right card +1: positioned far enough right to never overlap center
      else if (normalizedPos === 1) {
        return {
          transform: `translateX(calc(75% + ${dragOffset}px)) scale(0.75) rotateY(-25deg)`,
          opacity: 0.5,
          zIndex: 20,
        };
      }
      // Next incoming card +2 (right): closer position for smooth slide transition
      else if (normalizedPos === 2) {
        return {
          transform: `translateX(calc(160% + ${dragOffset}px)) scale(0.65) rotateY(-35deg)`,
          opacity: 0.3,
          zIndex: 15,
        };
      }
      // Previous outgoing card -2 (left): symmetric positioning
      else if (normalizedPos === -2) {
        return {
          transform: `translateX(calc(-260% + ${dragOffset}px)) scale(0.65) rotateY(35deg)`,
          opacity: 0.3,
          zIndex: 15,
        };
      }
      // Far hidden cards on mobile - pushed way off-screen
      else {
        return {
          transform: `translateX(${normalizedPos > 0 ? '300%' : '-300%'}) scale(0.5)`,
          opacity: 0,
          zIndex: 10,
        };
      }
    }

    // ═══════════════════════════════════════════════════════════════════════════════
    // DESKTOP (lg+): 5 cards visible with tighter spacing
    // ═══════════════════════════════════════════════════════════════════════════════
    // Left card -1
    if (normalizedPos === -1) {
      return {
        transform: `translateX(calc(-150% + ${dragOffset}px)) scale(0.85) rotateY(18deg)`,
        opacity: 0.6,
        zIndex: 20,
      };
    }
    // Right card +1
    else if (normalizedPos === 1) {
      return {
        transform: `translateX(calc(50% + ${dragOffset}px)) scale(0.85) rotateY(-18deg)`,
        opacity: 0.6,
        zIndex: 20,
      };
    }
    // Left card -2 (desktop only)
    else if (normalizedPos === -2) {
      return {
        transform: `translateX(calc(-250% + ${dragOffset}px)) scale(0.7) rotateY(35deg)`,
        opacity: 0.35,
        zIndex: 15,
      };
    }
    // Right card +2 (desktop only)
    else if (normalizedPos === 2) {
      return {
        transform: `translateX(calc(150% + ${dragOffset}px)) scale(0.7) rotateY(-35deg)`,
        opacity: 0.35,
        zIndex: 15,
      };
    }
    // Hidden cards (beyond 5-card range)
    else {
      return {
        transform: `translateX(${normalizedPos > 0 ? '300%' : '-300%'}) scale(0.5)`,
        opacity: 0,
        zIndex: 10,
      };
    }
  };

  return (
    <section className="relative py-8 md:py-12 pb-16 md:pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wMyIvPjwvc3ZnPg==')] opacity-50" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-6 md:mb-8">
            {title && (
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* 3D Carousel Container */}
        <div className="relative">
          {/* Animated scroll hint - fades away after interaction */}
          <div 
            className={`absolute inset-0 z-30 pointer-events-none flex items-center justify-center transition-opacity duration-1000 ${
              showScrollHint ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Left hint */}
            <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2">
              <div className="flex items-center gap-1 animate-pulse">
                <div className="w-6 h-[2px] bg-gradient-to-l from-white/40 to-transparent rounded-full" />
              </div>
            </div>
            
            {/* Right hint with animated chevrons */}
            <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2">
              <div className="flex items-center gap-0.5">
                <div className="w-6 h-[2px] bg-gradient-to-r from-white/40 to-transparent rounded-full" />
                <svg 
                  className="w-3 h-3 text-white/50 animate-[scroll-hint_1.5s_ease-in-out_infinite]"
                  viewBox="0 0 24 24" 
                  fill="none"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Bottom swipe indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" />
                <span className="text-[10px] tracking-wider uppercase">Swipe</span>
                <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" />
              </div>
            </div>
          </div>

          {/* Carousel viewport with perspective */}
          <div
            ref={carouselRef}
            className="relative h-[220px] sm:h-[240px] md:h-[280px] lg:h-[320px] cursor-grab active:cursor-grabbing select-none"
            style={{ perspective: '2000px' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Logo cards */}
            {logos.map((logo, index) => {
              const style = getLogoStyle(index);
              const isCenter = (index - currentIndex + totalLogos) % totalLogos === 0;
              
              // Calculate normalized position for conditional rendering
              // Both desktop and mobile now show ±2 cards for smooth transitions
              // Desktop: 5 cards visible (±2, ±1, 0) with tighter spacing
              // Mobile: 3 cards prominent (±1, 0), ±2 cards dimmed for smooth slide-in
              const position = (index - currentIndex + totalLogos) % totalLogos;
              const normalizedPos = position > totalLogos / 2 ? position - totalLogos : position;
              
              return (
                <div
                  key={`${logo.name}-${index}`}
                  className="absolute left-1/2 top-[10px] sm:top-[15px] md:top-[20px] w-40 sm:w-48 md:w-52 lg:w-56 transition-all duration-500 ease-out"
                  style={{
                    ...style,
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  {/* 3:4 Aspect ratio card */}
                  <div className="aspect-[3/4] w-full rounded-xl bg-white overflow-hidden shadow-lg" style={{ backfaceVisibility: 'hidden' }}>
                    {/* Logo image - fills card edge-to-edge */}
                    <div className="relative w-full h-full">
                      <Image
                        src={logo.image}
                        alt={`${logo.name} logo`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 208px, 224px"
                        draggable={false}
                      />
                    </div>
                  </div>
                  
                  {/* Logo name label (visible on center card only) */}
                  {isCenter && (
                    <div className="absolute -bottom-12 sm:-bottom-14 md:-bottom-16 left-1/2 -translate-x-1/2 text-center w-full px-2">
                      <p className="text-xs sm:text-sm md:text-base font-medium text-white truncate">
                        {logo.name}
                      </p>
                      {logo.category && (
                        <p className="text-xs text-gray-400 capitalize mt-1">
                          {logo.category}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Dot indicators */}
          <div className="relative z-50 flex justify-center gap-2 mt-16 sm:mt-18 md:mt-20">
            {logos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-6 md:w-8'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
