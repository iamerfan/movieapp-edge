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
      runtime:'experimental-edge'
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
         {
            source: '/img/:path*',
            destination: 'https://image.tmdb.org/t/p/w500/:path*',
         },
         {
            source: '/video/:first',
            destination: 'https://www.imdb.com/video/imdb/:first/imdb/embed',
         },
      ]
   },
}
module.exports = nextConfig
