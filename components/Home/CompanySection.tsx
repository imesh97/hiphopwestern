"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { company } from "@/lib/const";

export default function CompanySection() {
  return (
    <div
      id="company"
      className="flex flex-wrap items-center justify-center pt-8 sm:pt-16 w-full"
    >
      <AnimatedTooltip items={company} />
    </div>
  );
}
