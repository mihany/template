import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://mihany.github.io/template/",
        pathname: "/images/**",
      },
    ],
  },
  // output: "export",
  /* config options here */
};

export default nextConfig;
