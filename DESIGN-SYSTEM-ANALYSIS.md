# Crown Plastic Pipes - Complete Design System Analysis

> **Purpose**: Design inventory for replicating visual language, UX patterns, and content structure across Sustainability and Innovation pages

---

## 1. VISUAL DESIGN SYSTEM

### 1.1 Color Palette

#### Primary Brand Colors
```css
/* From tailwind.config.ts */
--primary: #0072BC (Crown Blue)
--primary-dark: #005A96
--primary-light: #E8F4FC

/* Full palette (50-900) */
primary-50: #E8F4FC
primary-100: #D1E9F9
primary-200: #A3D3F3
primary-300: #75BDED
primary-400: #47A7E7
primary-500: #0072BC (main)
primary-600: #005A96
primary-700: #004370
primary-800: #002B4A
primary-900: #001424
```

#### Secondary Colors
```css
--secondary: #4DA8DA
--secondary-light: #F0F8FF
```

#### Accent Colors
```css
--accent: #F4A300 (Gold/Amber)
--accent-dark: #D48E00
--accent-light: #FFF3D6
```

#### Semantic Colors
```css
success: #10b981 (emerald)
error: #ef4444 (red)
warning: #f59e0b (amber)
```

#### Dark UI Palette (for About Us backgrounds)
```css
/* Slate gradients */
slate-900: #0f172a
slate-800: #1e293b
slate-700: #334155
slate-600: #475569

/* Blue-grey tones */
blue-950: #172554
```

#### Glass Morphism
```css
glass-white: rgba(255, 255, 255, 0.1)
glass-whiteHover: rgba(255, 255, 255, 0.15)
glass-dark: rgba(15, 23, 42, 0.8)
glass-border: rgba(255, 255, 255, 0.2)
```

### 1.2 Background Patterns

#### Homepage Patterns
- **White/Light Sections**: `bg-white` or `bg-gray-50`
- **Subtle Pattern Overlay**: 
  ```css
  bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]
  background-size: 20px 20px
  opacity: 50%
  ```

#### About Us / Dark Sections
- **Base Gradient**:
  ```css
  bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
  ```
- **Hero Background**:
  ```css
  bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900
  ```

#### Crown Advantage Section (Dark Dashboard)
```css
/* Base gradient */
bg-gradient-to-b from-[#020c18] via-[#041225] to-[#020c18]

/* Grid pattern overlay */
linear-gradient(rgba(56, 189, 248, 0.5) 1px, transparent 1px),
linear-gradient(90deg, rgba(56, 189, 248, 0.5) 1px, transparent 1px)
background-size: 50px 50px
opacity: 0.05

/* Radial glow */
bg-[radial-gradient(ellipse_at_30%_50%,rgba(14,165,233,0.12)_0%,transparent_60%)]
```

#### Final CTA Section
```css
/* Emerald gradient base */
background: radial gradient with emerald tones
/* Animated gradient overlay (Framer Motion) */
radial-gradient moving from 20%→80% position
duration: 10s, infinite loop
```

### 1.3 Section Layout Patterns

#### Container System (from globals.css & components)
```css
/* Responsive container - used in ALL sections */
mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 
2xl:w-[90vw] 2xl:max-w-none

/* Breakpoint structure */
Mobile: px-4 (1rem)
Small: px-6 (1.5rem)  
Large: px-10 (2.5rem)
XL: px-12 (3rem)
2XL: 90vw width (no max-width constraint)
```

#### Section Padding (from design-system.ts)
```typescript
section: {
  sm: 'py-12 md:py-16',   // Product categories, stats
  md: 'py-16 md:py-24',   // About preview
  lg: 'py-20 md:py-32',   // Large content sections
  hero: 'py-24 md:py-36', // Hero sections
}
```

#### Layout Patterns

**1. Hero Layout (Homepage)**
```
Grid: lg:grid-cols-2 gap-12 lg:gap-16
Left: Content (h1, p, CTAs)
Right: Image + floating glass tags (4 corner stats)
Min-height: min-h-[70vh] md:min-h-[80vh]
```

**2. Split Screen (About Preview, Innovation sections)**
```
Grid: lg:grid-cols-2 gap-12 lg:gap-20
Image side: aspect-[4/3], rounded-2xl
Content side: max-w-xl text content
```

**3. Product Grid (Radial Stagger)**
```
Grid: md:grid-cols-2 lg:grid-cols-3 gap-6
Cards: TiltCard with hover transform
Animation: radialStagger + radialItem variants
```

