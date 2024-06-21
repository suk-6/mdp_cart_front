/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                hostname: 'localhost',
                port: '3000',
            },
            {
                protocol: 'https',
                hostname: 'mdp-cart.vercel.app',
                port: '443',
            },
        ]
    }
};

export default nextConfig;
