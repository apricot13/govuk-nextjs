import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Digital planning register",
    short_name: "DPR",
    description:
      "Find planning applications submitted through the Open Digital Planning system for your local council planning authority.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0b0c0c",
    icons: [
      {
        src: "/govuk-assets/images/govuk-icon-180.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/govuk-assets/images/govuk-icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/govuk-assets/images/govuk-icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