**4. Bento Grid (Crown Advantage)**
```
Desktop: Complex grid with hero card + stat cards
Row 1: [45% Hero] + [55% 3-column stats]
Row 2: [30% Tech card] + [70% Video panel]
Row 3: [50% Materials] + [50% Standards]
```

**5. Full-Width CTA**
```
py-12 md:py-14
Gradient background with animated orbs
Centered content: h2, p, CTAs, trust badges
```

---

## 2. TYPOGRAPHY SYSTEM

### 2.1 Font Family
```css
/* From tailwind.config.ts and globals.css */
font-family: 'Inter', 'Segoe UI', system-ui, sans-serif
```

### 2.2 Typography Scale (from design-system.ts)
```typescript
display: 'text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'
h1: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'
h2: 'text-3xl md:text-4xl font-bold'
h3: 'text-2xl md:text-3xl font-bold'
h4: 'text-xl md:text-2xl font-semibold'
body: 'text-base text-gray-600 leading-relaxed'
bodyLg: 'text-lg md:text-xl text-gray-600 leading-relaxed'
small: 'text-sm text-gray-500'
label: 'text-sm font-semibold uppercase tracking-wider'
```

### 2.3 Real Usage Examples

#### Homepage Hero
```tsx
h1: text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight
p: text-base md:text-lg text-gray-600 leading-relaxed max-w-xl
```

#### Section Headers (SectionHeader component)
```tsx
label: inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full
h2: text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900
subtitle: text-lg text-gray-600 leading-relaxed
```

#### About Us Hero (Dark)
```tsx
h1: text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight
tagline: text-base lg:text-lg text-slate-300 font-medium
```

### 2.4 Text Color Treatments
```css
/* Light backgrounds */
Headings: text-gray-900
Body: text-gray-600
Subtle: text-gray-500

/* Dark backgrounds */
Headings: text-white
Body: text-slate-300
Subtle: text-slate-400, text-slate-500

/* Gradient text (accent) */
bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent
bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent
```

---

## 3. SPACING & LAYOUT

### 3.1 Gap System
```css
/* Product grids */
gap-6 (1.5rem / 24px)

/* Split layouts */
gap-12 lg:gap-16 (3rem → 4rem)
gap-12 lg:gap-20 (for extra breathing room)

/* Bento grids */
gap-4 xl:gap-5 (dense data cards)
gap-5 xl:gap-6 (standard dashboard)
```

### 3.2 Section Spacing
```css
/* Between major sections */
py-12 md:py-16 (standard)
py-16 md:py-24 (large)
py-20 md:py-32 (hero-adjacent)

/* Internal spacing */
space-y-4 (cards, list items)
space-y-8 (content blocks)
mb-6 md:mb-8 (section header bottom margin)
```

### 3.3 Card Padding
```css
/* Standard card */
p-6 (1.5rem)

/* Compact card */
p-4 md:p-5

/* Hero card */
p-5 md:p-6 lg:p-8

/* Glass card (Crown Advantage) */
p-3 md:p-4 (tight for data display)
```

---

## 4. INTERACTIVE ELEMENTS

### 4.1 Button Styles (from design-system.ts + CrownButton)

#### Primary Button
```tsx
className="inline-flex items-center gap-2 px-8 py-4 text-lg
  bg-gradient-to-r from-primary to-primary-dark
  hover:from-primary-dark hover:to-primary
  text-white font-semibold rounded-xl
  shadow-lg hover:shadow-xl transition-all duration-300"
```

#### Secondary/Outline Button
```tsx
className="inline-flex items-center gap-2 px-6 py-3
  bg-white text-primary
  border-2 border-primary/20 hover:border-primary hover:bg-primary/5
  font-semibold rounded-xl transition-all duration-200"
```

#### Ghost Button
```tsx
className="text-gray-600 hover:text-primary hover:bg-primary/5
  transition-colors duration-200"
```

#### Magnetic Button (with hover attraction)
```tsx
// From common components
<MagneticButton href="/products" variant="outline" size="lg">
  View All Products
</MagneticButton>
```

### 4.2 Card Hover Effects

#### TiltCard (Product categories)
```tsx
// 3D tilt on mouse move, 5° intensity
<TiltCard intensity={5}>
  <div className="group hover:shadow-2xl transition-all duration-500">
    {/* Background transitions from white to dark navy */}
    <div className="bg-white group-hover:bg-gradient-to-br 
      group-hover:from-slate-800 group-hover:via-slate-900 
      group-hover:to-blue-950 transition-all duration-500" />
  </div>
</TiltCard>
```

