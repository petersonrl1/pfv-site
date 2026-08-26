import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      { source: "/sops", destination: "/av/sops", permanent: true },
      { source: "/sops/:slug", destination: "/av/sops/:slug", permanent: true },
      { source: "/sq6", destination: "/av/audio/sq6/welcome", permanent: true },
    ];
  },
};

export default nextConfig;
