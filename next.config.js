/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placekitten.com'],
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
