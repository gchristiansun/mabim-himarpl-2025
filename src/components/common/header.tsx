"use client";
import Image from "next/image";
import ShieldLogo from "@/app/icon.svg";
import { useLenis } from "lenis/react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import HamburgerIcon from "@/assets/ornaments/Hamburger.svg";
import Link from "next/link";
const isExternalLink = (href: string) => href.includes("http");

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "#main" },
    { name: "Group", href: "#kelompok" },
    { name: "Countdown", href: "#countdown" },
    { name: "Timeline", href: "#timeline" },
    { name: "FAQ", href: "#faq" },
  ];

  const lenis = useLenis();

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    if (!isExternalLink(href)) {
      e.preventDefault();
      lenis?.scrollTo(href, { offset: -64 });
    }
  };
  return (
    <header className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[95%] z-50 flex items-center justify-between md:pl-6 md:pr-10 px-5 md:py-2 py-2 shadow-lg bg-[#ffffff]/20 border border-[#6C2EF2]">
      <div className="flex items-center gap-3">
        <Image src={ShieldLogo} alt="Logo" className="w-12 sm:w-15" />
        <span className="font-ethno text-md sm:text-base md:text-lg lg:text-xl text-[#E5E5E5] tracking-wide">MABIMRPL 2025</span>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 sm:gap-2 md:gap-4 lg:gap-6 text-sm sm:text-xs md:text-xs lg:text-sm font-medium text-[#E5E5E5]">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={(e) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              if ((link as any).disabled) {
                e.preventDefault();
                return;
              }
              handleLinkClick(link.href, e);
            }}
            className="hover:text-white transition"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      {/* Hamburger Icon */}

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="md:hidden flex items-center justify-center w-10 h-10 cursor-pointer rounded focus:outline-none z-50" onClick={() => setIsOpen((open) => !open)} aria-label="Open navigation menu">
            <Image src={HamburgerIcon} alt="Menu" width={24} height={24} className={`transition-transform duration-300 sm:w-8 sm:h-8 ${isOpen ? "rotate-90" : ""}`} />
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetTitle hidden>im here</SheetTitle>
          <div className="flex flex-col !z-50 mt-4 items-end gap-5 text-white">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className=" text-[20px] font-medium py-4 px-8 transition-all cursor-pointer"
                onClick={(e) => {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  if ((link as any).disabled) {
                    e.preventDefault();
                    return;
                  }
                  setIsOpen(false);
                  handleLinkClick(link.href, e);
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