#### Glass Card Hover (Crown Advantage)
```css
bg-white/[0.06] backdrop-blur-sm
border border-white/[0.12]
transition-all duration-500
hover:bg-white/[0.10] hover:border-sky-500/40
hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]

/* Animated shine sweep on hover */
.group:hover .shine {
  transform: translateX(100%);
  transition: transform 700ms;
}
```

### 4.3 Floating Glass Tags (Hero image corners)
```tsx
// 4 corner positions with connecting lines
<div className="absolute -top-3 -left-3">
  <div className="absolute top-1/2 left-1/2 w-8 h-8 
    border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
  <div className="bg-white/95 backdrop-blur-md rounded-lg 
    px-3 py-2 shadow-lg border border-primary/20 
    hover:scale-105 transition-transform">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-primary/10">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <div>
        <div className="text-xl font-bold text-gray-900">30+</div>
        <div className="text-[10px] text-gray-600">Years</div>
      </div>
    </div>
  </div>
</div>
```

---

## 5. ANIMATION SYSTEM (Framer Motion)

### 5.1 Motion Presets (from design-system.ts)

#### Easing Curves
```typescript
smooth: [0.4, 0, 0.2, 1]
easeOut: [0, 0, 0.2, 1]
spring: { type: 'spring', stiffness: 400, damping: 30 }
springSmooth: { type: 'spring', stiffness: 300, damping: 40 }
```

#### Common Variants
```typescript
// Fade in
fadeIn: {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
}

// Fade up (scroll reveal)
fadeUp: {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

// Scale in
scaleIn: {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

// Radial stagger (product grid)
radialStagger: {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 }
  }
}
radialItem: {
  hidden: { opacity: 0, scale: 0.5, y: 30 },
  visible: { 
    opacity: 1, scale: 1, y: 0,
    transition: { type: 'spring', stiffness: 350, damping: 25 }
  }
}
```

### 5.2 Scroll Animations

#### useInView Pattern
```tsx
const ref = useRef<HTMLElement>(null);
const isInView = useInView(ref, { once: true, margin: '-100px' });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
>
```

#### Parallax Scroll (About Us Hero)
```tsx
const { scrollYProgress } = useScroll({
  target: scrollContainerRef,
  offset: ['start start', 'end end']
});

// Side-swap animation
const imageLeft = useTransform(scrollYProgress, 
  [0, 0.15, 0.85, 1], 
  ['5%', '5%', '50%', '50%']
);
```

### 5.3 Animated Counter
```tsx
// From CrownAdvantageSection
function useCountUp(targetValue: string, isInView: boolean, duration = 2000) {
  // Quartic ease out: 1 - Math.pow(1 - progress, 4)
  // Used for: 30+, 5000+, 52+ stats
}
```

---

## 6. SIGNATURE COMPONENTS

### 6.1 3D PVC Pipe Frame (About Us exclusive)

**Technical Details** (from AboutHeroCinematic.tsx):
- **Material**: Hyper-realistic 3D cylinder lighting model
- **Variants**:
  - `image-frame`: Blue-grey metallic (16px thickness, wire corners)
  - `text-frame`: Orange PVC plastic (13px thickness, wire corners)
  - `top-bottom`: Mobile simplified (12px, sealed caps)

```tsx
<PipeFrame variant="image-frame" thickness={16} cornerRadius={32}>
  <div className="aspect-[3/4] rounded-lg overflow-hidden">
    <Image src="/path" fill className="object-cover" />
  </div>
</PipeFrame>
```

**Visual Characteristics**:
- Gradient: 50+ stops for realistic 3D shading
- Highlight band: 12-18% (top-lit cylinder)
- Wire junction blocks: Multi-strand cable bundle at corners
- Shadow: Contact AO + outer lift
- Lighting: Top-left direction (normalized(-1, -1, 0.5))

### 6.2 Logo Carousel 3D

**Layout** (from LogoCarousel3D.tsx):
- **Mobile**: 3 cards visible (center + 2 sides)
- **Desktop (1024px)**: 5 cards visible
- **Large Desktop (1440px)**: 7 cards visible
- **Card aspect**: 3:4 portrait
- **Transform**: 3D perspective with rotateY, scale, opacity

