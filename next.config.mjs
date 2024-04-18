/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['wiki.hoyolab.com', "api.ambr.top"],
    },
    async redirects() {
        return [{
            source: '/',
            destination: '/home',
            permanent: false,
        }];
    }
};

export default nextConfig;
