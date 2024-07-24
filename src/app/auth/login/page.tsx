"use client"

import React from 'react';
import LoginForm from './Login';
import { AuthProvider } from '@/context/authContext';

const Login = () => {
  return (
    <div>
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    </div>
  )
}

export default Login