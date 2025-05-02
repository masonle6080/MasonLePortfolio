import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='w-full h-[60vh] flex flex-col justify-center items-center mask-fade'>
      <Swiper
        slidesPerView={3}
        spaceBetween={140}
        loop={true}
        centeredSlides={true} // 🔥 this is what you were missing

        speed={1000}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}

      >
      
      <SwiperSlide className="transition-transform duration-500 ease-in-out scale-90 swiper-slide-scale">

          <div className='flex flex-col gap-2'>
            

            <div className='flex flex-col justify-center gap-3.5'>
            <a href="https://www.youtube.com/watch?v=QfYIyWk8xCw" target="_blank" rel="noopener noreferrer">

              <img src="/photos/carousel2/Screenshot 2025-04-30 at 5.21.13 PM.png"></img>
            </a>
              
            </div>
            <div className='flex flex-col items-start font-montserrat font-extralight text-[6px]'>
                <p>title: Expedition Amana</p>
                <p>location: Sausilito</p>
                <p>date: I dont remember</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="transition-transform duration-500 ease-in-out scale-90 swiper-slide-scale">
        <div className='flex flex-col gap-2'>
            

            <div className='flex flex-col justify-center gap-3.5'>
            <a href="https://www.youtube.com/watch?v=PaYBGsz-8FM" target="_blank" rel="noopener noreferrer">
            
              <img src="/photos/carousel2/Screenshot 2025-04-30 at 5.23.18 PM.png"></img>
            </a>
              
            </div>
            <div className='flex flex-col items-start font-montserrat font-extralight text-[6px]'>
                <p>title: Paul Revere Music Video</p>
                <p>location: Tibouron</p>
                <p>date: I dont remember</p>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide className="transition-transform duration-500 ease-in-out scale-90 swiper-slide-scale">
        <div className='flex flex-col gap-2'>
            

            <div className='flex flex-col justify-center gap-3.5'>
            <a href="https://www.youtube.com/watch?v=PYqm86OomCc" target="_blank" rel="noopener noreferrer">

              <img className='' src="/photos/carousel2/Screenshot 2025-04-30 at 5.24.00 PM.png"></img>
            </a>
            </div>
            <div className='flex flex-col items-start font-montserrat font-extralight text-[6px]'>
              <p>title: The Price to Learn</p>
                <p>location: San Francisco</p>
                <p>date: I dont remember</p>
            </div>
          </div>
          </SwiperSlide>

       
        
      </Swiper>
    </div>
  );
}
