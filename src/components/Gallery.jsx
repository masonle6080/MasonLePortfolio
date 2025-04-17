import React from 'react'
import Carousel from './Carousel';
import Carousel2 from './Carousel2';

export const Gallery = () => {
  return (
    <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center justify-center mt-40 w-[75vw] gap-30'>
          <div className='flex flex-col h-full w-full justify-center items-center'>
          <p><span className='text-[24px] font-montserrat font-extralight italic'>photos</span></p>
          <Carousel/>   
          </div>
          <div className='flex flex-col h-full w-full justify-center items-center'>
              <p><span className='mt-50 text-[24px] font-montserrat font-extralight italic'>films</span></p>

              <Carousel2/>          
          </div>   
        </div>
        <p>hi</p>
    </div>
  )
}

export default Gallery;