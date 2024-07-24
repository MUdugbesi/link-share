"use client"

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Link {
    id: string;
    platform: string;
    url: string;
}


interface LinkState {
    links: Link[];

}

const initialState: LinkState = {
    links: [
        { id: "1", platform: 'Github', url: 'https://www.github.com' }
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
