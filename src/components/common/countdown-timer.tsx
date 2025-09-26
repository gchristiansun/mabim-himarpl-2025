"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "motion/react";
import Image from "next/image";
import TimerDot from "@/assets/ornaments/timer-dot.svg";

const events = [
  { label: "TM", short: "TM", date: "2025-10-04" },
  { label: "Day 1", short: "D-I", date: "2025-10-12" },
  { label: "Day 2", short: "D-II", date: "2025-10-18" },
  { label: "Day 3", short: "D-III", date: "2025-10-19" },
  { label: "Day 4", short: "D-IV", date: "2025-11-02" },
];

export default function CountdownTimerTabs() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="flex flex-col items-center w-full max-w-xl mx-auto py-6 px-2 md:px-0">
      <div className="flex justify-start md:justify-center gap-0 md:gap-2 mb-6 w-full bg-[#1B0A3D]/60 rounded-lg border border-[#6C2EF2] px-2 py-2 overflow-x-scroll">
        {events.map((event, idx) => (
          <button
            key={event.label}
            onClick={() => setActiveTab(idx)}
            className={`relative min-w-[120px] md:min-w-[80px] flex items-center justify-center px-6 py-2 font-bold text-base md:text-lg rounded-md transition-all duration-300 border-none outline-none cursor-pointer focus:outline-none ${activeTab === idx ? "bg-[#6C2EF2]/80 text-white" : "bg-transparent text-[#E5E5E5]"}`}
          >
            {activeTab === idx && (
              <Motion.span className="absolute left-2 top-1/2 -translate-y-1/2" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}>
                <Image src={TimerDot} alt="active" width={18} height={18} />
              </Motion.span>
            )}
            <span className="ml-6">{event.short}</span>
          </button>
        ))}
      </div>
      {/* <div className="w-full h-[0.1px] bg-white mb-8 mt-5"></div> */}
      <CountdownTimer targetDate={events[activeTab].date} />
    </section>
  );
}

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (typeof days === "undefined" || typeof hours === "undefined" || typeof minutes === "undefined" || typeof seconds === "undefined") {
      return;
    }
    const countdown = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
    setIsExpired(countdown <= 0);
  }, [days, hours, minutes, seconds]);

  return (
    <Motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 120, damping: 12 }} className="flex items-center justify-center w-full">
      <div className="w-full md:w-[820px] md:h-[200px] flex items-center justify-center bg-[#ffffff]/10 rounded-sm border border-white/50 py-8 px-4 shadow-[inset_0_4px_6px_rgba(255,255,255,0.4)]">
        {isExpired ? <ExpiredNotice /> : <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />}
      </div>
    </Motion.div>
  );
}

function ExpiredNotice() {
  return (
    <div className="flex gap-2 text-lg md:text-2xl text-[#E5E5E5]">
      <span>Event Ended</span>
    </div>
  );
}

function ShowCounter({ days, hours, minutes, seconds }: { days?: number; hours?: number; minutes?: number; seconds?: number }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }
  return (
    <div className="flex items-center justify-center gap-0 md:gap-2 w-[360px]">
      <DateTimeDisplay value={days} type="Hari" />
      <Separator />
      <DateTimeDisplay value={hours} type="Jam" />
      <Separator />
      <DateTimeDisplay value={minutes} type="Menit" />
      <Separator />
      <DateTimeDisplay value={seconds} type="Detik" />
    </div>
  );
}

function Separator() {
  return <span className="mx-2 text-3xl md:text-4xl lg:text-7xl font-bold text-white opacity-60">:</span>;
}

function DateTimeDisplay({ value, type }: { value?: number; type: string }) {
  const displayValue = (value ?? 0) < 10 ? `0${value}` : `${value}`;

  return (
    <div className="flex flex-col items-center justify-center w-16 md:w-24">
      <AnimatePresence mode="popLayout">
        <Motion.span
          key={displayValue}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className=" font-bold text-4xl md:text-5xl lg:text-8xl text-white drop-shadow-lg"
        >
          {displayValue}
        </Motion.span>
      </AnimatePresence>
      <span className="-mt-1 text-base md:text-lg lg:text-xl lowercase opacity-80 text-white tracking-wide">{type}</span>
    </div>
  );
}

function useCountdown(targetDate: string | number | Date) {
  const [countDownDate, setCountDownDate] = useState(new Date(targetDate).getTime());
  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    setCountDownDate(new Date(targetDate).getTime());
  }, [targetDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
}

function getReturnValues(countDown: number) {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  return [days, hours, minutes, seconds];
}
