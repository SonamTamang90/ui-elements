const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      colors: {
        dark: {
          900: "#161616",
          700: "#1C1C1C",
          300: "#242424",
          200: "#2C2C2C",
        },
      },
    },
  },
  plugins: [],
};

export default config;
