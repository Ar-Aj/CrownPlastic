/**
 * Product Detail Icons
 * 
 * Monochrome icon set for product feature/application cards.
 * All icons use 24x24 viewBox with currentColor for strokes.
 * Stroke width: 1.5 for a clean, refined look.
 */

import { type SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const defaultProps: IconProps = {
  size: 24,
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  fill: 'none',
  stroke: 'currentColor',
};

// ═══════════════════════════════════════════════════════════════════════════════
// THERMOMETER - Temperature rating
// ═══════════════════════════════════════════════════════════════════════════════

export function ThermometerIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...defaultProps}
      {...props}
    >
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z" />
      <circle cx="11.5" cy="17.5" r="1.5" />
      <path d="M11.5 14V7" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SHIELD-CHECK - Safety / Lead-free / Food grade
// ═══════════════════════════════════════════════════════════════════════════════

export function ShieldCheckIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...defaultProps}
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SHIELD - Durability / Resistance
// ═══════════════════════════════════════════════════════════════════════════════

export function ShieldIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...defaultProps}
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FIRE-OFF - Self-extinguishing / Flame retardant
// ═══════════════════════════════════════════════════════════════════════════════

export function FireOffIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...defaultProps}
      {...props}
    >
      <path d="M12 12c-2-2.67 0-6 0-6s4.5 2.5 4.5 6.5c0 1.5-.5 2.5-1 3.5" />
      <path d="M8.5 16c-.5-1.5-.5-2.5 0-4" />
      <path d="M12 22c-4 0-7-3-7-7 0-2.5 1.5-5 3-7" />
      <path d="M19 15c0-1-.5-2-1-3" />
      <path d="m2 2 20 20" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// DROPLET - Water / Fluid handling
// ═══════════════════════════════════════════════════════════════════════════════

export function DropletIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...defaultProps}
      {...props}
    >
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// WRENCH - Easy installation / Labour saving
// ═══════════════════════════════════════════════════════════════════════════════

export function WrenchIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...defaultProps}
      {...props}
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PIPE - Connection / Pipes & Fittings
// ═══════════════════════════════════════════════════════════════════════════════

export function PipeIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...defaultProps}
      {...props}
    >
      <path d="M3 10h4v4H3z" />
      <path d="M7 10h10v4H7" />
      <path d="M17 10h4v4h-4z" />
      <path d="M7 8v8" />
      <path d="M17 8v8" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// BUILDING - Industrial / Commercial applications
// ═══════════════════════════════════════════════════════════════════════════════

export function BuildingIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...defaultProps}
      {...props}
    >
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// LEAF - Eco-friendly / Sustainable
// ═══════════════════════════════════════════════════════════════════════════════

export function LeafIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...defaultProps}
      {...props}
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// GAUGE - Pressure rating
// ═══════════════════════════════════════════════════════════════════════════════

export function GaugeIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...defaultProps}
      {...props}
    >
      <path d="M12 16v-4" />
      <path d="m14.5 9-2.5 3" />
      <circle cx="12" cy="12" r="10" />
      <path d="M6 12h1" />
      <path d="M17 12h1" />
      <path d="M12 6v1" />
      <path d="m7.5 7.5.7.7" />
      <path d="m15.8 8.2.7-.7" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CERTIFICATE - Standards / Certifications
// ═══════════════════════════════════════════════════════════════════════════════

export function CertificateIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...defaultProps}
      {...props}
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CHECK-CIRCLE - Generic feature / Benefit
// ═══════════════════════════════════════════════════════════════════════════════

export function CheckCircleIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...defaultProps}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ICON MAP - For dynamic rendering
// ═══════════════════════════════════════════════════════════════════════════════

export const ProductIcons = {
  'thermometer': ThermometerIcon,
  'shield-check': ShieldCheckIcon,
  'shield': ShieldIcon,
  'fire-off': FireOffIcon,
  'droplet': DropletIcon,
  'wrench': WrenchIcon,
  'pipe': PipeIcon,
  'building': BuildingIcon,
  'leaf': LeafIcon,
  'gauge': GaugeIcon,
  'certificate': CertificateIcon,
  'check-circle': CheckCircleIcon,
} as const;

export type ProductIconName = keyof typeof ProductIcons;

// ═══════════════════════════════════════════════════════════════════════════════
// DYNAMIC ICON COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

interface PDIconProps extends IconProps {
  name: ProductIconName;
}

export function PDIcon({ name, ...props }: PDIconProps) {
  const IconComponent = ProductIcons[name] || CheckCircleIcon;
  return <IconComponent {...props} />;
}
