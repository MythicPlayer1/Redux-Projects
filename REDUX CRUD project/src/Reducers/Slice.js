import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createUser=createAsyncThunk('createUser',async (data, {rejectWithValue})=>{
  const response= await fetch('https://648aec0617f1536d65e9f7c1.mockapi.io/CRUD',{
      method:'POST',
      headers:{
          'Content-Type':'application/json'
      }, 
      body: JSON.stringify(data)
  })
  try {
      const result=response.json()
      console.log(result)
      return(result)
      
  } catch (error) {
       
    return(rejectWithValue(error))
  }
});
export const userData=createSlice({
    name:'userData',
    initialState:{
        user:[],
        loading:false,
        error:null
    },
    reducers:{

    },
    extraReducers:{
        [createUser.pending]:(state)=>{
            state.loading=true

        },
        [createUser.fulfilled]:(state, action)=>{
            state.loading=false;
            state.user.push(action.payload);

        },
        [createUser.rejected]:(state, action)=>{
            state.loading=false
            state.error=(action.payload)

        }
    }
    
})
console.log(userData.user)

export default userData.reducer;