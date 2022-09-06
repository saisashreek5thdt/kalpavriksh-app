/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
<<<<<<< HEAD
    "./src/**/*.{js,jsx,ts,tsx}",
=======
    "./src/**/*.{js,jsx,ts,tsx}", 
>>>>>>> c2b858116a3c474af3fab495f0863220a17eaee0
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {},
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [
<<<<<<< HEAD
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/forms'),
=======
    require('tailwindcss'),
    require('tw-elements/dist/plugin'),
    require('autoprefixer'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
>>>>>>> c2b858116a3c474af3fab495f0863220a17eaee0
  ],
}
