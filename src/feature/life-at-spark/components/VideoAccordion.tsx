"use client";
import { useState, useRef, useLayoutEffect, useCallback, useMemo } from "react";
import gsap from "gsap";

type Item = {
  title: string;
  content: string;
  video: string;
};

export default function VideoAccordion() {
  // Outside component
  const ITEMS: Item[] = [
    {
      title: "SPL Football Tournament",
      content:
        "Think of us as your development talent pool on tap! We find the perfect developers, from juniors to full-stack pros, who integrate smoothly into your team. We support them every step of the way, ",
      video:
        "https://res.cloudinary.com/ds1njqypu/video/upload/v1763370391/1114839_Woman_Job_3840x2160_fdmn1h.mp4",
    },
    {
      title: "Annual Tour",
      content:
        "A refreshing escape from the routine! Our annual tour brings the entire team together to explore new places, celebrate achievements, and create unforgettable memories—strengthening the bond beyond the workplace.",
      video:
        "https://res.cloudinary.com/ds1njqypu/video/upload/v1759826820/4480599-uhd_3840_2160_25fps_s3h7fk.mp4",
    },
    {
      title: "Woman’s day calibration",
      content:
        "A heartfelt tribute to the incredible women of our organization. We celebrate their contributions, achievements, and strength with engaging activities, appreciation moments, and a vibrant atmosphere full of joy.",
      video:
        "https://res.cloudinary.com/ds1njqypu/video/upload/v1763370391/1114839_Woman_Job_3840x2160_fdmn1h.mp4",
    },
    {
      title: "Townhall Party",
      content:
        "A lively gathering where the whole team comes together to share updates, celebrate milestones, and enjoy a fun, collaborative environment. It’s a perfect mix of communication, recognition, and celebration.",
      video:
        "https://res.cloudinary.com/ds1njqypu/video/upload/v1759826820/4480599-uhd_3840_2160_25fps_s3h7fk.mp4",
    },
  ];

  // Inside component
  const items = ITEMS;

  const [current, setCurrent] = useState(0);

  const progressRefs = useRef<HTMLDivElement[]>([]);
  const panelRefs = useRef<HTMLDivElement[]>([]);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const openPanel = useCallback((index: number) => {
    panelRefs.current.forEach((panel, i) => {
      if (!panel) return;
      gsap.to(panel, {
        height: i === index ? "auto" : 0,
        duration: 0.4,
        ease: "power2.out",
      });
    });
  }, []);

  useLayoutEffect(() => {
    if (!tl.current) {
      tl.current = gsap.timeline({
        paused: true,
        repeat: -1,
        onRepeat: () => {
          setCurrent((prev) => (prev + 1) % items.length);
        },
      });
    }

    const timeline = tl.current;
    timeline.clear();

    // Reset progress bars
    progressRefs.current.forEach((el) => {
      if (el) gsap.set(el, { width: "0%" });
    });

    // Animate the active progress bar
    const active = progressRefs.current[current];
    if (active) {
      timeline.to(active, {
        width: "100%",
        duration: 4,
        ease: "none",
      });
    }

    timeline.play();

    openPanel(current);

    return () => {
      timeline.pause(0); // reset without destroying
    };
  }, [current, openPanel, items.length]);

  return (
    <section className="py-16 lg:py-20 container ">
      {/* text */}
      <h3 className="section-tag ">Creating Change</h3>
      <h1 className="section-title mb-6">Together, We Make Waves</h1>
      <p className="section-subtitle mx-0! max-w-[645px]!">
        Empower your business with innovative digital experiences. Our expert
        team combines strategy, design, and technology. Together, we craft
        solutions that drive results and growth.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
        {/* Left video */}
        <div className="rounded-xl overflow-hidden shadow">
          <video
            key={items[current].video}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          >
            <source src={items[current].video} />
          </video>
        </div>

        {/* Right Accordion */}
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className=" pb-2">
              <button
                onClick={() => setCurrent(i)}
                className="w-full text-left flex items-center justify-between py-3"
              >
                <h3 className="text-2xl font-semibold text-[#414141]">
                  {item.title}
                </h3>
              </button>

              {/* Content panel */}
              <div
                ref={(el) => {
                  if (el) panelRefs.current[i] = el;
                }}
                className="overflow-hidden h-0"
              >
                <p className="text-[#414141] py-2">{item.content}</p>
              </div>

              {/* Bottom Progress Line */}
              <div className="relative h-0.5 bg-[#D1D1D1] mt-2 overflow-hidden">
                <div
                  ref={(el) => {
                    if (el) progressRefs.current[i] = el;
                  }}
                  className="absolute left-0 top-0 h-full bg-black w-0"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
