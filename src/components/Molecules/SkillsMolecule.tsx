import React from 'react';

import { i18n } from "../../translate/i18n";
import { DescriptionAtom } from "../Atoms/DescriptionAtom";
import { TitleAtom } from "../Atoms/TitleAtom";

export const SkillsMolecule = () => {
  return (
    <div>
      <TitleAtom
        className="text-5xl md:text-6xl"
        children={i18n.t('titles.skills')}
      />
      <DescriptionAtom
        className="mb-4 md:text-2xl"
        children={i18n.t('skills.description')} 
      />
    </div>
  )
}