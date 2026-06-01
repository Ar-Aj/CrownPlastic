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

  // Produce /route/index.html instead of /route.html for clean URLs on Apache
  trailingSlash: true,
};

export default nextConfig;
