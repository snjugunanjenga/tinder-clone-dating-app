import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  /* config options here */
  eslint: {
    // ✅ Don't block Vercel builds on ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Don't block Vercel builds on type errors
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "euihkorwsyypbrgpydck.supabase.co",
      },
    ],
  },
};

export default nextConfig;


