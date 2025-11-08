import Hero from "@/feature/home/Hero";
import React from "react";
import WhoWeAre from "./WhoWeAre";

export default function Homepage() {
  return (
    <section className="relative">
      <Hero /> 
      <WhoWeAre />
      {/* Spacer content to allow scrolling */}
      <section className="flex-1 px-4 py-20 max-w-7xl mx-auto w-full">
        <div className="space-y-12">
          <div className="h-96 bg-slate-200/50 rounded-lg animate-pulse"></div>
          <div className="h-96 bg-slate-200/50 rounded-lg animate-pulse"></div>
          <div className="h-96 bg-slate-200/50 rounded-lg animate-pulse"></div>
        </div>
      </section>
      <Hero />
    </section>
  );
}
