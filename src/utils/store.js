import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"

import movieReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import languageReducer from "./languageSlice";
import errorReducer from "./errorSlice";


const store = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        gpt: gptReducer,
        language: languageReducer,
        errorSlice:errorReducer,
    }
});

export default store;