import React, { useState, useEffect, useContext } from 'react'
import TemplateContext from '../context/TemplateContext';
import BrandLogo from '../assets/BrandLogo';
import { Link, useLocation } from 'react-router-dom';
import Modal from './LoginModal';
export default function Navbar() {

    const data = useContext(TemplateContext)
    const location = useLocation()
    const [navbar, setNavbar] = useState(false);
    const [modal, setmodal] = useState(false)
    const [register, setregister] = useState(true)
    const [user_data, setuser_data] = useState(null)
    // const [data, setdata] = useState('')


    useEffect(() => {
        setuser_data(data.data ? data.data : JSON.parse(localStorage.getItem('user_data')))

    }, [data])


    return (
        (location.pathname === '/' || location.pathname === '/coverletter' || location.pathname == '/cv') && <>
            <nav className="">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link to="/">
                                <h2 className="text-2xl font-bold text-black"><BrandLogo></BrandLogo></h2>
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-black"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"

                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-black"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center lg:ml-80 space-y-8 md:flex md:space-x-5 md:space-y-0">
                                <li  >
                                    <Link to="/" className={`${location.pathname === '/' ? 'text-primary' : 'text-black'} hover:text-primary2 text-[16px]`}>Resume Templates</Link>
                                </li>
                                <li >
                                    <Link to="cv" className={`${location.pathname === '/cv/' ? 'text-primary' : 'text-black'} hover:text-primary2 text-[16px]`}>CV Templates</Link>
                                </li>
                                <li>
                                    <Link to="coverletter" className={`${location.pathname === '/coverletter/' ? 'text-primary' : 'text-black'} hover:text-primary2 text-[16px]`}>Cover Letter</Link>
                                </li>
                                <li className="text-black hover:text-primary text-[16px]  ">
                                    <Link to="">Pricing</Link>
                                </li>
                            </ul>

                            <div className="mt-3 space-y-2 lg:hidden md:hidden ">
                                {!user_data ?
                                    <Link
                                        to=""
                                        className="px-4 py-2 text-primary border border-primary bg-white rounded-md shadow hover:bg-primary hover:text-white "
                                        onClick={() => {
                                            setmodal(true)
                                            setregister(false)
                                        }}
                                    >
                                        Login
                                    </Link> :
                                    <Link
                                        to="mydocument"
                                        className="px-4 py-2 text-primary border border-primary bg-white rounded-md shadow hover:bg-primary hover:text-white "
                                    >
                                        My document
                                    </Link>
                                }

                                {!user_data ?
                                    <Link
                                        to=""
                                        className="px-4 py-2 text-primary border border-primary bg-white rounded-md shadow hover:bg-primary hover:text-white "
                                        onClick={() => {
                                            setmodal(true)
                                            setregister(true)
                                        }}
                                    >
                                        Register
                                    </Link> :
                                    <Link
                                        to=""
                                        className="px-4 py-2 text-primary border border-primary bg-white rounded-md shadow hover:bg-primary hover:text-white "
                                    >
                                        Account
                                    </Link>
                                }

                            </div>
                        </div>
                    </div>
                    <div className="hidden space-x-2 md:mx-4 sm:mx-0 lg:mx-0 md:inline-block">
                        {!user_data ?
                            <Link
                                to=""
                                className="px-4 py-2 text-primary border border-primary bg-white rounded-md shadow hover:bg-primary hover:text-white "
                                onClick={() => {
                                    setmodal(true)
                                    setregister(false)
                                }}
                            >
                                Login
                            </Link> :
                            <Link
                                to="mydocument"
                                className="px-4 py-2 text-primary border border-primary bg-white rounded-md shadow hover:bg-primary hover:text-white "
                            >
                                My document
                            </Link>
                        }

                        {!user_data ?
                            <Link
                                to=""
                                className="px-4 py-2 text-primary border border-primary bg-white rounded-md shadow hover:bg-primary hover:text-white "
                                onClick={() => {
                                    setmodal(true)
                                    setregister(true)
                                }}
                            >
                                Register
                            </Link> :
                            <Link
                                to=""
                                className="px-4 py-2 text-primary border border-primary bg-white rounded-md shadow hover:bg-primary hover:text-white "
                            >
                                Account
                            </Link>
                        }

                    </div>
                </div>
            </nav>

            <Modal modal={modal} setmodal={setmodal} register={register} setregister={setregister}></Modal>
        </>


    )
}
