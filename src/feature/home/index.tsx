import Hero from "@/feature/home/Hero";
import React from "react";
import WhatWeDoSection from "./what-we-do/WhatWeDoSection";
import WhoWeAre from "./WhoWeAre";
import BoostYourBusiness from "./why-us/BoostYourBusiness";
import SuccessfulProject from "./successful-project/SuccessfulProject";
import { SparklansSection } from "./sparkians-section";
import SliderSection from "./spark-quarter/SparkQuarter";

export default function Homepage() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section>
        <WhoWeAre />
      </section>
      <section>
        <WhatWeDoSection />
      </section>
      <section>
        <BoostYourBusiness />
      </section>
      <section>
        <SuccessfulProject />
        <SparklansSection />
        <SliderSection />
      </section>
    </main>
  );
}
