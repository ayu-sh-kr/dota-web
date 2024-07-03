/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './src/**/*.{ts, js, html}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
        'dm': ['DM Sans', 'sans-serif'],
        'akstic': ['Akstic', 'serif'],
        'sans': ['Inter var', 'sans-serif'],
        'system': ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

