/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#020617',
          800: '#0F172A',
          700: '#1E293B',
        },
        primary: {
          400: '#f87171', // red-400
          500: '#ef4444', // red-500
          600: '#dc2626', // red-600
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
