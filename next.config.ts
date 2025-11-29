/** @type {import('next').NextConfig} */
const nextConfig = {
  api: {
    bodyParser: false,
    responseLimit: false,
  },
  experimental: {
    middlewareClientMaxBodySize: 1024 * 1024 * 1024, // 1GB
  },
};

module.exports = nextConfig;
