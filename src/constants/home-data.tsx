import { PiHandshake, PiUsersThreeDuotone } from "react-icons/pi";
import { FaLaptopCode, FaSmile } from "react-icons/fa";
import {FaAward } from "react-icons/fa6";
import { GiGlobe } from "react-icons/gi";
import { BrainCircuit, ChartColumnBig } from "lucide-react";

const members = [
  { name: "Sarah Lee", img: "/assets/hero/members/user.jpg" },
  { name: "Mithila Khan", img: "/assets/hero/members/mithila.jpg" },
  { name: "Nadir Hossain", img: "/assets/hero/members/nadir.jpg" },
  { name: "Asaduzzaman", img: "/assets/hero/members/asad.png" },
];
const BoostBusinessData = [
  {
    title: "Average Revenue Growth",
    value: "2x",
    description:
      "Our knowledge and expertise are at your disposal to create a user-friendly products, acquire new customers.",
    icon: <ChartColumnBig />,
  },
  {
    title: "Team Grout",
    value: "600+",
    description:
      "Our knowledge and expertise are at your disposal to create a user-friendly products, acquire new customers.",
    icon: <PiUsersThreeDuotone className="" />,
  },
  {
    title: "Global Presence",
    value: "10+",
    description:
      "Our knowledge and expertise are at your disposal to create a user-friendly products, acquire new customers.",
    icon: <GiGlobe className="" />,
  },
  {
    title: "Talents Retained",
    value: "98%",
    description:
      "Our knowledge and expertise are at your disposal to create a user-friendly products, acquire new customers.",
    icon: <BrainCircuit className="" />,
  },
];

const statsData = [
  {
    id: 1,
    icon: <PiHandshake />,
    value: "1600+",
    title: "Clients",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    value: "5000+",
    title: "Successful Project",
  },
  {
    id: 3,
    icon: <FaAward />,
    value: "80%",
    title: "Repeat Business",
  },
  {
    id: 4,
    icon: <FaSmile />,
    value: "99%",
    title: "Customer Satisfaction",
  },
];

const OurEvolutionData = [
  {
    color: "#6D8F2B",
    children: (
      <div >
        <p className="text-xl font-semibold text-[#6D8F2B] mb-2">2023</p>
        <p className="text-[#606060] max-w-[500px] leading-relaxed text-[18px] ps-3">
          A vision sparked — and SparkTech Ltd. was born. <br />
          Founded by a group of passionate innovators, our mission was clear:
          to empower businesses through technology that’s fast, reliable, and
          future-ready. From day one, we focused on crafting smart digital
          solutions that deliver real impact.
        </p>
      </div>
    ),
  },
  {
    color: "#6D8F2B",
    children: (
      <div>
        <p className="text-xl font-semibold text-[#6D8F2B] mb-2">2024</p>
        <p className="text-[#606060] max-w-[500px] leading-relaxed text-[18px] ps-3">
          Growth became our fuel. <br />
          As our team expanded, so did our capabilities — from web and app development to cutting-edge UX/UI design, automation, and AI integration.  We built partnerships across industries, helping clients transform ideas into seamless digital experiences that scale and succeed.
        </p>
      </div>
    ),
  },
  {
    color: "#6D8F2B",
    children: (
      <div>
        <p className="text-xl font-semibold text-[#6D8F2B] mb-2">2025</p>
        <p className="text-[#606060] max-w-[500px] leading-relaxed text-[18px] ps-3 ">
          Innovation defines who we are today. <br />
          Innovation defines who we are today. SparkTech continues to push boundaries with intelligent solutions that merge creativity, strategy, and technology. Our journey is just beginning — and we’re committed to shaping the digital future with passion, precision, and purpose.SparkTech embraced new technologies and smarter workflows to help clients stay ahead in the digital era. We launched next-generation projects that merged automation, data intelligence, and creative UX/UI innovation.
        </p>
      </div>
    ),
  },
   {
    color: "#6D8F2B",
    children: (
      <div>
        <p className="text-xl font-semibold text-[#6D8F2B] mb-2">In Future</p>
        <p className="text-[#606060] max-w-[500px] leading-relaxed text-[18px] ps-3 ">
          As we move forward, our focus is on sustainability, innovation, and human-centered technology.
          SparkTec aims to lead the next wave of digital evolution — building smarter, faster, and more connected experiences for the world.
        </p>
      </div>
    ),
  },
];

export { members, statsData, BoostBusinessData, OurEvolutionData };
