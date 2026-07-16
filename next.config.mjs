/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a minimal, self-contained server build so the production image
  // ships only the files needed to run (no full node_modules / dev tooling).
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    // Allow-list ONLY the trusted CDN hosts the site actually loads images
    // from. This is the enforced source list if image optimization is ever
    // re-enabled (unoptimized: false) and prevents the optimizer from being
    // abused as an SSRF proxy against arbitrary hosts.
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'm.media-amazon.com' },
      { protocol: 'https', hostname: 'www.vsolesolar.com' },
      { protocol: 'https', hostname: 'varthana.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'off' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
}

export default nextConfig
