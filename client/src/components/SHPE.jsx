import React from 'react'

import Cali from '../images/SHPEPage/cali.jpg'
import Outreach from '../images/SHPEPage/outreach.png'

const SHPE = () => {
  return (
    <div name="shpe" className='w-full flex flex-col items-center sm:mb-24 mb-12'>
        
        {/*  SHPE Introduction Container */}
        <div className='sm:mt-10 max-w-[700px] sm:h-[300px] h-[250px] flex flex-col items-center justify-center border-b-[2px]'>
            <p className="text-[#964b00] font-bold sm:text-[40px] text-[30px] text-center">Society of Hispanic<br/> Professional Engineers (SHPE)</p>
            <h1 className='sm:text-4xl text-lg font-bold font-serif mt-4'>Professional Affiliations</h1>
            <h2 className='sm:text-xl text-[12px] font-serif mt-5'>Learn about my involvement with SHPE</h2>
        </div>

        <div name="BigContainer" className="mt-4 flex w-full lg:px-44 sm:px-12 px-4">
            <div name="What is Shpe?" className='flex xl:flex-row flex-col h-full w-full bg-gray-100 rounded-[10%] border-[2px]'>
                <div className='xl:pl-20 xl:pr-8 sm:px-12 px-8 sm:py-12 py-8 flex-1'>
                    {/* What is SHPE text Container */}
                    <div className='flex flex-col'>
                        <h1 className='sm:text-3xl text-lg font-bold font-mono'>What is SHPE?</h1>
                        <div className='mt-3 max-w-[700px]' >
                            <div className='flex items-center'>
                                <div>
                                    <p className='sm:text-[20px] text-[12px] font-serif'>
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
                <div className='xl:pr-20 xl:pl-8 sm:py-6 sm:px-0 px-6 flex-1 flex justify-center'>
                    <img className='object-cover w-[550px] h-[325px] rounded-3xl' src={Cali} alt="Cali img"/>
                </div>
            </div>
        </div>


        <div name="BigContainer" className="mt-4 flex flex-col w-full lg:px-44 sm:px-12 px-4">
            <div name="My Involvement?" className='flex xl:flex-row flex-col h-full w-full bg-gray-100 rounded-[10%] border-[2px]'>

                <div className='xl:pl-20 xl:pr-8 sm:px-12 px-8 sm:py-12 py-8  flex-1'>
                    {/* What is SHPE text Container */}
                    <div className='flex flex-col'>
                        <h1 className='sm:text-3xl text-lg font-bold font-mono'>My Involvement</h1>
                        <div className='mt-3 max-w-[700px]' >
                            <div className='flex items-center'>
                                <div>
                                    <p className='sm:text-[20px] text-[12px] font-serif'>
                                    I am an Ecampus Liaison Officer at Oregon State's University Chapter who works with Ecampus Hispanic
                                    students to encourage engagement and spread career development opportunities. I update, create,
                                    and maintain Oregon State's SHPE websites. I plan to continue my SHPE involvement in future 
                                    careers to levarage my knowledge to Hispanics across the nation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Container */}
                <div className='xl:pr-20 xl:pl-8 py-6 sm:px-0 px-6 flex-1 flex justify-center'>
                        <img className='object-cover w-[550px] h-[325px] rounded-3xl' src={Outreach} alt="Outreach img"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SHPE