"use client"

import { createSlice } from "@reduxjs/toolkit";

interface Profile {
    firstName: string;
    lastName: string;
    email: string;
    profilePicture?: File | null;
}

interface ProfileState {
    profile: Profile | null;
}

const initialState: ProfileState = {
    profile: {
        firstName: 'Marvelous',
        lastName: 'Udugbesi',
        email: 'udugbesimarves@gmail.com',
        profilePicture: null
    }
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setUserProfile: (state, action) => {
            state.profile = action.payload;
        },
    },
});

export const { setUserProfile } = profileSlice.actions;

export default profileSlice.reducer;
