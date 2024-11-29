/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include React files
  ],
  theme: {
    extend: {}, // Customize Tailwind here if needed
  },
  plugins: [require("daisyui")], // Add DaisyUI plugin
}