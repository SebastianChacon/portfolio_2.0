import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { SectionHeading } from "./SectionHeading";

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
    <section id="work" ref={ref as React.RefObject<HTMLElement>} className="reveal w-full scroll-mt-24 py-12">
      <SectionHeading index="02" label="Experience" title="Where I've worked" />

      <ol className="glass divide-y divide-zinc-200 rounded-2xl dark:divide-white/10">
        {Experiences.map((experience) => (
          <li key={experience.company} className="flex flex-col gap-3 p-6">
            <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
              <div>
                <h3 className="text-[17px] font-semibold text-zinc-950 dark:text-white">
                  {experience.title} <span className="font-normal text-zinc-500 dark:text-zinc-400">·</span>{" "}
                  {experience.company}
                </h3>
                <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">{experience.type}</p>
              </div>
              <span className="font-mono text-[13px] tabular-nums text-zinc-500 dark:text-zinc-400">
                {experience.date}
              </span>
            </div>
            <ul className="flex flex-col gap-1.5">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2.5 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300">
                  <span className="mt-2.5 size-1 shrink-0 rounded-full bg-zinc-400 dark:bg-violet-300" />
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
};
