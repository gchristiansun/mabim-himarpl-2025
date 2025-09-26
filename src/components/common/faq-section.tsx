import Bg from "@/assets/bgBiner.svg";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";
import { FAQAccordions } from "./faq-accordions";

export function FaqSection() {
  return (
    <section id="faq" className="bg-[radial-gradient(101.34%_99.57%_at_50.02%_0.43%,#010030_7%,#7226FF_55%,#3243A6_100%)] text-center flex  min-h-screen w-full flex-col items-center pt-[120px] relative overflow-clip">      
      <h3 className="font-ethno text-white text-[32px] md:text-[42px] z-[6] mb-10 text-primary">faq</h3>
      <FAQAccordions />
      <div className="absolute inset-0 opacity-5 bg-repeat bg-center bg-[length:160px] z-[1]" style={{ backgroundImage: `url(${Bg})` }} />
    </section>
  );
}
