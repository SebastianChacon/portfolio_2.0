import React from "react";
import {
  AstroIcon,
  FirebaseIcon,
  ReactIcon,
  SupabaseIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "../assets/svg/LanguagesIcons";
import CanjeaImg from "../assets/img/canjea.jpeg";
import InmueblesImg from "../assets/img/inmuebleslatam.webp";
import ZonatechImg from "../assets/img/zonatechlatam.png";
import HazmiImg from "../assets/img/hazmiweb.jpg";
import LinkIcon from "../assets/svg/linkIcon";
import GithubIcon from "../assets/svg/GithubIcon";
import { useScrollReveal } from "../hooks/useScrollReveal";

type IconComponent = (props: { className: string }) => React.ReactElement;

interface Tech {
  name: string;
  icon: IconComponent;
}

interface Project {
  src: string;
  title: string;
  description: string;
  languages: Tech[];
  link: string;
  github: string;
  live?: boolean;
}

const ListProjects: Project[] = [
  {
    src: CanjeaImg,
    title: "Canjea — Collateral Lending Platform",
    description:
      "Production lending platform where users get instant cash using personal items as collateral. Features Firebase Auth, real-time Firestore, and Storage Rules for a secure full-stack experience.",
    languages: [
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Firebase", icon: FirebaseIcon },
      { name: "Tailwind", icon: TailwindIcon },
    ],
    link: "https://canjea.online/",
    github: "https://github.com/SebastianChacon/canjea-blue-main",
    live: true,
  },
  {
    src: InmueblesImg,
    title: "Inmuebles Latam — Real Estate Directory",
    description:
      "Premium real estate directory for Latin America with 500+ listings across Ecuador, Mexico, Colombia, and Peru. Dynamic SEO with Schema.org, lazy loading, blog system, and 50+ shadcn/ui components across 15+ pages.",
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
      "Technology news blog for Latin America built with Astro Islands Architecture and Sanity as headless CMS. Combines Astro's performance with React interactive islands — a rare production stack showing advanced architectural knowledge.",
    languages: [
      { name: "Astro", icon: AstroIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "React", icon: ReactIcon },
      { name: "Tailwind", icon: TailwindIcon },
    ],
    link: "https://www.zonatechlatam.com/",
    github: "https://github.com/SebastianChacon/zonatechlatam",
  },
  {
    src: HazmiImg,
    title: "HazMiWeb — Web Agency Landing",
    description:
      "Landing page for a web development agency built with React, TypeScript, and Supabase backend. Features the React Compiler, modern ESLint configuration, and clean component architecture deployed on Vercel.",
    languages: [
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Supabase", icon: SupabaseIcon },
    ],
    link: "https://hazmiweb.lat/",
    github: "https://github.com/SebastianChacon/hazmiweb",
  },
];

export const ProjectsComponent = () => {
  const ref = useScrollReveal();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="reveal w-full py-12"
    >
      {/* Section heading */}
      <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-8">
        Projects
      </h2>

      <div className="flex flex-col gap-5 w-full">
        {ListProjects.map((project, key) => (
          <div
            key={key}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col lg:flex-row group overflow-hidden"
          >
            {/* Project image */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:w-5/12 shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-900"
            >
              <img
                className="w-full h-48 lg:h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                src={project.src}
                alt={project.title}
              />
            </a>

            {/* Project content */}
            <div className="flex flex-col justify-between p-5 lg:p-6 flex-1">
              <div>
                {/* Title row with optional LIVE badge */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">
                    {project.title}
                  </h3>
                  {project.live && (
                    <span className="shrink-0 text-xs px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-medium">
                      LIVE
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tech pill badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.languages.map(({ name, icon: Icon }, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                    >
                      <Icon className="size-3.5" />
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                        {name}
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <LinkIcon className="size-3.5" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <GithubIcon className="size-3.5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
