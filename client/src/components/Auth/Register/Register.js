import React from 'react';
import AuthFloatingLabelField from '../_Shared/AuthFloatingLabelField';
import AuthForm from '../_Shared/AuthForm';

function Register() {
    let fields = [
        { placeholder: "Full Name", type: "text", name: "fullName", id: "fullName", label: "Full Name" },
        { placeholder: "Username", type: "text", name: "username", id: "username", label: "Username" },
        { placeholder: "Email", type: "email", name: "email", id: "email", label: "Email" },
        { placeholder: "Password", type: "password", name: "password", id: "password", label: "Password" },
        { placeholder: "Confirm Password", type: "password", name: "confirmPassword", id: "confirmPassword", label: "Confirm Password" }
    ]

    let formAttributes = {
        title: {
            'heading': 'Register',
            'text': 'Welcome to CookBook'
        },
        imgClass: 'register-img',
        link: {
            title: 'Login',
            url: '/auth/login'
        },
        isRegisterForm: true
    }

    return (
        <AuthForm formAttributes={formAttributes}>
            <form action="" className="log-in" autoComplete="off" >
                {fields.map(f => <AuthFloatingLabelField placeholder={f.placeholder} name={f.name} type={f.type} id={f.id} label={f.label} key={f.id} />)}
                <div className="auth-button">
                    <button type="button">Register</button>
                </div>
            </form>
        </AuthForm>
    )
}

export default Register;