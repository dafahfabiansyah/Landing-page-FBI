/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'source.unsplash.com',
          },
        ]
    }
};

export default nextConfig;
