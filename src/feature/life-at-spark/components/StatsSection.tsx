"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const stats = [
  { value: 600, suffix: "+", label: "Dedicated Members" },
  { value: 10, suffix: "+", label: "Global Presence" },
  { value: 80, suffix: "%", label: "Retention Rate" },
];

export default function StatsSection() {
  const refs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".stats-wrapper",
        start: "top 80%",
      },
    });

    refs.current.forEach((el) => {
      const target = Number(el.dataset.value);
      const suffix = el.dataset.suffix || "";

      tl.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          onUpdate: function () {
            el.innerText = Math.floor(Number(el.innerText)) + suffix;
          },
        },
        "<"
      );
    });
  }, []);

  return (
    <section className="stats-wrapper grid grid-cols-3 text-center items-center gap-1 lg:gap-10 md:gap-0">
      {stats?.map((item, i) => (
        <div key={i} className="flex flex-col items-center relative">
          {/* Divider */}
          {i !== 0 && (
            <div className="block absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-gray-300" />
          )}

          {/* Number */}
          <div
            ref={(el) => {
              if (el) refs.current[i] = el;
            }}
            data-value={item.value}
            data-suffix={item.suffix}
            className="text-2xl lg:text-[32px] font-semibold text-[#414141]"
          >
            0
          </div>

          {/* Label */}
          <p className="mt-2 text-[#414141] text-xs lg:text-base">{item.label}</p>
        </div>
      ))}
    </section>
  );
}
