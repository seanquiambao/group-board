/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tools: {
          black: "#000000",
          red: "#FF0000",
          blue: "#0000FF",
        },
        board: {
          "blue-100": "#CBF3F0",
          "blue-200": "#2EC4B6",
          red: "#FF5631",
          "orange-100": "#FFBF69",
          "orange-200": "#FF9F1C",
        },
        black: "#333333",
      },
    },
  },
  plugins: [],
};
