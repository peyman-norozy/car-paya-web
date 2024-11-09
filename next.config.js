const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
  },
  // ... other options you like
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_API: "https://api.carpaya.com/api/v1",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.carpaya.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "carpaya.com",
      },
    ],
  },
  reactStrictMode: false,
};

module.exports = withPWA(nextConfig);

// export default nextConfig;
