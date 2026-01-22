"use client";

import { GooeyText } from "@/components/ui/gooey-text-morphing";
import Link from "next/link";

export default function BookSection() {
  return (
    <div
      id="book"
      className="h-[200px] w-full items-center justify-center mt-56 sm:mt-48 cursor-pointer"
    >
      <Link
        href="https://westernusc.store/product/hip-hop-western/"
        target="_blank"
      >
        {/* <MorphingText texts={["~book~", "your", "classes"]} />; */}
        <GooeyText
          texts={["~ book ~", "your", "classes"]}
          morphTime={1.5}
          cooldownTime={0.33}
          className="font-black"
        />
      </Link>
    </div>
  );
}
