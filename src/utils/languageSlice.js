import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    initialState: {
        choosenLanguage: "English",
    },
    reducers: {
        setLanguage: (state, action) => {
            state.choosenLanguage = action.payload;
        }
    }
});

export default languageSlice.reducer;
export const { setLanguage } = languageSlice.actions;