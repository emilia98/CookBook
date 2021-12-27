import React from 'react';
import { emailValidator, fullNameValidator, passwordValidator, usernameValidator } from '../../../helpers/validators/authValidator';
import AuthFloatingLabelField from '../_Shared/AuthFloatingLabelField';
import AuthForm from '../_Shared/AuthForm';

function Register() {
    let fields = [
        { placeholder: "Full Name", type: "text", name: "fullName", id: "fullName", label: "Full Name", validatorFunc: fullNameValidator},
        { placeholder: "Username", type: "text", name: "username", id: "username", label: "Username", validatorFunc: usernameValidator },
        { placeholder: "Email", type: "text", name: "email", id: "email", label: "Email", validatorFunc: emailValidator },
        { placeholder: "Password", type: "password", name: "password", id: "password", label: "Password", validatorFunc: passwordValidator },
        // { placeholder: "Confirm Password", type: "password", name: "confirmPassword", id: "confirmPassword", label: "Confirm Password", valueToCompareTo:  }
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

    const authFields = () => {
        return fields.map(f => <AuthFloatingLabelField placeholder={f.placeholder} 
            name={f.name} type={f.type} id={f.id} label={f.label} 
            key={f.id} validatorFunc={f.validatorFunc}/>)
    }

    const submitFormHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let fullName = formData.get('fullName');
        let username = formData.get('username');
        let email = formData.get('email');
        let password = formData.get('password');
        // let confirmPassword = formData.get('confirmPassword');
    }

    /*
    let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then((authData) => {
                login(authData);
                addNotification('You logged in successfully', types.success);
                navigate('/dashboard');
            })
            .catch(err => {
                // TODO: show notification
                console.log(err);
            });
    */

    return (
        <AuthForm formAttributes={formAttributes}>
            <form action="" className="log-in" autoComplete="off" onSubmit={submitFormHandler}>
                { authFields() }
                <div className="auth-button">
                    <button type="submit">Register</button>
                </div>
            </form>
        </AuthForm>
    )
}

export default Register;