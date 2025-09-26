"use client";
import Image from "next/image";
import Bg from "@/assets/bg.svg";
import card from "@/assets/cardKelompok.svg";
import card2 from "@/assets/cardKelompok2.svg";
import { Button } from "../ui/button";
import Mascot from "@/assets/mascots/default.svg";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import Gun from "@/assets/gun.svg";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/Dialog";
import { type GroupMabim, groupMabim, type Mentee } from "@/components/common/group-mabim";

import { motion as Motion } from "motion/react";

import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { GlitchText } from "../ui/glitch-effects";

export function KelompokSection() {
  const lenis = useLenis();
  const [name, setName] = useState("");
  const [mentee, setMentee] = useState<Mentee | undefined>();
  const [group, setGroup] = useState<GroupMabim | undefined>();
  const [isNotFound, setIsNotFound] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen || isNotFound) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [isOpen, isNotFound]);

  const handleSearch = () => {
    const cleanName = name.toLowerCase().trim();
    const currentGroup = groupMabim.find((group) => group.mentees.some((mentee) => mentee.name.toLowerCase() === cleanName));
    if (currentGroup) {
      const currentMentee = currentGroup.mentees.find((mentee) => mentee.name.toLowerCase() === cleanName);
      setIsNotFound(false);
      setGroup(currentGroup);
      setMentee(currentMentee);
      setIsOpen(true);
      console.log(1);
    } else {
      setIsNotFound(true);
      console.log(0);
    }
  };

  return (
    <section
      id="kelompok"
      className="bg-[radial-gradient(101.34%_99.57%_at_50.02%_100%,#010030_7%,#7226FF_55%,#3243A6_100%)]
 text-center flex min-h-[812px] h-screen w-full flex-col items-center pt-[140px] relative overflow-clip"
    >
      <div className="relative flex w-full items-center flex-col gap-6 z-[6] md:mt-20">
        <Image src={card} alt="card" className="absolute -bottom-10 w-[343px] z-[5] md:hidden " />
        <Image src={card2} alt="card" className="absolute -bottom-[60px] w-[800px] z-[5] md:block hidden" />

        <div className="w-[311px] md:w-[679px] z-[6]">
          <span className=" bg-gradient-to-r from-white/50 via-white to-white/50 bg-clip-text text-transparent font-ethno text-[34px]/[42.3px] md:text-[40px]/[48px]">Temukan Kelompok Mabim-mu</span>
          <p className="z-[6] font-montserrat font-bold text-white md:text-xl md:mt-4">Cari dengan menuliskan nama lengkap kamu!</p>
        </div>

        <div
          className="z-[6] bg-white/20 gap-[-8px] w-[311px] md:w-[667px] md:h-[80px] py-3 px-4 border-[#a2a2a2] border-[0.3px] flex items-center 
"
        >
          <input
            type="text"
            placeholder="Ketik disini..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                if (name.length > 0) {
                  handleSearch();
                }
              }
            }}
            className="w-full outline-0 font-montserrat font-bold text-[12px] placeholder:text-[#DAC2FF] text-white md:text-xl"
          />
        </div>

        <Button title="Launch" disabled={name.length === 0} onClick={handleSearch} classN="md:w-[667px] md:h-[80px]" />
      </div>
      <Image src={Bg} alt="bg pattern" className="absolute sm:hidden left-20 top-5 opacity-[8%]  inset-0  w-full h-full object-cover z-[1] scale-[175%] bg-center" />{" "}
      <div className="absolute -top-28 sm:hidden  bg-gradient-to-b from-[#010030] to-[#030096] w-full h-[234px] rounded-b-full blur-2xl"></div>
      <div className="absolute bottom-0 w-full h-[200px]">
        <Image src={Mascot} alt="mascot" className="absolute bottom-0 -left-8 w-[245px] h-[245px] z-[6] scale-150" />

        <div className="w-[22px] h-[22px] bg-white absolute right-8 top-0"></div>
        <div className="w-[22px] h-[22px] bg-[#AC8FDB] absolute right-13 top-6"></div>
        <div className="w-[48px] h-[48px] bg-[#8166E3] absolute right-20 top-20"></div>
        <div className="w-[22px] h-[22px] bg-white absolute right-0 bottom-5"></div>
      </div>
      <Dialog open={isNotFound} onOpenChange={setIsNotFound}>
        <DialogContent tabIndex={-1} className="">
          <DialogTitle className="font-ethno text-center py-6 bg-[#680000]/40 w-full border border-[#FF0000] relative shadow-[inset_0_0_37px_0_#FF0000] backdrop-blur-[56px] mb-9">
            <span className="bg-radial-[at_50%_50%] from-white to-[#B90808] bg-clip-text text-transparent text-2xl md:text-[55px]">Error</span>

            <Motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute bg-[#A11515] md:w-9 md:h-9 w-4 h-4 md:top-6 md:left-12 top-3 left-5"
            ></Motion.div>
            <Motion.div
              animate={{ x: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute bg-[#702929] md:w-[55px] w-6 h-6 md:h-[55px] md:bottom-3 md:left-32 bottom-1.5 left-14"
            ></Motion.div>
            <Motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute bg-[#790000] md:w-8 md:h-8 w-3 h-3 md:top-4 md:left-[238px] top-[7px] left-[102px]"
            ></Motion.div>
            <Motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute bg-[#C60000] md:w-12 md:h-0.5 w-5 h-[1px] m:top-5 md:left-64 top-2 left-[109px]"
            ></Motion.div>
            <Motion.div
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute bg-[#C74343] md:w-5 md:h-5 w-2 h-2 md:bottom-2 md:left-80 bottom-1 left-[137px]"
            ></Motion.div>
            <Motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute bg-[#721717] md:w-16 md:h-16 w-7 h-7  md:top-3 md:right-10 top-2 right-[18px]"
            ></Motion.div>
            <Motion.div
              animate={{ x: [0, 7, 0] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute bg-[#E60808] md:w-[72px] w-8 h-0.5 md:top-11 md:right-[79px] top-5 right-8"
            ></Motion.div>
          </DialogTitle>

          <DialogDescription hidden>im mysterious</DialogDescription>

          <div className="text-center p-6 flex flex-col justify-between bg-[#680000]/40 w-full border border-[#FF0000]  shadow-[inset_0_0_37px_0_#FF0000] backdrop-blur-[56px] text-white md:text-3xl text-base uppercase gap-8">
            <span className="font-montserrat  relative">
              Nama yang kamu masukkan salah! harap masukkan nama yang benar dengan nama lengkap.
              <span className="absolute inset-0 text-red-500 blur-sm  mix-blend-multiply">Nama yang kamu masukkan salah! harap masukkan nama yang benar dengan nama lengkap.</span>
            </span>

            <span className="font-jumbo relative">
              <GlitchText text="- Anonymous -" className="font-jumbo" />
            </span>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          tabIndex={-1}
          className="bg-[radial-gradient(circle_at_center_bottom,_#8166e3_0%,_rgba(1,0,48,0.4)_100%)]   overflow-hidden py-7 border border-[#8166E3] md:px-0 px-6 backdrop-blur-[150px] h-full shadow-[0_0_150px_rgba(172,143,219,0.4)]"
        >
          <DialogTitle hidden>sst</DialogTitle>
          <DialogDescription hidden>im mysterious</DialogDescription>
          <div className="flex w-full flex-col items-center justify-center text-center text-white">
            <span className="font-ethno text-[21px]">{`Group ${group?.id}`}</span>
            <span className="font-montserrat font-medium">{group?.name}</span>
            <span className="font-montserrat font-bold">
              {mentee?.id} - {mentee?.name}
            </span>
          </div>

          <div className="relative max-w-[688px] mb-6 w-full h-full border-r border-l border-[#B789FF]">
            <div className="absolute -bottom-32 left-0 right-0 -z-10 flex justify-center">
              {group?.mentor?.image && <Image src={group?.mentor?.image} alt={group?.mentor?.name} className="h-[550px] w-full object-scale-down object-bottom drop-shadow-[0_0_30px_rgba(114,38,255)]" />}
            </div>
          </div>
          <div className="bg-[linear-gradient(60deg,rgba(1,0,48,0.8)0%,rgba(2,0,99,0.6)50%,rgba(1,0,48,0.8)100%)] border border-[#B789FF] max-w-[688px] w-full flex flex-col gap-5  md:p-6 p-2 backdrop-blur-[73px]">
            <div className="flex flex-col gap-5">
              <div className="flex justify-between h-[52px] gap-4">
                <div className="flex flex-col gap-2 ">
                  <p className="font-ethno bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent text-[14px] break-words">{group?.mentor.name}</p>
                  <div className="flex gap-2">
                    <div className="border border-[#AC8FDB] bg-radial from-[#7226FF] to-[#010030] p-0.5 w-[18px] h-[18px]">
                      <Image src={Gun} alt={"Gun"} />
                    </div>
                    <div className="border border-[#AC8FDB] bg-radial from-[#7226FF] to-[#010030] w-[18px] h-[18px] flex items-center justify-center">
                      <p className="font-montserrat text-white text-[12px] font-medium">{group?.mentor.metadata.stats}</p>
                    </div>
                    <div className="border border-[#AC8FDB] bg-radial from-[#7226FF] to-[#010030] px-[6px] h-[18px] flex items-center justify-center">
                      <p className="font-montserrat text-white md:text-[12px] text-[8px] font-medium whitespace-nowrap">{group?.mentor.metadata.skill}</p>
                    </div>
                  </div>
                </div>

                <Link
                  href={`https://wa.me/${group?.mentor.phone}`}
                  target="_blank"
                  className="flex-grow h-full max-h-[52px] bg-[linear-gradient(90deg,rgba(1,0,48,0.8)0%,rgba(2,0,99,0.6)50%,rgba(1,0,48,0.8)100%)] border border-[#AC8FDB] flex items-center justify-center p-1.5 gap-1.5"
                >
                  <SiWhatsapp className="w-6 h-6" color="#FFFFFF" />
                  <span className="font-montserrat bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent font-bold">Contact</span>
                </Link>
              </div>
            </div>

            <p className="font-montserrat text-white md:text-base text-[12px]">{group?.mentor.metadata.description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
