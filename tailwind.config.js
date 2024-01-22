/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'red': "#ef4444",
        'netral': "#f5f5f5",
        'green': '#4ade80',
        'amber': "#fcd34d",
        'zinc': "#1f2937",
      }
    },
  },
  plugins: [],
}

