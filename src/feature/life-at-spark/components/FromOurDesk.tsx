"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination, Autoplay } from "swiper/modules";

const FromOurDesk = () => {
  const data = [
    {
      id: 1,
      name: "Nadir Hossain",
      designation: "Sr. Full-Stack Developer",
      description:
        "SparkTech fuels innovation and collaboration. As a designer, I feel empowered to experiment, share ideas, and push creative boundaries. The team’s support and forward-thinking mindset make every project a chance to grow both personally and professionally.",
      imageUrl:
        "https://res.cloudinary.com/dreiyzj42/image/upload/v1763282133/inspiring-new-boss-copy1-768x1147_3_qzzpmq.png",
    },
    {
      id: 2,
      name: "Mashrur Hasan Uthso",
      designation: "Game Developer",
      description:
        "Working at SparkTech means being part of something dynamic. I’m constantly learning, experimenting with new strategies, and supported by a team that values growth, creativity, and results.",
      imageUrl:
        "https://res.cloudinary.com/dreiyzj42/image/upload/v1763282145/uthso_ulcwv5.png",
    },
    {
      id: 3,
      name: "Md. Emon",
      designation: "Graphic Designer",
      description:
        "Working at SparkTech means being part of something dynamic. I’m constantly learning, experimenting with new strategies, and supported by a team that values growth, creativity, and results.",
      imageUrl:
        "https://res.cloudinary.com/dreiyzj42/image/upload/v1763282154/emon_sqjevd.png",
    },
  ];

  return (
    <div className="lg:container mx-auto px-4 py-20  overflow-hidden">
      <p className="section-tag tracking-wide uppercase">From Our Desk</p>
      <h1 className="section-title md:pb-20 pb-12 ">
        Why We’re Proud to Be Here
      </h1>

      {/* Swiper Container */}
      <div className="w-full mx-auto relative lg:h-[388px] ">
        <div className="bg-linear-to-r from-[#09320A] to-[#041504] rounded-3xl lg:rounded-[60px] shadow-xl overflow-visible relative h-full">
          <Swiper
            direction="horizontal"
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Mousewheel, Pagination]}
            className="overflow-visible"
            style={{ height: "100%", overflow: "visible" }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id} className="overflow-visible h-[500px]">
                <div className="flex flex-row items-center md:items-stretch relative z-50">
                  {/* Text Section */}
                  <div className="flex flex-col justify-between px-4 py-8 md:p-14 text-white z-10">
                    <p className="w-[45%] lg:w-[75%] text-[10px] lg:text-[16px] md:text-lg font-normal leading-relaxed mb-6">
                      <span className="text-primary text-2xl font-extrabold">
                        ❛❛
                      </span>{" "}
                      {item.description}{" "}
                      <span className="text-primary text-2xl font-extrabold">
                        ❜❜
                      </span>
                    </p>

                    <div className="mt-8">
                      <h3 className="text-2xl font-medium text-[#9ACA3C]">
                        {item.name}
                      </h3>
                      <p className="text-lg text-[#F1F1F1]">
                        {item.designation}
                      </p>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="w-[100px] md:w-[400px] h-[388px] flex justify-end overflow-visible">
                    <div className="absolute bottom-40 lg:bottom-0 right-0 overflow-visible">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={450}
                        height={470}
                        className="w-[200px] lg:w-full lg:h-full object-cover lg:object-contain rounded-br-[60px]"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FromOurDesk;
