import Hero from "@/feature/home/components/Hero";
import React from "react";
import WhatWeDoSection from "./components/what-we-do/WhatWeDoSection";
import WhoWeAre from "./components/WhoWeAre";
import BoostYourBusiness from "./components/why-us/BoostYourBusiness";
import SuccessfulProject from "./components/successful-project/SuccessfulProject";
import OurEvolution from "./components/our-evolution/OurEvolution";
import SparkQuarter from "./components/spark-quarter/SparkQuarter";
import { SparkiansSection } from "./components/sparkians-section/SparklansSection";

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
      <SuccessfulProject />
      <SparkiansSection />
      <SparkQuarter />
      <OurEvolution />
    </main>
  );
}
