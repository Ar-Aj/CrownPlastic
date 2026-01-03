'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { brand } from '@/config/brand';
import { useHeroVideo, heroScenes } from './useHeroVideo';
import { useParallaxScroll, usePrefersReducedMotion, useCountUp } from './useAnimations';
import { useT } from '@/i18n';

/**
 * HERO VIDEO SYSTEM
 * -----------------
 * Videos should be AI-generated, compressed clips:
 * - /videos/hero-main.mp4    → Factory + pipes cinematic (default)
 * - /videos/hero-water.mp4   → Water/infrastructure focus
 * - /videos/hero-electric.mp4 → Ducting/conduit/electrical focus
 * 
 * Specs: H.264/VP9, 720p max, 5-10s loop, <2-3MB each
 */

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

// Stat counter component with count-up animation
function StatCounter({ value, label, isInView, index }: { 
  value: string; 
  label: string; 
  isInView: boolean;
  index: number;
}) {
  const { displayValue } = useCountUp(value, 1200, isInView);
  const prefersReducedMotion = usePrefersReducedMotion();
  
  return (
    <div 
      className={`${
        prefersReducedMotion ? '' : 'opacity-0 animate-slide-up'
      }`}
      style={prefersReducedMotion ? {} : { 
        animationDelay: `${0.7 + index * 0.08}s`, 
        animationFillMode: 'forwards' 
      }}
    >
      <p className="text-3xl md:text-4xl font-bold text-accent tabular-nums">
        {displayValue}
      </p>
      <p className="text-white/70 text-sm mt-1">{label}</p>
    </div>
  );
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink = '/products',
  secondaryCtaText,
  secondaryCtaLink = '/contact-us',
}: HeroSectionProps) {
  const t = useT();
  
  // Use translations as defaults
  const displayTitle = title ?? t('home.hero_title');
  const displaySubtitle = subtitle ?? t('home.hero_subtitle');
  const displayCtaText = ctaText ?? t('home.hero_explore_products');
  const displaySecondaryCtaText = secondaryCtaText ?? t('home.hero_contact_us');
  const {
    activeScene,
    activeSceneId,
    switchScene,
    isInView,
    isVideoLoaded,
    videoRef,
    containerRef,
    scenes,
  } = useHeroVideo({ scenes: heroScenes });

  // Parallax effect for gradient overlay (5-10px movement)
  const parallaxOffset = useParallaxScroll(0.08);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Stats data with translated labels
  const stats = [
    { value: brand.stats.yearsExperience, label: t('home.hero_stat_years') },
    { value: brand.stats.productsRange, label: t('home.hero_stat_products') },
    { value: brand.stats.countriesExport, label: t('home.hero_stat_countries') },
    { value: brand.stats.happyCustomers, label: t('home.hero_stat_customers') },
  ];

  // Scene pill indicator position
  const pillContainerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const container = pillContainerRef.current;
    if (!container) return;

    const activeButton = container.querySelector(`[data-scene="${activeSceneId}"]`) as HTMLButtonElement;
    if (activeButton) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      setIndicatorStyle({
        left: buttonRect.left - containerRect.left,
        width: buttonRect.width,
      });
    }
  }, [activeSceneId]);

  // Animation classes based on motion preference
  const getAnimClass = () => 
    prefersReducedMotion 
      ? '' 
      : `opacity-0 animate-slide-up`;

  const getAnimStyle = (delay: number) => 
    prefersReducedMotion 
      ? {} 
      : { animationDelay: `${delay}s`, animationFillMode: 'forwards' as const };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] md:min-h-screen overflow-hidden"
    >
      {/* Optimized LCP Poster Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={activeScene.poster || '/images/hero-poster-main.jpg'}
          alt="Crown Plastic Pipes Manufacturing"
          fill
          priority
          sizes="100vw"
          quality={85}
          className={`object-cover transition-opacity duration-700 ${
            isVideoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
        
        {/* Video Background - Lazy loaded after poster renders */}
        {isInView && (
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
          >
            <source src={activeScene.src} type="video/mp4" />
          </video>
        )}

        {/* Parallax gradient overlay - moves slightly on scroll */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary-dark/85 to-primary-dark/70 transition-transform duration-100 ease-out"
          style={{
            transform: prefersReducedMotion ? 'none' : `translateY(${parallaxOffset}px)`,
          }}
        />
        
        {/* Additional bottom gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-32 flex flex-col justify-center min-h-[90vh] md:min-h-screen">
        <div className="max-w-4xl">
          {/* Trust Badge - Float + Glow animation */}
          <div 
            className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 
              ${prefersReducedMotion ? '' : 'animate-float animate-glow-pulse opacity-0 animate-slide-up'}`}
            style={getAnimStyle(0.1)}
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white">{t('home.hero_trust_badge')}</span>
          </div>

          {/* Main heading - Staggered fade-up */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white ${getAnimClass()}`}
            style={getAnimStyle(0.15)}
          >
            {displayTitle}
          </h1>

          {/* Subtitle - Staggered fade-up (40-80ms after H1) */}
          <p 
            className={`text-lg md:text-xl text-white/90 mb-8 max-w-2xl ${getAnimClass()}`}
            style={getAnimStyle(0.22)}
          >
            {displaySubtitle}
          </p>

          {/* CTAs - with enhanced hover (150ms ease-out) */}
          <div 
            className={`flex flex-wrap items-center gap-4 mb-8 ${getAnimClass()}`}
            style={getAnimStyle(0.30)}
          >
            <Link
              href={ctaLink}
              className="group inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold 
                transition-all duration-150 ease-out
                hover:bg-accent-dark hover:scale-[1.03] hover:shadow-xl hover:shadow-accent/30
                active:scale-[0.98] rtl:flex-row-reverse"
            >
              {displayCtaText}
              <svg 
                className="w-5 h-5 transition-transform duration-150 group-hover:translate-x-0.5 rtl:rotate-180" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href={secondaryCtaLink}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold 
                transition-all duration-150 ease-out border border-white/20
                hover:bg-white/20 hover:border-white/40 hover:shadow-lg
                active:scale-[0.98]"
            >
              {displaySecondaryCtaText}
            </Link>
          </div>

          {/* Scene Switcher Pills - with sliding indicator */}
          <div 
            className={`mb-8 ${getAnimClass()}`}
            style={getAnimStyle(0.38)}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-white/60 text-sm mr-2 hidden sm:inline">{t('home.hero_view')}</span>
              <div ref={pillContainerRef} className="relative flex gap-2">
                {/* Sliding indicator */}
                <div 
                  className="absolute top-0 h-full bg-accent rounded-full transition-all duration-300 ease-out shadow-lg shadow-accent/25"
                  style={{
                    left: indicatorStyle.left,
                    width: indicatorStyle.width,
                    opacity: indicatorStyle.width > 0 ? 1 : 0,
                  }}
                />
                {scenes.map((scene) => (
                  <button
                    key={scene.id}
                    data-scene={scene.id}
                    onClick={() => switchScene(scene.id)}
                    className={`relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeSceneId === scene.id
                        ? 'text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                    }`}
                  >
                    {scene.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Row - Count-up animation on each stat */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
            {stats.map((stat, index) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
                isInView={isInView}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 ${
          prefersReducedMotion ? '' : 'opacity-0 animate-fade-in'
        }`}
        style={getAnimStyle(1.2)}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className={`w-1 h-2 bg-white/60 rounded-full ${prefersReducedMotion ? '' : 'animate-bounce'}`} />
        </div>
      </div>
    </section>
  );
}
