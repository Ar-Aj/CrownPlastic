'use client';

import { useCountUp, useInView } from './useAnimations';
import Icon, { IconName } from '../ui/Icon';

// Map emoji to icon names
const emojiToIconMap: Record<string, IconName> = {
  '📅': 'calendar',
  '🏭': 'factory',
  '📦': 'package',
  '🌍': 'globe',
  '👥': 'users',
  '🏆': 'trophy',
  '✅': 'check',
  '🏗️': 'building',
  '🚚': 'truck',
  '🌿': 'leaf',
  '♻️': 'recycle',
  '💧': 'water',
  '🔥': 'heat',
  '⭐': 'award',
};

// Animated stat counter component
function AnimatedStat({ 
  value, 
  label, 
  isInView, 
  index,
  variant,
}: { 
  value: string; 
  label: string; 
  isInView: boolean;
  index: number;
  variant: 'light' | 'dark' | 'primary';
}) {
  const { displayValue } = useCountUp(value, 1000, isInView);
  
  const valueClasses = {
    light: 'text-primary',
    dark: 'text-accent',
    primary: 'text-accent',
  };

  const labelClasses = {
    light: 'text-gray-600',
    dark: 'text-gray-400',
    primary: 'text-white/80',
  };
  
  return (
    <div 
      className="flex flex-col items-center"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(10px)',
        transition: `opacity 300ms ease-out ${index * 100}ms, transform 300ms ease-out ${index * 100}ms`,
      }}
    >
      <p className={`text-3xl md:text-4xl font-bold tabular-nums ${valueClasses[variant]}`}>
        {displayValue}
      </p>
      <p className={`text-sm mt-1 ${labelClasses[variant]}`}>{label}</p>
    </div>
  );
}

interface Stat {
  value: string;
  label: string;
  icon?: string;
  iconName?: IconName;
}

interface StatsStripProps {
  stats: Stat[];
  variant?: 'light' | 'dark' | 'primary';
}

export default function StatsStrip({ stats, variant = 'primary' }: StatsStripProps) {
  const { ref, isInView } = useInView(0.2);
  
  const bgClasses = {
    light: 'bg-gray-50 text-gray-900',
    dark: 'bg-gray-900 text-white',
    primary: 'bg-primary text-white',
  };

  const iconClasses = {
    light: 'text-primary',
    dark: 'text-accent',
    primary: 'text-accent',
  };

  return (
    <section ref={ref} className={`${bgClasses[variant]} py-12`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => {
            // Resolve icon from iconName or emoji mapping
            const resolvedIconName = stat.iconName || (stat.icon && emojiToIconMap[stat.icon]);
            
            return (
              <div key={index} className="flex flex-col items-center">
                {resolvedIconName ? (
                  <Icon 
                    name={resolvedIconName} 
                    size={32} 
                    className={`mb-2 ${iconClasses[variant]}`} 
                  />
                ) : stat.icon && (
                  <span className="text-3xl mb-2">{stat.icon}</span>
                )}
                <AnimatedStat 
                  value={stat.value}
                  label={stat.label}
                  isInView={isInView}
                  index={index}
                  variant={variant}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