```tsx
<LogoCarousel3D
  logos={clientLogos}
  title="Trusted by Industry Leaders"
  subtitle="Partnering with prestigious developers across Gulf"
/>
```

**Animation**:
- Swipe/drag navigation
- Scroll hint (fades after 4s)
- Center card: scale(1), z-index 30
- Side cards: scale(0.75-0.85), rotateY(±18°-35°)

### 6.3 Animated Stats Strip

**Technical** (from AnimatedStatsStrip.tsx):
- **Animation**: requestAnimationFrame (60fps smooth)
- **Loop**: Seamless infinite (2× stat array)
- **Speed**: `loopDurationMs` controls scroll (default 18s)
- **Interaction**: Pauses on hover

```tsx
<AnimatedStatsStrip 
  stats={statsData}
  loopDurationMs={9000}
/>
```

**Card Design**:
```tsx
<div className="flex items-center gap-3 bg-slate-800/50 
  backdrop-blur-sm border border-slate-700/50 
  rounded-full px-5 py-3 min-w-[200px]">
  <div className="w-10 h-10 rounded-full bg-primary/20">
    <Icon className="w-5 h-5 text-primary" />
  </div>
  <div>
    <span className="text-xl font-bold text-white">{value}</span>
    <span className="text-xs text-blue-200/80">{label}</span>
  </div>
</div>
```

### 6.4 Home Video Carousel

**Layout** (from HomeVideoCarousel.tsx):
- **Background**: `bg-slate-900` with `pt-[130px]` (navbar offset)
- **Height**: `lg:h-[60vh] lg:max-h-[70vh] lg:min-h-[480px]`
- **Grid**: Two-column card layout
  - Left: 3:4 video (max-w-[320px] xl:max-w-[360px])
  - Right: Text card with title, description, CTA

**Video Behavior**:
- Auto-advance: Plays video → 2s pause → next slide
- Controls: Arrow buttons (PipeArrowButton), dot indicators
- Reduced motion: Pauses video, shows static UI

### 6.5 Crown Advantage Section (Bento Dashboard)

**Grid Structure**:
```tsx
// Desktop (lg+)
<div className="grid grid-cols-[45%_1fr] gap-5">
  <HeroStatBlock /> {/* Animated counter, image bg */}
  <div className="grid grid-cols-3 gap-4">
    {primaryStats.map(...)} {/* 3 stat cards */}
  </div>
</div>

<div className="grid grid-cols-[1fr_2fr] gap-5 max-h-[32vh]">
  <DataTile /> {/* Technology */}
  <VideoPanel inline /> {/* 2× 9:16 videos */}
</div>

<div className="grid grid-cols-2 gap-5">
  {secondaryStats.map(...)} {/* Materials, Standards */}
</div>
```

**Card Effects**:
- Glass morphism: `bg-white/[0.06]` + `backdrop-blur-sm`
- Animated shine sweep on hover
- Source badge: Colour-coded tags (ISO, Catalogue, Exports, etc.)
- Hover glow: `shadow-[0_0_30px_rgba(14,165,233,0.15)]`

---

## 7. CONTENT STRUCTURE PATTERNS

### 7.1 Hero Section Structure

#### Homepage Hero Pattern
```
1. Background: subtle gradient (white/gray-50 tones)
2. Grid: 2-column (content | image)
3. Content block:
   - H1: Product headline (3-5 lines)
   - P: Value proposition (2-3 lines)
   - CTA group: Primary + Secondary buttons
4. Visual block:
   - Image: aspect-[4/3], rounded-2xl
   - Floating stats: 4 corner glass tags with icon+stat
5. Min-height: 70vh-80vh
```

#### About Us Hero Pattern (Cinematic Side-Swap)
```
1. Background: Video or gradient (dark slate/blue)
2. Scroll container: 1.8× viewport height
3. Sticky viewport: 100vh, pinned
4. Animation:
   - Image: 3:4 portrait in PVC pipe frame
   - Text: Orange pipe frame with breadcrumb, h1, tagline
   - Side-swap: Progress 0→1, image left→right, text right→left
   - Crossfade: Vision (0-0.5) → Mission (0.5-1)
5. Progress indicator: Right-side vertical bar
```

### 7.2 Feature Presentation Patterns

#### Icon + Text Grid (Trust factors, Benefits)
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {features.map(f => (
    <div className="p-6 bg-white rounded-xl border">
      <div className="w-12 h-12 rounded-full bg-primary/10 mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-bold mb-2">{f.title}</h3>
      <p className="text-sm text-gray-600">{f.desc}</p>
    </div>
  ))}
