import React, { useContext, useEffect, useRef } from 'react'
import ComponentListContext from '../context/ComponentListContext'
import InterestSvg from '../assets/Interests'


export function InterestsComponent() {
    const InsterestRef = useRef()
    const { InterestsCompArray, setInterestsCompArray, InterestsSettingInfoGraphic } = useContext(ComponentListContext)
    const handleInterestEnterKey = (e) => {
        if (e.key === 'Enter') {
            setInterestsCompArray(InterestsCompArray => [...InterestsCompArray, <InterestsComponent></InterestsComponent>])

        }
    }

    useEffect(() => {

        const handler = (e) => {
            if (InsterestRef.current && InsterestRef.current.contains(e.target)) {
                InsterestRef.current.classList.remove('placeholder:text-black')
            }
            if (InsterestRef.current && !InsterestRef.current.contains(e.target)) {
                InsterestRef.current.classList.add('placeholder:text-black')
            }
        }
        document.addEventListener('mousedown', handler)
    })

    return (
        <div className='flex flex-col' id='interestsNewField'>
            <div className='ml-6 pb-3 flex space-x-2 interestsAllFields' id='interestsOldField'>
                {InterestsSettingInfoGraphic === 'Icons' && <img src="https://d.novoresume.com/yna_pub/svg/list/diamond-empty/a-rn-1.svg" className='h-5 w-12 mt-2' alt="" />}
                <input type="text" placeholder='Interests' className='text-black text-[24px] font-[500] outline-none placeholder:text-[24px] placeholder:font-[500] placeholder:text-black ' ref={InsterestRef} onKeyDown={(e) => handleInterestEnterKey(e)} autoFocus />
            </div>
        </div>)
}


export default function Interests() {
    const { Icon, ThemeColor, InterestsCompArray, setInterestsCompArray } = useContext(ComponentListContext)

    return (
        <div key='interests'>
            <div className=' border-b-2 border-b-black h-28 ml-6 p-5 '>
                <div className='flex space-x-6 relative right-5 h-20 w-96 interests'>
                    {Icon && <span className='relative left-3'><InterestSvg></InterestSvg></span>
                    }
                    <input type="text" defaultValue='INTERESTS' className={`text-${ThemeColor} text-[32px] font-[600] outline-none w-[400px] `} />
                </div>
            </div>
            {InterestsCompArray.map((data) => {
                return (
                    data
                )
            })}
        </div>)
}
