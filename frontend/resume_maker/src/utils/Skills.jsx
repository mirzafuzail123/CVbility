import React, { useContext, useEffect, useState, useRef } from 'react'
import ComponentListContext from '../context/ComponentListContext'
import SkillSvg from '../assets/Skills'
import { faL } from '@fortawesome/free-solid-svg-icons'


export const SkillComponent = () => {

    const { SkillsSettingInfoGraphic, SkillsCompArray, setSkillsCompArray, Intensify, setIntensify } = useContext(ComponentListContext)
    const SkillRef = useRef()

    const handleSkillsEnterKey = (e) => {
        if (e.key === 'Enter') {
            setSkillsCompArray(SkillsCompArray => [...SkillsCompArray, <SkillComponent></SkillComponent>])

        }
    }

    const handleSkillsInput = (e) => {
        if (e.target.value) {
            if (e.key !== 'Backspace' || e.key !== 'Delete') {
                e.target.size = e.target.value.length
            }
            else {
                e.target.size = e.target.value.length - 2

            }
        }


    }
    useEffect(() => {
        const handler = (e) => {
            if (SkillRef.current && SkillRef.current.contains(e.target)) {
                SkillRef.current.classList.remove('placeholder:text-black')
            }
            if (SkillRef.current && !SkillRef.current.contains(e.target)) {
                SkillRef.current.classList.add('placeholder:text-black')
            }
        }
        document.addEventListener('mousedown', handler)


        // Free1
        if (SkillsSettingInfoGraphic === 'Free1') {
            const div = document.getElementsByClassName('SkillsInfoDiv')
            const divArr = Array.prototype.slice.call(div)
            divArr.map((item) => {
                const tags = item.children
                const x = Array.prototype.slice.call(tags)

                x.map((itm, index) => {

                    itm.addEventListener('click', () => {
                        x.map((data, i) => {
                            if (i <= index) {
                                x[i].classList.add('bg-primary')
                            }
                            else {
                                x[i].classList.remove('bg-primary')
                            }
                        })
                    })
                })
            })

        }

        // Premium1
        if (SkillsSettingInfoGraphic === 'Premium1') {
            const div = document.getElementsByClassName('SkillsInfoDiv')
            const divArr = Array.prototype.slice.call(div)
            divArr.map((item) => {
                const tags = item.children
                const x = Array.prototype.slice.call(tags)

                x.map((itm, index) => {

                    itm.addEventListener('click', () => {
                        x.map((data, i) => {
                            if (i <= index) {
                                x[i].classList.add('bg-[#595959]')
                            }
                            else {
                                x[i].classList.remove('bg-[#595959]')
                            }
                        })
                    })
                })
            })

        }

        // Premium2
        if (SkillsSettingInfoGraphic === 'Premium2') {
            const div = document.getElementsByClassName('SkillsInfoDiv')
            const divArr = Array.prototype.slice.call(div)
            divArr.map((item) => {
                const tags = item.children
                const x = Array.prototype.slice.call(tags)

                x.map((itm, index) => {

                    itm.addEventListener('click', () => {
                        x.map((data, i) => {
                            if (i <= index) {
                                x[i].classList.add('bg-[#595959]', 'w-6', 'h-6')
                                x[i].classList.remove('w-4', 'h-4')
                            }
                            else {
                                x[i].classList.remove('bg-[#595959]', 'w-6', 'h-6')
                                x[i].classList.add('w-4', 'h-4',)
                            }
                        })
                    })
                })
            })

        }

        // Premium3
        if (SkillsSettingInfoGraphic === 'Premium3') {
            const div = document.getElementsByClassName('SkillsInfoDiv')
            const divArr = Array.prototype.slice.call(div)
            divArr.map((item) => {
                const tags = item.children
                const x = Array.prototype.slice.call(tags)

                x.map((itm, index) => {

                    itm.addEventListener('click', () => {
                        x.map((data, i) => {
                            if (i <= index) {
                                x[i].classList.add('bg-[#595959]')
                            }
                            else {
                                x[i].classList.remove('bg-[#595959]')
                            }
                        })
                    })
                })
            })

        }

        // Premium4
        if (SkillsSettingInfoGraphic === 'Premium4') {
            const div = document.getElementsByClassName('SkillsInfoDiv')
            const divArr = Array.prototype.slice.call(div)
            divArr.map((item) => {
                const tags = item.children
                const x = Array.prototype.slice.call(tags)

                x.map((itm, index) => {

                    itm.addEventListener('click', () => {
                        x.map((data, i) => {
                            if (i <= index) {
                                x[i].classList.add('bg-[#595959]')
                            }
                            else {
                                x[i].classList.remove('bg-[#595959]')
                            }
                        })
                    })
                })
            })

        }

    })


    return (
        <div className='flex flex-col' id='skillsNewField'>
            <div className='ml-6 pb-3 skillsAllFields' id='skillsOldField'>

                <div className='flex'>
                    <div className={``}>
                        <input type="text" placeholder='Skill' className={`text-[18px] flex-shrink font-[500] outline-none placeholder:text-[18px] placeholder:font-[500]  ${SkillsSettingInfoGraphic === 'Highlighted' ? 'text-white bg-gray-500 rounded-lg py-2 placeholder:text-white placeholder:px-1 px-1' : 'text-black placeholder:text-black'} ${Intensify ? 'bg-gray-800' : null}  max-w-full`} ref={SkillRef} onKeyPress={(e) => handleSkillsEnterKey(e)} autoFocus size={SkillsSettingInfoGraphic === 'Highlighted' ? 6 : null} onKeyDown={SkillsSettingInfoGraphic === 'Highlighted' ? (e) => handleSkillsInput(e) : null} />
                    </div>
                    {/* Free1 */}
                    {SkillsSettingInfoGraphic === 'Free1' &&
                        <div className={`flex my-4 space-x-4 cursor-pointer SkillsInfoDiv`}>
                            <div className={`border border-primary rounded-full w-6 h-6 `}>
                            </div>
                            <div className={`border border-primary rounded-full w-6 h-6  `}>
                            </div>
                            <div className={`border border-primary rounded-full w-6 h-6  `}>
                            </div>
                            <div className={`border border-primary rounded-full w-6 h-6  `}>
                            </div>
                            <div className={`border border-primary rounded-full w-6 h-6  `}>
                            </div>
                        </div>
                    }

                    {/* Premium1 */}
                    {SkillsSettingInfoGraphic === 'Premium1' &&
                        <div className={`flex my-4 space-x-4 cursor-pointer SkillsInfoDiv`}>
                            <div className={`border border-[#595959] rounded-full w-6 h-6 `}>
                            </div>
                            <div className={`border border-[#595959] rounded-full w-6 h-6  `}>
                            </div>
                            <div className={`border border-[#595959] rounded-full w-6 h-6  `}>
                            </div>
                            <div className={`border border-[#595959] rounded-full w-6 h-6  `}>
                            </div>
                            <div className={`border border-[#595959] rounded-full w-6 h-6  `}>
                            </div>
                        </div>
                    }

                    {/* Premium2 */}
                    {SkillsSettingInfoGraphic === 'Premium2' &&
                        <div className={`flex my-4 space-x-4 cursor-pointer SkillsInfoDiv`}>
                            <div className={`border border-[#595959] rounded-full w-4 h-4 `}>
                            </div>
                            <div className={`border border-[#595959] rounded-full w-4 h-4  `}>
                            </div>
                            <div className={`border border-[#595959] rounded-full w-4 h-4  `}>
                            </div>
                            <div className={`border border-[#595959] rounded-full w-4 h-4  `}>
                            </div>
                            <div className={`border border-[#595959] rounded-full w-4 h-4  `}>
                            </div>
                        </div>
                    }

                    {/* Premium3 */}
                    {SkillsSettingInfoGraphic === 'Premium3' &&
                        <div className={`flex my-4 space-x-4 cursor-pointer SkillsInfoDiv`}>
                            <div className={`border-4 border-[#BDBDBD] rounded-full w-6 h-6 `}>
                            </div>
                            <div className={`border-4 border-[#BDBDBD] rounded-full w-6 h-6  `}>
                            </div>
                            <div className={`border-4 border-[#BDBDBD] rounded-full w-6 h-6  `}>
                            </div>
                            <div className={`border-4 border-[#BDBDBD] rounded-full w-6 h-6  `}>
                            </div>
                            <div className={`border-4 border-[#BDBDBD] rounded-full w-6 h-6  `}>
                            </div>
                        </div>
                    }

                    {/* Premium4 */}
                    {SkillsSettingInfoGraphic === 'Premium4' &&
                        <div className={`flex my-4 space-x-4 cursor-pointer SkillsInfoDiv`}>
                            <div className={`border border-[#BDBDBD] rounded-md w-6 h-6 `}>
                            </div>
                            <div className={`border border-[#BDBDBD] rounded-md w-6 h-6  `}>
                            </div>
                            <div className={`border border-[#BDBDBD] rounded-md w-6 h-6  `}>
                            </div>
                            <div className={`border border-[#BDBDBD] rounded-md w-6 h-6  `}>
                            </div>
                            <div className={`border border-[#BDBDBD] rounded-md w-6 h-6  `}>
                            </div>
                        </div>
                    }


                </div>
            </div>
        </div>)
}



export default function Skills() {
    const { Icon, SkillsCompArray, setSkillsCompArray, ThemeColor, SkillsSettingInfoGraphic } = useContext(ComponentListContext)

    return (
        <div key='skills'>
            <div className=' border-b-2 border-b-black h-28 ml-6 p-5 mb-5 '>
                <div className='flex space-x-6 relative right-5 h-20 w-96 skills'>
                    {Icon && <span className='relative left-3'><SkillSvg></SkillSvg></span>
                    }
                    <input type="text" defaultValue='SKILLS' className={`text-${ThemeColor} text-[32px] font-[600] outline-none w-[400px] `} />
                </div>
            </div>
            <div className={`${SkillsSettingInfoGraphic === 'None' || SkillsSettingInfoGraphic === 'Highlighted' ? 'flex ' : ''} max-w-[90%]  `} >
                {SkillsCompArray.map((data) => {
                    return (
                        data
                    )
                })}
            </div>


        </div>)
}
