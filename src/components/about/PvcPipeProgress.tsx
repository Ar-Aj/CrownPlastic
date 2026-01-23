'use client';

import { motion, MotionValue, useTransform, useReducedMotion } from 'framer-motion';

// ═══════════════════════════════════════════════════════════════════════════════
// PIPE WITH FLOW COMPONENT
// 
// A two-layer "PVC pipe + water flow" visual that shows:
// - Top half: Solid dark grey pipe body (visible pipe wall)
// - Bottom half: Inner cavity where water flows
// - End caps at both sides (static, don't move with progress)
// 
// VISUAL CONCEPT:
// ┌─────────────────────────────────────────────────────────────┐
// │  ██████████████████  PIPE WALL (dark grey, 3D)  ██████████████████  │
// │  ░░░░░░░░░░░░░░░░░░  WATER CAVITY (transparent/dark)  ░░░░░░░░░░░░  │
// │  ▓▓▓▓▓▓▓▓▓▓▓▓→       WATER FLOW (cyan/blue, glowing)      │
// │  ░░░░░░░░░░░░░░░░░░  WATER CAVITY BOTTOM  ░░░░░░░░░░░░░░░░░░░░░░░░  │
// │  ██████████████████  PIPE WALL BOTTOM  ███████████████████████████  │
// └─────────────────────────────────────────────────────────────┘
// 
// USAGE:
// <PipeWithFlow progress={0.5} /> // 50% filled
// <PipeWithFlow progress={motionValue} /> // animated with Framer Motion
// 
// CUSTOMIZATION:
// - Adjust PIPE_COLORS for pipe body appearance
// - Adjust WATER_COLORS for water flow appearance
// - Modify wave animation in WaterWaveEffect
// ═══════════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────────────
// COLOR CONFIGURATION - Tweak these to adjust the 3D effect
// ─────────────────────────────────────────────────────────────────────────────
const PIPE_COLORS = {
  // Outer pipe body - dark grey with metallic hint
  outerDark: '#1a1d23',
  outerMid: '#2a2e36', 
  outerLight: '#3a3e46',
  outerHighlight: '#4a4e56',
  
  // Inner cavity - darker to show depth
  innerDark: '#0a0d13',
  innerMid: '#15181f',
};

const WATER_COLORS = {
  // Water flow - Crown blue gradient with cyan highlights
  primary: '#0072BC',
  light: '#00a4e4',
  dark: '#005a94',
  glow: 'rgba(56, 189, 248, 0.6)',
  glowOuter: 'rgba(0, 114, 188, 0.4)',
};

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

