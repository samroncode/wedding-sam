import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { i18n } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";
import { DictionariesProvider } from "../context/dictionaryContext";

const josefinSans = localFont({
  src: "../../../public/fonts/josefin-sans/JosefinSans-Regular.ttf",
  variable: "--font-josefinSans"
});

const leJourSerif = localFont({
  src: "../../../public/fonts/le-jour-serif/LeJourSerif.ttf",
  variable: "--font-leJourSerif"
});

const unJourMerveilleux = localFont({
  src: "../../../public/fonts/un-jour-merveilleux/UnJourMerveilleux-Regular.ttf",
  variable: "--font-unJourMerveilleux"
});

export const metadata: Metadata = {
  title: "Hanna & Anders",
  description: "Hanna & Anders bröllopssida.",
  authors: [{ name: "Philip Åkerfeldt" }]
};

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dictionary = await getDictionary(params.lang as "sv" | "en");
  return (
    <html
      lang={params.lang}
      className={`${josefinSans.variable} ${leJourSerif.variable} ${unJourMerveilleux.variable}`}
    >
      <DictionariesProvider dictionary={dictionary}>
        <body className={`lg:min-h-screen`}>{children}</body>
      </DictionariesProvider>
    </html>
  );
}
