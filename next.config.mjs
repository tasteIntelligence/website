/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
