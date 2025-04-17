import React from 'react'
import Button from './Button';

export const Footer = () => {
  return (
    <div className='flex flex-col items-center w-full bg-backgroundgrey mt-30'>
        <div className='flex flex-row items-center mx-25 mt-20 mb-15 w-[60%] '>
           <div className='flex flex-col  gap-2 w-[50%]'>
            <p><span className='text-offwhite font-poppins font-bold text-[24px]'>contact me!</span></p>
            <p><span className='text-offwhite'>masonle65@gmail.com</span></p>
           </div>
           <div className='flex flex-row justify-between gap-20 h-full w-[100%]'>
            <div className='flex flex-col grow gap-2 items-end justify-end'>
                <p><span className='text-offwhite font-poppins font-bold text-[16px]'>masonle</span></p>
                <p><span className='text-offwhite'>© 2025 Mason Le</span></p>

            </div>
            
           </div>
        </div>
    </div>
  )
}

export default Footer;