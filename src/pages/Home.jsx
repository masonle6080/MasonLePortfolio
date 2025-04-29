import React from 'react'
import Navbar from '../components/Navbar';
import MasonLe from '../components/MasonLe';
import Mystory from '../components/Mystory';
import Footer from '../components/Footer';
import ScrollEnlargeSection from '../components/Mystory1';

export const Home = () => {
  return (
    <>
    <Navbar/>

    <div className='flex flex-row text-[12px] bg-offwhite justify-center'>
      
      <div className='flex flex-col w-full'>
      

        <MasonLe/>
        
        
        <Mystory/>

        <Footer/>

      </div>

    </div>
    </>
  )
}

export default Home;