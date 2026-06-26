/** @type {import('next').NextConfig} */
const nextConfig = {
  // The design system ships as TypeScript/TSX source, so it must be transpiled.
  transpilePackages: ["@salonradar/ui"],
  images: {
    unoptimized: true,
  },
}

export default nextConfig
