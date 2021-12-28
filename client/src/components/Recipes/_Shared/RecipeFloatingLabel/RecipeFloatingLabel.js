import React, { useState } from 'react';
import './RecipeFloatingLabel.css';

const RecipeFloatingLabel = ( { placeholder, type, name, id, label, validatorFunc }) => {
    let [ errors, setErrors ] = useState([]);

    const handleFieldChange = (e) => {
        let value = e.target.value
        handleValidationErrors(value)
    }

    const handleValidationErrors = (value) => {
        console.log(value, validatorFunc)
        if (validatorFunc) {
            let validationErrors = validatorFunc(value) ?? []
            setErrors(validationErrors)
        }
    }
    
    return (
        <div>
            <div className="recipe-floating-label">
            <input placeholder={placeholder} type={type} name={name} id={id} onChange={handleFieldChange}/>
            <label htmlFor={id}>{label}</label>
        </div>
        { errors.length > 0 ? <RecipeFieldValidator errorMsg = { errors } /> : null}
        </div>
    )
}

const RecipeFieldValidator = ({ errorMsg }) => (
    <span className="recipe-validation-error">{ errorMsg }</span>
)

export default RecipeFloatingLabel;