import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // The approved V4 homepage was promoted from /v4 to the real
        // homepage at /. Old bookmarks/links to /v4 get a permanent
        // redirect rather than a dead route.
        source: "/v4",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
