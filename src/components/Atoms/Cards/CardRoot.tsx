import React from 'react';
import { ReactNode } from "react"

interface CardRootProps {
  children: ReactNode
  className?: string
}

export const CardRoot = ({ children, className}: CardRootProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}