import type { NextConfig } from "next";

const redirectToWhite = ["bright-white-screen", "white-screen-image"];
const redirectToHome = ["guides", "about", "contact", "disclaimer", "feedback"];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/grey-screen", destination: "/gray-screen", permanent: true },
      ...redirectToWhite.map((slug) => ({ source: `/${slug}`, destination: "/white-screen", permanent: true })),
      ...redirectToHome.map((slug) => ({ source: `/${slug}`, destination: "/", permanent: true }))
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" }
        ]
      }
    ];
  }
};

export default nextConfig;
