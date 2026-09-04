/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ASU brand — https://brandguide.asu.edu
        asu: {
          blue: "#00a3e0",
          black: "#000000",
          white: "#ffffff",
          gold: "#ffc627",
          blueDark: "#272f42",
          green: "#78be20",
          orange: "#ff7f32",
          gray: "#747474",
          maroon: "#8c1d40",
        },
        // semantic tokens, remapped onto the ASU palette so every existing
        // component (bg-ink, bg-navy, text-paper, bg-explorer-cyan, …)
        // resolves to brand-correct colors without touching each file
        ink: {
          DEFAULT: "#000000",
          soft: "#12151b",
          deep: "#000000",
        },
        navy: {
          DEFAULT: "#272f42",
          light: "#39415a",
          dim: "#1c2333",
        },
        steel: {
          DEFAULT: "#747474",
          light: "#9a9a9a",
          dim: "#5a5a5a",
        },
        fog: "#9a9a9a",
        silver: "#c7c7c7",
        paper: {
          DEFAULT: "#ffffff",
          dim: "#f2f2f2",
          deep: "#e6e6e6",
        },
        signal: {
          DEFAULT: "#ffc627",
          light: "#ffd65c",
          dim: "#e0aa14",
        },
        explorer: {
          cyan: "#00a3e0",
          pink: "#8c1d40",
          orange: "#ff7f32",
          blue: "#00a3e0",
          green: "#78be20",
        },
      },
      fontFamily: {
        sans: ["'Neue Haas Grotesk Display Pro'", "Arial", "sans-serif"],
        mono: ["'Neue Haas Grotesk Display Pro'", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-1": "clamp(2.75rem, 8vw, 7.5rem)",
        "display-2": "62px",
        "display-3": "46px",
        edit: "20px",
        copy: "18px",
        subhead: "24px",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        container: "1600px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
