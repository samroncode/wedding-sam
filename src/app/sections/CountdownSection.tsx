"use client";
import { RefObject } from "react";
import Countdown from "../components/Countdown";
import { useDictionaries } from "@/app/context/dictionaryContext";

interface ICountdownSection {
  sectionRef?: RefObject<HTMLDivElement>;
}

const CountdownSection = ({ sectionRef }: ICountdownSection) => {
  const { countdownSection } = useDictionaries();
  return (
    <section
      className="relative flex flex-col items-center justify-center"
      ref={sectionRef}
    >
      <Countdown />
      <p className="mt-7 text-md">{countdownSection.misc.text}</p>
    </section>
  );
};

export default CountdownSection;
