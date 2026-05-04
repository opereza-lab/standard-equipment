import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/construccion/capachos-concretos-roll-over",
        destination: "/construccion/capachos-concreteros-roll-over",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
