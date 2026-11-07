const stats = [
  { value: "2+", label: "Years in production" },
  { value: "4", label: "Production projects" },
  { value: "US", label: "Work authorized" },
];

export const AvatarComponent = () => {
  return (
    <section className="flex w-full flex-col gap-6 pb-16 pt-20 md:pt-28">
      <div className="hero-child">
        <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[13px] text-zinc-700 dark:text-zinc-200">
          <span className="size-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(74,222,128,0.9)] dark:bg-green-400" />
          Open to full-time roles · New Jersey · Remote OK
        </span>
      </div>

      <h1 className="hero-child max-w-[760px] text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.035em] text-zinc-950 dark:text-white md:text-6xl">
        Full stack developer shipping{" "}
        <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 bg-clip-text text-transparent dark:from-white dark:via-violet-300 dark:to-cyan-300">
          SaaS products
        </span>{" "}
        and client sites that are live today.
      </h1>

      <p className="hero-child max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
        2+ years shipping production software for real clients — React, TypeScript, Svelte &amp; Supabase on the front and back end. Based in New Jersey with a Green Card, no sponsorship needed.
      </p>

      <div className="hero-child flex flex-wrap gap-3 pt-2">
        <a href="#projects" className="btn-primary">
          View my work
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
        <a href="https://github.com/SebastianChacon" target="_blank" rel="noopener noreferrer" className="btn-ghost">
          GitHub
        </a>
        <a href="/Sebastian-Chacon_CV.pdf" download className="inline-flex h-11 items-center px-3 text-[15px] font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white">
          Download CV
        </a>
      </div>

      <div className="hero-child mt-6 grid max-w-xl grid-cols-3 gap-3">
        {stats.map(({ value, label }) => (
          <div key={label} className="glass rounded-xl px-4 py-3">
            <p className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">{value}</p>
            <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
