import { createSlice } from '@reduxjs/toolkit'
import { addEditComment } from './addCommentActions'

const initialState = {
  aeLoading: false,
  aeError: null,
  aeSuccess: false,
}

const addEditCommentSlice = createSlice({
  name: 'addEditComment',
  initialState,
  reducers: {},
  extraReducers: {
    // login user
    [addEditComment.pending]: (state) => {
      state.aeLoading = true
      state.aeError = null
    },
    [addEditComment.fulfilled]: (state, { payload }) => {
      state.aeLoading = false
      state.aeSuccess = true;
    },
    [addEditComment.rejected]: (state, { payload }) => {
      state.aeLoading = false
      state.aeError = payload
    },
  },
})

export default addEditCommentSlice.reducer;
