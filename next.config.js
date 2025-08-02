/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['lovable.dev'],
  },
  transpilePackages: ['lucide-react']
}

module.exports = nextConfig