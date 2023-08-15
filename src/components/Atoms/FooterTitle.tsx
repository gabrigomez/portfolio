import { ReactNode } from "react";

interface FooterTitleProps {
  children: ReactNode,
}

export const FooterTitle = ({children} : FooterTitleProps) => {
  return (
    <p className='mb-2 border-b dark:border-black group-hover:border-gray-700 duration-300 '>
      {children}
    </p>
  )
};