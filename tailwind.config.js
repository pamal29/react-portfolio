export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "rgb(var(--bg) / <alpha-value>)",
          soft: "rgb(var(--bg-soft) / <alpha-value>)",
        },

        textLight: "rgb(var(--text-light) / <alpha-value>)",
        mutedLight: "rgb(var(--muted-light) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",

        neonPurple: "rgb(var(--neon-purple) / <alpha-value>)",
        neonPurpleDark: "rgb(var(--neon-purple-dark) / <alpha-value>)",
        neonPurpleSoft: "rgb(var(--neon-purple-soft) / <alpha-value>)",

        borderMuted: "rgb(var(--border-muted) / <alpha-value>)",
      },
    },
  },

  plugins: [],
}