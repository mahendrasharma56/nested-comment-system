import { configureStore } from '@reduxjs/toolkit'
import registerReducer from '../features/user/registerSlice'
import loginReducer from '../features/user/authSlice'
import logoutReducer from '../features/user/logoutSlice'
import addCommentReducer from "../features/comment/addCommentSlice"
import commentReducer from "../features/comment/commentSlice"

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    logout: logoutReducer,
    addcomment: addCommentReducer,
    comment: commentReducer
  }
})
export default store
