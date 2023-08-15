import { HomeTitle } from "../Atoms/HomeTitle";
import { ReactNode } from "react";
import { HomeIcon } from "../Atoms/HomeIcon";

interface HomeOrganismProps {
  activeLink: string,
  children: ReactNode,
  onClick: (value: string) => void,
}

export const HomeTitleMolecule = ({...props}: HomeOrganismProps) => {
  return (
    <a 
      className={`flex items-center no-underline group cursor-pointer ${props.activeLink}`} href='#home'
      onClick={() => props.onClick}>
        <HomeIcon />
        <HomeTitle children={props.children} />
    </a>
  )
}