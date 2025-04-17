import React from 'react'

export const Button = ({imgSrc, buttonText}) => {
  return (
    <div className=' transition-transform transform hover:scale-105 flex flex-row h-[35px] items-center bg-lightgrey rounded-xl p-1.5 gap-1 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.2)]'>
      <img className='object-cover w-[20px]'src={imgSrc} alt={buttonText}></img>
      <p className='font-poppins font-bold text-[12px]'>{buttonText}</p>
    </div>
  )
}

export default Button;