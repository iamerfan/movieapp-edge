/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      unoptimized: true,
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
}
module.exports = nextConfig
