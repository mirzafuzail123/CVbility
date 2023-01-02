import React, { useContext, useState, useRef, useEffect } from 'react'
import ComponentListContext from '../context/ComponentListContext'
import WorkEx from '../assets/Work'


export function WorkComponent() {
    const { MovableIndex, setMovableIndex } = useContext(ComponentListContext)
    const [Present, setPresent] = useState(false)
    const TitleRef = useRef()
    const WorkRef = useRef()
    const CompanyRef = useRef()

    useEffect(() => {

        const handler = (e) => {
            if (TitleRef.current && TitleRef.current.contains(e.target)) {
                TitleRef.current.classList.remove('placeholder:text-black')
            }
            if (TitleRef.current && !TitleRef.current.contains(e.target)) {
                TitleRef.current.classList.add('placeholder:text-black')
            }
            if (CompanyRef.current && CompanyRef.current.contains(e.target)) {
                CompanyRef.current.classList.remove('placeholder:text-black')
            }
            if (CompanyRef.current && !CompanyRef.current.contains(e.target)) {
                CompanyRef.current.classList.add('placeholder:text-black')
            }

            if (WorkRef.current && WorkRef.current.contains(e.target)) {
                setMovableIndex(WorkRef.current.parentElement.id)
            }
        }

        document.addEventListener('mousedown', handler)

    })

    return (
        <div className='flex flex-col' id='workExperienceNewField' ref={WorkRef}>
            <div className='ml-6 pb-3 workExperienceAllFields' id='workExperienceOldField'>
                <input type="text" placeholder='Title/Position' className='text-black text-[24px] font-[500] outline-none placeholder:text-[24px] placeholder:font-[500] placeholder:text-black ' ref={TitleRef} />
                <input type="text" placeholder='Company' className='text-black italic text-[24px] font-[500] outline-none placeholder:text-[24px] placeholder:font-[500] placeholder:text-black ' ref={CompanyRef} />

                <div className='flex flex-col space-y-2 ml-8' id='workDetail' >
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
                        <label htmlFor="present" className='text-sm'>Present</label>                    </div>
                    <input type="text" placeholder='City , Country (optional)' className='text-black text-sm outline-none ' />
                    <input type="text" defaultValue='Achievments/Tasks' className='text-primary2 text-sm outline-none ' />
                    <input type="text" placeholder='Accomplishments/Responsibility/Task' className='text-black ml-4 text-sm outline-none ' />
                    <input type="text" defaultValue='Contact:' className='text-primary2 text-sm outline-none ' />
                    <input type="text" placeholder='Contact Person' className='text-black ml-4 text-sm outline-none ' />
                    <input type="text" placeholder='Contact Info' className='text-black ml-4 text-sm outline-none ' />
                </div>

            </div>
        </div>)
}


export default function Work() {
    const { Icon, ThemeColor, WorkCompArray, setWorkCompArray } = useContext(ComponentListContext)
    return (
        <div key='workExperience'>
            <div className=' border-b-2 border-b-black h-28 ml-6 p-5 '>
                <div className='flex space-x-6 relative right-5 h-20 w-96 workExperience'>
                    {Icon && <span className='relative left-3'><WorkEx></WorkEx></span>
                    }
                    <input type="text"
                        defaultValue='WORK EXPERIENCE' className={`text-${ThemeColor} text-[32px] font-[600] outline-none w-[400px] `} />
                </div>
            </div>
            {WorkCompArray.map((data, index) => {
                return (
                    <div id={index}>{data}</div>

                )
            })}



        </div>)
}
