import PageBanner from "@/shared/PageBanner";
import React from "react";
import StatsSection from "./components/StatsSection";
import PhotoAlbum from "./components/PhotoAlbum";
import DomeGallery from "@/ui/DomeGallery";

export default function LifeAtSpark() {
  return (
    <section>
      <PageBanner
        title="Life at Spark"
        subtitle="Be part of something great , where every spark of creativity helps build something extraordinary."
        children={<StatsSection />}
      />
      <PhotoAlbum />
      <section className="lg:min-h-screen py-20">
        <DomeGallery />
      </section>
    </section>
  );
}
