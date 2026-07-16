"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 bg-transparent rounded-none" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center bg-transparent text-muted-foreground transition-all hover:text-foreground active:scale-95 rounded-none cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <FiSun className="h-4.5 w-4.5 text-accent-amber animate-pulse" />
      ) : (
        <FiMoon className="h-4.5 w-4.5 text-foreground" />
      )}
    </button>
  );
}
