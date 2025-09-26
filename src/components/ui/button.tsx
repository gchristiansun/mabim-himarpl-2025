"use client";

import borderCorner from "@/assets/ornaments/borderCorner.svg";
import Image from "next/image";
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  title: string;
  classN: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ title, classN, ...props }: ButtonProps) => {
  return (
    <div className="relative p-[6px] z-[6]">
      <button
        {...props}
        className={cn(" w-[110px] hover:scale-[101%] cursor-pointer transition-all duration-300 ease-in-out bg-gradient-to-r py-2 from-[#010030]/80 via-[#020063]/50 to-[#010030]/80 flex items-center justify-center", classN)}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 via-white to-white/50 font-montserrat font-bold">{title}</span>
      </button>
      <Image className="absolute top-0 left-0" src={borderCorner} alt="ornaments" />
      <Image className="absolute top-0 right-0 rotate-90" src={borderCorner} alt="ornaments" />
      <Image className="absolute bottom-0 left-0 rotate-[270deg]" src={borderCorner} alt="ornaments" />
      <Image className="absolute bottom-0 right-0 rotate-180" src={borderCorner} alt="ornaments" />
    </div>
  );
};
