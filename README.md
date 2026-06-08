# Crown Plastic Enterprise SPA — LLM Master Blueprint

Welcome to the Crown Plastic codebase. This document is the **authoritative reference** for any developer or Large Language Model working on this repository. It provides a complete breakdown of the application architecture, data flow, routing strategy, design system, SEO infrastructure, and standard operating procedures.

> **Last Audited**: June 2026 — verified against live codebase.

---

## 1. Project Overview & Infrastructure

Crown Plastic is an enterprise-grade static Single Page Application (SPA) designed to showcase a massive engineering catalog of over 5,000+ plastic piping systems (UPVC, PPR, HDPE, PEX) across 13 product categories and 50+ individual product families.

### Core Architecture

- **Framework**: Built on **Next.js 14** using the **App Router** (`src/app/`).
- **Rendering Strategy**: Exclusively **Static Site Generation (SSG)** via `output: 'export'`. There is no server runtime — the build produces a flat `/out/` directory of static HTML files.
- **Hosting Target**: Apache web server with clean URLs.
- **Bilingual Strategy**: English and Arabic are supported natively on all routes via a `[locale]` URL segment — no external headless CMS.
- **Performance Philosophy**: Heavy emphasis on eliminating client-side JavaScript loops where static generation achieves the same result. Every page compiles at build time via `generateStaticParams()`.

### Locale-Prefixed Routing

All public routes live under `src/app/[locale]/`, where `[locale]` is `'en'` or `'ar'`. The `[locale]` layout sets `<html lang>` and `dir="rtl"|"ltr"` at the document root:

```
src/app/
├── layout.tsx              ← Root layout (minimal, delegates to [locale])
├── page.tsx                ← Root redirect to /en/
├── sitemap.ts              ← Programmatic MetadataRoute.Sitemap
├── globals.css             ← Global styles + CSS animations
└── [locale]/
    ├── layout.tsx          ← Sets lang, dir, fonts, providers, GA4
    ├── page.tsx            ← Homepage
    ├── HomePageClient.tsx
    ├── products/           ← Product hub + category + detail pages
    ├── blogs/              ← Blog hub + article detail pages
    ├── solutions/          ← Programmatic Zipper pages (Product × Location)
    ├── market/             ← Regional market pages (GCC cities)
    ├── technical/          ← Long-form technical guide articles
    ├── service-areas/      ← LocalBusiness schema service area pages
    ├── resources/          ← Downloads & catalogues
    ├── support/            ← Technical FAQs
    ├── about-us/           ← Company overview
    ├── contact-us/         ← Contact form (EmailJS)
    ├── innovation/         ← R&D and engineering
    ├── sustainability/     ← Sustainability initiatives
    ├── media-blogs/        ← Media & blogs landing
    ├── join-us/            ← Careers
    ├── fabrications/       ← Fabrications page
    ├── privacy-policy/     ← Legal
    ├── sitemap/            ← HTML sitemap
    ├── [slug]/             ← Dynamic service area pages
    └── not-found.tsx       ← 404 handler
```

### Static HTML Export & Root Fallback

The `next.config.mjs` enforces a pure static build:

```javascript
const nextConfig = {
  output: 'export',          // No Node.js server — flat HTML output
  compress: true,
  poweredByHeader: false,
  images: { unoptimized: true },  // Required for static export
  trailingSlash: true,       // /route/index.html for Apache clean URLs
};
```

The build script in `package.json` also copies a root fallback:

```bash
next build && node -e "require('fs').copyFileSync('root-fallback.html','out/index.html')"
```

This ensures that visitors hitting the bare domain (`crownplasticuae.com/`) receive a redirect page that routes them into `/en/` or `/ar/` based on browser preference.

---

## 2. Tech Stack & Libraries

This project uses a curated set of high-performance tools:

| Library | Version | Purpose |
|---|---|---|
| **React 18** | `^18` | UI rendering framework |
| **Next.js 14** | `14.2.35` | App Router, SSG, file-based routing |
| **TypeScript** | `^5` | Strict typing globally. All product objects interface with strict definitions |
| **Tailwind CSS** | `^3.4.1` | Exclusive styling framework. Native CSS only for complex looped animations |
| **Framer Motion** | `^12.24.12` | Scroll-linked layout transitions, presence toggling, UI micro-animations |
| **Three.js** | `^0.170.0` | High-fidelity 3D model rendering (pipe assemblies, matrix backgrounds) |
| **@react-three/fiber** | `^8.18.0` | React reconciler for Three.js scenes |
| **@react-three/drei** | `^9.122.0` | Helper components for R3F (controls, loaders, materials) |
| **@emailjs/browser** | `^4.4.1` | Client-side contact form dispatch — no backend API required |
| **Lucide React** | `^0.562.0` | Vector icon library |
| **clsx** | `^2.1.1` | Conditional class name composition |
| **tailwind-merge** | `^3.4.0` | Intelligent Tailwind class deduplication and conflict resolution |
| **@next/third-parties** | `^16.1.6` | Google Analytics 4 integration via Next.js-optimized script loading |

