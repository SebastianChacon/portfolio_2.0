import { WorkExperienceComponent } from "./WorkExperienceComponent";
import { ProjectsComponent } from "./ProjectsComponent";
import { AboutMeComponent } from "./AboutMeComponent";
import { LanguagesComponent } from "./LanguagesComponent";
import { ContactComponent } from "./ContactComponent";

const Divider = () => (
  <div className="border-t border-gray-100 dark:border-gray-800/60" />
);

export const BodyComponent = () => {
  return (
    <div className="w-full max-w-3xl">
      <WorkExperienceComponent />
      <Divider />
      <ProjectsComponent />
      <Divider />
      <AboutMeComponent />
      <Divider />
      <LanguagesComponent />
      <Divider />
      <ContactComponent />
    </div>
  );
};
