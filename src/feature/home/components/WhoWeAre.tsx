
import React from "react";
import { GoArrowRight } from "react-icons/go";

const WhoWeAre = () => {

  return (
    <div className=" min-h-screen w-full bg-linear-to-b from-[#041504] to-[#09320A]">
      <div className="container pt-20 pb-16 lg:pt-[140px] lg:pb-[73px]">
        <div className=" flex flex-col md:flex-row items-start justify-between gap-6">
          <div>
            <p className="text-[32px] font-semibold text-primary pb-6 ">
              {" "}
              Sparktech{" "}
            </p>
            <p className=" section-title font-bold! text-[#FDFDFD]! ">
              {" "}
              Who We Are?{" "}
            </p>
          </div>

          <div className=" space-y-6">
            <p className=" text-[#D1D1D1] font-normal lg:text-xl max-w-xl">
              We are a team of passionate creatives, skilled engineers, and
              strategic thinkers united by a shared mission to craft digital
              experiences
            </p>
            <button className=" flex items-center justify-center text-primary font-medium border border-primary py-4 px-6 rounded-full gap-1 hover:bg-primary hover:text-white transition-all duration-300">
              <span> View More </span>
              <span><GoArrowRight size={24} /></span>
            </button>
          </div>
        </div>

        <div className="h-[500px] w-full pt-10">
          <div className="relative   rounded-2xl shadow-lg h-[500px]">
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-video h-[500px] backdrop-blur-md w-full border border-transparent p-1.5">
              {/* Video background */}
              <div className="absolute inset-0">
                <video
                  className="w-full h-full lg:h-[500px] object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  disablePictureInPicture
                >
                  <source
                    src="https://res.cloudinary.com/dreiyzj42/video/upload/v1763358126/sta_zgadz0.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Play/Pause button */}
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={togglePlay}
                  className="w-20 h-20 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-gray-800" />
                  ) : (
                    <Play className="w-8 h-8 text-gray-800 ml-1" />
                  )}
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
