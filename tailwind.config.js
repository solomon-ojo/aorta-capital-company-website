import { nextui } from "@nextui-org/theme";
import { siteConfig } from "./config/site";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        lato: ["Lato", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        lora: ["Lora, sans-serif"],
        bebas: ["Bebas, sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            herobg: siteConfig.siteColors.heroBg,
          },
        },
        dark: {
          colors: {
            herobg: siteConfig.siteColors.heroBg,
          },
        },
      },
    }),
  ],
};
