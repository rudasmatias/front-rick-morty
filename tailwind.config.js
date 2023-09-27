/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        custom: "url('/moco2.jpg')",
        nave: "url('/nave.jpg')",
        rick: "url('/rick.png')",
      },
    },
  },
  plugins: [],
};
