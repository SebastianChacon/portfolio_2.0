import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Experiences = [
  {
    date: "Feb 2024 – Present",
    company: "Punto593",
    title: "Full Stack Engineer",
    type: "Full-time · Remote",
    description:
      "Built and shipped production web applications for clients across multiple industries using Svelte and Supabase. Developed real-time database integrations and authentication flows with Row Level Security. Handled the full software development lifecycle: planning, development, testing, and production deployment.",
  },
];

export const WorkExperienceComponent = () => {
  const ref = useScrollReveal();

  return (
    <section
      id="work"
      ref={ref as React.RefObject<HTMLElement>}
      className="reveal w-full py-12"
    >
      {/* Section heading */}
      <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-8">
        Work Experience
      </h2>

      <div className="flex flex-col gap-8">
        {Experiences.map((experience, key) => (
          <div key={key} className="flex flex-col md:flex-row gap-4 md:gap-8">
            {/* Date column */}
            <div className="md:w-36 shrink-0">
              <span className="text-xs text-gray-400 dark:text-gray-500 tabular-nums">
                {experience.date}
              </span>
            </div>

            {/* Content column */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {experience.title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">·</span>
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                  {experience.company}
                </span>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">
                {experience.type}
              </p>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
