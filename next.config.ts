import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    useCache: true,
  },

  // image config
  images: {
    domains: ["gjngzryhhoivozpykygs.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gjngzryhhoivozpykygs.supabase.co",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
