import React, { CSSProperties } from "react";
import { useCountdown } from "../hooks/useCountdown";

const Countdown = () => {
  const countdownDate = "2024-06-29T16:00:00";

  const [days, hours, minutes, seconds] = useCountdown(countdownDate);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <DaysContent days={days} />
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": `${hours}` } as CSSProperties}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": `${minutes}` } as CSSProperties}></span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": `${seconds}` } as CSSProperties}></span>
        </span>
        sec
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
        days
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": `${days}` } as CSSProperties}></span>
        </span>
        days
      </div>
    );
  }
};

export default Countdown;
