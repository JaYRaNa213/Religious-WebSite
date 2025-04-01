/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Correct usage for allowedDevOrigins in Next.js 15.2.4+
  experimental: {
    allowedDevOrigins: [
      'http://localhost:3000', // Local development
      'http://192.168.240.43:3000', // Network access
    ],
  },

  // ✅ Correct CORS headers to prevent Fast Refresh reload issues
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Allow all origins (update if needed)
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS', // Allowed HTTP methods
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization', // Allowed headers
          },
        ],
      },
      {
        // ✅ Add special rule for Next.js internal resources to avoid Fast Refresh issues
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },

  // ✅ Rewrite API requests to the backend
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:7000/api/:path*', // Proxy API requests to backend
      },
    ];
  },
};

export default nextConfig;
