import type React from "react";

interface ServiceContentProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText: string; 
  id: string
}

export const ServiceContent: React.FC<ServiceContentProps> = ({
  icon,
  title,
  description,
  ctaText, 
  id
}) => {
  return (
    <div id={id} className="flex flex-col  space-y-6 py-4 flex-1" >
      <div className="space-y-4">
        <div className="flex flex-col items-start gap-3">
          <span className="text-3xl text-[#494848]">{icon}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#5e5c5c] ">
            {title}
          </h2>
        </div>
      </div>

      {/* Description */}
      <p className="text-base md:text-lg text-[#606060]  leading-relaxed ">
        {description}
      </p>

      {/* CTA Button */}
      {/* <div>
        <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0d470e]  text-[#0d440e]  rounded-full font-medium hover:bg-[#0d470e] hover:text-white   transition-all duration-300">
          {ctaText}
          <span className="text-lg">→</span>
        </button>
      </div> */}
    </div>
  );
};
