/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'default': '0 2px 4px rgba(0,0,0,0.2)',
        'primary': '0 0px 10px rgba(201, 243, 29)',
      },
    },
  },
  variants: {
    extend: {
      textShadow: ['hover'],
    },
  },
  plugins: [],
}