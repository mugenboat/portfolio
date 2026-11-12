import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f3eedc",
        ink: "#1b1b2f",
        paper: "#fffdf6",
        green: "#3fa66b",
        forest: "#17402f",
        sky: "#5aa9e6",
        pink: "#ff8fab",
        sun: "#ffd166",
        grape: "#9b8cff",
        muted: "#55566b",
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', "Kanit", "system-ui", "sans-serif"],
        pixel: ['"Press Start 2P"', '"Kanit Px"', "Kanit", "monospace"],
      },
      boxShadow: {
        px: "6px 6px 0 #1b1b2f",
        "px-sm": "4px 4px 0 #1b1b2f",
      },
    },
  },
  plugins: [],
};
export default config;
