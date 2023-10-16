/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    basePath: isProd ? '/stop-fossil-subs' : '',
    output: 'export',
    distDir: 'dist',
    reactStrictMode: true,
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      unoptimized: true,
    }
  }

  module.exports = nextConfig