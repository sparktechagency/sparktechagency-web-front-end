"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  targetId: string;
  contentId: string;
  markers?: boolean; 
  index: number
};

export default function WhatWeDoAnimation({
  targetId,
  contentId,
  markers = false, 
  index
}: Props) { 
    const isContentRight = index % 2 === 0;
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const triggerEl = document.getElementById(targetId);
    const contentEl = document.getElementById(contentId);
    if (!triggerEl || !contentEl) return;

    const ctx = gsap.context(() => { 
      
      gsap.fromTo(
        contentEl,
        { x: isContentRight ? -250 : 250, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: triggerEl,
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers,
          },
        }
      );
    }, triggerEl);

    return () => ctx.revert();
  }, [targetId, contentId, markers]);

  return null;
}
