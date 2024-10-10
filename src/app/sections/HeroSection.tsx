"use client";

import { RefObject } from "react";
import ScrollDown from "../components/ScrollDown";
import Image from "next/image";
import flower from "../../../public/flower-cropped.webp";
import { useDictionaries } from "@/app/context/dictionaryContext";

interface IHeroSection {
  sectionRef?: RefObject<HTMLDivElement>;
}

const centerText ={
  textAlign: "center" as const
}
const styleObj = {
  fontSize:29
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
      <div className="z-10 ml-5 lg:ml-1" style={centerText}>
        <h1 className="font-leJourSerif">
          Save {" "}
          <span className="font-unJourMerveilleux">{heroSection.the}</span>{" "}
          Date
          <br/>
          <br/>
        </h1>
          <h3 className="font-josefinSans" style={styleObj} >Vi gifter oss den 31 maj 2025 i Skövde</h3>
          <h3 className="font-josefinSans" style={styleObj} >Hoppas att ni vill vara med och förgylla vår dag!</h3>
          <h3 className="font-josefinSans" style={styleObj} >Mer info kommer</h3>
          <br></br>
          <br></br>          
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="font-unJourMerveilleux">
          Maja {" "}
          <span className="font-unJourMerveilleux">{heroSection.and}</span>{" "}
          Sam
          <br/>
          <br/>
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
