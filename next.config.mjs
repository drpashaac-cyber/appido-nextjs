/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      // ۱. صفحه اصلی: /os → /fa (بدون تغییر آدرس)
      {
        source: '/os',
        destination: '/fa',
      },
      // ۲. داشبورد: /os/dashboard → dash.appido.io (بدون تغییر آدرس)
      {
        source: '/os/dashboard',
        destination: 'https://dash.appido.io',
      },
      {
        source: '/os/dashboard/:path*',
        destination: 'https://dash.appido.io/:path*',
      },
      // ۳. پنل مدیریت: /os/owner → owner.appido.io (بدون تغییر آدرس)
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