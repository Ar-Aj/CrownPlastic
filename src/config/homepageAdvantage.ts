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
      imageSrc: '/images/home/30+Years.jpg',
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
      imageSrc: '/images/home/ProductRange.jpg',
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
      imageSrc: '/images/home/Triple_ISO_Certified.jpg',
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
      imageSrc: '/images/home/Global_Exports.jpg',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECONDARY - Bottom tiles (emphasisLevel: 'secondary')
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quality',
      title: '100% Virgin Materials',
      shortTitle: 'Materials',
      description: 'Pipes and fittings manufactured from 100% virgin PVC and polymer compounds for clean surfaces, stable dimensions and reliable long-term service.',
      iconKey: 'quality',
      sourceRef: 'i18n/en.ts: sustainability_extended.pillar_virgin_desc; about.types.ts: innovationPillars virgin-material',
      sourceTag: 'Catalogue',
      emphasisLevel: 'secondary',
      imageAspect: 'square',
      imageSrc: '/images/home/100_Virgin_Materials.jpg',
    },
    {
      id: 'standards',
      title: 'Standards',
      shortTitle: 'Standards',
      description: 'Piping systems designed and tested to recognised international standards for quality, safety and long-term performance across infrastructure and building projects.',
      iconKey: 'support',
      sourceRef: 'about.types.ts: certifications array; i18n/en.ts: about.overview_text',
      sourceTag: 'Standards',
      emphasisLevel: 'secondary',
      imageAspect: 'square',
      imageSrc: '/images/home/International_Standards.jpg',
    },
    {
      id: 'manufacturing',
      title: 'Technology',
      shortTitle: 'Technology',
      description: 'Modern extrusion lines, in-house tooling and automated checks ensure consistent PVC, PPR and HDPE pipe production for demanding Gulf projects.',
      iconKey: 'manufacturing',
      sourceRef: 'i18n/en.ts: innovation_extended.area_manufacturing_desc; about.types.ts: timeline 2018 European Technology',
      sourceTag: 'Manufacturing',
      emphasisLevel: 'secondary',
      imageAspect: 'square',
      imageSrc: '/images/home/European_Technology.jpg',
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
