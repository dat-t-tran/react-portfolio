/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#126ce1",
        secondary: "#757575",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        cambo: ["Cambo", "sans-serif"],
      },
    },
    screens: {
      xs: "576px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
};
