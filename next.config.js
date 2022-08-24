/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["flagcdn.com"],
  },
};

module.exports = nextConfig;