import React from "react";
import {
  AstroIcon,
  DartIcon,
  FirebaseIcon,
  FlutterIcon,
  HTMLIcon,
  JavaScriptIcon,
  ReactIcon,
  SvelteIcon,
  SupabaseIcon,
  TailwindIcon,
  TypeScriptIcon,
  VueIcon,
} from "../assets/svg/LanguagesIcons";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { SectionHeading } from "./SectionHeading";

type IconComponent = (props: { className: string }) => React.ReactElement;

interface Skill {
  name: string;
  icon: IconComponent;
}

interface SkillCategory {
  label: string;
  skills: Skill[];
}

const SkillCategories: SkillCategory[] = [
  {
    label: "Core",
    skills: [
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Tailwind CSS", icon: TailwindIcon },
      { name: "JavaScript", icon: JavaScriptIcon },
    ],
  },
  {
    label: "Frameworks",
    skills: [
      { name: "Svelte", icon: SvelteIcon },
      { name: "Vue", icon: VueIcon },
      { name: "Astro", icon: AstroIcon },
      { name: "Flutter", icon: FlutterIcon },
    ],
  },
  {
    label: "Backend & Data",
    skills: [
      { name: "Firebase", icon: FirebaseIcon },
      { name: "Supabase", icon: SupabaseIcon },
    ],
  },
  {
    label: "Other",
    skills: [
      { name: "HTML", icon: HTMLIcon },
      { name: "Dart", icon: DartIcon },
    ],
  },
];

export const LanguagesComponent = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" ref={ref as React.RefObject<HTMLElement>} className="reveal w-full scroll-mt-24 py-12">
      <SectionHeading index="03" label="Stack" title="Tools I use daily" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {SkillCategories.map(({ label, skills }) => (
          <div key={label} className="glass rounded-2xl p-5">
            <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{label}</h3>
            <ul className="flex flex-wrap gap-2">
              {skills.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-800 dark:border-white/10 dark:bg-white/[0.06] dark:text-zinc-100"
                >
                  <Icon className="size-4" />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
