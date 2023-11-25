import { createSlice } from '@reduxjs/toolkit'
import { logoutUser } from './logoutActions'

const initialState = {
  loading: false,
  error: null,
  success: false,
}

const logoutSlice = createSlice({
  name: 'logout',
  initialState,
  reducers: {},
  extraReducers: {
    // login user
    [logoutUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [logoutUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true;
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})
export default logoutSlice.reducer