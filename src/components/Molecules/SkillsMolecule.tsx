import React from 'react';

import { i18n } from "../../translate/i18n";
import { DescriptionAtom } from "../Atoms/DescriptionAtom";
import { TitleAtom } from "../Atoms/TitleAtom";

export const SkillsMolecule = () => {
  return (
    <div className='flex flex-col items-center mb-6'>
      <TitleAtom
        className="sections-titles font-title text-5xl md:text-6xl w-2/4 xl:w-1/4"
        children={i18n.t('titles.skills').toUpperCase()}
      />
      <DescriptionAtom
        className="md:text-2xl mt-2"
        children={i18n.t('skills.description')} 
      />
    </div>
  )
}