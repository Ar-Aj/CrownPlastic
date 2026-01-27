/**
 * MAINTENANCE / COMING SOON MODE CONFIGURATION
 * =============================================
 * 
 * This file controls which pages show a "Coming Soon" placeholder
 * instead of their normal content.
 * 
 * HOW TO USE:
 * -----------
 * 1. To enable Coming Soon mode: Set COMING_SOON_MODE = true
 * 2. To disable and show all pages: Set COMING_SOON_MODE = false
 * 3. To add/remove pages from Coming Soon: Edit the COMING_SOON_SLUGS array
 * 
 * After changing COMING_SOON_MODE to false, all pages will immediately
 * render their normal content without any further code changes.
 */

// Master toggle - set to false to restore all pages
export const COMING_SOON_MODE = false;

// Route slugs that should show "Coming Soon" when mode is enabled
export const COMING_SOON_SLUGS = [
  'innovation',
  'media-blogs',
  'resources',
  'contact-us',
] as const;

// Type for the slugs
export type ComingSoonSlug = typeof COMING_SOON_SLUGS[number];

/**
 * Check if a specific page should show "Coming Soon"
 * @param slug - The route slug to check
 * @returns true if the page should show "Coming Soon" placeholder
 */
export function isComingSoon(slug: string): boolean {
  if (!COMING_SOON_MODE) return false;
  return COMING_SOON_SLUGS.includes(slug as ComingSoonSlug);
}
