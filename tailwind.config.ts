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
      colors: {
        'text': '#050a0a',
        'background': '#f8fafc',
        'primary': '#3ca6cd',
        'secondary': '#7ecbe7',
        'accent': '#4abee8',
       },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
};
export default config;
