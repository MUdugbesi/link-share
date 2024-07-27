"use client"

import NavBar from '@/components/layouts/NavBar'
import Profile from './Profile'
import React from 'react'
import { Provider } from "react-redux";
import { store } from "@/store";
import { AuthProvider } from '@/context/authContext';
import { ToastContainer } from 'react-toastify';

const ProfilePage = () => {
    return (
        <div>
            <Provider store={store}>
                <AuthProvider>
                    <NavBar />
                    <Profile />
                    <ToastContainer />
                </AuthProvider>

            </Provider>
        </div>
    )
}

export default ProfilePage