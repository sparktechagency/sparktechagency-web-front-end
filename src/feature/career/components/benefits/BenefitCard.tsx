import { Home } from "lucide-react";

interface BenefitCardProps {
  benefit: { id: string; label: string; icon: React.ReactNode };
}

export function BenefitCard({ benefit }: BenefitCardProps) {
  return (
    <div className="flex items-center gap-3 px-6 py-3.5 bg-spark rounded-full hover:bg-[#0f3622] transition-colors duration-200 cursor-pointer">
       {benefit?.icon}
      <span className="text-white/90 font-medium text-sm whitespace-nowrap">
        {benefit?.label}
      </span>
    </div>
  );
}
