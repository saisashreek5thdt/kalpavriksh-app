/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
<<<<<<< HEAD
<<<<<<< HEAD
    "./src/**/*.{js,jsx,ts,tsx}",
=======
    "./src/**/*.{js,jsx,ts,tsx}", 
>>>>>>> c2b858116a3c474af3fab495f0863220a17eaee0
=======
    "./src/**/*.{js,jsx,ts,tsx}",
>>>>>>> 686a2da6c3a61dacf0d642b2651b140f77dd5b8a
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
    require('autoprefixer'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
<<<<<<< HEAD
>>>>>>> c2b858116a3c474af3fab495f0863220a17eaee0
=======
    require('tw-elements/dist/plugin')
>>>>>>> 686a2da6c3a61dacf0d642b2651b140f77dd5b8a
  ],
}
