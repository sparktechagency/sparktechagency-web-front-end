import React from "react";
import Image from "next/image";
import { owners } from "@/constants/company";
const Owner: React.FC = () => {
  return (
    <div className="container  mb-16 lg:mb-20 flex flex-col gap-16 lg:gap-20">
      {owners?.map((owner, index) => (
        <div key={index}>
          <div
            className={` w-full  flex gap-12 lg:gap-20 items-center
                        ${
                          (index + 1) % 2 === 0
                            ? "flex-col md:flex-row-reverse justify-end"
                            : "flex-col md:flex-row justify-end"
                        }
                        `}
          >
            <div className={` flex-1 `}>
              <Image
                src={owner.imageUrl}
                alt="Dubai"
                width={466}
                height={664}
                className=" h-full lg:h-[603px] w-full object-contain"
              />
            </div>

            <div
              className={` flex-1 w-full md:py-10 lg:py-14 justify-center   ${
                (index + 1) % 2 === 0 ? " justify-end " : " justify-start "
              }  flex flex-col  `}
            >
              <h1 className="text-3xl md:text-[40px] font-medium text-[#121212] tracking-wide pb-[30px] leading-[150%]">
                {owner.slogan}
              </h1>
              <p className="text-base  text-[#555555]   md:text-justify  pb-4 lg:pb-10">
                {owner.bio}
              </p>
              <div className=" flex flex-col gap-y-0.5">
                <p className="text-2xl  text-[#029702] font-semibold ">
                  {owner.name}
                </p>
                <p className="text-lg  text-[#181818]">{owner.role}</p>
                <p className="text-lg  text-[#181818]">{owner?.company}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Owner;
