/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {

    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        sm: '1rem',
        lg: '50px',
        xl: '50px',
        '2xl': '80px',
      },
    },

    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },

    extend: {
      backgroundImage: {
      },

      colors: {
        "primary_color":"#E76F51",
        "black":"#000",
        "white":"#fff",
      }
    },

    fontFamily: {
      'POPINS': ['Poppins', 'sans-serif'],
    }
  },
  
  
  plugins: [require("daisyui")],
}
