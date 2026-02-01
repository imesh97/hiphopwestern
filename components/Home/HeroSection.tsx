"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";

import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { heroImages } from "@/lib/const";
import Link from "next/link";

export default function HeroSection() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "img",
      { opacity: [0, 1] },
      { duration: 0.5, delay: stagger(0.15) },
    );
  }, []);

  return (
    <div
      id="home"
      className="flex w-full h-full min-h-[600px] sm:min-h-[800px] justify-center items-center bg-black overflow-hidden"
      ref={scope}
    >
      <motion.div
        className="z-50 text-center space-y-4 items-center flex flex-col"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
      >
        <Link href="https://instagram.com/hiphopwestern" className="z-50 pt-8 text-6xl md:text-8xl font-bold text-[#fdfdfd] italic">
          hip hop
          <br />
          western.
        </Link>
        {/* <p className="text-xs z-50 hover:scale-110 transition-transform bg-white text-black rounded-full py-2 w-20 cursor-pointer">
          Events
        </p> */}
      </motion.div>

      <Floating sensitivity={-1} className="overflow-hidden">
        <FloatingElement depth={0.5} className="top-[8%] left-[11%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={heroImages[0].url}
            className="w-16 h-16 md:w-24 md:h-24 object-cover hover:scale-105 duration-200 transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[10%] left-[32%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={heroImages[1].url}
            className="w-20 h-20 md:w-28 md:h-28 object-cover hover:scale-105 duration-200 transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[8%] left-[53%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={heroImages[2].url}
            className="w-28 h-40 md:w-40 md:h-52 object-cover hover:scale-105 duration-200 transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[4%] left-[83%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={heroImages[3].url}
            className="w-24 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 transition-transform"
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[63%] left-[45%] sm:top-[40%] sm:left-[2%]"
        >
          <motion.img
            initial={{ opacity: 0 }}
            src={heroImages[4].url}
            className="w-28 h-28 md:w-36 md:h-36 object-cover hover:scale-105 duration-200 transition-transform"
          />
        </FloatingElement>
        <FloatingElement
          depth={2}
          className="top-[75%] sm:top-[70%] left-[77%]"
        >
          <motion.img
            initial={{ opacity: 0 }}
            src={heroImages[7].url}
            className="w-28 h-28 md:w-36 md:h-48 object-cover hover:scale-105 duration-200 transition-transform"
          />
        </FloatingElement>

        <FloatingElement
          depth={4}
          className="top-[65%] left-[5%] sm:top-[73%] sm:left-[15%]"
        >
          <motion.img
            initial={{ opacity: 0 }}
            src={heroImages[5].url}
            className="w-40 md:w-52 h-full object-cover hover:scale-105 duration-200 transition-transform"
          />
        </FloatingElement>
        <FloatingElement
          depth={1}
          className="top-[83%] sm:top-[80%] left-[50%]"
        >
          <motion.img
            initial={{ opacity: 0 }}
            src={heroImages[6].url}
            className="w-24 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 transition-transform"
          />
        </FloatingElement>
      </Floating>
    </div>
  );
}
