import { AvatarComponent } from "./AvatarComponent";
import { NavComponent } from "./NavComponent";

export const HeaderComponent = () => {
  return (
    <div className="w-full max-w-3xl">
      <NavComponent />
      <AvatarComponent />
    </div>
  );
};
