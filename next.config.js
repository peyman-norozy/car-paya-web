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
    env:{
        BASE_API: "https://api.ccme.ir/api/V1",
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "api.ccme.ir",
            },
        ],
    },
    reactStrictMode:false
};

module.exports = withPWA(nextConfig);

// export default nextConfig;
