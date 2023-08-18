import { i18n } from "../../translate/i18n";
import { DescriptionAtom } from "../Atoms/DescriptionAtom";
import { TitleAtom } from "../Atoms/TitleAtom";

export const ProjectMolecule = () => {
  return (
    <div>
      <TitleAtom
        className="text-4xl md:text-6xl"
        children={i18n.t('titles.projects')}
      />
      <DescriptionAtom
        className="md:text-2xl"
        children={i18n.t('projects.description')} 
      />
    </div>
  )
}