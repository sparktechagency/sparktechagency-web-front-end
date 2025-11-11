"use client";

import type React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

interface CarouselImage {
  id: string;
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  className?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  className = "",
}) => {
  const swiperRef = useRef(null);

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl ${className} flex-1`}>
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full"
      >
        {images?.map((image) => (
          <SwiperSlide
            key={image.id}
            className="flex items-center justify-center "
          >
            <div className="relative w-full h-64 sm:h-80 md:h-96">
              <Image
                src={image?.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover w-full"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        :global(.swiper-pagination-bullet) {
          @apply bg-white bg-opacity-60 w-2 h-2 rounded-full mx-1 cursor-pointer transition-all;
        }
        :global(.swiper-pagination-bullet-active) {
          @apply bg-white bg-opacity-100 w-3;
        }
      `}</style>
    </div>
  );
};
