/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // => @media (min-width: 640px) { ... }
        'desktop': { 'min': '900px' },
        
        'tablet': {
          'max': '900px',
        },
        'mobile': { 'max': '764px' },
        // => @media (min-width: 1024px) { ... }

        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
