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
          400: '#818cf8', // indigo-400
          500: '#6366f1', // indigo-500
          600: '#4f46e5', // indigo-600
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
