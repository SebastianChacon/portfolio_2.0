import { WorkExperienceComponent } from "./WorkExperienceComponent";
import { ProjectsComponent } from "./ProjectsComponent";
import { AboutMeComponent } from "./AboutMeComponent";
import { LanguagesComponent } from "./LanguagesComponent";
import { ContactComponent } from "./ContactComponent";

export const BodyComponent = () => {
  return (
    <div className="w-full max-w-3xl">
      <ProjectsComponent />
      <WorkExperienceComponent />
      <LanguagesComponent />
      <AboutMeComponent />
      <ContactComponent />
    </div>
  );
};
