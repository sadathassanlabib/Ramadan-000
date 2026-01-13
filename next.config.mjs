/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        pathname: "/images/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/resource/pdf/add',
        destination: '/admin-dashboard/resource/pdf/add',
        permanent: true,
      },
  
    ];
  }
};

export default nextConfig;
