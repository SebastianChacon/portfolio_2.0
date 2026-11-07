import { BodyComponent } from "../components/BodyComponent";
import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { NavComponent } from "../components/NavComponent";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <div id="nav-wrapper" className="sticky top-0 z-50 flex w-full justify-center px-4">
        <NavComponent />
      </div>
      <main id="top" className="flex w-full flex-col items-center px-4">
        <HeaderComponent />
        <BodyComponent />
      </main>
      <FooterComponent />
    </div>
  );
};
