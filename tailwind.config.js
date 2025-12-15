export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#143642',
      },
      clipPath: {
        'curved-top': 'polygon(0 10%, 100% 0, 100% 100%, 0% 100%)',
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}