import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import Work from '../utils/Work'
import Education from '../utils/Education'
import Skills from '../utils/Skills'
import Projects from '../utils/Projects'
import Achievments from '../utils/Achievments'
import Languages from '../utils/Languages'
import Interests from '../utils/Interests'
import ComponentListContext from './ComponentListContext'

import { LanguageComponents } from '../utils/Languages'
import { SkillComponent } from '../utils/Skills'
import { EducationComponent } from '../utils/Education'
import { WorkComponent } from '../utils/Work'
import { ProjectsComponent } from '../utils/Projects'
import { AchievementsComponent } from '../utils/Achievments'
import { InterestsComponent } from '../utils/Interests'

import EducationInstructionModal from '../components/EducationInstructionModal'
import WorkInstructionModal from '../components/WorkInstructionModal'
import SkillsInstructionModal from '../components/SkillsInstructionModal'
import ProjectInstructionModal from '../components/ProjectInstructionModal'
import AchievementInstructionModal from '../components/AchievementInstructionModal'
import LanguageInstructionModal from '../components/LanguageInstructionModal'
import InterestInstructionModal from '../components/InterestInstructionModal'

import EducationSettingsModal from '../components/EducationSettingsModal'
import SkillsSettingsModal from '../components/SkillsSettingsModal'
import LanguageSettingsModal from '../components/LanguageSettingsModal'
import InterestsSettingModal from '../components/InterestsSettingModal'




import React, { useState } from 'react'

