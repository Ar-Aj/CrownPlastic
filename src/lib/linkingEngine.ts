/**
 * Crown Plastic Pipes — Internal Linking Engine
 *
 * Algorithmic link equity distribution for blog articles.
 *
 * This module:
 * 1. Scans blog article text for product category + region keyword co-occurrences
 * 2. Returns matching zipper page URLs as "Related Solutions" links
 * 3. Falls back to top 3 UAE regions (Dubai, Abu Dhabi, Sharjah) when a product
 *    category is mentioned but no specific region is found
 *
 * Used by the blog rendering pipeline to inject contextual <Link> CTAs.
 * All matching is case-insensitive and respects exact technical nomenclature.
 */

import type { BlogArticle } from '@/content/blogs';
import type { CategoryId, RegionSlug } from '@/data/zipperContent';
import { CATEGORY_META, REGION_META } from '@/data/zipperContent';

// ─────────────────────────────────────────────────────────────────────────────
// Keyword → ID Mapping Tables
// ─────────────────────────────────────────────────────────────────────────────

/** Maps common product keyword patterns (lowercase) to category IDs */
const PRODUCT_KEYWORD_MAP: { pattern: RegExp; categoryId: CategoryId }[] = [
  { pattern: /upvc\s*(?:drainage|drain)\s*(?:pipe|system)/i, categoryId: 'upvc-drainage-pipes' },
  { pattern: /upvc\s*(?:drainage|drain)\s*fitting/i, categoryId: 'upvc-drainage-fittings' },
  { pattern: /(?:pvc|upvc)\s*(?:high\s*)?pressure\s*pipe/i, categoryId: 'pvc-high-pressure-pipes' },
  { pattern: /(?:pvc|upvc)\s*(?:high\s*)?pressure\s*fitting/i, categoryId: 'pvc-high-pressure-fittings' },
  { pattern: /pvc\s*sch(?:edule)?\s*40\s*fitting/i, categoryId: 'pvc-sch-40-fittings' },
  { pattern: /pvc\s*duct\s*pipe/i, categoryId: 'pvc-duct-pipes' },
  { pattern: /pvc\s*duct\s*fitting/i, categoryId: 'pvc-duct-fittings' },
  { pattern: /pvc\s*conduit/i, categoryId: 'pvc-conduit-pipes' },
  { pattern: /pp-?r\s*pipe/i, categoryId: 'ppr-pipes' },
  { pattern: /pp-?r\s*(?:hot|cold|water|fitting)/i, categoryId: 'ppr-pipes' },
  { pattern: /hdpe\s*(?:pipe|irrigation)/i, categoryId: 'hdpe-pipes' },
  { pattern: /pe100|pe80/i, categoryId: 'hdpe-pipes' },
  { pattern: /pex\s*pipe/i, categoryId: 'pex-pipes' },
  { pattern: /grease\s*trap/i, categoryId: 'fabrications-accessories' },
  { pattern: /solvent\s*cement/i, categoryId: 'solvents' },
  // Broader matches (lower priority — keep at end)
  { pattern: /\bupvc\b.*\bpipe/i, categoryId: 'pvc-high-pressure-pipes' },
  { pattern: /\bppr\b/i, categoryId: 'ppr-pipes' },
  { pattern: /\bhdpe\b/i, categoryId: 'hdpe-pipes' },
];

/** Maps region keyword patterns (lowercase) to region slugs */
const REGION_KEYWORD_MAP: { pattern: RegExp; regionSlug: RegionSlug }[] = [
  { pattern: /\bdubai\b/i, regionSlug: 'upvc-pipes-dubai' },
  { pattern: /\babu\s*dhabi\b/i, regionSlug: 'upvc-pipes-abu-dhabi' },
  { pattern: /\bsharjah\b/i, regionSlug: 'upvc-pipes-sharjah' },
  { pattern: /\bsaudi\b|\briyadh\b|\bjeddah\b|\bksa\b/i, regionSlug: 'upvc-pipes-saudi-arabia' },
  { pattern: /\bkuwait\b/i, regionSlug: 'upvc-pipes-kuwait' },
  { pattern: /\bqatar\b|\bdoha\b|\blusail\b/i, regionSlug: 'upvc-pipes-qatar' },
];

