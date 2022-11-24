/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homepage-img': "url('./Assets/homepage.jpg')",
      }
    },
  },
  plugins: [],
}
