"use client"

import NavBar from '@/components/layouts/NavBar'
import React from 'react'
import { Provider } from "react-redux";
import { store } from "@/store";
import Home from './Home';
import { AuthProvider } from '@/context/authContext';

const HomePage = () => {
    return (
        <div className=''>
            <Provider store={store}>
                <AuthProvider>
                    <Home />
                </AuthProvider>
            </Provider>
        </div>
    )
}

export default HomePage