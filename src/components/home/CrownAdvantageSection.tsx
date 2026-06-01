'use client';

// ═══════════════════════════════════════════════════════════════════════════════
// CROWN ADVANTAGE SECTION - COMPACT 1-SCREEN LAYOUT
// "Why Choose Us" - Balanced grid fitting ~90vh on desktop
// 
// LAYOUT (Desktop lg+):
// ┌──────────────────────────┬──────────┬──────────┬──────────┐
// │      30+ YEARS           │ Products │  Certs   │ Exports  │  TOP ROW
// │      (Hero Card)         │  5000+   │  3x ISO  │   52+    │  (equal height)
// │      aspect-[4/5]        │          │          │          │
// └──────────────────────────┴──────────┴──────────┴──────────┘
// ┌──────────────────────────┬─────────────────────────────────┐
// │      Technology          │   ┌──────────┐ ┌──────────┐    │  MIDDLE ROW
// │      (compact)           │   │  VIDEO   │ │  VIDEO   │    │  (9:16 videos)
// │                          │   │   9:16   │ │   9:16   │    │
// └──────────────────────────┴───┴──────────┴─┴──────────┴────┘
// ┌──────────────┬──────────────┬──────────────┐
// │  Materials   │  Standards   │  (reserved)  │  BOTTOM ROW
// │              │              │              │  (compact)
// └──────────────┴──────────────┴──────────────┘
// ═══════════════════════════════════════════════════════════════════════════════

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from '@/components/common/LocaleLink';
import {
  Award,
  Zap,
  Truck,
  Shield,
  Package,
  Globe,
  Factory,
  Clock,
  CheckCircle2,
  Play,
  type LucideIcon,
} from 'lucide-react';

import {
  crownAdvantageConfig,
  getHeroAdvantage,
  getPrimaryAdvantages,
  getSecondaryAdvantages,
  getMediaItems,
  type AdvantageItem,
  type IconKey,
  type MediaVideoItem,
  type SourceTag,
  type ImageAspect,
} from '@/config/homepageAdvantage';

// ═══════════════════════════════════════════════════════════════════════════════
// CONSTANTS & MAPS
// ═══════════════════════════════════════════════════════════════════════════════

const iconMap: Record<IconKey, LucideIcon> = {
  quality: Shield,
  innovation: Zap,
  delivery: Truck,
  support: CheckCircle2,
  certifications: Award,
  range: Package,
  exports: Globe,
  manufacturing: Factory,
  experience: Clock,
};

const tagColors: Record<SourceTag, string> = {
  Catalogue: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
  ISO: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  Exports: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  Manufacturing: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  Standards: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
};

// ═══════════════════════════════════════════════════════════════════════════════
// CARD MEDIA COMPONENT - Locked aspect ratio containers
// ═══════════════════════════════════════════════════════════════════════════════

interface CardMediaProps {
  /** Aspect ratio: square (1:1), portrait (9:16), none (skip) */
  aspect: ImageAspect;
  /** Optional image source */
  imageSrc?: string;
  /** Alt text for image */
  alt?: string;
  /** Icon component for fallback */
  FallbackIcon?: LucideIcon;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

/** Locked aspect ratio container with image or icon fallback */
function CardMedia({ aspect, imageSrc, alt = '', FallbackIcon, size = 'md' }: CardMediaProps) {
  if (aspect === 'none') return null;

  // Fixed square container sizes per size variant
  const squareSizes = {
    sm: 'w-full max-w-[56px] md:max-w-[72px]',
    md: 'w-full max-w-[72px] md:max-w-[88px]',
    lg: 'w-full max-w-[88px] md:max-w-[100px]',
    hero: 'w-14 md:w-16 lg:w-20',
  };

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    hero: 'w-8 h-8 md:w-10 md:h-10',
  };

  // Square (1:1) container for data card icons/illustrations
  if (aspect === 'square') {
    return (
      <div className={`${squareSizes[size]} flex-shrink-0`}>
        <div className="aspect-square w-full rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={alt}
              width={88}
              height={88}
              className="w-full h-full object-contain"
              sizes="88px"
            />
          ) : FallbackIcon ? (
            <FallbackIcon className={`${iconSizes[size]} text-sky-300`} />
          ) : (
            <div className="w-1/2 h-1/2 rounded-lg bg-sky-500/20" />
          )}
        </div>
      </div>
    );
  }

  // Portrait (9:16) container for video thumbnails - handled in VideoPanel
  return null;
}

