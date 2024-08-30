/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/blocks/content-center.html"],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["dm-sans", "DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
