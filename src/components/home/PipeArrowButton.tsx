'use client';

import { motion, useReducedMotion } from 'framer-motion';

// ═══════════════════════════════════════════════════════════════════════════════
// PIPE ARROW BUTTON - Orange UPVC Pipe with 90° Elbow
// ═══════════════════════════════════════════════════════════════════════════════
//
// A navigation button styled as an orange UPVC pipe segment with a 90° elbow
// pointing in the direction of travel. Matches the site's 3D pipe aesthetic.
//
// DESIGN NOTES:
// - Uses the same gradient system as ORANGE_PIPE_MATERIAL from AboutHeroCinematic
// - Horizontal pipe segment leading into a 90° elbow turn
// - 3D cylindrical shading with specular highlight and shadow
// - Hover: Subtle lift + glow effect
// - Respects prefers-reduced-motion
//
// ═══════════════════════════════════════════════════════════════════════════════

// Orange UPVC pipe colors
const PIPE_COLORS = {
  darkest: '#451a03',
  dark: '#7c2d12',
  mid: '#9a3412',
  midBright: '#b45309',
  bright: '#ea580c',
  orange: '#f97316',
  lightOrange: '#fb923c',
  highlight: '#fcd34d',
  highlightBright: '#fde68a',
  specular: '#fef3c7',
  white: '#fffbeb',
} as const;



// ═══════════════════════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

interface PipeArrowButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  'aria-label'?: string;
}

