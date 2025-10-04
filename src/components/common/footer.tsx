"use client";
import Link from "next/link";
import { useLenis } from "lenis/react";

import { cn } from "@/lib/utils";
const navLinks = [
  {
    name: "Booklet",
    href: "https://drive.google.com/drive/folders/1pgsNdC6gbFA9PIvhSUvj6O5ySA8SPiHk",
  },
  {
    name: "Twibbon",
    href: "https://drive.google.com/file/d/1NfB0BsIfFZu-ffspQaTD-6kLTiscXYMZ/view",
  },
  {
    name: "Logo",
    href: "https://drive.google.com/drive/folders/16Mv3QXEpoU4SjtX4NXvj4UIITCP76JL9",
  },
  {
    name: "Lihat Kelompok",
    href: "#kelompok",
  },
  {
    name: "Timeline",
    href: "#timeline",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
  {
    name: "Surat Keterangan Izin",
    href: "http://bit.ly/3VBSvBK",
  },
  {
    name: "Form Pelaporan Panitia",
    href: "https://forms.gle/nxKrWG4eE7PfW9Rm9",
  },
  {
    name: "Instagram Mabim RPL",
    href: "http://instagram.com/mabimrpl",
  },
];
const isExternalLink = (href: string) => href.includes("http");

export function Footer() {
  const lenis = useLenis();

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    if (!isExternalLink(href)) {
      e.preventDefault();
      lenis?.scrollTo(href, { offset: -64 });
    }
  };

  return (
    <footer className=" relative z-10 bg-[radial-gradient(101.34%_99.57%_at_50.02%_0.43%,#010030_7%,#7226FF_55%,#7226FF_100%)]">
      <div className="p-8 flex flex-col gap-4  md:flex-row md:items-center">
        <p className="font-montserrat text-lg text-neutral-200 md:text-xl">
          Tujuan dari Mabim RPL 2025 adalah untuk membantu mahasiswa baru dalam mengorientasikan diri mereka terhadap lingkungan akademik, mata kuliah dan kegiatan yang berkaitan dengan Rekayasa Perangkat Lunak UPI Kampus Cibiru.
        </p>

        <ul className="ml-4 flex min-w-72 flex-col gap-y-2 border-l border-[#AC8FDB] py-3 pl-6">
          {navLinks.map((link) => {
            const external = isExternalLink(link.href);
            return (
              <li key={link.name} className="overflow-hidden">
                <Link
                  href={link.href}
                  className={cn("inline-block font-bonobo text-lg leading-5 text-white hover:underline", {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    "pointer-events-none opacity-50 hover:no-underline": (link as any).disabled,
                  })}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    if ((link as any).disabled) {
                      e.preventDefault();
                      return;
                    }
                    handleLinkClick(link.href, e);
                  }}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
