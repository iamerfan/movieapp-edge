/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   experimental: {
      largePageDataBytes: 220000,
   },
   env: {
      BASE_URL: process.env.BASE_URL,
   },
   rewrites: () => {
      return [
         {
            source: '/api/tmdb/',
            destination: 'https://https://api.themoviedb.org/3/',
         },
      ]
   },
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'image.tmdb.org',
            pathname: '/t/p/**',
         },
         {
            protocol: 'https',
            hostname: 'www.gravatar.com',
            pathname: '/avatar/**',
         },
      ],
   },
}

module.exports = nextConfig
