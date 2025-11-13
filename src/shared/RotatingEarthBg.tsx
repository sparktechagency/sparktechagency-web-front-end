import Image from "next/image";
import React from "react";

export default function RotatingEarthBg() {
  return (
    <div className=" absolute w-full left-1/2 -translate-x-1/2 translate-y-[65%] flex items-end justify-center z-0">
      <div className="w-full h-full rounded-full animate-spin-slow">
        <Image
          src="/earth.png"
          alt="Earth Background"
          className="w-full h-full object-cover rounded-full"
          width={1600}
          height={1600}
          unoptimized
        />
      </div>
    </div>
  );
}
