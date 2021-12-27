import React from 'react';
import { Link } from 'react-router-dom';

const AuthForm = (props) => {
    let { formAttributes, children } = props
    console.log(formAttributes)
    return (
        <div className="container">
            <div className="auth-container">
                <div id="auth-form-view" className={ formAttributes.isRegisterForm ? "register-form" : "" }>
                    <div className="auth-img">
                        <img src="https://cdn.pixabay.com/photo/2016/12/10/21/26/food-1898194_1280.jpg" alt="" />
                    </div>
                    <div className="auth-container-form">
                        <div className="auth-form">
                            <div className="title">
                                <h2>{ formAttributes.title.heading }</h2>
                                <p>
                                    { formAttributes.title.text }
                                </p>
                            </div>
                            <div className="form-auth">
                                { children }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="auth">
                    <Link to={ formAttributes.link.url }>
                        <span className="arrow"><i className="fas fa-chevron-left"></i></span>
                        <span className="link-title">{ formAttributes.link.title }</span>
                    </Link>
                </div>
            </div>
            <Link className="return" to="/">
                <i className="fas fa-home"></i>
            </Link>
        </div>
    )
}

export default AuthForm;