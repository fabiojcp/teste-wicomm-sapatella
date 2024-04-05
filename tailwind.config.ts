import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
      invert: {
        1: ".01",
        25: ".25",
        50: ".5",
        75: ".75",
      },
      colors: {
        brand1: "#161415",
        brand2: "#EFC21E",
        brand3: "#ECC31F",
        brand4: "#ED8F1E",
        brand5: "#0D7EB8",
        brand6: "#2C52A3",
        brand7: "#2E539A",
        brand8: "#EF308F",
        brand9: "#AD135F",
        brand10: "#872999",
        brand11: "#72DA3F",
        brand12: "#D85F44",
        brand13: "#A19D94",
        brand14: "#EAEAEA",
        brand15: "#EDEFE1",
        brand16: "#FCFCFC",
        brand17: "#514F47",
        brand18: "#FFFFFF",
        brand19: "#FFFFFF00",
        brand20: "#7c7c7c1a",
        brandPink: "#cf215b",
        brandWhite: "#FFFFFF",
        brandWhite30: "#FFFFFF30",
        brandBlack: "rgb(0,0,0)",
        brandBlack40: "rgb(0,0,0,0.4)",

        brandGradient:
          "linear-gradient(180deg, rgba(26,26,26,1) 0%, rgba(255,255,255,0) 100%)",
        brandLightGrey: "#d3d3d3",
      },
      boxShadow: {
        effect1: "0 4px 60px 20px #efc21e0d",
        effect2: "0 30px 80px #1614151a",
      },
    },
  },
  plugins: [],
};
export default config;
