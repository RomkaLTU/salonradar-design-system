/** @type {import('next').NextConfig} */
const nextConfig = {
  // The design system is consumed as compiled output (@salonradar/ui dist),
  // exactly as a published npm consumer would — no transpile step needed.
  images: {
    unoptimized: true,
  },
}

export default nextConfig
