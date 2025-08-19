/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Don't block build on ESLint errors
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ Don't block build on TS errors
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

module.exports = nextConfig;
