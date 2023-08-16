interface ImageAtomProps {  
  className?: string,
  src: string,
  onClick?: (value: string) => void,
}

export const ImageAtom = ({...props} : ImageAtomProps) => {
  return (
    <div className='flex justify-center items-center' onClick={() => props.onClick}>
      <img 
        alt="" 
        className={props.className}        
        src={props.src} 
      />
    </div>
  )  
};