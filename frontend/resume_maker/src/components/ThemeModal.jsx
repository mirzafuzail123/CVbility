import React, { useRef, useEffect, useContext } from 'react'
import ComponentListContext from '../context/ComponentListContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
export default function ThemeModal(props) {
    const { showThemeModal, setshowThemeModal } = props
    const ThemeModalRef = useRef()
    const { ThemeColor, setThemeColor } = useContext(ComponentListContext)
    useEffect(() => {
        let handler = (e) => {

            if (ThemeModalRef.current && !ThemeModalRef.current.contains(e.target)) {

                setshowThemeModal(false)
            }


        }
        document.addEventListener('mousedown', handler)


    })
    return (
        showThemeModal ? <>
            <div className=' flex flex-col absolute space-y-5 -left-14 mt-20 bubbleTop w-[400px] h-[300px] after:left-[25%]  inset-0 z-50 outline-none focus:outline-none' ref={ThemeModalRef}>

                <div className='flex space-x-6 justify-center mt-10  '>
                    <button className={`bg-primary text-sm py-2 px-4  text-white rounded-lg cursor-pointer`}>Color</button>
                    <button className={`text-[#A8B0B9] text-sm  py-2 px-4 cursor-pointer rounded-lg`}>Background</button>
                </div>

                <div className='flex justify-center space-x-5'>
                    <h1 className='text-sm text-black font-bold'>Free</h1>
                    <label class="inline-flex relative items-center mb-5 cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                    <h1 className='text-sm text-black font-bold'>Premium</h1>
                </div>

                <div className='flex justify-center space-x-3 mx-5 mb-5'>

                    {/* Professional */}
                    <div className='flex flex-col border border-gray-500 w-1/2 h-24 rounded-md space-y-2'>

                        <div className='flex justify-center space-x-5 my-2'>
                            {/* Professional1 */}
                            <div className='border-2 border-black bg-Professional1 rounded-full h-8 w-8 cursor-pointer' onClick={() => setThemeColor('Professional1')}>
                                <FontAwesomeIcon className={`${ThemeColor === 'Professional1' ? '' : 'hidden'}  text-white mx-[0.35rem] my-[0.35rem]`} icon={faCheck}></FontAwesomeIcon>
                            </div>
                            {/* Professional2 */}
                            <div className='border-2 border-black bg-Professional2 rounded-full h-8 w-8 cursor-pointer' onClick={() => setThemeColor('Professional2')}>
                                <FontAwesomeIcon className={`${ThemeColor === 'Professional2' ? '' : 'hidden'} text-white mx-[0.35rem] my-[0.35rem]`} icon={faCheck}></FontAwesomeIcon>
                            </div>
                            {/* Professional3 */}
                            <div className='border-2 border-black bg-Professional3 rounded-full h-8 w-8 cursor-pointer' onClick={() => setThemeColor('Professional3')}>
                                <FontAwesomeIcon className={`${ThemeColor === 'Professional3' ? '' : 'hidden'} text-white mx-[0.35rem] my-[0.35rem]`} icon={faCheck}></FontAwesomeIcon>
                            </div>
                        </div>

                        <div className='flex justify-center space-x-5 my-2'>
                            {/* Professional4 */}
                            <div className='border-2 border-black bg-Professional4 rounded-full h-8 w-8 cursor-pointer' onClick={() => setThemeColor('Professional4')}>
                                <FontAwesomeIcon className={`${ThemeColor === 'Professional4' ? '' : 'hidden'}  text-white mx-[0.35rem] my-[0.35rem]`} icon={faCheck}></FontAwesomeIcon>
                            </div>
                            {/* Professional5 */}
                            <div className='border-2 border-black bg-Professional5 rounded-full h-8 w-8 cursor-pointer' onClick={() => setThemeColor('Professional5')}>
                                <FontAwesomeIcon className={`${ThemeColor === 'Professional5' ? '' : 'hidden'} text-white mx-[0.35rem] my-[0.35rem]`} icon={faCheck}></FontAwesomeIcon>
                            </div>
                            {/* Professional6 */}
                            <div className='border-2 border-black bg-Professional6 rounded-full h-8 w-8 cursor-pointer' onClick={() => setThemeColor('Professional6')}>
                                <FontAwesomeIcon className={`${ThemeColor === 'Professional6' ? '' : 'hidden'} text-white mx-[0.35rem] my-[0.35rem]`} icon={faCheck}></FontAwesomeIcon>
                            </div>
                        </div>

                    </div>

                    {/* Fancy */}
                    <div className='flex flex-col border border-gray-500 w-1/2 h-24 rounded-md space-y-2'>

                        <div className='flex justify-center space-x-5 my-2'>
                            {/* Fancy1 */}
                            <div className='border-2 border-black bg-Fancy1 rounded-full h-8 w-8 cursor-pointer' onClick={() => setThemeColor('Fancy1')}>
                                <FontAwesomeIcon className={`${ThemeColor === 'Fancy1' ? '' : 'hidden'}  text-white mx-[0.35rem] my-[0.35rem]`} icon={faCheck}></FontAwesomeIcon>
                            </div>
                            {/* Fancy2 */}
                            <div className='border-2 border-black bg-Fancy2 rounded-full h-8 w-8 cursor-pointer' onClick={() => setThemeColor('Fancy2')}>
                                <FontAwesomeIcon className={`${ThemeColor === 'Fancy2' ? '' : 'hidden'}  text-white mx-[0.35rem] my-[0.35rem]`} icon={faCheck}></FontAwesomeIcon>
                            </div>
                            {/* Fancy3 */}
                            <div className='border-2 border-black bg-Fancy3 rounded-full h-8 w-8 cursor-pointer' onClick={() => setThemeColor('Fancy3')}>
                                <FontAwesomeIcon className={`${ThemeColor === 'Fancy3' ? '' : 'hidden'}  text-white mx-[0.35rem] my-[0.35rem]`} icon={faCheck}></FontAwesomeIcon>
                            </div>
                        </div>

                        <div className='flex justify-center space-x-5 my-2'>
                            {/* Fancy4 */}
                            <div className='border-2 border-black bg-Fancy4 rounded-full h-8 w-8 cursor-pointer' onClick={() => setThemeColor('Fancy4')}>
                                <FontAwesomeIcon className={`${ThemeColor === 'Fancy4' ? '' : 'hidden'}  text-white mx-[0.35rem] my-[0.35rem]`} icon={faCheck}></FontAwesomeIcon>
                            </div>
                            {/* Fancy5 */}
                            <div className='border-2 border-black bg-Fancy5 rounded-full h-8 w-8 cursor-pointer' onClick={() => setThemeColor('Fancy5')}>
                                <FontAwesomeIcon className={`${ThemeColor === 'Fancy5' ? '' : 'hidden'}  text-white mx-[0.35rem] my-[0.35rem]`} icon={faCheck}></FontAwesomeIcon>
                            </div>
                            {/* Fancy6 */}
                            <div className='border-2 border-black bg-Fancy6 rounded-full h-8 w-8 cursor-pointer' onClick={() => setThemeColor('Fancy6')}>
                                <FontAwesomeIcon className={`${ThemeColor === 'Fancy6' ? '' : 'hidden'}  text-white mx-[0.35rem] my-[0.35rem]`} icon={faCheck}></FontAwesomeIcon>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='flex justify-between mx-auto space-x-32 relative bottom-3'>
                    <h1 className='text-black font-bold text-sm '>Professional</h1>
                    <h1 className='text-black font-bold text-sm pr-6'>Fancy</h1>

                </div>

            </div>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>

            {/* Dummy Div */}
            <div className='hidden'>
                <h1 className='text-Professional1'></h1>
                <h1 className='text-Professional2'></h1>
                <h1 className='text-Professional3'></h1>
                <h1 className='text-Professional4'></h1>
                <h1 className='text-Professional5'></h1>
                <h1 className='text-Professional6'></h1>
                <h1 className='text-Fancy1'></h1>
                <h1 className='text-Fancy2'></h1>
                <h1 className='text-Fancy3'></h1>
                <h1 className='text-Fancy4'></h1>
                <h1 className='text-Fancy5'></h1>
                <h1 className='text-Fancy6'></h1>
            </div>
        </> : null
    )
}
