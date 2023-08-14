import React from 'react'
import Nature from '../images/HomePage/bg.jpeg'
import Portrait from '../images/HomePage/AliG.png'
import {FaCaretDown } from 'react-icons/fa'

const Home = () => {
  return (
    <div name="home" className='relative w-full h-screen bg-[black]'>
        {/* Background Image of nature */}
        <img alt="background img" className="object-cover h-full w-full blur-[0px] z-[0]" src={Nature}/>

        {/* Text container */}
        <div className='absolute sm:top-6 top-12 max-w-[700px] sm:ml-[10%] ml-[13%] px-8 flex flex-col justify-center h-full text-white'>
            <p className="text-[#cd8c4c] text-[30px] ml-10">howdy</p>
            <h1 className='text-lg sm:text-3xl lg:text-4xl font-serif'>I am Alejandro Morales Cernas.</h1>
            <h2 className='text-lg sm:text-3xl lg:text-4xl font-serif mt-1'>I am a Software Developer.</h2>

            {/* Scroll down button */}
            <div>
                <button className='flex items-center border-t-[1px] px-6 py-1 hover:text-[#cd8c4c] hover:border-[#cd8c4c]'>scroll down <FaCaretDown/></button>
            </div>
        </div>

        {/* Picture Container */}
        <div name="professional-container" className='hidden 2xl:flex absolute top-[55%] right-[12%] translate-y-[-50%] w-[568px] h-[568px] overflow-hidden pointer-events-none'>
            <img alt="Alejandro's Portrait" src={Portrait} className="object-cover w-full h-full rounded-full border-[1px] border-[#cd8c4c]"/>
        </div>
    </div>
  )
}

export default Home