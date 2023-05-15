/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "www.wallpaperflare.com", "wallpapercave.com"],
  },
};

module.exports = nextConfig;