### Dev Dependencies

| Library | Purpose |
|---|---|
| `postcss@^8` | Tailwind CSS processing |
| `ts-node@^10.9.2` | TypeScript execution for build scripts |
| `eslint@^8` + `eslint-config-next` | Linting |

---

## 3. Config-as-Database Architecture & Routing Map

To achieve maximum performance and avoid database bottlenecks during SSG, the entire application state is explicitly defined inside TypeScript configuration files under `src/config/`. This is the **Config-as-Database** pattern — these files collectively act as the project's relational database.

### 3.1 Configuration File Inventory

| File | Size | Purpose |
|---|---|---|
| `products.ts` | 68 KB | **Core product catalog** — 13 categories, 50+ sub-products. The primary data source |
| `routes.ts` | 23 KB | `NavItem[]`, `FooterColumn[]`, and `allRoutes[]` — drives navigation, footer, and sitemap |
| `brand.ts` | 2 KB | Company branding constants (colors, contact info, social links, logo) |
| `schemas.ts` | 24 KB | Service area configurations + structured data payloads for LocalBusiness schema |
| `markets.ts` | 49 KB | GCC market page data — 15+ city-level pages (Dubai, Riyadh, Jeddah, etc.) |
| `faqs.ts` | 105 KB | Comprehensive bilingual FAQ database — used for AEO (Answer Engine Optimisation) |
| `docs.ts` | 21 KB | Document and catalogue metadata for the Resources/Downloads hub |
| `clients.ts` | 9 KB | Client logos, testimonials, and partner data |
| `regional-products.ts` | 10 KB | Regional product catalog configurations |
| `homepageAdvantage.ts` | 12 KB | Homepage "Crown Advantage" section content |
| `media.ts` | 1 KB | Media configuration (videos, galleries) |
| `maintenance.ts` | 1 KB | Maintenance mode toggle flag |

### 3.2 Core Interfaces (Stable)

Before modifying any product data, you must understand the underlying type shapes. These interfaces are the **stable core** of the system and have not changed since the initial architecture:

```typescript
// src/config/products.ts

export interface SubProduct {
  slug: string;               // Primary key for routing: /products/[category]/[slug]
  name: string;
  nameAr?: string;
  shortLabel?: string;        // Short label for compact UI (e.g., "DIN 8063")
  shortLabelAr?: string;
  standards: string[];        // Standardised engineering terms — kept strictly in English
  shortDescription: string;
  shortDescriptionAr?: string;
  features?: string[];
  featuresAr?: string[];
  image?: string;             // Sub-product specific image, falls back to category image
}

export interface ProductCategory {
  slug: string;
  name: string;
  nameAr?: string;
  shortDescription: string;
  shortDescriptionAr?: string;
  icon: string;
  image?: string;
  subProducts: SubProduct[];  // The 1-to-Many relational join
}
```

The UI maps directly to these configurations, building paths statically via `generateStaticParams()` at build time.

### 3.3 Helper Functions

`products.ts` also exports utility functions used across the application:

```typescript
getCategoryBySlug(slug: string): ProductCategory | undefined
getSubProductBySlugs(categorySlug: string, productSlug: string): SubProduct | undefined
getAllProducts(): { category: ProductCategory; product: SubProduct }[]
```

### 3.4 Route Map

All routes are locale-prefixed (`/en/...` and `/ar/...`). The following table shows the major route verticals:

| Route Pattern | Source Config | Static Params |
|---|---|---|
| `/[locale]/` | — | `locales` |
| `/[locale]/products/` | `products.ts` | — |
| `/[locale]/products/[category]/` | `products.ts` | `productCategories[].slug` |
| `/[locale]/products/[category]/[product]/` | `products.ts` + `productDetails/` | `subProducts[].slug` |
| `/[locale]/products/regional/[regionSlug]/upvc-pipes` | `regional-products.ts` | `regionalProductCatalogs[].regionSlug` |
| `/[locale]/blogs/` | `content/blogs.ts` | — |
| `/[locale]/blogs/[slug]/` | `content/blogs.ts` | `blogArticles[].slug` |
| `/[locale]/solutions/[category]/[region]/` | `data/zipperContent.ts` | 13 categories × 6 regions = 78 paths |
| `/[locale]/market/` | `markets.ts` | — |
| `/[locale]/market/[country]/[city]/` | `markets.ts` | `allRegionalMarkets[].slug` |
| `/[locale]/technical/` | Hardcoded sub-routes | — |
| `/[locale]/technical/[slug]/` | 9 static technical articles | Hardcoded slugs |
| `/[locale]/[slug]/` (service areas) | `schemas.ts` | `serviceAreas[].slug` |
| `/[locale]/support/faqs/` | `faqs.ts` | — |
| `/[locale]/resources/` | `docs.ts` | — |
| `/[locale]/about-us/`, `/contact-us/`, etc. | Static pages | — |

