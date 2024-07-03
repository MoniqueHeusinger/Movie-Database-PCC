/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg-default': "linear-gradient(to right, rgba(0, 0, 0), rgba(20, 20, 20, 0.7), transparent), linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0.3), transparent), url('./src/assets/img/cinema-bg.jpg')",
        'genre-bg-default': "linear-gradient(to right, rgba(0, 0, 0), rgba(20, 20, 20, 0.7), transparent), linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0.3), transparent), linear-gradient(to top, rgba(0, 0, 0), rgba(0, 0, 0, 0.3), transparent),url('./src/assets/img/movie-bg-test.jpg')",
        'cinema': "linear-gradient(to right, rgba(0, 0, 0), rgba(20, 20, 20, 0.7), transparent), linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0.3), transparent), url('./src/assets/img/cinema_seats.jpg')",
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
        freeman: "Freeman"
      },
      display: ["group-hover"],
      boxShadow: {
        "strong": "1px 2px 36px -5px rgba(255,255,255,0.81)",
        "light": "3px 3px 19px -3px rgba(255,255,255,0.4)"
      }
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [],
  }
}
