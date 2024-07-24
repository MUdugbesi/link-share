"use client"

import { createSlice } from "@reduxjs/toolkit";

// interface Profile {
//     firstName: string;
//     lastName: string;
//     email: string;
//     profilePicture?: File | null;
// }

// interface ProfileState {
//     profile: Profile | null;
// }

const initialState = {
    profile: []
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setUserProfile: (state, action) => {
            state.profile = action.payload;
        },
        clearUserProfile: (state) => {
            state.profile = [];
        },
    },
});

export const { setUserProfile, clearUserProfile } = profileSlice.actions;

export default profileSlice.reducer;