---

## 4. Product Detail Architecture

Beyond the core `SubProduct` definition in `products.ts`, the codebase has a comprehensive **Product Detail** type system that drives rich, per-product pages with technical tables, fittings galleries, FAQs, and more.

### 4.1 Type System (`src/types/productDetail.ts`)

The central type is `ProductDetailConfig` — a complete configuration object for a product detail page:

```typescript
export type ProductDetailConfig = {
  slug: string;                     // e.g., "pvc-pressure-din-8063"
  categorySlug: string;             // Links back to ProductCategory
  title: string;                    // Full H1 title
  titleAr?: string;
  shortDescription: string;
  shortDescriptionAr?: string;
  overview: string;
  overviewAr?: string;
  features: string[];
  featuresAr?: string[];
  image?: string;
  renderImage?: string;             // 3D/Product render
  diagramImage?: string;            // Technical/Schematic diagram
  applications: string[];
  applicationsAr?: string[];
  pipesTables: PipeTable[];         // Specification tables
  fittings: Fitting[];              // Fittings gallery items
  fittingsTabLabelKey?: string;     // i18n key for sticky nav label
  colorLabel?: string;              // Drives color tab in FittingsGallery
  variants?: ProductVariant[];      // e.g., Grease Trap Type A/B/C/D
  variantsSectionTitle?: string;
  variantsSectionTitleAr?: string;
  downloads?: { label: string; href: string }[];
  videoUrl?: string;
  technicalProperties?: { property: string; value: string }[];
  technicalPropertiesAr?: { property: string; value: string }[];
  systemAdvantages?: string[];
  systemAdvantagesAr?: string[];
  dosDonts?: DosDonts;
  dosDontsAr?: DosDonts;
  accessoriesGallery?: { name: string; imageSrc: string }[];
  faqs?: ProductFAQ[];             // Hand-authored AEO FAQs
};
```

### 4.2 Supporting Types

| Type | Purpose |
|---|---|
| `PipeTable` | Specification table with multi-tier column headers (`PipeTableColumn` supports `groupLabel`, `superGroupLabel`, `megaGroupLabel`) |
| `Fitting` | Individual fitting item with image, `FittingFamily` category, `SizeRow[]`, optional `FittingSpecTable`, and `colorVariants` |
| `FittingFamily` | Union type: `'moulded' \| 'fabricated' \| 'brass-insert' \| 'solvent-cement' \| 'pushfit' \| 'other'` |
| `ProductFAQ` | Bilingual FAQ entry: `{ q, qAr, a, aAr }` for Google Featured Snippets |
| `ProductVariant` | Product configuration variant (e.g., Grease Trap Types A–D) |
| `DosDonts` | Installation guidance: `{ dos: string[], donts: string[] }` |
| `NavSection` | Scroll navigation sections for the sticky product detail nav |

### 4.3 Data Files (`src/config/productDetails/`)

21 TypeScript data files provide `ProductDetailConfig` objects per product family:

```
src/config/productDetails/
├── index.ts                          ← Barrel export + slug-to-config resolver
├── drainageData.ts                   (105 KB)
├── pvcHighPressurePipesData.ts       (77 KB)
├── pvcHighPressureFittingsData.ts    (104 KB)
├── pvcPressureData.ts                (97 KB)
├── pvcDuctPipesData.ts               (64 KB)
├── hdpePipesData.ts                  (76 KB)
├── pprPipesData.ts                   (29 KB)
├── pvcSch40FittingsData.ts           (34 KB)
├── pvcConduitPipesData.ts            (24 KB)
├── ... (21 files total)
└── solventData.ts                    (3 KB)
```

### 4.4 Rendering Components

| Component | Size | Purpose |
|---|---|---|
| `ProductDetailLayout.tsx` | 48 KB | Unified layout consuming `ProductDetailConfig` — renders all sections |
| `PipesTable.tsx` | 20 KB | Multi-tier specification table renderer |
| `FittingsGallery.tsx` | 18 KB | Filterable fittings grid with family tabs |
| `FittingModal.tsx` | 19 KB | Detail modal for individual fittings with spec tables |
| `ProductFAQAccordion.tsx` | 5 KB | Bilingual FAQ accordion for AEO |
| `DualImagePresentation.tsx` | 5 KB | Side-by-side product image display |
| `CategoryCardCarousel.tsx` | 6 KB | Category card carousel for product hub |

