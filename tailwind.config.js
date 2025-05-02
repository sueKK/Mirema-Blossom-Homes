/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors: {
      muted: '#6F7477',
      sand: '#756350',
      coffee: '#dbbb98',
      ash: '#ada599',
      walnut: '#403320',
      assent:'#f3be4c',
    },
  },
},
  plugins: [],
}