import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SavedLink {
    id: string;
    platform: string;

}

interface SavedLinkState {
    savedLinks: SavedLink[];

}

const initialState: SavedLinkState = {
    savedLinks: [],

};

const SavedLinkSlice = createSlice({
    name: 'savedlink',
    initialState,
    reducers: {
        addToPhone(state, action: PayloadAction<SavedLink>) {
            const indexProductId = state.savedLinks.findIndex(item => item.id === action.payload.id);
            if (indexProductId >= 0) {
                return
            } else {
                state.savedLinks.push(action.payload)
            }
        },
        removeFromPhone: (state, action: PayloadAction<string>) => {
            state.savedLinks = state.savedLinks.filter(link => link.id !== action.payload);
        },
    },
});

export const { addToPhone, removeFromPhone } = SavedLinkSlice.actions;

export default SavedLinkSlice.reducer;
