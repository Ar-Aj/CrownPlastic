'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useAnimateOnScroll } from './AnimateOnScroll';
import Icon, { IconName } from '../ui/Icon';
import { useT } from '@/i18n';

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
  const t = useT();
  
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
            className="group relative rounded-xl overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-slate-900/15"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: prefersReducedMotion 
                ? 'none' 
                : `opacity 300ms ease-out ${animDelay}ms, transform 300ms ease-out ${animDelay}ms`,
            }}
          >
            {/* Background - transitions from white to dark navy */}
            <div className="absolute inset-0 bg-white group-hover:bg-gradient-to-br group-hover:from-slate-800 group-hover:via-slate-900 group-hover:to-blue-950 transition-all duration-500" />
            
            {/* Subtle border */}
            <div className="absolute inset-0 rounded-xl border border-gray-100 group-hover:border-slate-700/50 transition-colors duration-500" />
            
            <div className="relative">
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
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Refined overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-30 group-hover:opacity-70 transition-opacity duration-500" />
                </div>
              ) : (
                <div className="h-32 bg-gradient-to-br from-primary/5 to-secondary/10 group-hover:from-slate-700 group-hover:to-slate-800 flex items-center justify-center transition-all duration-500">
                  {resolvedIconName ? (
                    <Icon 
                      name={resolvedIconName} 
                      size={48} 
                      className="text-primary/70 group-hover:text-amber-400 transition-colors duration-400" 
                    />
                  ) : (
                    <Icon name="package" size={48} className="text-primary/70 group-hover:text-amber-400 transition-colors duration-400" />
                  )}
                </div>
              )}

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-400 mb-2">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-gray-600 group-hover:text-slate-300 text-sm mb-4 line-clamp-2 transition-colors duration-400">
                    {item.description}
                  </p>
                )}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2 py-1 bg-primary/10 group-hover:bg-white/10 text-primary group-hover:text-slate-200 text-xs rounded-full transition-colors duration-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-2 text-primary group-hover:text-amber-400 font-medium text-sm transition-all duration-400">
                  <span className="group-hover:tracking-wide transition-all duration-400">{t('products_extended.learn_more')}</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
