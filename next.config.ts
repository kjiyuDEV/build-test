/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 이 설정 꼭 필요해요!
  basePath: process.env.NODE_ENV === "production" ? "/build-test" : "",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://kjiyudev.github.io/build-test/"
      : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
