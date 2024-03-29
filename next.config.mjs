/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['spoonacular.com'],
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;
