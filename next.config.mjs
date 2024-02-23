/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'source.unsplash.com',
          },
          {
            hostname: 'via.placeholder.com',
          },
        ]
    }
};

export default nextConfig;
