import {
  AstroIcon,
  FirebaseIcon,
  ReactIcon,
  SupabaseIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "../assets/svg/LanguagesIcons";
import ProjectsIcon from "../assets/svg/ProjectsIcon";
import CanjeaImg from "../assets/img/canjea.jpeg";
import InmueblesImg from "../assets/img/inmuebleslatam.webp";
import ZonatechImg from "../assets/img/zonatechlatam.png";
import HazmiImg from "../assets/img/hazmiweb.jpg";
import { SocialComponent } from "./SocialComponent";
import LinkIcon from "../assets/svg/linkIcon";
import GithubIcon from "../assets/svg/GithubIcon";

const ListProjects = [
  {
    src: CanjeaImg,
    title: "Canjea — Collateral Lending Platform",
    description:
      "Production lending platform where users get instant cash using personal items as collateral. Features Firebase Auth, real-time Firestore database, and Storage Rules for a secure full-stack experience.",
    languages: [ReactIcon, TypeScriptIcon, FirebaseIcon, TailwindIcon],
    link: "https://canjea.online/",
    github: "https://github.com/SebastianChacon/canjea-blue-main",
  },
  {
    src: InmueblesImg,
    title: "Inmuebles Latam — Real Estate Directory",
    description:
      "Premium real estate directory for Latin America with 500+ listings across Ecuador, Mexico, Colombia, and Peru. Includes dynamic SEO with Schema.org, lazy loading, blog system, and 50+ shadcn/ui components across 15+ pages.",
    languages: [ReactIcon, TypeScriptIcon, TailwindIcon],
    link: "https://inmuebleslatam.com/",
    github: "https://github.com/SebastianChacon/proy-america-hub",
  },
  {
    src: ZonatechImg,
    title: "ZonaTech Latam — Tech Blog",
    description:
      "Technology news blog for Latin America built with Astro Islands Architecture and Sanity as headless CMS. Combines Astro's performance with React interactive islands — a rare production stack that demonstrates advanced architectural knowledge.",
    languages: [AstroIcon, TypeScriptIcon, ReactIcon, TailwindIcon],
    link: "https://www.zonatechlatam.com/",
    github: "https://github.com/SebastianChacon/zonatechlatam",
  },
  {
    src: HazmiImg,
    title: "HazMiWeb — Web Agency Landing",
    description:
      "Landing page for a web development agency built with React, TypeScript, and Supabase backend. Features the React Compiler, modern ESLint configuration, and clean component architecture deployed on Vercel.",
    languages: [ReactIcon, TypeScriptIcon, SupabaseIcon],
    link: "https://hazmiweb.lat/",
    github: "https://github.com/SebastianChacon/hazmiweb",
  },
];

export const ProjectsComponent = () => {
  return (
    <div className="flex flex-col w-full max-w-[800px] items-start pb-10">
      <div className="flex items-center justify-start pb-10">
        <ProjectsIcon className="size-12 dark:text-gray-200 mr-4" />
        <h1>Projects</h1>
      </div>
      <div className="flex flex-col gap-6 w-full">
        {ListProjects.map((project, key) => (
          <div
            key={key}
            className="rounded-3xl border-2 flex flex-col border-gray-200 shadow-2xl shadow-gray-300 dark:border-gray-800 lg:flex-row"
          >
            <a href={project.link} target="_blank" className="lg:w-1/2 shrink-0">
              <img
                className="rounded-t-2xl h-full w-full object-cover lg:rounded-l-2xl lg:rounded-r-none"
                src={project.src}
                alt={project.title}
              />
            </a>
            <div className="mx-4 mb-4 lg:w-1/2">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-violet-800 dark:bg-gradient-to-l dark:from-red-100 dark:to-red-900 font-bold my-2">
                {project.title}
              </h3>
              <p>{project.description}</p>
              <div className="flex mt-4 flex-wrap gap-2">
                {project.languages.map((language, key) => {
                  const IconComponent = language;
                  return <IconComponent className="size-10" key={key} />;
                })}
              </div>
              <div className="flex justify-end mt-4">
                <SocialComponent href={project.link}>
                  <LinkIcon className="size-12" />
                  <p>Demo</p>
                </SocialComponent>
                <SocialComponent href={project.github}>
                  <GithubIcon className="size-12" />
                  <p>GitHub</p>
                </SocialComponent>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
