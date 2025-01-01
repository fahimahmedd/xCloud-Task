/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#6400E6', 
        primaryColorHover: '#174ec6', 
        secondaryColor: '#FFBB5A', 
        textColor :'#94A3B8',
        primaryBorder : '#ffffff2e'
      },
    },
  },
  plugins: [],
}

