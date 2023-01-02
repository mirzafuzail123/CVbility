import Work from '../utils/Work'
import Education from '../utils/Education'
import Skills from '../utils/Skills'
import Projects from '../utils/Projects'
import Achievments from '../utils/Achievments'
import Languages from '../utils/Languages'
import Interests from '../utils/Interests'
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
export const Student3Col1 = [

    {
        'id': 'education',
        'layout': 'Student3',
        'display': 'show',
        'settings': true,
        'settingsModal': [<EducationSettingsModal></EducationSettingsModal>],
        'state': 'deletable',
        'instructionModal': [<EducationInstructionModal></EducationInstructionModal>],
        'name': 'EDUCATION',
        'content': [<Education></Education>

        ]
    },
    {
        'id': 'achievements',
        'layout': 'Student3',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<AchievementInstructionModal></AchievementInstructionModal>],
        'name': 'ACHIEVEMENTS',
        'content': [<Achievments></Achievments>

        ]
    },



]

export const Student3Col2 = [
    {
        'id': 'workExperience',
        'layout': 'Student3',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<WorkInstructionModal></WorkInstructionModal>],
        'name': 'WORK EXPERIENCE',
        'content': [<Work></Work>
        ]
    },
    {
        'id': 'skills',
        'layout': 'Student3',
        'state': 'deletable',
        'settings': true,
        'settingsModal': [<SkillsSettingsModal></SkillsSettingsModal>],
        'display': 'show',
        'instructionModal': [<SkillsInstructionModal></SkillsInstructionModal>],
        'name': 'SKILLS',
        'content': [<Skills></Skills>

        ]
    },


    {
        'id': 'personalProject',
        'layout': 'Student3',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<ProjectInstructionModal></ProjectInstructionModal>],
        'name': 'Project Name',
        'content': [<Projects></Projects>

        ]
    },



    {
        'id': 'language',
        'layout': 'Student3',
        'display': 'show',
        'settings': true,
        'settingsModal': [<LanguageSettingsModal></LanguageSettingsModal>],
        'state': 'deletable',
        'instructionModal': [<LanguageInstructionModal></LanguageInstructionModal>],
        'name': 'LANGUAGE',
        'content': [<Languages></Languages>

        ]
    },

    {
        'id': 'interests',
        'layout': 'Student3',
        'display': 'show',
        'state': 'deletable',
        'instructionModal': [<InterestInstructionModal></InterestInstructionModal>],
        'name': 'INTERESTS',
        'content': [<Interests></Interests>

        ]
    }
]