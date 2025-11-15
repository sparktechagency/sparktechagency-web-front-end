"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  targetId: string;
  imageId: string;
  contentId: string;
  isImageRight: boolean;
  markers?: boolean;
};

export default function ServiceSectionAnimation({
  targetId,
  imageId,
  contentId,
  isImageRight,
  markers = false,
}: Props) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const triggerEl = document.getElementById(targetId);
    const imageEl = document.getElementById(imageId);
    const contentEl = document.getElementById(contentId);
    if (!triggerEl || !imageEl || !contentEl) return;

    const ctx = gsap.context(() => {

      gsap.fromTo(
        imageEl,
        {
          x: isImageRight ? 200 : -200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: triggerEl,
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers,
          },
        }
      );

      gsap.fromTo(
        contentEl,
        {
          x: 0,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentEl,
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers: true,
          },
        }
      );
    }, triggerEl);

    return () => ctx.revert();
  }, [targetId, imageId, contentId, isImageRight, markers]);

  return null;
}
