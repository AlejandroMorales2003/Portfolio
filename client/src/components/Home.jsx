import React from 'react'
import Nature from '../images/HomePage/bg.jpeg'
import Portrait from '../images/HomePage/AliG.png'
import {FaCaretDown } from 'react-icons/fa'
import {Link} from "react-scroll"

const Home = () => {
  return (
    <div name="home" className='flex relative w-full h-screen bg-[black]'>
        {/* Background Image of nature */}
       <img alt="background img" className="object-cover h-full w-full" src={Nature}/>

        {/* Text container */}
        <div className='absolute inset-0 flex lg:flex-row flex-col top-[80px]'>
            {/* Picture Container */}
            <div name="professional-container" className='sm:ml-12 flex-1 flex justify-center items-center p-4'>
                <img alt="Alejandro's Portrait" src={Portrait} className="object-cover w-[350px] 2xl:w-[500px] 2xl:h-[500px] lg:w-[400px] h-[350px] lg:h-[400px] rounded-full border-[1px] border-[#cd8c4c]"/>
            </div>

            <div className='flex-1 flex flex-col p-4 items-center justify-center text-white'>
                <p className="text-[#cd8c4c] text-[30px] mr-60">Howdy</p>
                <h1 className='text-lg sm:text-3xl xl:text-4xl font-serif outline-dark'>I am Alejandro Morales Cernas.</h1>
                <h2 className='text-lg sm:text-3xl xl:text-4xl font-serif mt-1'>I am a Software Developer.</h2>

                {/* Scroll down button */}
                <div className='mr-52'>
                    <Link to="about" offset={-75} smooth={true} duration={700}>
                    <button className='flex items-center border-t-[1px] px-6 py-1 text-[12px] sm:text-md hover:text-[#cd8c4c] hover:border-[#cd8c4c] hover:scale-105 duration-500'>
                        scroll down <FaCaretDown/>
                    </button>
                    </Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home