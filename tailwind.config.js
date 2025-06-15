/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vietnam: {
          red: '#da020e',
          yellow: '#ffff00'
        }
      }
    },
  },
  plugins: [],
}
