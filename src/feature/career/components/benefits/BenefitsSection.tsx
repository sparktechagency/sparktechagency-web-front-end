import { benefitsData } from "@/constants/benefitsData";
import { BenefitCard } from "./BenefitCard";

export function BenefitsSection() {
  return (
    <section className="container py-20">
      {/* Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left Column - Title */}
        <div className="lg:col-span-2">
          <span className="inline-block text-primary font-semibold text-[32px] mb-2 tracking-wide">
            Benefits
          </span>
          <h2 className="section-title">Our Competitive Advantage</h2>
        </div>

        {/* Right Column - Description with Icon */}
        <div className="flex flex-col items-start lg:items-end gap-6">
          <p className="section-subtitle">
            Empower your business with innovative digital experiences. Our
            expert team combines strategy, design, and technology. Together, we
            craft solutions that drive results and growth.
          </p>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {benefitsData?.map((benefit) => (
          <BenefitCard key={benefit.id} label={benefit.label} />
        ))}
      </div>
    </section>
  );
}
