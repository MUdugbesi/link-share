"use client"

import React from 'react';
import LoginForm from './Login';
import { AuthProvider } from '@/context/authContext';
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Login = () => {
  return (
    <div>
      <AuthProvider>
        <LoginForm />
        <ToastContainer />
      </AuthProvider>
    </div>
  )
}

export default Login