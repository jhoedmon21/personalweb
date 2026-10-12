import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "standalone" es solo para builds con Docker; en Vercel rompe el output de rutas
  ...(process.env.VERCEL ? {} : { output: "standalone" as const }),
};

export default nextConfig;
