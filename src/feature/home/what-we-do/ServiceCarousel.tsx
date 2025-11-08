"use client";

import { Service } from "@/constants/services";


interface ServiceCarouselProps {
  services: Service[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  setIsAutoPlay: (isAutoPlay: boolean) => void;
}

export default function ServiceCarousel({
  services,
  activeIndex,
  setActiveIndex,
  setIsAutoPlay,
}: ServiceCarouselProps) {
  return (
    <div className="w-full space-y-4 flex flex-col justify-end text-end">
      {services.map((service, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={service.id}
            onMouseEnter={() => {
              setActiveIndex(index);
              setIsAutoPlay(false);
            }}
            onMouseLeave={() => setIsAutoPlay(true)}
            className="cursor-pointer"
            style={{
              animation: `slideUp 0.5s ease-out ${index * 0.05}s both`,
            }}
          >
            <h3
              className={` tracking-wide transition-all duration-300 ${
                isActive
                  ? "text-2xl lg:text-3xl text-[#606060] font-semibold"
                  : "text-lg  text-[#A3A3A3]/70 hover:text-foreground/70"
              }`}
            >
              {service.title.toUpperCase()}
            </h3>
          </div>
        );
      })}
    </div>
  );
}
