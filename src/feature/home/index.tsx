import Hero from "@/feature/home/Hero";
import React from "react";
import WhatWeDoSection from "./what-we-do/WhatWeDoSection";
import WhoWeAre from "./WhoWeAre";
import BoostYourBusiness from "./why-us/BoostYourBusiness";
import SuccessfulProject from "./successful-project/SuccessfulProject";
import { SparklansSection } from "./sparkians-section";
import OurEvolution from "./our-evolution/OurEvolution";

export default function Homepage() {

  return (
    <main  >
      <section >
        <Hero />
      </section>
      <section >
        <WhoWeAre />
      </section>
      <section >
        <WhatWeDoSection />
      </section>
      <section >
        <BoostYourBusiness />
      </section>
       <SuccessfulProject />
      <SparklansSection /> 
      <OurEvolution />
    </main> 
  );
}
