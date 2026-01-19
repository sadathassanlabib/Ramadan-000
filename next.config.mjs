/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
     
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**",
      },
     
      
    ],
  },

  async redirects() {
    return [
      {
        source: "/resource/pdf/add",
        destination: "/admin-dashboard/resource/pdf/add",
        permanent: true,
      },
      {
        source: "/resource/boyan/add",
        destination: "/admin-dashboard/resource/boyan/add",
        permanent: true,
      },
      {
        source: "/resource/muhasaba/add",
        destination: "/admin-dashboard/resource/muhasaba/add",
        permanent: true,
      },
      {
        source: "/resource/course/add",
        destination: "/admin-dashboard/resource/course/add",
        permanent: true,
      },
      {
        source: "/resource/book/add",
        destination: "/admin-dashboard/resource/book/add",
        permanent: true,
      },
      {
        source: "/resource/blogs/add",
        destination: "/admin-dashboard/resource/blogs/add",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
