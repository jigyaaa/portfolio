import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0d060f",
        foreground: "#fdf2f8",
        sakura: {
          50: "#fff1f5",
          100: "#ffe4ec",
          200: "#fecddc",
          300: "#fba3c1",
          400: "#f66c9f",
          500: "#ed3d7f",
          600: "#d91e64",
          700: "#b8104e",
          800: "#981142",
          900: "#80123c",
          950: "#49041e",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
