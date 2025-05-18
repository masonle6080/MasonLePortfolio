import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import AcrossTheBay from '/photos/_DSC2753.jpg';
import RandomCuban from '/photos/_DSC6521.png';
import Raglan from '/photos/carousel1/_DSC0907.jpg'
import Raglan2 from "/photos/_DSC0975.jpg";
import lilly from "/photos/_DSC0531.jpg";
import Benson from "/photos/carousel1/DSCF1706.jpg";
import Louis from "/photos/carousel1/Louis on wheels.jpg";
import hawkhill from "/photos/carousel1/_DSC0371.jpg";
import hawaii1 from "/photos/carousel1/_DSC1763.jpg";
import hawaii2 from "/photos/carousel1/_DSC1349.jpg";
import hawaii3 from "/photos/carousel1/_DSC1782.jpg";
import vb1 from "/photos/carousel1/_DSC6898.jpg";
import vb2 from "/photos/carousel1/_DSC6923.jpg";
import porsche from "/photos/carousel1/_DSC3456.jpg";
import lambo from "/photos/carousel1/_DSC3530.jpg";
import emerson from "/photos/carousel1/_DSC4523.jpg";
import iago from "/photos/carousel1/_DSC5512.jpg";
import jacob from "/photos/carousel1/_DSC7539.jpg";
import otw from "/photos/carousel1/_DSC6662.png";
import stare from "/photos/carousel1/_DSC7606.jpg";
import stares from "/photos/carousel1/_DSC7775.jpg";

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
    <div className='w-full h-[60vh] flex flex-col justify-center items-center mask-fade '>
      <Swiper
        slidesPerView={3}
        spaceBetween={150}
        loop={true}
        centeredSlides={true} 

        speed={1000}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}

      >
      
      <SwiperSlide className="transition-transform duration-500 ease-in-out scale-100 swiper-slide-scale">

          <div className='flex flex-col gap-2'>
            

            <div className='flex flex-col justify-center gap-3.5'>
              <img src={AcrossTheBay}></img>
              
            </div>
            <div className='flex flex-col items-start font-montserrat font-extralight text-[6px]'>
                <p>title: Across the Bay</p>
                <p>location: Tibouron</p>
                <p>date: 9-26-2024</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="transition-transform duration-500 ease-in-out scale-60 swiper-slide-scale2">
            <div className='flex flex-col gap-2'>
            

              <div className='flex flex-col justify-center gap-3.5'>
              <img className='' src={RandomCuban}></img>
                
              </div>
              <div className='flex flex-col items-start font-montserrat font-extralight text-[12px]'>
                  <p>title: Random Cuban</p>
                  <p>location: Cuba</p>
                  <p>date: 2-28-2024</p>
              </div>
            </div>
          </SwiperSlide>

        <SwiperSlide className="transition-transform duration-500 ease-in-out scale-90 swiper-slide-scale">

          <div className='flex flex-col gap-2'>
            

            <div className='flex flex-col justify-center gap-3.5'>
              <img src={Raglan}></img>
              
            </div>
            <div className='flex flex-col items-start font-montserrat font-extralight text-[6px]'>
                <p>title: Raglan at the Beach</p>
                <p>location: Santa Barbara</p>
                <p>date: 8-31-2024</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="transition-transform duration-500 ease-in-out scale-110 swiper-slide-scale">
        <div className='flex flex-col gap-2'>
            

            <div className='flex flex-col justify-center gap-3.5'>
              <img src={Raglan2}></img>
              
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
              <img className='' src={lilly}></img>
                
              </div>
              <div className='flex flex-col items-start font-montserrat font-extralight text-[12px]'>
                  <p>title: Lilly Modeling</p>
                  <p>location: NYC</p>
                  <p>date: 7-29-2024</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="transition-transform duration-500 ease-in-out scale-110 swiper-slide-scale">
            <div className='flex flex-col gap-2'>
            

              <div className='flex flex-col justify-center gap-3.5'>
              <img className='' src={Benson}></img>
                
              </div>
              <div className='flex flex-col items-start font-montserrat font-extralight text-[6px]'>
                  <p>title: Benson Surfing</p>
                  <p>location: Santa Barbara</p>
                  <p>date: 9-5-2024</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="transition-transform duration-500 ease-in-out scale-70 swiper-slide-scale2">
        <div className='flex flex-col gap-2'>
            

            <div className='flex flex-col justify-center gap-3.5'>
              <img src={Louis}></img>
              
            </div>
            <div className='flex flex-col items-start font-montserrat font-extralight text-[10px]'>
                <p>title: Louis on Wheels</p>
                <p>location: Santa Barbara</p>
                <p>date: 8-11-2024</p>
            </div>
          </div>
          </SwiperSlide>
        
          <SwiperSlide className="transition-transform duration-500 ease-in-out scale-100 swiper-slide-scale">

            <div className='flex flex-col gap-2'>
              

              <div className='flex flex-col justify-center gap-3.5'>
                <img src={hawkhill}></img>
                
              </div>
              <div className='flex flex-col items-start font-montserrat font-extralight text-[6px]'>
                  <p>title: GG and a Boat</p>
                  <p>location: Hawk Hill</p>
                  <p>date: 9-26-2024</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="transition-transform duration-500 ease-in-out scale-100 swiper-slide-scale">

            <div className='flex flex-col gap-2'>
              

              <div className='flex flex-col justify-center gap-3.5'>
                <img src={hawaii1}></img>
                
              </div>
              <div className='flex flex-col items-start font-montserrat font-extralight text-[6px]'>
                  <p>title: Rainy Hike in Hawaii</p>
                  <p>location: Hawaii</p>
                  <p>date: 11-26-2022</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="transition-transform duration-500 ease-in-out scale-100 swiper-slide-scale">

            <div className='flex flex-col gap-2'>
              

              <div className='flex flex-col justify-center gap-3.5'>
                <img src={hawaii2}></img>
                
              </div>
              <div className='flex flex-col items-start font-montserrat font-extralight text-[6px]'>
                  <p>title: Dark Hawaii</p>
                  <p>location: Hawaii</p>
                  <p>date: 11-20-2022</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="transition-transform duration-500 ease-in-out scale-100 swiper-slide-scale">

            <div className='flex flex-col gap-2'>
              

              <div className='flex flex-col justify-center gap-3.5'>
                <img src={hawaii3}></img>
                
              </div>
              <div className='flex flex-col items-start font-montserrat font-extralight text-[6px]'>
                  <p>title: Rainy Hike in Hawaii</p>
                  <p>location: Hawaii</p>
                  <p>date: 11-26-2022</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="transition-transform duration-500 ease-in-out scale-70 swiper-slide-scale2">
        <div className='flex flex-col gap-2'>
            

            <div className='flex flex-col justify-center gap-3.5'>
              <img src={vb1}></img>
              
            </div>
            <div className='flex flex-col items-start font-montserrat font-extralight text-[10px]'>
                <p>title: High School VB 1</p>
                <p>location: Mill Valley</p>
                <p>date: 3-17-2023</p>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide className="transition-transform duration-500 ease-in-out scale-70 swiper-slide-scale2">
        <div className='flex flex-col gap-2'>
            

            <div className='flex flex-col justify-center gap-3.5'>
              <img src={vb2}></img>
              
            </div>
            <div className='flex flex-col items-start font-montserrat font-extralight text-[10px]'>
                <p>title: High School VB 2</p>
                <p>location: Mill Valley</p>
                <p>date: 3-17-2023</p>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide className="transition-transform duration-500 ease-in-out scale-100 swiper-slide-scale">

            <div className='flex flex-col gap-2'>
              

              <div className='flex flex-col justify-center gap-3.5'>
                <img src={porsche}></img>
                
              </div>
              <div className='flex flex-col items-start font-montserrat font-extralight text-[6px]'>
                  <p>title: Blue Porsche</p>
                  <p>location: San Francisco</p>
                  <p>date: 1-21-2023</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="transition-transform duration-500 ease-in-out scale-70 swiper-slide-scale2">
        <div className='flex flex-col gap-2'>
            

            <div className='flex flex-col justify-center gap-3.5'>
              <img src={lambo}></img>
              
            </div>
            <div className='flex flex-col items-start font-montserrat font-extralight text-[10px]'>
                <p>title: Lambo</p>
                <p>location: San Francisco</p>
                  <p>date: 1-21-2023</p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform duration-500 ease-in-out scale-70 swiper-slide-scale2">
        <div className='flex flex-col gap-2'>
            

            <div className='flex flex-col justify-center gap-3.5'>
              <img src={emerson}></img>
              
            </div>
            <div className='flex flex-col items-start font-montserrat font-extralight text-[10px]'>
                <p>title: Emerson's Miata</p>
                <p>location: Ridge</p>
                  <p>date: 1-7-2024</p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform duration-500 ease-in-out scale-70 swiper-slide-scale2">
        <div className='flex flex-col gap-2'>
            

            <div className='flex flex-col justify-center gap-3.5'>
              <img src={iago}></img>
              
            </div>
            <div className='flex flex-col items-start font-montserrat font-extralight text-[10px]'>
                <p>title: Iago's Tesla</p>
                <p>location: Hawk Hill</p>
                  <p>date: 2-10-2024</p>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide className="transition-transform duration-500 ease-in-out scale-70 swiper-slide-scale2">
        <div className='flex flex-col gap-2'>
            

            <div className='flex flex-col justify-center gap-3.5'>
              <img src={jacob}></img>
              
            </div>
            <div className='flex flex-col items-start font-montserrat font-extralight text-[10px]'>
                <p>title: jacob</p>
                <p>location: Ridge</p>
                  <p>date: 4-5-2024</p>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide className="transition-transform duration-500 ease-in-out scale-70 swiper-slide-scale2">
        <div className='flex flex-col gap-2'>
            

            <div className='flex flex-col justify-center gap-3.5'>
              <img src={otw}></img>
              
            </div>
            <div className='flex flex-col items-start font-montserrat font-extralight text-[10px]'>
                <p>title: otw</p>
                <p>location: Cuba</p>
                  <p>date: 2-28-2024</p>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide className="transition-transform duration-500 ease-in-out scale-70 swiper-slide-scale2">
        <div className='flex flex-col gap-2'>
            

            <div className='flex flex-col justify-center gap-3.5'>
              <img src={stare}></img>
              
            </div>
            <div className='flex flex-col items-start font-montserrat font-extralight text-[10px]'>
                <p>title: NYC Stare</p>
                <p>location: NYC</p>
                  <p>date: 4-12-2024</p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform duration-500 ease-in-out scale-90 swiper-slide-scale">
        <div className='flex flex-col gap-2'>
            

            <div className='flex flex-col justify-center gap-3.5'>
              <img src={stares}></img>
              
            </div>
            <div className='flex flex-col items-start font-montserrat font-extralight text-[10px]'>
                <p>title: NYC Stare(s)</p>
                <p>location: NYC</p>
                  <p>date: 4-12-2024</p>
            </div>
          </div>
          </SwiperSlide>

      </Swiper>
    </div>
  );
}
