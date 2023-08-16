import { ReactNode } from "react";
import { LinkAtom } from "../Atoms/LinkAtom";

interface ContactMoleculeProps {
  children: ReactNode,
  href?: string,
  icon: React.ReactNode,
}

export const ContactMolecule = ({...props}: ContactMoleculeProps) => {
  return (
    <div className='flex flex-col items-center mb-4 group'>
      {props.icon}
      <LinkAtom
        className='contact-type'
        children={props.children}
        href={props.href ? props.href : ''}
      />
    </div>
  )
}