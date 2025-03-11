/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 이 설정 꼭 필요해요!
  basePath: process.env.NODE_ENV === "production" ? "/[your-repo-name]" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
