'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePrefersReducedMotion } from './useAnimations';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  backgroundClass?: string;
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  backgroundClass = 'bg-gradient-to-r from-primary to-primary-dark',
}: PageHeaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Animation helper
  const getAnimStyle = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
    transition: prefersReducedMotion 
      ? 'none' 
      : `opacity 250ms ease-out ${delay}ms, transform 250ms ease-out ${delay}ms`,
  });

  return (
    <section className={`${backgroundClass} text-white`}>
      <div className="container mx-auto px-4 py-12 md:py-16">
        {breadcrumbs && (
          <div className="mb-4" style={getAnimStyle(0)}>
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-sm">
                <li>
                  <Link href="/" className="text-white/70 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                {breadcrumbs.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.href ? (
                      <Link href={item.href} className="text-white/70 hover:text-white transition-colors">
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-white font-medium">{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        )}
        <h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          style={getAnimStyle(50)}
        >
          {title}
        </h1>
        {subtitle && (
          <p 
            className="text-lg md:text-xl text-white/90 max-w-3xl"
            style={getAnimStyle(100)}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
