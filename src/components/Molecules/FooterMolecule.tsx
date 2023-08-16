import { DescriptionAtom } from "../Atoms/DescriptionAtom";
import { TitleAtom } from "../Atoms/TitleAtom";
import { i18n } from "../../translate/i18n";

export const FooterMolecule = () => {
  return (
    <div 
      className='flex flex-col items-center w-96 p-4 hover:scale-105 duration-200
      rounded-2xl border border-gray-700 hover:border-gray-800 group'
    >                
        <TitleAtom
          className="mb-2 border-b dark:border-black group-hover:border-gray-700 duration-300" 
          children={i18n.t('footer.title')}
        />
        <DescriptionAtom 
          children={i18n.t('footer.description')} 
        />      
    </div>
  )
};