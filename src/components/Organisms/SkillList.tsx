import React from 'react';

import Carousel, { ResponsiveType } from "react-multi-carousel";
import { SkillItem, SkillItemProps } from "./SkillItem";

interface SkillListProps {
  responsive: ResponsiveType,
  skills: Array<SkillItemProps>,
}

export const SkillList = ({...props} : SkillListProps) => {
  return (
    <Carousel responsive={props.responsive} className='flex'>
      {props.skills.map((skill) => {
        return (
          <SkillItem
            key={props.skills.indexOf(skill)}
            href={skill.href}
            icon={skill.icon}
            title={skill.title}
            status={skill.status}
            src={skill.src}
          />
        )
      })}
    </Carousel>
  )
}