# Crown Plastic Alpha Overview (LLM Master Blueprint)

Welcome to the Crown Plastic codebase. This document serves as the ultimate reference guide for any developers (or Large Language Models) working on this repository. It provides a comprehensive breakdown of the application architecture, data flow, and UI design rules.

## Project Overview

Crown Plastic is an Enterprise-level static Single Page Application (SPA) designed to showcase a massive engineering catalog of over 5,000+ plastic piping systems (UPVC, PPR, HDPE). 

- **Infrastructure**: Built on **Next.js 14** using the **App Router** (`src/app/`) prioritizing Static Site Generation (SSG). 
- **Bilingual Strategy**: English and Arabic are supported natively on all routes without relying on external headless CMS requests.
- **Performance**: Heavy emphasis on reducing client-side Javascript loops where static generation can achieve the same result. The site is engineered to be highly performant, utilizing modern optimization features.

## Tech Stack & Libraries

This project uses a curated set of high-performance tools:

- **React 18 & Next.js 14**: Core architectural frameworks driving the file-based App Router.
- **TypeScript (`v5`)**: Enforces strict typing globally. All product objects interface directly with these strict definitions.
- **Tailwind CSS (`v3.4`)**: The exclusive styling framework used for the application. Native CSS is only written for complex looped animations.
- **Framer Motion (`v12`)**: Powers sophisticated scroll-linked layout transitions, presence toggling, and interactive UI micro-animations.
- **Three.js & React-Three-Fiber**: Handles the rendering of high-fidelity 3D models directly in the browser (e.g., pipe assemblies, matrix backgrounds).
- **EmailJS**: A client-side library for dispatching contact forms without the need to maintain an active backend server API route.
- **Lucide React**: Vector icon library utilized across the application.

## Architecture & Data Flow (The Config-as-Database Pattern)

To achieve maximum performance and avoid database bottlenecks during SSG, the entire product catalog is explicitly defined inside the codebase under `src/config/products.ts`. This acts as our relational database.

### Core Interfaces

Before modifying any product data, you must understand the underlying shapes:

```typescript
export interface SubProduct {
  slug: string; // The primary key for routing (e.g. /products/[category]/[slug])
  name: string;
  nameAr?: string; 
  shortLabel?: string;
  shortLabelAr?: string;
  standards: string[]; // Standardized engineering terms, kept strictly in English
  shortDescription: string;
  shortDescriptionAr?: string;
  features?: string[];
  featuresAr?: string[];
  image?: string; // Fallback image resolution logic is bound to this
}

export interface ProductCategory {
  slug: string; 
  name: string;
  nameAr?: string;
  shortDescription: string;
  shortDescriptionAr?: string;
  icon: string;
  image?: string;
  subProducts: SubProduct[]; // The 1-to-Many relational join
}
```

The UI maps directly to these configurations, building paths statically utilizing `generateStaticParams()` at build time.

## Bilingual & RTL Implementation

The system natively handles right-to-left (RTL) reading formats and language toggling.

- **LanguageContext (`useLanguage`)**: Wraps the entire application. It provides the current target `language` ('en' or 'ar') and controls the actual `dir="rtl"` attribute pushed to the DOM.
- **`useT()` Hook**: Supplies static dictionary strings for hardcoded UI elements (like "Contact Us", "View Detail"). 

### The Arabic Fallback Rule
When mapping through the config-as-database object, Arabic translations are treated as optional overrides. **You must always supply the explicitly hardcoded fallback to English**:

```javascript
// Example Fallback Implementation
const title = language === 'ar' ? (product.nameAr || product.name) : product.name;
```

## Design System & UI Philosophy

Do not write raw CSS classes or ad-hoc style attributes. The system relies entirely on polymorphic generic components and pre-defined Tailwind constraints.

### Polymorphic Components (`ProductCardSurface`)
The `ProductCardSurface` component in `src/components/products/design-system/` exemplifies our UI philosophy. Instead of duplicating Tailwind classes everywhere, components expose strict functional props:

```tsx
<ProductCardSurface 
  variant="glass" 
  accent="blue" 
  hoverable={true} 
  padding="md"
>
  {/* Content */}
</ProductCardSurface>
```

### Animating the UI
We prioritize **Native CSS Animation** over Javascript/Framer Motion when possible, defined in `tailwind.config.ts` and `globals.css` (e.g., `animate-glow-pulse`, `animate-float`). Framer Motion is reserved for spatial transforms that depend on user scroll position.

## Complex Page-Level Logic

There are several highly technical implementations located in the codebase:

### 1. Scroll Lock Strategy (About Us Page)
Components like `PipingJourney.tsx` capture the user's scroll. By defining a much taller parent container (e.g., `400vh`) and making the interior content `sticky`, framer-motion's `useScroll` intercepts `scrollYProgress`. This mapping translates the Y-scroll progress directly into an X-axis transformation or opacity shifts without abandoning the standard browser scrollbar.

### 2. Dynamic Scroll Direction Header
Located in `Header.tsx`, the primary navigation utilizes a custom hook (`useScrollDirection`). As the user scrolls down, the header is pushed off-screen (`-translate-y-full`) to expand real estate. Scrolling up restores the header explicitly using a glass-morphism overlay.

### 3. Lazy-Loading 3D Canvas
Heavy Three.js payloads (such as `PipeMatrixBackground.tsx`) are detrimental to Initial Load times. To bypass Server-Side Rendering (SSR) lockups, Next.js dynamic routing is employed to load the canvas eagerly only AFTER the client finishes hydrating.

```typescript
import dynamic from 'next/dynamic';

const PipeMatrixBackground = dynamic(
  () => import('@/components/three/PipeMatrixBackground'),
  { ssr: false } // Blocks SSR, loading on client
);
```

## Guide for LLMs & Developers (SOP)

If you are an AI or human developer asked to modify this system, adhere strictly to these rules:

1. **Adding a New Product**: Update `src/config/products.ts`. Do not attempt to add random page routes inside `src/app/products/`. The dynamic `[slug]` segments build themselves automatically based on the TS config.
2. **Adding Translations**: Use the localized object keys (`featuresAr`, `shortDescriptionAr`). If adding static UI translated strings, edit the main dictionary files located internally in the `i18n` logic. 
3. **Designing New UI Blocks**: Scan `src/components/products/design-system` FIRST. Only build a new custom component if neither `ProductCardSurface` nor established variants fit the need. 
4. **Protect SSR**: Never wrap the root application logic in `useState` or `useEffect` that breaks Static Site Generation. Assume the application compiles statically.
5. **Reduced Motion**: Respect accessibility bounds. If applying heavy Framer Motion transitions, utilize `useReducedMotion()` to safely default to snap-rendering.
