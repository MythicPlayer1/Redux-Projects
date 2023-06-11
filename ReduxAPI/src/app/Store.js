import { configureStore } from "@reduxjs/toolkit";
import gitUser from "../features/gitUserSlice";


export const store= configureStore({
    reducer:{
        storedApiDatas : gitUser
    }
    
})

