// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ["./app/public/templates/**/*.html", "./app/**/*.py"],
  safelist: [
    'bg-ink-900', 'bg-ink-800', 'text-paper-100'
  ],
  theme: {
    extend: {
      colors: {
        ink:   { 900: "#0b0d10", 800: "#12161b" },
        paper: { 100: "#e6e9ef", 50: "#f2f4f8" },
        accent:{ mint:"#9be7c4", peach:"#ffc6a5", sky:"#9cc9ff", lilac:"#c7b7ff" },
      },
    },
  },
  plugins: [],
}
