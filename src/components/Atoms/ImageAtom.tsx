interface ImageAtomProps {  
  className?: string,
  src: string,
}

export const ImageAtom = ({...props} : ImageAtomProps) => {
  return (
    <div className='flex justify-center items-center'>
      <img 
        className={props.className} 
        src={props.src} 
        alt="" 
      />
    </div>
  )  
};