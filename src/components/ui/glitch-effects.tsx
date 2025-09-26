"use client";
import { type CSSProperties } from "react";
import { motion as Motion } from "motion/react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className }) => {
  return (
    <div className={cn("relative text-2xl font-bold", className)}>
      {/* Base text */}
      <span className="relative z-10">{text}</span>

      {/* Red offset */}
      <Motion.span
        className="absolute top-0 sm:left-[35%] left-0 text-red-500 mix-blend-screen"
        initial={{ x: 0 }}
        animate={{
          x: [0, -3, 3, -1, 0],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        {text}
      </Motion.span>

      {/* Blue offset */}
      <Motion.span
        className="absolute top-0 sm:left-[45%] left-0 text-blue-500 mix-blend-screen"
        initial={{ x: 0 }}
        animate={{
          x: [0, 2, -2, 1, 0],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 0.25,
          repeat: Infinity,
          repeatDelay: 1.8,
        }}
      >
        {text}
      </Motion.span>

      {/* Random vertical slice */}
      <Motion.span
        className="absolute top-0 sm:left-[40%] left-0 overflow-hidden text-green-400"
        style={
          {
            clipPath: "inset(20% 0 60% 0)", // potong sebagian teks
          } as CSSProperties
        }
        animate={{
          x: [0, -5, 5, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 0.15,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        {text}
      </Motion.span>
    </div>
  );
};
