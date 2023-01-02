import React, { useState, useRef, useEffect } from 'react'
import Avatar from '../assets/Avatar.png'
import ImageModal from './ImageModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
import Settings from '../assets/Settings'
import Rectangle48 from '../assets/Rectangle48'
import Rectangle49 from '../assets/Rectangle49'
export default function ProfileImage() {
    const [ShowModal, setShowModal] = useState(false)
    const [image, setimage] = useState(Avatar)
    const [imageSetting, setimageSetting] = useState(false)
    const imgSettingRef = useRef()

    const [ImageBorder, setImageBorder] = useState('dpFirst')
    const [ImageOutline, setImageOutline] = useState('dpFirstBorder')

    useEffect(() => {
        let handler = (e) => {
            if (imgSettingRef.current && !imgSettingRef.current.contains(e.target)) {
                document.getElementById('dp').classList.remove('border-2', 'border-primary', 'border-dashed')
                document.getElementById('uploadbtn').classList.add('hidden')
                setimageSetting(false)

            }


        }
        document.addEventListener('mousedown', handler)


    })
    const handleDpclick = () => {
        const x = document.getElementById('dp')
        x.classList.add('border-2', 'border-primary', 'border-dashed')
    }


    const handleDeleteImage = () => {
        document.getElementById('dp').classList.remove('border-2', 'border-primary', 'border-dashed')

        if (image !== Avatar) {
            setimage(Avatar)
            document.getElementById('uploadbtn').classList.add('hidden')

        }
        else {
            document.getElementById('uploadbtn').classList.add('hidden')
        }
    }
    return (
        <div>
            <div className={`${ImageOutline}`} id='dp' onClick={() => handleDpclick()}>
                <img src={image} className={`${ImageBorder}  cursor-pointer mx-auto my-1 `} alt="" onClick={() => document.getElementById('uploadbtn').classList.remove('hidden')} />
            </div>

            <div className='hidden flex bg-[#425061] relative left-5 bottom-12 w-48 h-10 rounded-md' id='uploadbtn' >
                <span className='py-2 pl-2 cursor-pointer '><FontAwesomeIcon className='text-white text-lg' icon={faUpload} onClick={() => {
                    setShowModal(true)
                    document.getElementById('uploadbtn').classList.add('hidden')
                    document.getElementById('dp').classList.remove('border-2', 'border-primary', 'border-dashed')

                }}></FontAwesomeIcon></span>
                <h1 className='text-white text-sm font-[400] p-[0.6rem] cursor-pointer' onClick={() => {
                    setShowModal(true)
                    document.getElementById('uploadbtn').classList.add('hidden')
                    document.getElementById('dp').classList.remove('border-2', 'border-primary', 'border-dashed')
                }}>Upload Photo</h1>
                <span className=' cursor-pointer relative' onClick={() => setimageSetting(true)}><Settings></Settings></span>
                <span className='p-2 cursor-pointer' onClick={handleDeleteImage}><FontAwesomeIcon className='text-white text-lg' icon={faTrash}></FontAwesomeIcon></span>
            </div>

            {imageSetting ?
                <div className='relative bottom-7 left-[4.3rem]' >
                    <div className='flex flex-col absolute bubbleTop w-[400px] h-[120px] after:left-[20%] inset-0 z-50 outline-none focus:outline-none' ref={imgSettingRef} >

                        <div className='flex space-x-6 pt-6 px-6 pb-3  '>
                            <h1 className='text-black text-sm font-semibold '>Free</h1>
                            <h1 className='text-black text-sm font-semibold '>Premium</h1>
                        </div>
                        <div className='flex px-3 space-x-7'>
                            <img src={Avatar} className='rounded-full h-10 w-10 bg-[#E2E2E2]  cursor-pointer' alt="" onClick={() => {
                                setImageBorder('dpFirst')
                                setImageOutline('dpFirstBorder')
                            }} />
                            <span className='cursor-pointer' onClick={() => {
                                setImageBorder('dpSecond')
                                setImageOutline('dpSecondBorder')
                            }}><Rectangle48></Rectangle48></span>
                            <span className='cursor-pointer' onClick={() => {
                                setImageBorder('dpThird')
                                setImageOutline('dpThirdBorder')
                            }}><Rectangle49></Rectangle49></span>
                            <img src={Avatar} className='h-10 w-10 bg-[#E2E2E2] cursor-pointer' alt="" onClick={() => {
                                setImageBorder('dpForth')
                                setImageOutline('dpForthBorder')
                            }} />
                            <img src={Avatar} className='rounded-lg w-10 bg-[#E2E2E2] cursor-pointer' alt="" onClick={() => {
                                setImageBorder('dpFifth')
                                setImageOutline('dpFifthBorder')
                            }} />
                        </div>

                    </div>
                    <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>

                </div> : null
            }




            <ImageModal ShowModal={ShowModal} setShowModal={setShowModal} image={image} setimage={setimage} imageBorder={ImageBorder}></ImageModal>

        </div>
    )
}