---

## 5. Bilingual & RTL Implementation

The system natively handles right-to-left (RTL) reading formats, language toggling, and bilingual content resolution across the entire application.

### 5.1 i18n Lifecycle

The full internationalisation pipeline flows through these layers:

```
src/lib/i18n-utils.ts          → Locale type, path utilities
    ↓
src/context/LanguageContext.tsx → Provider wrapping [locale] layout
    ↓
src/i18n/index.ts (useT)       → Translation hook with dot-notation paths
    ↓
src/components/common/LocaleLink.tsx → Locale-aware navigation
    ↓
tailwind.config.ts (rtl:/ltr:) → Directional styling variants
```

### 5.2 i18n Utilities (`src/lib/i18n-utils.ts`)

Foundational utilities used by the context, link component, layouts, and metadata:

```typescript
export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

localePath('/products', 'ar')     // → '/ar/products'
stripLocale('/ar/products')       // → '/products'
getLocaleFromPath('/ar/products') // → 'ar'
```

### 5.3 LanguageContext (`useLanguage`)

Wraps the entire application at the `[locale]/layout.tsx` level. Provides:

- `language: Locale` — derived from the URL `[locale]` segment
- `setLanguage(lang)` — navigates to the equivalent page in the new locale via `router.push()`
- `isRTL: boolean` — derived from `language === 'ar'`

The `[locale]/layout.tsx` sets `<html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>` at the document root.

### 5.4 `useT()` Hook — Type-Safe Translations

Supplies static dictionary strings for all hardcoded UI elements using **dot-notation paths** with full TypeScript type safety:

```typescript
import { useT } from '@/i18n';

const t = useT();
return <span>{t('nav.products')}</span>;         // Dot-notation path
return <span>{t('home.hero_title')}</span>;       // Type-checked at compile time
return <span>{t('products.tables.size_mm')}</span>;
```

The `TranslationPath` type is automatically derived from the `en.ts` dictionary structure, providing autocomplete and compile-time validation.

**Dictionary files** (`src/i18n/en.ts` at 145 KB, `src/i18n/ar.ts` at 147 KB) are massive structured objects with dot-notation keys.

### 5.5 The Arabic Fallback Rule

When mapping through Config-as-Database objects (where Arabic is an optional override), **always supply the explicit fallback to English**:

```javascript
const title = language === 'ar' ? (product.nameAr || product.name) : product.name;
```

### 5.6 `LocaleLink` Component

**All internal navigation must use `LocaleLink` instead of bare `<Link>`**. This component automatically prefixes `href` with the current locale:

```tsx
import LocaleLink from '@/components/common/LocaleLink';

// Renders as /en/products or /ar/products based on current locale
<LocaleLink href="/products">Products</LocaleLink>
```

External URLs, anchors, `tel:`, `mailto:`, and already-prefixed paths pass through unchanged.

### 5.7 RTL Tailwind Variants

A custom Tailwind plugin in `tailwind.config.ts` provides `rtl:` and `ltr:` variants:

```tsx
// Margin on logical start side
<div className="ltr:ml-4 rtl:mr-4">

// Text alignment
<p className="ltr:text-left rtl:text-right">

// Flex direction reversal
<div className="flex ltr:flex-row rtl:flex-row-reverse">
```

These variants match `[dir="rtl"]` and `[dir="ltr"]` selectors on the `<html>` element.

---

## 6. Design System & UI Philosophy

Do not write raw CSS classes or ad-hoc style attributes. The system relies on polymorphic generic components, pre-defined Tailwind constraints, and a centralized design token library.

### 6.1 Product Design System Components (`src/components/products/design-system/`)

7 files providing the complete product UI toolkit:

| Component | File | Key Props / Exports |
|---|---|---|
| **ProductCardSurface** | `ProductCardSurface.tsx` | `variant: CardVariant`, `accent: AccentColor`, `hoverable`, `padding`. Sub-components: `ProductCardHeader`, `ProductCardImage`, `ProductCardFooter` |
| **ProductSection** | `ProductSection.tsx` | `SectionBackground`, `SectionSize`, `ProductSectionHeader` — wraps full-width page sections |
| **ProductBackgroundPattern** | `ProductBackgroundPattern.tsx` | `PatternOverlay`, `RadialGlowOverlay`, `SectionDivider`, `PipeBorderWrapper` — decorative backgrounds |
| **ProductHeroBadge** | `ProductHeroBadge.tsx` | `BadgeVariant`, `BadgeSize`, `ProductBadgeRow`, `ProductStatBadge`, `FloatingBadgeGroup` |
| **ProductTable** | `ProductTable.tsx` | `ProductSpecsTable`, `TableHeaderBadge`, multi-tier column header support |
| **theme.ts** | `theme.ts` | Centralized color, spacing, and gradient tokens for the product design system |
| **index.ts** | `index.ts` | Barrel exports with full TypeScript type exports |

