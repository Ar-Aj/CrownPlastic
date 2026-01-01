'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useAnimateOnScroll } from './AnimateOnScroll';
import Icon, { IconName } from '../ui/Icon';

// Map old emoji to icon names
const emojiToIconMap: Record<string, IconName> = {
  '💧': 'water',
  '🔧': 'tools',
  '⚡': 'electric',
  '🔌': 'plug',
  '🚿': 'water',
  '🌊': 'waves',
  '📦': 'package',
  '🏭': 'factory',
  '🔬': 'lab',
};

interface CardItem {
  title: string;
  description?: string;
  href: string;
  icon?: string;
  iconName?: IconName;
  tags?: string[];
  image?: string;
  alt?: string;
}

interface CardGridProps {
  items: CardItem[];
  columns?: 2 | 3 | 4;
}

export default function CardGrid({ items, columns = 3 }: CardGridProps) {
  const { ref, isVisible, prefersReducedMotion } = useAnimateOnScroll({ threshold: 0.05 });
  
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div ref={ref} className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
      {items.map((item, index) => {
        // Determine icon from iconName, emoji mapping, or default
        const resolvedIconName: IconName | null = 
          item.iconName || 
          (item.icon && emojiToIconMap[item.icon]) || 
          null;
        
        // Animation delay for stagger effect
        const animDelay = prefersReducedMotion ? 0 : index * 80;
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className="group bg-white rounded-xl shadow-sm border border-gray-100 card-hover hover:shadow-xl hover:border-primary/20 transition-all duration-200 overflow-hidden"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: prefersReducedMotion 
                ? 'none' 
                : `opacity 300ms ease-out ${animDelay}ms, transform 300ms ease-out ${animDelay}ms`,
            }}
          >
            {/* Product Image */}
            {item.image ? (
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt || `${item.title} product shot`}
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={85}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ) : (
              <div className="h-32 bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center">
                {resolvedIconName ? (
                  <Icon 
                    name={resolvedIconName} 
                    size={48} 
                    className="text-primary/70 group-hover:text-primary transition-colors duration-200" 
                  />
                ) : (
                  <Icon name="package" size={48} className="text-primary/70" />
                )}
              </div>
            )}

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
              )}
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-4 flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
