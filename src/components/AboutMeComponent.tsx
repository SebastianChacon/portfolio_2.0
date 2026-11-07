import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { SectionHeading } from "./SectionHeading";

export const AboutMeComponent = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref as React.RefObject<HTMLElement>} className="reveal w-full scroll-mt-24 py-12">
      <SectionHeading index="04" label="About" title="A bit about me" />
      <div className="max-w-2xl space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
        <p>
          I'm a full stack developer with a frontend focus. For two years at Punto593, a web agency in Ecuador, I was a
          core developer of Ganafy, a multi-tenant SaaS used by small businesses across the country. Since January 2026
          I've been freelancing, shipping sites for clients in real estate, tech media, and web services.
        </p>
        <p>
          My daily stack is React and TypeScript on the front end and Supabase with PostgreSQL on the back end. I've also
          shipped production work in Svelte, Astro, Vue, and Flutter. Most of my backend work has been data modeling and
          access control: Row Level Security, role-based access, and keeping each tenant's data isolated.
        </p>
        <p>
          I live in New Jersey and hold a Green Card, so no visa sponsorship is needed. I'm a native Spanish speaker and
          I'm open to full-time roles, remote or on-site in the NYC/NJ area.
        </p>
      </div>
    </section>
  );
};
