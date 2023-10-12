/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: `/sub_app/:path*`,
        destination: `http://localhost:3001/sub_app/:path*`,
      },
    ]
  }
}

module.exports = nextConfig
