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
        secondary: "rgb(25 27 31)",
        "secondary-lighter": "rgb(36 39 44)",
      },
    },
  },
  plugins: [],
} satisfies Config;
