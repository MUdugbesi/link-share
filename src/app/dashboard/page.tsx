"use client"

import NavBar from '@/components/layouts/NavBar'
import React from 'react'
import { Provider } from "react-redux";
import { store } from "@/store";
import Home from './Hero';
import { AuthProvider } from '@/context/authContext';

const HomePage = () => {
    return (
        <div>
            <Provider store={store}>
                <AuthProvider>
                    <NavBar />
                    <Home />
                </AuthProvider>
            </Provider>
        </div>
    )
}

export default HomePage