import { FooterDescription } from "../Atoms/FooterDescription";
import { FooterTitle } from "../Atoms/FooterTitle";
import { i18n } from "../../translate/i18n";

export const FooterMolecule = () => {
  return (
    <div 
      className='flex flex-col items-center w-96 p-4 hover:scale-105 duration-200
      rounded-2xl border border-gray-700 hover:border-gray-800 group'
    >                
        <FooterTitle children={i18n.t('footer.title')}/>
        <FooterDescription children={i18n.t('footer.description')} />      
    </div>
  )
};