</div>
```

#### Alternating Image-Text Blocks (Storytelling)
```tsx
// Pattern: Image left → text right, then flip
<div className="grid lg:grid-cols-2 gap-12 items-center">
  {/* Block 1: Image left */}
  <div><Image /></div>
  <div><h2 /><p /><CTAs /></div>
</div>

<div className="grid lg:grid-cols-2 gap-12 items-center">
  {/* Block 2: Image right (reversed) */}
  <div className="lg:order-2"><Image /></div>
  <div className="lg:order-1"><h2 /><p /><CTAs /></div>
</div>
```

### 7.3 Social Proof Elements

#### Certifications Row
```tsx
<div className="flex flex-wrap justify-center gap-6">
  {certifications.map(cert => (
    <div className="flex items-center gap-3">
      <div className="w-14 h-14 bg-amber-400 rounded-xl">
        <Shield className="w-7 h-7 text-white" />
      </div>
      <div>
        <p className="font-bold">ISO 9001:2015</p>
        <p className="text-sm text-gray-500">Quality Certified</p>
      </div>
    </div>
  ))}
</div>
```

#### Stat Counter Grid (Final CTA, About Stats)
```tsx
<div className="flex flex-wrap justify-center gap-6">
  <div className="flex items-center gap-2 text-emerald-100">
    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
    <span>30+ Years Experience</span>
  </div>
  {/* ... more stats */}
</div>
```

---

## 8. IMAGE TREATMENT

### 8.1 Aspect Ratios
```css
/* Hero images */
aspect-[4/3]   (Homepage hero, About preview)
aspect-[3/4]   (About Us portrait, Logo carousel)
aspect-[16/9]  (Video thumbnails - horizontal)
aspect-[9/16]  (Video thumbnails - portrait)

/* Product images */
aspect-square (1:1 for icons, Crown Advantage cards)
```

### 8.2 Border Radius Scale
```css
rounded-lg    (0.5rem / 8px)  - Small cards
rounded-xl    (0.75rem / 12px) - Standard cards
rounded-2xl   (1rem / 16px)    - Large images, sections
rounded-3xl   (1.5rem / 24px)  - Hero elements (desktop)
```

### 8.3 Shadow System
```css
/* Card shadows */
shadow-sm     (subtle card lift)
shadow-lg     (standard card)
shadow-xl     (floating cards)
shadow-2xl    (hero images, modals)

/* Custom shadows (design-system.ts) */
glass: '0 8px 32px rgba(0, 0, 0, 0.1)'
cardHover: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
glow-primary: '0 0 40px rgba(0, 114, 188, 0.3)'
glow-emerald: '0 10px 30px -10px rgba(16, 185, 129, 0.3)'
```

### 8.4 Image Overlays
```css
/* Vignette (darken edges) */
bg-gradient-to-t from-black/30 to-transparent

/* Subtle tint (brand color) */
bg-gradient-to-t from-primary/10 via-transparent to-white/5

/* Strong overlay (text legibility) */
bg-gradient-to-b from-slate-900/60 to-transparent
```

---

## 9. VIDEO IMPLEMENTATION

### 9.1 Video Container Patterns

#### Homepage Video Carousel
- **Aspect**: 3:4 portrait
- **Container**: `max-w-xs sm:max-w-sm lg:max-w-[320px]`
- **Autoplay**: Yes (muted, playsInline)
- **Controls**: Custom arrows + dots
- **Behavior**: Auto-advance after video end + 2s pause

#### About Us Hero Background
```tsx
<video
  className="absolute inset-0 w-full h-full object-cover"
  autoPlay muted loop playsInline
  poster="data:image/svg+xml..." // Slate-900 fallback
>
  <source src="/videos/hero-about.mp4" type="video/mp4" />
</video>
```

#### Crown Advantage Video Thumbnails (9:16)
```tsx
<div className="aspect-[9/16] w-full relative">
  <Image fill className="object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70" />
  <button className="absolute inset-0 flex items-center justify-center">
    <div className="w-11 h-11 bg-white/25 rounded-full">
      <Play className="w-5 h-5 text-white" fill="currentColor" />
    </div>
  </button>
