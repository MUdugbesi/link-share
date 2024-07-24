"use client"

import NavBar from '@/components/layouts/NavBar'
import Profile from './Profile'
import React from 'react'
import { Provider } from "react-redux";
import { store } from "@/store";

const ProfilePage = () => {
    return (
        <div>
            <Provider store={store}>
                <NavBar />
                <Profile />
            </Provider>
        </div>
    )
}

export default ProfilePage