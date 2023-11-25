import { createAsyncThunk } from '@reduxjs/toolkit'

export const addEditComment = createAsyncThunk(
  'addEditComment',
   async (comments, { rejectWithValue }) => {
    localStorage.setItem("comments",comments);
    return comments;
   } 
)