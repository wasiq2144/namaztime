/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      light: {
        primary: '#ffffff',
        secondary: '#f3f4f6',
      },
      dark: {
        primary: '#1f2937',
        secondary: '#374151',
      },
    },
    // Other configurations...
  },
  plugins: [],
  darkMode : 'class'
}