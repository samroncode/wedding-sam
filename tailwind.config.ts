import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      fontFamily: {
        josefinSans: ["var(--font-josefinSans)"],
        leJourSerif: ["var(--font-leJourSerif)"],
        unJourMerveilleux: ["var(--font-unJourMerveilleux)"]
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        branch: "#B7BAAD",
        "branch-dark": "#808279"
      },
      animation: {
        fadeDown: "fadeDown 2s ease-in-out infinite"
      },
      keyframes: {
        fadeDown: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "70%": { transform: "translateY(240%)", opacity: "1" },
          "100%": { transform: "translateY(240%)", opacity: "0" }
        }
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")]
};
export default config;