</div>
```

### 9.2 Performance Optimizations
- **Poster image**: SVG data URI for instant background
- **prefers-reduced-motion**: Pauses video, shows static gradient
- **Lazy loading**: Videos only load when in viewport
- **Next.js Image**: Automatic optimization with `sizes` prop

---

## 10. RESPONSIVE BREAKPOINTS

### 10.1 Tailwind Breakpoints (from tailwind.config.ts)
```typescript
sm: '640px'   // Small tablet
md: '768px'   // Tablet
lg: '1024px'  // Desktop
xl: '1280px'  // Large desktop
2xl: '1536px' // Extra large
```

### 10.2 Mobile-Specific Treatments

#### Navigation
- **Mobile**: Hamburger menu (slide-in drawer)
- **Desktop**: Horizontal nav with mega-dropdowns

#### Hero Sections
- **Mobile**: Stacked (image → content)
- **Desktop**: Side-by-side (50/50 or 45/55 split)

#### Product Grids
- **Mobile**: 1 column
- **Tablet (md)**: 2 columns
- **Desktop (lg)**: 3 columns

#### Crown Advantage Dashboard
- **Mobile**: Vertical stack (Hero → 2×2 primary → videos → 2×1 secondary)
- **Tablet (md)**: 2-column balanced (Hero + 3-row stats | Tech + Videos)
- **Desktop (lg+)**: Bento grid (3 rows as documented)

#### Logo Carousel
- **Mobile**: 3 cards visible (center + 1 left + 1 right)
- **Desktop (1024px)**: 5 cards
- **Large (1440px+)**: 7 cards

---

## 11. MICROINTERACTIONS

### 11.1 Hover Effects

#### Button Hover
```css
/* Primary button */
transform: translateY(-1px);
box-shadow: 0 12px 24px -10px rgba(0, 114, 188, 0.4);
transition: all 200ms ease-out;
```

#### Card Hover
```css
/* Product card */
transform: translateY(-4px);
box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15);
background: gradient transition (white → dark navy)
transition: all 500ms ease-out;
```

#### Link Hover
```css
/* Inline text link */
gap: 2px → 3px (arrow spacing)
color: primary → primary-dark
transition: all 200ms;
```

### 11.2 Focus States
```css
/* Button focus */
outline: 2px solid primary
outline-offset: 2px
transition: outline 100ms;

/* Form input focus */
border-color: primary
ring: 2px ring-primary/20
```

### 11.3 Loading States
- **Button loading**: Spinner icon replaces arrow
- **Image loading**: Blur-up placeholder (Next.js Image)
- **Page transitions**: Fade opacity 0→1 (duration 0.3s)

---

## 12. ACCESSIBILITY FEATURES

### 12.1 Motion Preferences
```tsx
const prefersReducedMotion = useReducedMotion();

// Disable animations if user prefers reduced motion
<motion.div
  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
/>
```

### 12.2 Keyboard Navigation
- All interactive elements focusable (buttons, links, carousel dots)
- Focus visible: `focus-visible:ring-2 focus-visible:ring-primary`
- Tab order: Logical top→bottom, left→right

### 12.3 ARIA Labels
```tsx
<button aria-label="Go to slide 3">...</button>
<section aria-label="Featured video carousel">...</section>
<div role="status" aria-live="polite">Loading...</div>
```

### 12.4 Color Contrast
- All text meets WCAG AA (4.5:1 for normal, 3:1 for large)
- Primary button: White on #0072BC (9.1:1)
- Body text: #4b5563 on white (7.1:1)

---

## 13. PERFORMANCE OPTIMIZATIONS

### 13.1 Next.js Image Optimization
```tsx
<Image
  src="/images/path.jpg"
  alt="Description"
  fill // or width/height
  sizes="(max-width: 768px) 100vw, 50vw"
  priority // for above-fold images
  placeholder="blur" // optional blur-up
/>
```

### 13.2 Lazy Loading Strategy
- Hero images: `priority` flag (load immediately)
- Below-fold images: Default lazy loading
- Video thumbnails: Load when in viewport
- Framer Motion: `viewport={{ once: true }}` (animate once)

### 13.3 Animation Performance
- GPU-accelerated properties only: `transform`, `opacity`
- Avoid animating: `width`, `height`, `top`, `left`
- Use `will-change-transform` for complex animations
- `requestAnimationFrame` for smooth 60fps (stats strip)

---

## 14. KEY COMPONENT IMPLEMENTATIONS

### 14.1 SectionHeader Pattern
```tsx
<div className="mb-6 md:mb-8">
  <span className="inline-block px-4 py-1.5 
    bg-primary/10 text-primary text-sm font-semibold 
    rounded-full mb-4">
    {label}
  </span>
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
    {title} <span className="bg-gradient-to-r from-primary to-cyan-500 
      bg-clip-text text-transparent">{titleHighlight}</span>
  </h2>
  <p className="text-lg text-gray-600">{subtitle}</p>
