import React, {useState} from 'react'

//Tech skills
import ReactImg from '../images/AboutPage/techskills/react.png'
import Cpp from '../images/AboutPage/techskills/cpp.png'
import Go from '../images/AboutPage/techskills/go.png'
import Python from '../images/AboutPage/techskills/python.png'
import MongoDB from '../images/AboutPage/techskills/mongo.png'
import JavaScript from '../images/AboutPage/techskills/javascript.png'

//Soft Skills
import Communicaiton from '../images/AboutPage/softskills/communication.png'
import Adapt from '../images/AboutPage/softskills/adapts.png'
import Leader from '../images/AboutPage/softskills/leader.png'
import Team from '../images/AboutPage/softskills/teamwork.png'
import WorkEthic from '../images/AboutPage/softskills/work.png'
import Empathy from '../images/AboutPage/softskills/empathy.png'


const About = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };


  return (
    <div name="about" className='bg-white xl:h-screen w-full flex flex-col items-center'>

        {/* About Introduction Text container */}
        <div className='max-w-[700px] sm:h-[300px] h-[200px] flex flex-col items-center justify-center border-b-[2px]'>
            <p className="text-[#964b00] font-bold sm:text-[40px] text-[35px]">about me</p>
            <h1 className='sm:text-4xl text-lg font-bold font-serif'>Background Info</h1>
            <h2 className='sm:text-xl text-[12px] font-serif mt-5'>Learn about me and my skills</h2>
        </div>

        {/* Description and Skills */}
        <div name="BigContainer" className="sm:mt-4 flex xl:flex-row flex-col w-full">

            {/* Description Container */}
            <div name="Description" className='xl:w-1/2 w-full flex-1 h-full'>
                {/* Text Container */}
                <div className='xl:pl-36 xl:pr-8 p-12'>
                    <h1 className='sm:text-4xl text-lg font-bold font-mono'>Hola!</h1>
                    <p className='sm:text-xl text-[14px] font-serif mt-3'>
                        I'm a passionate young software developer looking to improve the lives of others. I have experience creating
                        small web applications to designing REST APIs for a large company. I love solving problems, and I have the 
                        initiative to lead others to build a educated and fun work environment.
                    </p>
                    <p className='sm:text-xl text-[14px] mt-5 font-serif'>
                        I am always open to discuss any opportunities or a simple chat. Don't be afraid to be reach out!
                    </p>
                </div>
            </div>


            {/* Skills Container */}
            <div name="skills" className='xl:w-1/2 w-full flex-1'>

                {/* Technical Skills */}
                <div name="tech and soft skills" className='xl:pl-8 xl:pr-36 px-12 sm:py-12 py-0'>

                    {/* Toggle Switch */}
                    <div className="flex items-center justify-center">
                        <span className={`font-bold font-mono sm:text-[20px] text-[12px] ${isChecked ? 'dark:text-gray-300' : 'text-black'} mr-3 transition-colors`}>
                            Technical Skills
                        </span>
                        <label className="hover:scale-110 duration-300 relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" checked={isChecked} onChange={handleToggle}/>
                            <div className="w-11 h-6 peer-focus:ring-2 dark:peer-focus:ring-black rounded-full peer bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute sm:after:top-[2px] after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#964b00]"></div>
                        </label>
                        <span className={`font-bold font-mono sm:text-[20px] text-[12px] ${isChecked ? 'text-blue' : 'dark:text-gray-300'} ml-3 transition-colors`}>
                            Soft Skills
                        </span>
                        
                    </div>

                    {/* Technical Skill Images Container */}
                    <div name="techimages" className={`${isChecked ? 'hidden': 'grid'} sm:text-[20px] text-[14px] font-serif w-full grid grid-cols-2 sm:grid-cols-3 sm:gap-16 gap-4 text-center py-8`}>
                        <div className='shadow-md shadow-black hover:scale-105 duration-500'>
                            <img className='w-32 h-32 m-auto' src={Python} alt="Python Icon"/>
                            <p className=''>Python</p>
                        </div>
                        <div className='shadow-md shadow-black hover:scale-105 duration-500'>
                            <img className='object-cover w-32 h-32 m-auto' src={Go} alt="Go Icon"/>
                            <p>Go</p>
                        </div>
                        <div className='shadow-md shadow-black hover:scale-105 duration-500'>
                            <img className='object-cover w-32 h-32 m-auto' src={Cpp} alt="C++ Icon"/>
                            <p>C++</p>
                        </div>
                        <div className='shadow-md shadow-black hover:scale-105 duration-500'>
                            <img className='object-cover w-32 h-32 m-auto' src={ReactImg} alt="React Icon"/>
                            <p>React</p>
                        </div>
                        <div className='shadow-md shadow-black hover:scale-105 duration-500'>
                            <img className='object-cover w-32 h-32 m-auto' src={MongoDB} alt="MongoDB Icon"/>
                            <p>MongoDB</p>
                        </div>
                        <div className='shadow-md shadow-black hover:scale-105 duration-500'>
                            <img className='object-cover w-32 h-32 m-auto' src={JavaScript} alt="JavaScript Icon"/>
                            <p>JavaScript</p>
                        </div>
                    </div>

                    {/* Soft Skill Image Container */}
                    <div name="softimages" className={`${!isChecked ? 'hidden': 'grid'} sm:text-[20px] text-[14px] font-serif w-full grid grid-cols-2 sm:grid-cols-3 sm:gap-16 gap-4 text-center py-8`}>
                        <div className='shadow-md shadow-black hover:scale-105 duration-500'>
                            <img className='object-fill w-32 h-32 m-auto' src={Team} alt="Python Icon"/>
                            <p>Teamwork</p>
                        </div>
                        <div className='shadow-md shadow-black hover:scale-105 duration-500'>
                            <img className='object-fill w-32 h-32 m-auto' src={Communicaiton} alt="Communication Icon"/>
                            <p>Communication</p>
                        </div>
                        <div className='shadow-md shadow-black hover:scale-105 duration-500'>
                            <img className='object-fill w-32 h-32 m-auto' src={Adapt} alt="Adaptability Icon"/>
                            <p>Adaptability</p>
                        </div>
                        <div className='shadow-md shadow-black hover:scale-105 duration-500'>
                            <img className='object-fill w-32 h-32 m-auto' src={Leader} alt="Leadership Icon"/>
                            <p>Leadership</p>
                        </div>
                        <div className='shadow-md shadow-black hover:scale-105 duration-500'>
                            <img className='object-fill w-32 h-32 m-auto' src={Empathy} alt="Bilingual Icon"/>
                            <p>Bilingual</p>
                        </div>
                        <div className='shadow-md shadow-black hover:scale-105 duration-500'>
                            <img className='object-fill w-32 h-32 m-auto' src={WorkEthic} alt="WorkEthic Icon"/>
                            <p>Work Ethic</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About