import React from "react";
import PageBanner from "../../shared/PageBanner";
import WhatWeDo from "./components/what-we-do/WhatWeDo";

export default function Services() {
  return (
    <section>
      <PageBanner
        isPrimary={true}
        title={"Our Services"}
        subtitle="At Spark Tech Agency, we harness the power of modern technologies to craft intelligent, scalable, and future-ready solutions. From AI & cloud platforms to robust web & mobile frameworks, our stack empowers businesses to stay ahead in the digital era."
      />
      <WhatWeDo />
    </section>
  );
}
