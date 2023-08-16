import { ReactNode } from "react";

interface DescriptionAtomProps {
  className?: string,
  children: ReactNode,
}

export const DescriptionAtom = ({children, className} : DescriptionAtomProps) => {
  return (
    <p className={className}>
      {children}
    </p>
  )
};