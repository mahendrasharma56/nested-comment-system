import { createSlice } from '@reduxjs/toolkit'
import { authUser } from './authActions'

const isUserLoggedIn = localStorage.getItem("isUserLoggedIn")?localStorage.getItem("isUserLoggedIn"):0;

const initialState = {
  loading: false,
  userInfo: null,
  isUserLoggedIn,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: {
    // login user
    [authUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [authUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload;
      state.isUserLoggedIn = payload.isUserLoggedIn;
    },
    [authUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})
export default authSlice.reducer