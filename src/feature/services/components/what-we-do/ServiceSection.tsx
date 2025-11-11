import React from "react";
import { ImageCarousel } from "./ImageCarousel";
import { ServiceContent } from "./ServiceContent";
import dynamic from "next/dynamic";
import type { ServiceSection as ServiceSectionType } from "@/constants/servicesData";

const ServiceSectionAnimation = dynamic(() => import("./ServiceSectionAnimation"));

interface ServiceSectionProps {
  service: ServiceSectionType;
  index: number;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  service,
  index,
}) => {
  const sectionId = `service-section-${index}`;
  const imageId = `image-${index}`;
  const contentId = `content-${index}`;

  const isImageRight = index % 2 === 0;

  return (
    <section id={sectionId} className="container h-[550px]  overflow-hidden">
      <div
        className={`flex flex-col md:flex-row items-center justify-center gap-28 ${
          isImageRight ? "md:flex-row-reverse" : ""
        }`}
      >
        <div id={imageId} className="w-full md:w-1/2">
          <ImageCarousel images={service.images} />
        </div>

        <div id={contentId} className="w-full md:w-1/2">
          <ServiceContent
            icon={service.icon}
            title={service.title}
            description={service.description}
            ctaText={service.ctaText}
          />
        </div>
      </div>

      <ServiceSectionAnimation
        targetId={sectionId}
        imageId={imageId}
        contentId={contentId}
        isImageRight={isImageRight}
        markers={false} 
      />
    </section>
  );
};
