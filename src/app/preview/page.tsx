"use client"

import NavBar from '@/components/layouts/NavBar'
import React from 'react'
import PreviewCard from './previewCard';
import { Provider } from "react-redux";
import { store } from "@/store";

const PreviewPage = () => {
    return (
        <div>
            <Provider store={store}>
                <NavBar />
                <PreviewCard />
            </Provider>
        </div>
    )
}

export default PreviewPage