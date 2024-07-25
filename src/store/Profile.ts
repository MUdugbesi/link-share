"use client"

import { createSlice } from "@reduxjs/toolkit";

interface Profile {
    firstName: string;
    lastName: string;
    email: string;
    profilePicture?: File;
}

interface ProfileState {
    profile: Profile;
}

const initialState: ProfileState = {
    profile: {
        firstName: 'Marvelous',
        lastName: 'Udugbesi',
        email: 'udugbesimarves@gmail.com',
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
