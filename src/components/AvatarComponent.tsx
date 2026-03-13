export const AvatarComponent = () => {
  return (
    <section className="flex flex-col items-center text-center pt-16 pb-20 w-full">

      {/* Layer 1: Profile photo */}
      <div className="hero-child mb-5">
        <img
          className="size-20 rounded-full ring-2 ring-gray-200 dark:ring-gray-700"
          src="https://github.com/SebastianChacon.png"
          alt="Sebastian Chacon"
        />
      </div>

      {/* Layer 2: Availability badge */}
      <div className="hero-child mb-5">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for full-time roles
        </span>
      </div>

      {/* Layer 3: Name */}
      <div className="hero-child mb-2">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
          Sebastian Chacon
        </h1>
      </div>

      {/* Layer 4: Role + Location */}
      <div className="hero-child mb-5">
        <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 font-medium">
          Frontend Developer · New Jersey, USA
        </p>
      </div>

      {/* Layer 5: Tagline — gradient used only here */}
      <div className="hero-child mb-8 max-w-lg px-4">
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          Building fast, accessible web products for real clients — specialized in{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-600">
            React, TypeScript & Svelte
          </span>
          .
        </p>
      </div>

      {/* Layer 6: CTA buttons */}
      <div className="hero-child flex gap-3 mb-10 flex-wrap justify-center">
        <a
          href="#projects"
          className="px-5 py-2.5 rounded-lg text-sm font-medium bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-80 active:scale-95 transition-all"
        >
          View My Work
        </a>
        <a
          href="mailto:chacontsebastian@gmail.com"
          className="px-5 py-2.5 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-500 dark:hover:border-gray-500 transition-colors"
        >
          Contact Me
        </a>
      </div>

      {/* Layer 7: Quick stats */}
      <div className="hero-child flex items-center gap-8 flex-wrap justify-center">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">2+</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Years Experience</span>
        </div>
        <div className="w-px h-8 bg-gray-200 dark:bg-gray-700" />
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">4</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Production Projects</span>
        </div>
        <div className="w-px h-8 bg-gray-200 dark:bg-gray-700" />
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">US</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Work Authorized</span>
        </div>
      </div>

    </section>
  );
};
