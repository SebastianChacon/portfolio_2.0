import { ThemeToggle } from "./ThemeToggle.tsx";

export const NavComponent = () => {
  return (
    <nav className="py-4 flex flex-row justify-between bg-transparent">
      <div className="flex items-center">
        <img
          className="rounded-full size-14"
          src="https://avatars.githubusercontent.com/u/SebastianChacon"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://github.com/SebastianChacon.png";
          }}
          alt="Sebastian Chacon"
        />
        <p className="ml-4 text-3xl font-semibold">Sebastian Chacon</p>
      </div>
      <ThemeToggle />
    </nav>
  );
};
