'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

// ═══════════════════════════════════════════════════════════════════════════════
// CROWN PILL - Blue Outline Pill Tag with Optional Icon
// Strict blue/white/black palette
// ═══════════════════════════════════════════════════════════════════════════════

interface CrownPillProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export default function CrownPill({ children, icon, className }: CrownPillProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full',
        'bg-white border-2 border-primary text-primary text-sm font-medium',
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}
