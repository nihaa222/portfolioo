/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        thapa: {},
      },
      screens: {
        xs: "320px",
      },
      animation: {
        pixi: "pixi 2s infinite ease alternate ",
        rotate: " rotate 10s linear infinite",
        line: "line 1.2s infinite ease alternate",
      },

      keyframes: {
        pixi: {
          to: {
            transform: "translateY(20px)",
          },
        },
        line: {
          "0%": {
            transform: "scaleY(0)",
          },
          "100%": {
            transform: "scaleY(1.2)",
          },
        },
        rotate: {
          "0%": {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
