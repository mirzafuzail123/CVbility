import React, { useState } from 'react'
import BrandLogo from '../assets/BrandLogo'
import Menu from '../assets/Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faPenToSquare, faDownload } from '@fortawesome/free-solid-svg-icons'
import Add from '../assets/Add'
import { Link } from 'react-router-dom'
import e1 from '../assets/e1.png'
import UpgradeNotification from './UpgradeNotification'
export default function Mydocument() {

    const list = [
        {
            'id': 1,
            'name': 'My Resume',
            'image': e1,
            'date': 'Modified 8/12/2022',

        },
        {
            'id': 2,
            'name': 'My Resume2',
            'image': e1,
            'date': 'Modified 8/12/2022',

        },
        {
            'id': 3,
            'name': 'My Resume2',
            'image': e1,
            'date': 'Modified 8/12/2022',

        },
        {
            'id': 4,
            'name': 'My Resume',
            'image': e1,
            'date': 'Modified 8/12/2022',

        },
        {
            'id': 5,
            'name': 'My Resume',
            'image': e1,
            'date': 'Modified 8/12/2022',

        },
    ]

    const [menu, setmenu] = useState(false)

    const handleOpenMenu = (e) => {
        const id = e.currentTarget.getAttribute('data-column')
        if (menu === false) {
            setmenu(true)
            document.getElementById(id).classList.replace('h-[19rem]', 'h-[17rem]')
            document.getElementById(`div${id}`).classList.remove('hidden')
        }
        else {
            setmenu(false)
            document.getElementById(id).classList.replace('h-[17rem]', 'h-[19rem]')
            document.getElementById(`div${id}`).classList.add('hidden')

        }
    }

    return (

        <>
            <div className='mt-6 max-w-7xl  mx-auto'>
                <nav className='flex justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 '>
                    <div className='mr-5 cursor-pointer'>
                        <Link to='/'><BrandLogo></BrandLogo></Link>
                    </div>

                    <div className='bg-[#FBFCFF] rounded-md '>
                        <button className='bg-primary text-white rounded-md p-2 text-sm'>Resume</button>
                        <button className=' text-[#A8B0B9] rounded-md p-2 text-sm'>Cover Letter</button>
                    </div>

                    <div className='flex-col cursor-pointer'>
                        <Menu></Menu>
                    </div>
                </nav>

                <div className='flex flex-col mt-20 lg:mx-32 md:mx-16 sm:mx-5 mb-20 '>

                    <div className='flex  justify-end lg:space-x-5 sm:space-x-2'>
                        <p>Document Created: <span className='text-primary2'>2/10</span></p>
                        <p>Sort: <span className='text-primary2'>Date</span></p>
                    </div>

                    <div className='mt-12 mb-6 sm:mx-auto md:mx-auto lg:mx-auto'>
                        <div className=' lg:gap-10 sm:space-y-4 md:space-y-4 lg:space-y-0 grid lg:grid-cols-3 '>

                            <div>
                                <Link to='/create'><div className=' w-64 h-[24rem] border border-gray-400 rounded-md cursor-pointer transform transition  duration-500 hover:scale-110 '>
                                    <div className='bg-primary2 rounded-full w-10 h-10 m-auto mt-28 item-center flex flex-col'>
                                        <span ><FontAwesomeIcon icon={faAdd} className='p-[0.80rem] text-white'></FontAwesomeIcon></span>
                                        <p className='-ml-2'><span >Create</span><br />
                                            Resume/CV</p>
                                    </div>
                                </div></Link>
                            </div>

                            {/* Card */}
                            {list.map((item) => {
                                return (
                                    <div class="max-w-[16rem] max-h-[24rem] bg-white border border-gray-400 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
                                        <a href="#">
                                            <img id={item.id} class={`rounded-t-lg  h-[19rem] w-[16rem]  `} src={item.image} alt="" />
                                        </a>

                                        <div className='bg-[#FBFCFF] h-full flex justify-between'>
                                            <div class="p-3 flex flex-col ">
                                                <p className='text-start text-black font-semibold'>{item.name}</p>
                                                <p className='text-start text-[#070F1880] text-[12px]'>{item.date}</p>
                                                <div id={`div${item.id}`} className={`hidden flex space-x-2 mt-3 `}>
                                                    <FontAwesomeIcon className='text-primary' icon={faPenToSquare}></FontAwesomeIcon>
                                                    <FontAwesomeIcon className='text-primary' icon={faDownload}></FontAwesomeIcon>
                                                </div>
                                            </div>

                                            <div className='rounded-full h-8 w-8 border border-primary m-2 cursor-pointer ' data-column={item.id} onClick={handleOpenMenu} >
                                                <span className='ml-2 text-primary'>...</span>
                                            </div>
                                        </div>

                                    </div>)
                            })}

                            {/* end Card */}


                        </div>

                    </div>

                </div>
            </div>
            <div>
                <UpgradeNotification></UpgradeNotification>
            </div>
        </>
    )
}
