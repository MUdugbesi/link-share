"use client"

import React from 'react'
import SignupForm from './Signup'
import { AuthProvider } from '@/context/authContext'

const SignUp = () => {
    return (
        <div>
            <AuthProvider>
                <SignupForm />
            </AuthProvider>
        </div>
    )
}

export default SignUp