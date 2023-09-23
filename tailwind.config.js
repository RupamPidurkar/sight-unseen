/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        curse: ["Mea Culpa", "mono"],
        ayar: ["Ayar", "sans-serif"],
        freight: ["Freight", "cursive"],
      },
    },
  },
  plugins: [],
};
