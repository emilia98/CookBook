import React, { useState } from 'react';

const AuthFloatingLabelField = ( { placeholder, type, name, id, label, validatorFunc }) => {
    // let [isTouched, setTouched] = useState(false)
    let [errors, setErrors] = useState([])
    let [fieldValue, setFieldValue] = useState("")

    const handleFieldChange = (e) => {
        handleValidationErrors(e.target.value)
    }

    const handleValidationErrors = (value) => {
        if (validatorFunc) {
            let validationErrors = validatorFunc(value) ?? []
            setErrors(validationErrors)
        }
    }

    return (
        <div>
            <div className="floating-label">
            <input placeholder={placeholder} type={type} name={name} id={id} onChange={handleFieldChange}/>
            <label htmlFor={id}>{label}</label>
        </div>
        { errors.length > 0 ? <AuthFieldValidationError errorMsg = {errors } /> : null}
        </div>
    )
};

const AuthFieldValidationError = ( { errorMsg }) => (
    <span class="validation-error">{errorMsg}</span>
)

export default AuthFloatingLabelField;