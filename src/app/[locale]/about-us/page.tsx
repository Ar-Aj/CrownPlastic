'use client';

import { AboutBreadcrumb } from '@/components/schemas/BreadcrumbSchema';
import {
  AboutHeroCinematic,
  AboutStatsStrip,
  AboutProductRangeMap,
  PipingJourney,
  GccNetworkSection,
  CertificationsAndStandards,
  InnovationLabSection,
  CompanyProfileStrip,
} from '@/components/about';

// ═══════════════════════════════════════════════════════════════════════════════
// CROWN PLASTIC PIPES - ABOUT US PAGE
// Flagship product-grade experience with interactive, data-driven sections
// ═══════════════════════════════════════════════════════════════════════════════

export default function AboutPage() {
  return (
    <>
      {/* SEO: Breadcrumb Schema */}
      <AboutBreadcrumb />

      {/* 1. Company Overview — Hero: Cinematic Side-Swapping Vision/Mission */}
      {/* Nav anchor: /about-us#company-overview */}
      <section id="company-overview">
        <AboutHeroCinematic />
      </section>

      {/* 2. Our Journey — Horizontal scroll-reactive timeline */}
      {/* Nav anchor: /about-us#our-journey */}
      <section id="our-journey">
        <PipingJourney />
      </section>

      {/* 3. Stats Strip — Animated horizontal ticker with company highlights */}
      <AboutStatsStrip />

      {/* 4. Manufacturing — Interactive GCC Network Map */}
      {/* Nav anchor: /about-us#manufacturing */}
      <section id="manufacturing">
        <GccNetworkSection />
      </section>

      {/* 5. Quality & Certifications — Certifications & Standards with Drawer */}
      {/* Nav anchor: /about-us#quality */}
      <section id="quality">
        <CertificationsAndStandards />
      </section>

      {/* 6. Innovation — Innovation Lab / R&D Section */}
      {/* Nav anchor: /about-us#innovation */}
      <section id="innovation">
        <InnovationLabSection />
      </section>

      {/* 7. Crown Product Galaxy — Rotating wheel selector for categories */}
      {/* Nav anchor: /about-us#product-galaxy */}
      <section id="product-galaxy">
        <AboutProductRangeMap />
      </section>

      {/* 8. Closing Company Profile Strip with CTAs */}
      <CompanyProfileStrip />
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// DATA STRUCTURE DOCUMENTATION
// ═══════════════════════════════════════════════════════════════════════════════
//
// All data is defined in: src/components/about/about.types.ts
//
// 1. HERO FACTS (heroFacts)
//    - id: string - unique identifier
//    - label: string - tab label (e.g., "Since 1995")
//    - subtitle: string - heading when selected
//    - description: string - paragraph content
//
// 2. HERO PILLS (heroPills)
//    - label: string - pill text
//    - icon: IconName - lucide icon name
//
// 3. GLANCE ITEMS (glanceItems)
//    - id: string - unique identifier
//    - icon: IconName - lucide icon name
//    - label: string - small category label
//    - value: string - main display value
//    - highlight?: boolean - if true, uses primary bg
//
// 4. JOURNEY EVENTS (journeyEvents)
//    - year: string - year label (e.g., "1995")
//    - title: string - milestone title
//    - description: string - milestone description
//    - stats?: { label: string; value: string }[] - optional inline stats
//    - highlight?: boolean - if true, marked as key milestone
//
// 5. GCC MARKETS (gccMarkets)
//    - id: string - unique identifier (e.g., "uae", "ksa")
//    - name: string - full country name
//    - code: string - country code (e.g., "UAE", "KSA")
//    - note: string - description when selected
//    - active?: boolean - if true, highlighted as HQ
//
// 6. CERTIFICATIONS (certifications)
//    - id: string - unique identifier
//    - code: string - certification code (e.g., "ISO 9001:2015")
//    - name: string - certification name
//    - scope: string - what it covers
//    - issuingBody: string - who issued it
//    - benefit: string - customer benefit
//    - icon: IconName - lucide icon name
//
// 7. STANDARDS (standards)
//    - code: string - standard code (e.g., "BS EN 1452")
//    - name: string - standard name
//    - application: string - what it's used for
//    - productTypes: string - which products
//
// 8. INNOVATION PILLARS (innovationPillars)
//    - id: string - unique identifier
//    - title: string - pillar title
//    - description: string - pillar description
//    - icon: IconName - lucide icon name
//    - specs?: { property: string; value: string }[] - technical specs
//
// ═══════════════════════════════════════════════════════════════════════════════
