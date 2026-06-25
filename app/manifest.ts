import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dos Amigos - Mexican Food & Cantina",
    short_name: "Dos Amigos",
    description:
      "Authentic Mexican cuisine in Pittsfield, ME. Dine in, take out, or delivery. Serving tacos, burritos, chimichangas and more at 135 Main St.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
