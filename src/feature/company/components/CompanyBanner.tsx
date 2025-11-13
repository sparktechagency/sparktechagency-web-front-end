"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import WhoWeAre from "./WhoWeAre";
import RotatingEarthBg from "@/shared/RotatingEarthBg";
import OurStory from "./OurStory";
const CompanyBanner = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  useEffect(() => {
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        rotate: -360,
        duration: 80,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  return (
    <section
      className={`min-h-screen   bg-spark flex flex-col justify-center items-center text-center lg:rounded-b-[90px] relative overflow-hidden z-10 `}
    >
      <div className="z-10 container">
        <WhoWeAre />
        <OurStory />
      </div>
      {/* rotating earth */}
      <RotatingEarthBg />
    </section>
  );
};

export default CompanyBanner;
