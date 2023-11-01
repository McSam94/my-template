import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22223B",
        secondary: "#4A4E69",
        tertiary: "#9A8C98",
        quaternary: "#C9ADA7",
        quinary: "#F2E9E4",
        success: "#588157",
        warning: "#ffb703",
        error: "#9d0208",
        info: "#219ebc",
      },
    },
  },
  plugins: [],
};
export default config;
