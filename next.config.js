/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  images: {
    // domains: ['picsum.photos'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
}

module.exports = nextConfig
