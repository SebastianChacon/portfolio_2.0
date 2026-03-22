import { BodyComponent } from "../components/BodyComponent";
import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { NavComponent } from "../components/NavComponent";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <div id="nav-wrapper" className="sticky top-0 z-50 w-full flex justify-center px-4 transition-all duration-200">
        <NavComponent />
      </div>
      <div className="flex flex-col items-center px-4 w-full">
        <HeaderComponent />
        <BodyComponent />
        <FooterComponent />
      </div>
    </div>
  );
};