export function PipeArrowButton({
  direction,
  onClick,
  className = '',
  disabled = false,
  'aria-label': ariaLabel,
}: PipeArrowButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  
  // SVG dimensions
  const width = 64;
  const height = 44;
  const pipeThickness = 14;
  const elbowRadius = 12;
  
  // Mirror for left direction
  const isLeft = direction === 'left';
  
  // Directional tilt to make arrows look more like pointing arrows
  const rotationStyle = {
    transform: isLeft ? 'rotate(-12deg)' : 'rotate(12deg)',
  };
  
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        relative flex items-center justify-center
        p-1 rounded-lg
        focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      style={rotationStyle}
      whileHover={prefersReducedMotion ? {} : { scale: 1.1, y: -3 }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      aria-label={ariaLabel || (isLeft ? 'Previous slide' : 'Next slide')}
    >
      {/* Glow effect on hover */}
      <div 
        className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:opacity-100"
        style={{
          boxShadow: '0 4px 20px rgba(249, 115, 22, 0.4), 0 0 30px rgba(251, 146, 60, 0.2)',
        }}
      />
      
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className={isLeft ? 'transform scale-x-[-1]' : ''}
        aria-hidden="true"
      >
        <defs>
          {/* Horizontal pipe gradient */}
          <linearGradient id={`pipe-h-${direction}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={PIPE_COLORS.darkest} />
            <stop offset="3%" stopColor={PIPE_COLORS.dark} />
            <stop offset="11%" stopColor={PIPE_COLORS.midBright} />
            <stop offset="14%" stopColor={PIPE_COLORS.white} />
            <stop offset="18%" stopColor={PIPE_COLORS.highlight} />
            <stop offset="28%" stopColor={PIPE_COLORS.lightOrange} />
            <stop offset="45%" stopColor={PIPE_COLORS.orange} />
            <stop offset="60%" stopColor={PIPE_COLORS.bright} />
            <stop offset="75%" stopColor="#c2410c" />
            <stop offset="88%" stopColor={PIPE_COLORS.dark} />
            <stop offset="100%" stopColor={PIPE_COLORS.darkest} />
          </linearGradient>
          
          {/* Vertical pipe gradient (for elbow) */}
          <linearGradient id={`pipe-v-${direction}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={PIPE_COLORS.darkest} />
            <stop offset="3%" stopColor={PIPE_COLORS.dark} />
            <stop offset="12%" stopColor={PIPE_COLORS.midBright} />
            <stop offset="14%" stopColor={PIPE_COLORS.white} />
            <stop offset="18%" stopColor={PIPE_COLORS.highlight} />
            <stop offset="28%" stopColor={PIPE_COLORS.lightOrange} />
            <stop offset="45%" stopColor={PIPE_COLORS.orange} />
            <stop offset="60%" stopColor={PIPE_COLORS.bright} />
            <stop offset="75%" stopColor="#c2410c" />
            <stop offset="88%" stopColor={PIPE_COLORS.dark} />
            <stop offset="100%" stopColor={PIPE_COLORS.darkest} />
          </linearGradient>
          
          {/* Elbow radial gradient */}
          <radialGradient id={`elbow-${direction}`} cx="30%" cy="30%" r="90%">
            <stop offset="0%" stopColor={PIPE_COLORS.white} />
            <stop offset="8%" stopColor={PIPE_COLORS.highlightBright} />
            <stop offset="20%" stopColor={PIPE_COLORS.highlight} />
            <stop offset="35%" stopColor={PIPE_COLORS.lightOrange} />
            <stop offset="55%" stopColor={PIPE_COLORS.orange} />
            <stop offset="75%" stopColor={PIPE_COLORS.bright} />
            <stop offset="88%" stopColor={PIPE_COLORS.mid} />
            <stop offset="100%" stopColor={PIPE_COLORS.darkest} />
          </radialGradient>
          
          {/* Drop shadow filter */}
          <filter id={`shadow-${direction}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="rgba(124,45,18,0.4)" />
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="rgba(0,0,0,0.2)" />
          </filter>
          
          {/* Inner shadow for depth */}
          <filter id={`inner-${direction}`}>
            <feOffset dx="0" dy="1" />
            <feGaussianBlur stdDeviation="1" result="offset-blur" />
            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
            <feFlood floodColor="rgba(69,26,3,0.3)" result="color" />
            <feComposite operator="in" in="color" in2="inverse" result="shadow" />
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>
        </defs>
        
        {/* Main pipe group with shadow */}
        <g filter={`url(#shadow-${direction})`}>
          {/* Horizontal pipe segment */}
          <rect
            x="4"
            y={(height - pipeThickness) / 2}
            width={width - elbowRadius - 12}
            height={pipeThickness}
            rx="2"
            ry="2"
            fill={`url(#pipe-h-${direction})`}
          />
          
          {/* 90° Elbow - quarter circle arc */}
          <path
            d={`
              M ${width - elbowRadius - 8} ${(height - pipeThickness) / 2}
              Q ${width - 8} ${(height - pipeThickness) / 2} ${width - 8} ${(height - pipeThickness) / 2 + elbowRadius}
              L ${width - 8} ${height - 4}
              L ${width - 8 - pipeThickness} ${height - 4}
              L ${width - 8 - pipeThickness} ${(height - pipeThickness) / 2 + elbowRadius + 2}
              Q ${width - 8 - pipeThickness} ${(height + pipeThickness) / 2} ${width - elbowRadius - 8} ${(height + pipeThickness) / 2}
              Z
            `}
            fill={`url(#elbow-${direction})`}
          />
          
          {/* Vertical segment after elbow */}
          <rect
            x={width - 8 - pipeThickness}
            y={(height - pipeThickness) / 2 + elbowRadius}
            width={pipeThickness}
            height={height - (height - pipeThickness) / 2 - elbowRadius - 4}
            rx="2"
            ry="2"
            fill={`url(#pipe-v-${direction})`}
          />
          
          {/* Left pipe end cap */}
          <circle
            cx="6"
            cy={height / 2}
            r={pipeThickness / 2 - 1}
            fill={`url(#elbow-${direction})`}
            stroke={PIPE_COLORS.dark}
            strokeWidth="0.5"
          />
          
          {/* Inner hole on left end cap */}
          <circle
            cx="6"
            cy={height / 2}
            r={pipeThickness / 4}
            fill={PIPE_COLORS.darkest}
          />
          
          {/* Arrow end cap (down-pointing) */}
          <circle
            cx={width - 8 - pipeThickness / 2}
            cy={height - 6}
            r={pipeThickness / 2 - 1}
            fill={`url(#elbow-${direction})`}
            stroke={PIPE_COLORS.dark}
            strokeWidth="0.5"
          />
          
          {/* Inner hole on arrow end */}
          <circle
            cx={width - 8 - pipeThickness / 2}
            cy={height - 6}
            r={pipeThickness / 4}
            fill={PIPE_COLORS.darkest}
          />
          
          {/* Specular highlight streak on horizontal pipe */}
          <rect
            x="8"
            y={(height - pipeThickness) / 2 + 2}
            width={width - elbowRadius - 20}
            height="2"
            rx="1"
            fill="rgba(255,251,235,0.5)"
          />
        </g>
      </svg>
    </motion.button>
  );
}

export default PipeArrowButton;
