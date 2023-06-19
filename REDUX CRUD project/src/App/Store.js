import { configureStore } from "@reduxjs/toolkit";
import { userData } from "../Reducers/Slice";

export const store= configureStore({
    reducer:{
        app:userData,

    }
})