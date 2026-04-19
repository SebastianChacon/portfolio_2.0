import React from "react";
import GithubIcon from "../assets/svg/GithubIcon";
import LinkedinIcon from "../assets/svg/LinkedinIcon";
import { useScrollReveal } from "../hooks/useScrollReveal";

export const ContactComponent = () => {
  const ref = useScrollReveal();

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="reveal w-full py-12 pb-20"
    >
      {/* Section heading */}
      <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-6">
        Contact
      </h2>

      {/* Headline */}
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Let's work together.
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 max-w-md">
        I'm open to full-time Frontend / Full Stack roles in the US.
        Response time: within 24 hours.
      </p>

      {/* Action buttons */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {/* Primary CTA */}
        <a
          href="mailto:chacontsebastian@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white dark:bg-white dark:text-gray-900 text-sm font-medium hover:opacity-80 active:scale-95 transition-all"
        >
          <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Email Me
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mateo-chacon-4a45a52b2/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <LinkedinIcon className="size-4" />
          LinkedIn
        </a>

        {/* Resume */}
        <a
          href="/Sebastian-Chacon_CV.pdf"
          download
          className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          CV
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/SebastianChacon"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <GithubIcon className="size-4" />
          GitHub
        </a>
      </div>

      {/* Email address display */}
      <a
        href="mailto:chacontsebastian@gmail.com"
        className="text-xs text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
      >
        chacontsebastian@gmail.com
      </a>
    </section>
  );
};
