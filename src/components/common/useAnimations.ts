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
  
  // Check if original value contains any numbers
  const hasNumbers = typeof target === 'string' 
    ? /[0-9]/.test(target)
    : true;
  
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

  // If the value contains no numbers, return it as-is without count prefix
  if (!hasNumbers) {
    return { count, suffix, displayValue: typeof target === 'string' ? target : String(target) };
  }

  return { count, suffix, displayValue: `${count}${suffix}` };
}

/**
 * Hook to detect prefers-reduced-motion
 * SSR-safe: returns false during SSR, checks after mount
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // SSR guard: window is only available client-side
    if (typeof window === 'undefined') return;

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
 * SSR-safe: guards all window access
 */
export function useParallaxScroll(factor: number = 0.1) {
  const [offset, setOffset] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // SSR guard + reduced motion check
    if (typeof window === 'undefined' || prefersReducedMotion) return;

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

/**
 * Hook to detect scroll direction ("up" | "down" | null)
 * Returns null when at the very top of the page (scrollY < threshold)
 * Optimized with RAF throttling and respects prefers-reduced-motion
 * SSR-safe: guards all window access
 * 
 * @param threshold - Minimum scroll distance to trigger direction change (default: 10px)
 */
export function useScrollDirection(threshold: number = 10) {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // SSR guard: window is only available client-side
    if (typeof window === 'undefined') return;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      // If we're at the very top, set direction to null (navbar always visible)
      if (scrollY < threshold) {
        if (scrollDirection !== null) {
          setScrollDirection(null);
        }
        lastScrollY.current = scrollY;
        ticking.current = false;
        return;
      }

      // Detect direction change
      const diff = scrollY - lastScrollY.current;
      
      // Only update if scroll distance exceeds threshold
      if (Math.abs(diff) < threshold) {
        ticking.current = false;
        return;
      }

      const direction = diff > 0 ? 'down' : 'up';
      
      if (direction !== scrollDirection) {
        setScrollDirection(direction);
      }

      lastScrollY.current = scrollY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateScrollDirection);
        ticking.current = true;
      }
    };

    // Passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initialize on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDirection, threshold]);

  // If reduced motion is preferred, always return null (navbar always visible)
  if (prefersReducedMotion) {
    return null;
  }

  return scrollDirection;
}
