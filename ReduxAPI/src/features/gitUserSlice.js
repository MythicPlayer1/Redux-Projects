import { createAsyncThunk, createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";

export const apiData= createAsyncThunk("userData", async ()=>{
    const response = await fetch("https://api.github.com/users");
    const result = response.json();
    return result;
})

export const gitUser= createSlice({
    name: 'userData',
    initialState:{
        users:[],
        loading:false,
        orror:null
    },
   extraReducers:{
       [apiData.pending]:(state)=>{
           state.loading=ture;

       },
       [apiData.loading]:(state, action)=>{
           state.loading=false;
           state.users=action.payload;

       },
       [apiData.rejected]:(state, action)=>{
           state.loading=true,
           state.error=action.payload
       }
   }
})

export default gitUser.reducer;