import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import BrandLogo from '../assets/BrandLogo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faBold, faItalic, faUnderline, faUndo, faRedo, faAngleLeft, faAngleRight, faGlobe, faAngleDown, faSun, faMoon, faLadderWater } from '@fortawesome/free-solid-svg-icons'
import Theme from '../assets/Theme'
import Font from '../assets/Font'
import Menu from '../assets/Menu'
import Language from '../assets/Language'
import Layout from '../assets/Layout'
import Settings from '../assets/Settings'
import Menu2 from '../assets/Menu2'
import Attachment from '../assets/Attachment'
import Menu3 from '../assets/Menu3'
import BigLine from '../assets/BigLine'
import SmallLine from '../assets/SmallLine'
import Optimizer from '../assets/Optimizer'
import Template1 from './Template1'
import FontsModal from './FontsModal'
import LayoutModal from './LayoutModal'
import ThemeModal from './ThemeModal'
import GeneralSettingsModal from './GeneralSettingsModal'
import EngModal from './EngModal'
import ComponentListContext from '../context/ComponentListContext'
export default function CreateCV() {
    const [darkMode, setdarkMode] = useState(false)
    const [showFontModal, setshowFontModal] = useState(false)
    const [showLayoutModal, setshowLayoutModal] = useState(false)
    const [showThemeModal, setshowThemeModal] = useState(false)
    const [showGeneralSettingsModal, setshowGeneralSettingsModal] = useState(false)
    const [showEngModal, setshowEngModal] = useState(false)
    const { Icon, setIcon } = useContext(ComponentListContext)
    return (

        <div className={`${darkMode ? 'bg-[#313B47]' : 'bg-[#EEEEEE] '} h-[200rem]  sm:w-[70rem] md:w-[70rem] lg:w-full`}>

            <nav className='p-6 flex justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 '>
                <div className='mr-5 cursor-pointer'>
                    <Link to='/'><BrandLogo></BrandLogo></Link>
                </div>

                <div className={`${darkMode ? 'bg-[#425061]' : 'bg-white '} rounded-lg w-[48rem] h-16 `}>
                    <div className='items-center flex  space-x-6 mx-auto p-2 px-5'>

                        {/* Font */}
                        <div className='flex flex-col  relative  ' >
                            <span className='flex cursor-pointer' onClick={() => setshowFontModal(true)}>
                                <Font></Font>
                                <button className=' text-[#A8B0B9] rounded-md p-2 text-md hover:text-primary2 '> Font</button>
                            </span>
                            <FontsModal showFontModal={showFontModal} setshowFontModal={setshowFontModal} ></FontsModal>

                        </div>

                        {/* Layout */}
                        <div className='relative'>
                            <span className='flex cursor-pointer' onClick={() => setshowLayoutModal(true)}>
                                <Layout></Layout>
                                <button className=' text-[#A8B0B9] rounded-md p-2 text-md hover:text-primary2 '> Layout</button>
                            </span>
                            <LayoutModal showLayoutModal={showLayoutModal} setshowLayoutModal={setshowLayoutModal} ></LayoutModal>
                        </div>

                        <div className='relative'>
                            <span className='flex cursor-pointer ' onClick={() => setshowThemeModal(true)}>
                                <Theme></Theme>
                                <button className=' text-[#A8B0B9] rounded-md p-2 text-md hover:text-primary2 '> Theme</button>
                            </span>
                            <ThemeModal showThemeModal={showThemeModal} setshowThemeModal={setshowThemeModal}></ThemeModal>
                        </div>

                        <div className='relative'>
                            <span className='flex cursor-pointer' onClick={() => setshowGeneralSettingsModal(true)}>
                                <Settings></Settings>
                                <button className=' text-[#A8B0B9] rounded-md p-2 text-md hover:text-primary2 '> Settings</button>
                                <GeneralSettingsModal showGeneralSettingsModal={showGeneralSettingsModal} setshowGeneralSettingsModal={setshowGeneralSettingsModal} ></GeneralSettingsModal>
                            </span>
                        </div>

                        <div className='relative'>
                            <span className='flex cursor-pointer  ' onClick={() => setshowEngModal(true)}>
                                <FontAwesomeIcon icon={faGlobe} className='text-[#A8B0B9] mt-3'></FontAwesomeIcon>
                                <button className=' text-[#A8B0B9] rounded-md p-2 text-md  hover:text-primary2'> Eng</button>
                                <FontAwesomeIcon icon={faAngleDown} className='text-[#A8B0B9] mt-3'></FontAwesomeIcon>
                            </span>
                            <EngModal showEngModal={showEngModal} setshowEngModal={setshowEngModal} ></EngModal>
                        </div>

                        <button className=' bg-primary text-white rounded-lg py-3 px-12 font-semibold text-sm'><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon> Dowload</button>
                    </div>
                </div>
                <div>
                    <Link to='/mydocument'><button className='text-[#A8B0B9] border border-[#A8B0B9] py-2 px-2 rounded-md cursor-pointer hover:border-black hover:text-black'>My document</button></Link>
                </div>

                <div className='flex-col cursor-pointer'>
                    <Menu></Menu>
                </div>

            </nav>



            <div className={`p-6  h-16 w-[38rem] flex justify-between px-4 mx-auto lg:max-w-5xl md:items-center md:flex md:px-8 ${darkMode ? 'bg-[#425061]' : 'bg-[white]'} rounded-lg`} >
                <span className='cursor-pointer'><Menu2></Menu2></span>
                <span className='cursor-pointer'><Menu3></Menu3></span>
                <FontAwesomeIcon icon={faBold} className='text-[#A8B0B9] text-lg cursor-pointer hover:text-primary2'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faItalic} className='text-[#A8B0B9] text-lg cursor-pointer hover:text-primary2'  ></FontAwesomeIcon>
                <FontAwesomeIcon icon={faUnderline} className='text-[#A8B0B9] text-lg cursor-pointer hover:text-primary2'></FontAwesomeIcon>
                <span className='cursor-pointer hover:text-primary2'><Attachment></Attachment></span>
                <FontAwesomeIcon icon={faUndo} className='text-[#A8B0B9] text-lg cursor-pointer hover:text-primary2'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faRedo} className='text-[#A8B0B9] text-lg cursor-pointer hover:text-primary2'></FontAwesomeIcon>
                <button className=' bg-primary text-white rounded-lg py-3 px-10 font-semibold text-sm'>Generate Text</button>
            </div>

            <div className='flex justify-center  lg:space-x-64 sm:space-x-20 md:space-x-24 mt-16 '>
                <h1 className={`${darkMode ? 'text-[white]' : 'text-black'} text-xl font-bold relative left-7`}>My Resume</h1>
                <div className={`${darkMode ? 'bg-[#425061]' : 'bg-[white]'} text-white w-64 h-12 rounded-lg  relative lg:left-20 sm:left-10 md:left-10 flex space-x-2 justify-center py-3 `}>
                    <span><FontAwesomeIcon className='text-black cursor-pointer mx-2' icon={faAngleLeft}></FontAwesomeIcon></span>
                    <span className='cursor-pointer'><SmallLine></SmallLine></span>
                    <span className='cursor-pointer'><SmallLine></SmallLine></span>
                    <span className='cursor-pointer'><SmallLine></SmallLine></span>
                    <span className='cursor-pointer'><SmallLine></SmallLine></span>
                    <span className='cursor-pointer'><SmallLine></SmallLine></span>
                    <span className='cursor-pointer'><SmallLine></SmallLine></span>
                    <span className='cursor-pointer'><BigLine></BigLine></span>
                    <span className='cursor-pointer'><SmallLine></SmallLine></span>
                    <span className='cursor-pointer'><SmallLine></SmallLine></span>
                    <span className='cursor-pointer'><SmallLine></SmallLine></span>
                    <span className='cursor-pointer'><SmallLine></SmallLine></span>
                    <span className='cursor-pointer'><SmallLine></SmallLine></span>
                    <span className='cursor-pointer'><SmallLine></SmallLine></span>

                    <span><FontAwesomeIcon className='text-black cursor-pointer mx-2' icon={faAngleRight}></FontAwesomeIcon></span>
                </div>

                <div className={`${darkMode ? 'bg-[#425061]' : 'bg-[white]'} text-white w-80 flex h-12 rounded-lg`}>

                    <div className='flex'>
                        <span className='relative left-5'><Optimizer></Optimizer></span>
                        <h1 className={`${darkMode ? 'text-[white]' : 'text-primary2'} ml-8 mt-2 text-[16px]`}>Optimizer</h1>
                        <label className="inline-flex relative items-center mb-5 cursor-pointer ml-3 mt-4">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-9 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0.3px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>

                    <div className='mx-4 pt-1'>
                        <BigLine></BigLine>
                    </div>

                    <div className='flex'>
                        <h1 className={`${darkMode ? 'text-[white]' : 'text-primary2'}  mt-2 text-[16px]`}>Icons</h1>
                        <label className="inline-flex relative items-center mb-5 cursor-pointer ml-3 mt-4">
                            <input type="checkbox" value="" checked={Icon} className="sr-only peer" onClick={() => Icon ? setIcon(false) : setIcon(true)} />
                            <div className="w-9 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0.3px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>

                </div>
            </div>

            <div className='flex justify-center'>
                <Template1></Template1>
                <div className='flex flex-col space-y-2 mt-96 relative '>
                    <button className={`${darkMode ? 'bg-[#425061]' : 'bg-primary'} py-3 px-5 rounded-lg`} onClick={() => setdarkMode(false)} ><FontAwesomeIcon className={`${darkMode ? 'text-[#A8B0B9]' : 'text-white'}`} icon={faSun}></FontAwesomeIcon></button>
                    <button className={`${!darkMode ? 'bg-white' : 'bg-primary'} py-3 px-5 rounded-lg`} onClick={() => setdarkMode(true)}><FontAwesomeIcon className={`${!darkMode ? 'text-[#A8B0B9]' : 'text-white'}`} icon={faMoon}></FontAwesomeIcon></button>
                </div>
            </div>

        </div >

    )
}
