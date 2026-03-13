import { useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle.tsx";

export const NavComponent = () => {
  useEffect(() => {
    const nav = document.getElementById("main-nav");
    const handler = () => {
      nav?.classList.toggle("nav-scrolled", window.scrollY > 10);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      id="main-nav"
      className="sticky top-0 z-50 py-3 flex flex-row justify-between items-center w-full max-w-3xl transition-all duration-200"
    >
      {/* Left: avatar + name */}
      <div className="flex items-center gap-3">
        <img
          className="rounded-full size-8"
          src="https://github.com/SebastianChacon.png"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://github.com/SebastianChacon.png";
          }}
          alt="Sebastian Chacon"
        />
        <span className="text-sm font-semibold text-gray-900 dark:text-white">
          Sebastian Chacon
        </span>
      </div>

      {/* Center: anchor links (hidden on mobile) */}
      <div className="hidden md:flex items-center gap-6">
        {[
          { label: "Work", href: "#work" },
          { label: "Projects", href: "#projects" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Right: theme toggle */}
      <ThemeToggle />
    </nav>
  );
};
