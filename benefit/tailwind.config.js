module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': "#FFCC00",
        'blue': "#000066"
      }
    },
    fontFamily:{
      big: ['Epilogue', 'sans-serif'],
    }
  },
  plugins: [],
}