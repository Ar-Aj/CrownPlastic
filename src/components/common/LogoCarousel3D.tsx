'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ClientLogo } from '@/config/clients';

// ═══════════════════════════════════════════════════════════════════════════════
// 3D LOGO CAROUSEL COMPONENT
// Center-focused carousel with 3D perspective transforms
// Mobile: Swipe support, Desktop: Arrow navigation
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
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalLogos = logos.length;

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
  const getLogoStyle = (index: number) => {
    const position = (index - currentIndex + totalLogos) % totalLogos;
    const normalizedPos = position > totalLogos / 2 ? position - totalLogos : position;

    // Center card (position 0)
    if (normalizedPos === 0) {
      return {
        transform: `translateX(calc(-50% + ${dragOffset}px)) scale(1) rotateY(0deg)`,
        opacity: 1,
        zIndex: 30,
      };
    }
    // Left card (position -1)
    else if (normalizedPos === -1) {
      return {
        transform: `translateX(calc(-150% + ${dragOffset}px)) scale(0.8) rotateY(20deg)`,
        opacity: 0.5,
        zIndex: 20,
      };
    }
    // Right card (position 1)
    else if (normalizedPos === 1) {
      return {
        transform: `translateX(calc(50% + ${dragOffset}px)) scale(0.8) rotateY(-20deg)`,
        opacity: 0.5,
        zIndex: 20,
      };
    }
    // Hidden cards
    else {
      return {
        transform: `translateX(${normalizedPos > 0 ? '200%' : '-200%'}) scale(0.5)`,
        opacity: 0,
        zIndex: 10,
      };
    }
  };

  return (
    <section className="relative py-12 md:py-16 pb-20 md:pb-24 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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

        {/* 3D Carousel Container with Arrows */}
        <div className="relative">
          {/* Navigation Arrows - Positioned relative to this container */}
          <button
            onClick={goToPrev}
            className="absolute left-2 sm:left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-colors shadow-lg"
            aria-label="Previous logo"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-colors shadow-lg"
            aria-label="Next logo"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Carousel viewport with perspective */}
          <div
            ref={carouselRef}
            className="relative h-[280px] sm:h-[300px] md:h-[340px] lg:h-[380px] mx-12 sm:mx-16 md:mx-20 lg:mx-24 cursor-grab active:cursor-grabbing select-none"
            style={{ perspective: '1200px' }}
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
              
              return (
                <div
                  key={`${logo.name}-${index}`}
                  className="absolute left-1/2 top-1/2 -translate-y-1/2 w-40 sm:w-48 md:w-52 lg:w-56 transition-all duration-500 ease-out"
                  style={style}
                >
                  {/* 3:4 Aspect ratio card */}
                  <div className="aspect-[3/4] w-full rounded-xl bg-white shadow-2xl flex items-center justify-center p-4 sm:p-5 md:p-6 border border-gray-100">
                    {/* Logo image - object-contain */}
                    <div className="relative w-full h-full">
                      <Image
                        src={logo.image}
                        alt={`${logo.name} logo`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 208px, 224px"
                        draggable={false}
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      {/* Fallback text */}
                      <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-600 text-center px-4">
                        {logo.name}
                      </span>
                    </div>
                  </div>
                  
                  {/* Logo name label (visible on center card only) */}
                  {isCenter && (
                    <div className="absolute -bottom-8 sm:-bottom-10 md:-bottom-12 left-1/2 -translate-x-1/2 text-center w-full px-2">
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
          <div className="flex justify-center gap-2 mt-12 sm:mt-14 md:mt-16">
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
