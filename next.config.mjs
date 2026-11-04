/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp']
  },
  experimental: {
    agentFeedback: true
  },
  reactCompiler: true,
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css'
      }
    }
  }
}

export default nextConfig
