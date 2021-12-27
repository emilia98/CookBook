import React from "react";
import './Auth.css';
import Login from './Login/Login';
import Register from './Register/Register';

import { Routes, Route, Link } from 'react-router-dom';

function Auth() {
    return (
        <div>
            <h1>AUTH</h1>
            <div>
                <Link to="/auth/login">Login</Link>
                <Link to="/auth/register">Register</Link>
            </div>
            <Routes>
                <Route path="login" element={<Login />}>
                </Route>
                <Route path="register" element={<Register />}>
                </Route>
            </Routes>
        </div>
    )
}

export default Auth;

/*
<div class="container">
    <div class="auth-container">
        <div id="auth-form-view">
            <div class="auth-img">
                <img src="https://cdn.pixabay.com/photo/2016/12/10/21/26/food-1898194_1280.jpg" alt="" />
            </div>
            <div class="auth-container-form">
                <div class="auth-form">
                    <div class="title">
                        <h2>Login</h2>
                        <p>
                            Welcome back to CookBook.
                        </p>
                    </div>
                    <div class="form-auth">
                        <form action="" class="log-in" autocomplete="off">
                            <div class="floating-label">
                                <input placeholder="Username/Email" type="text" name="usernameEmail" id="usernameEmail" />
                                <label for="usernameEmail">Username/Email:</label>
                            </div>
                            <div class="floating-label">
                                <input placeholder="Password" type="password" name="password" id="password" />
                                <label for="password">Password:</label>
                            </div>
                            <div class="auth-button">
                                <button type="button">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="auth">
            <a routerLink="/auth/register">
                <span class="arrow"><i class="fas fa-chevron-left"></i></span>
                <span class="link-title">Register</span>
            </a>
        </div>
    </div>
    <div class="return" routerLink='/'>
        <i class="fas fa-home"></i>
    </div>
</div>
*/