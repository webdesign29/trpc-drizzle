// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  /** We run eslint as a separate task in CI */
  eslint: { ignoreDuringBuilds: !!process.env.CI },
  /** We run typechecking as a separate task in CI */
  typescript: {
    ignoreBuildErrors: true,
  },
  distDir: process.env.NODE_ENV === "development" ? ".dev" : ".next",
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: [
      "@headlessui/react",
    ],
  },
}

export default config;