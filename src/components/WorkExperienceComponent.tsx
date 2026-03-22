import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Experiences = [
  {
    date: "Jan 2026 – Present",
    company: "Self-Employed",
    title: "Freelance Full Stack Developer",
    type: "Freelance · Remote",
    bullets: [
      "Designed and shipped 4 production web applications for clients in loyalty, real estate, tech media, and web services.",
      "Built full-stack solutions with React, TypeScript, Firebase, Supabase, and Tailwind CSS — deployed on Vercel with custom domains.",
      "Implemented authentication, real-time databases, Row Level Security, and SEO optimization (Schema.org) across all projects.",
    ],
  },
  {
    date: "Feb 2024 – Jan 2026",
    company: "Punto593",
    title: "Full Stack Engineer",
    type: "Full-time · Ecuador (Remote)",
    bullets: [
      "Core developer of Ganafy (ganafy.com), a SaaS digital loyalty platform with Apple Wallet and Google Wallet integration serving small businesses across Ecuador.",
      "Built the full-stack application using Svelte, Supabase, PostgreSQL, and TypeScript — real-time point tracking, QR scanning, push notifications, and analytics dashboard.",
      "Implemented multi-tenant architecture with Row Level Security, role-based access, and automated wallet pass generation for iOS/Android.",
      "Developed onboarding flow, admin dashboard, and marketing automation enabling businesses to launch loyalty programs in under 10 minutes.",
    ],
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
              <ul className="flex flex-col gap-1.5">
                {experience.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-gray-400 dark:bg-gray-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
