import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The challenge was first called "1000 rejections", then "100 asks" and
  // "500 asks"; keep its old addresses working.
  async redirects() {
    return ["1000-rejections", "100-asks", "500-asks"].map((slug) => ({
      source: `/projects/${slug}`,
      destination: "/projects/500-rejections",
      permanent: true,
    }));
  },
};

export default nextConfig;
