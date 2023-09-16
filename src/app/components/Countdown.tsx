import React, { CSSProperties } from "react";
import { useCountdown } from "../hooks/useCountdown";

const Countdown = () => {
  const countdownDate = "2024-06-29T16:00:00";

  const [days, hours, minutes, seconds] = useCountdown(countdownDate);

  return (
    <div className="flex flex-col gap-7 lg:grid lg:grid-flow-col lg:gap-5 text-center auto-cols-max">
      <DaysContent days={days} />
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl justify-center">
          <span style={{ "--value": `${hours}` } as CSSProperties}></span>
        </span>
        <span className="mt-3">timmar</span>
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl justify-center">
          <span style={{ "--value": `${minutes}` } as CSSProperties}></span>
        </span>
        <span className="mt-3">minuter</span>
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl justify-center">
          <span style={{ "--value": `${seconds}` } as CSSProperties}></span>
        </span>
        <span className="mt-3">sekunder</span>
      </div>
    </div>
  );
};

interface IDaysContent {
  days: number;
}

const DaysContent = ({ days }: IDaysContent) => {
  if (days > 99) {
    return (
      <div className="flex flex-col">
        <span className="font-mono text-5xl">
          <span>{days}</span>
        </span>
        <span className="mt-3">dagar</span>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl justify-center">
          <span style={{ "--value": `${days}` } as CSSProperties}></span>
        </span>
        <span className="mt-3">dagar</span>
      </div>
    );
  }
};

export default Countdown;
