import { createSlice } from '@reduxjs/toolkit'
import { getComment } from './commentActions'
import { posts } from '../../mockData/posts';

const comments = localStorage.getItem("comments")?JSON.parse(localStorage.getItem("comments")):posts.comments;

const initialState = {
  cLoading: false,
  cError: null,
  comments
}

const getCommentSlice = createSlice({
    name: 'getComment',
    initialState,
    reducers: {},
    extraReducers: {
      // login user
      [getComment.pending]: (state) => {
        state.cLoading = true
        state.cError = null
      },
      [getComment.fulfilled]: (state, { payload }) => {
        state.cLoading = false
        state.comments = payload;
      },
      [getComment.rejected]: (state, { payload }) => {
        state.cLoading = false
        state.cError = payload
      },
    },
  })

export default getCommentSlice.reducer;
