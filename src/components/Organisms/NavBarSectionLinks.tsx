import React from 'react';
import { NavBarLink, NavBarLinkProps } from "../Atoms/NavBarLink";
interface NavBarSectionLinksProps {
  sections: Array<NavBarLinkProps>,
}

export const NavBarSectionLinks = ({sections} : NavBarSectionLinksProps) => {
  return (
    <div className='flex items-center gap-2 text-md md:text-lg mr-4'>            
      {sections.map((section) => {
        return(
          <NavBarLink
            key={sections.indexOf(section)} 
            href={section.href}
            className="text-primary text-sm sm:text-lg font-bold dark:text-white cursor-pointer sections hover:sections before:duration-500 relative"
            onClick={() => section.onClick}
            children={section.children}
          />
        )
      })}
    </div>
  )
};