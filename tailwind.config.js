/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/blocks/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["dm-sans", "DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
