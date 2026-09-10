import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative w-10 h-10 flex items-center justify-center rounded-full
                 border border-borderMuted bg-bg-soft/50 backdrop-blur-sm
                 hover:border-neonPurple transition-colors duration-300"
    >
      <Sun
        className={`absolute w-5 h-5 text-neonPurpleSoft transition-all duration-300
          ${theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}`}
      />
      <Moon
        className={`absolute w-5 h-5 text-neonPurple transition-all duration-300
          ${theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0"}`}
      />
    </button>
  );
}