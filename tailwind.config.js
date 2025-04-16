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
      coffee: '#4E4235',
      ash: '#615B53',
      walnut: '#403320',
      assent:'#f3be4c',
    },
  },
},
  plugins: [],
}