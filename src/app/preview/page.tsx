"use client"

import NavBar from '@/components/layouts/NavBar'
import React from 'react'
import PreviewCard from './previewCard';
import { Provider } from "react-redux";
import { store } from "@/store";
import { AuthProvider } from '@/context/authContext';


const PreviewPage = () => {
    return (
        <div>
            <Provider store={store}>
                <AuthProvider>
                    <NavBar />
                    <PreviewCard />
                </AuthProvider>

            </Provider>
        </div>
    )
}

export default PreviewPage