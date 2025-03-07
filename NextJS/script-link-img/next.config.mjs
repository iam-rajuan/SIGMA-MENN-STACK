/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.prod.website-files.com',
            port: '',
            // pathname: '/my-bucket/**',
            // search: '',
          },
        ],
      },
};

export default nextConfig;
