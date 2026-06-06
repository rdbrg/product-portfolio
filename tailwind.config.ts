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
        paper: "#F6F2EA",
        ink: "#171717",
        muted: "#6F675D",
        line: "#DED6C9",
        accent: "#DB2777",
        blue: "#3B5BDB",
        purple: "#DB2777",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(23, 23, 23, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
