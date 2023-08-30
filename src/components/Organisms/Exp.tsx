import React from 'react';
import TrackVisibility from 'react-on-screen';
import { Card } from '../Atoms/Cards';
import { ExpList } from './ExpList';

import adeptly from '../../assets/adeptly.jpeg';
import tracklift from '../../assets/Tracklift.jpeg';
import 'animate.css';
import { ExpMolecule } from '../Molecules/ExpMolecule';

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
        <ExpMolecule />
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