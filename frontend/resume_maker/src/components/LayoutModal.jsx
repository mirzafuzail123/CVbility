import React, { useRef, useEffect, useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faLock, faTrash, faAdd } from '@fortawesome/free-solid-svg-icons'
import { Student1Col1, Student1Col2 } from '../Layouts/Student1'
import { Student2Col1, Student2Col2 } from '../Layouts/Student2'
import { Student3Col1, Student3Col2 } from '../Layouts/Student3'
import ComponentListContext from '../context/ComponentListContext'
export default function LayoutModal(props) {

    const { showLayoutModal, setshowLayoutModal } = props
    const LayoutModalRef = useRef()
    const [SelectedLayout, setSelectedLayout] = useState('')

    const { List1, List2, setList2, setList1, USFormat, Title, Picture, Summary, setPicture, setTitle, setSummary, setUSFormat } = useContext(ComponentListContext)

    const handleMouseEnter = (SelectedLayout) => {
        const x = document.getElementById(SelectedLayout)
        x.classList.replace('opacity-0', 'opacity-100')
        const y = document.getElementsByClassName(SelectedLayout)
        for (let i of y) {
            i.classList.replace('bg-primary', 'bg-blur')
        }


    }
    const handleMouseLeave = (SelectedLayout) => {
        const x = document.getElementById(SelectedLayout)
        x.classList.replace('opacity-100', 'opacity-0')
        const y = document.getElementsByClassName(SelectedLayout)
        for (let i of y) {
            i.classList.replace('bg-blur', 'bg-primary')
        }

    }

    const OnMouseEnterComp = (id, state) => {
        const x = document.getElementById(id)
        x.classList.replace('bg-primary', 'bg-red-800')
        x.children[0].classList.add('hidden')
        x.children[1].classList.remove('hidden')


    }

    const OnMouseLeaveComp = (id, state) => {
        const x = document.getElementById(id)
        x.classList.replace('bg-red-800', 'bg-primary')
        x.children[0].classList.remove('hidden')
        x.children[1].classList.add('hidden')

    }

    const handleOnClickCol1 = (index, state, sel_list) => {
        let temp_state = [...List1];
        let temp_element = { ...temp_state[index] };
        if (state === 'deletable') {
            sel_list[index].state = 'not_deletable'
            temp_element.display = 'hidden';
            temp_state[index] = temp_element;
            setList1(temp_state);

        }
        if (state === 'not_deletable') {
            sel_list[index].state = 'deletable'
            temp_element.display = 'show';
            temp_state[index] = temp_element;
            setList1(temp_state);
        }

    }

    const handleOnClickCol2 = (index, state, sel_list) => {
        let temp_state = [...List2];
        let temp_element = { ...temp_state[index] };

        if (state === 'deletable') {
            sel_list[index].state = 'not_deletable'
            temp_element.display = 'hidden';
            temp_state[index] = temp_element;
            setList2(temp_state);
        }
        else {
            sel_list[index].state = 'deletable'
            temp_element.display = 'show';
            temp_state[index] = temp_element;
            setList2(temp_state);
        }
    }

    const handleUseLayout = (l1, l2) => {
        const x = document.getElementsByClassName(l1[0].layout)
        for (let i of x) {
            i.classList.replace('bg-blur', 'bg-primary')
        }
        setList1([...l1])
        setList2([...l2])
        setSelectedLayout(l1[0].layout)
    }

    useEffect(() => {


        let handler = (e) => {
            if (LayoutModalRef.current && !LayoutModalRef.current.contains(e.target)) {
                setshowLayoutModal(false)
            }
        }
        document.addEventListener('mousedown', handler)
    },)

    return (
        showLayoutModal ? <>
            <div className=' flex flex-col absolute  -left-64 mt-20 bubbleTop w-[1050px] h-[750px] after:left-[28%]  inset-0 z-50 outline-none focus:outline-none' ref={LayoutModalRef}>
                <div className='flex flex-col space-y-8  py-10'>

                    <div className='flex space-x-6 justify-center  '>
                        <button className={`bg-primary py-2 px-4  text-white rounded-lg cursor-pointer`}>Predefined</button>
                        <button className={`text-[#A8B0B9]  py-2 px-4 cursor-pointer rounded-lg`}>Custom <FontAwesomeIcon className='pl-2' icon={faLock}></FontAwesomeIcon> </button>
                    </div>

                    <div className='flex space-x-6 justify-center'>

                        <div className='flex flex-col space-y-2'>
                            <h1 className={`text-[#A8B0B9] ml-4 cursor-pointer`}>Student</h1>
                            <h1 className={` text-sm text-primary`}>(0 Experience)</h1>
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <h1 className={`text-[#A8B0B9] ml-4 cursor-pointer`}>Graduate</h1>
                            <h1 className={`hidden text-sm text-primary`}>(3 Experience)</h1>
                        </div>                        <div className='flex flex-col space-y-2'>
                            <h1 className={`text-[#A8B0B9] ml-4 cursor-pointer`}>Intermediate</h1>
                            <h1 className={`hidden text-sm text-primary`}>(1-5 Experience)</h1>
                        </div>                        <div className='flex flex-col space-y-2'>
                            <h1 className={`text-[#A8B0B9] ml-4 cursor-pointer`}>Senior</h1>
                            <h1 className={`hidden text-sm text-primary`}>(5+ Experience)</h1>
                        </div>                        <div className='flex flex-col space-y-2'>
                            <h1 className={`text-[#A8B0B9] ml-4 cursor-pointer`}>Freelancer</h1>
                            <h1 className={`hidden text-sm text-primary`}>(Any Experience)</h1>
                        </div>

                    </div>

                    <div className='flex justify-between mx-10'>
                        <div>
                            <input id='USformat' className='' checked={USFormat} type="checkbox" onClick={() => USFormat ? setUSFormat(false) : setUSFormat(true)} />
                            <label htmlFor="USformat" className='text-black mx-3 '>US Letter format</label>
                        </div>

                        <div className='flex space-x-5'>
                            <div>
                                <input id='Title' className='' checked={Title} type="checkbox" onClick={() => Title ? setTitle(false) : setTitle(true)} />
                                <label htmlFor="Title" className='text-black mx-3 '>Title</label>
                            </div>
                            <div>
                                <input id='Summary' className='' checked={Summary} type="checkbox" onClick={() => Summary ? setSummary(false) : setSummary(true)} />
                                <label htmlFor="Summary" className='text-black mx-3 '>Summary</label>
                            </div>
                            <div>
                                <input id='Photo' className='' checked={Picture} type="checkbox" onClick={() => Picture ? setPicture(false) : setPicture(true)} />
                                <label htmlFor="Photo" className='text-black mx-3 '>Photo</label>
                            </div>
                        </div>

                    </div>

                    <div className='flex mx-5 my-3 space-x-16'>
                        {/* Student 1 */}
                        <div className=' relative ' onMouseOver={() => SelectedLayout !== Student1Col1[0].layout ? handleMouseEnter(Student1Col1[0].layout) : null} onMouseOut={() => SelectedLayout !== Student1Col1[0].layout ? handleMouseLeave(Student1Col1[0].layout) : null} >

                            <div className={`flex w-72 h-[26rem] cursor-pointer `}  >
                                {/* Column 1 */}
                                <div className='flex flex-col w-1/2 space-y-1'>
                                    {Student1Col1.map((item, index) => {
                                        return (
                                            <div className={`${item.state === 'deletable' ? 'bg-primary' : 'bg-gray-600'} text-center h-[50%] ${item.layout} `} key={item.id} id={SelectedLayout === item.layout ? item.id : null} onMouseOver={() => SelectedLayout === item.layout ? OnMouseEnterComp(item.id, item.state) : null} onMouseOut={() => SelectedLayout === item.layout ? OnMouseLeaveComp(item.id, item.state) : null} onClick={() => SelectedLayout === item.layout ? handleOnClickCol1(index, item.state, Student1Col1) : null}>
                                                <h1 className='text-white text-sm my-20'>{item.name}</h1>
                                                {item.state === 'deletable' ? <FontAwesomeIcon className='text-white text-lg my-20 hidden' icon={faTrash}></FontAwesomeIcon> : null}
                                                {item.state !== 'deletable' ? <FontAwesomeIcon className='text-white text-lg my-20 hidden' icon={faAdd}></FontAwesomeIcon> : null}
                                            </div>
                                        )
                                    })}
                                </div>

                                {/* Column 2 */}
                                <div className='flex flex-col w-1/2 space-y-1 ml-[0.10rem] '>
                                    {Student1Col2.map((item, index) => {
                                        return (
                                            <div className={`${item.state === 'deletable' ? 'bg-primary' : 'bg-gray-600'} text-center h-[19.3%] ${item.layout} `} key={item.id} id={SelectedLayout === item.layout ? item.id : null} onMouseOver={() => SelectedLayout === item.layout ? OnMouseEnterComp(item.id, item.state) : null} onMouseOut={() => SelectedLayout === item.layout ? OnMouseLeaveComp(item.id, item.state) : null} onClick={() => SelectedLayout === item.layout ? handleOnClickCol2(index, item.state, Student1Col2) : null}>
                                                <h1 className='text-white text-sm my-10'>{item.name}</h1>
                                                {item.state === 'deletable' ? <FontAwesomeIcon className='text-white text-lg my-10 hidden' icon={faTrash}></FontAwesomeIcon> : null}
                                                {item.state !== 'deletable' ? <FontAwesomeIcon className='text-white text-lg my-10 hidden' icon={faAdd}></FontAwesomeIcon> : null}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {SelectedLayout !== Student1Col1[0].layout ? <button className='bg-primary2 py-2 px-2 text-sm text-white rounded-md absolute left-24 bottom-52 opacity-0' id={Student1Col1[0].layout} onClick={() => handleUseLayout(Student1Col1, Student1Col2)}>Use Layout</button> : null}

                        </div>

                        {/* Student 2 */}
                        <div className=' relative ' onMouseOver={() => SelectedLayout !== Student2Col1[0].layout ? handleMouseEnter(Student2Col1[0].layout) : null} onMouseOut={() => SelectedLayout !== Student2Col1[0].layout ? handleMouseLeave(Student2Col1[0].layout) : null} >

                            <div className={`flex w-72 h-[26rem] cursor-pointer `}  >
                                {/* Column 1 */}
                                <div className='flex flex-col w-1/2 space-y-1'>
                                    {Student2Col1.map((item, index) => {
                                        return (
                                            <div className={`${item.state === 'deletable' ? 'bg-primary' : 'bg-gray-600'} text-center h-[32.7%] ${item.layout} `} key={item.id} id={SelectedLayout === item.layout ? item.id : null} onMouseOver={() => SelectedLayout === item.layout ? OnMouseEnterComp(item.id, item.state) : null} onMouseOut={() => SelectedLayout === item.layout ? OnMouseLeaveComp(item.id, item.state) : null} onClick={() => SelectedLayout === item.layout ? handleOnClickCol1(index, item.state, Student2Col1) : null}>
                                                <h1 className='text-white text-sm my-20'>{item.name}</h1>
                                                {item.state === 'deletable' ? <FontAwesomeIcon className='text-white text-lg my-20 hidden' icon={faTrash}></FontAwesomeIcon> : null}
                                                {item.state !== 'deletable' ? <FontAwesomeIcon className='text-white text-lg my-20 hidden' icon={faAdd}></FontAwesomeIcon> : null}
                                            </div>
                                        )
                                    })}
                                </div>

                                {/* Column 2 */}
                                <div className='flex flex-col w-1/2 space-y-1 ml-[0.10rem] '>
                                    {Student2Col2.map((item, index) => {
                                        return (
                                            <div className={`${item.state === 'deletable' ? 'bg-primary' : 'bg-gray-600'} text-center h-[25%] ${item.layout} `} key={item.id} id={SelectedLayout === item.layout ? item.id : null} onMouseOver={() => SelectedLayout === item.layout ? OnMouseEnterComp(item.id, item.state) : null} onMouseOut={() => SelectedLayout === item.layout ? OnMouseLeaveComp(item.id, item.state) : null} onClick={() => SelectedLayout === item.layout ? handleOnClickCol2(index, item.state, Student2Col2) : null}>
                                                <h1 className='text-white text-sm my-10'>{item.name}</h1>
                                                {item.state === 'deletable' ? <FontAwesomeIcon className='text-white text-lg my-10 hidden' icon={faTrash}></FontAwesomeIcon> : null}
                                                {item.state !== 'deletable' ? <FontAwesomeIcon className='text-white text-lg my-10 hidden' icon={faAdd}></FontAwesomeIcon> : null}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {SelectedLayout !== Student2Col1[0].layout ? <button className='bg-primary2 py-2 px-2 text-sm text-white rounded-md absolute left-24 bottom-52 opacity-0' id={Student2Col1[0].layout} onClick={() => handleUseLayout(Student2Col1, Student2Col2)}>Use Layout</button> : null}

                        </div>

                        {/* Student 3 */}
                        <div className=' relative ' onMouseOver={() => SelectedLayout !== Student3Col1[0].layout ? handleMouseEnter(Student3Col1[0].layout) : null} onMouseOut={() => SelectedLayout !== Student3Col1[0].layout ? handleMouseLeave(Student3Col1[0].layout) : null} >

                            <div className={`flex w-72 h-[26rem] cursor-pointer `}  >
                                {/* Column 1 */}
                                <div className='flex flex-col w-1/2 space-y-1'>
                                    {Student3Col1.map((item, index) => {
                                        return (
                                            <div className={`${item.state === 'deletable' ? 'bg-primary' : 'bg-gray-600'} text-center h-[50%] ${item.layout} `} key={item.id} id={SelectedLayout === item.layout ? item.id : null} onMouseOver={() => SelectedLayout === item.layout ? OnMouseEnterComp(item.id, item.state) : null} onMouseOut={() => SelectedLayout === item.layout ? OnMouseLeaveComp(item.id, item.state) : null} onClick={() => SelectedLayout === item.layout ? handleOnClickCol1(index, item.state, Student3Col1) : null}>
                                                <h1 className='text-white text-sm my-20'>{item.name}</h1>
                                                {item.state === 'deletable' ? <FontAwesomeIcon className='text-white text-lg my-20 hidden' icon={faTrash}></FontAwesomeIcon> : null}
                                                {item.state !== 'deletable' ? <FontAwesomeIcon className='text-white text-lg my-20 hidden' icon={faAdd}></FontAwesomeIcon> : null}
                                            </div>
                                        )
                                    })}
                                </div>

                                {/* Column 2 */}
                                <div className='flex flex-col w-1/2 space-y-1 ml-[0.10rem] '>
                                    {Student3Col2.map((item, index) => {
                                        return (
                                            <div className={`${item.state === 'deletable' ? 'bg-primary' : 'bg-gray-600'} text-center h-[19.3%] ${item.layout} `} key={item.id} id={SelectedLayout === item.layout ? item.id : null} onMouseOver={() => SelectedLayout === item.layout ? OnMouseEnterComp(item.id, item.state) : null} onMouseOut={() => SelectedLayout === item.layout ? OnMouseLeaveComp(item.id, item.state) : null} onClick={() => SelectedLayout === item.layout ? handleOnClickCol2(index, item.state, Student3Col2) : null}>
                                                <h1 className='text-white text-sm my-10'>{item.name}</h1>
                                                {item.state === 'deletable' ? <FontAwesomeIcon className='text-white text-lg my-10 hidden' icon={faTrash}></FontAwesomeIcon> : null}
                                                {item.state !== 'deletable' ? <FontAwesomeIcon className='text-white text-lg my-10 hidden' icon={faAdd}></FontAwesomeIcon> : null}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {SelectedLayout !== Student3Col1[0].layout ? <button className='bg-primary2 py-2 px-2 text-sm text-white rounded-md absolute left-24 bottom-52 opacity-0' id={Student3Col1[0].layout} onClick={() => handleUseLayout(Student3Col1, Student3Col2)}>Use Layout</button> : null}

                        </div>

                    </div>
                </div>

            </div>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </> : null)
}
