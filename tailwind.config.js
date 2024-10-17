/* export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
} */


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6B00',
        'secondary': '#FFB800',
      },
    },
  },
  plugins: [],
}