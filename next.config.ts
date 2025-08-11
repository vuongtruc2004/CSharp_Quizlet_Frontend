import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8386",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "assets.quizlet.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;