/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gray-to-blue": "linear-gradient(to right, #8A8A8A, #4A90E2)",
      },
      fontFamily: {
        Gayathri: ["Gayathri", "sans-serif"],
        DMSans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
