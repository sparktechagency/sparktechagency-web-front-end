"use client";

import { Service } from "@/constants/services";
import { useEffect, useState } from "react";
import ServiceCarousel from "./ServiceCarousel";

interface WhatWeDoRightProps {
  services: Service[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  setIsAutoPlay: (isAutoPlay: boolean) => void;
}

export default function WhatWeDoRight({
  services,
  activeIndex,
  setActiveIndex,
  setIsAutoPlay,
}: WhatWeDoRightProps) {
  const [isMounted, setIsMounted] = useState(false);
  const activeService = services[activeIndex];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex flex-col items-center justify-center gap-8 ">
      <div className="relative w-full h-64 lg:h-max 2xl:h-[500px] flex items-center justify-center overflow-hidden  rounded-lg ">
        {/* Background image behind pyramid */}
        {activeService && (
          <div
            key={activeService.id}
            className="absolute inset-0 flex items-center justify-center opacity-50 animate-slideInFromRight"
          >
            <img
              src={activeService.backgroundImage || "/placeholder.svg"}
              alt={activeService.title}
              className="w-full lg:h-[70%] 2xl:h-[80%] object-contain animate-rotate360"
            />
          </div>
        )}

        {/* Service Carousel */}
        <ServiceCarousel
          services={services}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          setIsAutoPlay={setIsAutoPlay}
        />
      </div>
    </div>
  );
}
