import coding from '../../assets/coding.gif';

export const ContactImage = () => {
  return (
    <div className='flex justify-center items-center'>
      <img className='w-44 h-44 mb-4 md:h-72 md:w-72 lg:mr-5 border-2 rounded-full' src={coding} alt="" />
    </div>
  )
}