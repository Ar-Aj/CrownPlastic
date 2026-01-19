'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

// ═══════════════════════════════════════════════════════════════════════════════
// CROWN METRIC CARD - Static Metric Display
// No animations, counters, or dynamic effects
// Strict blue/white/black palette
// ═══════════════════════════════════════════════════════════════════════════════

interface CrownMetricCardProps {
  value: string | number;
  label: string;
  icon?: ReactNode;
  className?: string;
}

export default function CrownMetricCard({ value, label, icon, className }: CrownMetricCardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg p-4 border border-gray-200',
        className
      )}
    >
      {icon && (
        <div className="mb-2 text-primary">
          {icon}
        </div>
      )}
      <div className="text-3xl font-bold text-gray-900">
        {value}
      </div>
      <div className="text-sm text-gray-600 mt-1">
        {label}
      </div>
    </div>
  );
}
