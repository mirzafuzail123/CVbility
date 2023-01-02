import TemplateContext from './TemplateContext'
import axiosInstance from "../utils/axiosInstance";
import React, { useState } from 'react'
import axios from 'axios';

export default function TemplateState(props) {

    const [template, settemplate] = useState(null)
    const [data, setdata] = useState(null)

    const AllTemplates = async () => {
        const response = await axiosInstance.get('resume_templates/')
        settemplate(response.data)
    }

    const Login = async (data) => {
        const response = await axiosInstance.post('login/', data)
        localStorage.setItem('user_data', JSON.stringify(response.data))
        setdata(response.data)
    }

    const UserRegister = async (data) => {
        const response = await axiosInstance.post('register/', data)
        localStorage.setItem('user_data', JSON.stringify(response.data))
        setdata(response.data)

    }
    return (
        <TemplateContext.Provider value={{ AllTemplates, template, Login, data, UserRegister }}>
            {props.children}
        </TemplateContext.Provider>
    )
}
