import { createAsyncThunk } from '@reduxjs/toolkit'

export const logoutUser = createAsyncThunk(
  'logout',
   async () => {
     return localStorage.removeItem("isUserLoggedIn");
   } 
)