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
        background1 : "#1E1E1E", /* Noir */
        background2 : "#EDE4DD", /* Beige */
        text1 : "#FEFEFE", /* Blanc */
        text2 : "#3E3E3E", /* Gris */
        text3 : "#F0444A", /* Rouge */
        
      },
      fontFamily: {
        inter : "var(--font-inter)",
        antonio : "var(--font-antonio)",
      },
    },
  },
  plugins: [],
};
export default config;