**Usage pattern** — always import from the barrel:

```tsx
import {
  ProductSection,
  ProductCardSurface,
  ProductHeroBadge,
  ProductTable,
} from '@/components/products/design-system';

<ProductCardSurface variant="glass" accent="blue" hoverable={true} padding="md">
  {/* Content */}
</ProductCardSurface>
```

### 6.2 Centralized Design Token Library (`src/lib/design-system.ts`)

A 382-line design system library providing application-wide tokens. Import directly:

```typescript
import { colors, gradients, glassStyles, fadeUp, staggerContainer } from '@/lib/design-system';
```

#### Color Tokens

```typescript
colors.primary.500    // '#0072BC' — Main brand blue
colors.accent.500     // '#D4A853' — Gold accent
colors.glass.white    // 'rgba(255, 255, 255, 0.1)'
colors.glass.border   // 'rgba(255, 255, 255, 0.2)'
```

#### Motion Presets (Framer Motion `Variants`)

| Export | Animation |
|---|---|
| `fadeIn`, `fadeUp`, `fadeDown` | Opacity + translate entrance |
| `scaleIn`, `scaleUp` | Scale + opacity entrance |
| `slideFromLeft`, `slideFromRight` | Horizontal slide entrance |
| `staggerContainer`, `staggerContainerFast` | Parent container for staggered children |
| `radialStagger`, `radialItem` | Center-explosion stagger effect |
| `pageTransition` | Page-level enter/exit with `AnimatePresence` |
| `hoverScale`, `hoverLift`, `hoverGlow` | `whileHover` presets |
| `tapScale`, `tapScaleSm` | `whileTap` presets |

#### Glass Morphism Utilities

```typescript
glassStyles.light    // 'bg-white/10 backdrop-blur-xl border border-white/20'
glassStyles.dark     // 'bg-slate-900/80 backdrop-blur-xl border border-slate-700/50'
glassStyles.premium  // 'bg-white/5 backdrop-blur-xl border border-white/10 relative overflow-hidden'
glassStyles.stat     // 'bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20'
```

#### Gradient Presets

```typescript
gradients.heroDark     // 'bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900'
gradients.textPrimary  // 'bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent'
gradients.textAccent   // 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent'
```

#### Typography Scale

```typescript
typography.display  // 'text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'
typography.h1       // 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'
typography.h2       // 'text-3xl md:text-4xl font-bold'
typography.body     // 'text-base text-gray-600 leading-relaxed'
typography.label    // 'text-sm font-semibold uppercase tracking-wider'
```

#### Button Variants

```typescript
buttonStyles.variants.primary   // Blue gradient with glow shadow
buttonStyles.variants.secondary // Glass backdrop with border
buttonStyles.variants.accent    // Amber/gold gradient
buttonStyles.variants.success   // Emerald gradient
buttonStyles.variants.outline   // White with primary border
buttonStyles.variants.ghost     // Transparent with hover highlight
```

#### Reduced Motion

```typescript
reducedMotionVariants  // Simplified opacity-only transitions
prefersReducedMotion() // SSR-safe media query check
```

### 6.3 Animating the UI

We prioritise **Native CSS Animation** over JavaScript/Framer Motion when possible. CSS animations are defined in `tailwind.config.ts` and `globals.css`:

- `animate-float` — gentle vertical float
- `animate-glow` — pulsing glow effect
- `animate-gradient-x`, `animate-gradient-y`, `animate-gradient-xy` — background gradient cycling
- `animate-marquee` — horizontal scroll for logo carousels
- `animate-fade-in`, `animate-slide-up` — entrance animations
- `animate-glow-pulse` — accent glow pulse
- `animate-scroll-left` — horizontal auto-scroll

Framer Motion is reserved for **spatial transforms that depend on user scroll position** and presence-based animations (`AnimatePresence`).

### 6.4 Core Reusable Common Components (`src/components/common/`)

