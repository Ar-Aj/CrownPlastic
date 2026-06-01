'use client';

import dynamic from 'next/dynamic';
import type { YoutubeShort } from '@/config/media';

// ─────────────────────────────────────────────────────────────
// Legacy VideoItem type — kept so MediaBlogsClient import still works
// ─────────────────────────────────────────────────────────────
export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnailSrc: string;
  videoSrc: string;
  orientation: '9:16' | '16:9';
}

// ─────────────────────────────────────────────────────────────
// Props
// ─────────────────────────────────────────────────────────────
interface MediaVideosSectionProps {
  title: string;
  subtitle?: string;
  /** New YouTube Shorts data — preferred */
  shorts?: YoutubeShort[];
  /** Legacy prop kept for backwards-compat; ignored when shorts is provided */
  videos?: VideoItem[];
}

// ─────────────────────────────────────────────────────────────
// ShortsGrid — uses facade pattern: static thumbnail until user clicks
// ─────────────────────────────────────────────────────────────
import YouTubeFacade from '@/components/common/YouTubeFacade';

function ShortsGrid({ shorts }: { shorts: YoutubeShort[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {shorts.map((short) => (
        <div
          key={short.id}
          className="group flex flex-col gap-4"
        >
          {/* Card */}
          <div
            className={[
              'relative aspect-[9/16] rounded-2xl overflow-hidden',
              'border border-slate-700/50',
              'shadow-xl shadow-blue-900/20',
              'bg-slate-900',
              /* Glassmorphism hover glow */
              'ring-1 ring-white/5',
              'transition-all duration-500',
              'hover:ring-primary/40 hover:shadow-[0_32px_64px_-12px_rgba(0,114,188,0.35)]',
              'hover:border-primary/30',
              'hover:-translate-y-1',
            ].join(' ')}
          >
            {/* Gradient backdrop visible before facade loads */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 pointer-events-none" />

            <YouTubeFacade
              videoId=""
              embedUrl={short.embedUrl}
              title={short.title}
              iframeParams="autoplay=1&rel=0&modestbranding=1&playsinline=1"
              className="z-10"
            />

            {/* Top-right branding badge */}
            <div className="absolute top-3 end-3 z-20 pointer-events-none">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] font-semibold text-white/70 uppercase tracking-wider">
                <svg
                  className="w-3 h-3 text-red-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                YouTube
              </span>
            </div>
          </div>

          {/* Caption */}
          <p className="text-sm font-medium text-slate-300 text-center leading-snug px-2 group-hover:text-white transition-colors duration-300">
            {short.title}
          </p>
        </div>
      ))}
    </div>
  );
}

// Wrap in next/dynamic to guarantee client-only render (no SSR iframe mismatch)
const ShortsGridClient = dynamic(() => Promise.resolve(ShortsGrid), {
  ssr: false,
  loading: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="aspect-[9/16] rounded-2xl bg-slate-800/60 animate-pulse border border-slate-700/40"
        />
      ))}
    </div>
  ),
});

// ─────────────────────────────────────────────────────────────
// Main Export
// ─────────────────────────────────────────────────────────────
export default function MediaVideosSection({
  title,
  subtitle,
  shorts,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  videos: _videos,
}: MediaVideosSectionProps) {
  const hasShorts = shorts && shorts.length > 0;

  return (
    <section className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest">
            Featured Videos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
          )}
        </div>

        {/* YouTube Shorts Grid */}
        {hasShorts ? (
          <ShortsGridClient shorts={shorts!} />
        ) : (
          /* Fallback: no videos at all */
          <p className="text-center text-slate-500">No videos available.</p>
        )}
      </div>
    </section>
  );
}
