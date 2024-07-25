"use client"

import React from 'react'
import SignupForm from './Signup'
import { AuthProvider } from '@/context/authContext';
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const SignUp = () => {
    return (
        <div>
            <AuthProvider>
                <SignupForm />
                <ToastContainer />
            </AuthProvider>
        </div>
    )
}

export default SignUp