| Component | Size | Purpose |
|---|---|---|
| `AnimateOnScroll.tsx` | 6 KB | IntersectionObserver-based scroll animation wrapper |
| `QuickQuoteModal.tsx` | 21 KB | Product-specific quote request modal with EmailJS |
| `WhatsAppButton.tsx` | 10 KB | Global floating WhatsApp CTA with pulse animation |
| `LogoCarousel3D.tsx` | 18 KB | 3D client logo carousel |
| `YouTubeFacade.tsx` | 5 KB | Performance-first YouTube embed (click-to-load facade) |
| `PdfViewer.tsx` | 7 KB | PDF catalogue viewer |
| `LocaleLink.tsx` | 1 KB | Locale-aware Next.js Link (documented in §5.6) |
| `LanguageToggle.tsx` | 4 KB | En/Ar language switcher UI |
| `HeroSection.tsx` | 11 KB | Reusable hero section with parallax |
| `Breadcrumbs.tsx` | 1 KB | Breadcrumb navigation |
| `ClientLogoWall.tsx` | 13 KB | Scrolling client logo marquee |
| `TestimonialsSection.tsx` | 9 KB | Client testimonials display |
| `CardGrid.tsx` | 6 KB | Responsive card grid layout |
| `PageHeader.tsx` | 3 KB | Standard page header with breadcrumbs |
| `StatsStrip.tsx` | 3 KB | Animated statistics strip |
| `useAnimations.ts` | 7 KB | Custom animation hooks (documented in §9) |
| `useHeroVideo.ts` | 3 KB | Hero video loading and playback hook |

---

## 7. Programmatic SEO & Content Engines

### 7.1 Zipper Pages — Product × Location (`/solutions/[category]/[region]/`)

A complete programmatic page generation system that creates unique, non-commodity pages for every combination of product category and geographic region.

**Scale**: 13 categories × 6 regions = **78 unique paths** × 2 locales = **156 URLs**.

#### Data Flow

```
src/data/proprietary/
├── climateMetrics.ts      → Per-category climate performance data
├── labTests.ts            → Per-category lab test results (burst pressure, tolerances)
└── projectReferences.ts   → Verified project deployments per category × region

          ↓ consumed by

src/data/zipperContent.ts
├── generateZipperContent(categoryId, regionSlug) → ZipperPageContent
├── CATEGORY_META: Record<CategoryId, CategoryMeta>
├── REGION_META: Record<RegionSlug, RegionMeta>
├── ALL_CATEGORY_IDS (13 entries)
└── ALL_REGION_SLUGS (6 entries)

          ↓ rendered by

src/app/[locale]/solutions/[category]/[region]/page.tsx
```

Each `ZipperPageContent` contains:
- `h1` / `h1Ar` — Unique heading with authority approval
- `metaTitle` / `metaDescription` — SEO metadata
- `complianceParagraph` — Local authority compliance text
- `engineeringParagraph` — Lab test + climate proof
- `deploymentParagraph` — Project reference validation
- `climateMetrics`, `labTests`, `projectRefs` — Structured data

#### Internal Linking Engine (`src/lib/linkingEngine.ts`)

Algorithmic link equity distribution for blog articles:

```typescript
import { getRelatedSolutions } from '@/lib/linkingEngine';

const links: SolutionLink[] = getRelatedSolutions(article);
// Returns up to 6 contextual zipper page links based on keyword co-occurrence
```

The engine scans blog article text for product category + region keyword matches and returns matching zipper page URLs. Falls back to top 3 UAE regions when a product is mentioned without a specific region.

### 7.2 Blog Store (`src/content/blogs.ts`)

A 35 KB content store defining all blog articles with the `BlogArticle` interface:

- `slug`, `title`, `shortExcerpt`, `fullDescription`
- `primaryKeyword`, `secondaryKeywords[]`
- `sections[]` with `heading` and `content[]`
- Auto-integrated with the linking engine for cross-linking

### 7.3 Regional Market Pages (`/market/[country]/[city]/`)

Driven by `src/config/markets.ts` (49 KB), covering 15+ GCC cities:

- UAE: Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, Fujairah
- Saudi Arabia: Overview, Riyadh, Jeddah
- Kuwait, Qatar (Doha), Bahrain (Manama), Oman (Muscat)

Rendered by `MarketPageClient.tsx` (53 KB) — the largest client component in the application.

### 7.4 Technical Guide Articles (`/technical/[slug]/`)

9 long-form technical articles providing in-depth engineering guidance:

| Slug | Topic |
|---|---|
| `bs-en-1452-complete-guide` | BS EN 1452 UPVC pipe standard |
| `upvc-vs-pvc-vs-ppr-comparison` | Material comparison guide |
| `upvc-installation-best-practices` | Installation guide |
| `certifications-compliance-guide` | ISO & quality certifications |
| `upvc-pipe-sizing-calculator-guide` | Sizing formulas & calculator |
| `pvc-pressure-pipe-specs-prices-dubai` | Dubai-specific pricing guide |
| `upvc-drainage-pipes-saline-soil-abu-dhabi` | Abu Dhabi saline soil guide |
| `dubai-municipality-compliant-ppr-pipes` | DM-compliant PPR guide |
| `hdpe-vs-upvc-municipal-infrastructure-gcc` | HDPE vs UPVC for municipal infra |

