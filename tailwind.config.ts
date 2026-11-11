import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#faf9f6",
        ink: "#16211d",
        muted: "#5b6762",
        line: "#dfe3df",
        forest: "#0f3b2e",
        accent: "#1d7a58",
        mint: "#e4f1ea",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"IBM Plex Sans Thai"', "system-ui", "sans-serif"],
        display: ['"Plus Jakarta Sans"', '"IBM Plex Sans Thai"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
