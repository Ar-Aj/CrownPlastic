'use client';

import { useCountUp } from './useAnimations';

interface StatCardProps {
  value: string;
  label: string;
  isInView: boolean;
  delay?: number;
}

export default function StatCard({ value, label, isInView, delay = 0 }: StatCardProps) {
  const { displayValue } = useCountUp(value, 1000, isInView);

  return (
    <div 
      className="opacity-0 animate-slide-up"
      style={{ 
        animationDelay: `${0.6 + delay}s`, 
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
