import Hero from "@/feature/home/Hero";
import React from "react";
import WhatWeDoSection from "./what-we-do/WhatWeDoSection";
import WhoWeAre from "./WhoWeAre";
import BoostYourBusiness from "./why-us/BoostYourBusiness";
import SuccessfulProject from "./successful-project/SuccessfulProject";

export default function Homepage() {
  return (
    <section className="relative">
      <Hero />
      <WhoWeAre />
      <WhatWeDoSection />
      <BoostYourBusiness />
      <SuccessfulProject />
    </section>
  );
}
