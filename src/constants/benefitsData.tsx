import {
  FiSmile,
  FiTrendingUp,
  FiBookOpen,
  FiCoffee,
  FiClock,
  FiStar,
  FiMapPin,
  FiCreditCard,
  FiPieChart,
  FiGift,
  FiUmbrella,
  FiPlayCircle,
} from "react-icons/fi";

export interface Benefit {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export const benefitsData: Benefit[] = [
  {
    id: "1",
    label: "Good Environment",
    icon: <FiSmile className="w-4.5 h-4.5 text-white/90 shrink-0" />,
  },
  {
    id: "2",
    label: "Performance Bonus",
    icon: <FiTrendingUp className="w-4.5 h-4.5 text-white/90 shrink-0" />,
  },
  {
    id: "3",
    label: "Skill Development Zone",
    icon: <FiBookOpen className="w-4.5 h-4.5 text-white/90 shrink-0" />,
  },
  {
    id: "4",
    label: "Coffee & Snacks",
    icon: <FiCoffee className="w-4.5 h-4.5 text-white/90 shrink-0" />,
  },
  {
    id: "5",
    label: "Flexible Working Hours",
    icon: <FiClock className="w-4.5 h-4.5 text-white/90 shrink-0" />,
  },
  {
    id: "6",
    label: "Prayer Zone",
    icon: <FiStar className="w-4.5 h-4.5 text-white/90 shrink-0" />,
  },
  {
    id: "7",
    label: "Annual Pleasure Tour",
    icon: <FiMapPin className="w-4.5 h-4.5 text-white/90 shrink-0" />,
  },
  {
    id: "8",
    label: "Leave Encashment",
    icon: <FiCreditCard className="w-4.5 h-4.5 text-white/90 shrink-0" />,
  },
  {
    id: "9",
    label: "Profit Share",
    icon: <FiPieChart className="w-4.5 h-4.5 text-white/90 shrink-0" />,
  },
  {
    id: "10",
    label: "Dual Festival Bonuses",
    icon: <FiGift className="w-4.5 h-4.5 text-white/90 shrink-0" />,
  },
  {
    id: "11",
    label: "Emergency Loan Facilities",
    icon: <FiUmbrella className="w-4.5 h-4.5 text-white/90 shrink-0" />,
  },
  {
    id: "12",
    label: "Relax & Sports Zone",
    icon: <FiPlayCircle className="w-4.5 h-4.5 text-white/90 shrink-0" />,
  },
];
