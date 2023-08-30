import React from 'react';

import { i18n } from "../../translate/i18n";
import { DescriptionAtom } from "../Atoms/DescriptionAtom";
import { TitleAtom } from "../Atoms/TitleAtom";

export const ProjectMolecule = () => {
  return (
    <div className='flex flex-col items-center'>
      <TitleAtom
        className="font-title sections-titles w-11/12 text-5xl md:text-6xl"
        children={i18n.t('titles.projects').toUpperCase()}
      />
      <DescriptionAtom
        className="md:text-2xl mt-2"
        children={i18n.t('projects.description')} 
      />
    </div>
  )
}