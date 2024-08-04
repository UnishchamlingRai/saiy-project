/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #118BC9 0%, #145788 100%)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.95)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out forwards",
        "fade-out": "fade-out 0.3s ease-out forwards",
      },
      colors: {
        primary: {
          50: "#e7f3fa",
          100: "#b5d8ee",
          200: "#92cae9",
          300: "#60b1db",
          400: "#41a2d4",
          500: "#118bc9",
          600: "#0f7eb7",
          700: "#0c638f",
          800: "#094e6f",
          900: "#073a54",
        },
        success: {
          50: "#e6fbf1",
          100: "#b0e9d3",
          200: "#8cdcbe",
          300: "#54d0a1",
          400: "#33c78e",
          500: "#00bd72",
          600: "#00a868",
          700: "#008f51",
          800: "#006b3f",
          900: "#004d30",
        },
        danger: {
          50: "#fde8e9",
          100: "#f9dbdb",
          200: "#f7a9a5",
          300: "#f3676c",
          400: "#f14950",
          500: "#ec1c24",
          600: "#d81921",
          700: "#b81418",
          800: "#821014",
          900: "#640f0f",
        },
        warning: {
          50: "#fff9e6",
          100: "#ffeac2",
          200: "#ffe28d",
          300: "#ffd559",
          400: "#ffc439",
          500: "#ffc107",
          600: "#eab006",
          700: "#d58f05",
          800: "#bc6a04",
          900: "#a15703",
        },
        gray: {
          stroke: "#EEEEEE",
          100: "#FFFFFF",
          200: "#EFF0F5",
          300: "#E0E2EB",
          400: "#CDCFDB",
          500: "#B5B7C4",
          600: "#9597A3",
          700: "#6D6F78",
          800: "#3E3F44",
          900: "#0B0C0D",
        },
      },
    },
  },
  plugins: [],
};
