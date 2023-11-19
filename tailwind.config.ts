import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: "rgb(83 252 24)",
        "primary-secondary": "rgb(58 211 5)",
        secondary: "rgb(25 27 31)",
        "secondary-lighter": "rgb(36 39 44)",
        "dark-lighter": "rgb(25 27 31)",
      },
    },
  },
  plugins: [],
} satisfies Config;
