import type React from "react";
import type { ServiceSection as ServiceSectionType } from "@/constants/servicesData";
import { ImageCarousel } from "./ImageCarousel";
import { ServiceContent } from "./ServiceContent";

interface ServiceSectionProps {
  service: ServiceSectionType;
  index: number;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  service,
  index,
}) => {
  const isImageRight = index % 2 === 0;

  return (
    <section className="container pt-28">
      <div
        className={`flex flex-col md:flex-row items-center justify-center gap-28 ${
          isImageRight ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Content - Left on image-right layout, Right on image-left layout */}

        <ImageCarousel images={service.images} />

        <ServiceContent
          icon={service.icon}
          title={service.title}
          description={service.description}
          ctaText={service.ctaText}
        />
      </div>
    </section>
  );
};
