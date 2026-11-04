import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The challenge was first called "1000 rejections", then "100 asks";
  // keep its old addresses working.
  async redirects() {
    return [
      {
        source: "/projects/1000-rejections",
        destination: "/projects/500-asks",
        permanent: true,
      },
      {
        source: "/projects/100-asks",
        destination: "/projects/500-asks",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
