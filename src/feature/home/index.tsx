import Hero from "@/feature/home/Hero";
import React from "react";
import WhatWeDoSection from "./what-we-do/WhatWeDoSection";
import WhoWeAre from "./WhoWeAre";
import BoostYourBusiness from "./why-us/BoostYourBusiness";

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
    </main>
  );
}
