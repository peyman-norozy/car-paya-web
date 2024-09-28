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
    BASE_API: "https://api.carcheckme.ir/api/v1",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.carcheckme.ir",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  reactStrictMode: false,
};

module.exports = withPWA(nextConfig);

// export default nextConfig;
