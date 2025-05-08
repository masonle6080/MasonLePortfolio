import React from 'react'
import Button from './Button';
import ResumePhoto from '/resume.png'
import LinkedInPhoto from '/linkedinIcon.png'
import Headshot from '/professiona.png'


export const MasonLe = () => {
  return (
    
        <div className='flex flex-col items-center justify-center h-screen bg-offwhite my-5'> {/*all*/}
          <div className='flex flex-col mx-50'> {/* all */}
            <div className='flex flex-row w-full justify-center mb-20'>
              <div className='flex flex-col items-baseline justify-center gap-4 font-roboto font-medium w-[50%] ml-10 pl-25'>
                <p className='sm:hidden md:block text-[16px]'>I'm &nbsp;&nbsp;<span className='text-[40px] text-black font-poppins font-extrabold italic'>Mason Le</span></p>
                <p className='w-[80%] text-[16px]'>A <span className='text-blue'>Computer Science</span> student at the University of California, Santa Barbara; interested in software and business.</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <img className='transition-transform transform hover:scale-110  rounded-4xl shadow-[2px_4px_4px_0px_rgba(0,0,0,0.5)] w-[13vw] object-cover 'src={Headshot} alt="headshot image"/>
              </div>
            </div>
            <div className='flex flex-row w-full justify-center items-center gap-8'> {/*linked in resume */}
              <a href="https://www.linkedin.com/in/mason-le-68b75a274/" target="_blank">
                <Button imgSrc={LinkedInPhoto} buttonText='LinkedIn'/>
              </a>
              <a href="Mason_Le's_Resume.pdf" target="_blank">
                <Button imgSrc={ResumePhoto} buttonText='Resume'/>
              </a>
            </div>
          </div>
        </div>
        
      
  )
}

export default MasonLe;