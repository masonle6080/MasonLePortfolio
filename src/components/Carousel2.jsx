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
              <img src="/photos/_DSC2753.jpg"></img>
              
            </div>
            <div className='flex flex-col items-start font-montserrat font-extralight text-[6px]'>
                <p>title</p>
                <p>location</p>
                <p>date</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="transition-transform duration-500 ease-in-out scale-90 swiper-slide-scale">
        <div className='flex flex-col gap-2'>
            

            <div className='flex flex-col justify-center gap-3.5'>
              <img src="/photos/_DSC0975.jpg"></img>
              
            </div>
            <div className='flex flex-col items-start font-montserrat font-extralight text-[6px]'>
                <p>title: Photo of Raglan</p>
                <p>location: Santa Barbara</p>
                <p>date: 8-31-2024</p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform duration-500 ease-in-out scale-60 swiper-slide-scale2">
        <div className='flex flex-col gap-2'>
            

            <div className='flex flex-col justify-center gap-3.5'>
            <img className='' src="/photos/_DSC0531.jpg"></img>
              
            </div>
            <div className='flex flex-col items-start font-montserrat font-extralight text-[12px]'>
                <p>title: Lilly Modeling</p>
                <p>location: NYC</p>
                <p>date: 7-29-2024</p>
            </div>
          </div>
          </SwiperSlide>
          
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        
      </Swiper>
    </div>
  );
}
