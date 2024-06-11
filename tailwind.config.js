/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1080px',
      xl: '1840px',
    },
    colors: {
      primary: '#111',
      secondary: '#fff',
    },
    extend: {  },
  },
  plugins: [],
}

