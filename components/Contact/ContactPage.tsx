"use client";

import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { useBearStore } from "@/store/contact";
import { ShimmerButton } from "../ui/shimmer-button";
import { sendEmail } from "@/server/actions";
import { toast } from "sonner";

export default function ContactPage() {
  const { name, email, msg, setName, setEmail, setMsg, resetForm } =
    useBearStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, msg);
    const result = await sendEmail({ name, email, msg });

    if (result.success) {
      toast.success("Message sent successfully!");
      resetForm();
    } else {
      toast.error("Failed to send: " + result.error);
    }
  };

  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <div className="flex flex-col items-center justify-center pointer-events-auto">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            contact us.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-8 text-left text-white/90 font-mono flex flex-col justify-center items-center"
          >
            <div className="space-y-2">
              {/* Name Field */}
              <div className="flex items-center gap-2">
                <label htmlFor="name" className="shrink-0">
                  name:
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="_"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-16 bg-transparent border-none outline-none text-white/60 p-0 m-0 focus:ring-0"
                  autoComplete="off"
                />
              </div>

              {/* Email Field */}
              <div className="flex items-center gap-2">
                <label htmlFor="email" className="shrink-0">
                  email:
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="_"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-16 bg-transparent border-none outline-none text-white/60 p-0 m-0 focus:ring-0"
                  autoComplete="off"
                />
              </div>

              {/* Message Field */}
              <div className="flex items-start gap-2 mt-5">
                <label htmlFor="msg" className="shrink-0">
                  msg:
                </label>
                <textarea
                  id="msg"
                  required
                  placeholder="_"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  rows={5}
                  className="resize bg-transparent border-none outline-none text-white/60 p-0 m-0 focus:ring-0 h-auto"
                />
              </div>
            </div>

            <ShimmerButton className="text-lg mt-8" type="submit">
              send now
            </ShimmerButton>
          </form>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
