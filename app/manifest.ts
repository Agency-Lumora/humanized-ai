import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lumora Digital Agency",
    short_name: "Lumora",
    description:
      "Premium Humanized AI-powered websites, branding, SEO and digital solutions.",

    start_url: "/",
    display: "standalone",
    background_color: "#F8FAFC",
    theme_color: "#2A211D",

    icons: [
      {
        src: "/favicon.ico?v=2026-09-14",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png?v=2026-09-14",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png?v=2026-09-14",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}