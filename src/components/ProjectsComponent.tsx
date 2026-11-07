import React from "react";
import {
  AstroIcon,
  ReactIcon,
  SvelteIcon,
  SupabaseIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "../assets/svg/LanguagesIcons";
import GanafyImg from "../assets/img/ganafy.webp";
import InmueblesImg from "../assets/img/inmuebleslatam.webp";
import ZonatechImg from "../assets/img/zonatechlatam.webp";
import HazmiImg from "../assets/img/hazmiweb.webp";
import LinkIcon from "../assets/svg/linkIcon";
import GithubIcon from "../assets/svg/GithubIcon";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { GanafyArchitecture } from "./GanafyArchitecture";

type IconComponent = (props: { className: string }) => React.ReactElement;

interface Tech {
  name: string;
  icon: IconComponent;
}

interface Project {
  src: string;
  title: string;
  description: string;
  /** Concrete outcomes, shown as a short checklist */
  highlights?: string[];
  languages: Tech[];
  link: string;
  /** Omitted for company work whose code is private */
  github?: string;
  /** Shown in place of the code link when github is omitted */
  privateNote?: string;
  live?: boolean;
}

const ListProjects: Project[] = [
  {
    src: GanafyImg,
    title: "Ganafy — SaaS Loyalty Platform",
    description:
      "Multi-tenant SaaS where small businesses create digital loyalty cards for Apple Wallet and Google Wallet. I was a core developer at Punto593, working across the Svelte app and the Supabase backend.",
    highlights: [
      "Businesses launch a loyalty program in under 10 minutes",
      "Wallet passes generated automatically for iOS and Android",
      "Tenant data isolated with Postgres Row Level Security",
    ],
    languages: [
      { name: "Svelte", icon: SvelteIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Supabase", icon: SupabaseIcon },
    ],
    link: "https://ganafy.com/",
    privateNote: "Private code · Punto593",
    live: true,
  },
  {
    src: InmueblesImg,
    title: "Inmuebles Latam — Real Estate Directory",
    description:
      "Real estate directory with 500+ listings across Ecuador, Mexico, Colombia, and Peru, with advanced filtering and a blog.",
    highlights: ["~60% fewer API calls with React Query caching", "Schema.org structured data for SEO"],
    languages: [
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Tailwind", icon: TailwindIcon },
    ],
    link: "https://inmuebleslatam.com/",
    github: "https://github.com/SebastianChacon/proy-america-hub",
    live: true,
  },
  {
    src: ZonatechImg,
    title: "ZonaTech Latam — Tech Blog",
    description:
      "Tech news blog for Latin America. Static Astro pages with React islands only where interaction is needed, and Sanity as a headless CMS for the editors.",
    highlights: ["Partial hydration keeps pages light", "Editors publish without touching code"],
    languages: [
      { name: "Astro", icon: AstroIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "React", icon: ReactIcon },
      { name: "Tailwind", icon: TailwindIcon },
    ],
    link: "https://www.zonatechlatam.com/",
    github: "https://github.com/SebastianChacon/zonatechlatam",
    live: true,
  },
  {
    src: HazmiImg,
    title: "HazMiWeb — Web Services Platform",
    description:
      "Platform for a web development agency, with a Supabase backend: PostgreSQL schema design, auth, and multi-user access control.",
    highlights: ["Row Level Security for multi-user access", "Built with the React Compiler"],
    languages: [
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Supabase", icon: SupabaseIcon },
    ],
    link: "https://hazmiweb.vercel.app/",
    github: "https://github.com/SebastianChacon/hazmiweb",
    live: true,
  },
];

const LiveBadge = () => (
  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-green-400/30 bg-green-500/15 px-2.5 py-0.5 text-xs font-medium text-green-300 backdrop-blur-md">
    <span className="size-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.9)]" />
    Live
  </span>
);

const ProjectCard = ({ project, featured = false }: { project: Project; featured?: boolean }) => {
  // "Inmuebles Latam — Real Estate Directory" → name + kind
  const [name, kind] = project.title.split(" — ");

  return (
    <article
      className={`glass project-card group isolate flex flex-col justify-end overflow-hidden rounded-2xl ${
        featured ? "min-h-[22rem] sm:col-span-2" : "min-h-72"
      }`}
    >
      {/* Screenshot fills the card */}
      <img
        className="absolute inset-0 -z-10 size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 group-focus-within:scale-105"
        src={project.src}
        alt=""
        loading="lazy"
      />
      {/* Dark scrim so the text always reads; deepens when details open */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/95 from-10% via-black/60 via-40% to-black/0 transition-colors duration-500 group-hover:bg-black/55 group-focus-within:bg-black/55"
      />

      <div className="flex flex-col p-5 text-white sm:p-6">
        {/* Always visible: name, kind and status */}
        <div className="flex items-end justify-between gap-3">
          <div>
            <h3 className={`font-semibold tracking-tight ${featured ? "text-2xl" : "text-lg"}`}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                {name}
              </a>
            </h3>
            {kind && <p className="mt-0.5 text-sm text-zinc-300">{kind}</p>}
          </div>
          {project.live && <LiveBadge />}
        </div>

        {/* Revealed on hover / keyboard focus; always open on touch screens */}
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] [@media(hover:none)]:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <div className="flex flex-col gap-3 pt-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:opacity-100">
              <p className={`text-sm leading-relaxed text-zinc-200 ${featured ? "max-w-xl" : ""}`}>
                {project.description}
              </p>
              {project.highlights && (
                <ul className="flex flex-col gap-1">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-zinc-100">
                      <svg
                        className="mt-0.5 size-4 shrink-0 text-green-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              )}
              <ul className="flex flex-wrap gap-1.5">
                {project.languages.map(({ name, icon: Icon }) => (
                  <li
                    key={name}
                    className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/10 px-2 py-0.5 text-xs text-zinc-100 backdrop-blur-md"
                  >
                    <Icon className="size-3.5" />
                    {name}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-white px-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
                >
                  <LinkIcon className="size-4" />
                  Live site<span className="sr-only"> for {name}</span>
                </a>
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
                  >
                    <GithubIcon className="size-4" />
                    Code<span className="sr-only"> for {name}</span>
                  </a>
                ) : (
                  project.privateNote && (
                    <span className="inline-flex h-9 items-center px-1 text-xs text-zinc-300">
                      {project.privateNote}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const ProjectsComponent = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" ref={ref as React.RefObject<HTMLElement>} className="reveal w-full scroll-mt-24 py-12">
      <SectionHeading index="01" label="Selected work" title="Projects" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {ListProjects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            // First card spans the row; so does the last one when it would sit alone
            featured={i === 0 || (ListProjects.length % 2 === 0 && i === ListProjects.length - 1)}
          />
        ))}
      </div>

      <GanafyArchitecture />
    </section>
  );
};
