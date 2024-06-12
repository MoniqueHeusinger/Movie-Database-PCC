/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'test-shadow': "linear-gradient(to right, rgba(0, 0, 0), rgba(20, 20, 20, 0.7), transparent), linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0.3), transparent), url('./src/assets/img/movie-bg-test.jpg')",
      },
      fontFamily: {
        poppinsRg: "Poppins-Rg",
        poppinsLg: "Poppins-Lg",
        poppinsXLg: "Poppins-XLg",
        poppinsXLgItalic: "Poppins-XLgIt",
        poppinsTh: "Poppins-Th",
        poppinsThItalic: "Poppins-ThIt",
        poppinsBd: "Poppins-Bd",
        poppinsSBd: "Poppins-SBd",
      }
    },
  },
  plugins: [],
}

