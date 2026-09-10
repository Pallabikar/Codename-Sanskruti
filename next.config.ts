import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'codename-sanskruti.vercel.app',
          },
        ],
        destination: 'https://www.sanskruti.ind.in/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'codename-sanskruti-6bluj8xnf-pallabis-projects.vercel.app',
          },
        ],
        destination: 'https://www.sanskruti.ind.in/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
