import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Ash Shafiq",
    description: site.description,
    id: site.url,
    start_url: "/?utm_source=pwa",
    display: "standalone",
    background_color: "#FDF8F0",
    theme_color: "#004B57",
    orientation: "portrait-primary",
    categories: ["education", "lifestyle"],
    lang: "en",
    dir: "ltr",
    scope: site.url,
    icons: [
      {
        src: "/icon.png",
        type: "image/png",
        sizes: "48x48",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        type: "image/png",
        sizes: "180x180",
        purpose: "any",
      },
      {
        src: "/brand/logo.png",
        type: "image/png",
        sizes: "any",
        purpose: "maskable",
      },
    ],
  };
}
