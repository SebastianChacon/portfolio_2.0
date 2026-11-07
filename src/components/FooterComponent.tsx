export const FooterComponent = () => {
  return (
    <footer className="w-full max-w-3xl px-4 pb-10">
      <p className="text-[13px] text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} Sebastian Chacon · Built with React, TypeScript &amp; Tailwind CSS
      </p>
    </footer>
  );
};
