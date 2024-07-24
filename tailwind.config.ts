import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "bg-primary": "#FFFFFF",
      "bg-primary-2": "#FAFAFA",
      "bg-primary-3": "#D9D9D9",
      "bg-secondary": "#BEADFF",
      "text-primary": "#333333",
      "text-secondary": "#737373",
      "bg-btn": "#633CFF",
      "bg-btn-2": "#EFEBFF",
      "text-red": "#FF3939"
    },
  },
  plugins: [],
};
export default config;