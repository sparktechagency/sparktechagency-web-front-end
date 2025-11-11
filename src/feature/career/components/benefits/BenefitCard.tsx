import { Home } from "lucide-react";

interface BenefitCardProps {
  benefit: { id: string; label: string; icon: React.ReactNode };
}

export function BenefitCard({ benefit }: BenefitCardProps) {
  return (
    <div className="flex items-center gap-3 px-6 py-4 bg-spark rounded-full hover:bg-[#0f3622] transition-colors duration-200 cursor-pointer h-[102px] w-auto">
      {benefit?.icon}
      <span className="text-white font-medium text-2xl whitespace-nowrap">
        {benefit?.label}
      </span>
    </div>
  );
}
