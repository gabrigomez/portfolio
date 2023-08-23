import React from 'react';
import { ReactNode } from "react";
export interface NavBarLinkProps {
  className?: string,
  children: ReactNode,
  donwload?: any,
  href: string,
  target?: string,
  onClick?: (value: string) => void,
}

export const NavBarLink = ({...props} : NavBarLinkProps) => {
  return (
    <a 
      className={props.className} 
      href={props.href} 
      onClick={() => props.onClick}
      target={props.target}
    >
      {props.children}
    </a>
  )
};