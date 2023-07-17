/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        garamond: ["var(--font-a_garamond_pro)", "ui-serif"],
        georgia: ["Georgia", "ui-serif"],
        libreFranklin: ["var(--font-libreFranklin)", "ui-serif"],
      },
      colors: {
        "gray-450": "rgb(128,138,148)",
      },
      boxShadow: {
        dark: "0 1px 3px 0 rgb(255 255 255 /0.1), 0 1px 2px -1px rgb(255 255 255 /0.1)",
      },
      transitionDuration: {
        250: "250ms",
      },
      gridTemplateRows: {
        "3topPicks": "minmax(2.5rem, auto) repeat(2, 1fr)",
        "5topPicks": "minmax(2.5rem, auto) repeat(4, 1fr)",
      },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
