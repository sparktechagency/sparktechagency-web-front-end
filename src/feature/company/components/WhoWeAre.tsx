import React from "react";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div className="z-10 bg-transparent flex flex-col flex-center pb-20 pt-32 2xl:pt-36">
      <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-[10%]">
        <div className="text-start">
          <p className=" text-primary text-2xl lg:text-[32px] font-semibold pb-2">
            Sparktech
          </p>
          <h1 className="section-title text-[#FDFDFD]! font-bold!  pb-6">
            Who We Are?
          </h1>
          <p className="section-subtitle text-[#D1D1D1]!">
            We are a team of passionate creatives, skilled engineers, and
            strategic thinkers united by a shared mission to craft digital
            experiences With roots in both the United States and Bangladesh, our
            global presence gives us diverse perspectives and a deep
            understanding of modern digital needs. This blend of cultural
            insight and technical expertise allows us to create solutions that
            resonate with audiences worldwide.
          </p>
        </div>

        <div className="">
          <Image
            src="/assets/company/our-story/img1.png"
            alt="Company"
            className="w-full h-full object-contain"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