</div>
```

### 14.2 QuoteButton (CTA)
```tsx
<QuoteButton variant="primary" size="lg">
  Request a Quote
  <ArrowRight className="w-5 h-5" />
</QuoteButton>

// Renders as:
<a href="/contact-us" 
  className="inline-flex items-center gap-2 px-8 py-4 
    bg-gradient-to-r from-primary to-primary-dark 
    text-white font-semibold rounded-xl 
    hover:shadow-xl transition-all">
  ...
</a>
```

### 14.3 GradientMesh (Background Orb)
```tsx
<GradientMesh variant="emerald" />

// Renders:
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute top-1/4 left-1/4 w-96 h-96 
    bg-gradient-radial from-emerald-500/20 to-transparent 
    blur-3xl animate-float" />
</div>
```

---

## 15. IMPLEMENTATION CHECKLIST FOR NEW PAGES

When building Sustainability and Innovation pages, replicate:

### ✅ Structure
- [ ] Container system: `mx-auto w-full px-4 ... 2xl:w-[90vw]`
- [ ] Section padding: `py-12 md:py-16` (standard) or `py-16 md:py-24` (large)
- [ ] Responsive grid: `grid md:grid-cols-2 lg:grid-cols-3`

### ✅ Typography
- [ ] Hero H1: `text-3xl md:text-4xl lg:text-5xl font-bold`
- [ ] Section H2: `text-2xl md:text-3xl font-bold`
- [ ] Body: `text-base md:text-lg text-gray-600`
- [ ] Badge label: `text-sm font-semibold uppercase tracking-wider`

### ✅ Colors
- [ ] Light sections: `bg-white` or `bg-gray-50`
- [ ] Dark sections: `bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900`
- [ ] Accent text: `text-primary` (#0072BC)
- [ ] CTA buttons: Gradient from primary to primary-dark

### ✅ Components
- [ ] SectionHeader with label + title + subtitle
- [ ] Product grid with TiltCard + radialStagger animation
- [ ] Stats strip with AnimatedStatsStrip
- [ ] Final CTA section with GradientMesh background
- [ ] Logo carousel (if client testimonials needed)

### ✅ Animation
- [ ] Framer Motion: Import from 'framer-motion'
- [ ] Scroll reveal: `useInView` hook with `once: true`
- [ ] Variants: `fadeUp`, `scaleIn`, `radialStagger`
- [ ] Respect reduced motion: `useReducedMotion()` hook

### ✅ Images
- [ ] Next.js Image component with `sizes` prop
- [ ] Aspect ratios: `aspect-[4/3]` (hero), `aspect-square` (cards)
- [ ] Border radius: `rounded-2xl` (standard), `rounded-3xl` (desktop hero)
- [ ] Overlays: `bg-gradient-to-t from-black/30 to-transparent`

### ✅ Responsive
- [ ] Mobile: Stacked layout, 1-column grids
- [ ] Tablet (md): 2-column grids
- [ ] Desktop (lg): 3-column grids, side-by-side layouts
- [ ] Test at: 375px, 768px, 1024px, 1440px

---

## 16. CONTENT STRATEGY PATTERNS

### 16.1 Headline Formulas

**Homepage Pattern**:
```
[Adjective] [Product/Service] Solutions for [Target Market]
Example: "Premium UPVC Piping Solutions for the GCC"
```

**About Us Pattern**:
```
[Company Name] - [Tagline/Positioning]
Example: "Crown Plastic Pipes Factory L.L.C."
         "European technology, Gulf standards."
```

**Section Header Pattern**:
```
Label: [Category] (uppercase, small, colored)
Title: [Benefit/Feature] [Highlight Word]
Subtitle: [Supporting detail, 1-2 sentences]

