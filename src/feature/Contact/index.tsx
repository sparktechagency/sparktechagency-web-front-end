import React from "react";
import ContactForm from "./ContactForm";
import { ConfigProvider } from "antd";

const ContactPage = () => {
  return (
    <div className="pb-12">
      <section
        className={`min-h-[calc(100vh-48px)] 2xl:min-h-[calc(100vh-48px)] bg-[#EFEDF0] flex flex-col justify-center items-center text-center lg:rounded-b-[90px]  z-10`}
      >
        <div className="container flex flex-col md:flex-row gap-10 items-center justify-between bg-transparent mt-24 lg:mt-10">
          <div className=" w-full ">
            <div className=" lg:w-[80%]  flex flex-col items-start">
              <p className=" text-primary text-2xl lg:text-[32px] font-semibold pb-2">
                {" "}
                CONTACT US{" "}
              </p>
              <p className="section-title pb-6  text-start ">
                {" "}
                Let’s start the <br /> dialogue now!{" "}
              </p>
              <p className="section-subtitle text-start  ">
                Are you ready to elevate your brand’s digital presence? I lead
                an exceptional team of UX/UI designers, researchers, 3D artists,
                and webmasters.
              </p>
              <div className="h-[290px] w-full pt-10">
                <div className="relative   rounded-2xl shadow-lg h-[290px]">
                  <div className="relative rounded-2xl overflow-hidden bg-black aspect-video h-[290px] backdrop-blur-md w-full border border-primary  p-1.5">
                    {/* Video background */}
                    <div className="absolute inset-0">
                      <video
                        className="w-full h-full lg:h-[290px] object-cover"
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

          <div className=" w-full pt-8 ">
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#9aca3c",
                },
              }}
            >
              <ContactForm />
            </ConfigProvider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
