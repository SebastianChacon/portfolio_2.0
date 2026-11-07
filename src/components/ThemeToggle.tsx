import { useEffect, useState } from "react";
import SunIcon from "../assets/svg/SunIcon";
import MoonIcon from "../assets/svg/MoonIcon";

type Theme = "light" | "dark";

export const ThemeToggle = () => {
  // index.html sets the initial class before paint (stored choice, else system preference)
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage unavailable (private mode) — theme still applies for this visit
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex size-10 items-center justify-center rounded-full text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/10"
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};
