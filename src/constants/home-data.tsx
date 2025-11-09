import { PiHandshake, PiUsersThreeDuotone } from "react-icons/pi";
import {  FaLaptopCode, FaSmile } from "react-icons/fa";
import { FaCode, FaAward } from "react-icons/fa6";
import { GiGlobe } from "react-icons/gi";
import { BrainCircuit, ChartColumnBig, Handshake } from "lucide-react";

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
    icon: <FaAward  />,
    value: "80%",
    title: "Repeat Business",
  },
  {
    id: 4,
    icon: <FaSmile  />,
    value: "99%",
    title: "Customer Satisfaction",
  },
];

export { members, statsData , BoostBusinessData };
