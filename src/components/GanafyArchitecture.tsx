const steps = [
  {
    title: "Business dashboard",
    tech: "Svelte · TypeScript",
    body: "Onboarding, program setup, QR validation and analytics for each business.",
  },
  {
    title: "Supabase backend",
    tech: "Auth · Postgres · Realtime",
    body: "Role-based access, one database for every tenant isolated with Row Level Security.",
  },
  {
    title: "Wallet passes",
    tech: "Apple Wallet · Google Wallet",
    body: "Passes generated automatically when a customer joins a program.",
  },
  {
    title: "Customer",
    tech: "QR · Push notifications",
    body: "Scans at the counter; points update in real time on the pass.",
  },
];

const Arrow = () => (
  <svg
    className="size-4 shrink-0 rotate-90 self-center text-zinc-400 dark:text-zinc-500 md:rotate-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export const GanafyArchitecture = () => (
  <div className="glass mt-4 rounded-2xl p-6 md:p-8">
    <p className="section-label">Case study · Ganafy</p>
    <h3 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">How it's built</h3>
    <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300">
      A business sets up its loyalty program in the dashboard. Customers add the card to their phone's wallet and earn
      points by scanning a QR code at the counter.
    </p>

    <ol className="mt-6 flex flex-col gap-2 md:flex-row md:items-stretch">
      {steps.map((step, i) => (
        <li key={step.title} className="flex flex-col gap-2 md:flex-1 md:flex-row">
          <div className="flex-1 rounded-xl border border-zinc-200 bg-white/60 p-4 dark:border-white/10 dark:bg-white/[0.04]">
            <p className="font-mono text-xs text-violet-600 dark:text-violet-300">{String(i + 1).padStart(2, "0")}</p>
            <h4 className="mt-1 text-sm font-semibold text-zinc-950 dark:text-white">{step.title}</h4>
            <p className="mt-0.5 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">{step.tech}</p>
            <p className="mt-2 text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-300">{step.body}</p>
          </div>
          {i < steps.length - 1 && <Arrow />}
        </li>
      ))}
    </ol>

    <p className="mt-6 border-t border-zinc-200 pt-4 text-sm leading-relaxed text-zinc-600 dark:border-white/10 dark:text-zinc-300">
      <span className="font-medium text-zinc-950 dark:text-white">Why it matters:</span> every business only sees its
      own customers. That isolation is enforced in the database with Row Level Security, not just hidden in the UI.
    </p>
  </div>
);
