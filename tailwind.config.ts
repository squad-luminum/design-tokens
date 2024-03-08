/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: [
   'fontSize',
   'fontFamily',
   'fontWeight',
  ],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}