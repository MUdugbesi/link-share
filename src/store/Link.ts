"use client"

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Link {
    id: string;
    platform: string;
    url: string;
}


export interface LinkState {
    links: Link[];

}

const initialState: LinkState = {
    links: [
       
    ],

};

const LinkSlice = createSlice({
    name: 'link',
    initialState,
    reducers: {
        addLink: (state, action: PayloadAction<Link>) => {
            state.links.push(action.payload);
        },
        removeLink: (state, action: PayloadAction<string>) => {
            state.links = state.links.filter(link => link.id !== action.payload);
        },
    },
});

export const { addLink, removeLink } = LinkSlice.actions;

export default LinkSlice.reducer;
