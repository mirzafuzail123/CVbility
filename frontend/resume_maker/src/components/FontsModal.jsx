import React, { useRef, useEffect } from 'react'

export default function FontsModal(props) {
    const { showFontModal, setshowFontModal } = props
    const fontModalRef = useRef()
    useEffect(() => {
        let handler = (e) => {
            if (fontModalRef.current && !fontModalRef.current.contains(e.target)) {

                setshowFontModal(false)
            }
        }
        document.addEventListener('mousedown', handler)


    })
    return (
        showFontModal ? <>
            <div className=' flex flex-col absolute space-y-5 -left-14 mt-20 bubbleTop w-[500px] h-[275px] after:left-[20%]  inset-0 z-50 outline-none focus:outline-none' ref={fontModalRef}>
                <div className='flex space-x-14 pt-6 px-6 pb-3  '>
                    {/* Free */}
                    <div className='flex flex-col space-y-4'>
                        <h1 className='text-black text-sm font-semibold '>Free</h1>
                        <ul className='space-y-5'>
                            <li className='text-black text-sm cursor-pointer hover:text-primary'>Ubuntu</li>
                            <li className='text-black text-sm cursor-pointer hover:text-primary'>Raleway</li>
                            <li className='text-black text-sm cursor-pointer hover:text-primary'>Roboto</li>
                        </ul>
                    </div>

                    {/* Premium */}
                    <div className='flex flex-col space-y-4'>
                        <h1 className='text-black text-sm font-semibold relative '>Premium</h1>
                        <div className='flex space-x-10'>
                            <ul className='space-y-5'>
                                <li className='text-gray-600 text-sm cursor-pointer'>Hind</li>
                                <li className='text-gray-600 text-sm cursor-pointer'>Lora</li>
                                <li className='text-gray-600 text-sm cursor-pointer'>Rokkit</li>
                            </ul>

                            <ul className='space-y-5'>
                                <li className='text-gray-600 text-sm cursor-pointer'>Overpass</li>
                                <li className='text-gray-600 text-sm cursor-pointer'>Quick Sand</li>
                                <li className='text-gray-600 text-sm cursor-pointer'>Lusitana</li>
                            </ul>

                            <ul className='space-y-5'>
                                <li className='text-gray-600 text-sm cursor-pointer'>Merriweather </li>
                                <li className='text-gray-600 text-sm cursor-pointer'>Merriweather Sans</li>
                                <li className='text-gray-600 text-sm cursor-pointer'>Cormorant Garamond</li>
                            </ul>


                        </div>

                    </div>

                </div>
                <div className='flex flex-col px-3 space-y-3 '>
                    <h1 className='text-black text-sm text-start ml-5 font-semibold '>Size</h1>
                    <div className='flex space-x-10 ml-5'>
                        <h1 className='text-black cursor-pointer text-sm hover:text-primary'>Small</h1>
                        <h1 className='text-black cursor-pointer text-sm hover:text-primary'>Medium</h1>
                        <h1 className='text-black cursor-pointer text-sm hover:text-primary'>Large</h1>
                    </div>
                </div>
            </div>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </> : null
    )
}
