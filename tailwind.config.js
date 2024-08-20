/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  colors: {
    'coral': {
      500: '#ff7f50',
      600: '#ff6347',
    },
    'peach': {
      100: '#ffe5b4',
      200: '#ffdab9',
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

