import ValidationErrors from "../constants/ValidationErrors"

const passwordValidator = (password) => {
    let value = String(password).trim()

    if (value.length == 0) {
        return ValidationErrors.passwordRequired
    }
    
    if (value.length < 8 || value.length > 45) {
        return ValidationErrors.passwordLength
    }

    return null
}

const usernameValidator = (username) => {
    let value = String(username).trim()

    if (value.length == 0) {
        return ValidationErrors.usernameRequired
    }

    if (value.length < 4 || value.length > 25) {
        return ValidationErrors.usernameLength
    }

    return null
}

const emailValidator = (email) => {
    let value = String(email).trim()
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if (value.length == 0) {
        return ValidationErrors.emailRequired
    }

    if (!value.toLowerCase().match(emailRegex)) {
        return ValidationErrors.emailInvalid
    }

    return null
}

const fullNameValidator = (fullName) => {
    let value = String(fullName).trim()
    let fullNameRegex = /^([A-Za-z\.\- ]+)$/

    if (value.length == 0) {
        return ValidationErrors.fullNameRequired
    }

    if (value.length < 3 || value.length > 100) {
        return ValidationErrors.fullnameInvalid
    }

    if (!value.match(fullNameRegex)) {
        return ValidationErrors.fullNameInvalid
    }

    return null
}

export { passwordValidator, usernameValidator, emailValidator, fullNameValidator };