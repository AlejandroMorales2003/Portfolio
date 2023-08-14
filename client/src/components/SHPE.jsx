import React from 'react'

import Cali from '../images/SHPEPage/cali.jpg'

const SHPE = () => {
  return (
    <div name="SHPE" className='w-full h-screen flex flex-col items-center'>
        
        {/*  SHPE Introduction Container */}
        <div className='max-w-[700px] h-[300px] flex flex-col items-center justify-center border-b-[2px]'>
            <p className="text-[#964b00] font-bold text-[40px] text-center">Society of Hispanic<br/> Professional Engineers (SHPE)</p>
            <h1 className='sm:text-4xl text-lg font-bold font-serif mt-4'>Professional Affiliations</h1>
            <h2 className='sm:text-xl text-[12px] font-serif mt-5'>Learn about my involvement with SHPE</h2>
        </div>

        <div name="BigContainer" className="mt-4 flex flex-col w-full">
            <div name="What is Shpe?" className='flex w-full'>
                    <div className='xl:pl-36 xl:pr-8 p-12 flex-1'>
                        {/* What is SHPE text Container */}
                        <div className='flex flex-col'>
                            <h1 className='sm:text-3xl text-lg font-bold font-mono'>What is SHPE?</h1>
                            <div className='mt-3 max-w-[700px]' >
                                <div className='flex items-center'>
                                    <div>
                                        <p className='sm:text-[20px] text-[8px] font-serif'>
                                        The Society of Hispanic Professional Engineers (SHPE) is a national non-profit that empower and
                                        support Hispanic and Latinx professionals and students in the fields of science, technology,
                                        engineering, and mathematics (STEM). The primary goals and impact of SHPE include professional
                                        development, educational support, community and networking, confenrences, career opportunities,
                                        and leadership development.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                        {/* Image Container */}
                    <div className='xl:pr-36 xl:pl-8 p-12 flex-1'>
                        <img className='ml-8 w-[80%] h-[80%]' src={Cali}/>
                    </div>
                </div>

                <div name="Education" className='w-full'>
                    <div className='xl:pr-36 xl:pl-8 p-12'>

                        {/* SHPE Image California */}
                        hi
                        <img src={Cali}/>
                        {/* Aspirations Container */}
                        <h1 className='sm:text-4xl text-lg font-bold font-mono mt-10'>Aspirations</h1>
                        <div name="aspirations" className='mt-3 max-w-[700px]'>
                            <div className='flex items-center'>
                                <div className='flex-1 w-1/2'>
                                    <h1 className='sm:text-[20px] text-[8.5px] font-serif'>Western Governer's University - Masters of Business Adminstration</h1>
                                    <p className='sm:text-[20px] text-[8px] font-serif ml-5'>
                                    ▪ Graduation Date: March 2025<br/>
                                    </p>
                                </div>
                                <div className='flex-1 w-1/2'>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SHPE