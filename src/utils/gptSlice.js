import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptPage: false,
        gptMoviesResult: null,   
        gptMoviesName: null,
        gptMessage: null,
        showLoader: false,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptPage = !state.showGptPage;
        },
        addGptMoviesResult: (state, action) => {
            const { tmdbResult , gptMovies,gptMessage} = action.payload;
            state.gptMoviesResult = tmdbResult;
            state.gptMoviesName = gptMovies;
            state.gptMessage = gptMessage;
        },
        clearGptMovies: (state) => {
            state.gptMoviesName = null;
            state.gptMoviesResult = null;
        },
        setShowLoader: (state,action) => {
            state.showLoader = action.payload;
        },
        clearGptResults: () => {
            return {
                showGptPage: false,
                gptMoviesResult: null,   
                gptMoviesName: null,
                gptMessage: null,
                showLoader: false,
            }
        }
    }
})

export default gptSlice.reducer;
export const {toggleGptSearchView,addGptMoviesResult ,clearGptMovies,setShowLoader,clearGptResults} = gptSlice.actions;