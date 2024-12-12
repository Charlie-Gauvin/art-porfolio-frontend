/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_API_BASE_URL,
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
  
};

module.exports = nextConfig;
