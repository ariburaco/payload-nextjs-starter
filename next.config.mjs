import { withPayload } from "@payloadcms/next/withPayload";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ??
  process.env.VERCEL_URL ??
  "http://localhost:3000";

const BASE_DOMAIN = BASE_URL.replace("http://", "")
  .replace("https://", "")
  .replace("www.", "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: false,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: BASE_DOMAIN,
      },
      {
        protocol: "https",
        hostname: BASE_DOMAIN,
      },
    ],
  },
  serverExternalPackages: ["@libsql/client", "@payloadcms/db-sqlite", "libsql"],

  // eslint: { ignoreDuringBuilds: true },
  // typescript: { ignoreBuildErrors: true },
};

export default withPayload(nextConfig);
