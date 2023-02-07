/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
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
      ],
   },
}

module.exports = nextConfig
