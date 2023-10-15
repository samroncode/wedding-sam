"use client";
import { RefObject } from "react";
import Countdown from "../components/Countdown";

interface ICountdownSection {
  sectionRef?: RefObject<HTMLDivElement>;
}

const CountdownSection = ({ sectionRef }: ICountdownSection) => {
  return (
    <section
      className="flex flex-col items-center justify-center"
      ref={sectionRef}
    >
      <Countdown />
    </section>
  );
};

export default CountdownSection;
