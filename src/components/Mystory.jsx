import React from 'react'
import Tomato from './Tomato'; //JFOIDJAIOFJDAOIFJ this isnt working
import { Link } from "react-router-dom";
import Mystory1 from './Mystory1';
import Mystory2 from './Mystory2';
import Mystory3 from './Mystory3';


export const Mystory = () => {
  return (
    <div className='flex flex-col gap-30 items-center bg-offwhite my-25 mt-30 font-montserrat'>

        <Mystory1/>
       {/*<div className='flex flex-row items-center justify-center gap-12 w-[60%]'>
            <div className='flex flex-col gap-4 my-4 '>
                <div className='flex flex-col items-end'>
                    <p className='text-[16px] font-poppins font-bold'>Youth</p>
                </div>
                <p className='max-w-[350px]'>I grew up in Marin County (a little north of SF) and was raised with my younger brother by my mom and dad. As Vietnamese immigrants, my parents instilled the princicples of diligence, hardwork, and empathy. Much of my childhood was spent playing sports and exploring the outdoors.</p>
            </div>
            <img className='rounded-2xl shadow-[2px_4px_4px_0px_rgba(0,0,0,0.5)] w-[10vw] h-[13vw] object-cover' src="60273920022__06A5A632-C89B-4A3E-8373-7315FA667B39.JPG" alt="me when young"></img>

        </div>*/}

        <hr className='border-2 w-[1px] h-[40px] rounded-2xl border-linegrey'/>

        <Mystory2/>
        {/*<div className='flex flex-row items-center justify-center gap-12 w-[60%]'>
            <img className='rounded-2xl shadow-[-2px_4px_4px_0px_rgba(0,0,0,0.5)] w-[10vw] h-[13vw] object-cover' src="IMG_8873.png" alt="me at my film screening"></img>
            <div className='flex flex-col gap-4 my-4 '>
                <div className='flex flex-col '>
                    <p className='text-[16px] font-poppins font-bold'>Film</p>
                </div>
                <p className='max-w-[350px]'>When covid hit I discovered the world of photography and filmmaking; most of my high school was spent involved in the craft. Using my moms old camera, I experimented and fell in love. Eventually I got my own camera --- a sony a7iii. I joined a film program and created various films, including documentaries, music videos, and short films.</p>
                <Link to = "/portfolio"><span className='text-blue underline'> &gt; <span className='font-bold'>portfolio</span></span></Link>
            </div>
            

        </div>*/}

        <hr className='border-2 w-[1px] h-[40px] rounded-2xl border-linegrey'/>

        <Mystory3/>
        {/*<div className='flex flex-row items-center justify-center gap-12 w-[60%]'>
            <div className='flex flex-col gap-4 my-4 '>
                <div className='flex flex-col items-end'>
                    <p className='text-[16px] font-poppins font-bold'>UCSB</p>
                </div>
                <p className='max-w-[350px]'>While I enjoyed filmmaking and photography, I realized that I wanted it to stay as a hobby. So when applied for colleges, I decided to choose Computer Science instead of film. As I have taken classes here at UCSB, as well as talked to other people in the major, I realized that Computer Science holds the same key elements of filmmaking. I love the process of creating something to call your own, and through Computer Science I hope to create and be apart of projects that I can be proud of to call my own.</p>
            </div>
            <img className='rounded-2xl shadow-[2px_4px_4px_0px_rgba(0,0,0,0.5)] w-[10vw] h-[13vw] object-cover' src="IMG_9307.png" alt="me when young"></img>

        </div>*/}
        <Tomato buttonText="Learn More"/>

    </div>
    
  )
}

export default Mystory;