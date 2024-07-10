/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'bg-red-700',
    'bg-green-700',
    'bg-yellow-700',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
