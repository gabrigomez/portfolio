import TrackVisibility from "react-on-screen";
import { Languages } from "./Languages";
import { TitleAtom } from "../Atoms/TitleAtom";
import { i18n } from "../../translate/i18n";

export const InterestsMolecule = () => {
  return (
    <div className='text-primary dark:text-white mt-20'>
      <TitleAtom
        className="text-xl mb-8"
        children={i18n.t('main.interests')} 
      />
      <TrackVisibility className='flex justify-center w-full'>
        {({ isVisible }) =>
          <Languages isVisible={isVisible} />
        }
      </TrackVisibility>
    </div>
  )
}