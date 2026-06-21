/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vice: {
          pink: '#FF007F',
          orange: '#FF8C00',
          cyan: '#00E5FF',
          dark: '#0B001A',
          purple: '#7000FF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'], // For the big cinematic headers
      }
    },
  },
  plugins: [],
}