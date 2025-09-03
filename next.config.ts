import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export', // 👈 this is key
  images: {
    unoptimized: true, // Cloudflare doesn’t support Next Image optimization
  },
};

module.exports = nextConfig;

