"use client";
import Image from "next/image";
import Link from "next/link";

import LogoDevoria from "@/assets/logo/devoria.svg";
import LogoHIMARPL from "@/assets/logo/himarpl.svg";
import LogoUPI from "@/assets/logo/cibiru.svg";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { cn } from "@/lib/utils";

import { SiGmail, SiInstagram, SiTiktok, SiYoutube } from "@icons-pack/react-simple-icons";

export function GlobalFooter() {
  return (
    <footer className="bg-[#7226FF] text-white font-montserrat w-full">
      <div className="w-full p-8">
        <div className="flex flex-col items-center gap-y-6">
          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <Image src={LogoUPI} alt="Logo Kampus UPI di Cibiru" width={150} />
            <Image src={LogoHIMARPL} alt="Logo HIMARPL" width={200} />
            <Image src={LogoDevoria} alt="Logo Kabinet Devoria" width={150} />
          </div>

          <div className="flex w-full flex-col justify-between gap-4 sm:flex-row">
            <SocialMediaLinks />
            <Alamat />

            <Pranala />

            <MediaPartner />
          </div>
        </div>

        <div className="mt-6 space-y-1 py-6">
          <p className="text-center font-montserrat text-sm leading-5 text-white">
            Passionally crafted by{" "}
            <Link href="https://github.com/BintangKurniawan" target="_blank" className="font-mono font-semibold hover:underline text-neutral-100">
              Bintang
            </Link>
            {", "}
            <Link href="https://github.com/gchristiansun" target="_blank" className="font-mono font-semibold hover:underline text-neutral-100">
              Chris
            </Link>
            {", "}
            <Link href="https://github.com/Zreaei" target="_blank" className="font-mono font-semibold hover:underline text-neutral-100">
              Zamzami
            </Link>
            . Supported by Department{" "}
            <a href="https://himarpl.org/be/kominfo" target="_blank" className="font-mono font-semibold hover:underline text-neutral-100" rel="noopener noreferrer">
              KOMINFO
            </a>
            .
          </p>
          <p className="text-center text-sm leading-5">&copy; 2025 HIMARPL UPI, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialMediaLinks() {
  return (
    <ul className="flex w-full justify-between gap-2 sm:w-fit sm:flex-col">
      <li>
        <Link target="_blank" href={"mailto:himarpl@upi.edu"} className="social-link">
          <SiGmail color="#FFFFFF" className="h-5 w-5" />
        </Link>
      </li>
      <li>
        <Link target="_blank" href={"https://instagram.com/himarpl"} className="social-link">
          <SiInstagram color="#FFFFFF" className="h-5 w-5" />
        </Link>
      </li>
      <li>
        <Link target="_blank" href={"https://www.youtube.com/@himarplcibiru5901"} className="social-link">
          <SiYoutube color="#FFFFFF" className="h-5 w-5" />
        </Link>
      </li>
      <li>
        <Link target="_blank" href={"https://www.tiktok.com/@himarpl"} className="social-link">
          <SiTiktok color="#FFFFFF" className="h-5 w-5" />
        </Link>
      </li>
    </ul>
  );
}

function Alamat() {
  return (
    <div>
      <h4 className="scroll-m-20 font-montserrat text-lg text-white font-semibold tracking-wide">Alamat</h4>
      <p className="text-sm leading-4 text-[#d9d9d9] sm:w-64 md:w-96">Ruang HIMARPL Gedung Sekretariat Jalan Raya Cibiru Km. 15 Bandung 40393</p>
    </div>
  );
}

function Pranala() {
  return (
    <div>
      <h4 className="scroll-m-20 font-montserrat text-white text-lg font-semibold tracking-wide">Pranala</h4>
      <ul className="space-y-1">
        <li className="overflow-hidden">
          <Link target="_blank" className="inline-block text-sm leading-4 text-[#d9d9d9] hover:underline" href="https://himarpl.org">
            Himpunan Mahasiwa Rekayasa Perangkat Lunak
          </Link>
        </li>
        <li className="overflow-hidden">
          <Link target="_blank" className="inline-block text-sm leading-4 text-[#d9d9d9] hover:underline" href="https://upi.edu/">
            Universitas Pendidikan Indonesia
          </Link>
        </li>
        <li className="overflow-hidden">
          <Link target="_blank" className="inline-block text-sm leading-4 text-[#d9d9d9] hover:underline" href="https://rpl.upi.edu/">
            Rekayasa Perangkat Lunak UPI
          </Link>
        </li>
      </ul>
    </div>
  );
}

function MediaPartner() {
  return (
    <div>
      <h4 className="scroll-m-20 font-montserrat text-white text-lg font-semibold tracking-wide">Media Partner</h4>
      <ul className="space-y-1">
        <li className="overflow-hidden">
          <Link
            target="_blank"
            className="inline-block text-sm leading-4 text-[#d9d9d9] hover:underline"
            href="https://www.instagram.com/stories/highlights/18479254264070989/
"
          >
            Syarat dan Ketentuan
          </Link>
        </li>
      </ul>
    </div>
  );
}
