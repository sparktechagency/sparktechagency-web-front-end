import { BoostBusinessData, statsData } from "@/constants/home-data";
import React from "react";

const Contains = () => {
  return (
    <div id="boost-content">
      <div className=" flex flex-col md:flex-row lg:items-center lg:justify-between pb-16 lg:pb-24 pt-16 lg:pt-0 gap-8">
        <div className="lg:w-[50%]">
          <p className="text-primary font-semibold text-2xl lg:text-[32px] pb-6 ">
            Why Us?
          </p>
          <p className="text-[#F1F1F1] font-semibold text-3xl lg:text-[48px] max-w-[90%] ">
            {" "}
            Boost your business with{" "}
            <span className="text-primary"> Fast </span> digital solutions.{" "}
          </p>
        </div>

        <div className="lg:w-[50%] flex items-center justify-end">
          <div className=" grid grid-cols-2 gap-3.5">
            {BoostBusinessData?.map((item, index) => {
              return (
                <div
                  className="flex flex-col items-start  p-3 rounded-xl  bg-[#F5FAEC]/8 backdrop-blur-xs shadow-lg border border-[#F5FAEC]/20 w-fit mx-auto h-full"
                  key={index}
                >
                  <p className="text-3xl text-primary pb-2">{item.icon}</p>
                  <p className="lg:text-lg font-medium text-primary pb-1">
                    {item.title}
                  </p>
                  <p className="text-xl lg:text-2xl font-semibold text-primary pb-3 h-full grow">
                    {item.value}
                  </p>
                  <p className="text-xs lg:text-sm font-normal text-[#D1D1D1]  ">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className=" lg:py-11 px-8 rounded-2xl border-2 border-[#616161] max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#7F7F7F] text-center">
          {statsData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center py-6 px-4"
            >
              <div className="mb-6 text-primary text-[40px]">{item.icon}</div>
              <h3 className="text-[#F4F4F4] text-4xl font-normal pb-2">
                {item.value}
              </h3>
              <p className="text-[#F4F4F4] mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contains;
