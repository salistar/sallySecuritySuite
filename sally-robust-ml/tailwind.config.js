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
          400: '#fb7185', // rose-400
          500: '#f43f5e', // rose-500
          600: '#e11d48', // rose-600
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
