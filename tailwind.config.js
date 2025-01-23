/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      backgroundColor: {
        primary: 'rgb(242, 244, 248)',
        secondary: '#f3f4f6',
        'dark-primary': 'rgb(19, 24, 29)', //'#1a1a1a',
        'dark-secondary': '#1f2937', //'#2d2d2d',
      },
      textColor: {
        primary: 'black',
        secondary: '#4b5563',
        'dark-primary': 'white',
        'dark-secondary': 'rgb(156, 163, 175)', // text-gray-400
      },
      borderColor: {
        primary: '#e5e7eb',
        'dark-primary': '#404040',
      },
    },
  },
  plugins: [],
}
