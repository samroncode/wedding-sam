import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const josefinSans = localFont({
  src:  "../../public/fonts/josefin-sans/JosefinSans-Regular.ttf",
  variable: "--font-josefinSans"
});

const leJourSerif = localFont({
  src: "../../public/fonts/le-jour-serif/LeJourSerif.ttf",
  variable: "--font-leJourSerif"
});

const unJourMerveilleux = localFont({
  src: "../../public/fonts/un-jour-merveilleux/UnJourMerveilleux-Regular.ttf",
  variable: "--font-unJourMerveilleux"
});

export const metadata: Metadata = {
  title: "Hanna & Anders",
  description: "Hanna & Anders bröllopssida.",
  authors: [{ name: "Philip Åkerfeldt" }]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${josefinSans.variable} ${leJourSerif.variable} ${unJourMerveilleux.variable}`}
    >
      <body className={`lg:min-h-screen`}>{children}</body>
    </html>
  );
}
