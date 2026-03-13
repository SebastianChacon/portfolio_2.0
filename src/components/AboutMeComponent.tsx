import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export const AboutMeComponent = () => {
  const ref = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="reveal w-full py-12"
    >
      <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-6">
        About
      </h2>
      <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
        <p>
          I'm a frontend-leaning full stack engineer with 2+ years shipping production software for real
          clients through Punto593, a web development agency based in Ecuador. My daily stack is React
          and TypeScript, but I've built and deployed production apps in Svelte, Astro, Vue, and Flutter —
          picking the right tool for each job.
        </p>
        <p>
          I'm based in New Jersey with a Green Card — no visa sponsorship required, available immediately
          for full-time roles, both remote and on-site in the greater NYC/NJ area. I care about
          performance, clean architecture, and shipping things that actually work for real users.
        </p>
      </div>
    </section>
  );
};
