'use client';

import { useAnimateOnScroll } from './AnimateOnScroll';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  const { ref, isVisible, prefersReducedMotion } = useAnimateOnScroll({ threshold: 0.05 });

  return (
    <div ref={ref} className="relative">
      {/* Vertical line */}
      <div 
        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-1/2 origin-top"
        style={{
          transform: isVisible 
            ? 'scaleY(1) translateX(-50%)' 
            : 'scaleY(0) translateX(-50%)',
          transition: prefersReducedMotion ? 'none' : 'transform 800ms ease-out',
        }}
      />

      <div className="space-y-12">
        {items.map((item, index) => {
          // Alternate animation direction
          const isEven = index % 2 === 0;
          const animDelay = prefersReducedMotion ? 0 : 200 + index * 150;
          
          return (
            <div
              key={index}
              className={`relative flex items-start gap-8 ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? 'translateX(0)' 
                  : `translateX(${isEven ? '-20px' : '20px'})`,
                transition: prefersReducedMotion 
                  ? 'none' 
                  : `opacity 400ms ease-out ${animDelay}ms, transform 400ms ease-out ${animDelay}ms`,
              }}
            >
              {/* Timeline dot */}
              <div 
                className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow -translate-x-1/2 z-10"
                style={{
                  transform: isVisible 
                    ? 'translateX(-50%) scale(1)' 
                    : 'translateX(-50%) scale(0)',
                  transition: prefersReducedMotion 
                    ? 'none' 
                    : `transform 300ms ease-out ${animDelay + 100}ms`,
                }}
              />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover hover:shadow-lg hover:border-primary/20 transition-all duration-200">
                  <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
