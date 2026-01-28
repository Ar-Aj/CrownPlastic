'use client';

// ═══════════════════════════════════════════════════════════════════════════════
// CROWN ADVANTAGE SECTION - DATA DASHBOARD LAYOUT
// "Why Choose Us" - Full viewport control room style
// 
// LAYOUT (Desktop lg+):
// ┌────────────────────────┬─────────────────────────────────────────────────────┐
// │                        │  ┌─────────┐ ┌─────────┐ ┌─────────┐              │
// │      LEFT ZONE         │  │ 5,000+  │ │  3x ISO │ │   52+   │  PRIMARY     │
// │       (40%)            │  │Products │ │  Certs  │ │Countries│  ROW         │
// │                        │  └─────────┘ └─────────┘ └─────────┘              │
// │   ┌─────────────────┐  │  ┌─────────┬───────────────────────┐              │
// │   │     30+         │  │  │ 50+ Yr  │  ┌───────┐ ┌───────┐ │              │
// │   │    YEARS        │  │  │ Virgin  │  │ VIDEO │ │ VIDEO │ │              │
// │   │   ───────       │  │  │Materials│  │  9:16 │ │  9:16 │ │  BOTTOM      │
// │   │  Excellence     │  │  ├─────────┤  │       │ │       │ │  ROW         │
// │   │                 │  │  │ Int'l   │  │       │ │       │ │              │
// │   │  + mini stats   │  │  │Standards│  └───────┘ └───────┘ │              │
// │   └─────────────────┘  │  └─────────┴───────────────────────┘              │
// └────────────────────────┴─────────────────────────────────────────────────────┘
// ═══════════════════════════════════════════════════════════════════════════════

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
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
  X,
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

