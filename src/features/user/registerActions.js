import { createAsyncThunk } from '@reduxjs/toolkit'

export const registerUser = createAsyncThunk(
  'register',
   async ({ name, email, password }, { rejectWithValue }) => {
    const registerInfo = {name,email,password}
    localStorage.setItem("userInfo",JSON.stringify(registerInfo))
    return localStorage.getItem("userInfo");
   } 
)