import React from 'react'
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'

export const Navbar = () => {
  return (
    <div className='flex flex-col h-screen justify-center pl-15 gap-5 font-montserrat fixed text-[12px]'>
      <Navbar1></Navbar1>
      <Navbar2></Navbar2>
    </div>
  )
}

export default Navbar