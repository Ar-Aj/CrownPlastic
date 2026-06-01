'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';

// ─────────────────────────────────────────────────────────────
// YouTube Facade Component
// Renders a static thumbnail with play button. The actual
// YouTube iframe only loads when the user clicks, eliminating
// 1.5s+ of main-thread blocking per embed on initial load.
// ─────────────────────────────────────────────────────────────

interface YouTubeFacadeProps {
  /** YouTube video ID (e.g., 'dQw4w9WgXcQ') */
  videoId: string;
  /** Embed URL (e.g., 'https://www.youtube.com/embed/VIDEO_ID') — used if videoId is not provided */
  embedUrl?: string;
  /** Video title for accessibility */
  title: string;
  /** Optional custom thumbnail URL. Falls back to YouTube's maxresdefault. */
  thumbnailSrc?: string;
  /** CSS class for the outer wrapper */
  className?: string;
  /** Additional iframe params (appended to src) */
  iframeParams?: string;
}

/**
 * Extract video ID from various YouTube URL formats.
 */
function extractVideoId(url: string): string {
  // Handle embed URLs: https://www.youtube.com/embed/VIDEO_ID
  const embedMatch = url.match(/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) return embedMatch[1];

  // Handle shorts URLs: https://www.youtube.com/shorts/VIDEO_ID
  const shortsMatch = url.match(/shorts\/([a-zA-Z0-9_-]{11})/);
  if (shortsMatch) return shortsMatch[1];

  // Handle watch URLs: https://www.youtube.com/watch?v=VIDEO_ID
  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch) return watchMatch[1];

  // Handle youtu.be URLs
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];

  return url; // Return as-is if it's already just an ID
}

export default function YouTubeFacade({
  videoId,
  embedUrl,
  title,
  thumbnailSrc,
  className = '',
  iframeParams = 'autoplay=1&rel=0&modestbranding=1&playsinline=1',
}: YouTubeFacadeProps) {
  const [isActivated, setIsActivated] = useState(false);

  // Resolve the video ID
  const resolvedId = videoId || (embedUrl ? extractVideoId(embedUrl) : '');
  const thumbnailUrl = thumbnailSrc || `https://img.youtube.com/vi/${resolvedId}/hqdefault.jpg`;

  const handleClick = useCallback(() => {
    setIsActivated(true);
  }, []);

  if (!resolvedId) return null;

  return (
    <div
      className={`relative w-full h-full cursor-pointer group ${className}`}
      onClick={!isActivated ? handleClick : undefined}
      role={!isActivated ? 'button' : undefined}
      tabIndex={!isActivated ? 0 : undefined}
      aria-label={!isActivated ? `Play video: ${title}` : undefined}
      onKeyDown={!isActivated ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(); } } : undefined}
    >
      {isActivated ? (
        /* Real iframe — only loads after user interaction */
        <iframe
          src={`https://www.youtube.com/embed/${resolvedId}?${iframeParams}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0 z-10"
        />
      ) : (
        /* Facade — lightweight thumbnail + play button */
        <>
          {/* Thumbnail */}
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 200px"
            loading="lazy"
          />

          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 z-[1]" />

          {/* YouTube Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-[2]">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-red-500 group-hover:scale-110 transition-all duration-300">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
