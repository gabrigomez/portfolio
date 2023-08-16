import { MainMolecule } from './Molecules/MainMolecule';
import { ImageAtom } from './Atoms/ImageAtom';
import { InterestsMolecule } from './Molecules/InterestsMolecule';

import profile from '../assets/profile.jpg';

export const Main = () => {
  return (
    <section className='w-full flex justify-center' id='home'>
      <div className='flex flex-col mt-32 sm:mt-8 p-2 sm:p-24 w-3/4 rounded-2xl mb-5'>
        <MainMolecule />
        <ImageAtom
          className='w-68 h-68 mt-10 border-2 border-secondary rounded-full animate-updown'
          src={profile}
        />
        <InterestsMolecule />
      </div>
    </section>
  )
}