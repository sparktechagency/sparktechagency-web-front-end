import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Contains from "./Contains";
import dynamic from "next/dynamic";

const ClientGsap = dynamic(() => import("@/ui/ClientGsap"));
const BoostYourBusiness = () => {
  return (
    <div
      id="boost-container"
      className="relative min-h-screen w-full bg-linear-to-b from-[#041504] to-[#09320A] overflow-hidden flex flex-col lg:items-center lg:justify-center text-white"
    >
      {/* Rotating Earth Background */}
      <div className="absolute top-[53%] flex items-end justify-center">
        <div className="w-full h-full rounded-full animate-spin-slow">
          <img
            src="/earth.png"
            alt="Earth Background"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="relative container z-[999px] ">
        <Contains />
      </div>
      <ClientGsap targetId="boost-container" contentId="boost-content" />
    </div>
  );
};

export default BoostYourBusiness;
