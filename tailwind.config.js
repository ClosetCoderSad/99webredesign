/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '10px 10px 15px rgba(0, 0, 0, 0.3)', // custom shadow
      },
      colors: {
        customFooterColor: 'rgba(0, 0, 50, 1)', // Replace with your custom RGB value
      },
      fontFamily: {
        // Add the Frank Ruhl Libre font
        'frank': ['"Frank Ruhl Libre"', 'serif'],
        'alegreya': ['Alegreya', 'serif'],
      },
    },
  },
  plugins: [],
}