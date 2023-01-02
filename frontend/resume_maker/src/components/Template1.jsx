import React, { useState, useEffect, useRef, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faAdd, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Bulb from '../assets/Bulb'
import Settings from '../assets/Settings'
import MyContents from '../assets/MyContents'
import ProfileImage from './ProfileImage'
import ComponentListContext from '../context/ComponentListContext'
import { LanguageComponents } from '../utils/Languages'
import { SkillComponent } from '../utils/Skills'
import { EducationComponent } from '../utils/Education'
import { WorkComponent } from '../utils/Work'
import { ProjectsComponent } from '../utils/Projects'
import { AchievementsComponent } from '../utils/Achievments'
import { InterestsComponent } from '../utils/Interests'
export default function Template1() {

    const user_data = JSON.parse(localStorage.getItem('user_data')).data
    const { List1, List2, setList2, setList1, USFormat, Title, Picture, Summary,
        Instruction, setInstruction, SettingsModal, setSettingsModal, dummyState, setdummyState,
        LanProfCompArray, setLanProfCompArray, SkillsCompArray, setSkillsCompArray, EducationCompArray, setEducationCompArray,
        ThemeColor, WorkCompArray, setWorkCompArray, ProjectsCompArray, setProjectsCompArray, AchievementsCompArray, setAchievementsCompArray,
        InterestsCompArray, setInterestsCompArray, MovableIndex, setMovableIndex
    } = useContext(ComponentListContext)



    const reflist1 = useRef([])
    const reflist2 = useRef([])




    reflist1.current = []
    reflist2.current = []


    const addreflist1 = (e) => {
        if (e && !reflist1.current.includes(e)) {
            reflist1.current.push(e)
        }
    }

    const addreflist2 = (e) => {
        if (e && !reflist2.current.includes(e)) {
            reflist2.current.push(e)
        }
    }
    function arraymove(arr, fromIndex, toIndex) {
        var element = arr[fromIndex];
        arr.splice(fromIndex, 1);
        arr.splice(toIndex, 0, element);
        return arr
    }

    // const handleMoveCompUp1 = React.useCallback(
    //     () => {
    //         // do nothing on top element
    //         if (MovableIndex !== 0) {
    //             console.log(MovableIndex)
    //             let previousItems = [...WorkCompArray]
    //             let temp = previousItems[MovableIndex - 1]
    //             previousItems[MovableIndex - 1] = previousItems[MovableIndex]
    //             previousItems[MovableIndex] = temp
    //             console.log(previousItems)
    //             setWorkCompArray(previousItems)
    //         }
    //     },
    //     [setWorkCompArray, WorkCompArray]
    // )

    // const handleMoveCompUp1 = (List, setList) => {

    //     let element = WorkCompArray[MovableIndex]
    //     let from = parseInt(MovableIndex)
    //     let to = from + 1
    //     let newArr = [...arraymove(WorkCompArray, from, to)]
    //     console.log(newArr)
    //     setWorkCompArray(newArr)
    //     console.log(WorkCompArray[1])
    // }

    useEffect(() => {

        let handler = (e) => {
            reflist1.current.map((ref) => {
                if (ref && !ref.contains(e.target)) {
                    const id = ref.id
                    const x = document.getElementsByClassName(id)
                    document.getElementById(`${id}menu`).classList.add('hidden')
                    for (let i of x) {
                        i.classList.remove('outline-dashed', 'outline-primary2')
                    }
                }
            })
            reflist2.current.map((ref) => {
                if (ref && !ref.contains(e.target)) {
                    const id = ref.id
                    const x = document.getElementsByClassName(id)
                    document.getElementById(`${id}menu`).classList.add('hidden')
                    for (let i of x) {
                        i.classList.remove('outline-dashed', 'outline-primary2')
                    }
                }
            })
        }
        document.addEventListener('mousedown', handler)


    },)

    const handleOnClick = (id, index) => {


        const x = document.getElementsByClassName(id)
        const menu = document.getElementById(`${id}menu`).classList.remove('hidden')
        for (let i of x) {
            i.classList.add('outline-dashed', 'outline-primary2')
            // i.setAttribute("style", `border-image: url('${Border}') 30 round`)
        }
    }

    const handleNewField = (id) => {
        if (id === 'language') {
            setLanProfCompArray(LanProfCompArray => [...LanProfCompArray, <LanguageComponents></LanguageComponents>])
            return
        }
        if (id === 'skills') {
            setSkillsCompArray(SkillsCompArray => [...SkillsCompArray, <SkillComponent></SkillComponent>])
            return
        }

        if (id === 'education') {
            setEducationCompArray(EducationCompArray => [...EducationCompArray, <EducationComponent></EducationComponent>])
            return
        }

        if (id === 'workExperience') {
            setWorkCompArray(WorkCompArray => [...WorkCompArray, <WorkComponent></WorkComponent>])
            return
        }

        if (id === 'personalProject') {
            setProjectsCompArray(ProjectsCompArray => [...ProjectsCompArray, <ProjectsComponent></ProjectsComponent>])
            return
        }

        if (id === 'achievements') {
            setAchievementsCompArray(AchievementsCompArray => [...AchievementsCompArray, <AchievementsComponent></AchievementsComponent>])
            return
        }

        if (id === 'interests') {
            setInterestsCompArray(InterestsCompArray => [...InterestsCompArray, <InterestsComponent></InterestsComponent>])
            return
        }


    }

    const DeleteComponent = (List, setList, index) => {
        let temp_state = [...List];
        let temp_element = { ...temp_state[index] };
        List[index].state = 'not_deletable'
        temp_element.display = 'hidden';
        temp_state[index] = temp_element;
        setList(temp_state);
    }

    const handleDeleteField = (id, List, setList, index) => {
        if (id === 'skills') {
            if (SkillsCompArray.length !== 0) {
                setSkillsCompArray(SkillsCompArray.slice(0, -1))
            }
            else {
                DeleteComponent(List, setList, index)
            }
            return
        }
        if (id === 'language') {
            if (LanProfCompArray.length !== 0) {
                setLanProfCompArray(LanProfCompArray.slice(0, -1))
            }
            else {
                DeleteComponent(List, setList, index)
            }
            return
        }

        if (id === 'education') {
            if (EducationCompArray.length !== 0) {
                setEducationCompArray(EducationCompArray.slice(0, -1))
            }
            else {
                DeleteComponent(List, setList, index)
            }
            return
        }

        if (id === 'workExperience') {
            if (WorkCompArray.length !== 0) {
                setWorkCompArray(WorkCompArray.slice(0, -1))
            }
            else {
                DeleteComponent(List, setList, index)
            }
            return
        }

        if (id === 'personalProject') {
            if (ProjectsCompArray.length !== 0) {
                setProjectsCompArray(ProjectsCompArray.slice(0, -1))
            }
            else {
                DeleteComponent(List, setList, index)
            }
            return
        }

        if (id === 'achievements') {
            if (AchievementsCompArray.length !== 0) {
                setAchievementsCompArray(AchievementsCompArray.slice(0, -1))
            }
            else {
                DeleteComponent(List, setList, index)
            }
            return
        }

        if (id === 'interests') {
            if (InterestsCompArray.length !== 0) {
                setInterestsCompArray(InterestsCompArray.slice(0, -1))
            }
            else {
                DeleteComponent(List, setList, index)
            }
            return
        }

    }

    return (
        <>
            <div className='bg-white w-[75rem] my-5 min-h-screen  rounded-md' >

                <div className='flex justify-between p-7 ' >

                    {/* Profile Pic */}
                    {Picture ? <ProfileImage></ProfileImage> : null}

                    {/* Current Title */}
                    {Title && <div className={`flex flex-col space-y-3 relative ${Title || Picture ? null : 'right-96'} `}>
                        <h1 className={`text-${ThemeColor} text-[32px] font-bold`}>{user_data && user_data.first_name} {user_data && user_data.last_name}</h1>
                        <input type="text" placeholder='Current title' className={`bg-white border border-white text-[24px] text-${ThemeColor} focus:outline-none placeholder:text-${ThemeColor} placeholder:text-[24px] `}
                        />
                    </div>
                    }
                    {/* Contact Info */}
                    <div className='flex flex-col space-y-4 '>
                        {/* Email */}
                        <div className='flex space-x-3 '>
                            <span><FontAwesomeIcon icon={faEnvelope} className={`text-${ThemeColor} text-lg`} ></FontAwesomeIcon></span>
                            <h1 className={`text-${ThemeColor}`}>{user_data && user_data.email}</h1>
                        </div>
                        {/* Phone */}
                        <div className='flex space-x-3'>
                            <span><FontAwesomeIcon icon={faPhone} className={`text-${ThemeColor} text-lg`}></FontAwesomeIcon></span>
                            <h1 className={`text-${ThemeColor}`}>{user_data && user_data.phone}</h1>
                        </div>
                    </div>



                </div>

                {/* Summary */}
                {Summary && <div className='mt-5 mx-7' >
                    <textarea type="text" maxLength="300"
                        className='bg-white text-[24px] overflow-hidden resize-none border border-white w-[50rem] focus:outline-none placeholder:text-black placeholder:text-[24px] '
                        placeholder='Short and engaging you pitch about yourself' />
                </div>}

                {/* Attributes */}

                <div className='flex w-full space-x-20 mx-3 pb-40'>

                    {/* Column-1 */}
                    <div className='flex flex-col w-[45%] space-y-7'>

                        {List1.map((item, index) => {
                            return (
                                <div className={`flex space-x-2 ${item.display === 'show' ? '' : 'hidden'}`} id={item.id} ref={addreflist1} key={item.id} >

                                    <div className={`hidden w-12 h-64 bg-[#425061] rounded-lg `} id={`${item.id}menu`}>
                                        <div className={`flex flex-col ${item.settings ? 'space-y-4 ' : 'space-y-7 '}relative`}>
                                            <span className='bg-primary rounded-full w-8 h-8 mx-auto mt-2 cursor-pointer hover:text-primary2' onClick={() => handleNewField(item.id)}><FontAwesomeIcon className='text-white p-[0.5rem]' icon={faAdd}></FontAwesomeIcon></span>

                                            {item.settings && <span className=' mx-auto  cursor-pointer hover:text-primary2 ' onClick={() => setSettingsModal(true)}><Settings></Settings></span>}
                                            <span className='mx-auto h-6 w-6 border border-white border-dashed rounded-full cursor-pointer' ><FontAwesomeIcon icon={faArrowUp} className='text-white px-[0.30rem]'></FontAwesomeIcon></span>
                                            <span className='mx-auto h-6 w-6 border border-white border-dashed rounded-full cursor-pointer'><FontAwesomeIcon icon={faArrowDown} className='text-white px-[0.30rem]'></FontAwesomeIcon></span>
                                            <span className=' mx-auto  cursor-pointer hover:text-primary2'><MyContents></MyContents></span>
                                            <span className='rounded-full w-6 h-6 bg-[#425061] font-bold border mx-auto border-white border-solid pb-4 pl-[0.35rem] text-white cursor-pointer hover:text-primary2'>?</span>
                                            <span className=' mx-auto  cursor-pointer hover:text-primary2' onClick={() => setInstruction(true)}><Bulb></Bulb></span>
                                            <span className='mx-auto mt-2 cursor-pointer hover:text-primary2' onClick={() => handleDeleteField(item.id, List1, setList1, index)}><FontAwesomeIcon className='text-white' icon={faTrash}></FontAwesomeIcon></span>

                                            {/* InstructionModal */}
                                            {Instruction ? <div id={`${item.id}InsModal`}>
                                                <div className={`flex flex-col absolute  w-[600px] h-[550px] ${item.settings ? '-top-7' : '-top-10'} space-y-5 left-[4.2rem] bubbleLeft  after:top-[40%]  inset-0 z-50 outline-none focus:outline-none`} key={item.id}>
                                                    {item.instructionModal && item.instructionModal[0]}
                                                </div>
                                                <div className='opacity-25 fixed inset-0 z-40 bg-black'></div></div>

                                                : null}

                                            {/* SettingsModal */}
                                            {SettingsModal ? <div id={`${item.id}SettingsModal`}>
                                                <div className={`flex flex-col absolute  w-[450px] ${item.id === 'skills' && 'h-[300px]'}${item.id === 'language' && 'h-[300px]'} ${item.id === 'education' && 'h-[150px]'} -top-1 space-y-5 left-[4.2rem] bubbleLeft ${item.id === 'skills' ? 'after:top-[28%]' : null} ${item.id === 'language' && 'after:top-[26%]'} ${item.id === 'education' && 'after:top-[50%]'}  inset-0 z-50 outline-none focus:outline-none`} key={item.id}>
                                                    {item.settingsModal && item.settingsModal[0]}
                                                </div>
                                                <div className='opacity-25 fixed inset-0 z-40 bg-black'></div></div>

                                                : null}
                                        </div>
                                    </div>

                                    <div className={`flex flex-col space-y-3 w-full h-full ${item.id}`} onClick={() => handleOnClick(item.id)} >
                                        {item.content.map((content) => {
                                            return (
                                                content
                                            )
                                        })}
                                    </div>
                                </div>)
                        })}

                    </div>

                    {/* Column-2 */}
                    <div className='flex flex-col space-y-7 w-[45%]'>

                        {List2.map((item, index) => {
                            return (
                                <div className={`flex space-x-2 ${item.display === 'show' ? '' : 'hidden'}`} id={item.id} ref={addreflist2} key={index}>


                                    <div className={`flex flex-col space-y-3 w-full h-full ${item.id}`} onClick={() => handleOnClick(item.id, index)} >
                                        {item.content.map((content) => {
                                            return (
                                                content
                                            )
                                        })}
                                    </div>

                                    <div className={`hidden w-12 h-64 bg-[#425061] rounded-lg `} id={`${item.id}menu`}>
                                        <div className={`flex flex-col ${item.settings ? 'space-y-4 ' : 'space-y-7 '}relative`}>
                                            <span className='bg-primary rounded-full w-8 h-8 mx-auto mt-2 cursor-pointer hover:text-primary2' onClick={() => handleNewField(item.id)}><FontAwesomeIcon className='text-white p-[0.5rem]' icon={faAdd}></FontAwesomeIcon></span>

                                            {item.settings && <span className=' mx-auto  cursor-pointer hover:text-primary2 ' onClick={() => setSettingsModal(true)}><Settings></Settings></span>}
                                            <span className=' mx-auto  cursor-pointer hover:text-primary2'><MyContents></MyContents></span>
                                            <span className='rounded-full w-6 h-6 bg-[#425061] font-bold border mx-auto border-white border-solid pb-4 pl-[0.35rem] text-white cursor-pointer hover:text-primary2'>?</span>
                                            <span className=' mx-auto  cursor-pointer hover:text-primary2' onClick={() => setInstruction(true)}><Bulb></Bulb></span>
                                            <span className='mx-auto mt-2 cursor-pointer hover:text-primary2' onClick={() => handleDeleteField(item.id, List2, setList2, index)}><FontAwesomeIcon className='text-white' icon={faTrash}></FontAwesomeIcon></span>

                                            {/* Instruction Modal */}
                                            {Instruction ? <div id={`${item.id}InsModal`}>
                                                <div className={`flex flex-col absolute  w-[600px] h-[550px] space-y-5  ${item.settings ? '-top-7' : '-top-10'} -left-[39rem] bubbleRight   after:top-[40%]  inset-0 z-50 outline-none focus:outline-none`} key={item.id}>
                                                    {item.instructionModal && item.instructionModal[0]}
                                                </div>
                                                <div className='opacity-25 fixed inset-0 z-40 bg-black'></div></div>

                                                : null}

                                            {/* Settings Modal */}
                                            {SettingsModal ? <div id={`${item.id}SettingsModal`}>
                                                <div className={`flex flex-col absolute  w-[500px] ${item.id === 'skills' && 'h-[300px]'} ${item.id === 'language' && 'h-[300px]'} space-y-5 -top-1 -left-[33rem] bubbleRight after:top-[26%]  inset-0 z-50 outline-none focus:outline-none`} key={item.id}>
                                                    {item.settingsModal && item.settingsModal[0]}
                                                </div>
                                                <div className='opacity-25 fixed inset-0 z-40 bg-black'></div></div>

                                                : null}
                                        </div>
                                    </div>
                                </div>)
                        })}

                    </div>

                </div>

            </div>
        </>
    )
}



