/** @type {import('next').NextConfig} */

// Security Headers
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https://images.unsplash.com https://www.travelvize.com https://www.atlasvize.com;
      font-src 'self' data:;
      connect-src 'self';
      frame-ancestors 'none';
    `.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim()
  }
]

const nextConfig = {
  // ESLint ayarı (mevcut)
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Resim optimizasyonu ayarları
  images: {
    // Resim formatları önceliği
    formats: ['image/avif', 'image/webp'],
    
    // Minimum cache süresi (1 yıl)
    minimumCacheTTL: 31536000,
    
    // Responsive boyutları
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Remote patterns (mevcut)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.travelvize.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'www.atlasvize.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Performans optimizasyonları
  compress: true,
  
  // Experimental features (Next.js 15 uyumlu)
  experimental: {
    // Optimize CSS
    optimizeCss: true,
    
    // Scroll restoration
    scrollRestoration: true,
  },

  // Production build optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    
    // Remove React DevTools in production
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },

  // Security Headers ve Caching Headers
  async headers() {
    return [
      // Tüm sayfalar için güvenlik başlıkları
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      // Statik dosyalar için cache headers
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Font dosyaları için cache ve CORS
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ]
  },

  // Webpack optimizasyonları
  webpack: (config, { dev, isServer }) => {
    // Production'da source map boyutunu küçült
    if (!dev && !isServer) {
      config.devtool = 'source-map'
    }
    
    // Optimize chunk splitting
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            // Common components chunk
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      }
    }
    
    return config
  },

  // Redirects (eğer gerekiyorsa)
  async redirects() {
    return [
      // Örnek: www olmayan versiyondan www'li versiyona yönlendirme
      // {
      //   source: '/:path*',
      //   has: [
      //     {
      //       type: 'host',
      //       value: 'travel-vize.com',
      //     },
      //   ],
      //   destination: 'https://www.travel-vize.com/:path*',
      //   permanent: true,
      // },
    ]
  },

  // Output configuration
  output: 'standalone',
}

export default nextConfig