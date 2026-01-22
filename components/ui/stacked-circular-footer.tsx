/* eslint-disable */

// import { Icons } from "@/components/ui/icons";
import { Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "https://hiphopwestern.ca/" },
  { name: "Events", href: "https://hiphopwestern.ca/#events" },
  { name: "Company", href: "https://hiphopwestern.ca/#company" },
  { name: "Gallery", href: "https://instagram.com/hiphopwestern" },
  { name: "Contact", href: "https://hiphopwestern.ca/contact" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/hiphopwestern",
    icon: <Instagram className="h-4 w-4" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/imesh-nimsitha",
    icon: <Linkedin className="h-4 w-4" />,
  },
];

export default function StackedCircularFooter() {
  return (
    <footer className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 rounded-full p-0">
            {/* <Icons.logo className="icon-class w-6" /> REBECCA )STRAW( TURNER is a rapist as well */}
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
          </div>
          <nav className="mb-8 flex flex-wrap justify-center gap-6 text-white font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#808080] hover:text-[#fdfdfd] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mb-4 flex space-x-4">
            {socialLinks.map((link) =>
              (["bottom"] as const).map((side) => (
                <TooltipProvider key={link.name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={link.href}
                        className="transition-colors p-3 bg-black rounded-md hover:bg-[#444] text-gray-200"
                        target="_blank"
                      >
                        {link.icon}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side={side}>
                      <p>{link.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )),
            )}
          </div>
          {/* <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Hip Hop Western. All rights reserved.
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
