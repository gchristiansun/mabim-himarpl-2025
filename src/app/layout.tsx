import type { Metadata } from "next";
import { Geist, Montserrat } from "next/font/google";
import "./globals.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import localFont from "next/font/local";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mabim RPL 2025",
  description: "Masa Bimbingan Rekayasa Perangkat Lunak 2025",
  icons: [{ rel: "icon", url: "/icon.svg" }],
};

import { fontE, fontI, fontJ } from "./fonts";
import { ReactLenis } from "@/components/react-lenis";
import { Loading } from "@/components/providers/loading";
import Header from "@/components/common/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${montserrat.variable} ${fontE.variable} ${fontI.variable} ${fontJ.variable}`}>
      <body>
        <Header />
        <Loading>
          <ReactLenis>{children}</ReactLenis>
        </Loading>
      </body>
    </html>
  );
}