/**
 * YouTubeShortEmbed — Click-to-load facade pattern.
 * Shows a lightweight thumbnail + play button on initial render.
 * The real YouTube iframe only loads after user interaction,
 * eliminating ~1.5s of main-thread blocking per embed.
 */
import YouTubeFacade from '@/components/common/YouTubeFacade';

function YouTubeShortEmbed({
  video,
  hideOverlayTitle = false,
}: {
  video: MediaVideoItem;
  hideOverlayTitle?: boolean;
}) {
  return (
    <div className="group/video relative w-full h-full rounded-xl overflow-hidden bg-slate-900 border border-white/10 hover:border-sky-500/40 transition-colors">
      {/* Aspect-ratio shell — height tracks width, no fixed px/vh */}
      <div className="aspect-[9/16] w-full h-full relative">
        {/* Dark backdrop shown before facade loads */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 pointer-events-none" />

        {video.videoSrc ? (
          <YouTubeFacade
            videoId=""
            embedUrl={video.videoSrc}
            title={video.title}
            iframeParams="autoplay=1&rel=0&modestbranding=1&playsinline=1"
          />
        ) : (
          /* Fallback placeholder when no videoSrc is set */
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-800/30 via-slate-800/50 to-slate-900/70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-9 h-9 md:w-11 md:h-11 bg-white/25 rounded-full flex items-center justify-center shadow-lg">
                <Play className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" fill="currentColor" />
              </div>
            </div>
          </>
        )}

        {/* Title caption below facade (not on top, so it doesn't block the player) */}
        {!hideOverlayTitle && (
          <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-20">
            <p className="text-xs md:text-sm font-medium text-white leading-tight line-clamp-2 drop-shadow-md">
              {video.shortTitle || video.title}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMATED COUNT-UP HOOK
// ═══════════════════════════════════════════════════════════════════════════════

function useCountUp(targetValue: string, isInView: boolean, duration = 2000) {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    const numMatch = targetValue.match(/^(\d+)/);
    if (!numMatch) {
      setDisplay(targetValue);
      return;
    }

    const target = parseInt(numMatch[1], 10);
    const suffix = targetValue.slice(numMatch[1].length);
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // Quartic ease out
      const current = Math.floor(eased * target);
      setDisplay(`${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, targetValue, duration]);

  return display;
}

// ═══════════════════════════════════════════════════════════════════════════════
// VIDEO MODAL
// ═══════════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════════
// DATA TILE COMPONENT (Primary/Secondary cards)
// ═══════════════════════════════════════════════════════════════════════════════

interface DataTileProps {
  item: AdvantageItem;
  size?: 'sm' | 'md' | 'lg';
  showDescription?: boolean;
  delay?: number;
}

function DataTile({ item, size = 'md', showDescription = false, delay = 0 }: DataTileProps) {
  const Icon = iconMap[item.iconKey];
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const sizeClasses = {
    sm: 'p-3 md:p-4',
    md: 'p-4 md:p-5',
    lg: 'p-5 md:p-6',
  };

  const statSizes = {
    sm: 'text-xl md:text-2xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-4xl',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group relative h-full"
    >
      <div
        className={`
          relative h-full rounded-xl overflow-hidden
          bg-white/[0.06] backdrop-blur-sm
          border border-white/[0.12]
          transition-all duration-500 ease-out
          hover:bg-white/[0.10] hover:border-sky-500/40
          hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]
          ${sizeClasses[size]}
        `}
      >
        {/* Animated shine sweep on hover */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

        {/* Source badge */}
        <div className={`absolute top-2 right-2 px-2 py-0.5 text-[10px] font-medium rounded border ${tagColors[item.sourceTag]}`}>
          {item.sourceTag}
        </div>

        <div className="relative z-10 flex flex-col h-full">
          {/* CardMedia - Locked 1:1 aspect for icons/illustrations */}
          <div className="mb-3">
            <CardMedia
              aspect={item.imageAspect}
              imageSrc={item.imageSrc}
              alt={item.shortTitle || item.title}
              FallbackIcon={Icon}
              size={size}
            />
          </div>

          {/* Stat + Label */}
          {item.highlightStat && (
            <div className="mb-1">
              <span className={`font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent ${statSizes[size]}`}>
                {item.highlightStat}
              </span>
              {item.statLabel && (
                <span className="ml-1.5 text-xs text-slate-400 uppercase tracking-wider">{item.statLabel}</span>
              )}
            </div>
          )}

          {/* Title */}
          <h4 className="font-semibold text-slate-100 text-sm leading-tight mb-1">
            {item.shortTitle || item.title}
          </h4>

          {/* Description (optional) */}
          {showDescription && (
            <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mt-auto">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// HERO STAT BLOCK (Left column main display)
// ═══════════════════════════════════════════════════════════════════════════════

function HeroStatBlock({ item, compact = false }: { item: AdvantageItem; compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const animatedValue = useCountUp(item.highlightStat || '0', isInView, 2500);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative h-full"
    >
      {/* Floating glow behind */}
      <div className="absolute -inset-4 bg-gradient-to-br from-sky-500/10 via-cyan-500/5 to-transparent rounded-3xl blur-2xl" />

      {/* Hero card - compact aspect ratio for desktop, max-height constrained */}
      <div className={`
        relative bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl lg:rounded-3xl 
        p-5 md:p-6 lg:p-8 overflow-hidden h-full
        border border-white/15 shadow-2xl
        ${compact ? 'aspect-[5/4]' : 'aspect-[4/5] lg:aspect-auto lg:min-h-0'}
      `}>
        {/* Source badge */}
        <div className={`absolute top-3 right-3 lg:top-4 lg:right-4 z-20 px-2 py-0.5 lg:px-2.5 lg:py-1 text-[10px] lg:text-xs font-medium rounded-full border backdrop-blur-sm ${tagColors[item.sourceTag]}`}>
          {item.sourceTag}
        </div>

        {/* Full-cover background image */}
        {item.imageSrc && (
          <div className="absolute inset-0 opacity-25">
            <Image
              src={item.imageSrc}
              alt={item.title}
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 45vw, 300px"
            />
          </div>
        )}

        {/* Text content on top of image */}
        <div className="relative z-10 flex flex-col h-full justify-between text-white">
          {/* Big animated number */}
          {item.highlightStat && (
            <motion.div
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-1 lg:mb-2 bg-gradient-to-br from-white via-sky-100 to-cyan-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {animatedValue}
            </motion.div>
          )}

          {/* Stat label */}
          {item.statLabel && (
            <div className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 lg:mb-3 text-sky-300/90">
              {item.statLabel}
            </div>
          )}

          {/* Title */}
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">{item.title}</h3>

          {/* Description - hidden on compact mobile */}
          {item.description && (
            <p className={`text-sm text-slate-200 leading-relaxed ${compact ? 'hidden md:block' : ''} line-clamp-3 lg:line-clamp-none`}>
              {item.description}
            </p>
          )}
        </div>

        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl lg:rounded-3xl border-2 border-transparent pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.3), transparent)',
            backgroundSize: '200% 100%',
          }}
          animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// VIDEO PANEL (9:16 videos side by side - aspect-driven, no vh hacks)
// ═══════════════════════════════════════════════════════════════════════════════

interface VideoPanelProps {
  videos: MediaVideoItem[];
  /** Inline mode: no wrapper card, just videos */
  inline?: boolean;
}

function VideoPanel({ videos, inline = false }: VideoPanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Inline mode for desktop (lg+): horizontal cards with thumbnail + text side-by-side
  // Mobile/tablet: thumbnail only, stacked
  if (inline) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-2 gap-3 lg:gap-5 h-full"
      >
        {videos.slice(0, 2).map((video) => (
          <div key={video.id} className="h-full">
            {/* Desktop (lg+): Horizontal card — YouTube iframe left, text right */}
            <div className="hidden lg:flex lg:flex-row lg:items-stretch lg:gap-4 h-full bg-white/[0.04] rounded-xl border border-white/[0.08] overflow-hidden group/card hover:bg-white/[0.06] transition-colors relative z-10">
              {/* iframe container — fixed width, 9:16 aspect */}
              <div className="flex-none w-[100px] xl:w-[120px] h-full">
                <YouTubeShortEmbed video={video} hideOverlayTitle />
              </div>
              {/* Text content — fills remaining width, vertically centered */}
              <div className="flex-1 flex flex-col justify-center py-3 pr-3 min-w-0">
                <h5 className="text-sm font-semibold text-white leading-snug mb-1 line-clamp-2">
                  {video.title}
                </h5>
                <Link href="/media-blogs" className="inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 transition-colors mt-1">
                  Watch on YouTube →
                </Link>
              </div>
            </div>

            {/* Mobile/Tablet (< lg): iframe only with overlay title */}
            <div className="lg:hidden h-full">
              <div className="w-full max-w-[140px] mx-auto h-full">
                <YouTubeShortEmbed video={video} />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    );
  }

  // Card mode: wrapped in a subtle card with header
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.12] rounded-xl p-3 md:p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-semibold text-slate-200">
            {crownAdvantageConfig.mediaCardTitle}
          </h4>
          <Link href="/media-blogs" className="text-xs text-sky-400 hover:text-sky-300 transition-colors">
            View All →
          </Link>
        </div>

        {/* Videos grid — 2 columns, live YouTube iframes, aspect-driven height */}
        <div className="grid grid-cols-2 gap-2 md:gap-3">
          {videos.slice(0, 2).map((video) => (
            <div key={video.id} className="h-full">
              <YouTubeShortEmbed video={video} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION HEADER
// ═══════════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION HEADER
// ═══════════════════════════════════════════════════════════════════════════════

function SectionHeader({
  label,
  title,
  accent
}: {
  label: string;
  title: string;
  accent: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-6 md:mb-8 lg:mb-0"
    >
      <span className="inline-block px-3 py-1 bg-sky-500/20 text-sky-300 text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
        {label}
      </span>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
        {title}{' '}
        <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
          {accent}
        </span>
      </h2>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN SECTION COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
import { useT, TranslationPath } from '@/i18n';

export default function CrownAdvantageSection() {
  const t = useT();

  // Helper to map config IDs to translation keys
  const getTranslationKey = (id: string) => {
    const map: Record<string, string> = {
      'experience': 'experience',
      'product-range': 'range',
      'certifications': 'certifications',
      'exports': 'exports',
      'quality': 'materials',
      'standards': 'standards',
      'manufacturing': 'technology',
    };
    return map[id] || id;
  };

  const translateItem = (item: AdvantageItem): AdvantageItem => {
    const key = getTranslationKey(item.id);
    // Cast to any to access dynamic properties on t() result which is strictly typed
    // But here we use path strings. type check might fail if types are strict.
    // We already updated TranslationPath to be recursive.

    // safe check: if item is undefined return it
    if (!item) return item;

    return {
      ...item,
      title: t(`home.advantage.items.${key}.title` as TranslationPath),
      description: t(`home.advantage.items.${key}.description` as TranslationPath),
      statLabel: item.statLabel ? t(`home.advantage.items.${key}.stat_label` as TranslationPath) : item.statLabel,
    };
  };

  const heroItem = translateItem(getHeroAdvantage());
  const primaryItems = getPrimaryAdvantages().map(translateItem);
  const secondaryItems = getSecondaryAdvantages().map(translateItem);

  const mediaItems = getMediaItems().map((item, idx) => ({
    ...item,
    title: idx === 0 ? t('home.advantage.video_titles.choose_us') : t('home.advantage.video_titles.factory'),
    shortTitle: idx === 0 ? t('home.advantage.video_titles.choose_us') : t('home.advantage.video_titles.factory'),
  }));

  // Technology card is the first secondary item (Manufacturing/Technology)
  const technologyCard = secondaryItems.find(item => item.id === 'manufacturing') || secondaryItems[2];
  // Remaining secondary cards (Materials, Standards)
  const bottomSecondaryCards = secondaryItems.filter(item => item.id !== 'manufacturing');

  const headerProps = {
    label: t('home.advantage.heading_label'),
    title: t('home.advantage.heading_title'),
    accent: t('home.advantage.heading_accent'),
  };

  return (
    <section
      id={crownAdvantageConfig.sectionId}
      className="relative py-12 md:py-16 lg:py-12 overflow-hidden"
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          BACKGROUND
      ═══════════════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020c18] via-[#041225] to-[#020c18]" />

      {/* Grid pattern - slightly more visible */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(14,165,233,0.12)_0%,transparent_60%)]" />

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />

      {/* ═══════════════════════════════════════════════════════════════════════
          CONTENT CONTAINER - Matches hero section padding/width
      ═══════════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none">

        {/* ═══════════════════════════════════════════════════════════════════
            MOBILE LAYOUT (< md): Compact vertical stack
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="md:hidden space-y-4">
          <SectionHeader {...headerProps} />

          {/* Hero stat - compact aspect */}
          <HeroStatBlock item={heroItem} compact />

          {/* Primary cards - 2x2 grid (3 items + 1 tech) */}
          <div className="grid grid-cols-2 gap-3">
            {primaryItems.slice(0, 2).map((item, idx) => (
              <DataTile key={item.id} item={item} size="sm" delay={idx * 0.1} />
            ))}
            {primaryItems[2] && (
              <DataTile key={primaryItems[2].id} item={primaryItems[2]} size="sm" delay={0.2} />
            )}
            {technologyCard && (
              <DataTile key={technologyCard.id} item={technologyCard} size="sm" delay={0.3} />
            )}
          </div>

          {/* Video panel - aspect-driven, no fixed vh */}
          {mediaItems.length > 0 && (
            <VideoPanel videos={mediaItems} />
          )}

          {/* Remaining secondary cards */}
          <div className="grid grid-cols-2 gap-3">
            {bottomSecondaryCards.map((item, idx) => (
              <DataTile key={item.id} item={item} size="sm" showDescription delay={idx * 0.1} />
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            TABLET LAYOUT (md to < lg): Balanced 2-column
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="hidden md:block lg:hidden">
          <SectionHeader {...headerProps} />

          {/* Top row: Hero + Primary stats */}
          <div className="grid grid-cols-[1fr_1fr] gap-4 mt-5">
            {/* Left: Hero */}
            <HeroStatBlock item={heroItem} />

            {/* Right: 3 primary stats stacked */}
            <div className="grid grid-rows-3 gap-3">
              {primaryItems.map((item, idx) => (
                <DataTile key={item.id} item={item} size="sm" delay={idx * 0.1} />
              ))}
            </div>
          </div>

          {/* Middle row: Technology + Videos */}
          <div className="grid grid-cols-[1fr_2fr] gap-4 mt-4">
            {/* Technology card */}
            {technologyCard && (
              <DataTile key={technologyCard.id} item={technologyCard} size="md" showDescription delay={0.3} />
            )}

            {/* Video panel - inline, aspect-driven */}
            {mediaItems.length > 0 && (
              <VideoPanel videos={mediaItems} inline />
            )}
          </div>

          {/* Bottom row: remaining secondary cards */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {bottomSecondaryCards.map((item, idx) => (
              <DataTile key={item.id} item={item} size="sm" showDescription delay={idx * 0.1} />
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            DESKTOP LAYOUT (lg+): Compact 3-row dashboard (~85-90vh)
            Row 1: Hero (45%) + 3 Primary stats (55%)
            Row 2: Technology (30%) + 2 Videos 9:16 (70%)
            Row 3: 2 Secondary cards
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="hidden lg:block">

          {/* Section header */}
          <SectionHeader {...headerProps} />

          {/* ─────────────────────────────────────────────────────────────────
              ROW 1: Hero + Primary Stats (equal height)
          ───────────────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-[45%_1fr] xl:grid-cols-[42%_1fr] gap-5 xl:gap-6 mt-6">

            {/* Hero card - height matches primary row */}
            <HeroStatBlock item={heroItem} />

            {/* Primary stats - 3 columns, stretch to match hero height */}
            <div className="grid grid-cols-3 gap-4 xl:gap-5">
              {primaryItems.map((item, idx) => (
                <DataTile key={item.id} item={item} size="md" showDescription delay={0.1 + idx * 0.1} />
              ))}
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────────
              ROW 2: Technology + Videos (height-capped, compact 9:16)
              Max height ~32vh to keep section within ~90vh total
          ───────────────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-[1fr_2fr] xl:grid-cols-[28%_1fr] gap-5 xl:gap-6 mt-5 mb-8 lg:mb-10 max-h-[32vh] xl:max-h-[30vh]">

            {/* Technology card - fills row height */}
            {technologyCard && (
              <div className="h-full">
                <DataTile key={technologyCard.id} item={technologyCard} size="md" showDescription delay={0.3} />
              </div>
            )}

            {/* Videos - compact 9:16 containers within capped row */}
            {mediaItems.length > 0 && (
              <div className="flex flex-col h-full overflow-hidden">
                <div className="flex items-center justify-between mb-2 flex-shrink-0">
                  <h4 className="text-sm font-semibold text-slate-200">
                    {t('home.advantage.media_card_title')}
                  </h4>
                  <Link href="/media-blogs" className="text-xs text-sky-400 hover:text-sky-300 transition-colors">
                    {t('nav.view_all')} →
                  </Link>
                </div>
                <div className="flex-1 min-h-0">
                  <VideoPanel videos={mediaItems} inline />
                </div>
              </div>
            )}
          </div>

          {/* ─────────────────────────────────────────────────────────────────
              ROW 3: Remaining Secondary Cards (clean 50/50 split, full width)
          ───────────────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 gap-5 xl:gap-6 pt-4">
            {bottomSecondaryCards.map((item, idx) => (
              <DataTile key={item.id} item={item} size="sm" showDescription delay={0.4 + idx * 0.1} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

export { CrownAdvantageSection };


