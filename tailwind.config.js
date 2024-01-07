/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],

  theme: {
    screens: {
      sm: '574px',
      md: '768px',
      lg: '1024px',
      xl: '1140px',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '0rem',
          lg: '15px',
        },

      },
      fontFamily: {
        'Amiri': ['Amiri', 'serif'],
        'Ruqaa': ['Aref Ruqaa', 'serif'],
        'Work': ['Work Sans', 'sans-serif'],
      },
      colors: {
        'slate-200': "#E2E8F0",
        'slate-300': "#CBD5E1",
        'slate-500': "#64748B",
        'slate-700': "#334155",
        'slate-900': "#0F172A",
      },
    },
  },
  plugins: [],
}

