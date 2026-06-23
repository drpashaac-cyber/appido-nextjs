/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/os/dashboard',
        destination: 'https://dash.appido.io',
      },
      {
        source: '/os/dashboard/:path*',
        destination: 'https://dash.appido.io/:path*',
      },
      {
        source: '/os/owner',
        destination: 'https://owner.appido.io',
      },
      {
        source: '/os/owner/:path*',
        destination: 'https://owner.appido.io/:path*',
      },
    ];
  },
};

export default nextConfig;
