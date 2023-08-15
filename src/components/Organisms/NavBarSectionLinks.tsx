import { NavBarLink, NavBarLinkProps } from "../Atoms/NavBarLink";

interface NavBarSectionLinksProps {
  sections: Array<NavBarLinkProps>,
}

export const NavBarSectionLinks = ({sections} : NavBarSectionLinksProps) => {
  return (
    <div className='flex items-center'>            
      {sections.map((section) => {
        return(
          <NavBarLink 
            href={section.href}
            className={section.className}
            onClick={() => section.onClick}
            children={section.children}
          />
        )
      })}
    </div>
  )
};