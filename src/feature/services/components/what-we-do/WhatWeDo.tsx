
import { servicesData } from "@/constants/servicesData";
import React from "react";
import { ServiceSection } from "./ServiceSection";
import dynamic from "next/dynamic";
const WhatWeDoAnimation = dynamic(() => import("./WhatWeDoAnimation"));

export default function WhatWeDo() {
  return (
    <section className="container pb-16 lg:pb-0 pt-16 lg:pt-20 ">
      <div className="text-center ">
        <h1 className="section-title text-primary! mb-4">What We Do!</h1>
        <p className="section-subtitle">
          Hire STA, get expert advice, or hand over your project & chill – We've
          got your back, no brainer.
        </p>
      </div>

      <div className=" pt-16 space-y-6 lg:space-y-0">
        {servicesData?.map((service, index) => (
          <div key={service.id} className="service-card">
            <ServiceSection service={service} index={index} />
          </div>
        ))}
      </div>

      {/* Add ClientGsap component dynamically here */}
      {servicesData?.map((service, index) => (
        <WhatWeDoAnimation
          key={service.id}
          targetId={`service-section-${index}`}
          contentId={`content-${index}`}
        />
      ))}
    </section>
  );
}
