/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // If using React
    "./components/**/*.{js,jsx,ts,tsx}", // If using a components folder
  ],
  theme: {
    extend: {
      colors: {
        bgcolor: "#c7e9c0",
        bgcolor2: "#F7ADAD",
        secondary:"#238b45",
        secondary2:"#005730",
        purple:"#8c6df7",
        green1bg:"#D5F1E5",
        secondary3:"#247B68"
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

