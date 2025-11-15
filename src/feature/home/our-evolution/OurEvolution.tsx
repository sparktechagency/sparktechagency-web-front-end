import React from "react";
import { ConfigProvider, Timeline } from "antd";
import { OurEvolutionData } from "@/constants/home-data";
import { OurEvolutionAnimation } from "./OurEvolutionAnimation";

export default function OurEvolution() {

  return (
    <div className="pb-16 pt-16 lg:pt-0 lg:pb-20 container mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-10">

      {/* Left Side */}
      <div className="flex-1">
        <p className="text-2xl lg:text-[32px] text-[#8BC53F] font-semibold pb-2">
          Our Evolution
        </p>
        <p className="section-title 2xl:text-[52px]!">
          Every Great Journey <br /> Starts with a Spark.
        </p>
      </div>

      {/* Timeline */}
      <div
        id="timeline-wrapper"
        className="flex-1 max-h-[500px] w-full overflow-y-auto relative"
      >
        <div  id="timeline-inner" className="flex items-center justify-end pt-3 timeline-item">
          <ConfigProvider
            theme={{
              components: {
                Timeline: { itemPaddingBottom: 60 },
              },
            }}
          >
            <Timeline items={OurEvolutionData} />
          </ConfigProvider>
        </div>
      </div> 
      <OurEvolutionAnimation timelineWrapperId="timeline-wrapper" timelineInnerId="timeline-inner"/>
    </div>
  );
}
