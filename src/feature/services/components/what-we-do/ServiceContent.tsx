import type React from "react";

interface ServiceContentProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText: string;
}

export const ServiceContent: React.FC<ServiceContentProps> = ({
  icon,
  title,
  description,
  ctaText,
}) => {
  return (
    <div className="flex flex-col justify-between space-y-6 py-4 flex-1" >
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{icon}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">
            {title}
          </h2>
        </div>
      </div>

      {/* Description */}
      <p className="text-base md:text-lg text-gray-700  leading-relaxed ">
        {description}
      </p>

      {/* CTA Button */}
      <div>
        <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900  text-gray-900  rounded-full font-medium hover:bg-gray-900 hover:text-white   transition-all duration-300">
          {ctaText}
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
};
