/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/:path*", has: [{type: "host", value: "www.xn--lypuhelin-u2a.fi"}], destination: "https://xn--lypuhelin-u2a.fi/:path*", permanent: true },
      { source: '/it-guru', destination: 'https://it-guru.fi', permanent: true },
      { source: '/lemmikkiguru', destination: 'https://lemmikkiguru.fi', permanent: true },
      { source: '/kuntoguru', destination: 'https://kuntoguru.fi', permanent: true },
      { source: '/ravintoguru', destination: 'https://ravintoguru.fi', permanent: true },
      { source: '/oikeusguru', destination: 'https://oikeusguru.fi', permanent: true },
      { source: '/veroguru', destination: 'https://veroguru.fi', permanent: true },
      { source: '/joulupukki', destination: '/#gurut', permanent: false },
      { source: '/tietosuojaseloste', destination: '/tietosuoja', permanent: true },
    ];
  },
};
export default nextConfig;