Plus a hub page at `/technical/` rendered by `TechnicalHubClient.tsx`.

---

## 8. SEO, Structured Data & Analytics Layer

### 8.1 JSON-LD Schema Components (`src/components/schemas/`)

13 schema components inject structured data at build time:

| Schema Component | Purpose |
|---|---|
| `OrganizationSchema.tsx` | Company-wide Organization schema (injected in root layout `<head>`) |
| `ProductSchema.tsx` | Product structured data for detail pages |
| `FAQPageSchema.tsx` | FAQPage schema for FAQ sections |
| `ProductFAQSchema.tsx` | Product-specific FAQ schema |
| `ArticleSchema.tsx` | Article schema for blog posts |
| `BreadcrumbSchema.tsx` | BreadcrumbList schema for navigation trails |
| `HowToSchema.tsx` | HowTo schema for installation guides |
| `LocalBusinessSchema.tsx` | LocalBusiness schema for service area pages |
| `OfferSchema.tsx` | Offer schema for product pricing signals |
| `ReviewSchema.tsx` | Review/AggregateRating schema |
| `QASchema.tsx` | QAPage schema for Q&A content |
| `ProductListSchema.tsx` | ItemList schema for product collections |

### 8.2 Programmatic Sitemap (`src/app/sitemap.ts`)

Generates a complete `MetadataRoute.Sitemap` with bilingual entries. Every path produces 2 URL entries (EN + AR):

```typescript
function bilingualEntries(path, { priority, changeFrequency }): MetadataRoute.Sitemap
```

Coverage includes: static pages, product categories, product details, service areas, support pages, technical guides, market pages, regional product catalogs, blog pages, and all 78 zipper page paths.

### 8.3 Google Analytics 4 Integration

| File | Purpose |
|---|---|
| `src/components/analytics/GoogleAnalyticsProvider.tsx` | GA4 script injection via `@next/third-parties` |
| `src/lib/analytics.ts` | Typed, fail-safe GA4 event wrappers |
| `src/types/gtag.d.ts` | `window.gtag` TypeScript declarations |

#### Event Tracking API

All functions silently no-op when gtag is unavailable (SSR, ad-blockers):

```typescript
import { trackButtonClick, trackProductView, trackFormSubmit, trackOutboundClick } from '@/lib/analytics';

trackButtonClick('Request a Quote', 'hero');
trackProductView('upvc-pressure', 'PVC High Pressure Pipes');
trackFormSubmit('contact');
trackOutboundClick('https://example.com', 'Partner Link');
```

---

## 9. Complex Page-Level Logic & Core Hooks

### 9.1 Scroll Lock Strategy (About Us Page)

Components like `PipingJourney.tsx` capture the user's scroll. By defining a much taller parent container (e.g., `400vh`) and making the interior content `sticky`, Framer Motion's `useScroll` intercepts `scrollYProgress`. This mapping translates the Y-scroll progress directly into an X-axis transformation or opacity shifts without abandoning the standard browser scrollbar.

### 9.2 Dynamic Scroll Direction Header

Located in `Header.tsx`, the primary navigation utilises a custom hook (`useScrollDirection`). As the user scrolls down, the header is pushed off-screen (`-translate-y-full`) to expand real estate. Scrolling up restores the header with a glass-morphism overlay.

### 9.3 Lazy-Loading 3D Canvas

Heavy Three.js payloads (such as `PipeMatrixBackground.tsx`) are detrimental to Initial Load times. Next.js dynamic imports with `ssr: false` load the canvas only after client hydration:

```typescript
import dynamic from 'next/dynamic';

const PipeMatrixBackground = dynamic(
  () => import('@/components/three/PipeMatrixBackground'),
  { ssr: false }
);
```

### 9.4 Custom Animation Hooks (`src/components/common/useAnimations.ts`)

| Hook | Signature | Purpose |
|---|---|---|
| `useScrollDirection` | `(threshold?: number) → 'up' \| 'down' \| null` | Detects scroll direction with RAF throttling. Returns `null` at page top or when reduced motion is preferred |
| `useInView` | `(threshold?: number) → { ref, isInView }` | IntersectionObserver-based viewport detection |
| `useCountUp` | `(target, duration?, isInView?) → { count, suffix, displayValue }` | Animates number counting from 0 to target with cubic ease-out |
| `useParallaxScroll` | `(factor?: number) → offset` | Parallax scroll effect with passive listeners and reduced motion respect |
| `usePrefersReducedMotion` | `() → boolean` | SSR-safe `prefers-reduced-motion` media query hook |

