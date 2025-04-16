import { Config } from "tailwindcss";

export default <Partial<Config>>{
  darkMode: "class",
  content: ["./src/**/*.{ts, js, html}", "./node_modules/@ayu-sh-kr/dota-ui/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-moving":
          "linear-gradient(to right, #800080, #E1CD86, #BBCB92, #71C2EF, #3BFFFF, #DD7DDF, #E1CD86, #BBCB92, #71C2EF, #3BFFFF)",
      },
      backgroundSize: {
        "200": "200% 100%",
      },

      fontFamily: {
        helvetica: ["Helvetica", "Arial", "sans-serif"],
        montserrat:"Montserrat",
        dm: ["DM Sans", "sans-serif"],
        akstic: ["Akstic", "serif"],
        sans: ["Inter var", "sans-serif"],
        system: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        tilt: "tilt 10s infinite linear",
        "border-spin": "border-spin 7s linear infinite",
        "gradient-x": "gradientX 1s linear infinite",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(0.6deg)",
          },
          "75%": {
            transform: "rotate(-0.6deg)",
          },
        },
        gradientX: {
          "0%": { backgroundPositionX: "0%" },
          "50%": { backgroundPositionX: "-50%" },
          "100%": { backgroundPositionX: "-100%" },
          
        },
        "border-spin": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
