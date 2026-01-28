// ═══════════════════════════════════════════════════════════════════════════════
// CROWN ADVANTAGE SECTION CONFIG
// Homepage "Why Choose Us" - Data Dashboard Layout
// 
// DATA SOURCES & VERIFICATION:
// - brand.ts: Company stats (30+ years, 5000+ products, GCC coverage)
// - i18n/en.ts: Certifications (ISO 9001:2015, ISO 14001:2015, OHSAS 18001:2007)
// - products.ts: Product categories (7 families, multiple standards)
// - Stats strip data: Export coverage (52+ countries, 6 GCC nations)
// - media-blogs/page.tsx: Featured videos data
// ═══════════════════════════════════════════════════════════════════════════════

export type IconKey = 
  | 'quality' 
  | 'innovation' 
  | 'delivery' 
  | 'support' 
  | 'certifications' 
  | 'range' 
  | 'exports' 
  | 'manufacturing'
  | 'experience';

/** Source tag for badge display */
export type SourceTag = 'Catalogue' | 'ISO' | 'Exports' | 'Manufacturing' | 'Standards';

/** Emphasis level for dashboard layout */
export type EmphasisLevel = 'hero' | 'primary' | 'secondary';

/** Aspect ratio type for image containers */
export type ImageAspect = 'square' | 'portrait' | 'none';

export interface AdvantageItem {
  id: string;
  title: string;
  /** Short title for compact display */
  shortTitle?: string;
  description: string;
  iconKey: IconKey;
  /** Quantifiable stat, e.g. "30+" - only if verified in source data */
  highlightStat?: string;
  /** Unit label for the stat, e.g. "Years", "Products" */
  statLabel?: string;
  /** Source reference within codebase for internal verification */
  sourceRef: string;
  /** Badge label shown on card */
  sourceTag: SourceTag;
  /** Dashboard layout emphasis: hero (left column), primary (top row), secondary (bottom) */
  emphasisLevel: EmphasisLevel;
  /** Aspect ratio for image container: square (1:1), portrait (9:16), none (icon only) */
  imageAspect: ImageAspect;
  /** Optional image path under public/images/... */
  imageSrc?: string;
}

/** Video item for embedded media panel */
export interface MediaVideoItem {
  id: string;
  title: string;
  shortTitle?: string;
  thumbnailSrc: string;
  videoSrc: string;
  duration?: string;
  /** Aspect ratio for video thumbnail: always portrait (9:16) */
  imageAspect: ImageAspect;
}

export interface CrownAdvantageConfig {
  sectionId: 'crown-advantage';
  background: 'dark';
  headingLabel: string;
  headingTitle: string;
  headingAccent: string;
  subtitle: string;
  items: AdvantageItem[];
  /** Featured media items to display in 9:16 video panel */
  mediaItems?: MediaVideoItem[];
  mediaCardTitle?: string;
}

// ═══════════════════════════════════════════════════════════════════════════════
// VERIFIED ADVANTAGE DATA
// All claims sourced from: brand.ts, i18n/en.ts, products.ts
// ═══════════════════════════════════════════════════════════════════════════════

