import { useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle.tsx";

export const NavComponent = () => {
  useEffect(() => {
    const wrapper = document.getElementById("nav-wrapper");
    const handler = () => {
      wrapper?.classList.toggle("nav-scrolled", window.scrollY > 10);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      id="main-nav"
      className="py-3 flex flex-row justify-between items-center w-full max-w-3xl transition-all duration-200"
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

      {/* Right: resume + theme toggle */}
      <div className="flex items-center gap-3">
        <a
          href="/Sebastian_Chacon_Resume.pdf"
          download
          className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          CV
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
};
