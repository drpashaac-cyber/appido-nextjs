/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/os',
        destination: '/os/fa',
        permanent: true,
      },
      {
        source: '/os/dash',
        destination: '/os/dashboard',
        permanent: true,
      },
      {
        source: '/owner',
        destination: '/os/owner',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
