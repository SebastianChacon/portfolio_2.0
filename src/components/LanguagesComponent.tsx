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
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="reveal w-full py-12"
    >
      {/* Section heading */}
      <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-8">
        Technologies
      </h2>

      <div className="flex flex-col gap-6">
        {SkillCategories.map(({ label, skills }) => (
          <div key={label}>
            <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3 font-medium">
              {label}
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map(({ name, icon: Icon }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-default"
                >
                  <Icon className="size-4" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
