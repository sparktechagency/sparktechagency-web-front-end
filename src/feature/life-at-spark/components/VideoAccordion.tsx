"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

type Item = {
  title: string;
  content: string;
  video: string;
  thumbnail?: string;
};

const ITEMS: Item[] = [
  {
    title: "SPL Football Tournament",
    content:
      "Think of us as your development talent pool on tap! We find the perfect developers, from juniors to full-stack pros, who integrate smoothly into your team. We support them every step of the way, ",
    video:
      "https://res.cloudinary.com/ds1njqypu/video/upload/v1763377312/Video_Compressor___Reduce_Video_File_Size_Online_e3l3jn.mp4",
    thumbnail:
      "https://res.cloudinary.com/ds1njqypu/image/upload/v1763102922/WhatsApp_Image_2025-11-14_at_12.38.37_acdf6d94_otlbb4.jpg",
  },
  {
    title: "Annual Tour",
    content:
      "A refreshing escape from the routine! Our annual tour brings the entire team together to explore new places, celebrate achievements, and create unforgettable memories—strengthening the bond beyond the workplace.",
    video:
      "https://res.cloudinary.com/ds1njqypu/video/upload/v1763377312/Video_Compressor___Reduce_Video_File_Size_Online_e3l3jn.mp4",
    thumbnail:
      "https://res.cloudinary.com/ds1njqypu/image/upload/v1763102920/WhatsApp_Image_2025-11-14_at_12.38.37_00a37fd7_fjwhti.jpg",
  },
  {
    title: "Woman’s day calibration",
    content:
      "A heartfelt tribute to the incredible women of our organization. We celebrate their contributions, achievements, and strength with engaging activities, appreciation moments, and a vibrant atmosphere full of joy.",
    video:
      "https://res.cloudinary.com/ds1njqypu/video/upload/v1763377312/Video_Compressor___Reduce_Video_File_Size_Online_e3l3jn.mp4",
    thumbnail: "https://res.cloudinary.com/ds1njqypu/image/upload/v1763102921/WhatsApp_Image_2025-11-14_at_12.38.37_03d1bccb_h4wnai.jpg",
  },
  {
    title: "Townhall Party",
    content:
      "A lively gathering where the whole team comes together to share updates, celebrate milestones, and enjoy a fun, collaborative environment. It’s a perfect mix of communication, recognition, and celebration.",
    video:
      "https://res.cloudinary.com/ds1njqypu/video/upload/v1763377312/Video_Compressor___Reduce_Video_File_Size_Online_e3l3jn.mp4",
    thumbnail:
      "https://i.ibb.co.com/dJ3KHF5j/554997310-122147916110886951-7860946218894689302-n.jpg",
  },
];
export default function VideoAccordion() {
  const [current, setCurrent] = useState(0);

  // Auto-switch every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % ITEMS.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [ITEMS.length]);

  return (
    <section className="py-16 lg:py-20 container">
      <h3 className="section-tag">Creating Change</h3>
      <h1 className="section-title mb-6">Together, We Make Waves</h1>
      <p className="section-subtitle max-w-[645px] mx-0!">
        Empower your business with innovative digital experiences. Our expert
        team combines strategy, design, and technology. Together, we craft
        solutions that drive results and growth.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
        {/* Video */}
        <div className="rounded-xl overflow-hidden shadow lg:h-[405px] lg:w-full" >
          <Image
            key={ITEMS[current]?.video}
            src={ITEMS[current]?.thumbnail || "/placeholder.jpg"}
            alt={ITEMS[current]?.title || "Image"}
            height={500}
            width={900}
            className="object-cover h-full w-full"
            priority={true}
          />
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {ITEMS?.map((item, i) => (
            <div key={i} className="pb-2">
              <button
                onClick={() => setCurrent(i)}
                className="w-full text-left flex items-center justify-between py-3"
              >
                <h3 className="text-2xl font-semibold text-[#414141]">
                  {item.title}
                </h3>
              </button>

              {/* Accordion content (CSS transition) */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  current === i ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="text-[#414141] py-2">{item.content}</p>
              </div>

              {/* Progress bar (CSS animation) */}
              <div className="relative h-0.5 bg-[#D1D1D1] mt-2 overflow-hidden">
                <div
                  className={`
                    absolute left-0 top-0 h-full bg-black
                    ${current === i ? "animate-progress" : "w-0"}
                  `}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes progressFill {
            from { width: 0%; }
            to { width: 100%; }
          }

          .animate-progress {
            animation: progressFill 2.5s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
