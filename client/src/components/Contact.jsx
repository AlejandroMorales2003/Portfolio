import React from 'react'
import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa"
const Contact = () => {
  return (
    <div name="Projects" className='relative w-full flex flex-col items-center sm:pb-24 pb-12'> 
        {/*  Contact Introduction Container */}
        <div className='max-w-[700px] sm:h-[300px] h-[200px] flex flex-col items-center justify-center border-b-[2px]'>
            <p className="text-[#964b00] font-bold sm:text-[40px] text-[35px] text-center">Contact</p>
            <h1 className='sm:text-4xl text-lg font-bold font-serif mt-4'>Message Me</h1>
            <h2 className='sm:text-xl text-[12px] font-serif mt-5'>Don't hesitate to send me a message</h2>
        </div>

        <div className='w-full flex justify-center p-8'>
            <form action='' className='sm:text-[18px] text-[14px] text-black border-[2px] font-serif p-10 bg-gray-100 flex flex-col max-w-[600px] w-full'>
                <input className="p-2" type="text" placeholder='Name' name="name"/>
                <input className="p-2 mt-4" type="email" placeholder='Email' name="email"/>
                <textarea className="p-2 mt-4" name="message" rows="10" placeholder='Message'></textarea>
                <button className='bg-white mx-auto mt-4 border-2 p-4 border-[bg-gray-100] w-[200px] hover:border-black hover:scale-105 duration-500'>Let's Chat</button>
            </form>
        </div>

       {/*  <div className='hidden lg:flex absolute flex-col top-[40%] left-0'> */}
        <div className='flex absolute sm:bottom-8 bottom-3'>
            <ul className='flex flex-row'>
                {/* LinkedIn */}
                <li className='flex items-center w-[100px] h-[60px] hover:scale-110 duration-500 hover:text-[#cd8c4c]'>
                    <a className="flex justify-center w-full" href="/">
                        <FaLinkedin size={35}/>
                    </a>
                </li>

                {/* Github */}
                <li className='flex items-center w-[100px] h-[60px] hover:scale-110 duration-500 hover:text-[#cd8c4c]'>
                    <a className="flex justify-center w-full" href="/">
                        <FaGithub size={35}/>
                    </a>
                </li>

                {/* Rseume */}
                <li className='flex items-center w-[100px] h-[60px] hover:scale-110 duration-500 hover:text-[#cd8c4c]'>
                    <a className="flex justify-center w-full" href="/">
                        <FaInstagram size={35}/>
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Contact