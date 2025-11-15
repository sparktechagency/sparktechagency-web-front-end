interface BenefitCardProps {
  benefit: { id: string; label: string; icon: React.ReactNode };
}

export function BenefitCard({ benefit }: BenefitCardProps) {
  return (
    <div className="bg-spark rounded-full cursor-pointer  hover:bg-[#0f3622] transition-colors duration-200 py-3.5 lg:py-4.5 ps-[25px] pe-8 lg:ps-[30px] lg:pe-[38px] ">
      <div className="flex items-center gap-x-2">
        {benefit?.icon}
        <span className="text-white/90 font-medium text-sm whitespace-nowrap">
          {benefit?.label}
        </span>
      </div>
    </div>
  );
}
