export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        // Base surfaces
        bg: {
          DEFAULT: "#0a0a0a",
          soft: "#111113",
        },

        // Text
        textLight: "#f5f5f5",
        mutedLight: "#a3a3a3",
        muted: "#6b6b6f",

        // Accent
        neonPurple: "#8b5cf6",
        neonPurpleDark: "#6d28d9",
        neonPurpleSoft: "#c4b5fd",

        // Borders
        borderMuted: "#27272a",
      },
    },
  },

  plugins: [],
}