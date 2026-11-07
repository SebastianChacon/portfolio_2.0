import React from "react";
import GithubIcon from "../assets/svg/GithubIcon";
import LinkedinIcon from "../assets/svg/LinkedinIcon";
import { useScrollReveal } from "../hooks/useScrollReveal";

const secondaryLink =
  "inline-flex h-11 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-4 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10";

export const ContactComponent = () => {
  const ref = useScrollReveal();

  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} className="reveal w-full scroll-mt-24 pb-20 pt-12">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-900 bg-zinc-950 px-6 py-12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] dark:border-white/[0.12] dark:bg-white/[0.05] dark:backdrop-blur-xl md:px-10 md:py-14">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 size-80 rounded-full bg-violet-600/40 blur-[90px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-10 size-72 rounded-full bg-cyan-500/20 blur-[90px]" />

        <div className="relative flex flex-col items-start gap-4">
          <p className="font-mono text-[13px] text-zinc-400">05 / Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Let's build something.</h2>
          <p className="max-w-md text-[17px] leading-relaxed text-zinc-300">
            I'm open to full-time Frontend / Full Stack roles in the US. I reply within 24 hours.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href="mailto:chacontsebastian@gmail.com"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-white px-5 text-[15px] font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              chacontsebastian@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/mateo-chacon-4a45a52b2/" target="_blank" rel="noopener noreferrer" className={secondaryLink}>
              <LinkedinIcon className="size-4" />
              LinkedIn
            </a>
            <a href="https://github.com/SebastianChacon" target="_blank" rel="noopener noreferrer" className={secondaryLink}>
              <GithubIcon className="size-4" />
              GitHub
            </a>
            <a href="/Sebastian-Chacon_CV.pdf" download className={secondaryLink}>
              CV (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
