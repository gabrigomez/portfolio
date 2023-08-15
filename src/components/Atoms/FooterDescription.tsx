import { ReactNode } from "react";

interface FooterDescriptionProps {
  children: ReactNode,
}

export const FooterDescription = ({children} : FooterDescriptionProps) => {
  return (
    <p>
      {children}
    </p>
  )
};