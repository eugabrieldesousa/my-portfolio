const repo = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: repo,
  assetPrefix: repo ? `${repo}/` : '',
  trailingSlash: true,
  reactStrictMode: true
};

module.exports = nextConfig;
