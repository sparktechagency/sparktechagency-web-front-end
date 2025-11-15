import type React from "react";
import { BiLogoVisualStudio } from "react-icons/bi";

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
    icon: <BiLogoVisualStudio />,
    title: "Web Development",
    description:
      "UX consultancy guarantees that every design element enhances user engagement. Stop losing money on repeated design changes. Our skilled UX designers will direct and train your team to deliver a perfect design concept.",
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

  // Game Development
  {
    id: "game-dev-1",
    icon: <BiLogoVisualStudio />,
    title: "App Development",
    description: "UX consultancy guarantees that every design element enhances user engagement. Stop losing money on repeated design changes. ",
    ctaText: "View more",
    layout: "image-right",
    images: [
      {
        id: "web-l-1",
        src: "/assets/services/app.png",
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

  // UI/UX Design
  {
    id: "uiux-1",
    icon: <BiLogoVisualStudio />,
    title: "UI/UX Design",
    description:
      "We design intuitive, user-friendly experiences that reduce friction and boost engagement. From wireframes to pixel-perfect UI, our designs elevate your brand across all platforms.",
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

  // App Development
  {
    id: "app-dev-1",
    icon: <BiLogoVisualStudio />,
    title: "App Development",
    description:
      "We build fast, scalable, and modern mobile apps for both iOS and Android. From prototypes to production-ready apps, we help bring your ideas to users’ fingertips.",
    ctaText: "View more",
    layout: "image-right",
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
