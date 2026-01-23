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

      {/* 1. Hero Section - Cinematic Side-Swapping Vision/Mission */}
      <AboutHeroCinematic />

      {/* 2. Piping Journey - Horizontal scroll-reactive timeline */}
      <PipingJourney />

      {/* 3. Stats Strip - Animated horizontal ticker with company highlights */}
      <AboutStatsStrip />

      {/* 4. Interactive GCC Network Map */}
      <GccNetworkSection />

      {/* 5. Certifications & Standards with Drawer */}
      <CertificationsAndStandards />

      {/* 6. Innovation Lab / R&D Section */}
      <InnovationLabSection />

      {/* 7. Product Range Map - Interactive product taxonomy */}
      <AboutProductRangeMap />

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
