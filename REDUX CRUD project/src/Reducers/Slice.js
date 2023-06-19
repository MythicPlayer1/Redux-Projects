import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser=createAsyncThunk('createUser',async (data)=>{
    const response= await axios.post('https://648aec0617f1536d65e9f7c1.mockapi.io/CRUD',data).then((response)=>{
        console.log(response)
    })
})

export const userData=createSlice({
    name:'userData',
    initialState:{
        name:'',
        loadingL:false,
        error:''
    },
    
})

export default userData.reducer;