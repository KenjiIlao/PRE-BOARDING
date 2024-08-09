/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        "UIP-blue": "#011F40",
        "light-blue": "#032535",
        "UIP-orange": "#FB7844",
        "light-gray": "#F8F8F8",
      }
    },
  },
  plugins: [],
}

