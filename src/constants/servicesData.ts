import type React from "react";

export interface ServiceImage {
  id: string;
  src: string;
  alt: string;
}

export interface ServiceSection {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText: string;
  images: ServiceImage[];
  layout: "image-right" | "image-left";
}

export const servicesData: ServiceSection[] = [
  {
    id: "web-dev-1",
    icon: "🚀",
    title: "Web Development",
    description:
      "Think of us as your development talent pool on tap! We find the perfect developers, from juniors to full-stack pros, who integrate smoothly into your teams. We support them every step of the way, so you can say goodbye to roadblocks & hello to seamless deployment.",
    ctaText: "View more",
    layout: "image-right",
    images: [
      {
        id: "web-1",
        src: "/assets/services/laptop.png",
        alt: "Web development interface",
      },
      {
        id: "web-2",
        src: "/assets/services/laptop.png",
        alt: "Developer working",
      },
      {
        id: "web-3",
        src: "/assets/services/laptop.png",
        alt: "Responsive design",
      },
    ],
  },
  {
    id: "web-dev-2",
    icon: "⚙️",
    title: "Web Development",
    description:
      "Think of us as your development talent pool on tap! We find the perfect developers, from juniors to full-stack pros, who integrate smoothly into your teams. We support them every step of the way, so you can say goodbye to roadblocks & hello to seamless deployment.",
    ctaText: "View more",
    layout: "image-left",
    images: [
      {
        id: "web-l-1",
        src: "/assets/services/laptop.png",
        alt: "Web design mockup",
      },
      {
        id: "web-l-2",
        src: "/assets/services/laptop.png",
        alt: "Mobile development",
      },
      {
        id: "web-l-3",
        src: "/assets/services/laptop.png",
        alt: "Cross platform app",
      },
    ],
  },
];