All hooks are SSR-safe (guard `window` access) and respect `prefers-reduced-motion`.

### 9.5 Additional Custom Hooks

| Hook | File | Purpose |
|---|---|---|
| `useHeroVideo` | `src/components/common/useHeroVideo.ts` | Hero video loading state, playback control, and fallback image handling |

---

## 10. Developer Standard Operating Procedures (SOP)

If you are an AI or human developer asked to modify this system, adhere strictly to these rules:

### Rule 1: Adding a New Product

1. Add the `SubProduct` entry to `src/config/products.ts` under the correct `ProductCategory`.
2. Create a `ProductDetailConfig` data file in `src/config/productDetails/` with tables, fittings, FAQs, and all bilingual fields.
3. Register the new config in `src/config/productDetails/index.ts`.
4. Do **not** create manual page routes inside `src/app/products/` — the dynamic `[category]/[product]` segments build automatically from the config.

### Rule 2: Adding Translations (Bilingual Parity Mandate)

1. For Config-as-Database fields, use the `*Ar` suffix keys (`nameAr`, `shortDescriptionAr`, `featuresAr`, etc.) and **always supply the English fallback**.
2. For static UI strings, add the key to **both** `src/i18n/en.ts` **and** `src/i18n/ar.ts` synchronously. An update to one file without the other is a build-breaking violation.
3. Use dot-notation paths (e.g., `'products.tables.dimensions_mm'`) and verify the `TranslationPath` type resolves at compile time.

### Rule 3: Adding a New Route

1. Create the page under `src/app/[locale]/your-route/page.tsx`.
2. Implement `generateStaticParams()` if the route has dynamic segments.
3. Register the route in `src/app/sitemap.ts` using the `bilingualEntries()` helper.
4. Add navigation entries in `src/config/routes.ts` (`mainNavItems`, `footerColumns`, and/or `allRoutes`).

### Rule 4: Internal Links — Use `LocaleLink`

**Never use bare `<Link>` from `next/link` for internal navigation.** Always use:

```tsx
import LocaleLink from '@/components/common/LocaleLink';
<LocaleLink href="/products">Products</LocaleLink>
```

Bare `<Link>` will produce locale-less URLs that break the bilingual routing.

### Rule 5: Designing New UI Blocks

1. Scan `src/components/products/design-system/` and `src/lib/design-system.ts` **first**.
2. Use existing motion presets (`fadeUp`, `staggerContainer`, etc.) instead of writing custom Framer Motion variants.
3. Use `glassStyles.*`, `gradients.*`, and `typography.*` tokens from the design system.
4. Only build a new custom component if no established variant fits the need.

### Rule 6: Schema Markup

Every public page must inject its relevant JSON-LD schema component from `src/components/schemas/`. At minimum:

- Product pages → `ProductSchema` + `BreadcrumbSchema` + `ProductFAQSchema`
- Blog articles → `ArticleSchema` + `BreadcrumbSchema`
- Service area pages → `LocalBusinessSchema`
- FAQ pages → `FAQPageSchema`

### Rule 7: Protect Static Generation

The application compiles entirely at build time via `output: 'export'`. **Never introduce**:

- API routes (`src/app/api/`) — there is no server runtime
- `getServerSideProps` or server-only data fetching
- Root-level `useState`/`useEffect` that would break `generateStaticParams()`

All dynamic behaviour must be client-side (`'use client'` directive) or computed at build time.

### Rule 8: Reduced Motion

Respect accessibility bounds. All animation implementations must:

- Use `usePrefersReducedMotion()` hook to safely default to snap-rendering
- Have CSS `@media (prefers-reduced-motion: reduce)` overrides in `globals.css`
- Fall back to `reducedMotionVariants` from `src/lib/design-system.ts` when using Framer Motion

### Rule 9: Technical & Engineering Nomenclature

Product series, standards, and certifications are **strictly locked**. Never alter, abbreviate, or "optimise" standards (e.g., `BS 5255`, `ISO 4422-2:1996`, `DIN 8061/62`, `ASTM D 1785`, `SDR11`, `PN10`, `NEMA TC 2`). Keep them exactly as written in the source code.

### Rule 10: Brand Authority Claims

Do not alter, rephrase, or expand upon short brand claims or statistical text. Locked phrases include: "5000+ products", "30+ Years", "52+ Countries", "7 Production Units", and all mentions of "top-tier raw material" and industry certifications.
