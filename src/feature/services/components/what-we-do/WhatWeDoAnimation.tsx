"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  targetId: string;
  contentId: string;
  markers?: boolean;
};

export default function WhatWeDoAnimation({
  targetId,
  contentId,
  markers = false,
}: Props) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const triggerEl = document.getElementById(targetId);
    const contentEl = document.getElementById(contentId);
    if (!triggerEl || !contentEl) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentEl,
        { y: 250, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 2.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: triggerEl,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            markers,
          },
        }
      );
    }, triggerEl);

    return () => ctx.revert();
  }, [targetId, contentId, markers]);

  return null;
}
