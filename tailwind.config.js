/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14121F",
        paper: "#FAFAFC",
        indigo: "#3B2FA0",
        blue: "#3E6FE0",
        sky: "#5FC4EC",
        magenta: "#9C3E86",
      },
      fontFamily: {
        display: ["var(--font-cairo)", "sans-serif"],
        body: ["var(--font-tajawal)", "sans-serif"],
      },
      backgroundImage: {
        "growth-gradient": "linear-gradient(90deg, #3B2FA0 0%, #3E6FE0 45%, #5FC4EC 75%, #9C3E86 100%)",
      },
    },
  },
  plugins: [],
};
