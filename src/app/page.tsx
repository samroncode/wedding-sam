"use client";

import ContactForm from "./components/Form";
import Countdown from "./components/Countdown";
import RSVPSection from "./sections/RSVPSection";
import CountdownSection from "./sections/CountdownSection";
import ToastMastersSection from "./sections/ToastMastersSection";

export default function Home() {
  const urlParams = new URLSearchParams(window.location.search);
  const staging = urlParams.get("staging");

  return (
    <>
      <main className="flex lg:min-h-screen flex-col items-center justify-center p-12 lg:p-24">
        <div className="z-10 max-w-5xl w-full flex-col items-center justify-center font-mono text-sm lg:flex">
          {/* HERO - with image */}
          {/* RSVP */}
          {/* Contact Toastmaster */}
          {/* Map + Instructions */}
          {/* Countdown */}
          {/* Children Information */}
          {/* Dresscode */}
          <CountdownSection />
          {staging && (
            <>
              <ToastMastersSection />
              <RSVPSection />
            </>
          )}
        </div>
      </main>
    </>
  );
}
