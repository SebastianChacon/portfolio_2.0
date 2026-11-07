import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle.tsx";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#work" },
  { label: "Stack", href: "#skills" },
  { label: "About", href: "#about" },
];

export const NavComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu with Escape or when the viewport grows past md
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const mq = window.matchMedia("(min-width: 768px)");
    const onResize = () => mq.matches && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  useEffect(() => {
    const wrapper = document.getElementById("nav-wrapper");
    const handler = () => {
      wrapper?.classList.toggle("nav-scrolled", window.scrollY > 10);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="relative mt-4 w-full max-w-3xl">
      <nav
        id="main-nav"
        aria-label="Main"
        className="glass flex w-full items-center justify-between gap-3 rounded-full py-1.5 pl-2 pr-1.5 transition-colors duration-200"
      >
        <a href="#top" className="flex items-center gap-2.5 rounded-full pr-2">
          <img
            className="size-8 rounded-full ring-1 ring-zinc-200 dark:ring-white/15"
            src="https://github.com/SebastianChacon.png"
            alt=""
            width={32}
            height={32}
          />
          <span className="text-sm font-semibold text-zinc-950 dark:text-white">Sebastian Chacon</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-full text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/10 md:hidden"
          >
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex h-10 items-center rounded-full bg-zinc-900 px-4 text-sm font-medium text-zinc-50 transition hover:bg-zinc-700 dark:bg-white/90 dark:text-zinc-950 dark:hover:bg-white"
          >
            Contact
          </a>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="glass absolute inset-x-0 top-full mt-2 rounded-2xl p-2 md:hidden">
          <ul className="flex flex-col">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex h-11 items-center rounded-xl px-4 text-[15px] text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/10"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Sebastian-Chacon_CV.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="flex h-11 items-center rounded-xl px-4 text-[15px] text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/10"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
