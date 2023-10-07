"use client";

import localFont from "next/font/local";
import ContactForm from "./components/Form";
import Countdown from "./components/Countdown";
import RSVPSection from "./sections/RSVPSection";
import CountdownSection from "./sections/CountdownSection";
import ToastMastersSection from "./sections/ToastMastersSection";
import { useSearchParams } from "next/navigation";
import InformationSection from "./sections/InformationSection";
import HeroSection from "./sections/HeroSection";
import { useRef } from "react";

export default function Home() {
  const searchParams = useSearchParams();

  const staging = searchParams.has("staging");
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div>
      <main className="flex mobile-full-height flex-col items-center justify-center p-12 pt-0 lg:min-h-screen lg:h-full lg:px-24 overflow-hidden">
        <div className="z-10 max-w-5xl w-full flex-col items-center justify-center font-mono text-sm lg:flex">
          {/* HERO - with image */}
          {/* Countdown */}
          {/* Contact Toastmaster */}
          {/* Map + Instructions */}
          {/* Children Information */}
          {/* Dresscode */}
          {/* RSVP */}
          <HeroSection sectionRef={ref} />
          {/* <div ref={coundownSectionRef}> */}
          <CountdownSection sectionRef={ref} />
          {staging && (
            <>
              <InformationSection />
              <ToastMastersSection />
              <RSVPSection />
            </>
          )}
          {/* </div> */}
        </div>
      </main>
    </div>
  );
}
