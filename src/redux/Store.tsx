import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./slices";

const store = configureStore({
    reducer:{
        root: quizReducer
    }
})

export default store