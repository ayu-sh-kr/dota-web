import {Config} from "tailwindcss";

export default<Partial<Config>> {
  darkMode: 'class',
  content: [
      './src/**/*.{ts, js, html}',
      './node_modules/@ayu-sh-kr/dota-ui/**/*.{html,ts}'
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
      animation: {
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.6deg)',
          },
          '75%': {
            transform: 'rotate(-0.6deg)',
          },
        },
      },
    },
  },
  plugins: [],
}

