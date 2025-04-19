/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        body: "hsl(47, 88%, 63%)",
        white: "hsl(0, 0%, 100%)",
        gray: {
          500: "hsl(0, 0%, 42%)",
          600: "hsl(0, 0%, 50%)",
          950: "hsl(0, 0%, 7%)",
        },
      },
      fontFamily: {
        sans: ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
