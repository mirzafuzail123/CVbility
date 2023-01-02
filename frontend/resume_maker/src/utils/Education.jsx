import React, { useContext, useState, useRef, useEffect } from 'react'
import ComponentListContext from '../context/ComponentListContext'
import EducationSvg from '../assets/Education'
import Bullet from '../assets/Bullet'
export const handleOnEnter = (e) => {

    if (e.key === 'Enter' && e.target.value) {
        let newField = document.createElement('div')
        newField.classList.add('flex', 'space-x-2')
        let SingleCourse = document.getElementById('SingleCourse')
        newField.innerHTML = SingleCourse.innerHTML
        newField.children[1].addEventListener('keypress', handleOnEnter)
        newField.children[1].addEventListener('keydown', handleDeleteKey)
        newField.children[1].classList.add('deadClass')
        e.target.parentElement.parentElement.appendChild(newField)
        newField.children[1].focus()
    }

}
export const handleDeleteKey = (e) => {
    if (e.key === 'Backspace' && !e.target.value && e.target.className.includes('deadClass')) {
        e.target.parentElement.remove()
    }
}


export const EducationComponent = () => {
    const { CoursesPerRow, } = useContext(ComponentListContext)
    const [Present, setPresent] = useState(false)
    const StudyProgramRef = useRef()
    const InstituteRef = useRef()

    useEffect(() => {
        const handler = (e) => {
            if (StudyProgramRef && StudyProgramRef.current.contains(e.target)) {
                StudyProgramRef.current.classList.remove('placeholder:text-black')
            }
            if (StudyProgramRef && !StudyProgramRef.current.contains(e.target)) {
                StudyProgramRef.current.classList.add('placeholder:text-black')
            }
            if (StudyProgramRef && InstituteRef.current.contains(e.target)) {
                InstituteRef.current.classList.remove('placeholder:text-black')
            }
            if (StudyProgramRef && !InstituteRef.current.contains(e.target)) {
                InstituteRef.current.classList.add('placeholder:text-black')
            }
        }

        document.addEventListener('mousedown', handler)

    })


    return (
        <div className='flex flex-col' id='educationNewField'>
            <div className='ml-6 pb-3 educationAllFields' id='educationOldField'>
                <input type="text" placeholder='Study Program' className='required text-black text-[24px] font-[500] outline-none placeholder:text-[24px] placeholder:font-[500] placeholder:text-black ' ref={StudyProgramRef} />
                <input type="text" placeholder='Institute Name' className='text-black text-[24px] outline-none placeholder:text-lg placeholder:text-black placeholder:text-[24px] placeholder:font-[500] ' ref={InstituteRef} />

                <div className='flex flex-col space-y-2 ml-8' id='educationDetail' >
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
                    <input type="text" placeholder='City , Country or CGPA (optional)' className='text-black text-sm outline-none ' />
                    <input type="text" defaultValue='Course:' className='text-primary2 text-sm outline-none ' />

                    <div className={`grid grid-cols-${CoursesPerRow}`} id='courseId' >

                        <div className='flex space-x-2' id='SingleCourse' >
                            <img src="https://d.novoresume.com/yna_pub/svg/list/diamond-empty/a-rn-1.svg" className='h-2 w-10 mt-[0.30rem]' alt="" />
                            <input type="text" placeholder='Course /Thesis' className='text-black  text-sm outline-none ' onKeyPress={(e) => handleOnEnter(e)} onKeyDown={(e) => handleDeleteKey(e)} />
                        </div>
                    </div>
                </div>

            </div>
        </div>)
}


export default function Education() {
    const { Icon, CoursesPerRow, ThemeColor, EducationCompArray, setEducationCompArray } = useContext(ComponentListContext)
    return (
        <div key='education'>
            <div className=' border-b-2 border-b-black h-28 ml-6 p-5 '>
                <div className='flex space-x-6 relative right-5 h-20 w-96 education'>
                    {Icon && <span className='relative left-3'><EducationSvg></EducationSvg></span>
                    }
                    <input type="text" defaultValue='EDUCATION' className={`text-${ThemeColor} text-[32px] font-[600] outline-none w-[400px]`} />
                </div>
            </div>
            {EducationCompArray.map((data) => {
                return (
                    data
                )
            })}







            {/* Dummy Div */}
            <div className='hidden grid grid-cols-1'>
            </div>
            <div className='hidden grid grid-cols-2'>
            </div>
            <div className='hidden grid grid-cols-3'>
            </div>
        </div>)
}
