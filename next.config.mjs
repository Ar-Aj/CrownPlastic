/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Static HTML Export ──────────────────────────────────────────────────────
  output: 'export',

  // Enable compression for better performance
  compress: true,

  // Remove X-Powered-By header for security
  poweredByHeader: false,

  // Images must be unoptimized for static export (no Node.js server)
  images: {
    unoptimized: true,
  },

  // Produce /route/index.html instead of /route.html for clean URLs on Apache.
  // IMPORTANT: All canonical URLs MUST include a trailing slash to match this setting.
  // If changed, update ALL canonical/alternates URLs in layout.tsx and page metadata.
  trailingSlash: true,
};

export default nextConfig;
