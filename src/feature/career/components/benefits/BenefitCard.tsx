import { Home } from "lucide-react";

interface BenefitCardProps {
  label: string;
}

export function BenefitCard({ label }: BenefitCardProps) {
  return (
    <div className="flex items-center gap-3 px-6 py-4 bg-spark rounded-full hover:bg-[#0f3622] transition-colors duration-200 cursor-pointer">
      <Home className="w-5 h-5 text-white shrink-0" />
      <span className="text-white font-medium text-sm whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}
