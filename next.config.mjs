/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.woody.cat',
          },
        ],
      },
};

export default nextConfig;
