export const AvatarComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center py-10">
      <img
        className="size-40 rounded-full mb-4 md:mb-0"
        src="https://github.com/SebastianChacon.png"
        alt="Sebastian Chacon"
      />
      <div className="mx-4 text-center md:text-left">
        <h1>
          Hi,{" "}
          <strong className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-l from-blue-400 to-violet-700">
            I'm Sebastian Chacon
          </strong>
        </h1>
        <p>
          <strong className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-l from-blue-400 to-violet-700">
            Frontend Developer
          </strong>{" "}
          based in New Jersey · 2+ years building production web apps for real clients.
          Specialized in React, TypeScript, and Svelte.
          Open to remote and on-site opportunities in the US.
        </p>
      </div>
    </div>
  );
};
