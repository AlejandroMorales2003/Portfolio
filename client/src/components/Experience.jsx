import React from 'react'

import OSU from '../images/ExperiencePage/osu.png'
import WGU from '../images/ExperiencePage/wgu.png'

const Experience = () => {
  return (
    <div name="experience" className='bg-gray-100 w-full flex flex-col items-center'>
        
        {/* Experience Introduction Container */}
        <div className='max-w-[700px] sm:h-[300px] h-[200px] flex flex-col items-center justify-center border-b-[2px]'>
            <p className="text-[#964b00] font-bold sm:text-[40px] text-[35px]">Experience</p>
            <h1 className='sm:text-4xl text-lg font-bold font-serif'>My Professional Knowledge</h1>
            <h2 className='sm:text-xl text-[12px] font-serif mt-5'>Learn about my previous job experiences and my education</h2>
        </div>

        <div name="BigContainer" className="sm:mt-4 flex xl:flex-row flex-col w-full">

            {/* Work Experience Container */}
            <div name="Work Experience" className='xl:w-1/2 w-full flex-1 h-full'>
                    {/* Text Container */}
                <div className='xl:pl-24 xl:pr-8 p-12'>
                    <h1 className='sm:text-4xl text-lg font-bold font-mono'>Work Experience</h1>
                    <div name="jobs" className='mt-3 max-w-[700px] h-[400px] overflow-y-scroll border-[2px] border-[black] p-4' >

                        {/* HP Container */}
                        <div>
                            <div className='flex sm:text-[20px] text-[8.5px]'>
                                <h1 className='font-serif font-semi-bold text-[#964b00]'>HP Inc.&nbsp;</h1>
                                <h1 className='font-serif'>- Cloud Solutions Intern (Current Work)</h1>
                            </div>
                            <p className='font-serif sm:text-[14px] text-[10px] ml-5'>
                            ▪ Increased HPOne customer satisfaction by improving their user experience, trust, and retention by creating a cancel subscription microservice.<br/>
                            ▪ Created REST APIs using Go, Azure DevOps, Jira, and Splunk to deploy web services on the HP software ecosystem.<br/>
                            ▪ Participated in the Talent Mentorship program where I created professional connections, adopted career development skills, and integrated future events for my SHPE Chapter at Oregon State University.<br/>
                            </p>
                        </div>

                        {/* ULA Container */}
                        <div className='mt-2'>
                            <div className='flex sm:text-[20px] text-[8.5px]'>
                                <h1 className='font-serif font-semi-bold text-[#964b00]'>School of EECS at Oregon State University&nbsp;</h1>
                                <h1 className='font-serif'>- Learning Assistant</h1>
                            </div>
                            <p className='font-serif sm:text-[14px] text-[10px] ml-5'>
                            ▪ Enhanced students' learning experience, contributing to higher engagement, and improved project outcomes.<br/>
                            ▪ Introduced the basics of Python to create graphs for student team projects.<br/>
                            </p>
                        </div>

                        {/* Walmart Container */}
                        <div className='mt-2'>
                            <div className='flex sm:text-[20px] text-[8.5px]'>
                                <h1 className='font-serif font-semi-bold text-[#964b00]'>Walmart&nbsp;</h1>
                                <h1 className='font-serif'>- Garden Center Associate</h1>
                            </div>
                            <p className='font-serif sm:text-[14px] text-[10px] ml-5'>
                            ▪ Drove an increase in department sales through strategic product placement and customer satisfaction.<br/>
                            ▪ Delegated tasks to associates to maintain plants and a clean department.<br/>
                            ▪ Operated a forklift, painted floors and equipment, troubleshooted TC-70s, and stocked items.<br/>
                            </p>
                        </div>

                        {/* Math Clerk Container */}
                        <div className='mt-2'>
                            <div className='flex sm:text-[20px] text-[8.5px]'>
                                <h1 className='font-serif font-semi-bold text-[#964b00]'> Mathematics and Statistics Learning Center&nbsp;</h1>
                                <h1 className='font-serif'>- Math Clerk</h1>
                            </div>
                            <p className='font-serif sm:text-[14px] text-[10px] ml-5'>
                            ▪ Maintainined the center's operational excellence, facilitated seamless testing procedures, enhanced organizational efficiency, and fostered an environment conducive to student success.<br/>
                            ▪ Supervised and proctored math tests for students.<br/>
                            ▪ Organized and maintained a filing system for student tests on Excel.<br/>
                            </p>
                        </div>

                        {/* Pisca Container */}
                        <div className='mt-2'>
                            <div className='flex sm:text-[20px] text-[8.5px]'>
                                <h1 className='font-serif font-semi-bold text-[#964b00]'>Rivercider&nbsp;</h1>
                                <h1 className='font-serif'>- Harvester</h1>
                            </div>
                            <p className='font-serif sm:text-[14px] text-[10px] ml-5'>
                            ▪ Contributed to the production of high-quality fruits and the successful harvest seasons of Rivercider. <br/>
                            ▪ Harvested apples and pears during harsh summer weather conditions, an experience that enabled me to cultivate physical strength and mental resilience, emphasizing the importance of pursuing higher education.<br/>
                            </p>
                        </div>

                        {/* Tutor Container */}
                        <div className='mt-2'>
                            <div className='flex sm:text-[20px] text-[8.5px]'>
                                <h1 className='font-serif font-semi-bold text-[#964b00]'>Wildwood Academy&nbsp;</h1>
                                <h1 className='font-serif'>- Math Tutor</h1>
                            </div>
                            <p className='font-serif sm:text-[14px] text-[10px] ml-5'>
                            ▪ Instilled confidence and enthusiasm for math students, improving student's grades at Wildwood Academy.<br/>
                            ▪ Tutored Pre-Algebra through Calculus to help students excel in middle school or high school.<br/>
                            ▪ Conducted fun lectures to demonstrate the significance of math and improve math retention.<br/>
                            </p>
                        </div>

                        {/* Teacher Assitant Container */}
                        <div className='mt-2'>
                            <div className='flex sm:text-[20px] text-[8.5px]'>
                                <h1 className='font-serif font-semi-bold text-[#964b00]'>Hood River County School District&nbsp;</h1>
                                <h1 className='font-serif'>- Teacher Assistant</h1>
                            </div>
                            <p className='font-serif sm:text-[14px] text-[10px] ml-5'>
                            ▪ Fostered students' academic growth, personal development, and admiration for learning within the Hood River County School District.<br/>
                            ▪ Established learning activities and field trips to improve students reading, writing, and math skills.<br/>
                            ▪ Became a role model for students in kindergarten and fourth grade.<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Educaiton Container */}
            <div name="Education" className='xl:w-1/2 w-full flex-1'>
                <div className='xl:pr-24 xl:pl-8 px-12 sm:py-12 py-0'>

                    {/* Current Education Container */}
                    <h1 className='sm:text-4xl text-lg font-bold font-mono'>Education</h1>
                    <div name="education" className='mt-3 max-w-[700px]' >
                        <div className='flex items-center'>
                            <div className='flex-1 w-1/2'>
                                <h1 className='sm:text-[20px] text-[8.5px] font-serif'>Oregon State University - Bachelors of Computer Science</h1>
                                <p className='sm:text-[20px] text-[8px] font-serif ml-5'>
                                ▪ Minor in Cybersecurity<br/>
                                ▪ Graduation Date: March 2024<br/>
                                ▪ GPA: 3.93<br/>
                                </p>
                            </div>
                            <div className='flex-1 w-1/2'>
                                <img className='object-fill sm:w-64 w-44 sm:h-40 h-24' src={OSU} alt="osu-img"></img>
                            </div>
                        </div>
                    </div>

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
                                <img className='object-cover sm:w-60 w-44 sm:h-36 h-28' src={WGU} alt="wgu-img"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience