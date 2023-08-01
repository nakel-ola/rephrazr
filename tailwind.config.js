/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#16a34a",
          light: "#dcfce7",
        },
        black: "#000000",
        white: "#ffffff",
        dark: "#101820",
        gray: {
          DEFAULT: "#4b5563",
          light: "#9ca3af",
        },
      },
      fontFamily: {
        sans: ["var(--font-signika-negative)"],
      },
    },
  },
  plugins: [],
};
