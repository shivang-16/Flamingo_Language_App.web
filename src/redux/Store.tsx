import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./slices";
import userSlice from "./userSlice";
const store = configureStore({
    reducer:{
        root: quizReducer,
        user: userSlice
    }
})

export default store