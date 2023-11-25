import { createAsyncThunk } from '@reduxjs/toolkit'

export const authUser = createAsyncThunk(
  'login',
   async ({ email, password }, { rejectWithValue }) => {
    if(!localStorage.getItem("userInfo")) return rejectWithValue("User does not exist!");
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if(userInfo.email === email && userInfo.password === password) {
        localStorage.setItem("isUserLoggedIn", 1);
        return {
            userInfo: localStorage.getItem("userInfo"),
            isUserLoggedIn: localStorage.getItem("isUserLoggedIn")
        };
    }else{
        return rejectWithValue("Email/Password is not matched");
    }
   } 
)