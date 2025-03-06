import { createSlice } from "@reduxjs/toolkit";


const errorSlice = createSlice({
    name: "errorSlice",
    initialState: {
        errMessage: null,
    },
    reducers: {
        setErrorMessage: (state, action) => {
            state.errMessage = action.payload;
        },
        removeError: (state) => {
            state.errMessage = null;
        }
    }
});

export default errorSlice.reducer;

export const { setErrorMessage,removeError } = errorSlice.actions;