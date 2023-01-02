import React, { useContext, useState, useRef, useEffect } from 'react'
import ComponentListContext from '../context/ComponentListContext'
import ProjectSvg from '../assets/PersonalProject'


export function ProjectsComponent() {
    const [Present, setPresent] = useState(false)
    const ProjectRef = useRef()
    useEffect(() => {

        const handler = (e) => {
            if (ProjectRef && ProjectRef.current.contains(e.target)) {
                ProjectRef.current.classList.remove('placeholder:text-black')
            }
            if (ProjectRef && !ProjectRef.current.contains(e.target)) {
                ProjectRef.current.classList.add('placeholder:text-black')
            }
        }
        document.addEventListener('mousedown', handler)
    })


    return (
        <div className='flex flex-col' id='personalProjectNewField'>
            <div className='ml-6 pb-3 personalProjectAllFields' id='personalProjectOldField'>
                <input type="text" placeholder='Project Name' className='text-black text-[24px] font-[500] outline-none placeholder:text-[24px] placeholder:font-[500] placeholder:text-black' ref={ProjectRef} />

                <div className='flex flex-col space-y-2 ml-8' id='projectDetail' >
                    <div className='flex space-x-2'>
                        <input type="number" max={12} min={1} placeholder='mm' className='text-[#A8B0B9] text-sm  outline-none w-10' />
                        <h1 className='text-[#A8B0B9]'>/</h1>
                        <input type="number" max={2030} min={1930} placeholder='yy' className='text-[#A8B0B9] text-sm  outline-none w-12' />

                        <h1 className='text-[#A8B0B9] text-sm '>-</h1>

                        {!Present &&
                            <>
                                <input type="number" max={12} min={1} placeholder='mm' className='text-[#A8B0B9] text-sm  outline-none w-10' />
                                <h1 className='text-[#A8B0B9]'>/</h1>
                                <input type="number" max={2030} min={1930} placeholder='yy' className='text-[#A8B0B9] text-sm  outline-none w-12' />
                            </>
                        }
                        <input type="checkbox" id='present' onClick={() => Present ? setPresent(false) : setPresent(true)} />
                        <label htmlFor="present" className='text-sm'>Present</label>
                    </div>
                    <input type="text" placeholder='Description of Achievments (optional)' className='text-black text-sm outline-none ' />
                </div>

            </div>
        </div>)
}


export default function Projects() {
    const { Icon, ThemeColor, ProjectsCompArray, setProjectsCompArray } = useContext(ComponentListContext)

    return (
        <div key='personalProject'>
            <div className=' border-b-2 border-b-black h-28 ml-6 p-5 '>
                <div className='flex space-x-6 relative right-5 h-20 w-96 personalProject'>
                    {Icon && <span className='relative left-3'><ProjectSvg></ProjectSvg></span>
                    }
                    <input type="text" defaultValue='PERSONAL PROJECT' className={`text-${ThemeColor} text-[32px] font-[600] outline-none w-[400px] `} />
                </div>
            </div>
            {ProjectsCompArray.map((data) => {
                return (
                    data
                )
            })}


        </div>)
}
