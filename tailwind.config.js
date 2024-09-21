/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
        customTeal: '#008080',
        splash:'#feffff',
        splash1:'#121B1A',
        login:"#D4FC05"

      }},
  },
  plugins: [],
}