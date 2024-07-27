"use client"

import React from 'react';
import LoginForm from './Login';
import { AuthProvider } from '@/context/authContext';


const Login = () => {
  return (
    <div className='max-sm:w-[375px]'>
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    </div>
  )
}

export default Login