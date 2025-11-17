"use client";
import { accordionItems } from "@/constants/life-at-spark/accordion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function VideoAccordion() {
  const [current, setCurrent] = useState(0);

  // Auto-switch every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % accordionItems.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [accordionItems.length]);

  return (
    <section className="py-16 lg:py-20 container">
      <h3 className="section-tag">Creating Change</h3>
      <h1 className="section-title mb-6">Together, We Make Waves</h1>
      <p className="section-subtitle max-w-[645px] mx-0!">
        Empower your business with innovative digital experiences. Our expert
        team combines strategy, design, and technology. Together, we craft
        solutions that drive results and growth.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 h-full">
        {/* Video */}
        <div className="rounded-xl overflow-hidden shadow h-[200px] lg:h-[405px] lg:w-full">
          <Image
            key={accordionItems[current]?.video}
            src={accordionItems[current]?.thumbnail || "/placeholder.jpg"}
            alt={accordionItems[current]?.title || "Image"}
            height={500}
            width={900}
            className="object-cover h-full w-full"
            priority={true}
          />
        </div>

        {/* Accordion */}
        <div className="space-y-2 min-h-[480px]">
          {accordionItems?.map((item, i) => (
            <div key={i} className="pb-2">
              <button
                onClick={() => setCurrent(i)}
                className="w-full text-left flex accordionItems-center justify-between py-3"
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
