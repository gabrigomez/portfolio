import React from 'react';
import { ExpItem, ExpItemProps } from "./ExpItem";
import Carousel from 'react-multi-carousel';

import 'animate.css';
interface ExpListProps {
  exps: Array<ExpItemProps>,
}

export const ExpList = ({exps}: ExpListProps) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 1000, min: 0 },
      items: 2
    }
  };

  return (
    <div className='flex flex-wrap w-full 2xl:w-8/12 h-[300px] justify-center'>
      <Carousel responsive={responsive} className='w-full'>
        {exps.map((exp) => {
          return (
            <ExpItem
              key={exps.indexOf(exp)}
              description={exp.description}
              expTime={exp.expTime}
              href={exp.href}
              src={exp.src}
              title={exp.title} 
            />
          )
        })}
      </Carousel>
    </div>
  )
}