/** Top 3 UAE fallback regions when no specific region is detected */
const UAE_FALLBACK_REGIONS: RegionSlug[] = [
  'upvc-pipes-dubai',
  'upvc-pipes-abu-dhabi',
  'upvc-pipes-sharjah',
];

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface SolutionLink {
  /** Display label: "{Category} in {Region}" */
  label: string;
  labelAr: string;
  /** URL path: /solutions/{categoryId}/{regionSlug} */
  href: string;
  /** Whether this was a direct keyword match (true) or fallback (false) */
  isDirectMatch: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// Core Engine
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Scan a blog article's full text corpus (title, excerpt, sections)
 * and return matching zipper page solution links.
 *
 * Strategy:
 * 1. Build a single text corpus from all article text fields
 * 2. Detect product category IDs via keyword regex matching
 * 3. Detect region slugs via keyword regex matching
 * 4. For each (category, region) pair found, emit a direct-match SolutionLink
 * 5. If categories found but NO region detected, fallback to top 3 UAE regions
 * 6. Deduplicate and cap at 6 links max
 */
export function getRelatedSolutions(article: BlogArticle): SolutionLink[] {
  // Build text corpus
  const textParts = [
    article.title,
    article.shortExcerpt,
    article.fullDescription || '',
    article.primaryKeyword,
    ...article.secondaryKeywords,
    ...article.sections.flatMap((s) => [s.heading, ...s.content]),
  ];
  const corpus = textParts.join(' ');

  // Detect categories
  const matchedCategories = new Set<CategoryId>();
  for (const { pattern, categoryId } of PRODUCT_KEYWORD_MAP) {
    if (pattern.test(corpus)) {
      matchedCategories.add(categoryId);
    }
  }

  // Detect regions
  const matchedRegions = new Set<RegionSlug>();
  for (const { pattern, regionSlug } of REGION_KEYWORD_MAP) {
    if (pattern.test(corpus)) {
      matchedRegions.add(regionSlug);
    }
  }

  const links: SolutionLink[] = [];
  const seen = new Set<string>();

  // Direct matches: category × region pairs found in text
  if (matchedRegions.size > 0) {
    for (const categoryId of Array.from(matchedCategories)) {
      for (const regionSlug of Array.from(matchedRegions)) {
        const href = `/solutions/${categoryId}/${regionSlug}`;
        if (!seen.has(href)) {
          seen.add(href);
          const cat = CATEGORY_META[categoryId];
          const region = REGION_META[regionSlug];
          links.push({
            label: `${cat.nameEn} in ${region.nameEn}`,
            labelAr: `${cat.nameAr} في ${region.nameAr}`,
            href,
            isDirectMatch: true,
          });
        }
      }
    }
  }

  // Fallback: categories found but no specific region → top 3 UAE
  if (matchedCategories.size > 0 && matchedRegions.size === 0) {
    for (const categoryId of Array.from(matchedCategories)) {
      for (const regionSlug of UAE_FALLBACK_REGIONS) {
        const href = `/solutions/${categoryId}/${regionSlug}`;
        if (!seen.has(href)) {
          seen.add(href);
          const cat = CATEGORY_META[categoryId];
          const region = REGION_META[regionSlug];
          links.push({
            label: `${cat.nameEn} in ${region.nameEn}`,
            labelAr: `${cat.nameAr} في ${region.nameAr}`,
            href,
            isDirectMatch: false,
          });
        }
      }
    }
  }

  // Cap at 6 links, prioritizing direct matches
  return links
    .sort((a, b) => (a.isDirectMatch === b.isDirectMatch ? 0 : a.isDirectMatch ? -1 : 1))
    .slice(0, 6);
}

/**
 * Pre-compute related solutions for all blog articles.
 * Returns a Map keyed by article slug.
 */
export function buildSolutionsIndex(articles: BlogArticle[]): Map<string, SolutionLink[]> {
  const index = new Map<string, SolutionLink[]>();
  for (const article of articles) {
    const solutions = getRelatedSolutions(article);
    if (solutions.length > 0) {
      index.set(article.slug, solutions);
    }
  }
  return index;
}
