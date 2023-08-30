import { i18n } from "../../translate/i18n";
import { DescriptionAtom } from "../Atoms/DescriptionAtom";
import { TitleAtom } from "../Atoms/TitleAtom";

export const ExpMolecule = () => {
  return (
    <div className='flex flex-col items-center mb-8'>
      <TitleAtom 
        className='sections-titles w-2/4 xl:w-1/4 text-5xl md:text-6xl'
        children={i18n.t('titles.exp')}
      />
      <DescriptionAtom
        className='md:text-2xl mt-2'
        children={i18n.t('exp.description')}
      />
    </div>
  )
}