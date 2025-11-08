"use client";

import { services } from "@/constants/services";
import { useState, useEffect } from "react";
import WhatWeDoLeft from "./WhatWeDoLeft";
import WhatWeDoRight from "./WhatWeDoRight";

export default function WhatWeDoSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, services.length]);

  return (
    <section className="w-full min-h-screen flex justify-center items-center py-12 lg:py-16 ">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Static Section */}
          <WhatWeDoLeft />

          {/* Right Animated Section */}
          <WhatWeDoRight
            services={services}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            setIsAutoPlay={setIsAutoPlay}
          />
        </div>
      </div>
    </section>
  );
}