export const crownAdvantageConfig: CrownAdvantageConfig = {
  sectionId: 'crown-advantage',
  background: 'dark',
  headingLabel: 'Why Choose Us',
  headingTitle: 'The Crown',
  headingAccent: 'Advantage',
  subtitle: 'ISO-certified manufacturing excellence since 1995, serving GCC infrastructure with 5,000+ piping solutions.',
  
  // ─────────────────────────────────────────────────────────────────────────
  // FEATURED MEDIA - 2 videos in 9:16 format
  // Source: media-blogs/page.tsx VIDEOS_DATA
  // ─────────────────────────────────────────────────────────────────────────
  mediaCardTitle: 'Featured',
  mediaItems: [
    {
      id: 'video-choose-us',
      title: '5 Reasons to Choose Crown Plastic Pipes',
      shortTitle: '5 Reasons',
      thumbnailSrc: '',
      videoSrc: '',
      duration: '1:30',
      imageAspect: 'portrait',
    },
    {
      id: 'video-factory-story',
      title: 'Inside Crown: Our Sharjah Factory Story',
      shortTitle: 'Factory Tour',
      thumbnailSrc: '',
      videoSrc: '',
      duration: '2:15',
      imageAspect: 'portrait',
    },
  ],

  items: [
    // ─────────────────────────────────────────────────────────────────────────
    // HERO - Left column main stat (emphasisLevel: 'hero')
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'experience',
      title: 'Three Decades of Excellence',
      shortTitle: 'Experience',
      description: 'Established in 1995, Crown Plastic Pipes has grown to become a leading manufacturer of UPVC, PPR, and HDPE piping systems in the UAE and GCC region.',
      iconKey: 'experience',
      highlightStat: '30+',
      statLabel: 'Years',
      sourceRef: 'brand.ts: stats.yearsExperience',
      sourceTag: 'Catalogue',
      emphasisLevel: 'hero',
      imageAspect: 'square',
      imageSrc: undefined, // Uses icon fallback
    },

    // ─────────────────────────────────────────────────────────────────────────
    // PRIMARY - Top row of right grid (emphasisLevel: 'primary')
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'product-range',
      title: 'Comprehensive Product Range',
      shortTitle: 'Products',
      description: 'Over 5,000 product variants across 7 families: UPVC Pressure, Drainage, Conduit, Duct, PPR, HDPE, and custom fabrications.',
      iconKey: 'range',
      highlightStat: '5,000+',
      statLabel: 'SKUs',
      sourceRef: 'brand.ts: stats.productsRange; products.ts: 7 categories',
      sourceTag: 'Catalogue',
      emphasisLevel: 'primary',
      imageAspect: 'square',
      imageSrc: undefined,
    },
    {
      id: 'certifications',
      title: 'Triple ISO Certified',
      shortTitle: 'Certifications',
      description: 'ISO 9001:2015 (Quality), ISO 14001:2015 (Environmental), and OHSAS 18001:2007 (Safety) certified manufacturing.',
      iconKey: 'certifications',
      highlightStat: '3x',
      statLabel: 'ISO',
      sourceRef: 'i18n/en.ts: about.overview_text; home.why_quality_desc',
      sourceTag: 'ISO',
      emphasisLevel: 'primary',
      imageAspect: 'square',
      imageSrc: undefined,
    },
    {
      id: 'exports',
      title: 'Global Export Network',
      shortTitle: 'Exports',
      description: 'Serving all 6 GCC nations and exporting to 52+ countries across the Middle East, Asia, and Africa.',
      iconKey: 'exports',
      highlightStat: '52+',
      statLabel: 'Countries',
      sourceRef: 'page.tsx: statsData (Earth icon: 52+ Countries Served)',
      sourceTag: 'Exports',
      emphasisLevel: 'primary',
      imageAspect: 'square',
      imageSrc: undefined,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECONDARY - Bottom tiles (emphasisLevel: 'secondary')
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quality',
      title: '100% Virgin Materials',
      shortTitle: 'Materials',
      description: 'All products manufactured from 100% virgin uPVC, PPR, and HDPE materials. Gulf climate tested for 50+ year service life.',
      iconKey: 'quality',
      highlightStat: '50+',
      statLabel: 'Year Life',
      sourceRef: 'i18n/en.ts: home.why_quality_desc; sustainability_extended.pillar_virgin_desc',
      sourceTag: 'Catalogue',
      emphasisLevel: 'secondary',
      imageAspect: 'square',
      imageSrc: undefined,
    },
    {
      id: 'standards',
      title: 'International Standards',
      shortTitle: 'Standards',
      description: 'Products comply with BS EN, DIN, ISO, ASTM standards. Dubai Municipality approved. GSO & SASO certified for GCC markets.',
      iconKey: 'support',
      sourceRef: 'i18n/en.ts: about.mission_text; products.ts: standards arrays',
      sourceTag: 'Standards',
      emphasisLevel: 'secondary',
      imageAspect: 'square',
      imageSrc: undefined,
    },
    {
      id: 'manufacturing',
      title: 'European Technology',
      shortTitle: 'Technology',
      description: 'State-of-the-art Battenfeld extrusion lines from Europe with computer-controlled processes and in-house quality labs.',
      iconKey: 'manufacturing',
      sourceRef: 'i18n/en.ts: innovation.core_text; about_extended.mfg_extrusion_desc',
      sourceTag: 'Manufacturing',
      emphasisLevel: 'secondary',
      imageAspect: 'square',
      imageSrc: undefined,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

export function getHeroAdvantage(): AdvantageItem {
  return crownAdvantageConfig.items.find(item => item.emphasisLevel === 'hero')!;
}

export function getPrimaryAdvantages(): AdvantageItem[] {
  return crownAdvantageConfig.items.filter(item => item.emphasisLevel === 'primary');
}

export function getSecondaryAdvantages(): AdvantageItem[] {
  return crownAdvantageConfig.items.filter(item => item.emphasisLevel === 'secondary');
}

export function getMediaItems(): MediaVideoItem[] {
  return crownAdvantageConfig.mediaItems || [];
}

// Legacy support
export function getSupportAdvantages(): AdvantageItem[] {
  return crownAdvantageConfig.items.filter(item => item.emphasisLevel !== 'hero');
}
