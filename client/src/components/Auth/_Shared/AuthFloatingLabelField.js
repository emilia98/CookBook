import React from 'react';

const AuthFloatingLabelField = ( { placeholder, type, name, id, label }) => {
    return (
        <div className="floating-label">
            <input placeholder={placeholder} type={type} name={name} id={id} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
};

export default AuthFloatingLabelField;