/** Portrait video thumbnail with locked 9:16 aspect */
function VideoThumbnail({ 
  video, 
  onPlay,
  maxHeight = false,
}: { 
  video: MediaVideoItem; 
  onPlay: () => void;
  maxHeight?: boolean;
}) {
  return (
    <button
      onClick={onPlay}
      className="group/video relative w-full rounded-lg overflow-hidden bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
    >
      {/* 9:16 aspect ratio container */}
      <div className={`aspect-[9/16] w-full ${maxHeight ? 'max-h-[60vh]' : ''} relative`}>
        {/* Background tint (stable layout even without image) */}
        <div className="absolute inset-0 bg-white/5 rounded-lg" />
        
        {video.thumbnailSrc ? (
          <Image
            src={video.thumbnailSrc}
            alt={video.title}
            fill
            className="object-cover object-center opacity-70 group-hover/video:opacity-90 transition-opacity"
            sizes="(max-width: 768px) 50vw, 200px"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-slate-900/60 to-slate-900/80" />
        )}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 group-hover/video:bg-white/30 rounded-full flex items-center justify-center transition-all group-hover/video:scale-110">
            <Play className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" fill="currentColor" />
          </div>
        </div>
        
        {/* Duration badge */}
        {video.duration && (
          <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-black/60 text-white text-[10px] rounded">
            {video.duration}
          </div>
        )}
        
        {/* Title at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3">
          <p className="text-xs md:text-sm font-medium text-white leading-tight line-clamp-2">
            {video.shortTitle || video.title}
          </p>
        </div>
      </div>
    </button>
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

function VideoModal({ video, isOpen, onClose }: { video: MediaVideoItem | null; isOpen: boolean; onClose: () => void }) {
  if (!isOpen || !video) return null;
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-lg bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
          <div className="aspect-[9/16] max-h-[80vh] bg-slate-800 flex items-center justify-center">
            {video.videoSrc ? (
              <video src={video.videoSrc} controls autoPlay className="w-full h-full object-cover" />
            ) : (
              <div className="text-center text-slate-400">
                <Play className="w-12 h-12 mx-auto mb-3 opacity-40" />
                <p className="text-sm">Video coming soon</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

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
          bg-white/[0.03] backdrop-blur-sm
          border border-white/10
          transition-all duration-500 ease-out
          hover:bg-white/[0.07] hover:border-sky-500/40
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

function HeroStatBlock({ item }: { item: AdvantageItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const animatedValue = useCountUp(item.highlightStat || '0', isInView, 2500);
  const Icon = iconMap[item.iconKey];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative"
    >
      {/* Floating glow behind */}
      <div className="absolute -inset-4 bg-gradient-to-br from-sky-500/10 via-cyan-500/5 to-transparent rounded-3xl blur-2xl" />
      
      {/* Hero card - full 3:4 card with image covering entire background */}
      <div className="relative bg-gradient-to-br from-slate-800 to-blue-900 rounded-3xl p-6 md:p-8 lg:p-10 overflow-hidden aspect-[3/4] border border-white/10 shadow-2xl">
        {/* Source badge */}
        <div className={`absolute top-4 right-4 z-20 px-2.5 py-1 text-xs font-medium rounded-full border backdrop-blur-sm ${tagColors[item.sourceTag]}`}>
          {item.sourceTag}
        </div>
        
        {/* Full-cover background image */}
        {item.imageSrc && (
          <div className="absolute inset-0 opacity-30">
            <Image
              src={item.imageSrc}
              alt={item.title}
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 400px, 300px"
            />
          </div>
        )}
        
        {/* Text content on top of image */}
        <div className="relative z-10 flex flex-col h-full justify-between text-white">
          {/* Big animated number */}
          {item.highlightStat && (
            <motion.div
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-2 bg-gradient-to-br from-white via-sky-100 to-cyan-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {animatedValue}
            </motion.div>
          )}
          
          {/* Stat label */}
          {item.statLabel && (
            <div className="text-xl md:text-2xl font-semibold mb-4 text-sky-300/90">
              {item.statLabel}
            </div>
          )}
          
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{item.title}</h3>
          
          {/* Description */}
          {item.description && (
            <p className="text-sm md:text-base text-slate-200 leading-relaxed">
              {item.description}
            </p>
          )}
        </div>
        
        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-transparent pointer-events-none"
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
// VIDEO PANEL (9:16 videos side by side)
// ═══════════════════════════════════════════════════════════════════════════════

interface VideoPanelProps {
  videos: MediaVideoItem[];
  onPlayVideo: (video: MediaVideoItem) => void;
}

function VideoPanel({ videos, onPlayVideo }: VideoPanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="h-full"
    >
      <div className="relative h-full bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-3 md:p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-semibold text-slate-200">
            {crownAdvantageConfig.mediaCardTitle}
          </h4>
          <Link href="/media-blogs" className="text-xs text-sky-400 hover:text-sky-300 transition-colors">
            View All →
          </Link>
        </div>
        
        {/* Videos grid - 2 columns with locked 9:16 aspect */}
        <div className="grid grid-cols-2 gap-2 md:gap-3 h-[calc(100%-2rem)]">
          {videos.slice(0, 2).map((video) => (
            <VideoThumbnail
              key={video.id}
              video={video}
              onPlay={() => onPlayVideo(video)}
              maxHeight
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION HEADER
// ═══════════════════════════════════════════════════════════════════════════════

function SectionHeader() {
  const { headingLabel, headingTitle, headingAccent } = crownAdvantageConfig;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-6 md:mb-8 lg:mb-0"
    >
      <span className="inline-block px-3 py-1 bg-sky-500/20 text-sky-300 text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
        {headingLabel}
      </span>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
        {headingTitle}{' '}
        <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
          {headingAccent}
        </span>
      </h2>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN SECTION COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default function CrownAdvantageSection() {
  const [activeVideo, setActiveVideo] = useState<MediaVideoItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroItem = getHeroAdvantage();
  const primaryItems = getPrimaryAdvantages();
  const secondaryItems = getSecondaryAdvantages();
  const mediaItems = getMediaItems();

  const handlePlayVideo = useCallback((video: MediaVideoItem) => {
    setActiveVideo(video);
    setIsModalOpen(true);
  }, []);

  return (
    <section
      id={crownAdvantageConfig.sectionId}
      className="relative min-h-[90vh] lg:min-h-screen py-[6vh] overflow-hidden"
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          BACKGROUND
      ═══════════════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020c18] via-[#041225] to-[#020c18]" />
      
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(14,165,233,0.12)_0%,transparent_60%)]" />
      
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />

      {/* ═══════════════════════════════════════════════════════════════════════
          CONTENT CONTAINER
      ═══════════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-6xl xl:max-w-7xl mx-auto px-[4vw] h-full">
        
        {/* ═══════════════════════════════════════════════════════════════════
            MOBILE LAYOUT (< md): Vertical stack
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="md:hidden space-y-4">
          <SectionHeader />
          
          {/* Hero stat */}
          <HeroStatBlock item={heroItem} />
          
          {/* Video panel - full width, limited height */}
          {mediaItems.length > 0 && (
            <div className="h-[50vh]">
              <VideoPanel videos={mediaItems} onPlayVideo={handlePlayVideo} />
            </div>
          )}
          
          {/* Primary cards */}
          <div className="grid grid-cols-2 gap-3">
            {primaryItems.map((item, idx) => (
              <DataTile key={item.id} item={item} size="sm" delay={idx * 0.1} />
            ))}
          </div>
          
          {/* Secondary cards */}
          <div className="grid grid-cols-2 gap-3">
            {secondaryItems.map((item, idx) => (
              <DataTile key={item.id} item={item} size="sm" showDescription delay={idx * 0.1} />
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            TABLET LAYOUT (md to < lg): 2-column
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="hidden md:block lg:hidden">
          <SectionHeader />
          
          <div className="grid grid-cols-2 gap-5 mt-6">
            {/* Left column: Hero */}
            <div className="row-span-2">
              <HeroStatBlock item={heroItem} />
            </div>
            
            {/* Right column: Video panel */}
            <div className="h-[45vh]">
              <VideoPanel videos={mediaItems} onPlayVideo={handlePlayVideo} />
            </div>
            
            {/* Right column continues: Primary + Secondary */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {primaryItems.slice(0, 2).map((item, idx) => (
                  <DataTile key={item.id} item={item} size="sm" delay={idx * 0.1} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom row: remaining cards */}
          <div className="grid grid-cols-4 gap-4 mt-5">
            {[...primaryItems.slice(2), ...secondaryItems].map((item, idx) => (
              <DataTile key={item.id} item={item} size="sm" showDescription delay={idx * 0.1} />
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            DESKTOP LAYOUT (lg+): Two-zone dashboard
            Left zone (40%): Header + Hero stat block
            Right zone (60%): Data grid + Video panel
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="hidden lg:grid lg:grid-cols-[40%_1fr] xl:grid-cols-[38%_1fr] gap-6 xl:gap-8 min-h-[80vh] items-center">
          
          {/* ─────────────────────────────────────────────────────────────────
              LEFT ZONE: Header + Hero
          ───────────────────────────────────────────────────────────────── */}
          <div className="space-y-6 xl:space-y-8">
            <SectionHeader />
            <HeroStatBlock item={heroItem} />
            
            {/* Mini stats below hero */}
            <div className="grid grid-cols-2 gap-3">
              {secondaryItems.slice(0, 2).map((item, idx) => (
                <DataTile key={item.id} item={item} size="sm" showDescription delay={0.4 + idx * 0.1} />
              ))}
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────────
              RIGHT ZONE: Data grid + Video panel
          ───────────────────────────────────────────────────────────────── */}
          <div className="grid grid-rows-[auto_1fr] gap-4 xl:gap-5 h-full">
            
            {/* Top row: Primary data tiles */}
            <div className="grid grid-cols-3 gap-4 xl:gap-5">
              {primaryItems.map((item, idx) => (
                <DataTile key={item.id} item={item} size="md" showDescription delay={0.2 + idx * 0.1} />
              ))}
            </div>
            
            {/* Bottom row: Secondary tile + Video panel */}
            <div className="grid grid-cols-[1fr_2fr] xl:grid-cols-[1fr_1.8fr] gap-4 xl:gap-5">
              
              {/* Secondary tile stack */}
              <div className="flex flex-col gap-4">
                {secondaryItems.slice(2).map((item, idx) => (
                  <DataTile key={item.id} item={item} size="md" showDescription delay={0.5 + idx * 0.1} />
                ))}
              </div>
              
              {/* Video panel - 9:16 videos */}
              {mediaItems.length > 0 && (
                <VideoPanel videos={mediaItems} onPlayVideo={handlePlayVideo} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal video={activeVideo} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

export { CrownAdvantageSection };
