import React from "react";
import CompanyBanner from "./components/CompanyBanner";
import OurEvolution from "../home/our-evolution/OurEvolution";

const CompanyPage = () => {
  return (
    <section>
      <CompanyBanner />
      <div className=" pt-16 lg:pt-[100px]">
        <OurEvolution />
      </div>
    </section>
  );
};

export default CompanyPage;
