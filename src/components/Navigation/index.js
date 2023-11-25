import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Post from '../Post/Post';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Confirmation from '../Confirmation';

function AuthenticatedRoute ({children}) {
    const auth = localStorage.getItem("isUserLoggedIn"); 
    if(!auth) {
      return <Navigate to="/login" />
    }
    return children;
}

const Navigation = () => {
    return (
        <Router>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/registration/confirm" element={<Confirmation />} />
            <Route exact path="/post" element={
            <AuthenticatedRoute>
              <Post />
            </AuthenticatedRoute>} >
            </Route>
            <Route exact path="/" element={
            <AuthenticatedRoute>
              <Post />
            </AuthenticatedRoute>} >
            </Route>
            <Route exact path='*' element={Login} />
          </Routes>
        </Router>
    )
}

export default Navigation;