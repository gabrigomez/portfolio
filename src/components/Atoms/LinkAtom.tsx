import React from 'react';
import { ReactNode } from "react";

interface LinkAtomProps {
  className?: string,
  children: ReactNode,
  href: string,
}

export const LinkAtom = ({children, className, href} : LinkAtomProps) => {
  return (
    <a 
      className={className}
      href={href}
      target="blank"
    >
      {children}
    </a>
  )
};