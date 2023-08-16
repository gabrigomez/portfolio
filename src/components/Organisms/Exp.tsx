import { i18n } from '../../translate/i18n';
import TrackVisibility from 'react-on-screen';

import { Card } from '../Atoms/Cards';
import { DescriptionAtom } from '../Atoms/DescriptionAtom';
import { ExpList } from './ExpList';
import { TitleAtom } from '../Atoms/TitleAtom';

import adeptly from '../../assets/adeptly.jpeg';
import tracklift from '../../assets/Tracklift.jpeg';
import 'animate.css';

const expList = [
  {
    description: "Front-end developer/Quality Assurance",
    expTime: "Ago 2021 - Jan 2023",
    href: "https://www.linkedin.com/company/adeptly/",  
    src: adeptly,
    title: "Adeptly",
  },
  {
    description: "Front-end developer",
    expTime: "Jun 2021 - Ago 2021",
    href: "https://www.linkedin.com/company/tracklift/",  
    src: tracklift,
    title: "Tracklift",
  }
]

export const Exp = () => {
  return (
    <section className='flex w-full justify-center bg-gray-300 dark:bg-primaryBg' id='exp'>
      <Card.Root className='flex flex-col w-full p-4 md:w-2/3 md:p-16 rounded-2xl text-primary dark:text-white'>
        <div className='mb-8'>
          <TitleAtom 
            className='text-5xl md:text-6xl'
            children={i18n.t('titles.exp')}
          />
          <DescriptionAtom
            className='md:text-2xl'
            children={i18n.t('exp.description')}
          />
        </div>
        <div className='flex justify-center w-full'>
          <TrackVisibility className='w-full flex justify-center'>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : "none"}>                
                <ExpList exps={expList} />
              </div>
            }
          </TrackVisibility>
        </div>
      </Card.Root>
    </section>
  )
}