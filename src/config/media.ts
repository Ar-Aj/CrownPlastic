/**
 * Media & Blogs Page — Static Data Configuration
 * Centralises all YouTube video metadata so the page component stays clean.
 */

export interface YoutubeShort {
  /** YouTube video ID */
  id: string;
  /** Accessible title used for aria-label / iframe title */
  title: string;
  titleAr?: string;
  titleFr?: string;
  /** Full embed URL */
  embedUrl: string;
}

export const YOUTUBE_SHORTS: YoutubeShort[] = [
  {
    id: 'i-zVQ22IvxQ',
    title: 'Premium UPVC Conduit Pipes',
    titleAr: 'أنابيب قنوات UPVC متميزة',
    titleFr: 'Conduits UPVC Premium',
    embedUrl: 'https://www.youtube.com/embed/i-zVQ22IvxQ',
  },
  {
    id: 'xR8xmTjNCeU',
    title: 'Reliable UPVC Drainage Pipes',
    titleAr: 'أنابيب صرف UPVC موثوقة',
    titleFr: 'Tuyaux d\'Évacuation UPVC Fiables',
    embedUrl: 'https://www.youtube.com/embed/xR8xmTjNCeU',
  },
  {
    id: 'Eq-mpPNUCHU',
    title: 'Crown Plastic Premium HDPE & PVC Pipe Systems',
    titleAr: 'أنظمة أنابيب HDPE و PVC المتميزة من كراون بلاستيك',
    titleFr: 'Systèmes de Tuyaux HDPE et PVC Premium Crown Plastic',
    embedUrl: 'https://www.youtube.com/embed/Eq-mpPNUCHU',
  },
];