interface PipeWithFlowProps {
  /** Progress value from 0 (empty) to 1 (full). Can be static number or Framer Motion value */
  progress: number | MotionValue<number>;
  /** Optional className for outer container */
  className?: string;
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export function PipeWithFlow({ progress, className = '' }: PipeWithFlowProps) {
  const prefersReducedMotion = useReducedMotion();
  
  // Transform progress (0-1) to percentage width for the water fill
  const fillWidth = typeof progress === 'number' 
    ? `${Math.max(0, Math.min(100, progress * 100))}%`
    : useTransform(progress, (v) => `${Math.max(0, Math.min(100, v * 100))}%`);

  return (
    <div className={`relative h-6 md:h-7 ${className}`}>
      {/* ═══════════════════════════════════════════════════════════════════════
          LEFT END CAP - Static pipe opening
          - Sits at the left edge, does NOT move with progress
          - Shows the cross-section of the pipe
          ═══════════════════════════════════════════════════════════════════════ */}
      <PipeEndCap position="left" />

      {/* ═══════════════════════════════════════════════════════════════════════
          MAIN PIPE BODY - Two-layer structure
          - Outer layer: Visible pipe wall (dark grey, 3D)
          - Inner layer: Cavity where water flows
          ═══════════════════════════════════════════════════════════════════════ */}
      <div 
        className="absolute inset-y-0 left-3 right-3 rounded-full overflow-hidden"
        style={{
          // Outer pipe surface - 3D cylindrical gradient
          background: `linear-gradient(to bottom,
            ${PIPE_COLORS.outerDark} 0%,
            ${PIPE_COLORS.outerMid} 10%,
            ${PIPE_COLORS.outerLight} 25%,
            ${PIPE_COLORS.outerHighlight} 40%,
            ${PIPE_COLORS.outerHighlight} 45%,
            ${PIPE_COLORS.outerLight} 55%,
            ${PIPE_COLORS.outerMid} 75%,
            ${PIPE_COLORS.outerDark} 100%
          )`,
          boxShadow: `
            0 2px 8px rgba(0, 0, 0, 0.4),
            inset 0 2px 4px rgba(0, 0, 0, 0.3)
          `,
        }}
      >
        {/* ─────────────────────────────────────────────────────────────────────
            TOP PIPE WALL - Visible solid portion (top ~35%)
            This creates the "half pipe" effect where you see the wall
            ───────────────────────────────────────────────────────────────────── */}
        <div 
          className="absolute top-0 left-0 right-0 h-[35%] pointer-events-none"
          style={{
            background: `linear-gradient(to bottom,
              ${PIPE_COLORS.outerDark} 0%,
              ${PIPE_COLORS.outerMid} 40%,
              ${PIPE_COLORS.outerLight} 100%
            )`,
          }}
        />

        {/* ─────────────────────────────────────────────────────────────────────
            TOP HIGHLIGHT - Simulates light on cylindrical surface
            ───────────────────────────────────────────────────────────────────── */}
        <div 
          className="absolute top-0 left-0 right-0 h-[20%] rounded-t-full pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, transparent 100%)',
          }}
        />

        {/* ─────────────────────────────────────────────────────────────────────
            INNER CAVITY - The hollow center where water flows
            Darker to show depth, positioned in the middle
            ───────────────────────────────────────────────────────────────────── */}
        <div 
          className="absolute top-[30%] bottom-[30%] left-0 right-0 overflow-hidden"
          style={{
            background: `linear-gradient(to bottom,
              ${PIPE_COLORS.innerDark} 0%,
              ${PIPE_COLORS.innerMid} 50%,
              ${PIPE_COLORS.innerDark} 100%
            )`,
            boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.8)',
          }}
        >
          {/* ───────────────────────────────────────────────────────────────────
              WATER FLOW - Animated fill inside the cavity
              
              Width controlled by progress (0-1 → 0-100%)
              Gradient creates 3D liquid appearance
              Glow effect simulates pressurized/lit water
              ─────────────────────────────────────────────────────────────────── */}
          <motion.div
            className="absolute inset-y-0 left-0 rounded-r-full"
            style={{
              width: fillWidth,
              // Water gradient - bright cyan to royal blue
              background: `linear-gradient(to bottom,
                ${WATER_COLORS.light} 0%,
                ${WATER_COLORS.primary} 30%,
                ${WATER_COLORS.dark} 60%,
                ${WATER_COLORS.primary} 100%
              )`,
              // Glow effect for "glowing water" look
              boxShadow: `
                0 0 12px ${WATER_COLORS.glow},
                0 0 24px ${WATER_COLORS.glowOuter},
                inset 0 1px 2px rgba(255, 255, 255, 0.5)
              `,
            }}
          >
            {/* Water surface highlight */}
            <div 
              className="absolute top-0 left-0 right-0 h-[45%]"
              style={{
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                borderRadius: 'inherit',
              }}
            />
            
            {/* Wave/ripple effect - subtle horizontal shimmer */}
            {!prefersReducedMotion && <WaterWaveEffect />}
            
            {/* Leading edge glow - brighter at the flow front */}
            <div 
              className="absolute right-0 top-0 bottom-0 w-4"
              style={{
                background: `linear-gradient(to left, 
                  rgba(56, 189, 248, 0.8) 0%, 
                  rgba(56, 189, 248, 0.3) 50%,
                  transparent 100%
                )`,
                borderRadius: 'inherit',
              }}
            />
          </motion.div>
        </div>

        {/* ─────────────────────────────────────────────────────────────────────
            BOTTOM PIPE WALL - Visible solid portion (bottom ~35%)
            ───────────────────────────────────────────────────────────────────── */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[35%] pointer-events-none"
          style={{
            background: `linear-gradient(to top,
              ${PIPE_COLORS.outerDark} 0%,
              ${PIPE_COLORS.outerMid} 40%,
              ${PIPE_COLORS.outerLight} 100%
            )`,
          }}
        />

        {/* ─────────────────────────────────────────────────────────────────────
            BOTTOM SHADOW - Enhances 3D depth
            ───────────────────────────────────────────────────────────────────── */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[15%] rounded-b-full pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)',
          }}
        />

        {/* ─────────────────────────────────────────────────────────────────────
            PIPE RINGS - Subtle joint markers
            ───────────────────────────────────────────────────────────────────── */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background: `repeating-linear-gradient(90deg,
              transparent 0px,
              transparent 100px,
              rgba(0, 0, 0, 0.2) 100px,
              rgba(0, 0, 0, 0.2) 102px,
              rgba(255, 255, 255, 0.05) 102px,
              rgba(255, 255, 255, 0.05) 103px,
              transparent 103px
            )`,
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          RIGHT END CAP - Static pipe ending
          - Sits at the right edge, does NOT move with progress
          ═══════════════════════════════════════════════════════════════════════ */}
      <PipeEndCap position="right" />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PIPE END CAP - Circular cap at pipe ends
