import React, { useContext, useEffect, useRef, useState } from 'react'
import ComponentListContext from '../context/ComponentListContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'


export const LanguageComponents = () => {
    const LanProfRef = useRef()
    const [LanProfModal, setLanProfModal] = useState(false)


    const { LanguageSettingInfoGraphic, LanProfCompArray, setLanProfCompArray,
        LanProffirst, setLanProffirst, LanProfsecond, setLanProfsecond, LanProfthird, setLanProfthird, LanProfforth, setLanProfforth,
        LanProffifth, setLanProffifth, Proficiency, setProficiency, } = useContext(ComponentListContext)
    const LanguageRef = useRef()

    const handleLanguageEnterKey = (e) => {
        if (e.key === 'Enter') {
            setLanProfCompArray(LanProfCompArray => [...LanProfCompArray, <LanguageComponents></LanguageComponents>])

        }
    }

    useEffect(() => {
        let handler = (e) => {
            if (LanProfRef.current && !LanProfRef.current.contains(e.target)) {
                setLanProfModal(false)
            }
            if (LanguageRef.current && LanguageRef.current.contains(e.target)) {
                LanguageRef.current.classList.remove('placeholder:text-black')
            }
            if (LanguageRef.current && !LanguageRef.current.contains(e.target)) {
                LanguageRef.current.classList.add('placeholder:text-black')
            }
        }
        document.addEventListener('mousedown', handler)

        // Free1
        if (LanguageSettingInfoGraphic === 'Free1') {
            const div = document.getElementsByClassName('LanInfoDiv')
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
        if (LanguageSettingInfoGraphic === 'Premium1') {
            const div = document.getElementsByClassName('LanInfoDiv')
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
        if (LanguageSettingInfoGraphic === 'Premium2') {
            const div = document.getElementsByClassName('LanInfoDiv')
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
        if (LanguageSettingInfoGraphic === 'Premium3') {
            const div = document.getElementsByClassName('LanInfoDiv')
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
        if (LanguageSettingInfoGraphic === 'Premium4') {
            const div = document.getElementsByClassName('LanInfoDiv')
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
        <div className='flex flex-col' id='languageNewField'>
            <div className='ml-6 pb-3 languageAllFields' id='languageOldField'>
                <input type="text" placeholder='Language' className='text-black text-[24px] font-[500] outline-none placeholder:text-[24px] placeholder:font-[500] placeholder:text-black ' ref={LanguageRef} onKeyDown={(e) => handleLanguageEnterKey(e)} autoFocus />

                {LanguageSettingInfoGraphic === 'None' && <div>
                    <input type="text" readOnly={true} value={Proficiency} className='italic text-black text-[20px] font-[500] outline-none mt-3 cursor-pointer hover:text-primary2 w-96' onClick={() => setLanProfModal(true)} />
                    {LanProfModal && <div className='flex space-x-5 bg-[#425061] w-60 h-10 rounded-md ' ref={LanProfRef}  >
                        <h1 className={`py-2 pl-7 ${Proficiency !== LanProffirst ? 'text-white' : 'text-primary'}  text-sm hover:text-primary cursor-pointer`} onClick={() => setProficiency(LanProffirst)}>1/5</h1>
                        <h1 className={`py-2 ${Proficiency !== LanProfsecond ? 'text-white' : 'text-primary'}  text-sm hover:text-primary cursor-pointer`} onClick={() => setProficiency(LanProfsecond)}>2/5</h1>
                        <h1 className={`py-2 ${Proficiency !== LanProfthird ? 'text-white' : 'text-primary'}  text-sm hover:text-primary cursor-pointer`} onClick={() => setProficiency(LanProfthird)}>3/5</h1>
                        <h1 className={`py-2 ${Proficiency !== LanProfforth ? 'text-white' : 'text-primary'}  text-sm hover:text-primary cursor-pointer`} onClick={() => setProficiency(LanProfforth)}>4/5</h1>
                        <h1 className={`py-2 ${Proficiency !== LanProffifth ? 'text-white' : 'text-primary'}  text-sm hover:text-primary cursor-pointer`} onClick={() => setProficiency(LanProffifth)}>5/5</h1>
                    </div>}
                </div>}

                {/* Free1 */}
                {LanguageSettingInfoGraphic === 'Free1' &&
                    <div className={`flex my-4 space-x-4 cursor-pointer LanInfoDiv`}>
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
                {LanguageSettingInfoGraphic === 'Premium1' &&
                    <div className={`flex my-4 space-x-4 cursor-pointer LanInfoDiv`}>
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
                {LanguageSettingInfoGraphic === 'Premium2' &&
                    <div className={`flex my-4 space-x-4 cursor-pointer LanInfoDiv`}>
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
                {LanguageSettingInfoGraphic === 'Premium3' &&
                    <div className={`flex my-4 space-x-4 cursor-pointer LanInfoDiv`}>
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
                {LanguageSettingInfoGraphic === 'Premium4' &&
                    <div className={`flex my-4 space-x-4 cursor-pointer LanInfoDiv`}>
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
        </div>)
}

export default function Languages() {
    const { Icon, LanProfCompArray, ThemeColor } = useContext(ComponentListContext)

    useEffect(() => {
    })

    return (
        <div key='language'>
            <div className=' border-b-2 border-b-black h-28 ml-6 p-5 '>
                <div className='flex space-x-4 relative right-5 h-20 w-96 language'>
                    {Icon && <span className=''><FontAwesomeIcon className='text-2xl mt-[1.7rem] ml-4' icon={faGlobe}></FontAwesomeIcon></span>
                    }
                    <input type="text" defaultValue='LANGUAGE' className={`text-${ThemeColor} text-[32px] font-[600] outline-none w-[400px] `} />
                </div>
            </div>
            {LanProfCompArray.map((data1) => {
                return (
                    data1
                )
            })}
        </div>)
}
