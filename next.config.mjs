/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/os',
        destination: '/fa',
        permanent: true,
      },
      {
        source: '/os/dashboard',
        destination: 'https://dash.appido.io',
        permanent: true,
      },
      {
        source: '/os/dashboard/:path*',
        destination: 'https://dash.appido.io/:path*',
        permanent: true,
      },
      {
        source: '/os/owner',
        destination: 'https://owner.appido.io',
        permanent: true,
      },
      {
        source: '/os/owner/:path*',
        destination: 'https://owner.appido.io/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;