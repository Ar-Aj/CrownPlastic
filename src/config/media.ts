/**
 * Media & Blogs Page — Static Data Configuration
 * Centralises all YouTube video metadata so the page component stays clean.
 */

export interface YoutubeShort {
  /** YouTube video ID */
  id: string;
  /** Accessible title used for aria-label / iframe title */
  title: string;
  /** Full embed URL */
  embedUrl: string;
}

export const YOUTUBE_SHORTS: YoutubeShort[] = [
  {
    id: 'i-zVQ22IvxQ',
    title: 'Premium UPVC Conduit Pipes',
    embedUrl: 'https://www.youtube.com/embed/i-zVQ22IvxQ',
  },
  {
    id: 'xR8xmTjNCeU',
    title: 'Reliable UPVC Drainage Pipes',
    embedUrl: 'https://www.youtube.com/embed/xR8xmTjNCeU',
  },
  {
    id: 'Eq-mpPNUCHU',
    title: 'Crown Plastic Premium HDPE & PVC Pipe Systems',
    embedUrl: 'https://www.youtube.com/embed/Eq-mpPNUCHU',
  },
];
