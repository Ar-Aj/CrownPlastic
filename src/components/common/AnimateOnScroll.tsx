'use client';

import { useRef, useEffect, useState, Children, cloneElement, isValidElement, ReactNode, CSSProperties } from 'react';
import { usePrefersReducedMotion } from './useAnimations';

interface AnimateOnScrollProps {
  children: ReactNode;
  /** Animation variant: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' */
  animation?: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right';
  /** Delay in ms before animation starts (after entering viewport) */
  delay?: number;
  /** Duration in ms */
  duration?: number;
  /** Delay step between children in ms (for stagger effect) */
  delayStep?: number;
  /** Only animate once (default: true) */
  once?: boolean;
  /** IntersectionObserver threshold (0-1) */
  threshold?: number;
  /** Additional className for the wrapper */
  className?: string;
}

/**
 * AnimateOnScroll - Scroll-triggered animation wrapper
 * 
 * Uses IntersectionObserver to detect when element enters viewport,
 * then applies CSS transition for smooth fade/slide animations.
 * 
 * Fully respects prefers-reduced-motion.
 * Uses only transform/opacity for optimal performance.
 * 
 * @example
 * // Single element fade-up
 * <AnimateOnScroll>
 *   <div>Content fades up when scrolled into view</div>
 * </AnimateOnScroll>
 * 
 * // Staggered children
 * <AnimateOnScroll delayStep={100}>
 *   <Card>Card 1</Card>
 *   <Card>Card 2</Card>
 *   <Card>Card 3</Card>
 * </AnimateOnScroll>
 */
export default function AnimateOnScroll({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 300,
  delayStep = 0,
  once = true,
  threshold = 0.1,
  className = '',
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If reduced motion is preferred, show immediately
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small timeout to ensure smooth animation after paint
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
          
          if (once) {
            observer.disconnect();
          }
        } else if (!once && hasAnimated) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '20px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay, once, threshold, hasAnimated, prefersReducedMotion]);

  // Animation initial states (before visible)
  const getInitialStyles = () => {
    if (prefersReducedMotion) {
      return { opacity: 1, transform: 'none' };
    }
    
    switch (animation) {
      case 'fade-up':
        return { opacity: 0, transform: 'translateY(20px)' };
      case 'fade-in':
        return { opacity: 0, transform: 'none' };
      case 'fade-left':
        return { opacity: 0, transform: 'translateX(-20px)' };
      case 'fade-right':
        return { opacity: 0, transform: 'translateX(20px)' };
      default:
        return { opacity: 0, transform: 'translateY(20px)' };
    }
  };

  // Animation final states (when visible)
  const getVisibleStyles = () => ({
    opacity: 1,
    transform: 'translateY(0) translateX(0)',
  });

  // If staggering children, clone each child with individual delay
  if (delayStep > 0 && Children.count(children) > 1) {
    return (
      <div ref={ref} className={className}>
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) return child;
          
          const childDelay = index * delayStep;
          const baseStyles: CSSProperties = isVisible ? getVisibleStyles() : getInitialStyles();
          
          return cloneElement(child as React.ReactElement<{ style?: CSSProperties; className?: string }>, {
            style: {
              ...baseStyles,
              transition: prefersReducedMotion
                ? 'none'
                : `opacity ${duration}ms ease-out ${childDelay}ms, transform ${duration}ms ease-out ${childDelay}ms`,
              ...(child.props.style || {}),
            },
          });
        })}
      </div>
    );
  }

  // Single element or non-staggered animation
  const styles: CSSProperties = isVisible ? getVisibleStyles() : getInitialStyles();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...styles,
        transition: prefersReducedMotion
          ? 'none'
          : `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Hook version for more control
 */
export function useAnimateOnScroll(options?: {
  threshold?: number;
  once?: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  
  const { threshold = 0.1, once = true, delay = 0 } = options || {};

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          if (once) observer.disconnect();
        }
      },
      { threshold, rootMargin: '20px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, once, delay, prefersReducedMotion]);

  return { ref, isVisible, prefersReducedMotion };
}
