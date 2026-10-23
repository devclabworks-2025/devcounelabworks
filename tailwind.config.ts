import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#FFFFFF",
        muted: "#888888",
        border: "#222222",
        card: "#080808",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        teka: ["var(--font-teka)", "sans-serif"],
        serif: ["var(--font-instrument)", "serif"],
        mono: ["var(--font-chivo)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
