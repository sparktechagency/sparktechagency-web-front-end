import Hero from "@/feature/home/Hero";
import React from "react";
import WhatWeDoSection from "./what-we-do/WhatWeDoSection";

export default function Homepage() {
  return (
    <section className="relative">
      <Hero />
      <WhatWeDoSection />
    </section>
  );
}
