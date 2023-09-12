import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa"
import {Link} from "react-scroll"

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

    const closeMenu = () => {
        setNav(false)
    }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center z-[1] px-4 text-white bg-black'>
 
        {/* Logo Container */}
        <div>
                <p className='cursor-pointer text-[55px] duration-500 hover:text-[#cd8c4c] hover:scale-105'>
                    <Link to="home" smooth={true} duration={700}>
                        AMC
                    </Link>
                </p>
        </div>

        {/* Menu */}
        <ul className='hidden md:flex text-[18px]'>
                <li className='duration-300 hover:text-[#cd8c4c] hover:scale-105'>
                    <Link to="home" smooth={true} offset={-75} duration={700}>
                        Home
                    </Link>
                </li>
                <li className='duration-300 hover:text-[#cd8c4c] hover:scale-105'>
                    <Link to="about" smooth={true} offset={-75} duration={700}>
                        About
                    </Link>
                </li>
                <li className='duration-300 hover:text-[#cd8c4c] hover:scale-105'>
                    <Link to="experience" smooth={true} offset={-75} duration={700}>
                        Experience
                    </Link>
                </li>
                <li className='duration-300 hover:text-[#cd8c4c] hover:scale-105'>
                    <Link to="shpe" smooth={true} offset={-75} duration={700}>
                        Shpe
                    </Link>
                </li>
                <li className='duration-300 hover:text-[#cd8c4c] hover:scale-105'>
                    <Link to="projects" smooth={true} offset={-75} duration={700}>
                        Projects
                    </Link>
                </li>
                <li className='duration-300 hover:text-[#cd8c4c] hover:scale-105'>
                    <Link to="contact" smooth={true} offset={-75} duration={700}>
                        Contact
                    </Link>
                </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer duration-300 hover:text-[#cd8c4c] hover:scale-125'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        {/* Mobile Menu  */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen md:hidden flex flex-col justify-center items-center text-4xl bg-black'}>
            <li className='duration-300 hover:text-[#cd8c4c] hover:scale-105 py-6'>
                <Link to="home" smooth={true} duration={700} onClick={closeMenu}>
                    Home
                </Link>
            </li>
            <li className='duration-300 hover:text-[#cd8c4c] hover:scale-105 py-6'>
                <Link to="about" smooth={true} duration={700} offset={-75} onClick={closeMenu}>
                    About
                </Link>
            </li>
            <li className='duration-300 hover:text-[#cd8c4c] hover:scale-105 py-6'>
                <Link to="experience" smooth={true} duration={700} offset={-75} onClick={closeMenu}>
                    Experience
                </Link>
            </li>
            <li className='duration-300 hover:text-[#cd8c4c] hover:scale-105 py-6'>
                <Link to="shpe" smooth={true} duration={700} offset={-75} onClick={closeMenu}>
                        SHPE
                </Link>
            </li>
            <li className='duration-300 hover:text-[#cd8c4c] hover:scale-105 py-6'>
                <Link to="projects" smooth={true} duration={700} offset={-75} onClick={closeMenu}>
                        Projects
                </Link>
            </li>
            <li className='duration-300 hover:text-[#cd8c4c] hover:scale-105 py-6'>
                <Link to="contact" smooth={true} duration={700} offset={-75} onClick={closeMenu}>
                        Contact
                </Link>
            </li>
        </ul>

        {/* Social Icons */}

        {scrollPercent > 5.0 ? "" :
        <div className='hidden xl:flex fixed flex-col top-[45%] left-0'>
            <ul>
                {/* LinkedIn */}
                <li className='w-[160px] h-[60px] flex ml-[-100px] hover:ml-[0px] duration-300 hover:text-[#cd8c4c]'>
                    <a href='https://www.linkedin.com/in/alejandro-morales-cernas/' target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full">
                        Linkedin<FaLinkedin size={30}/>
                    </a>
                </li>

                {/* Github */}
                <li className='w-[160px] h-[60px] flex ml-[-100px] hover:ml-[0px] duration-300 hover:text-[#cd8c4c]'>
                    <a href='https://github.com/AlejandroMorales2003' target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full">
                        Github<FaGithub size={30}/>
                    </a>
                </li>

                {/* Rseume */}
                <li className='w-[160px] h-[60px] flex ml-[-100px] hover:ml-[0px] duration-300 hover:text-[#cd8c4c]'>
                <a href='https://www.instagram.com/ali.gesus/' target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full">
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