import React from 'react';

interface CardImageProps {
  className: string,
  src: string
}

export const CardImage = ({className, src}: CardImageProps) => {
  return (
    <img 
      src={src}
      alt="" 
      className={className} 
    />
  )
}