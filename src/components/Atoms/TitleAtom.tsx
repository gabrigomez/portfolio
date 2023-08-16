import { ReactNode } from "react";

interface TitleAtomProps {
  className?: string,
  children: ReactNode,
}

export const TitleAtom = ({children, className} : TitleAtomProps) => {
  return (
    <h1 className={className}>
      {children}
    </h1>
  )
};