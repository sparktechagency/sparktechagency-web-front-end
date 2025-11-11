"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface serviceBannerProps {
  isPrimary?: boolean;
  title: string;
  description: string;
}

export default function PageBanner({
  isPrimary = false,
  title,
  description,
}: serviceBannerProps) {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (isPrimary && imgRef.current) {
      gsap.to(imgRef.current, {
        rotate: 360,
        duration: 70,
        ease: "none",
        repeat: -1,
      });
    }
  }, [isPrimary]);

  return (
    <section
      className={`min-h-[517px] 2xl:min-h-[617px] ${
        isPrimary ? "bg-spark" : "bg-[#EFEDF0]"
      } flex flex-col justify-center items-center text-center rounded-b-[90px] relative overflow-hidden z-10`}
    >
      <div className="z-10 bg-transparent">
        <h1
          className={`${
            isPrimary ? "text-[#FDFDFD]" : "text-[#121212]"
          } font-semibold text-5xl 2xl:text-[64px] mb-6`}
        >
          {title}
        </h1>
        <p className="text-[#999999] leading-[150%] max-w-[880px]">
          {description}
        </p>
      </div>

      {isPrimary && (
        <>
          <Image
            ref={imgRef}
            src="/assets/banner-bg.png"
            alt="rocket"
            width={1000}
            height={800}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 -z-10 opacity-45"
          />

          {/* Black gradient overlay */}
          <div className="absolute bottom-0 left-0 w-full h-56 pointer-events-none -z-10 bg-linear-to-t from-[#041504] to-transparent"></div>
        </>
      )}
    </section>
  );
}
