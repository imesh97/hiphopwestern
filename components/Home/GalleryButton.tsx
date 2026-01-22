"use client";

import { GlowingShadow } from "../ui/glowing-shadow";

export default function GalleryButton() {
  return (
    <div className="flex items-center justify-center">
      <GlowingShadow>
        <span className="pointer-events-none z-10 m-8 text-center text-5xl sm:text-8xl lg:text-9xl leading-none font-bold tracking-tighter text-white/75">
          Gallery
        </span>
      </GlowingShadow>
    </div>
  );
}
