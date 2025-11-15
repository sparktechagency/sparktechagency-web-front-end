import React from "react";

interface QuarterTextProps {
  name: string;
  quote: string;
}
export default function QuarterText({ name, quote }: QuarterTextProps) {
  return (
    <div className="h-[190px] md:h-auto lg:mb-12 max-w-[542px]">
      <p className="text-primary font-medium mb-3 text-3xl">{name}</p>
      <h2 className="section-title  lg:text-[48px]! mb-2.5">
        Spark of the Quater
      </h2>
      <p className="text-[#A3A3A3] ">{quote}</p>
    </div>
  );
}
