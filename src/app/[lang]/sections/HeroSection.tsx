"use client";

import { RefObject } from "react";
import ScrollDown from "../components/ScrollDown";
import Image from "next/image";
import flower from "../../../../public/flower-cropped.webp";
import { useDictionaries } from "@/app/context/dictionaryContext";

interface IHeroSection {
  sectionRef?: RefObject<HTMLDivElement>;
}

const HeroSection = ({ sectionRef }: IHeroSection) => {
  const { heroSection } = useDictionaries();

  const handleScrollTo = () => {
    if (sectionRef) {
      sectionRef?.current?.scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="lg:w-[100vw] h-[100svh] lg:h-[100vh] flex flex-col justify-center relative isolate">
      <div className="z-0 absolute -right-[70%] lg:-right-[10%] -top-[50%] lg:-top-[15%] transform-gpu -rotate-[205deg] lg:-rotate-[165deg]">
        <Image src={flower} alt="flower" loading="lazy" />
      </div>
      <div className="z-10 ml-5 lg:ml-0">
        <h1 className="font-leJourSerif">
          Hanna{" "}
          <span className="font-unJourMerveilleux">{heroSection.and}</span>{" "}
          Anders
        </h1>
      </div>
      <div className="z-10 absolute bottom-10 lg:bottom-20">
        <ScrollDown onClick={handleScrollTo} />
      </div>
      <div className="z-0 absolute -left-[143%] lg:-left-[10%] -bottom-[30%] lg:-bottom-[10%] transform-gpu rotate-[0deg] lg:rotate-[25deg]">
        <Image src={flower} alt="flower" loading="lazy" />
      </div>
    </section>
  );
};

export default HeroSection;
