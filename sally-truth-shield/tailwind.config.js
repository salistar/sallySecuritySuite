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
          400: '#60a5fa', // blue-400
          500: '#3b82f6', // blue-500
          600: '#2563eb', // blue-600
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