Example:
Label: "OUR PRODUCTS"
Title: "Premium Piping Solutions"
Subtitle: "Comprehensive range of UPVC, PPR, and HDPE..."
```

### 16.2 CTA Hierarchy

**Primary CTA** (most important):
- "Request a Quote" (Homepage hero, Final CTA)
- "Get Started" (conversion-focused sections)

**Secondary CTA** (exploratory):
- "View Products" (catalog navigation)
- "Learn More" (informational)
- "Explore Range" (category browsing)

**Tertiary CTA** (utility):
- "Download Brochure" (resources)
- "Contact Support" (help)
- Phone number link with icon

---

## 17. DESIGN SYSTEM FILES REFERENCE

### Key Files
```
src/lib/design-system.ts        - Motion presets, color tokens, gradients
src/app/globals.css             - Global styles, animations, scrollbar
tailwind.config.ts              - Color palette, fonts, breakpoints
src/app/page.tsx                - Homepage structure reference
src/app/about-us/page.tsx       - About Us structure reference
src/components/home/*           - Homepage-specific components
src/components/about/*          - About Us-specific components
src/components/common/*         - Shared reusable components
src/components/ui/premium/*     - Premium UI primitives (TiltCard, etc.)
src/config/*                    - Content config files
```

### Component Import Patterns
```typescript
// Layout components
import { LogoCarousel3D, AnimatedStatsStrip, QuoteButton } from '@/components/common';
import { CrownAdvantageSection, HomeVideoCarousel } from '@/components/home';

// UI primitives
import { TiltCard, AnimatedCounter, SectionHeader, GradientMesh, MagneticButton } from '@/components/ui/premium';
import { CrownButton } from '@/components/ui/crown';

// Framer Motion
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

// Design system
import { radialStagger, radialItem, fadeUp, scaleIn } from '@/lib/design-system';
```

---

## 18. DARK MODE NOTE

**Current Implementation**: Light mode only
```css
/* globals.css */
html { color-scheme: light; }
```

**Dark Sections**: Use explicit dark backgrounds (slate-900, blue-950) rather than system dark mode.

---

## 19. SPECIFIC PATTERN RECOMMENDATIONS FOR NEW PAGES

### For Sustainability Page:

**Hero**: 
- Use split-screen pattern (50/50)
- Left: Image (recycling/green manufacturing)
- Right: Headline + eco-stats + CTAs
- Background: White with subtle green accent orbs

**Content Sections**:
1. Environmental stats (AnimatedStatsStrip with green icons)
2. Sustainability pillars (3-column grid with TiltCard)
3. Certifications showcase (ISO 14001, recycling partnerships)
4. Green manufacturing process (alternating image-text blocks)
5. Impact metrics (Crown Advantage-style bento grid with emerald theme)
6. Final CTA (emerald gradient background)

**Color Accents**: 
- Replace primary blue with `emerald-600` (#059669)
- Keep glass morphism, adjust badge colors to green spectrum

---

### For Innovation Page:

**Hero**:
- Use About Us cinematic style (if video available)
- OR use Homepage split-screen with lab/R&D imagery
- Headline: "Innovation Through Technology"

**Content Sections**:
1. R&D capabilities (Logo carousel with technology partners)
2. Innovation timeline (horizontal scroll timeline component)
3. Technology pillars (3-column grid: Materials, Testing, Automation)
4. Product innovation showcase (product grid with hover reveals)
5. Awards/recognitions (stat cards in bento layout)
6. Final CTA (sky-blue gradient, "Partner With Us")

**Color Accents**:
- Keep primary blue (#0072BC)
- Add accent highlights: `cyan-500`, `sky-400`
- Use glass cards extensively for "high-tech" feel

---

## CONCLUSION

This design system provides a comprehensive blueprint for creating visually consistent pages. Key principles:

1. **Container consistency**: Always use `mx-auto w-full px-4 ... 2xl:w-[90vw]`
2. **Spacing rhythm**: Stick to py-12/16/24 for section padding, gap-6/12/20 for grids
3. **Color restraint**: Primary blue + accent gold/amber, avoid rainbow palettes
4. **Animation subtlety**: Scroll reveals (once), hover lifts, avoid constant motion
5. **Typography scale**: 5-6 size steps (display → h1 → h2 → h3 → body → small)
6. **Component reuse**: Import from common/ before creating new components

**Design Tokens Summary**:
- Primary: #0072BC (Crown Blue)
- Accent: #F4A300 (Gold)
- Success: #10b981 (Emerald)
- Dark: slate-900 to blue-950 gradients
- Glass: white/10 + backdrop-blur + white/20 borders
- Shadows: sm/lg/xl/2xl scale
- Radius: lg/xl/2xl/3xl scale
- Gaps: 6/12/16/20 (1.5rem to 5rem)

All measurements are responsive (base → sm → md → lg → xl → 2xl breakpoints).
