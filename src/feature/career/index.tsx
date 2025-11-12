import PageBanner from "@/shared/PageBanner";
import React from "react";
import { BenefitsSection } from "./components/benefits/BenefitsSection";
import JobPositions from "./components/JobPositions/JobPositions";
import FAQ from "./components/FAQ";
import { faqData } from "@/constants/faqData";
import SparkQuarter from "../home/spark-quarter/SparkQuarter";

export default function CareerPageMain() {
  return (
    <section>
      <PageBanner
        title="Grow with Sparktech"
        subtitle="Become a part of our team and help shape the future of technology. We're seeking passionate, creative committed individuals for the following positions."
      />
      <BenefitsSection />
      <JobPositions />
      <FAQ faqData={faqData} />
      <SparkQuarter />
    </section>
  );
}
