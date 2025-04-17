import React from 'react'
import { Link } from 'react-router-dom'
import Gallery from '../components/Gallery'


export const Portfolio = () => {
  return (
    <>
      <div className='flex flex-col h-screen justify-center pl-10 gap-5 font-montserrat fixed text-[12px]'>
        <Link to = "/"><span className='text-blue'>  <span className='font-bold underline'>back</span> &lt; </span></Link>
      </div>
      <div className=''>
        <Gallery/>

      </div>
    
    </>
  )
}

export default Portfolio