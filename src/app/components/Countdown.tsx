import React, { CSSProperties } from "react";
import { useCountdown } from "../hooks/useCountdown";
import { useDictionaries } from "@/app/context/dictionaryContext";

const Countdown = () => {
  const countdownDate = "2025-05-31T11:00:00";
  const { countdownSection } = useDictionaries();
  const [days, hours, minutes, seconds] = useCountdown(countdownDate);

  return (
    <div className="font-josefinSans flex flex-col gap-7 lg:grid lg:grid-flow-col lg:gap-5 text-center auto-cols-max text-black">
      <DaysContent days={days} translation={countdownSection.days} />
      <div className="flex flex-col">
        <span className="countdown text-5xl justify-center">
          <span style={{ "--value": `${hours}` } as CSSProperties}></span>
        </span>
        <span className="mt-3">{countdownSection.hours}</span>
      </div>
      <div className="flex flex-col">
        <span className="countdown text-5xl justify-center">
          <span style={{ "--value": `${minutes}` } as CSSProperties}></span>
        </span>
        <span className="mt-3">{countdownSection.minutes}</span>
      </div>
      <div className="flex flex-col">
        <span className="countdown text-5xl justify-center">
          <span style={{ "--value": `${seconds}` } as CSSProperties}></span>
        </span>
        <span className="mt-3">{countdownSection.seconds}</span>
      </div>
    </div>
  );
};

interface IDaysContent {
  days: number;
  translation: string;
}

const DaysContent = ({ days, translation }: IDaysContent) => {
  if (days > 99) {
    return (
      <div className="flex flex-col">
        <span className="text-5xl">
          <span>{days}</span>
        </span>
        <span className="mt-3">{translation}</span>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        <span className="countdown text-5xl justify-center">
          <span style={{ "--value": `${days}` } as CSSProperties}></span>
        </span>
        <span className="mt-3">{translation}</span>
      </div>
    );
  }
};

export default Countdown;
