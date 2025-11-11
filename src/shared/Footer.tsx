import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareBehance } from "react-icons/fa6";
import { IoLogoFacebook, IoLogoPinterest, IoLogoYoutube, IoMailUnreadSharp } from "react-icons/io5";
import { MdLocalPhone, MdLocationOn } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";

const socialMedias = [
  { icon: <FaLinkedin />, link: "mailto:ZvV1l@example.com" },
  { icon: <IoLogoYoutube />, link: "mailto:ZvV1l@example.com" },
  { icon: <IoLogoPinterest />, link: "mailto:ZvV1l@example.com" },
  { icon: <RiInstagramFill />, link: "mailto:ZvV1l@example.com" },
  { icon: <IoLogoFacebook />, link: "mailto:ZvV1l@example.com" },
  { icon: <FaSquareBehance />, link: "mailto:ZvV1l@example.com" },
]

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-[#09320A] to-[#041504] ">
      <div className=" flex-center container w-full pb-24">
        <Image src="/spark.png" width={1300} height={245} alt="logo" />
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left ">
          <Image src="/fullLogo.png" width={125} height={44} alt="logo" className=" pb-6 object-cover" />
          <p className=" max-w-[355px] text-[#F1F1F1] tracking-wide">
            An Experience Design Agency focusing on building functional, simple,
            human-centered digital products for future.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start mt-5 md:mt-0 text-[#F1F1F1]">
          <div className="space-y-4">
            <p className="text-xl font-medium  mb-6 "> For Contact</p>
            <p className="text-base flex items-center gap-2 "> <span><IoMailUnreadSharp size={16} /> </span> <span>sparktech.agency.sdtc@gmail.com</span> </p>
            <p className="text-base  flex items-center gap-2 "><span><MdLocalPhone size={16} /> </span> <span>+924-6789786 </span></p>
            <p className="text-base lg:max-w-[350px] flex items-start gap-2 "><span><MdLocationOn size={18} /> </span> <span> Aqua Tower 43, Mohakhali C/A Level - 7, 8, 9, 10, 11, Dhaka, Bangladesh </span></p>
          </div>

          <div className="flex space-x-4 mb-4">
            <Link href="https://www.linkedin.com" passHref>
              <p className="text-white hover:text-gray-400">
                <i className="fab fa-linkedin-in"></i>
              </p>
            </Link>
            <Link href="https://www.pinterest.com" passHref>
              <p className="text-white hover:text-gray-400">
                <i className="fab fa-pinterest"></i>
              </p>
            </Link>
            <Link href="https://www.instagram.com" passHref>
              <p className="text-white hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </p>
            </Link>
            <Link href="https://www.facebook.com" passHref>
              <p className="text-white hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </p>
            </Link>
            <Link href="https://www.github.com" passHref>
              <p className="text-white hover:text-gray-400">
                <i className="fab fa-github"></i>
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full pt-12 pb-20 ">
        <div className=" bg-linear-to-r from-[#051D05] via-[#178317] to-[#062106] max-w-[400px] h-1 flex items-center justify-center mx-auto" />
        <div className="flex items-center justify-center  gap-4">
          {socialMedias.map((socialMedia, index) => (
            <Link key={index} href={socialMedia.link} className="text-[#F1F1F1] text-[26px] pt-6">
              {socialMedia.icon}
            </Link>
          ))}
        </div>
      </div>

      <div className="container flex flex-col md:flex-row  justify-between items-center md:flex-center    text-white pb-5 ">
        <div className=" flex items-center gap-4   text-white">
          {/* Download Button */}
          <a
            href="https://drive.google.com/file/d/1rg_CRbQDkNwv0j2QWlA16vD2tMaxJNYu/view?usp=sharing"
            download
            className="bg-[#9ACA3C] w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-105"
          >
            <Download className="text-black w-5 h-5" />
          </a>

          {/* Text Section */}
          <div className="flex flex-col  gap-y-1 leading-tight">
            <p className="text-[16px] lg:text-2xl font-light text-[#F1F1F1]">Company Deck</p>
            <p className="text-sm text-[#7d7d82] font-medium">PDF, 17 MB</p>
          </div>
        </div>
        <p className="text-[#F1F1F1] text-[16px] mb-0 justify-end">
         © Copyright 2025 Sparktech agency  All Rights Reserved. | Powered by Sparktech
        </p>
      </div>
    </footer>
  );
};

export default Footer;
