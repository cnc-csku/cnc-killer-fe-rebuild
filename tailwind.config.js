import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        luckiest_guy: ["var(--font-luckiest-guy)"]
      },
      colors: {
        background : "#121212",
        primary: {
          50 :"#E9B737",
          100:"#D3402A",
          DEFAULT: "#FFFFFF",
        },
       
      }
    },
  },
  darkMode: "class",
  plugins: [heroui( {
    theme: {
      dark: {
        colors: {
          background : "#121212",
          primary: {
            50 :"#E9B737",
            100:"#D3402A",
            DEFAULT: "#FFFFFF",
          },
          secondary: {
            background: "#FFFFFF",
            DEFAULT: "#FFFFFF"
          }
        }
      }
    }
  }
  )],
}

module.exports = config;