import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "14": "54px",
      },
      borderRadius: {
        xl: "10px",
      },
      maxWidth: {
        lg: "593px",
        "39": "157px",
      },
      screens: {
        xl: "1367px",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
