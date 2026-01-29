'use client';

import { useRef, useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// ═══════════════════════════════════════════════════════════════════════════════
// PREMIUM PIPE FRAME SYSTEM - Hardware Module Aesthetic
// ═══════════════════════════════════════════════════════════════════════════════
//
// A realistic 3D pipe frame component designed to look like polished PVC/conduit
// hardware modules suitable for premium product catalogues and landing pages.
//
// ┌─────────────────────────────────────────────────────────────────────────────┐
// │ VARIANTS                                                                    │
// ├─────────────────────────────────────────────────────────────────────────────┤
// │ 'image-frame' - Hero visual frame                                          │
// │   • Thicker pipes (16px default) with strong gloss                         │
// │   • Wire junction blocks at all 4 corners                                  │
// │   • Subtle inner vignette to anchor image                                  │
// │   • Use for: factory photos, product shots, hero imagery                   │
// │                                                                             │
// │ 'text-frame' - Content frame                                               │
// │   • Thinner pipes (~80% of image-frame)                                    │
// │   • Wire junction blocks at all 4 corners                                  │
// │   • Subtle drop shadow to lift off background                              │
// │   • Use for: text blocks, cards, secondary content                         │
// │                                                                             │
// │ 'top-bottom' - Mobile simplified                                           │
// │   • Horizontal pipes only with sealed end caps                             │
// │   • No corner wires (cleaner on small screens)                             │
// │   • Use for: mobile layouts where full frame is too heavy                  │
// └─────────────────────────────────────────────────────────────────────────────┘
//
// ┌─────────────────────────────────────────────────────────────────────────────┐
// │ TUNABLE KNOBS                                                               │
// ├─────────────────────────────────────────────────────────────────────────────┤
// │ PIPE_MATERIAL - Gradient stops for 3D pipe shading                         │
// │   Adjust stop positions/colors for different material looks                │
// │                                                                             │
// │ WIRE_PALETTE - Wire colors and properties                                  │
// │   Change colors/counts for different cable aesthetics                      │
// │   Mostly neutrals + 2-3 brand accents = industrial look                    │
// │                                                                             │
// │ thickness prop - Pipe diameter in pixels                                   │
// │ cornerRadius prop - How rounded the corners are                            │
// │ showCornerWires prop - Toggle wire junctions on/off                        │
// └─────────────────────────────────────────────────────────────────────────────┘
//
// DESIGN SYSTEM CONSISTENCY:
// - Both variants share identical pipe material, light direction, and wire style
// - Light direction: top-left (highlight at 0-15%, shadow at 85-100%)
// - Brand accent: subtle sky-blue reflection at ~20% of pipe thickness
//
// ═══════════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════════
// HYPER-REAL 3D CYLINDER LIGHTING MODEL
// ═══════════════════════════════════════════════════════════════════════════════
//
// LIGHTING MODEL:
// Light direction: normalized(-1, -1, 0.5) ≈ top-left/front
// For a cylinder, brightness = max(0, dot(surfaceNormal, lightDir))
//
// Cross-section of a horizontal pipe (top view, light from top-left):
//           │ Light
//           ↓ ╲
//    ┌───────────┐
//    │ HIGHLIGHT │ ← Normal faces light (dot ≈ 1.0)
//    │  bright   │
//    ├───────────┤
//    │ FALLOFF   │ ← Normal ~45° from light (dot ≈ 0.7)
//    │  rapid    │
//    ├───────────┤
//    │ MID-TONE  │ ← Normal perpendicular (dot ≈ 0.3-0.5)
//    │  diffuse  │
//    ├───────────┤
//    │ SHADOW    │ ← Normal away from light (dot ≈ 0)
//    │  dark     │
//    ├───────────┤
//    │ RIM LIGHT │ ← Environment/backscatter (thin bright edge)
//    └───────────┘
//
// GRADIENT STOP POSITIONS (based on cylinder geometry):
// - Highlight peak at ~15% (where normal · light ≈ 1)
// - Sharp falloff 15-30% (cosine falloff is steep)
// - Mid-tone plateau 30-65%
// - Shadow zone 65-92%
// - Rim light 92-100%
//
// HORIZONTAL vs VERTICAL PIPES:
// - Horizontal: We see the pipe from slightly above, so highlight is
//   offset upward (gradient runs top→bottom, highlight at 12-18%)
// - Vertical: We see it from slightly left, so highlight is offset left
//   (gradient runs left→right, highlight at 10-16%)
//
// MATERIAL IDENTITY:
// - METALLIC (blue-grey): Tight specular (6%), strong rim, cooler shadows
// - PLASTIC (orange): Broader specular (10%), diffuse falloff, warmer
//
// ═══════════════════════════════════════════════════════════════════════════════

// 3D INTENSITY CONTROLS - Adjust these to tune the lighting model
// Higher values = more "rendered 3D" look
const HIGHLIGHT_INTENSITY = 0.95;   // 0-1: Peak brightness of specular
const HIGHLIGHT_SHARPNESS = 0.85;   // 0-1: How tight the specular band is
const SHADOW_DEPTH = 0.8;           // 0-1: How dark the shadow side gets
const RIM_LIGHT_INTENSITY = 0.35;   // 0-1: Environment backscatter
const AO_STRENGTH = 0.5;            // 0-1: Contact shadow inside frame

// Computed values from light model
const SPECULAR_WIDTH = 8 - (HIGHLIGHT_SHARPNESS * 5); // 3-8% band
const SHADOW_START = 60 + (SHADOW_DEPTH * 10); // 60-70%
const RIM_WIDTH = 6 + (RIM_LIGHT_INTENSITY * 4); // 6-10%

// ═══════════════════════════════════════════════════════════════════════════════
// BLUE-GREY MATERIAL (image-frame) - METALLIC CHARACTER
// Tight specular, strong rim light, cool shadows
// ═══════════════════════════════════════════════════════════════════════════════
const PIPE_MATERIAL = {
  // HORIZONTAL PIPE - Light from top, we see upper surface
  // Highlight band positioned 12-18% (upper quadrant of cylinder)
  horizontal: `linear-gradient(to bottom,
    #0f172a 0%,
    #1e293b 3%,
    #334155 8%,
    #475569 11%,
    #ffffff ${12}%,
    #f8fafc ${12 + SPECULAR_WIDTH * 0.4}%,
    #e2e8f0 ${12 + SPECULAR_WIDTH}%,
    rgba(56,189,248,0.4) ${18}%,
    rgba(14,165,233,0.2) ${24}%,
    #94a3b8 30%,
    #78909c 42%,
    #64748b 55%,
    #475569 ${SHADOW_START}%,
    #334155 ${SHADOW_START + 12}%,
    #1e293b ${SHADOW_START + 22}%,
    #0f172a ${100 - RIM_WIDTH}%,
    rgba(100,116,139,${RIM_LIGHT_INTENSITY * 0.5}) ${100 - RIM_WIDTH + 3}%,
    rgba(148,163,184,${RIM_LIGHT_INTENSITY * 0.7}) 100%
  )`,
  
  // VERTICAL PIPE - Light from left, we see left surface
  // Highlight band positioned 10-16% (left quadrant, slightly earlier)
  vertical: `linear-gradient(to right,
    #0f172a 0%,
    #1e293b 3%,
    #334155 6%,
    #475569 9%,
    #ffffff ${10}%,
    #f8fafc ${10 + SPECULAR_WIDTH * 0.4}%,
    #e2e8f0 ${10 + SPECULAR_WIDTH}%,
    rgba(56,189,248,0.4) ${16}%,
    rgba(14,165,233,0.2) ${22}%,
    #94a3b8 28%,
    #78909c 40%,
    #64748b 52%,
    #475569 ${SHADOW_START - 2}%,
    #334155 ${SHADOW_START + 10}%,
    #1e293b ${SHADOW_START + 20}%,
    #0f172a ${100 - RIM_WIDTH}%,
    rgba(100,116,139,${RIM_LIGHT_INTENSITY * 0.5}) ${100 - RIM_WIDTH + 3}%,
    rgba(148,163,184,${RIM_LIGHT_INTENSITY * 0.7}) 100%
  )`,
  
  // Inner wall (looking into hollow pipe)
  innerRim: `0 0 0 1.5px rgba(15,23,42,0.75) inset, 0 0 3px 1px rgba(0,0,0,0.25) inset`,
  
  // Contact shadow + ambient occlusion inside frame
  contactShadow: `inset 0 0 ${8 + AO_STRENGTH * 8}px ${4 + AO_STRENGTH * 4}px rgba(15,23,42,${AO_STRENGTH * 0.35})`,
  
  // Outer lift shadow (frame floats above background)
  outerGlow: `0 4px 16px rgba(0,0,0,0.25), 0 2px 6px rgba(0,0,0,0.15), 0 0 20px rgba(56,189,248,0.08)`,
  
  // Elbow fitting colors (radial gradient stops)
  elbow: {
    innerWall: '#0f172a',
    highlight: '#ffffff',
    highlightFade: '#e2e8f0',
    reflection: 'rgba(56,189,248,0.45)',
    midTone: '#78909c',
    shadow: '#334155',
    outerRim: '#0f172a',
    rimLight: `rgba(148,163,184,${RIM_LIGHT_INTENSITY})`,
  },
  
  // Bevel ring at elbow joints
  bevelRing: 'rgba(51,65,85,0.6)',
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// ORANGE MATERIAL (text-frame) - PLASTIC PVC CHARACTER
// Broader specular, diffuse falloff, warmer shadows
// ═══════════════════════════════════════════════════════════════════════════════
const PLASTIC_SPECULAR_WIDTH = SPECULAR_WIDTH * 1.4; // Plastic = broader highlight
const PLASTIC_SHADOW_START = SHADOW_START + 5; // Plastic = softer shadow transition

const ORANGE_PIPE_MATERIAL = {
  // HORIZONTAL PIPE - Light from top, plastic diffuse character
  // Highlight band 14-22% (broader than metal)
  horizontal: `linear-gradient(to bottom,
    #451a03 0%,
    #7c2d12 3%,
    #9a3412 8%,
    #b45309 11%,
    #fffbeb ${14}%,
    #fef3c7 ${14 + PLASTIC_SPECULAR_WIDTH * 0.3}%,
    #fde68a ${14 + PLASTIC_SPECULAR_WIDTH * 0.6}%,
    #fcd34d ${14 + PLASTIC_SPECULAR_WIDTH}%,
    rgba(251,191,36,0.5) ${22}%,
    #fb923c 28%,
    #f97316 40%,
    #ea580c 52%,
    #c2410c ${PLASTIC_SHADOW_START}%,
    #9a3412 ${PLASTIC_SHADOW_START + 12}%,
    #7c2d12 ${PLASTIC_SHADOW_START + 20}%,
    #451a03 ${100 - RIM_WIDTH}%,
    rgba(194,65,12,${RIM_LIGHT_INTENSITY * 0.4}) ${100 - RIM_WIDTH + 3}%,
    rgba(251,146,60,${RIM_LIGHT_INTENSITY * 0.55}) 100%
  )`,
  
  // VERTICAL PIPE - Light from left, plastic character
  // Highlight band 12-20%
  vertical: `linear-gradient(to right,
    #451a03 0%,
    #7c2d12 3%,
    #9a3412 6%,
    #b45309 9%,
    #fffbeb ${12}%,
    #fef3c7 ${12 + PLASTIC_SPECULAR_WIDTH * 0.3}%,
    #fde68a ${12 + PLASTIC_SPECULAR_WIDTH * 0.6}%,
    #fcd34d ${12 + PLASTIC_SPECULAR_WIDTH}%,
    rgba(251,191,36,0.5) ${20}%,
    #fb923c 26%,
    #f97316 38%,
    #ea580c 50%,
    #c2410c ${PLASTIC_SHADOW_START - 2}%,
    #9a3412 ${PLASTIC_SHADOW_START + 10}%,
    #7c2d12 ${PLASTIC_SHADOW_START + 18}%,
    #451a03 ${100 - RIM_WIDTH}%,
    rgba(194,65,12,${RIM_LIGHT_INTENSITY * 0.4}) ${100 - RIM_WIDTH + 3}%,
    rgba(251,146,60,${RIM_LIGHT_INTENSITY * 0.55}) 100%
  )`,
  
  // Inner wall with warm tone
  innerRim: `0 0 0 1.5px rgba(69,26,3,0.75) inset, 0 0 3px 1px rgba(124,45,18,0.3) inset`,
  
  // Contact shadow with warm tint
  contactShadow: `inset 0 0 ${8 + AO_STRENGTH * 8}px ${4 + AO_STRENGTH * 4}px rgba(69,26,3,${AO_STRENGTH * 0.3})`,
  
  // Outer lift shadow (warmer)
  outerGlow: `0 4px 14px rgba(124,45,18,0.3), 0 2px 5px rgba(154,52,18,0.2), 0 0 16px rgba(251,146,60,0.1)`,
  
  // Elbow fitting colors
  elbow: {
    innerWall: '#451a03',
    highlight: '#fffbeb',
    highlightFade: '#fde68a',
    reflection: 'rgba(251,191,36,0.5)',
    midTone: '#f97316',
    shadow: '#9a3412',
    outerRim: '#451a03',
    rimLight: `rgba(251,146,60,${RIM_LIGHT_INTENSITY * 0.8})`,
  },
  
  // Bevel ring at elbow joints
  bevelRing: 'rgba(154,52,18,0.55)',
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// WIRE PALETTE - Realistic data/power cable bundle
// ═══════════════════════════════════════════════════════════════════════════════
//
// Concept: Telecom/industrial cables - mostly neutral with strategic accents
// Not a "rainbow" - more like what you'd find inside a junction box
//
// Each wire: { color, width, offset, zIndex }
// - color: Wire insulation color
// - width: Stroke thickness (1.0-2.5px for realistic variation)
// - offset: Radial position from center (creates natural bundling)
// - zIndex: Drawing order (higher = rendered on top for overlaps)
//
// To adjust:
// - More cables: add entries (keep under 12 for performance)
// - Different palette: swap colors (keep 60%+ neutral, 40% accent max)
// - Tighter bundle: reduce offset range (currently 0-10)
// - Messier bundle: increase offset variation and add more randomness

const WIRE_PALETTE = [
  // Neutral base cables (ground, shielding)
  { color: '#374151', width: 2.2, offset: 0, zIndex: 1 },    // Dark grey (thick main cable)
  { color: '#6b7280', width: 1.8, offset: 2.8, zIndex: 3 },  // Medium grey
  { color: '#9ca3af', width: 1.5, offset: 5.2, zIndex: 2 },  // Light grey
  { color: '#4b5563', width: 1.6, offset: 8.0, zIndex: 4 },  // Grey
  { color: '#d1d5db', width: 1.3, offset: 3.5, zIndex: 5 },  // Very light grey (signal)
  
  // Brand accent cables (power, data lines)
  { color: '#0ea5e9', width: 1.7, offset: 6.5, zIndex: 7 },  // Sky blue (brand)
  { color: '#38bdf8', width: 1.4, offset: 1.5, zIndex: 6 },  // Light blue
  { color: '#f97316', width: 1.5, offset: 9.0, zIndex: 8 },  // Orange (power)
  { color: '#fbbf24', width: 1.2, offset: 4.8, zIndex: 9 },  // Amber (caution)
];

// ═══════════════════════════════════════════════════════════════════════════════
// JUNCTION BLOCK COMPONENT - Wire Corner with Elbow
// ═══════════════════════════════════════════════════════════════════════════════
//
// Renders a 90° corner elbow with multi-wire bundle.
//
// DESIGN NOTES:
// - We intentionally avoid a strong inner dark disk/circle. Instead, the elbow
//   surface has only subtle shading that blends with the pipe material.
// - Both image-frame and text-frame use identical geometry logic for consistency.
// - Wires sit directly on the elbow surface following the quarter-circle curve.
// - The elbow uses a radial gradient matching top-left light direction.
//

interface JunctionBlockProps {
  position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  size: number;      // Corner radius
  thickness: number; // Pipe thickness
  wireCount?: number; // Optional: limit wire count (default: all)
  useOrangeMaterial?: boolean; // Use orange pipe material for text-frame
}

function JunctionBlock({ 
  position, 
  size, 
  thickness,
  wireCount = WIRE_PALETTE.length,
  useOrangeMaterial = false,
}: JunctionBlockProps) {
  const t = thickness;
  const r = size;
  // Junction exactly matches corner radius + half thickness for proper alignment
  const junctionSize = r + t * 0.5;
  
  // Position the junction block at each corner - aligned with pipe endpoints
  const posStyles: Record<string, React.CSSProperties> = {
    topLeft: { top: -t * 0.5, left: -t * 0.5 },
    topRight: { top: -t * 0.5, right: -t * 0.5 },
    bottomLeft: { bottom: -t * 0.5, left: -t * 0.5 },
    bottomRight: { bottom: -t * 0.5, right: -t * 0.5 },
  };

  // Generate wire paths - quarter-circle arcs following the elbow curve
  // All corners use the same geometry approach for consistency
  const getWirePath = (wire: typeof WIRE_PALETTE[0], index: number) => {
    const jitter = (index % 3 - 1) * 0.3;
    const offset = wire.offset * 0.7 + jitter;
    // Arc radius decreases with offset (inner wires have tighter curves)
    const arcR = r - offset * 0.8;
    // Start position along the pipe thickness
    const inset = t * 0.35 + offset * 0.5;
    
    switch (position) {
      case 'topLeft':
        // Arc from right edge to bottom edge
        return `M ${junctionSize} ${inset} A ${arcR} ${arcR} 0 0 0 ${inset} ${junctionSize}`;
      case 'topRight':
        // Arc from left edge to bottom edge
        return `M ${inset} ${inset} A ${arcR} ${arcR} 0 0 1 ${junctionSize - inset} ${junctionSize}`;
      case 'bottomLeft':
        // Arc from right edge to top edge
        return `M ${junctionSize} ${junctionSize - inset} A ${arcR} ${arcR} 0 0 1 ${inset} ${inset}`;
      case 'bottomRight':
        // Arc from left edge to top edge  
        return `M ${inset} ${junctionSize - inset} A ${arcR} ${arcR} 0 0 0 ${junctionSize - inset} ${inset}`;
      default:
        return '';
    }
  };

  // Sort wires by zIndex for proper layering
  const sortedWires = useMemo(() => 
    [...WIRE_PALETTE]
      .slice(0, wireCount)
      .sort((a, b) => a.zIndex - b.zIndex),
    [wireCount]
  );

  // Unique gradient ID for this corner
  const gradId = `junction-shade-${position}`;
  
  // Elbow gradient center positioned to match top-left light source
  // Highlight appears on the side facing the light
  const elbowGradientCenter = {
    topLeft: '80% 80%',
    topRight: '20% 80%',
    bottomLeft: '80% 20%',
    bottomRight: '20% 20%',
  }[position];
  
  // Get material-specific elbow colors
  const elbowColors = useOrangeMaterial ? ORANGE_PIPE_MATERIAL.elbow : PIPE_MATERIAL.elbow;
  
  // Inner rim color (darker for wall thickness illusion)
  const innerRimColor = useOrangeMaterial ? 'rgba(69,26,3,0.7)' : 'rgba(15,23,42,0.6)';

  return (
    <div 
      className="absolute"
      style={{
        ...posStyles[position],
        width: junctionSize,
        height: junctionSize,
        overflow: 'visible',
      }}
    >
      {/* SVG for elbow and wires */}
      <svg
        className="absolute"
        style={{ width: junctionSize, height: junctionSize }}
        viewBox={`0 0 ${junctionSize} ${junctionSize}`}
        aria-hidden="true"
      >
        <defs>
          {/* ═══════════════════════════════════════════════════════════════
              ELBOW RADIAL GRADIENT - Conical 3D shading
              Light direction: top-left, so brightest zone faces that corner.
              4 intensity zones: highlight → falloff → midtone → shadow → rim
          ═══════════════════════════════════════════════════════════════ */}
          <radialGradient 
            id={`elbow-fill-${position}`}
            cx={elbowGradientCenter.split(' ')[0]}
            cy={elbowGradientCenter.split(' ')[1]}
            r="95%"
          >
            {/* Zone 1: Inner wall (looking into the pipe bend) */}
            <stop offset="0%" stopColor={elbowColors.innerWall} stopOpacity="0.7" />
            {/* Zone 2: Specular highlight (tight, bright band) */}
            <stop offset="4%" stopColor={elbowColors.highlight} stopOpacity="1" />
            <stop offset="8%" stopColor={elbowColors.highlightFade} stopOpacity="0.95" />
            {/* Zone 3: Reflection band (environment color) */}
            <stop offset="14%" stopColor={elbowColors.reflection} stopOpacity="1" />
            {/* Zone 4: Mid-tone diffuse body */}
            <stop offset="28%" stopColor={elbowColors.midTone} stopOpacity="1" />
            <stop offset="48%" stopColor={elbowColors.shadow} stopOpacity="1" />
            {/* Zone 5: Shadow region */}
            <stop offset="70%" stopColor={elbowColors.outerRim} stopOpacity="1" />
            <stop offset="88%" stopColor={elbowColors.outerRim} stopOpacity="1" />
            {/* Zone 6: Rim light (backscatter from environment) */}
            <stop offset="100%" stopColor={elbowColors.rimLight} stopOpacity="1" />
          </radialGradient>
          
          {/* Gradient for wire highlights */}
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#fff" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {/* Outer shadow layer for depth separation */}
        <path
          d={getElbowArcPath(position, junctionSize, t * 1.15, r)}
          fill="none"
          stroke="rgba(0,0,0,0.18)"
          strokeWidth={t * 1.2}
          strokeLinecap="round"
          style={{ filter: 'blur(1.5px)' }}
        />
        
        {/* Main elbow arc - the 3D pipe corner fitting */}
        <path
          d={getElbowArcPath(position, junctionSize, t, r)}
          fill="none"
          stroke={`url(#elbow-fill-${position})`}
          strokeWidth={t}
          strokeLinecap="round"
        />
        
        {/* ═══════════════════════════════════════════════════════════════
            BEVEL RINGS - Joint between straight segment and elbow
            Small arcs at each end suggesting welded/joined fittings
        ═══════════════════════════════════════════════════════════════ */}
        {(() => {
          const bevelColor = useOrangeMaterial ? ORANGE_PIPE_MATERIAL.bevelRing : PIPE_MATERIAL.bevelRing;
          const bevelW = t * 0.12;
          const offset = t * 0.5;
          // Get bevel ring paths based on position
          const getBevelPaths = () => {
            switch (position) {
              case 'topLeft':
                return [
                  `M ${junctionSize - offset} ${offset * 0.8} L ${junctionSize - offset} ${offset * 1.3}`,
                  `M ${offset * 0.8} ${junctionSize - offset} L ${offset * 1.3} ${junctionSize - offset}`,
                ];
              case 'topRight':
                return [
                  `M ${offset} ${offset * 0.8} L ${offset} ${offset * 1.3}`,
                  `M ${junctionSize - offset * 0.8} ${junctionSize - offset} L ${junctionSize - offset * 1.3} ${junctionSize - offset}`,
                ];
              case 'bottomLeft':
                return [
                  `M ${junctionSize - offset} ${junctionSize - offset * 0.8} L ${junctionSize - offset} ${junctionSize - offset * 1.3}`,
                  `M ${offset * 0.8} ${offset} L ${offset * 1.3} ${offset}`,
                ];
              case 'bottomRight':
                return [
                  `M ${offset} ${junctionSize - offset * 0.8} L ${offset} ${junctionSize - offset * 1.3}`,
                  `M ${junctionSize - offset * 0.8} ${offset} L ${junctionSize - offset * 1.3} ${offset}`,
                ];
              default:
                return [];
            }
          };
          return getBevelPaths().map((d, i) => (
            <path
              key={i}
              d={d}
              stroke={bevelColor}
              strokeWidth={bevelW}
              strokeLinecap="round"
              fill="none"
            />
          ));
        })()}
        
        {/* Inner rim - suggests hollow pipe wall thickness */}
        <path
          d={getElbowArcPath(position, junctionSize, t * 0.12, r - t * 0.42)}
          fill="none"
          stroke={innerRimColor}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        
        {/* Render wire bundle on top of elbow */}
        {sortedWires.map((wire, i) => (
          <g key={i}>
            {/* Wire shadow for depth */}
            <path
              d={getWirePath(wire, i)}
              stroke="rgba(0,0,0,0.25)"
              strokeWidth={wire.width + 0.8}
              fill="none"
              strokeLinecap="round"
              style={{ transform: 'translate(0.3px, 0.3px)' }}
            />
            {/* Main wire */}
            <path
              d={getWirePath(wire, i)}
              stroke={wire.color}
              strokeWidth={wire.width}
              fill="none"
              strokeLinecap="round"
            />
            {/* Subtle highlight */}
            <path
              d={getWirePath(wire, i)}
              stroke={`url(#${gradId})`}
              strokeWidth={wire.width * 0.4}
              fill="none"
              strokeLinecap="round"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

// Helper: Generate quarter-circle arc path for elbow
function getElbowArcPath(
  position: string,
  size: number,
  thickness: number,
  radius: number
): string {
  const s = size;
  const offset = thickness * 0.5;
  const arcR = radius;
  
  switch (position) {
    case 'topLeft':
      return `M ${s} ${offset} A ${arcR} ${arcR} 0 0 0 ${offset} ${s}`;
    case 'topRight':
      return `M ${offset} ${offset} A ${arcR} ${arcR} 0 0 1 ${s - offset} ${s}`;
    case 'bottomLeft':
      return `M ${s} ${s - offset} A ${arcR} ${arcR} 0 0 1 ${offset} ${offset}`;
    case 'bottomRight':
      return `M ${offset} ${s - offset} A ${arcR} ${arcR} 0 0 0 ${s - offset} ${offset}`;
    default:
      return '';
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// VOLUMETRIC ELBOW COMPONENT - 3D Corner Piece
// ═══════════════════════════════════════════════════════════════════════════════
//
// Renders a solid pipe elbow (no wires) with proper 3D shading.
// Used when showCornerWires=false or for sealed pipe aesthetics.

interface VolumetricElbowProps {
  position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  size: number;
  thickness: number;
}

function VolumetricElbow({ position, size, thickness }: VolumetricElbowProps) {
  const t = thickness;
  const r = size;
  const elbowSize = r + t * 0.5;

  const posStyles: Record<string, React.CSSProperties> = {
    topLeft: { top: -t * 0.5, left: -t * 0.5 },
    topRight: { top: -t * 0.5, right: -t * 0.5 },
    bottomLeft: { bottom: -t * 0.5, left: -t * 0.5 },
    bottomRight: { bottom: -t * 0.5, right: -t * 0.5 },
  };

  // SVG elbow path with 3D gradient
  const gradId = `elbow-grad-${position}`;
  
  return (
    <div
      className="absolute"
      style={{
        ...posStyles[position],
        width: elbowSize,
        height: elbowSize,
        overflow: 'visible',
      }}
    >
      <svg
        className="absolute"
        style={{ width: elbowSize, height: elbowSize }}
        viewBox={`0 0 ${elbowSize} ${elbowSize}`}
        aria-hidden="true"
      >
        <defs>
          {/* ═══════════════════════════════════════════════════════════════
              VOLUMETRIC ELBOW GRADIENT - Metallic character
              Same lighting model as JunctionBlock but for sealed elbows
          ═══════════════════════════════════════════════════════════════ */}
          <radialGradient 
            id={gradId}
            cx={position.includes('Right') ? '20%' : '80%'}
            cy={position.includes('bottom') ? '20%' : '80%'}
            r="95%"
          >
            {/* Zone 1: Inner wall */}
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.7" />
            {/* Zone 2: Specular highlight (metallic: tight) */}
            <stop offset="4%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="8%" stopColor="#e2e8f0" stopOpacity="0.95" />
            {/* Zone 3: Reflection band */}
            <stop offset="14%" stopColor={`rgba(56,189,248,${0.4 * HIGHLIGHT_INTENSITY})`} stopOpacity="1" />
            {/* Zone 4: Mid-tone body */}
            <stop offset="28%" stopColor="#78909c" stopOpacity="1" />
            <stop offset="48%" stopColor="#334155" stopOpacity="1" />
            {/* Zone 5: Shadow region */}
            <stop offset="70%" stopColor="#0f172a" stopOpacity="1" />
            <stop offset="88%" stopColor="#0f172a" stopOpacity="1" />
            {/* Zone 6: Rim light */}
            <stop offset="100%" stopColor={`rgba(148,163,184,${RIM_LIGHT_INTENSITY})`} stopOpacity="1" />
          </radialGradient>
        </defs>
        
        {/* Outer shadow for depth */}
        <path
          d={getElbowPath(position, elbowSize, t * 1.15, r, 'outer')}
          fill="none"
          stroke="rgba(0,0,0,0.18)"
          strokeWidth={t * 1.2}
          strokeLinecap="round"
          style={{ filter: 'blur(1.5px)' }}
        />
        
        {/* Main elbow arc */}
        <path
          d={getElbowPath(position, elbowSize, t, r, 'outer')}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth={t}
          strokeLinecap="round"
        />
        
        {/* Inner shadow line (wall thickness) */}
        <path
          d={getElbowPath(position, elbowSize, t * 0.3, r - t * 0.35, 'inner')}
          fill="none"
          stroke="rgba(15,23,42,0.5)"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

// Helper: Generate elbow path for different corners
function getElbowPath(
  position: string,
  size: number,
  thickness: number,
  radius: number,
  type: 'outer' | 'inner'
): string {
  const s = size;
  const t = thickness;
  const r = radius;
  const offset = type === 'inner' ? t * 0.2 : t * 0.5;
  
  switch (position) {
    case 'topLeft':
      return `M ${s} ${offset} A ${r} ${r} 0 0 0 ${offset} ${s}`;
    case 'topRight':
      return `M ${offset} ${offset} A ${r} ${r} 0 0 1 ${s - offset} ${s}`;
    case 'bottomLeft':
      return `M ${s} ${s - offset} A ${r} ${r} 0 0 1 ${offset} ${offset}`;
    case 'bottomRight':
      return `M ${offset} ${s - offset} A ${r} ${r} 0 0 0 ${s - offset} ${offset}`;
    default:
      return '';
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// PIPE FRAME COMPONENT - Main Frame Primitive
// ═══════════════════════════════════════════════════════════════════════════════

interface PipeFrameProps {
  children: React.ReactNode;
  className?: string;
  /** Pipe diameter in pixels. image-frame default: 16, text-frame default: 13 */
  thickness?: number;
  /** Corner radius in pixels */
  cornerRadius?: number;
  /** Frame variant - determines thickness, shadow, and styling preset */
  variant?: 'image-frame' | 'text-frame' | 'top-bottom';
  /** Whether to show wire junction blocks at corners (default: true for main variants) */
  showCornerWires?: boolean;
}

function PipeFrame({
  children,
  className,
  thickness,
  cornerRadius,
  variant = 'image-frame',
  showCornerWires = true,
}: PipeFrameProps) {
  // Variant-specific defaults
  const variantConfig = {
    'image-frame': { defaultThickness: 16, defaultRadius: 32, shadow: true, vignette: true },
    'text-frame': { defaultThickness: 13, defaultRadius: 26, shadow: true, vignette: false },
    'top-bottom': { defaultThickness: 12, defaultRadius: 20, shadow: false, vignette: false },
  };
  
  const config = variantConfig[variant];
  const t = thickness ?? config.defaultThickness;
  const r = cornerRadius ?? config.defaultRadius;
  
  // Select material based on variant: orange for text-frame, blue-grey for others
  const isOrange = variant === 'text-frame';
  const material = isOrange ? ORANGE_PIPE_MATERIAL : PIPE_MATERIAL;
  
  // Common styling
  const pipeShadow = config.shadow ? material.outerGlow : 'none';

  return (
    <div className={cn('relative overflow-visible', className)}>
      {/* ═══════════════════════════════════════════════════════════════════
          LAYER 0: OUTER LIFT SHADOW
          Separates frame from background - frame floats in space
      ═══════════════════════════════════════════════════════════════════ */}
      {config.shadow && (
        <div 
          className="absolute pointer-events-none"
          style={{
            inset: -t * 0.6,
            borderRadius: r + t * 0.4,
            background: 'transparent',
            boxShadow: material.outerGlow,
            zIndex: 1,
          }}
        />
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          LAYER 1: CONTACT SHADOW / AMBIENT OCCLUSION
          Dark band inside frame where pipe "meets" the card surface
          Makes pipe appear to sit ABOVE content, casting shadow
      ═══════════════════════════════════════════════════════════════════ */}
      {(variant === 'image-frame' || variant === 'text-frame') && AO_STRENGTH > 0 && (
        <div 
          className="absolute pointer-events-none"
          style={{
            inset: t * 0.25,
            borderRadius: r - t * 0.25,
            boxShadow: material.contactShadow,
            zIndex: 8,
          }}
        />
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          LAYER 2: PIPE SEGMENTS (with lighting model gradients)
          Horizontal pipes: gradient top→bottom, highlight at 12-18%
          Vertical pipes: gradient left→right, highlight at 10-16%
      ═══════════════════════════════════════════════════════════════════ */}
      {(variant === 'image-frame' || variant === 'text-frame') && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* TOP pipe segment - horizontal gradient */}
          <div 
            className="absolute"
            style={{ 
              top: -t * 0.5, 
              left: r, 
              right: r, 
              height: t, 
              background: material.horizontal, 
              borderRadius: 2,
              boxShadow: `${material.innerRim}, ${pipeShadow}`,
            }} 
          />
          
          {/* BOTTOM pipe segment - horizontal gradient */}
          <div 
            className="absolute"
            style={{ 
              bottom: -t * 0.5, 
              left: r, 
              right: r, 
              height: t, 
              background: material.horizontal, 
              borderRadius: 2,
              boxShadow: `${material.innerRim}, ${pipeShadow}`,
            }} 
          />
          
          {/* LEFT pipe segment - vertical gradient */}
          <div 
            className="absolute"
            style={{ 
              left: -t * 0.5, 
              top: r, 
              bottom: r, 
              width: t, 
              background: material.vertical, 
              borderRadius: 2,
              boxShadow: `${material.innerRim}, ${pipeShadow}`,
            }} 
          />
          
          {/* RIGHT pipe segment - vertical gradient */}
          <div 
            className="absolute"
            style={{ 
              right: -t * 0.5, 
              top: r, 
              bottom: r, 
              width: t, 
              background: material.vertical, 
              borderRadius: 2,
              boxShadow: `${material.innerRim}, ${pipeShadow}`,
            }} 
          />
          
          {/* CORNERS: Elbow fittings with radial shading */}
          {showCornerWires ? (
            <>
              <JunctionBlock position="topLeft" size={r} thickness={t} useOrangeMaterial={isOrange} />
              <JunctionBlock position="topRight" size={r} thickness={t} useOrangeMaterial={isOrange} />
              <JunctionBlock position="bottomLeft" size={r} thickness={t} useOrangeMaterial={isOrange} />
              <JunctionBlock position="bottomRight" size={r} thickness={t} useOrangeMaterial={isOrange} />
            </>
          ) : (
            <>
              <VolumetricElbow position="topLeft" size={r} thickness={t} />
              <VolumetricElbow position="topRight" size={r} thickness={t} />
              <VolumetricElbow position="bottomLeft" size={r} thickness={t} />
              <VolumetricElbow position="bottomRight" size={r} thickness={t} />
            </>
          )}
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          TOP-BOTTOM VARIANT: Simplified for mobile
      ═══════════════════════════════════════════════════════════════════ */}
      {variant === 'top-bottom' && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Horizontal pipes */}
          <div 
            className="absolute"
            style={{ 
              top: -t * 0.5, 
              left: t * 0.5, 
              right: t * 0.5, 
              height: t, 
              background: PIPE_MATERIAL.horizontal, 
              borderRadius: 2,
              boxShadow: PIPE_MATERIAL.innerRim,
            }} 
          />
          <div 
            className="absolute"
            style={{ 
              bottom: -t * 0.5, 
              left: t * 0.5, 
              right: t * 0.5, 
              height: t, 
              background: PIPE_MATERIAL.horizontal, 
              borderRadius: 2,
              boxShadow: PIPE_MATERIAL.innerRim,
            }} 
          />
          
          {/* End caps */}
          {[
            { top: -t * 0.5, left: -t * 0.5 }, 
            { top: -t * 0.5, right: -t * 0.5 }, 
            { bottom: -t * 0.5, left: -t * 0.5 }, 
            { bottom: -t * 0.5, right: -t * 0.5 }
          ].map((pos, i) => (
            <div 
              key={i} 
              className="absolute" 
              style={{ 
                ...pos, 
                width: t, 
                height: t, 
                borderRadius: '50%', 
                background: 'radial-gradient(circle at 30% 30%, #94a3b8 0%, #64748b 35%, #334155 70%, #1e293b 100%)', 
                boxShadow: 'inset 1px 1px 3px rgba(255,255,255,0.2), inset -1px -1px 3px rgba(0,0,0,0.4)' 
              }} 
            />
          ))}
        </div>
      )}

      {/* Optional: Inner vignette for image-frame */}
      {config.vignette && variant === 'image-frame' && (
        <div 
          className="absolute inset-0 pointer-events-none z-15 rounded-lg"
          style={{
            background: 'linear-gradient(to top, rgba(15,23,42,0.25) 0%, transparent 30%, transparent 70%, rgba(15,23,42,0.08) 100%)',
            margin: t * 0.5,
          }}
        />
      )}

      {/* Content container */}
      <div 
        className="relative z-20 h-full" 
        style={{ padding: t * 0.5 + 4 }}
      >
        {children}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ABOUT HERO CINEMATIC - Side-Swapping Scroll Hero
// ═══════════════════════════════════════════════════════════════════════════════
//
// LAYOUT SUMMARY:
// ---------------
// Desktop (lg+):
//   - SCROLL CONTAINER (outer): Height = SCROLL_HEIGHT_MULTIPLIER × 100vh.
//     This is the useScroll target. The extra height creates scroll distance.
//
//   - STICKY CONTAINER (inner): Pinned at top: 0, height: 100vh.
//     Contains the hero background and content. The background extends to the
//     full viewport so there's no white gap when the navbar hides.
//
//   - SIDE SWAP ANIMATION:
//     • Progress 0.0 – 0.2: Vision state, image LEFT (5%), text RIGHT (55%)
//     • Progress 0.2 – 0.8: Gradual cinematic swap (easeInOut feel)
//     • Progress 0.8 – 1.0: Mission state, image RIGHT (55%), text LEFT (5%)
//     The swap uses ±50% translateX clamped to create smooth gliding motion.
//
//   - CONTENT CROSSFADE:
//     Vision fades out 0.35–0.5, Mission fades in 0.5–0.65.
//
// Tablet (md to lg):
//   - Uses mobile layout (stacked, no sticky).
//
// Mobile (< md):
//   - Stacked layout: Image → H1/tagline → Vision/Mission pill tabs.
//   - No sticky behavior, no side-swap animation.
//
// TUNING GUIDE:
// -------------
// - SCROLL_HEIGHT_MULTIPLIER: Increase for slower animation (more scroll needed).
//   e.g., 1.8 = 180vh total → 80vh of scroll distance.
// - Transform input ranges [0.15, 0.85] control animation spread.
//   Narrower range = faster swap. Wider range = slower, more cinematic.
// - SWAP_THRESHOLD: When Vision→Mission label/state switches (0.5 = midpoint).
//
// ═══════════════════════════════════════════════════════════════════════════════

// Vision & Mission content configuration
const aboutStatements = {
  vision: {
    id: 'vision',
    label: 'Our Vision',
    title: 'Our Vision',
    text: 'To be the most trusted and innovative plastic piping solutions provider across the Gulf region, setting industry benchmarks for quality, sustainability, and customer excellence.',
  },
  mission: {
    id: 'mission',
    label: 'Our Mission',
    title: 'Our Mission',
    text: 'Delivering premium European-engineered piping systems tailored for Gulf conditions, backed by three decades of manufacturing expertise and unwavering commitment to ISO-certified quality.',
  },
} as const;

type StatementKey = keyof typeof aboutStatements;

// ═══════════════════════════════════════════════════════════════════════════════
// CONFIGURATION CONSTANTS (adjust these to tune the animation)
// ═══════════════════════════════════════════════════════════════════════════════

// Total scroll container height as multiplier of viewport height.
// Higher = more scroll distance = slower, more cinematic animation.
// 1.8 = 180vh total (100vh visible + 80vh scroll room)
const SCROLL_HEIGHT_MULTIPLIER = 1.8;

// Progress threshold (0-1) at which Vision switches to Mission state.
const SWAP_THRESHOLD = 0.5;

// Hero image path
const HERO_IMAGE_PATH = '/images/about/CrownOutside.jpg';

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default function AboutHeroCinematic() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(true); // Default to mobile for SSR

  // Detect breakpoint: mobile/tablet (< 1024px) vs desktop (>= 1024px)
  // SSR-safe: guards window access
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Render mobile or desktop version
  if (isMobile) {
    return <MobileHero prefersReducedMotion={prefersReducedMotion} />;
  }

  return <DesktopHero prefersReducedMotion={prefersReducedMotion} />;
}

// ═══════════════════════════════════════════════════════════════════════════════
// DESKTOP HERO - Pinned Scroll with Side Swap
// ═══════════════════════════════════════════════════════════════════════════════

interface DesktopHeroProps {
  prefersReducedMotion: boolean | null;
}

function DesktopHero({ prefersReducedMotion }: DesktopHeroProps) {
  // ─────────────────────────────────────────────────────────────────────────────
  // SCROLL TRACKING
  // scrollContainerRef = OUTER container with extra height (scroll target)
  // scrollYProgress: 0 = top of section at viewport top, 1 = bottom reached
  // ─────────────────────────────────────────────────────────────────────────────
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ['start start', 'end end'],
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // ACTIVE STATEMENT STATE
  // Derived from scroll progress. Updates when crossing SWAP_THRESHOLD.
  // ─────────────────────────────────────────────────────────────────────────────
  const [activeStatement, setActiveStatement] = useState<StatementKey>('vision');

  useEffect(() => {
    if (prefersReducedMotion) return;

    const unsubscribe = scrollYProgress.on('change', (progress) => {
      const newState = progress >= SWAP_THRESHOLD ? 'mission' : 'vision';
      setActiveStatement((prev) => (prev !== newState ? newState : prev));
    });

    return () => unsubscribe();
  }, [scrollYProgress, prefersReducedMotion]);

  // ─────────────────────────────────────────────────────────────────────────────
  // ANIMATION TRANSFORMS - Cinematic Side Swap
  // ─────────────────────────────────────────────────────────────────────────────
  // The swap happens gradually between progress 0.15 and 0.85 (70% of scroll).
  // This creates a slow, cinematic glide rather than a fast snap.
  //
  // Image: Starts at left (5%), glides to right (55%)
  // Text: Starts at right (50%), glides to left (0%)
  //
  // The 5%/55% positions (instead of 0%/50%) add visual padding and prevent
  // elements from touching the edges during the swap.
  // ─────────────────────────────────────────────────────────────────────────────

  // Image position: left side → right side (gradual over 0.15–0.85)
  const imageLeft = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    prefersReducedMotion 
      ? ['5%', '5%', '5%', '5%'] 
      : ['5%', '5%', '50%', '50%']
  );

  // Text position: right side → left side (gradual over 0.15–0.85)
  const textLeft = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    prefersReducedMotion 
      ? ['50%', '50%', '50%', '50%'] 
      : ['50%', '50%', '0%', '0%']
  );

  // Content opacity crossfade (centered around SWAP_THRESHOLD)
  // Vision fades out: 1 → 0 between 0.35 and 0.5
  // Mission fades in: 0 → 1 between 0.5 and 0.65
  const visionOpacity = useTransform(scrollYProgress, [0, 0.35, 0.5], [1, 1, 0]);
  const missionOpacity = useTransform(scrollYProgress, [0.5, 0.65, 1], [0, 1, 1]);

  // Subtle scale pulse on image at midpoint for depth
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    prefersReducedMotion ? [1, 1, 1, 1] : [1, 1.015, 1.015, 1]
  );

  // Progress indicator bar
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════════
          SCROLL CONTAINER (outer) - The useScroll target
          Height = SCROLL_HEIGHT_MULTIPLIER × 100vh (e.g., 180vh)
          The extra height beyond 100vh creates the scroll distance that
          drives the animation. Increase multiplier for slower animation.
      ═══════════════════════════════════════════════════════════════════════ */}
      <div
        ref={scrollContainerRef}
        className="relative"
        style={{ height: `${SCROLL_HEIGHT_MULTIPLIER * 100}vh` }}
      >
        {/* ═════════════════════════════════════════════════════════════════════
            STICKY CONTAINER (inner) - The visible hero viewport
            Pinned at top: 0 so the gradient background extends behind the
            navbar area. When navbar hides, there's no white gap.
            Height = 100vh to fill the viewport.
        ═════════════════════════════════════════════════════════════════════ */}
        <div
          className="sticky top-0 h-screen overflow-hidden"
        >
          {/* Background with diagonal band - extends behind navbar */}
          <HeroBackground />

          {/* Main content area - relative container for absolute children */}
          {/* pt-28 lg:pt-32 adds space below navbar so content isn't hidden */}
          <div className="relative z-10 h-full pt-28 lg:pt-32">
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none h-full">
              {/* Positioning container for columns */}
              <div className="relative h-full">
                
                {/* ─────────────────────────────────────────────────────────────
                    IMAGE COLUMN (Absolutely positioned)
                    Starts on left (~5%), glides to right (~50%) during scroll.
                    Width: 45% of container to leave some breathing room.
                ───────────────────────────────────────────────────────────── */}
                <motion.div
                  className="absolute top-0 bottom-0 w-[45%] flex items-center justify-center p-4 lg:p-6"
                  style={{ left: imageLeft }}
                >
                  <motion.div
                    className="relative w-full max-w-xs lg:max-w-sm xl:max-w-md aspect-[3/4]"
                    style={{ scale: imageScale }}
                  >
                    {/* Radial glow behind image */}
                    <div className="absolute -inset-8 bg-gradient-radial from-sky-400/30 via-blue-500/10 to-transparent rounded-full blur-2xl" />
                    
                    {/* Image card with 3D PVC Pipe Frame */}
                    {/* Full variant = 4 sides with grey elbows (sealed frame) */}
                    <PipeFrame
                      variant="image-frame"
                      thickness={16}
                      cornerRadius={32}
                      className="h-full"
                    >
                      <div className="relative h-full rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
                        <Image
                          src={HERO_IMAGE_PATH}
                          alt="Crown Plastic Pipes Factory - Modern manufacturing facility"
                          fill
                          className="object-cover"
                          priority
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                        {/* Subtle overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-white/5" />
                      </div>
                    </PipeFrame>
                  </motion.div>
                </motion.div>

                {/* ─────────────────────────────────────────────────────────────
                    TEXT COLUMN (Absolutely positioned)
                    Starts on right (~50%), glides to left (~0%) during scroll.
                    Width: 50% of container.
                ───────────────────────────────────────────────────────────── */}
                <motion.div
                  className="absolute top-0 bottom-0 w-1/2 flex items-center p-4 lg:p-6"
                  style={{ left: textLeft }}
                >
                  {/* Text frame with wire bundles at corners instead of grey elbows */}
                  {/* text-frame variant = full rectangle with wire corners */}
                  <PipeFrame
                    variant="text-frame"
                    className="max-w-lg"
                  >
                    <div className="py-2 pr-4">
                    {/* Breadcrumb */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mb-4"
                    >
                      <span className="text-sm text-slate-400">
                        Home / <span className="text-sky-300 font-medium">About Us</span>
                      </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 leading-tight"
                    >
                      Crown Plastic Pipes
                      <span className="block text-sky-400">Factory L.L.C.</span>
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-base lg:text-lg text-slate-300 mb-6 font-medium"
                    >
                      European technology, Gulf standards.
                    </motion.p>

                    {/* Vision/Mission Content with Crossfade */}
                    <div className="relative min-h-[160px] mb-6">
                      {/* Vision Content */}
                      <motion.div
                        className="absolute inset-0"
                        style={{ 
                          opacity: prefersReducedMotion 
                            ? (activeStatement === 'vision' ? 1 : 0) 
                            : visionOpacity 
                        }}
                      >
                        <StatementContent statement={aboutStatements.vision} />
                      </motion.div>

                      {/* Mission Content */}
                      <motion.div
                        className="absolute inset-0"
                        style={{ 
                          opacity: prefersReducedMotion 
                            ? (activeStatement === 'mission' ? 1 : 0) 
                            : missionOpacity 
                        }}
                      >
                        <StatementContent statement={aboutStatements.mission} />
                      </motion.div>
                    </div>

                    {/* Active state indicator pills - positioned below content */}
                    <div className="flex gap-2 pt-4">
                      {(['vision', 'mission'] as const).map((key) => (
                        <div
                          key={key}
                          className={cn(
                            'w-2 h-2 rounded-full transition-all duration-300',
                            activeStatement === key
                              ? 'bg-sky-400 w-6'
                              : 'bg-slate-600'
                          )}
                        />
                      ))}
                    </div>
                    </div>
                  </PipeFrame>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Scroll progress indicator (right side) */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2">
            <div className="relative w-1 h-20 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full bg-sky-400 rounded-full"
                style={{ height: progressHeight }}
              />
            </div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Scroll</span>
          </div>
        </div>
      </div>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MOBILE HERO - Stacked Layout with Tabs (< 1024px)
// ═══════════════════════════════════════════════════════════════════════════════

interface MobileHeroProps {
  prefersReducedMotion: boolean | null;
}

function MobileHero({ prefersReducedMotion }: MobileHeroProps) {
  const [activeTab, setActiveTab] = useState<StatementKey>('vision');

  return (
    <section className="relative bg-slate-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />

      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none py-10 md:py-12">
        {/* Breadcrumb */}
        <div className="mb-4 md:mb-6">
          <span className="text-sm text-slate-400">
            Home / <span className="text-sky-300 font-medium">About Us</span>
          </span>
        </div>

        {/* Hero Image with 3D Pipe Frame - simplified for mobile */}
        <PipeFrame
          variant="top-bottom"
          className="mb-6 md:mb-8"
        >
          <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={HERO_IMAGE_PATH}
              alt="Crown Plastic Pipes Factory"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          </div>
        </PipeFrame>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
          Crown Plastic Pipes
          <span className="block text-sky-400">Factory L.L.C.</span>
        </h1>

        {/* Tagline */}
        <p className="text-base md:text-lg text-slate-300 mb-6 font-medium">
          European technology, Gulf standards.
        </p>

        {/* Tab Pills */}
        <div className="flex gap-2 mb-4">
          {(['vision', 'mission'] as const).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200',
                activeTab === key
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              )}
            >
              {aboutStatements[key].label}
            </button>
          ))}
        </div>

        {/* Tab Content with Fade */}
        <div className="relative min-h-[120px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? {} : { opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <StatementContent statement={aboutStatements[activeTab]} variant="mobile" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════════

// Statement Content Block (Vision or Mission)
interface StatementContentProps {
  statement: typeof aboutStatements.vision | typeof aboutStatements.mission;
  variant?: 'desktop' | 'mobile';
}

function StatementContent({ statement, variant = 'desktop' }: StatementContentProps) {
  return (
    <div>
      <span className={cn(
        'inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2',
        variant === 'desktop'
          ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
          : 'bg-sky-500/20 text-sky-300'
      )}>
        {statement.label}
      </span>
      <h2 className={cn(
        'font-bold mb-2',
        variant === 'desktop' ? 'text-xl lg:text-2xl text-white' : 'text-lg text-white'
      )}>
        {statement.title}
      </h2>
      <p className={cn(
        'leading-relaxed text-sm',
        variant === 'desktop' ? 'text-slate-300 lg:text-base' : 'text-slate-400'
      )}>
        {statement.text}
      </p>
    </div>
  );
}

// Hero Background with Diagonal Band and Pipe Pattern
// ═══════════════════════════════════════════════════════════════════════════════
// HERO BACKGROUND - HIGH-IMPACT "Piping Blueprint" Composition
// ═══════════════════════════════════════════════════════════════════════════════
//
// A visually BOLD, poster-quality background for Crown Plastic Pipes.
// Designed to be immediately noticeable - "premium industrial tech" aesthetic.
//
// LAYERS (back to front):
// 1. BASE GRADIENT - Deep navy with radial vignette
// 2. HERO HALO - Large, bright focal glow behind main content (very visible)
// 3. STRUCTURAL DIAGONALS - Wide translucent bands framing content
// 4. DEPTH ATMOSPHERICS - Soft radials behind image and heading
// 5. PIPING SCHEMATIC SVG - Bold P&ID network with density gradient
//    - Central zone (hero area): HIGH opacity, thicker lines, more nodes
//    - Peripheral zones: Lower opacity, thinner, sparser
// 6. SIGNATURE MANIFOLD - Large abstract junction hub on right side
// 7. JUNCTION NODES - 12+ glowing points (brightest near heading)
// 8. NOISE TEXTURE - Very subtle grain
//
// VISUAL HIERARCHY:
// - Brightest: Center channel between image and text frames
// - Medium: Hero content areas (image left, heading right)
// - Darkest: Far edges and corners
//
// TO ADJUST INTENSITY:
// - SCHEMATIC_OPACITY: 0.6 = clearly visible at first glance
// - NODE_GLOW_OPACITY: 0.95 = nodes visibly glow
// - HERO_HALO_OPACITY: 0.25 = obvious focal light
// - DIAGONAL_OPACITY: 0.12 = noticeable structural bands
//
// ═══════════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════════
// VIDEO BACKGROUND SYSTEM
// ═══════════════════════════════════════════════════════════════════════════════
//
// STRUCTURE:
// - Video element positioned absolute behind all content
// - object-fit: cover ensures video fills container without letterboxing
// - Subtle overlay gradient on mobile improves text readability
//
// RESPONSIVENESS:
// - Desktop: Video covers hero edge-to-edge, 16:9 aspect naturally cropped
// - Mobile: Same video with object-fit: cover, important content stays centered
// - min-height ensures hero doesn't collapse on portrait screens
//
// ACCESSIBILITY:
// - prefers-reduced-motion: pauses video, falls back to static gradient
// - Video is muted, autoplays, loops - no user interaction required
// - pointer-events: none prevents video from blocking interactions
//
// ═══════════════════════════════════════════════════════════════════════════════

function HeroBackground() {
  const prefersReducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Pause video if user prefers reduced motion
  useEffect(() => {
    if (videoRef.current) {
      if (prefersReducedMotion) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {
          // Autoplay may be blocked by browser - gracefully ignore
        });
      }
    }
  }, [prefersReducedMotion]);
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* ================================================================
          LAYER 1: VIDEO BACKGROUND (or fallback gradient)
          - Covers entire hero area with object-fit: cover
          - Falls back to static gradient if reduced motion preferred
      ================================================================ */}
      {prefersReducedMotion ? (
        // Static fallback for prefers-reduced-motion
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 130% 110% at 45% 45%, 
                #0f172a 0%, 
                #0a1018 50%, 
                #050810 100%
              )
            `,
          }}
        />
      ) : (
        // Video background
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%230f172a' width='100%25' height='100%25'/%3E%3C/svg%3E"
          style={{ pointerEvents: 'none' }}
        >
          <source src="/videos/hero-about.mp4" type="video/mp4" />
        </video>
      )}

      {/* ================================================================
          LAYER 2: OVERLAY GRADIENT
          - Subtle darkening at edges for text contrast
          - Stronger on mobile (sm:) for readability
      ================================================================ */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to bottom,
              rgba(15,23,42,0.3) 0%,
              rgba(15,23,42,0.1) 30%,
              rgba(15,23,42,0.1) 70%,
              rgba(15,23,42,0.4) 100%
            )
          `,
        }}
      />
      {/* Mobile-specific darker overlay for better text readability */}
      <div 
        className="absolute inset-0 pointer-events-none md:opacity-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 100% at 50% 50%,
              transparent 30%,
              rgba(15,23,42,0.5) 100%
            )
          `,
        }}
      />
    </div>
  );
}
