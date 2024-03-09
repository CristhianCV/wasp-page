/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'transparent': 'transparent',
        'yellow': '#e5d48e',
        'back-green': '#007c35',
        'light-green': '#00ad4a',
        'dark-green': '#032714',
      },
      minWidth: ({ theme }) => ({
        ...theme('spacing'),
      }),
      maxWidth: ({ theme }) => ({
        ...theme('spacing'),
      }),
    }
  },
  plugins: [],
}

