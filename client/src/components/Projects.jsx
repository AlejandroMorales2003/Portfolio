import React from 'react'
import SHPE from '../images/ProjectsPage/shpewebsite.png'
import Prophets from '../images/ProjectsPage/prophetswebsite.png'
import BookNook from '../images/ProjectsPage/booknookwebsite.png'

const Projects = () => {
  return (
    /* sm:mb-24 mb-1 */
    <div name="projects" className='bg-gray-100 w-full flex flex-col items-center sm:pb-24 pb-12'> 
        {/*  SHPE Introduction Container */}
        <div className='max-w-[700px] sm:h-[300px] h-[200px] flex flex-col items-center justify-center border-b-[2px]'>
            <p className="text-[#964b00] font-bold sm:text-[40px] text-[35px] text-center">Projects</p>
            <h1 className='sm:text-4xl text-lg font-bold font-serif mt-4'>Personal Work</h1>
            <h2 className='sm:text-xl text-[12px] font-serif mt-5'>Learn about the projects I've created</h2>
        </div>

        <div name="BigContainer" className="mt-4 flex w-full lg:px-44 sm:px-12 px-4">
            <div name="shpe website" className='flex xl:flex-row flex-col h-full w-full bg-white border-[black] border-[2px]'>

                <div className='xl:pr-0 xl:py-0 py-6 sm:px-0 px-6 flex-1 flex justify-center  border-black xl:border-r-[2px] xl:border-b-0 border-b-[2px]'>
                    <img className='object-cover sm:w-[675px] w-[325px] sm:h-[400px] h-[175px]' src={SHPE} alt="shpe website img"/>
                </div>

                <div className='flex-1'>
                    {/* What is SHPE text Container */}
                    <div className='pl-8 pr-8 pt-12 flex flex-col'>
                        <h1 className='sm:text-3xl text-lg font-bold font-mono'>SHPE Website</h1>
                        <div className='mt-3 max-w-[700px]' >
                            <div>
                                <p className='sm:text-[20px] text-[12px] font-serif'>
                                I developed an informative website for the Society of Hispanic Professional Engineers club. Club
                                officers made specific requests that I updated, debugged, and maintained to the website.
                                I used React, Node.js, JavaScript, HTML, and CSS.
                                </p>
                            </div>
                        </div>

                        <div className='mt-8 flex justify-center text-white'>
                            <a href='https://github.com/AlejandroMorales2003/SHPE' target="_blank" rel="noopener noreferrer">
                                <button className='bg-black w-[100px] h-[50px] m-8 hover:scale-110 hover:text-[#cd8c4c] duration-500'>Github</button>
                            </a>
                            <a href='https://osu-shpe.netlify.app' target="_blank" rel="noopener noreferrer">
                                <button className='bg-black w-[100px] h-[50px] m-8 hover:scale-110 hover:text-[#cd8c4c] duration-500'>Website</button>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <div name="BigContainer" className="mt-8 flex w-full lg:px-44 sm:px-12 px-4">
            <div name="prophets webiste" className='flex xl:flex-row flex-col h-full w-full bg-white border-[black] border-[2px]'>

                <div className='xl:pr-0 xl:py-0 py-6 sm:px-0 px-6 flex-1 flex justify-center border-black xl:border-r-[2px] xl:border-b-0 border-b-[2px]'>
                    <img className='object-cover sm:w-[675px] w-[325px] sm:h-[400px] h-[175px]' src={Prophets} alt="prophets img"/>
                </div>

                <div className='flex-1'>
                    {/* What is SHPE text Container */}
                    <div className='pl-8 pr-8 pt-12 flex flex-col'>
                        <h1 className='sm:text-3xl text-lg font-bold font-mono'>Prophets</h1>
                        <div className='mt-3 max-w-[700px]' >
                            <div>
                                <p className='sm:text-[20px] text-[12px] font-serif'>
                                I created an e-commerce website on GitHub that lists decals, accessories, and clothing for my car
                                group in Hood River, Oregon. I used MongoDB, Postman, Node.js, JavaScript, and HTML.
                                </p>
                            </div>
                        </div>

                        <div className='mt-8 flex justify-center text-white'>
                            <a href='https://github.com/AlejandroMorales2003/prophetz' target="_blank" rel="noopener noreferrer">
                                <button className='bg-black w-[100px] h-[50px] m-8 hover:scale-110 hover:text-[#cd8c4c] duration-500'>Github</button>
                            </a>
                            <a href='/' target="_blank" rel="noopener noreferrer">
                            <button className='bg-black w-[100px] h-[50px] m-8 hover:scale-110 hover:text-[#cd8c4c] duration-500' >Website</button>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <div name="BigContainer" className="mt-8 flex w-full lg:px-44 sm:px-12 px-4">
            <div name="booknook website" className='flex xl:flex-row flex-col h-full w-full bg-white border-[black] border-[2px]'>

                <div className='xl:pr-0 xl:py-0 py-6 sm:px-0 px-6 flex-1 flex justify-center border-black xl:border-r-[2px] xl:border-b-0 border-b-[2px]'>
                    <img className='object-cover sm:w-[675px] w-[325px] sm:h-[400px] h-[175px]' src={BookNook} alt="booknook img"/>
                </div>

                <div className='flex-1'>
                    {/* What is SHPE text Container */}
                    <div className='pl-8 pr-8 pt-12 flex flex-col'>
                        <h1 className='sm:text-3xl text-lg font-bold font-mono'>BookNook</h1>
                        <div className='mt-3 max-w-[700px]' >
                            <div>
                                <p className='sm:text-[20px] text-[12px] font-serif'>
                                I created an e-commerce website on GitHub that lists decals, accessories, and clothing for my car
                                group in Hood River, Oregon. I used MongoDB, Postman, Node.js, JavaScript, and HTML.
                                </p>
                            </div>
                        </div>

                        <div className='mt-8 flex justify-center text-white'>
                            <a href='https://github.com/Owen-Williamson/CS361' target="_blank" rel="noopener noreferrer">
                                <button className='bg-black w-[100px] h-[50px] m-8 hover:scale-110 hover:text-[#cd8c4c] duration-500'>Github</button>
                            </a>
                            <a href='/' target="_blank" rel="noopener noreferrer">
                                <button className='bg-black w-[100px] h-[50px] m-8 hover:scale-110 hover:text-[#cd8c4c] duration-500'>Website</button>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Projects