import { GithubLogo, LinkedinLogo, UserList } from "phosphor-react";
import { NavBarLink } from "../Atoms/NavBarLink";

export const NavBarContactLinks = () => {
  return (
    <div className='hidden sm:flex items-center'>
      <div>
        <NavBarLink 
          className='social-icon group'
          children={<LinkedinLogo className='text-2xl z-10 duration-300 text-white hover:scale-105 group-hover:text-white'/>}
          href='https://www.linkedin.com/in/gabrielgomes93/'
          target="blank"
        />
        <NavBarLink 
          className='social-icon group'
          children={<GithubLogo className='text-2xl z-10 duration-300 text-white hover:scale-105 group-hover:text-white'/>}
          href='https://github.com/gabrigomez'
          target="blank"
        />
        <NavBarLink 
          className='social-icon group'
          children={<UserList className='text-2xl z-10 duration-300 text-white hover:scale-105 group-hover:text-white'/>}
          donwload="file.pdf"
          href='https://drive.google.com/file/d/1kSjdbgHWzxKmwDrTSV97sOGUPiOhCjVB/view'
          target="blank"
        />
      </div>
    </div>
  )
};