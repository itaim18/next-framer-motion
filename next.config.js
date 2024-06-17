/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "example.com",
      "learnbestcoding.com",
      "i3.ytimg.com",
      "i.ytimg.com",
      "media0.giphy.com",
      "raw.githubusercontent.com",
      "user-images.githubusercontent.com",
    ],
  },
  env: {
    NEXT_PUBLIC_GOOGLE_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  },
  // experimental: {
  //   serverActions: true,
  // },
};

module.exports = nextConfig;
