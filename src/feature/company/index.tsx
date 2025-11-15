import React from "react";
import CompanyBanner from "./components/CompanyBanner";
import OurEvolution from "../home/components/our-evolution/OurEvolution";
import Owner from "./components/Owner";
import { SparkiansSection } from "../home/components/sparkians-section/SparklansSection";
const CompanyPage = () => {
  return (
    <section>
      <CompanyBanner />
      <div className=" pt-16 lg:pt-[100px]">
        <Owner />
        <SparkiansSection />
        <OurEvolution />
      </div>
    </section>
  );
};

export default CompanyPage;
