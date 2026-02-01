"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { company } from "@/lib/const";

export default function CompanySection() {
  return (
    <div
      id="company"
      className="flex flex-col items-center justify-center pt-8 sm:pt-16 w-full"
    >
      <div><h2 className="mb-5 text-center font-medium text-foreground text-xl sm:text-lg tracking-tight">
          <span className="text-neutral-500">Our executives.</span>
          <br />
        </h2></div>
      <AnimatedTooltip items={company} />
    </div>
  );
}
