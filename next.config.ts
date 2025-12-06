/** @type {import('next').NextConfig} */
// next.config.ts

const nextConfig = {
  reactStrictMode: true,

  turbopack: {
    root: __dirname,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "o2a0p1u8mrgj3pm2.public.blob.vercel-storage.com",
        pathname: "/**",
      },
    ],
    unoptimized: true, // Disable optimization (works 100% for blob URLs)
  },

  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig
