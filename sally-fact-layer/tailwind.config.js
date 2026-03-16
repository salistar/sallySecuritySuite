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
          400: '#34d399', // emerald-400
          500: '#10b981', // emerald-500
          600: '#059669', // emerald-600
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
