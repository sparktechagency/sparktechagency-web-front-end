import PageBanner from "@/shared/PageBanner";
import React from "react";
import StatsSection from "./components/StatsSection";
import PhotoAlbum from "./components/PhotoAlbum";
import DomeGallery from "@/feature/life-at-spark/components/DomeGallery";

export default function LifeAtSpark() {
  return (
    <section>
      <PageBanner
        title="Life at Spark"
        subtitle="Be part of something great , where every spark of creativity helps build something extraordinary."
        children={<StatsSection />}
      />
      <PhotoAlbum />
      <div className="h-96 bg-slate-200/50 rounded-lg animate-pulse my-20"></div>
      <section className="lg:min-h-screen pb-20">
        <DomeGallery />
      </section>
    </section>
  );
}
