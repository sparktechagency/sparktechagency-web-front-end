import { servicesData } from "@/constants/servicesData";
import React from "react";
import { ServiceSection } from "./ServiceSection";

export default function WhatWeDo() {
  return (
    <section className="container pt-20 pb-28">
      <div className="text-center">
        <h1 className="section-title text-primary! mb-4">What We Do!</h1>
        <p className="section-subtitle">
          Hire STA, get expert advice, or hand over your project & chill –We've
          got your back, no brainer.
        </p>
      </div>
      <div className=" ">
        {servicesData?.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
