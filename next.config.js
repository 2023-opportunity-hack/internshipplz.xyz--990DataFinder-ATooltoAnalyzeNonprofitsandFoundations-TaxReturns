/** @type {import('next').NextConfig} */
const nextConfig = {
    cors: false
}

module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://projects.propublica.org/nonprofits/api/v2/:path*',
        },
      ];
    },
  };
