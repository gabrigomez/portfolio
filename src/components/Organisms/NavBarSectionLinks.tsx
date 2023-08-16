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
            href={section.href}
            className="text-primary font-bold dark:text-white no-underline opacity-90 hover:opacity-100 cursor-pointer"
            onClick={() => section.onClick}
            children={section.children}
          />
        )
      })}
    </div>
  )
};