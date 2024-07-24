"use client"
import { configureStore } from '@reduxjs/toolkit';
import linkReducer from './Link';
import SavedLinks from './SavedLinks';
import profileReducer from './Profile'

// Configure the store
export const store = configureStore({
    reducer: {
        link: linkReducer,
        savedLink: SavedLinks,
        profile: profileReducer
    },
});

// Define RootState type for use in selectors and other parts of the app
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type for use in dispatching actions
export type AppDispatch = typeof store.dispatch;
