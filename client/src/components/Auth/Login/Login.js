import React from 'react';
import { passwordValidator, usernameEmailValidator } from '../../../helpers/validators/authValidator';
import AuthFloatingLabelField from '../_Shared/AuthFloatingLabelField';
import AuthForm from '../_Shared/AuthForm';
import toast from 'react-hot-toast';
import * as authService from '../../../services/authService';
import { useAuthContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();

    let fields = [
        { placeholder: "Username/Email", type: "text", name: "usernameEmail", id: "usernameEmail", label: "Username/Email", validatorFunc: usernameEmailValidator },
        { placeholder: "Password", type: "password", name: "password", id: "password", label: "Password", validatorFunc: passwordValidator },
    ]

    let formAttributes = {
        title: {
            'heading': 'Login',
            'text': 'Welcome back to CookBook'
        },
        link: {
            title: 'Register',
            url: '/auth/register'
        }
    }

    const authFields = () => {
        return fields.map(f => <AuthFloatingLabelField placeholder={f.placeholder} 
            name={f.name} type={f.type} id={f.id} label={f.label} 
            key={f.id} validatorFunc={f.validatorFunc}/>)
    }

    const submitFormHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let usernameEmail = formData.get('usernameEmail');
        let password = formData.get('password');

        authService.login(usernameEmail, password)
        .then((authData) => {
            login(authData);
            toast.success("Successfully logged in!", {
                duration: 3500
            })
            navigate('/');
        }).catch(err => {
            console.log(err);
            toast.error("Error");
        })
    }

    return (
        <AuthForm formAttributes={formAttributes}>
            <form action="" className="log-in" autoComplete="off" onSubmit={submitFormHandler}>
                { authFields() }
                <div className="auth-button">
                    <button type="submit">Login</button>
                </div>
            </form>
        </AuthForm>
    )
}

export default Login;