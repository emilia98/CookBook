import React from "react";
import './Auth.css';
import Login from './Login/Login';
import Register from './Register/Register';

import { Routes, Route, Navigate } from 'react-router-dom';

function Auth() {
    return (
        <Routes>
            
            <Route path="login" element={<Login />}>
            </Route>
            <Route path="register" element={<Register />}>
            </Route>
            <Navigate path="*" element={ <Navigate to="/" />}/>
        </Routes>
    )
}

export default Auth;