import { createAsyncThunk } from '@reduxjs/toolkit'
import { posts } from '../../mockData/posts';

export const getComment = createAsyncThunk(
    'getComment',
    () => {
      return localStorage.getItem("comments")?JSON.parse(localStorage.getItem("comments")):posts.comments;
    } 
)
