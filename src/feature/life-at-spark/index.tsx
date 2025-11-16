import PageBanner from "@/shared/PageBanner";
import React from "react";
import StatsSection from "./components/StatsSection";
import PhotoAlbum from "./components/PhotoAlbum";
import DomeGallery from "@/feature/life-at-spark/components/DomeGallery";
import FromOurDesk from "./components/FromOurDesk";

export default function LifeAtSpark() {
  return (
    <section>
      <PageBanner
        title="Life at Spark"
        subtitle="Be part of something great , where every spark of creativity helps build something extraordinary."
        children={<StatsSection />}
      />
      <PhotoAlbum />
      <FromOurDesk />
      <section className="lg:min-h-screen pb-20">
        <DomeGallery />
      </section>
    </section>
  );
}
