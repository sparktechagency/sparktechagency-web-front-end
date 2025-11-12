import React from "react";
import { ConfigProvider, Timeline } from "antd";
import { OurEvolutionData } from "@/constants/home-data";

const OurEvolution = () => {
  return (
    <div className="pb-16 lg:pb-[100px] container mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-10">
      {/* Left side */}
      <div className="flex-1 ">
        <p className="text-2xl lg:text-[32px] text-[#8BC53F] font-semibold pb-2">
          Our Evolution
        </p>
        <p className="section-title 2xl:text-[52px]! ">
          Every Great Journey <br /> Starts with a Spark.
        </p>
      </div>

      {/* Timeline */}
      <div className="flex-1 max-h-[485px] w-full overflow-y-auto  ">
        <div className=" flex items-center justify-end">
          <ConfigProvider
            theme={{
              components: {
                Timeline: {
                  itemPaddingBottom: 60,
                },
              },
            }}
          >
            <Timeline items={OurEvolutionData} />
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

export default OurEvolution;