export default function ComponentList(props) {

    const [USFormat, setUSFormat] = useState(true)
    const [Title, setTitle] = useState(true)
    const [Picture, setPicture] = useState(true)
    const [Summary, setSummary] = useState(true)
    const [Icon, setIcon] = useState(true)
    const [Instruction, setInstruction] = useState(false)
    const [SettingsModal, setSettingsModal] = useState(false)
    const [CoursesPerRow, setCoursesPerRow] = useState(1)
    const [SkillsSettingInfoGraphic, setSkillsSettingInfoGraphic] = useState('None')
    const [InfoGraphic, setInfoGraphic] = useState('None')    //This is Skills Info Graphic
    const [Intensify, setIntensify] = useState(false)    //This is Skills Intensify
    const [InterestsSettingInfoGraphic, setInterestsSettingInfoGraphic] = useState('None')
    const [InterestsInfoGraphic, setInterestsInfoGraphic] = useState('None')
    const [LanguageSettingInfoGraphic, setLanguageSettingInfoGraphic] = useState('None')
    const [LanguageInfographic, setLanguageInfographic] = useState('None')


    const [dummyState, setdummyState] = useState(false)
    const [LanProfCompArray, setLanProfCompArray] = useState([<LanguageComponents></LanguageComponents>])
    const [SkillsCompArray, setSkillsCompArray] = useState([<SkillComponent></SkillComponent>])
    const [EducationCompArray, setEducationCompArray] = useState([<EducationComponent></EducationComponent>])
    const [WorkCompArray, setWorkCompArray] = useState([<WorkComponent></WorkComponent>])
    const [ProjectsCompArray, setProjectsCompArray] = useState([<ProjectsComponent></ProjectsComponent>])
    const [AchievementsCompArray, setAchievementsCompArray] = useState([<AchievementsComponent></AchievementsComponent>])
    const [InterestsCompArray, setInterestsCompArray] = useState([<InterestsComponent></InterestsComponent>])

    const [Font, setFont] = useState('')
    const [FontSize, setFontSize] = useState('medium')
    const [ThemeColor, setThemeColor] = useState('black')
    const [DateSeparator, setDateSeparator] = useState('/')
    const [Eng, setEng] = useState('English US')

    const [Proficiency, setProficiency] = useState('Professional Proficiency')

    const [LanProffirst, setLanProffirst] = useState('Elementary Proficiency')
    const [LanProfsecond, setLanProfsecond] = useState('Limited Work Proficiency')
    const [LanProfthird, setLanProfthird] = useState('Professional Work Proficiency')
    const [LanProfforth, setLanProfforth] = useState('Full Professional Proficiency')
    const [LanProffifth, setLanProffifth] = useState('Native or bilingual Proficiency')

    const [MovableIndex, setMovableIndex] = useState(null)

    const [List1, setList1] = useState([
        {
            'id': 'education',
            'display': 'show',
            'state': 'deletable',
            'settings': true,
            'settingsModal': [<EducationSettingsModal></EducationSettingsModal>],
            'instructionModal': [<EducationInstructionModal></EducationInstructionModal>],
            'componentsList': EducationCompArray,
            'setcomponentsList': setEducationCompArray,
            'name': 'EDUCATION',
            'content': [<Education></Education>

            ]
        },
        {
            'id': 'workExperience',
            'display': 'show',
            'state': 'deletable',
            'instructionModal': [<WorkInstructionModal></WorkInstructionModal>],
            'componentsList': WorkCompArray,
            'setcomponentsList': setWorkCompArray,
            'name': 'WORK EXPERIENCE',
            'content': [<Work></Work>
            ]
        },


    ])
    const [List2, setList2] = useState([
        {
            'id': 'skills',
            'display': 'show',
            'settings': true,
            'state': 'deletable',
            'instructionModal': [<SkillsInstructionModal></SkillsInstructionModal>],
            'settingsModal': [<SkillsSettingsModal></SkillsSettingsModal>],
            'setcomponentsList': setSkillsCompArray,
            'setcomponentsList': setSkillsCompArray,
            'name': 'SKILLS',
            'content': [<Skills></Skills>

            ]
        },

        {
            'id': 'personalProject',
            'display': 'show',
            'state': 'deletable',
            'instructionModal': [<ProjectInstructionModal></ProjectInstructionModal>],
            'componentsList': ProjectsCompArray,
            'setcomponentsList': setProjectsCompArray,
            'name': 'Project Name',
            'content': [<Projects></Projects>

            ]
        },

        {
            'id': 'achievements',
            'display': 'show',
            'state': 'deletable',
            'instructionModal': [<AchievementInstructionModal></AchievementInstructionModal>],
            'componentsList': AchievementsCompArray,
            'setcomponentsList': setAchievementsCompArray,
            'name': 'ACHIEVEMENTS',
            'content': [<Achievments></Achievments>

            ]
        },

        {
            'id': 'language',
            'display': 'show',
            'settings': true,
            'state': 'deletable',
            'settingsModal': [<LanguageSettingsModal></LanguageSettingsModal>],
            'instructionModal': [<LanguageInstructionModal></LanguageInstructionModal>],
            'componentsList': LanProfCompArray,
            'setcomponentsList': setLanProfCompArray,
            'name': 'LANGUAGE',
            'content': [<Languages></Languages>

            ]
        },

        {
            'id': 'interests',
            'display': 'show',
            'settings': true,
            'state': 'deletable',
            'instructionModal': [<InterestInstructionModal></InterestInstructionModal>],
            'settingsModal': [<InterestsSettingModal></InterestsSettingModal>],
            'componentsList': InterestsCompArray,
            'setcomponentsList': setInterestsCompArray,
            'name': 'INTERESTS',
            'content': [<Interests></Interests>

            ]
        },])

    return (
        <ComponentListContext.Provider value={{
            List1, List2, setList1, setList2,
            USFormat, Title, Picture, Summary, setPicture, setTitle, setSummary, setUSFormat,
            Icon, setIcon, Instruction, setInstruction, SettingsModal, setSettingsModal,
            CoursesPerRow, setCoursesPerRow, SkillsSettingInfoGraphic, setSkillsSettingInfoGraphic, dummyState, setdummyState,
            LanguageSettingInfoGraphic, setLanguageSettingInfoGraphic, LanProfCompArray, setLanProfCompArray,
            SkillsCompArray, setSkillsCompArray, ThemeColor, setThemeColor, DateSeparator, setDateSeparator,
            Eng, setEng, Font, setFont, EducationCompArray, setEducationCompArray, WorkCompArray, setWorkCompArray,
            ProjectsCompArray, setProjectsCompArray, AchievementsCompArray, setAchievementsCompArray,
            InterestsCompArray, setInterestsCompArray, InfoGraphic, setInfoGraphic,
            InterestsInfoGraphic, setInterestsInfoGraphic, InterestsSettingInfoGraphic, setInterestsSettingInfoGraphic,
            Intensify, setIntensify, LanguageInfographic, setLanguageInfographic,
            LanProffirst, setLanProffirst, LanProfsecond, setLanProfsecond, LanProfthird, setLanProfthird, LanProfforth, setLanProfforth,
            LanProffifth, setLanProffifth, Proficiency, setProficiency, MovableIndex, setMovableIndex, FontSize, setFontSize
        }}>
            {props.children}
        </ComponentListContext.Provider>
    )
}




