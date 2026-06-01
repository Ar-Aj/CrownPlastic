'use client';

// ═══════════════════════════════════════════════════════════════════════════════
// GOOGLE ANALYTICS 4 PROVIDER — Client Component wrapper
// ═══════════════════════════════════════════════════════════════════════════════
// Renders the GA4 script tag via @next/third-parties.
// Isolated as a Client Component so layout.tsx can stay a Server Component.
// ═══════════════════════════════════════════════════════════════════════════════

// import { GoogleAnalytics } from '@next/third-parties/google';

/**
 * The GA4 Measurement ID.
 * ⚠️  Replace with the real ID before deploying to production.
 */
// const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

export default function GoogleAnalyticsProvider() {
    // ⚠️  GA4 disabled: Measurement ID is still a placeholder.
    // Uncomment the line below once the real ID is set.
    // return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
    return null;
}
