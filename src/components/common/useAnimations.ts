'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * Hook to animate a number counting up from 0 to target
 * Respects prefers-reduced-motion
 */
export function useCountUp(
  target: number | string,
  duration: number = 1000,
  isInView: boolean = false
) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Parse target - extract numeric value
  const numericTarget = typeof target === 'string' 
    ? parseInt(target.replace(/[^0-9]/g, ''), 10) || 0
    : target;
  
  // Get suffix (e.g., "+", "K", etc.)
  const suffix = typeof target === 'string' 
    ? target.replace(/[0-9]/g, '').trim()
    : '';

  useEffect(() => {
    if (!isInView || hasAnimated || prefersReducedMotion) {
      if (prefersReducedMotion && !hasAnimated) {
        setCount(numericTarget);
        setHasAnimated(true);
      }
      return;
    }

    setHasAnimated(true);
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeOut * numericTarget);
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, numericTarget, duration, hasAnimated, prefersReducedMotion]);

  return { count, suffix, displayValue: `${count}${suffix}` };
}

/**
 * Hook to detect prefers-reduced-motion
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}

/**
 * Hook for parallax scroll effect on an element
 * Respects prefers-reduced-motion
 * Optimized with passive listener and throttling
 */
export function useParallaxScroll(factor: number = 0.1) {
  const [offset, setOffset] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    let ticking = false;
    let lastScrollY = 0;
    
    const handleScroll = () => {
      lastScrollY = window.scrollY;
      
      if (!ticking) {
        requestAnimationFrame(() => {
          // Limit parallax to hero section height
          const maxScroll = window.innerHeight;
          const clampedScroll = Math.min(lastScrollY, maxScroll);
          setOffset(clampedScroll * factor);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [factor, prefersReducedMotion]);

  return offset;
}

/**
 * Hook to detect when element enters viewport
 */
export function useInView(threshold: number = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold, rootMargin: '50px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}
