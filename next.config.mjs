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

export default nextConfig;
