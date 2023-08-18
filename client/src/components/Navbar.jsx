import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const [scrollPercent, setScrollPercent] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentScrollPercent = (scrollTop / docHeight) * 100;
        setScrollPercent(currentScrollPercent);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center z-[1] px-4 text-white bg-black'>
 
        {/* Logo Container */}
        <div>
                <p className=' cursor-pointer text-[55px] duration-300 hover:text-[#cd8c4c]'>AMC</p>
        </div>

        {/* Menu */}
        <ul className='hidden md:flex text-[18px]'>
                <li className='duration-300 hover:text-[#cd8c4c]'>Home</li>
                <li className='duration-300 hover:text-[#cd8c4c]'>About</li>
                <li className='duration-300 hover:text-[#cd8c4c]'>Experience</li>
                <li className='duration-300 hover:text-[#cd8c4c]'>Shpe</li>
                <li className='duration-300 hover:text-[#cd8c4c]'>Projects</li>
                <li className='duration-300 hover:text-[#cd8c4c]'>Contact</li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer duration-300 hover:text-[#cd8c4c]'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        {/* Mobile Menu  */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen md:hidden flex flex-col justify-center items-center text-4xl bg-black'}>
            <li className='duration-300 hover:text-[#cd8c4c] py-6'>Home</li>
            <li className='duration-300 hover:text-[#cd8c4c] py-6'>About</li>
            <li className='duration-300 hover:text-[#cd8c4c] py-6'>Experience</li>
            <li className='duration-300 hover:text-[#cd8c4c] py-6'>Shpe</li>
            <li className='duration-300 hover:text-[#cd8c4c] py-6'>Projects</li>
            <li className='duration-300 hover:text-[#cd8c4c] py-6'>Contact</li>
        </ul>

        {/* Social Icons */}

        {scrollPercent > 5.0 ? "" :
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                {/* LinkedIn */}
                <li className='w-[160px] h-[60px] flex ml-[-100px] hover:ml-[0px] duration-300 hover:text-[#cd8c4c]'>
                    <a className="flex items-center justify-between w-full" href="/">
                        Linkedin<FaLinkedin size={30}/>
                    </a>
                </li>

                {/* Github */}
                <li className='w-[160px] h-[60px] flex ml-[-100px] hover:ml-[0px] duration-300 hover:text-[#cd8c4c]'>
                    <a className="flex items-center justify-between w-full" href="/">
                        Github<FaGithub size={30}/>
                    </a>
                </li>

                {/* Rseume */}
                <li className='w-[160px] h-[60px] flex ml-[-100px] hover:ml-[0px] duration-300 hover:text-[#cd8c4c]'>
                    <a className="flex items-center justify-between w-full" href="/">
                        Instagram<FaInstagram size={30}/>
                    </a>
                </li>
            </ul>
        </div>
        }
    </div>
  )
}

export default Navbar