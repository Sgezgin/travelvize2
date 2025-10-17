/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    formats: ['image/avif', 'image/webp'], // modern formatlar
    minimumCacheTTL: 31536000, // 1 yıl cache
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.travelvize.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'www.atlasvize.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },

  experimental: {
    optimizeCss: true, // 🚀 CSS critical optimize aktif
    scrollRestoration: true,
    modern: true, // 🚀 modern JS bundle üret
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // prod'da console.log kaldır
  },

  // Tarayıcı hedeflerini belirt (legacy JS gönderimini durdurur)
  browserslist: {
    production: [">0.3%", "not dead", "not op_mini all"],
    development: ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"],
  },
};

export default nextConfig;
