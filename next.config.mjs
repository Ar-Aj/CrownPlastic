/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable compression for better performance
  compress: true,
  
  // Remove X-Powered-By header for security
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // 301 Redirects for URL migrations
  async redirects() {
    return [
      {
        source: '/news-media',
        destination: '/media-blogs',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
