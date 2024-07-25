"use client"

import NavBar from '@/components/layouts/NavBar'
import React from 'react'
import { Provider } from "react-redux";
import { store } from "@/store";
import Home from './Home';

const HomePage = () => {
    return (
        <div className=''>
            <Provider store={store}>
                <Home />
            </Provider>
        </div>
    )
}

export default HomePage