// ═══════════════════════════════════════════════════════════════════════════════

function PipeEndCap({ position }: { position: 'left' | 'right' }) {
  const isLeft = position === 'left';
  
  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 md:w-7 md:h-7 rounded-full z-10 ${
        isLeft ? 'left-0' : 'right-0'
      }`}
      style={{
        // Outer cap - 3D convex surface
        background: `radial-gradient(circle at ${isLeft ? '35%' : '65%'} 35%,
          ${PIPE_COLORS.outerHighlight} 0%,
          ${PIPE_COLORS.outerLight} 30%,
          ${PIPE_COLORS.outerMid} 60%,
          ${PIPE_COLORS.outerDark} 100%
        )`,
        boxShadow: `
          0 2px 6px rgba(0, 0, 0, 0.5),
          inset 0 1px 3px rgba(255, 255, 255, 0.2)
        `,
      }}
    >
      {/* Inner ring - shows pipe wall thickness */}
      <div
        className="absolute inset-[4px] md:inset-[5px] rounded-full"
        style={{
          background: `radial-gradient(circle at ${isLeft ? '35%' : '65%'} 35%,
            ${PIPE_COLORS.innerMid} 0%,
            ${PIPE_COLORS.innerDark} 100%
          )`,
          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.8)',
        }}
      />
      
      {/* Highlight reflection */}
      <div
        className={`absolute top-1 ${isLeft ? 'left-1' : 'right-1'} w-2 h-2 rounded-full`}
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// WATER WAVE EFFECT - Subtle animated shimmer
// ═══════════════════════════════════════════════════════════════════════════════

function WaterWaveEffect() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `repeating-linear-gradient(90deg,
          transparent 0px,
          transparent 20px,
          rgba(255, 255, 255, 0.1) 25px,
          transparent 30px,
          transparent 50px
        )`,
        backgroundSize: '100px 100%',
      }}
      animate={{
        backgroundPositionX: ['0px', '100px'],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// LEGACY EXPORT - Keep backward compatibility
// ═══════════════════════════════════════════════════════════════════════════════

export { PipeWithFlow as PvcPipeProgress };
