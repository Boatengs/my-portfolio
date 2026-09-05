import type { NextConfig } from "next";

const basePath = process.env.GITHUB_PAGES === "true" ? "/my-portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
